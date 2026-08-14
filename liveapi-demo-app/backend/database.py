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
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    now_iso = now_utc.isoformat()

    if client:
        try:
            from google.cloud import datastore
            key = client.key("CustomerLead", str(session_id))
            entity = client.get(key)
            if not entity:
                entity = datastore.Entity(key=key)
            
            existing_transcript = entity.get('transcript', '')
            final_transcript = str(transcript) if len(str(transcript)) >= len(str(existing_transcript)) else str(existing_transcript)
            
            entity['session_id'] = str(session_id)
            entity['customer_name'] = str(customer_name).strip() if customer_name else entity.get('customer_name', "Valued Customer")
            entity['model_of_interest'] = str(model_of_interest).strip() if model_of_interest else entity.get('model_of_interest', "Victoris")
            entity['channel'] = str(channel).strip().upper() if channel else entity.get('channel', "ARENA")
            entity['transcript'] = final_transcript
            entity['status'] = str(status)
            entity['last_updated'] = now_utc
            if not entity.get('call_date'):
                entity['call_date'] = now_utc

            client.put(entity)
            logging.info(f"Lead saved to Cloud Datastore: {customer_name} ({model_of_interest}) [Session: {session_id}]")
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
                customer_name = CASE WHEN excluded.customer_name != 'Valued Customer' THEN excluded.customer_name ELSE customer_leads.customer_name END,
                model_of_interest = CASE WHEN excluded.model_of_interest != 'Victoris' THEN excluded.model_of_interest ELSE customer_leads.model_of_interest END,
                channel = excluded.channel,
                transcript = CASE WHEN length(excluded.transcript) >= length(customer_leads.transcript) THEN excluded.transcript ELSE customer_leads.transcript END,
                status = excluded.status;
        """, (session_id, customer_name, model_of_interest, channel, transcript, now_iso, status))
        conn.commit()
        conn.close()
        logging.info(f"Lead saved to SQLite: {customer_name} ({model_of_interest})")
        return {"success": True, "source": "sqlite", "session_id": session_id}
    except Exception as e:
        logging.error(f"Failed to save lead to SQLite: {e}")
        return {"success": False, "error": str(e)}


def update_lead_transcript(session_id: str, transcript: str, customer_name: str = None, model_of_interest: str = None, channel: str = "ARENA"):
    """Updates the transcript. If the lead entity doesn't exist yet, automatically creates it."""
    client = get_datastore_client()
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    if client:
        try:
            from google.cloud import datastore
            key = client.key("CustomerLead", str(session_id))
            entity = client.get(key)
            if not entity:
                entity = datastore.Entity(key=key)
                entity['session_id'] = str(session_id)
                entity['customer_name'] = str(customer_name or "Valued Customer").strip()
                entity['model_of_interest'] = str(model_of_interest or "Victoris").strip()
                entity['channel'] = str(channel or "ARENA").strip().upper()
                entity['call_date'] = now_utc
                entity['status'] = "Auto-Qualified Inquiry"
            else:
                if customer_name and customer_name not in ["Valued Customer", "Unknown", ""]:
                    entity['customer_name'] = str(customer_name).strip()
                if model_of_interest and model_of_interest not in ["Victoris", "Unknown", ""]:
                    entity['model_of_interest'] = str(model_of_interest).strip()
                if channel:
                    entity['channel'] = str(channel).strip().upper()

            if transcript and str(transcript).strip():
                entity['transcript'] = str(transcript).strip()
            entity['last_updated'] = now_utc
            if not entity.get('call_date'):
                entity['call_date'] = now_utc

            client.put(entity)
            logging.info(f"Transcript synced in Datastore for session {session_id} ({len(final_transcript)} chars)")
            return {"success": True, "source": "datastore"}
        except Exception as e:
            logging.error(f"Failed to update transcript in Datastore: {e}")

