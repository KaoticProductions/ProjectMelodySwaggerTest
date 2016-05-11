FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g swagger

# Bundle app source
COPY . /usr/src/app

ENV MELODY_DB_DATABASE "project_melody_db"
ENV MELODY_DB_HOST "melody-db.cwh7beare2by.us-west-2.rds.amazonaws.com"
ENV MELODY_DB_PASSWORD "fcYJ5UNrA2V6nQUt"
ENV MELODY_DB_PORT "2020"
ENV MELODY_DB_USER "kaotic"

ADD run.sh run.sh

EXPOSE 10010

CMD ["sh", "run.sh"]
