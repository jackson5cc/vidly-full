docker build -t codecast/vidly-frontend frontend
docker push codecast/vidly-frontend
docker build -t codecast/vidly-backend backend
docker push codecast/vidly-backend