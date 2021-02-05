docker build -t codecast/vidly-frontend:latest frontend
docker push codecast/vidly-frontend:latest
docker build -t codecast/vidly-backend:latest backend
docker push codecast/vidly-backend:latest