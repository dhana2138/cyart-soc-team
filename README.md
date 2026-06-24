# Attack Path Visualization Platform

This project is a SOC-style attack path visualization dashboard built with React and Cytoscape.js.
It now includes a backend FastAPI skeleton, Neo4j integration placeholders, and a more professional dashboard layout.

## Project Structure

- `src/`: React frontend components, data, and hooks
- `backend/`: FastAPI backend skeleton and Neo4j integration stubs
- `docker-compose.yml`: Local development orchestration for frontend, backend, and Neo4j
- `docs/architecture.md`: architecture notes and roadmap

## Run the frontend

```bash
npm install
npm start
```

## Run the backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Run with Docker Compose

```bash
docker compose up --build
```

## Notes

- The frontend proxy is configured to `http://localhost:8000`.
- `backend/app/db/neo4j_client.py` is a starter implementation for Neo4j access.
- `src/api/graphApi.js` can be used to connect the frontend to FastAPI.
- `src/hooks/useGraphData.js` simplifies graph data loading and makes backend integration easier.
