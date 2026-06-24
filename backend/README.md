# Attack Path Visualization Backend

This backend is a FastAPI skeleton for the Attack Path Visualization Platform.
It provides graph, node details, and alert API endpoints that can be replaced with Neo4j and Kafka logic.

## Running Locally

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. Start the server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

3. Open the API docs:
   - http://localhost:8000/docs

## Notes

- `backend/app/db/neo4j_client.py` is a placeholder for Neo4j integration.
- Add Kafka ingestion and alert logic in a separate service when ready.
