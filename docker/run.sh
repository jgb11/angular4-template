echo "building the angular4 app..."
npm run ng build --prod

echo "building the Docker image..."
docker build -t angular4-sample-app-nginx .

echo "running the Docker container..."
docker run -d -p 8084:80 --name angular4-test-1 angular4-sample-app-nginx