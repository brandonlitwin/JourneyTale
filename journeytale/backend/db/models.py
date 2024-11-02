from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from .database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)

    game_entries = relationship("GameEntry", back_populates="user")
    games = relationship("Game", back_populates="user")

class Game(Base):
    __tablename__ = "games"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))

    game_entries = relationship("GameEntry", back_populates="game")
    user = relationship("User", back_populates="games")

class GameEntry(Base):
    __tablename__ = "game_entries"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    date_created = Column(DateTime)
    game_id = Column(Integer, ForeignKey("games.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    user = relationship("User", back_populates="game_entries")
    game = relationship("Game", back_populates="game_entries")
