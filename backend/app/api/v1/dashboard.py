from fastapi import APIRouter
from app.services.attack_path_service import build_alerts, export_attack_graph, get_shortest_attack_path

router = APIRouter()


@router.get("/alerts")
def get_alerts():
    return build_alerts()


@router.get("/export")
def export_graph():
    return export_attack_graph("json")


@router.get("/path")
def get_path():
    return {
        "start": "APT28",
        "end": "DC-01",
        "path": get_shortest_attack_path("APT28", "DC-01")
    }
