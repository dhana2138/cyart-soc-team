from fastapi import APIRouter

router = APIRouter()

@router.get("")
def get_alerts():
    return [
        {"id": "A-101", "title": "Unauthorized login attempt", "severity": "High", "source": "UserA", "timestamp": "2026-06-17 09:12"},
        {"id": "A-102", "title": "Exploit attempt detected", "severity": "Critical", "source": "CVE-2024-21762", "timestamp": "2026-06-17 07:40"},
        {"id": "A-103", "title": "Suspicious threat actor activity", "severity": "Medium", "source": "APT28", "timestamp": "2026-06-16 22:05"}
    ]
