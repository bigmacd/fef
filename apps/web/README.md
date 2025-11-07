# Local Development

cd apps/web

## build and run the app

npm install
npm run build
node --env-file=.env.local build/server/index.js

## build container image

docker build . -t fef
docker run --name fef -p 8080:8080 fef

testing with local database (also running in docker):
    docker run --name fef -p 8080:8080 --add-host=host.docker.internal:host-gateway fef
