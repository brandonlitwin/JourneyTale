from fastapi import FastAPI, Depends
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from db.schemas import GameCreate, GameResponse
from db.models import Game
from db.database import init_db, get_db
from sqlalchemy.orm import Session

app = FastAPI()

init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to JourneyTale API!"}

@app.get("/games")
def read_games(db: Session = Depends(get_db)):
    games = db.query(Game).all()
    return games

@app.post("/games", response_model=GameResponse)
async def create_game(game: GameCreate, db: Session = Depends(get_db)):
    new_game = Game(title=game.title, description=game.description)
    db.add(new_game)
    db.commit()
    db.refresh(new_game)
    return new_game