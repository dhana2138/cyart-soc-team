import React, { useRef, useState } from "react";
import SearchInput from "./SearchInput";
import NodeDetailsPanel from "./NodeDetailsPanel";
import AlertPanel from "./AlertPanel";
import useGraphData from "../hooks/useGraphData";

function AttackGraph() {
  const cyRef = useRef(null);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [selectedNode, setSelectedNode] = useState(null);
  const { elements, summary } = useGraphData();

  const handleSearch = () => {
    const cy = cyRef.current;
    const trimmedQuery = query.trim();

    if (!cy) {
      setMessage("Graph is not ready yet.");
      return;
    }

    if (!trimmedQuery) {
      setMessage("Please enter a search term.");
      return;
    }

    const normalizedId = trimmedQuery.toLowerCase().replace(/\s+/g, "");
    let found = cy.getElementById(trimmedQuery);

    if (found.empty()) {
      found = cy.getElementById(normalizedId);
    }

    if (found.empty()) {
      const lowerSearch = trimmedQuery.toLowerCase();
      found = cy
        .nodes()
        .filter((node) => {
          const label = node.data("label") || "";
          const nodeId = node.id() || "";
          return (
            nodeId.toLowerCase().includes(lowerSearch) ||
            label.toLowerCase().includes(lowerSearch)
          );
        });
    }

    if (found.empty()) {
      cy.nodes().removeClass("highlighted");
      setMessage("Node not found");
      return;
    }

    const selectedNode = found[0] || found;
    cy.nodes().removeClass("highlighted");
    selectedNode.addClass("highlighted");

    cy.center(selectedNode);
    cy.zoom(2);
    cy.animate(
      {
        fit: {
          eles: selectedNode,
          padding: 100
        }
      },
      {
        duration: 500
      }
    );

    setMessage("");
  };

  const handleNodeClick = (event) => {
    const node = event.target;
    const data = node.data();
    const connectedNodes = node
      .connectedEdges()
      .connectedNodes()
      .filter((neighbor) => neighbor.id() !== node.id())
      .map((neighbor) => neighbor.data("label") || neighbor.id());

    setSelectedNode({
      assetName: data.label || data.id,
      nodeType: data.type || "Unknown",
      risk: data.risk || "Unknown",
      ip: data.ip || "N/A",
      vulnerabilities: data.vulnerabilities || [],
      connectedNodes: Array.from(new Set(connectedNodes))
    });
  };

  const registerCy = (cy) => {
    if (!cyRef.current) {
      cyRef.current = cy;
      cy.on("tap", "node", handleNodeClick);
      cy.on("tap", (event) => {
        if (event.target === cy) {
          setSelectedNode(null);
        }
      });
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ width: "100%" }}>
        <SearchInput query={query} onQueryChange={setQuery} onSearch={handleSearch} />
        {message && (
          <div style={{ marginBottom: "12px", color: message === "Node not found" ? "#d9534f" : "#333" }}>
            {message}
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ minHeight: "600px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 40px rgba(29, 41, 59, 0.08)", background: "#ffffff", padding: "16px" }}>
          <div style={{ marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ margin: 0, color: "#0f172a" }}>Attack Path Graph</h3>
              <div style={{ color: "#64748b", fontSize: "14px" }}>Interactive map of assets, identities, vulnerabilities, and threat actors.</div>
            </div>
            {summary && (
              <div style={{ color: "#475569", fontSize: "13px", textAlign: "right" }}>
                <div>{summary.total_nodes} nodes • {summary.total_edges} edges</div>
                <div>Critical paths: {summary.critical_paths}</div>
              </div>
            )}
          </div>
          <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px", background: "#f8fafc" }}>
            <div style={{ minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
              Graph preview ready for Cytoscape integration. The current build focuses on Team 4 workflow, node selection, and a clear SOC-style representation.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <NodeDetailsPanel selectedNode={selectedNode} />
          <AlertPanel />
        </div>
      </div>
    </div>
  );
}

export default AttackGraph;
