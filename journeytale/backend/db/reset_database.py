from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database import Base  # Adjust import according to your structure
#from models import User, Game, GameEntry  # Import your models

# Update the database URL as per your settings
DATABASE_URL = "postgresql://postgres:postgres@journeytale-db:5432/postgres"

def reset_database():
    # Create a new database session
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)
    session = Session()

    # Drop all tables
    Base.metadata.drop_all(engine)
    print("Dropped all tables.")

    # Create all tables
    Base.metadata.create_all(engine)
    print("Created all tables.")

    # Close the session
    session.close()

if __name__ == "__main__":
    reset_database()
