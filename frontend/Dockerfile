FROM node:16.4.0-alpine as development
LABEL maintainer="boris.illarionov@gmail.com" environment="development" 

WORKDIR /app
RUN npm install -g nodemon
RUN npm install react-scripts@5.0.0 -g
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${FRONTEND_PORT}

CMD ["/bin/sh", "./frontend_watcher.sh"]