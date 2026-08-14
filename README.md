# Maruti Suzuki Virtual Showroom - Gemini Live API & AI Avatar Demo

This repository contains an interactive Virtual Showroom demo application powered by the **Gemini Live API** with a real-time multimodal audio/video avatar interface tailored for **Maruti Suzuki India** (covering both ARENA and NEXA premium channels).

## Key Features

- **Left-Side AI Avatar & Voice Chat:** Interactive real-time consultant ("Tara") responding with low-latency bidirectional video and audio streaming.
- **Dynamic Background Car Switching:** As the user speaks, asks, or types about any vehicle (e.g. *Grand Vitara*, *Swift*, *Brezza*, *Fronx*, *Jimny*, *Dzire*, *Invicto*, *Baleno*, *Ertiga*, *XL6*, *WagonR*, etc.), the entire showroom stage backdrop automatically transitions to high-definition visuals of that car.
- **Complete Vehicle Range:** Covers all 16 Maruti Suzuki models across ARENA & NEXA (SUVs, 4x4, Premium Hatchbacks, Sedans, MPVs, Strong Hybrids, and EVs).
- **Interactive Lineup Drawer:** Filter by category (SUVs, Hatchbacks, Sedans, MPVs, Hybrid/EV) or channels (NEXA / ARENA) to explore pricing, fuel efficiency, powertrains, and safety ratings.
- **5-Star Global NCAP & Hybrid Knowledge:** Deep knowledge base for intelligent recommendations, comparison, and test-drive bookings.

## Project Structure

- **`liveapi-demo-app/`**:
  - **`backend/`**: Python `aiohttp` backend bridging client WebSockets to Vertex AI Gemini Live API (`wss://us-central1-aiplatform.googleapis.com/.../BidiGenerateContent`).
  - **`frontend/`**: Modern HTML5/CSS3/JavaScript responsive web interface with dynamic car transitions, glassmorphism, and media streaming.
- **`test_live_api.py`**: Standalone terminal test client for Gemini Live API WebSocket validation.

## Local Execution

### 1. Install Backend Dependencies
```bash
cd liveapi-demo-app/backend
uv venv .venv
uv pip install -r requirements.txt
```

### 2. Run the Local Server
```bash
GOOGLE_CLOUD_PROJECT=mb-poc-352009 .venv/bin/python main.py --project_id=mb-poc-352009
```
The server will start on port `8080` (accessible at `http://localhost:8080` or `http://<cloudtop-hostname>:8080`).

## Model & Avatar Configuration

- **Live Model:** `gemini-3.1-flash-live-preview-04-2026`
- **Voice:** `orus`
- **Avatar:** `Jay` (Default multimodal avatar stream)
- **Modality:** `VIDEO` (Real-time avatar video stream)
