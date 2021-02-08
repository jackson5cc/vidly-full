docker pull codecast/vidly-frontend:latest
docker pull codecast/vidly-backend:latest
docker service update vidly_frontend
docker service update vidly_backend