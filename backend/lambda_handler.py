# backend/lambda_handler.py
import json
import logging
from fastapi import FastAPI, Request, Response, WebSocket
from mangum import Mangum
from pydantic import BaseModel, ValidationError
from .routes import specificationRoutes, visualizationRoutes, outputRoutes, apiKeyRoutes

app = FastAPI()

app.include_router(specificationRoutes.router)
app.include_router(visualizationRoutes.router)
app.include_router(outputRoutes.router)
app.include_router(apiKeyRoutes.router)

class ExecutePayload(BaseModel):
    code: str
    lang: str

@app.post("/graphql/execute")
async def execute(payload: ExecutePayload):
    try:
        logging.info(f"execute requested for lang={payload.lang}")
        return {"trace": [], "variables": {}}
    except ValidationError as e:
        logging.error(f"Validation: {e}")
        raise
    except Exception as e:
        logging.error(f"Unexpected: {e}")
        raise

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message: {data}")
    except Exception as e:
        logging.error(f"WebSocket: {e}")

handler = Mangum(app)