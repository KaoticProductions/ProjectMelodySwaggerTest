# Skeleton project for Swagger

##**To Run locally:**
* RUN npm install
* Swagger Project Start

**Please set the following environment variables on your machine:**
* MELODY_DB_HOST
* MELODY_DB_USER
* MELODY_DB_PORT
* MELODY_DB_PASSWORD
* MELODY_DB_DATABASE

##**To View API Locally**
http://127.0.0.1:10010/docs

##**To Run in Docker:**
run command in docker quickstart terminal:\n
* docker run -p 10010:10010 -d aaronrklein/swagger-test

##**To View API in Docker**
get docker ip:
* docker-machine ip default
* curl http://{INSERT_IP_HERE}/characters 

