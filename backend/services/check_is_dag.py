from typing import List, Dict
from models import Node 
from models import Edge 
from models.GraphData import GraphData

def check_is_dag(nodes: List[Node], edges: List[Edge]) -> bool:

    adjacency_list: Dict[str, List[str]] = {node.id: [] for node in nodes}
    for edge in edges:
        adjacency_list[edge.source].append(edge.target)


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


    visited = {node.id: False for node in nodes}
    rec_stack = {node.id: False for node in nodes}

    for node in nodes:
        if not visited[node.id] and has_cycle(node.id, visited, rec_stack):
            return False

    return True