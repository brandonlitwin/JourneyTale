from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from db.database import Base
from db.models import User

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

    from bcrypt import hashpw, gensalt

    hashed_password = hashpw(b"testpassword", gensalt())

    # Insert a test user
    test_user = User(id=1, username="testuser", password=hashed_password.decode('utf-8'))
    session.add(test_user)
    session.commit()
    session.refresh(test_user)
    print("Test user inserted.")

    # Close the session
    session.close()

if __name__ == "__main__":
    reset_database()
