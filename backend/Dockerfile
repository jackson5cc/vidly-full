FROM node:15-alpine3.10
ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json . 
RUN npm install --only=production
COPY . . 
# I forgot to expose this. What's the result? 
EXPOSE 3001 
ENTRYPOINT [ "node", "app.js" ]