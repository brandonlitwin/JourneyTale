from pydantic import BaseModel
from datetime import date

class GameCreate(BaseModel):
    title: str
    description: str
    user_id: int

class GameResponse(BaseModel):
    id: int
    title: str
    description: str
    user_id: int

    class Config:
        orm_mode = True

class GameEntryBase(BaseModel):
    date_created: date
    description: str

class GameEntryCreate(GameEntryBase):
    game_id: int
    user_id: int

class GameEntryResponse(GameEntryBase):
    id: int
    game_id: int
    user_id: int

    class Config:
        orm_mode = True