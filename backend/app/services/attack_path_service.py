import json
from collections import defaultdict, deque
from typing import Any, Dict, List


DEFAULT_ATTACK_GRAPH: Dict[str, Any] = {
    "nodes": [
        {
            "id": "DC-01",
            "label": "Domain Controller",
            "type": "Asset",
            "risk": "Critical",
            "ip": "10.0.0.10",
            "vulnerabilities": ["CVE-2024-21762", "CVE-2023-12345"],
            "description": "High-value server controlling identity and access.",
            "exposure": "Internet-facing jump host linked to privileged access"
        },
        {
            "id": "WEB-01",
            "label": "Web Server",
            "type": "Asset",
            "risk": "High",
            "ip": "10.0.0.20",
            "vulnerabilities": ["CVE-2024-21762"],
            "description": "Public-facing web application with exposed admin endpoints.",
            "exposure": "External exposure with weak patch hygiene"
        },
        {
            "id": "USER-ALICE",
            "label": "Alice",
            "type": "User",
            "risk": "Medium",
            "ip": "10.0.0.100",
            "vulnerabilities": [],
            "description": "Standard user with access to shared systems.",
            "exposure": "Credential reuse and phishing susceptibility"
        },
        {
            "id": "APT28",
            "label": "APT28",
            "type": "Threat Actor",
            "risk": "High",
            "ip": "198.51.100.23",
            "vulnerabilities": [],
            "description": "Known threat actor linked to credential theft activity.",
            "exposure": "External intrusion group targeting identity infrastructure"
        },
        {
            "id": "CVE-2024-21762",
            "label": "CVE-2024-21762",
            "type": "Vulnerability",
            "risk": "Critical",
            "ip": "",
            "vulnerabilities": [],
            "description": "Remote code execution vulnerability in a common web component.",
            "exposure": "Exploit chain can grant access to downstream assets"
        }
    ],
    "edges": [
        {"source": "USER-ALICE", "target": "WEB-01", "label": "LOGS_IN_TO"},
        {"source": "WEB-01", "target": "DC-01", "label": "COMMUNICATES_WITH"},
        {"source": "CVE-2024-21762", "target": "WEB-01", "label": "AFFECTS"},
        {"source": "APT28", "target": "WEB-01", "label": "ATTACKS"},
        {"source": "APT28", "target": "USER-ALICE", "label": "PHISHES"}
    ],
    "summary": {
        "total_nodes": 5,
        "total_edges": 5,
        "critical_paths": 2,
        "highest_risk_asset": "DC-01",
        "primary_attack_vector": "Credential phishing to web server to domain controller"
    }
}


def get_attack_graph() -> Dict[str, Any]:
    return DEFAULT_ATTACK_GRAPH


def export_attack_graph(format_type: str = "json") -> Dict[str, Any]:
    payload = get_attack_graph()
    if format_type.lower() != "json":
        raise ValueError("Only json export is currently supported")
    return payload


def build_alerts() -> List[Dict[str, Any]]:
    return [
        {
            "id": "ALERT-101",
            "title": "Phishing attempt linked to exposed web application",
            "severity": "High",
            "source": "APT28",
            "timestamp": "2026-06-24T10:00:00Z",
            "related_asset": "WEB-01"
        },
        {
            "id": "ALERT-102",
            "title": "Critical vulnerability affects domain controller path",
            "severity": "Critical",
            "source": "CVE-2024-21762",
            "timestamp": "2026-06-24T09:30:00Z",
            "related_asset": "DC-01"
        }
    ]


def get_shortest_attack_path(start: str, end: str) -> List[str]:
    graph = defaultdict(list)
    for edge in DEFAULT_ATTACK_GRAPH["edges"]:
        graph[edge["source"]].append(edge["target"])
        graph[edge["target"]].append(edge["source"])

    queue = deque([[start]])
    visited = {start}

    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == end:
            return path
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])

    return []
