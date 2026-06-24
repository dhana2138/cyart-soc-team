# Team 4 Implementation Plan

## Objective
Team 4 is responsible for building the attack path visualization layer for ThreatGraph. The main goal is to turn raw security data into an understandable graph that helps a SOC analyst see how an attack can move across assets, identities, and vulnerabilities.

## What the platform should show
- Assets such as servers, endpoints, and cloud systems
- Users and identities that can access those assets
- Vulnerabilities that create entry points
- Threat actors that may attempt to exploit the environment
- Relationships that explain how an attacker can move laterally or escalate privileges

## Current implementation focus
1. Create a working graph-inspired data model
2. Expose graph data through a backend API
3. Display the graph in a SOC-style dashboard
4. Support node selection and basic attack-path context
5. Prepare for future integration with Neo4j, Kafka, and MITRE ATT&CK data

## Suggested next steps for the team
- Replace the placeholder graph with real Neo4j queries
- Feed the dashboard from Teams 1–3 JSON outputs
- Add severity-based node coloring and attack-path scoring
- Add path-finding logic for shortest compromise paths
- Connect alerts and remediation data to the graph
