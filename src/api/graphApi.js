const BASE_URL = process.env.REACT_APP_API_URL || "";

export async function fetchGraphData() {
  const response = await fetch(`${BASE_URL}/api/v1/graph`);
  if (!response.ok) {
    throw new Error("Failed to fetch graph data");
  }
  return response.json();
}

export async function fetchNodeDetails(nodeId) {
  const response = await fetch(`${BASE_URL}/api/v1/nodes/${encodeURIComponent(nodeId)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch node details");
  }
  return response.json();
}
