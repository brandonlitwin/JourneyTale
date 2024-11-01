from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to JourneyTale API!"}

@app.get("/games")
def get_games():
    return [{"id": 1, "title": "Dragon Quest III", "description": "An RPG classic!"}]
