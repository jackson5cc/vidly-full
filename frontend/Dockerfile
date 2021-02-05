# Stage 1: The Build Process 
FROM node:15-alpine3.10 AS build-stage
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn 
COPY . ./ 
RUN yarn build 

# Stage 2: The Prouction Environment 
FROM nginx:1.12-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]