from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust based on your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Game(BaseModel):
    id: int
    title: str
    description: str

# In-memory database for demonstration purposes
games_db = [
    Game(id=1, title="Game One", description="Description of Game One."),
    Game(id=2, title="Game Two", description="Description of Game Two."),
]

@app.get("/")
def read_root():
    return {"message": "Welcome to JourneyTale API!"}

@app.get("/games", response_model=List[Game])
async def get_games():
    return games_db

