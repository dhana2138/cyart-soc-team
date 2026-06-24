import { useEffect, useState } from "react";

export default function useGraphData() {
  const [graphData, setGraphData] = useState({ elements: [], summary: null });

  useEffect(() => {
    const loadGraph = async () => {
      try {
        const response = await fetch("/api/v1/graph");
        if (!response.ok) {
          throw new Error("Failed to load graph data");
        }
        const data = await response.json();
        const elements = [
          ...(data.nodes || []).map((node) => ({ data: node })),
          ...(data.edges || []).map((edge) => ({ data: edge }))
        ];
        setGraphData({ elements, summary: data.summary || null });
      } catch (error) {
        console.error(error);
        setGraphData({ elements: [], summary: null });
      }
    };

    loadGraph();
  }, []);

  return graphData;
}
