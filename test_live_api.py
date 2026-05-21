import asyncio
import json
import ssl
import certifi
import websockets
import google.auth
import google.auth.transport.requests

async def test_connection():
    print("Acquiring credentials...")
    creds, project_id = google.auth.default(
        scopes=["https://www.googleapis.com/auth/cloud-platform"]
    )
    if not creds.valid:
        creds.refresh(google.auth.transport.requests.Request())
    
    token = creds.token
    location = "us-central1"
    model = "gemini-3.1-flash-live-preview-04-2026"
    
    host = f"{location}-aiplatform.googleapis.com"
    service_url = f"wss://{host}/ws/google.cloud.aiplatform.internal.LlmBidiService/BidiGenerateContent"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
    }
    
    ssl_context = ssl.create_default_context(cafile=certifi.where())
    
    print(f"Connecting to {service_url}...")
    try:
        async with websockets.connect(
            service_url,
            additional_headers=headers,
            ssl=ssl_context,
            ping_interval=None,
        ) as ws:
            print("Connected! Sending setup message...")
            
            model_uri = f"projects/{project_id}/locations/{location}/publishers/google/models/{model}"
            
            setup_msg = {
                "setup": {
                    "model": model_uri,
                    "generation_config": {
                        "response_modalities": ["VIDEO"],
                        "speech_config": {
                            "voice_config": {
                                "prebuilt_voice_config": {
                                    "voice_name": "orus"
                                }
                            },
                            "language_code": "en-US"
                        }
                    },
                    "avatar_config": {
                        "avatar_name": "Jay"
                    }
                }
            }
            
            print("Sending payload:")
            print(json.dumps(setup_msg, indent=2))
            
            await ws.send(json.dumps(setup_msg))
            
            print("Setup message sent. Waiting for response...")
            while True:
                response = await ws.recv()
                print("Received response:")
                print(response)
                
    except Exception as e:
        print("Connection error occurred:")
        print(e)

if __name__ == "__main__":
    asyncio.run(test_connection())
