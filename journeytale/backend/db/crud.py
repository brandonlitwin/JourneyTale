from sqlalchemy.orm import Session
from . import models, schemas

def read_games(user_id: int, db: Session):
    return db.query(models.Game).filter(models.Game.user_id == user_id).all()

def create_game(db: Session, game: schemas.GameCreate):
    new_game = models.Game(title=game.title, description=game.description, user_id=game.user_id)
    db.add(new_game)
    db.commit()
    db.refresh(new_game)
    return new_game

def create_game_entry(db: Session, entry: schemas.GameEntryCreate):
    db_entry = models.GameEntry(
        date=entry.date,
        description=entry.description,
        game_id=entry.game_id,
        user_id=entry.user_id
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_entries_by_game(db: Session, game_id: int):
    return db.query(models.GameEntry).filter(models.GameEntry.game_id == game_id).all()
