FROM node:15-alpine3.10 AS build-stage
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn 
COPY . ./
EXPOSE 3000 
ENTRYPOINT [ "yarn", "start" ]