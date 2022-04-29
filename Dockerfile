FROM python:3.9.12
RUN apt-get update \
&& apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev
RUN pip3 install --upgrade pip
COPY ./ToDo_DRF/ ./
RUN pip3 install -r requarem.txt
RUN pip3 install psycopg2-binary
COPY wait.sh .
RUN chmod +x wait.sh
RUN pip3 install gunicorn