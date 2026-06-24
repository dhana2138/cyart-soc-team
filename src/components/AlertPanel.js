import React, { useEffect, useState } from "react";

const sampleAlerts = [
  {
    id: "A-101",
    title: "Unauthorized login attempt",
    severity: "High",
    source: "UserA",
    timestamp: "2026-06-17 09:12"
  },
  {
    id: "A-102",
    title: "Exploit attempt detected",
    severity: "Critical",
    source: "CVE-2024-21762",
    timestamp: "2026-06-17 07:40"
  },
  {
    id: "A-103",
    title: "Suspicious threat actor activity",
    severity: "Medium",
    source: "APT28",
    timestamp: "2026-06-16 22:05"
  }
];

function AlertPanel() {
  const [alerts, setAlerts] = useState(sampleAlerts);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const response = await fetch("/api/v1/dashboard/alerts");
        if (response.ok) {
          const data = await response.json();
          setAlerts(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadAlerts();
  }, []);

  return (
    <div style={{ marginTop: "24px", width: "100%", borderRadius: "20px", background: "#ffffff", boxShadow: "0 16px 40px rgba(29, 41, 59, 0.08)", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 style={{ margin: 0, color: "#1f2937" }}>Alert Feed</h3>
        <div style={{ color: "#64748b", fontSize: "13px" }}>Live SOC dashboard alerts</div>
      </div>
      <div style={{ display: "grid", gap: "12px" }}>
        {alerts.map((alert) => (
          <div key={alert.id} style={{ display: "flex", justifyContent: "space-between", padding: "14px 16px", borderRadius: "14px", border: "1px solid #e2e8f0", background: "#f8fafc" }}>
            <div>
              <div style={{ fontWeight: 600, color: "#0f172a" }}>{alert.title}</div>
              <div style={{ color: "#475569", fontSize: "14px" }}>{alert.source}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: alert.severity === "Critical" ? "#b91c1c" : alert.severity === "High" ? "#c2410c" : "#334155", fontWeight: 700 }}>{alert.severity}</div>
              <div style={{ color: "#64748b", fontSize: "13px" }}>{alert.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertPanel;
