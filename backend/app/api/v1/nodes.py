from fastapi import APIRouter, HTTPException
from app.schemas.node import NodeDetails

router = APIRouter()

@router.get("/{node_id}", response_model=NodeDetails)
def get_node(node_id: str):
    # Placeholder implementation. Replace with real Neo4j node lookup.
    if node_id == "Server1":
        return {
            "id": "Server1",
            "label": "Server1",
            "type": "Asset",
            "risk": "Critical",
            "ip": "192.168.1.10",
            "vulnerabilities": ["CVE-2024-21762", "CVE-2023-12345"],
            "connected_nodes": ["UserA", "APT28"]
        }
    raise HTTPException(status_code=404, detail="Node not found")
