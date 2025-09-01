# backend/utils.py
from pydantic import ValidationError

def sanitize_input(input_str: str) -> str:
    return input_str.replace('<', '&lt;').replace('>', '&gt;')

def validate_code_length(code: str):
    if len(code) > 10000:
        raise ValidationError("Code length exceeds 10,000 characters")