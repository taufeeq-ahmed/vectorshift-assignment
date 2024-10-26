from pydantic import BaseModel
from typing import List

from .Node import Node
from .Edge import Edge

class GraphData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]
