from fastapi import FastAPI, Depends, HTTPException
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from db import schemas, database, crud
from sqlalchemy.orm import Session

app = FastAPI()

database.init_db()

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

@app.get("/games", response_model=List[schemas.GameResponse])
def read_games(user_id: int, db: Session = Depends(database.get_db)):
    return crud.read_games(user_id, db)

@app.post("/games", response_model=schemas.GameResponse)
async def create_game(game: schemas.GameCreate, db: Session = Depends(database.get_db)):
    return crud.create_game(db, game)

@app.get("/games/{game_id}/entries", response_model=List[schemas.GameEntryResponse])
def read_game_entries(game_id: int, db: Session = Depends(database.get_db)):
    entries = crud.get_entries_by_game(db, game_id)
    if not entries:
        raise HTTPException(status_code=404, detail="No entries found for this game.")
    return entries

@app.post("/entries", response_model=schemas.GameEntryResponse)
async def create_game_entry(game_entry: schemas.GameCreate, db: Session = Depends(database.get_db)):
    return crud.create_game_entry(db, game_entry)