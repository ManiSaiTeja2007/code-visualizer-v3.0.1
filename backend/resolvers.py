# backend/resolvers.py
import logging
import pyrebase
import valkey
from pydantic import ValidationError
from .utils import sanitize_input, validate_code_length

firebase_config = {
    "apiKey": "your-api-key",
    "authDomain": "your-auth-domain",
    "projectId": "your-project-id",
    "storageBucket": "your-storage-bucket",
    "messagingSenderId": "your-sender-id",
    "appId": "your-app-id",
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

valkey_client = valkey.Valkey(host=os.getenv('VALKEY_HOST'), port=os.getenv('VALKEY_PORT'), password=os.getenv('VALKEY_PASSWORD'))

def execute_code_resolver(parent, info, code, lang):
    try:
        code = sanitize_input(code)
        validate_code_length(code)
        logging.info(f"Executing {lang} code")
        return {"trace": [], "variables": "{}"}
    except ValidationError as e:
        logging.error(f"Validation error: {e}")
        raise
    except Exception as e:
        logging.error(f"Execution error: {e}")
        raise

def explain_code_resolver(parent, info, code):
    try:
        code = sanitize_input(code)
        validate_code_length(code)
        return "Explanation stub"
    except Exception as e:
        logging.error(f"Explanation error: {e}")
        raise

def link_github_resolver(parent, info, token):
    try:
        token = sanitize_input(token)
        db.child("users").child(info.context["user_id"]).update({"github_token": token})
        return "GitHub account linked"
    except Exception as e:
        logging.error(f"GitHub link error: {e}")
        raise

def save_progress_resolver(parent, info, data):
    try:
        data = sanitize_input(data)
        db.child("progress").child(info.context["user_id"]).set(json.loads(data))
        return "Progress saved"
    except Exception as e:
        logging.error(f"Progress save error: {e}")
        raise