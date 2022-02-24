FROM node:16.4.0-alpine as development
LABEL maintainer="boris.illarionov@gmail.com" environment="development" 

WORKDIR /app
RUN npm install -g nodemon
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${BACKEND_PORT}

CMD ["/bin/sh", "./backend_watcher.sh"]