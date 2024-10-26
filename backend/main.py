from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware

from models.GraphData import GraphData
from services.check_is_dag import check_is_dag

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# router 
@app.get("/")
async def hello():
    return {"message": "hi there ! here from FastAPI"}

@app.post("/check-dag")
async def check_dag(graph_data: GraphData):
    is_dag = check_is_dag(graph_data.nodes, graph_data.edges)
    num_nodes = len(graph_data.nodes)
    num_edges =  len(graph_data.edges)

    response = {
        "is_dag": is_dag,
        "num_nodes": num_nodes,
        "num_edges": num_edges
    }
    
    return response
