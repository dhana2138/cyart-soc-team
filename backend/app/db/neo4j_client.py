from neo4j import GraphDatabase
from typing import Any, Dict, List

class Neo4jClient:
    def __init__(self, uri: str, user: str, password: str):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()

    def fetch_graph(self) -> Dict[str, Any]:
        with self.driver.session() as session:
            result = session.run(
                "MATCH (n)-[r]->(m) RETURN n, r, m LIMIT 200"
            )
            nodes = []
            edges = []
            for record in result:
                n = record["n"]
                m = record["m"]
                r = record["r"]
                nodes.append({"id": n.id, **dict(n.items())})
                nodes.append({"id": m.id, **dict(m.items())})
                edges.append({"source": r.start_node.id, "target": r.end_node.id, "label": r.type})
            return {"nodes": nodes, "edges": edges}
