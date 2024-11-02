from pydantic import BaseModel

class GameCreate(BaseModel):
    title: str
    description: str

class GameResponse(BaseModel):
    id: int
    title: str
    description: str

    class Config:
        orm_mode = True
