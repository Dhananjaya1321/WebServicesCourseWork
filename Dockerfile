# Dockerfile for Python Flask App
FROM python:3.8-slim-buster

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application code
COPY . .

# Expose the port the app will run on
EXPOSE 5000

# Command to run the app
CMD ["python3", "app.py"]
