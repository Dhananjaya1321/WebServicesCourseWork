FROM 975049993535.dkr.ecr.ap-southeast-1.amazonaws.com/python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

ENTRYPOINT python app.py
# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]