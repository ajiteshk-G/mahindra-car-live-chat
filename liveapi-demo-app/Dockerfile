FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PROJECT_ID="mb-poc-352009"
ENV LOCATION="us-central1"
ENV PORT=8080

WORKDIR /app/backend

CMD ["python", "main.py"]
