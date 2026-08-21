import asyncio
import json
import os
from typing import Any

from aiohttp import web
import aiohttp_cors
from absl import app, flags, logging
from google import genai
import google.genai.chats
import websockets

import session_management
import websocket_handler
import get_credentials
import database

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Navigate to the frontend folder (assuming it's a sibling to the backend folder)
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")
# Constants
DEBUG = False
SERVICE_URL = "wss://{host}/ws/google.cloud.aiplatform.internal.LlmBidiService/BidiGenerateContent"
FR_SIMULATOR_MODEL = "gemini-2.5-pro"
FR_SIMULATOR_PROMPT = """
You're a function response simulator, your job is to provide a simulated function response, you'll be provided with all function names and their descriptions.

Then you'll be given a function name to be triggered and input arguments. You should generate a function response based your understanding of the function.

If a function response should follow a specific format, it will be described in the function description. If you cannot find any function response format, just return a string that you think best fit the function response.
If there are any issues with the arguments, such as type is incorrect, required arguments not provided, in these kind of cases, you should return a string like raise Exception.

"""

SESSION_MANAGER = session_management.SessionManager()

# Flags
PROJECT_ID = flags.DEFINE_string("project_id", None, "Google Cloud Project ID.")

# --- ADAPTER CLASS ---


class AiohttpToWebsocketsAdapter:
    """Adapts an aiohttp WebSocketResponse to look like a websockets.LegacyProtocol"""

    def __init__(self, aio_ws: web.WebSocketResponse, request_path="/ws"):
        self.aio_ws = aio_ws
        self._path = request_path

    async def send(self, data):
        await self.aio_ws.send_str(data)

    async def recv(self):
        msg = await self.aio_ws.receive()
        if msg.type in (
            web.WSMsgType.CLOSE,
            web.WSMsgType.CLOSING,
            web.WSMsgType.CLOSED,
        ):
            raise websockets.exceptions.ConnectionClosed(None, None)
        return msg.data

    async def close(self, code=1000, reason=""):
        await self.aio_ws.close(code=code, message=reason.encode())

    @property
    def path(self):
        return self._path


# --- HANDLERS ---


async def aiohttp_websocket_handler(request: web.Request) -> web.WebSocketResponse:
    """Bridge between Cloud Run (aiohttp) and the shared WebsocketHandler."""
    session_id = request.query.get("session_id")
    if not session_id:
        return web.Response(text="Missing session_id", status=400)

    session_handler = await SESSION_MANAGER.search_item(session_id)
    if not session_handler:
        return web.Response(text="No config record for session", status=404)

    # Prepare aiohttp WS
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    # Wrap the aiohttp WS in the adapter to satisfy the shared dependency
    adapted_ws = AiohttpToWebsocketsAdapter(ws, request_path=request.path_qs)

    liveapi_service_url = SERVICE_URL.format(host=session_handler.ws_host)
    try:
        # Pass the ADAPTED websocket here
        wb_handler = websocket_handler.WebsocketHandler(
            liveapi_service_url, session_id, adapted_ws, debug_mode=DEBUG
        )

        # This starts the internal proxy tasks in your shared handler
        session_handler.websocket_handler = wb_handler
        await wb_handler.start_websocket()

    except Exception:
        logging.exception("Error in bridged websocket handler")
    finally:
        logging.info("WebSocket connection cleanup for session %s", session_id)
        # Always clean up the session to prevent memory leaks if the client
        # disconnects without sending a 'disconnect' command.
        await SESSION_MANAGER.delete_item(session_id)

    return ws


async def handle_fr_post_request(request: web.Request):
    """
    Handles incoming POST requests, forwards the content to the Gemini chat session,
    and returns the model's response.
    """

    try:
        request_body: dict[str, Any] = await request.json()
        # The entire body is the query for the function call simulation
        session_id = request_body.get("session_id")
        chat_session: session_management.SessionBaseModel | None = (
            await SESSION_MANAGER.search_item(session_id)
        )
        if not chat_session:
            return web.json_response(
                {"error": "Chat session not initialized"}, status=503
            )

        fr_chat_session = chat_session.fr_session
        query_object = request_body.pop("objective")
        logging.debug("query object:\n%s", query_object)

        query = json.dumps(request_body)
        logging.debug("Received query for Gemini:\n%s", query)

        if query_object == "fr_generate":
            current_content = [
                genai.types.Part(
                    text="Now generate function response this function call."
                ),
                genai.types.Part(text=query),
            ]
        elif query_object == "fc_definition":
            current_content = [
                genai.types.Part(text="The definition of the functions are:"),
                genai.types.Part(text=query),
            ]
        else:
            raise Exception(f"Unknown query objective type {query_object}")

        response = await fr_chat_session.send_message(current_content)
        logging.debug("Sending back frontend with response:\n%s", response.text)
        return web.json_response({"response": response.text})
    except Exception as e:
        logging.exception(f"Error processing POST request")
        return web.json_response({"error": str(e)}, status=500)


async def handle_control_request(request: web.Request):
    """Your existing control logic."""
    try:
        request_body = await request.json()
        command = request_body.get("command")
        session_id = request_body.get("session_id")
        session_handler = await SESSION_MANAGER.search_item(session_id)

        if command == "connect":
            location = request_body.get("location")
            endpoint = request_body.get("endpoint")

            ws_host = f"{location}-{endpoint}"

            logging.info(
                "Websocket host for session %s is set to: %s", session_id, ws_host
            )

            if session_handler and session_handler.websocket_handler:
                return web.json_response({"error": "Already running"}, status=409)

            gemini_chat_session, used_project_id = await asyncio.to_thread(
                initialize_gemini_chat_session, location
            )
            session_handler = session_management.SessionBaseModel(
                session_id=session_id, ws_host=ws_host, fr_session=gemini_chat_session
            )
            await SESSION_MANAGER.add_item(session_id, session_handler)
            return web.json_response(
                {
                    "status": "Session initialized.",
                    "project_id": used_project_id,
                }
            )

        return web.json_response({"error": "Invalid command"}, status=400)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


def initialize_gemini_chat_session(location: str):
    project_id = PROJECT_ID.value or os.environ.get("GOOGLE_CLOUD_PROJECT") or os.environ.get("PROJECT_ID")
    if not project_id:
        _, project_id = get_credentials.get_credentials()
        if not project_id:
            project_id = "mb-poc-352009"
            logging.info(f"Using hardcoded fallback project ID: {project_id}")
        else:
            logging.info(f"Auto-detected project ID: {project_id}")

    logging.info(
        f"Initializing Gemini chat session with project {project_id}, location {location}..."
    )
    client = genai.Client(vertexai=True, project=project_id, location=location)
    return (
        client.aio.chats.create(
            model=FR_SIMULATOR_MODEL,
            config=genai.types.GenerateContentConfig(
                system_instruction=FR_SIMULATOR_PROMPT
            ),
        ),
        project_id,
    )


async def handle_save_lead(request: web.Request):
    """Save or update customer lead information."""
    try:
        data = await request.json()
        session_id = data.get("session_id")
        customer_name = data.get("customer_name") or data.get("name")
        model_of_interest = data.get("model_of_interest") or data.get("model")
        channel = data.get("channel", "ARENA")
        transcript = data.get("transcript", "")
        status = data.get("status", "Auto-Qualified Inquiry")

        if not session_id or not customer_name or not model_of_interest:
            return web.json_response({"error": "Missing required fields: session_id, customer_name, model_of_interest"}, status=400)

        result = await asyncio.to_thread(
            database.save_or_update_lead,
            session_id=session_id,
            customer_name=customer_name,
            model_of_interest=model_of_interest,
            channel=channel,
            transcript=transcript,
            status=status
        )
        return web.json_response(result)
    except Exception as e:
        logging.exception("Error saving lead")
        return web.json_response({"error": str(e)}, status=500)


async def handle_get_leads(request: web.Request):
    """Retrieve all captured customer leads."""
    try:
        leads = await asyncio.to_thread(database.get_all_leads)
        return web.json_response({"leads": leads})
    except Exception as e:
        logging.exception("Error retrieving leads")
        return web.json_response({"error": str(e)}, status=500)


async def handle_update_transcript(request: web.Request):
    """Update conversation transcript for a session."""
    try:
        data = await request.json()
        session_id = data.get("session_id")
        transcript = data.get("transcript", "")
        customer_name = data.get("customer_name") or data.get("name")
        model_of_interest = data.get("model_of_interest") or data.get("model")
        channel = data.get("channel", "ARENA")

        if not session_id:
            return web.json_response({"error": "Missing session_id"}, status=400)

        result = await asyncio.to_thread(
            database.update_lead_transcript,
            session_id=session_id,
            transcript=transcript,
            customer_name=customer_name,
            model_of_interest=model_of_interest,
            channel=channel
        )
        return web.json_response(result)
    except Exception as e:
        logging.exception("Error updating transcript")
        return web.json_response({"error": str(e)}, status=500)


MAHINDRA_AGENT_SYSTEM_PROMPT = """You are Kabir, an expert, enthusiastic male AI Showroom Specialist from Mahindra Auto & Mahindra Electric Origin SUV Virtual Showroom.
You represent Mahindra across all SUV and vehicle categories:
- Authentic 4x4 SUVs: Thar ROXX (5-Door), Thar (3-Door), Scorpio-N (The Big Daddy of SUVs), Scorpio Classic.
- Tech & Luxury SUVs: XUV700, XUV 3XO.
- Born Electric & Electric Origin SUVs: BE 6e (Born EV Sport Coupe with 682km range), XEV 9e (Luxury Electric Origin SUV Coupe with triple screens and 656km range), XUV400 EV (456km range).
- Tough Utilities & Pickups: Bolero Neo, Bolero Neo+, Bolero, Marazzo, Bolero Camper & Maxx Pik-Up.

ALL INDIAN LANGUAGES & MULTILINGUAL CAPABILITY (MANDATORY):
- You MUST understand and respond fluently in ALL Indian languages:
  * Hindi (हिन्दी)
  * English & Hinglish
  * Tamil (தமிழ்)
  * Telugu (తెలుగు)
  * Kannada (ಕನ್ನಡ)
  * Malayalam (മലയാളം)
  * Marathi (मराठी)
  * Gujarati (ગુજરાતી)
  * Bengali (বাংলা)
  * Punjabi (ਪੰਜਾਬੀ)
  * Odia (ଓଡ଼ିଆ)
  * Urdu (اردو)
  * Assamese (অসমীया)
- If the customer speaks or asks in ANY Indian language, immediately answer in that EXACT SAME Indian language with native fluency, cultural politeness, and appropriate regional phrasing.
- If the customer asks in English or mixed Hinglish/Tanglish/etc., respond naturally in that same mixed style.


*** STEP-BY-STEP CONFIRMATION PROTOCOL FOR TEST DRIVE / TEST RIDE (MANDATORY REQUIREMENT) ***
- Test rides must ALWAYS be provided in the customer's same city.
- YOU MUST CONFIRM ON EACH STEP BEFORE YOU PROCEED:

  * STEP 1 (HOME vs SHOWROOM PREFERENCE):
    Ask whether they want the test drive delivered at their Home (Doorstep) or if they would like to visit the Showroom:
    (In Hindi): "[Name] ji, kya aap test drive apne ghar par mangwana chahte hain ya hamare Showroom aakar dekhna chahenge?"
    (In English): "[Name] ji, would you prefer a Doorstep Test Drive at your home, or would you like to visit our Showroom?"

  * STEP 2 (COLLECT ADDRESS WITH PIN CODE):
    Ask for their local Address and area PIN code:
    (In Hindi): "Bahut badhiya! Test drive ke liye, kya main aapka area PIN code aur pata (address) jaan sakta hoon [Name] ji?"
    (In English): "Wonderful! Could you please share your area PIN code and address, [Name] ji?"

  * STEP 3 (CONFIRM ADDRESS FIRST BEFORE ASKING FOR TIME/DATE):
    - If Showroom visit: invoke find_nearest_showroom(city='...', pincode='...', channel='...') to get the live Google Maps showroom.
    - Re-state the address / nearest showroom and EXPLICITLY ask the customer to confirm if the address is OK:
      (In Hindi): "Aapne pata [Address/PIN] bataya hai [aur hamara nazdeeki showroom [Showroom Name], [Address] hai]. Kya yeh address bilkul sahi hai [Name] ji?"
      (In English): "You mentioned [Address/PIN] [and our nearest showroom is [Showroom Name]]. Is this address accurate and convenient for you, [Name] ji?"
    - *** CRITICAL: WAIT FOR THE CUSTOMER TO CONFIRM (e.g. 'Haan', 'Yes', 'Theek hai', 'OK') BEFORE PROCEEDING TO STEP 4. ***

  * STEP 4 (ASK FOR DATE & TIME):
    - Only after the customer confirms the address is OK, ask for their preferred Date and Time:
      (In Hindi): "Dhanyavaad! Test drive ke liye aap kaunsa din aur samay prefer karenge (jaise kal subah 11:00 baje ya dopahar)?"
      (In English): "Thank you! What date and time would you prefer for the test drive (e.g. tomorrow at 11:00 AM or afternoon)?"

  * STEP 5 (CHECK SLOT AVAILABILITY & OFFER NEXT SLOT IF UNAVAILABLE):
    - Invoke check_test_drive_slots(model_name='...', pincode='...', date='...').
    - IF the requested slot is NOT available or fully booked:
      Politely inform the customer and immediately suggest the next earliest available slot:
      (In Hindi): "Kshama chahta hoon [Name] ji, us samay ka slot booked hai. Hamare paas agla slot [Next Available Slot 1] ya [Next Available Slot 2] uplabdh hai. Kya inme se koi samay aapko chalega?"
      (In English): "I apologize [Name] ji, that slot is currently occupied. Our next available slot is at [Next Available Slot 1] or [Next Available Slot 2]. Would either of these work for you?"

  * STEP 6 (FINAL BOOKING & WHATSAPP DISPATCH):
    - Once the date & time are mutually confirmed, immediately invoke:
      book_test_drive(customer_id='...', model_name='...', test_drive_type='HOME_DOORSTEP' or 'SHOWROOM', pincode='...', pickup_address='...', preferred_date_time='...', phone_number='{phone}').
    - Reassure the customer:
      (In Hindi): "Bahut badhiya [Name] ji! Aapka test drive book ho gaya hai. Main aapke WhatsApp number {phone} par booking ID, samay, address aur showroom location map bhej raha hoon."
      (In English): "Great [Name] ji! Your test drive is confirmed. I am sending the confirmation details, slot time, and location map directly to your WhatsApp number {phone}."
  * If customer asks only for digital brochure / pricing quotation:
    Invoke send_brochure_and_quote_whatsapp(customer_id='...', model_name='...', phone_number='{phone}') and say: "Main poori brochure aur price quote aapke number {phone} par WhatsApp kar deta hoon."

STRICT GUARDRAILS:
1. OFFERS & ON-ROAD PRICE:
   - If customer asks about any discounts, festive offers, exchange bonus, consumer schemes, or ON-ROAD price:
     Inform them that applicable offers and on-road price will be shared by our authorized Mahindra Sales Team during showroom visit / booking.
   - Quote the official EX-SHOWROOM price accurately.
2. COMPETITOR COMPARISON DEFLECTION:
   - If customer asks about Tata (Curvv EV, Nexon EV, Safari, Harrier), Hyundai (Creta, Ioniq 5), Kia (EV6, Seltos), Toyota (Fortuner, Innova), or other brands:
     Do NOT provide any information, specs, or comparison regarding the competitor brand.
     Instead, highlight the relevant market-leading Mahindra SUV in that same segment (e.g. BE 6e, XEV 9e, XUV700, Scorpio-N, Thar ROXX, XUV 3XO).
3. Keep the response natural, warm, and concise (under 35 words)."""

async def handle_dialogue_turn(request: web.Request):
    """Generate agent Kabir's response turn and sync cleanly with the database transcript."""
    try:
        data = await request.json()
        session_id = data.get("session_id")
        customer_message = (data.get("customer_message") or "").strip()
        customer_name = data.get("customer_name") or "Valued Customer"
        model_of_interest = data.get("model_of_interest") or "Thar ROXX"
        channel = data.get("channel", "AUTHENTIC")

        if not session_id or not customer_message:
            return web.json_response({"error": "Missing session_id or customer_message"}, status=400)

        project_id = PROJECT_ID.value or os.environ.get("GOOGLE_CLOUD_PROJECT", "mb-poc-352009")
        genai_client = genai.Client(vertexai=True, project=project_id, location="us-central1")

        prompt = f"Customer Name: {customer_name}\nModel of Interest: {model_of_interest} ({channel})\nCustomer says: {customer_message}"
        
        resp = await asyncio.to_thread(
            genai_client.models.generate_content,
            model="gemini-2.5-flash",
            contents=prompt,
            config=dict(system_instruction=MAHINDRA_AGENT_SYSTEM_PROMPT, max_output_tokens=600)
        )
        agent_reply = resp.text.strip() if resp and resp.text else f"जी {customer_name} जी, महिंद्रा {model_of_interest} के बारे में हमारे पास पूरी जानकारी उपलब्ध है।"

        closing_patterns = [
            r"\b(no\s*more|no\s*questions?|don'?t\s*have|dont\s*have|nothing\s*else|that'?s\s*all|bas\s*itna|koi\s*aur\s*nahi|kuch\s*nahi|aur\s*kuch\s*nahi|no\s*thanks?|nahi\s*bas|nahi\s*shukriya|shukriya|dhanyawad|thank\s*you|thanks|bye|goodbye|all\s*good|no\s*further)\b",
            r"(धन्यवाद|थैंक\s*यू|बस\s*इतना\s*ही|कोई\s*सवाल\s*नहीं|कुछ\s*नहीं|बाय|अलविदा|போதும்|நன்றி|ధన్యవాదాలు|చాలు|ಧನ್ಯವಾದಗಳು|ಸಾಕು|काही\s*नाही|ধন্যবাদ|આભાર|നന്ദി)"
        ]
        import re
        is_call_ended = any(re.search(pat, customer_message, re.IGNORECASE) for pat in closing_patterns)

        # Atomically append this turn to Datastore and SQLite
        await asyncio.to_thread(
            database.append_dialogue_turn,
            session_id=session_id,
            customer_text=customer_message,
            agent_text=agent_reply,
            customer_name=customer_name,
            model_of_interest=model_of_interest,
            channel=channel
        )

        return web.json_response({
            "agent_response": agent_reply,
            "customer_text": customer_message,
            "session_id": session_id,
            "is_call_ended": is_call_ended
        })
    except Exception as e:
        logging.exception("Error in handle_dialogue_turn")
        return web.json_response({"agent_response": "जी, मैं आपकी पूरी मदद करूंगा।", "error": str(e)}, status=200)


async def serve_index(request):
    return web.FileResponse(os.path.join(FRONTEND_DIR, "index.html"))


async def create_app():
    app = web.Application()
    cors = aiohttp_cors.setup(
        app,
        defaults={
            "*": aiohttp_cors.ResourceOptions(
                allow_credentials=True,
                expose_headers="*",
                allow_headers="*",
                allow_methods="*",
            )
        },
    )

    # API and WS Routes
    cors.add(app.router.add_post("/api/post_endpoint", handle_fr_post_request))
    cors.add(app.router.add_post("/api/control", handle_control_request))
    cors.add(app.router.add_post("/api/leads", handle_save_lead))
    cors.add(app.router.add_get("/api/leads", handle_get_leads))
    cors.add(app.router.add_post("/api/leads/transcript", handle_update_transcript))
    cors.add(app.router.add_post("/api/dialogue_turn", handle_dialogue_turn))
    app.router.add_get("/ws", aiohttp_websocket_handler)

    # Static Files
    app.router.add_get("/", serve_index)
    app.router.add_static("/frontend/", path=FRONTEND_DIR, name="frontend")

    return app


async def main_async():
    logging.set_verbosity(logging.DEBUG if DEBUG else logging.INFO)
    app = await create_app()
    port = int(os.environ.get("PORT", 8080))

    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, "0.0.0.0", port)
    await site.start()

    logging.info(f"Server unified on port {port}")
    await asyncio.Event().wait()


if __name__ == "__main__":
    app.run(lambda argv: asyncio.run(main_async()))
