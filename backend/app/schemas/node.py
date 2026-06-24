from pydantic import BaseModel
from typing import List, Optional

class NodeData(BaseModel):
    id: str
    label: str
    type: str
    risk: str
    ip: Optional[str] = None
    vulnerabilities: List[str] = []
    description: Optional[str] = None
    exposure: Optional[str] = None

class EdgeData(BaseModel):
    source: str
    target: str
    label: Optional[str] = None

class GraphSummary(BaseModel):
    total_nodes: int
    total_edges: int
    critical_paths: int
    highest_risk_asset: str
    primary_attack_vector: str

class GraphResponse(BaseModel):
    nodes: List[NodeData]
    edges: List[EdgeData]
    summary: Optional[GraphSummary] = None

class NodeDetails(NodeData):
    connected_nodes: List[str] = []
