from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Define the data models for nodes and edges
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class GraphData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# Utility function to check for cycles
def check_is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    # Create adjacency list
    adjacency_list: Dict[str, List[str]] = {node.id: [] for node in nodes}
    for edge in edges:
        adjacency_list[edge.source].append(edge.target)

    # Cycle detection using DFS
    def has_cycle(node, visited, rec_stack):
        if rec_stack[node]:
            return True
        if visited[node]:
            return False

        visited[node] = True
        rec_stack[node] = True

        for neighbor in adjacency_list[node]:
            if has_cycle(neighbor, visited, rec_stack):
                return True

        rec_stack[node] = False
        return False

    # Check for cycles
    visited = {node.id: False for node in nodes}
    rec_stack = {node.id: False for node in nodes}

    for node in nodes:
        if not visited[node.id] and has_cycle(node.id, visited, rec_stack):
            return False

    return True

@app.get("/")
async def hello():
    return {"message": "hi there ! here from FastAPI"}

# FastAPI route to receive graph data and check if it forms a DAG
@app.post("/check-dag")
async def check_dag(graph_data: GraphData):
    is_dag = check_is_dag(graph_data.nodes, graph_data.edges)
    return {"is_dag": is_dag}