def append_dialogue_turn(session_id: str, customer_text: str, agent_text: str, customer_name: str = None, model_of_interest: str = None, channel: str = "ARENA"):
    """Atomically appends customer and agent dialogue turns to the lead record in Datastore & SQLite."""
    client = get_datastore_client()
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    
    if client:
        try:
            from google.cloud import datastore
            key = client.key("CustomerLead", str(session_id))
            entity = client.get(key)
            if not entity:
                entity = datastore.Entity(key=key)
                entity['session_id'] = str(session_id)
                entity['customer_name'] = str(customer_name or "Valued Customer").strip()
                entity['model_of_interest'] = str(model_of_interest or "Victoris").strip()
                entity['channel'] = str(channel or "ARENA").strip().upper()
                entity['call_date'] = now_utc
                entity['status'] = "Auto-Qualified Inquiry"
                existing_transcript = "Kabir: Namaste! Main Kabir hoon, Maruti Suzuki Virtual Showroom se. Aapka shubh naam kya hai aur aap kaun si gaadi dekhna chahte hain?"
            else:
                existing_transcript = entity.get('transcript', '')
                if customer_name and entity.get('customer_name') in ["Valued Customer", "Inquiry in Progress", "Unknown", None, ""]:
                    entity['customer_name'] = str(customer_name).strip()
                if model_of_interest and entity.get('model_of_interest') in ["Victoris", "Unknown", None, ""]:
                    entity['model_of_interest'] = str(model_of_interest).strip()
                if channel:
                    entity['channel'] = str(channel).strip().upper()

            lines = [l for l in existing_transcript.split("\n") if l.strip()] if existing_transcript else []
            if customer_text:
                lines.append(f"Customer: {customer_text.strip()}")
            if agent_text:
                lines.append(f"Kabir: {agent_text.strip()}")

            entity['transcript'] = "\n".join(lines)
            entity['last_updated'] = now_utc
            if not entity.get('call_date'):
                entity['call_date'] = now_utc

            client.put(entity)
            logging.info(f"Atomic turn appended to Datastore for {session_id} ({len(lines)} turns)")
            return {"success": True, "source": "datastore", "turns": len(lines)}
        except Exception as e:
            logging.error(f"Failed to append turn in Datastore: {e}")

    try:
        conn = sqlite3.connect(SQLITE_DB_PATH)
        cursor = conn.cursor()
        now_iso = now_utc.isoformat()
        cursor.execute("SELECT transcript, customer_name, model_of_interest FROM customer_leads WHERE session_id = ?", (session_id,))
        row = cursor.fetchone()
        
        if row:
            curr_transcript, curr_name, curr_model = row
            lines = [l for l in curr_transcript.split("\n") if l.strip()] if curr_transcript else []
            if customer_text:
                lines.append(f"Customer: {customer_text.strip()}")
            if agent_text:
                lines.append(f"Kabir: {agent_text.strip()}")
            new_transcript = "\n".join(lines)
            new_name = customer_name if customer_name and curr_name in ["Valued Customer", "Unknown"] else curr_name
            new_model = model_of_interest if model_of_interest and curr_model in ["Victoris", "Unknown"] else curr_model
            cursor.execute("""
                UPDATE customer_leads
                SET transcript = ?, customer_name = ?, model_of_interest = ?, channel = ?
                WHERE session_id = ?
            """, (new_transcript, new_name, new_model, channel, session_id))
        else:
            lines = ["Kabir: Namaste! Main Kabir hoon, Maruti Suzuki Virtual Showroom se. Aapka shubh naam kya hai aur aap kaun si gaadi dekhna chahte hain?"]
            if customer_text:
                lines.append(f"Customer: {customer_text.strip()}")
            if agent_text:
                lines.append(f"Kabir: {agent_text.strip()}")
            new_transcript = "\n".join(lines)
            cursor.execute("""
                INSERT INTO customer_leads (session_id, customer_name, model_of_interest, channel, transcript, call_date, status)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (session_id, customer_name or "Valued Customer", model_of_interest or "Victoris", channel, new_transcript, now_iso, "Auto-Qualified Inquiry"))
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
            results = list(query.fetch(limit=100))
            
            # Robust in-memory sort so missing index or null call_date never drops any lead
            def sort_key(item):
                dt = item.get("call_date") or item.get("last_updated")
                if dt is None:
                    return datetime.datetime.min.replace(tzinfo=datetime.timezone.utc)
                if isinstance(dt, str):
                    try:
                        return datetime.datetime.fromisoformat(dt.replace("Z", "+00:00"))
                    except Exception:
                        return datetime.datetime.min.replace(tzinfo=datetime.timezone.utc)
                return dt

            results.sort(key=sort_key, reverse=True)

            for item in results:
                call_dt = item.get("call_date") or item.get("last_updated") or datetime.datetime.now(datetime.timezone.utc)
                call_date_str = call_dt.isoformat() if hasattr(call_dt, "isoformat") else str(call_dt)
                leads.append({
                    "id": item.key.name or str(item.key.id),
                    "session_id": item.get("session_id", ""),
                    "customer_name": item.get("customer_name", "Valued Customer"),
                    "model_of_interest": item.get("model_of_interest", "Victoris"),
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
                "customer_name": row["customer_name"] or "Valued Customer",
                "model_of_interest": row["model_of_interest"] or "Victoris",
                "channel": row["channel"] or "ARENA",
                "transcript": row["transcript"] or "",
                "call_date": row["call_date"],
                "status": row["status"] or "Auto-Qualified Inquiry"
            })
        conn.close()
    except Exception as e:
        logging.error(f"Failed to fetch leads from SQLite: {e}")

    return leads
