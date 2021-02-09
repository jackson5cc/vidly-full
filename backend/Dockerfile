FROM node:15-alpine3.10
WORKDIR /app
COPY package*.json ./ 
RUN npm install 
COPY . . 
# RUN chmod +x /docker-entrypoint.sh
EXPOSE 3001 
ENTRYPOINT [ "node", "app.js" ]