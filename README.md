# Gemini Live API - Live Avatar Demo

This repository contains a demo application showcasing the **Gemini Live API** with a real-time audio/video avatar interface. The demo is tailored as a virtual car consultant for a Mahindra auto showroom.

## Project Structure

- **`liveapi-demo-app/`**: The main application folder.
  - **`backend/`**: Python backend using `aiohttp` to act as a proxy between the frontend and Vertex AI Gemini Live API.
  - **`frontend/`**: Vanilla JS/HTML/CSS frontend for the user interface, handling microphone input and rendering the avatar output.
- **`test_live_api.py`**: A standalone Python script to test the connection to the Gemini Live API directly from the terminal.
- **`user_guide.txt`**: The user guide for the Private Preview of the Custom Avatar feature.

## Features

- **Real-time Multimodal Interaction:** Supports low-latency audio and video streaming.
- **Live Avatar:** Visualizes the AI persona ("Mahi") responding in real-time.
- **Configurable Settings:** Allows adjusting voice, location, model, and sensitivity settings via the UI.

## Prerequisites

- **Google Cloud Project:** You need a GCP project with the Vertex AI API enabled.
- **Authentication:** The application relies on Application Default Credentials (ADC). Ensure you have run `gcloud auth application-default login` or have a service account key configured if running outside of GCP.

## Local Development

### Backend
1. Navigate to the backend directory:
   ```bash
   cd liveapi-demo-app/backend
   ```
2. Install dependencies (preferably in a virtual environment):
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python main.py --project_id=YOUR_PROJECT_ID
   ```
   The server will start on port 8080 by default.

### Frontend
The frontend is served by the backend. Once the backend is running, open `http://localhost:8080` in your browser.

## Deployment to Cloud Run

The application is configured for source-based deployment to Cloud Run.

To deploy, run the following command from the repository root:

```bash
gcloud run deploy liveapi-demo \
  --source liveapi-demo-app \
  --region us-central1 \
  --allow-unauthenticated \
  --project YOUR_PROJECT_ID \
  --set-env-vars PROJECT_ID=YOUR_PROJECT_ID
```

## Current Configuration

- **Model:** `gemini-3.1-flash-live-preview-04-2026`
- **Voice:** `orus`
- **Avatar:** `Jay` (Built-in)
