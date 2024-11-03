# Use a lightweight Python image
FROM python:3.9

# Set working directory
WORKDIR /app

# Install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy app files
COPY . .

# Run the FastAPI server and reset the database
CMD ["sh", "-c", "python -m db.reset_database && uvicorn main:app --host 0.0.0.0 --port 8000 --reload"]
