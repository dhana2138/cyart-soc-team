from fastapi import APIRouter
from app.schemas.node import GraphResponse
from app.services.attack_path_service import get_attack_graph

router = APIRouter()

@router.get("", response_model=GraphResponse)
def get_graph():
    return get_attack_graph()
