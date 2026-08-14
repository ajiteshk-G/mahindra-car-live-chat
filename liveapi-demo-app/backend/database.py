"""
Persistent Lead & Inquiry Database Module for Maruti Suzuki AI Showroom
Supports Google Cloud Datastore / Firestore (project: mb-poc-352009) with local SQLite fallback.
"""

import os
import sqlite3
import datetime
from absl import logging

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT", os.environ.get("PROJECT_ID", "mb-poc-352009"))
SQLITE_DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "leads.db")

_datastore_client = None

def get_datastore_client():
    global _datastore_client
    if _datastore_client is None:
        try:
            from google.cloud import datastore
            _datastore_client = datastore.Client(project=PROJECT_ID)
            logging.info(f"Initialized Cloud Datastore client for project {PROJECT_ID}")
        except Exception as e:
            logging.warning(f"Could not initialize Cloud Datastore: {e}. Using SQLite fallback.")
            _datastore_client = False
    return _datastore_client if _datastore_client is not False else None


def init_sqlite_db():
    try:
        conn = sqlite3.connect(SQLITE_DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS customer_leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT UNIQUE,
                customer_name TEXT NOT NULL,
                model_of_interest TEXT NOT NULL,
                channel TEXT,
                transcript TEXT,
                call_date TEXT NOT NULL,
                status TEXT DEFAULT 'Auto-Qualified Inquiry'
            );
        """)
        conn.commit()
        conn.close()
    except Exception as e:
        logging.error(f"Error initializing SQLite database: {e}")

init_sqlite_db()


def save_or_update_lead(session_id: str, customer_name: str, model_of_interest: str, channel: str = "ARENA", transcript: str = "", status: str = "Auto-Qualified Inquiry"):
    """Saves or updates a customer lead record in Cloud Datastore (or SQLite fallback)."""
    client = get_datastore_client()
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()

    if client:
        try:
            key = client.key("CustomerLead", str(session_id))
            entity = client.get(key)
            if not entity:
                entity = client.datastore.Entity(key=key) if hasattr(client, 'datastore') else __import__('google.cloud.datastore', fromlist=['Entity']).Entity(key=key)
                entity['call_date'] = datetime.datetime.now(datetime.timezone.utc)
            
            entity.update({
                'session_id': str(session_id),
                'customer_name': str(customer_name).strip(),
                'model_of_interest': str(model_of_interest).strip(),
                'channel': str(channel).strip().upper(),
                'transcript': str(transcript),
                'status': str(status),
                'last_updated': datetime.datetime.now(datetime.timezone.utc)
            })
            client.put(entity)
            logging.info(f"Lead saved to Cloud Datastore: {customer_name} ({model_of_interest})")
            return {"success": True, "source": "datastore", "session_id": session_id}
        except Exception as e:
            logging.error(f"Failed to write lead to Datastore: {e}. Falling back to SQLite.")

    # SQLite Fallback
    try:
        conn = sqlite3.connect(SQLITE_DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO customer_leads (session_id, customer_name, model_of_interest, channel, transcript, call_date, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(session_id) DO UPDATE SET
                customer_name = excluded.customer_name,
                model_of_interest = excluded.model_of_interest,
                channel = excluded.channel,
                transcript = excluded.transcript,
                status = excluded.status;
        """, (session_id, customer_name, model_of_interest, channel, transcript, now_iso, status))
        conn.commit()
        conn.close()
        logging.info(f"Lead saved to SQLite: {customer_name} ({model_of_interest})")
        return {"success": True, "source": "sqlite", "session_id": session_id}
    except Exception as e:
        logging.error(f"Failed to save lead to SQLite: {e}")
        return {"success": False, "error": str(e)}


def update_lead_transcript(session_id: str, transcript: str):
    """Updates only the transcript of an existing session."""
    client = get_datastore_client()
    if client:
        try:
            key = client.key("CustomerLead", str(session_id))
            entity = client.get(key)
            if entity:
                entity['transcript'] = str(transcript)
                entity['last_updated'] = datetime.datetime.now(datetime.timezone.utc)
                client.put(entity)
                return {"success": True, "source": "datastore"}
        except Exception as e:
            logging.error(f"Failed to update transcript in Datastore: {e}")

    try:
        conn = sqlite3.connect(SQLITE_DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE customer_leads SET transcript = ? WHERE session_id = ?
        """, (transcript, session_id))
        conn.commit()
        conn.close()
        return {"success": True, "source": "sqlite"}
    except Exception as e:
        return {"success": False, "error": str(e)}


def get_all_leads():
    """Fetches all customer leads ordered by most recent first."""
    client = get_datastore_client()
    leads = []

    if client:
        try:
            query = client.query(kind="CustomerLead")
            query.order = ["-call_date"]
            results = list(query.fetch(limit=100))
            for item in results:
                call_dt = item.get("call_date")
                call_date_str = call_dt.isoformat() if hasattr(call_dt, "isoformat") else str(call_dt)
                leads.append({
                    "id": item.key.name or str(item.key.id),
                    "session_id": item.get("session_id", ""),
                    "customer_name": item.get("customer_name", "Unknown"),
                    "model_of_interest": item.get("model_of_interest", "Unknown"),
                    "channel": item.get("channel", "ARENA"),
                    "transcript": item.get("transcript", ""),
                    "call_date": call_date_str,
                    "status": item.get("status", "Auto-Qualified Inquiry")
                })
            return leads
        except Exception as e:
            logging.error(f"Failed to fetch leads from Datastore: {e}. Reading SQLite.")

    # SQLite fallback
    try:
        conn = sqlite3.connect(SQLITE_DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM customer_leads ORDER BY call_date DESC LIMIT 100")
        rows = cursor.fetchall()
        for row in rows:
            leads.append({
                "id": str(row["id"]),
                "session_id": row["session_id"],
                "customer_name": row["customer_name"],
                "model_of_interest": row["model_of_interest"],
                "channel": row["channel"] or "ARENA",
                "transcript": row["transcript"] or "",
                "call_date": row["call_date"],
                "status": row["status"] or "Auto-Qualified Inquiry"
            })
        conn.close()
    except Exception as e:
        logging.error(f"Failed to fetch leads from SQLite: {e}")

    return leads
