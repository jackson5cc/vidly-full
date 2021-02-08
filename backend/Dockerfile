FROM node:15-alpine3.10
WORKDIR /app
COPY package.json . 
RUN npm install --only=production
COPY . . 
# I forgot to expose this. What's the result? 
EXPOSE 3001 
ENTRYPOINT [ "node", "app.js" ]