# backend/routes.py
from fastapi import APIRouter

specificationRoutes = APIRouter(prefix="/spec")
@specificationRoutes.get("/")
async def spec():
    return {"detail": "Spec route"}

visualizationRoutes = APIRouter(prefix="/viz")
@visualizationRoutes.get("/")
async def viz():
    return {"detail": "Viz route"}

outputRoutes = APIRouter(prefix="/output")
@outputRoutes.get("/")
async def output():
    return {"detail": "Output route"}

apiKeyRoutes = APIRouter(prefix="/keys")
@apiKeyRoutes.get("/")
async def keys():
    return {"detail": "Key route (tunneled)"}