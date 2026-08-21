# Mahindra Auto Virtual Experience Center - Gemini Live API & AI Avatar Demo

An interactive, production-grade Virtual Showroom experience powered by Google's **Gemini Live API** (`gemini-3.1-flash-live-preview-04-2026`) with a real-time multimodal audio/video avatar interface tailored for **Mahindra Auto & Mahindra Electric Origin SUVs** (covering Authentic 4x4 SUVs, Tech & Luxury SUVs, Born Electric, and Tough Commercial Utilities).

---

## 🌟 Key Features

### 1. Dual Video Communication Layout (Live Avatar + Customer Video)
- **Side-by-Side Video Call Experience**:
  - **Left Pane**: **Kabir (AI Consultant)** — Real-time lip-sync video avatar rendered with low-latency bidirectional video/audio streaming.
  - **Right Pane**: **You (Customer)** — Auto-starts user camera feed in a mirrored preview with live recording indicator (`🔴 YOU (LIVE)`).
- **Responsive Layout**: If the camera is disabled, Kabir expands smoothly to a full-width stage.

### 2. Complete Mahindra Vehicle Portfolio & Dynamic Backdrop Switching
- As the user speaks or asks about any vehicle, the showroom backdrop automatically transitions to high-definition visuals of that car:
  - **Authentic 4x4 SUVs**: Thar ROXX (5-Door), Thar (3-Door), Scorpio-N (*"The Big Daddy of SUVs"*), Scorpio Classic.
  - **Tech & Luxury SUVs**: XUV700, XUV 3XO.
  - **Born Electric & Electric Origin ([mahindraelectricsuv.com](https://www.mahindraelectricsuv.com/))**:
    - **BE 6e**: Pure Electric INGLO Sport SUV Coupe (up to 682 km range, 175kW ultra-fast DC charging).
    - **XEV 9e**: Flagship Electric Origin Luxury SUV Coupe with world-first Triple 12.3-inch Panoramic Cockpit Displays (656 km range).
    - **XEV 9S**: Executive Electric Origin Luxury SUV with first-class rear lounge recline seating.
    - **XUV400 EV**: All-electric high-performance SUV with copper styling.
  - **Tough Utilities & Pickups**: Bolero Neo, Bolero Neo+, Bolero, Marazzo, Bolero Camper & Maxx Pik-Up.

### 3. Step-by-Step Test Drive Confirmation Protocol
- Strictly guided 6-step confirmation flow when a customer requests a test drive or test ride:
  1. **Home vs Showroom Preference**: Doorstep home delivery vs authorized showroom visit.
  2. **Address & PIN Code Collection**: Captures area 6-digit PIN code and street address.
  3. **Explicit Address Confirmation**: Re-states address/showroom and pauses for explicit customer confirmation before date/time selection.
  4. **Date & Time Preference**: Asks for preferred date and time slot.
  5. **Slot Check & Fallback**: Validates availability and suggests immediate next slots if occupied.
  6. **Booking & WhatsApp Dispatch**: Finalizes booking ID and dispatches details, slot time, and Google Maps showroom location directly via WhatsApp.

### 4. Enterprise CRM & Lead Auto-Qualification
- Persistent storage in **Google Cloud Datastore** (with local SQLite fallback).
- Auto-extracts customer names and vehicle interests from speech and syncs multi-turn conversational transcripts in real-time.
- Interactive **"📋 Leads & Inquiries"** dashboard modal with full transcript viewer and status pills.

### 5. Multilingual Native Fluency
- Native support for Hindi (हिन्दी), Indian English, Hinglish, Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Marathi (मराठी), Gujarati (ગુજરાતી), Bengali (বাংলা), Punjabi (ਪੰਜਾਬੀ), Odia (ଓଡ଼ିଆ), etc.

### 6. Strict Guardrails & Competitor Deflection
- **Offers & On-Road Price**: Ex-showroom pricing quoted accurately; on-road pricing and festive/exchange offers deferred to dealership teams.
- **Competitor Deflection**: Deflects questions about competitor models (Tata, Hyundai, Kia, Toyota) and recommends the corresponding market-leading Mahindra SUV.
- **Graceful Call Conclusion**: Monitors audio playback to ensure Kabir completely finishes speaking his entire farewell turn before closing the session.

---

## 🏗️ Architecture & Project Structure

```
mahindra-live-avatar-demo/
├── README.md
├── cloudbuild.yaml
├── Dockerfile
└── liveapi-demo-app/
    ├── backend/
    │   ├── main.py                  # aiohttp async web server & dialogue engine
    │   ├── websocket_handler.py     # Bidirectional WebSocket proxy to Vertex AI
    │   ├── database.py              # Google Cloud Datastore & SQLite CRM manager
    │   └── requirements.txt
    └── frontend/
        ├── index.html               # Responsive showroom UI & dual video stage
        ├── styles.css               # Modern glassmorphic theme & layout styling
        ├── script.js                # Showroom state, camera handling & speech recognition
        ├── gemini-live-api.js       # WebSocket client & Gemini Live tool handlers
        ├── live-media-manager.js    # AudioWorklet PCM & MediaSource video player
        ├── pcm-processor.js         # 24kHz raw PCM AudioWorklet processor
        └── assets/                  # High-definition vehicle showroom assets
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Python 3.11+
- Google Cloud Project with Vertex AI API enabled (`mb-poc-352009`)
- Google Cloud Application Default Credentials (ADC): `gcloud auth application-default login`

### 2. Install Dependencies
```bash
cd liveapi-demo-app/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 3. Run the Server Locally
```bash
export GOOGLE_CLOUD_PROJECT="mb-poc-352009"
export PORT=8080
python main.py --project_id=mb-poc-352009
```
Open **`http://localhost:8080`** (or `http://<hostname>:8080`) in your browser.

---

## ☁️ Google Cloud Run Deployment

Deploy directly from source using the Google Cloud SDK:

```bash
gcloud run deploy mahindra-live-avatar-demo \
    --source liveapi-demo-app \
    --project mb-poc-352009 \
    --region us-central1 \
    --allow-unauthenticated \
    --set-env-vars PROJECT_ID=mb-poc-352009,LOCATION=us-central1 \
    --timeout 3600 \
    --memory 2Gi \
    --cpu 2 \
    --session-affinity \
    --quiet
```

### Production Endpoint
- **Live URL**: `https://mahindra-live-avatar-demo-1047195478355.us-central1.run.app`

---

## ⚙️ Model & Avatar Configuration

- **Live Model**: `gemini-3.1-flash-live-preview-04-2026`
- **Voice**: `orus` (Male Consultant)
- **Avatar**: `Jay` (Default multimodal avatar stream)
- **Modality**: `VIDEO` (Real-time avatar video stream)
- **Locale**: `hi-IN` (Multilingual)
