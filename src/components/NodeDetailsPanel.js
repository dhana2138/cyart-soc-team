import React from "react";

function NodeDetailsPanel({ selectedNode }) {
  return (
    <div style={{ width: "360px", minHeight: "600px", padding: "24px", borderRadius: "20px", background: "#f4f7fb", boxShadow: "0 16px 40px rgba(29, 41, 59, 0.08)" }}>
      <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: "22px", color: "#1f2937" }}>Node Details</h2>
      {selectedNode ? (
        <div style={{ color: "#334155" }}>
          <div style={{ marginBottom: "16px" }}>
            <strong>Asset Name:</strong> {selectedNode.assetName}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <strong>Type:</strong> {selectedNode.nodeType}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <strong>IP Address:</strong> {selectedNode.ip}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <strong>Risk Level:</strong> {selectedNode.risk}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <strong>Vulnerabilities:</strong>
            {selectedNode.vulnerabilities.length > 0 ? (
              <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                {selectedNode.vulnerabilities.map((vuln) => (
                  <li key={vuln} style={{ marginBottom: "6px" }}>
                    {vuln}
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ marginTop: "8px", color: "#64748b" }}>None</div>
            )}
          </div>
          <div>
            <strong>Connected Nodes:</strong>
            {selectedNode.connectedNodes.length > 0 ? (
              <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                {selectedNode.connectedNodes.map((item) => (
                  <li key={item} style={{ marginBottom: "6px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ marginTop: "8px", color: "#64748b" }}>None</div>
            )}
          </div>
        </div>
      ) : (
        <div style={{ color: "#475569", lineHeight: 1.8 }}>
          Select a node to view details
        </div>
      )}
    </div>
  );
}

export default NodeDetailsPanel;
