# Attack Path Visualization Platform Architecture

## Overview
This platform combines a React frontend with a FastAPI backend and Neo4j graph database to visualize attack paths, vulnerabilities, and threat actor activity.

## Component responsibilities

### Frontend
- `src/components/AttackGraph.js` renders the Cytoscape graph.
- `src/components/NodeDetailsPanel.js` displays node metadata.
- `src/components/AlertPanel.js` renders sample alert cards.
- `src/hooks/useGraphData.js` encapsulates graph-loading logic.
- `src/api/graphApi.js` contains API client utilities for backend integration.

### Backend
- `backend/app/main.py` starts the FastAPI service.
- `backend/app/api/v1/graph.py` exposes graph endpoints.
- `backend/app/api/v1/nodes.py` provides node detail endpoints.
- `backend/app/api/v1/alerts.py` provides alert endpoints.
- `backend/app/db/neo4j_client.py` is the Neo4j integration stub.
- `backend/app/core/config.py` holds environment configuration.

### Data store
- `backend` is prepared to connect to Neo4j using `neo4j` driver.
- `docker-compose.yml` includes a Neo4j service and local backend service.

## Roadmap for Module 3
1. Replace static data with Neo4j graph queries.
2. Add realtime alert ingestion using Kafka and FastAPI background tasks.
3. Add MITRE ATT&CK mapping and attack path scoring.
4. Build additional frontend dashboards: heatmap, alert feed, timeline.

## Production improvements
- Add authentication and role-based access.
- Add CI/CD with linting, tests, and deployment.
- Add monitoring and logging for backend services.
- Convert frontend to TypeScript for stronger typing.
