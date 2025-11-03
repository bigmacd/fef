
# Local Development

npm install
npm run build
npm run start or npx vite preview --strictPort --port 8080

# using node.js - build container image

cd apps/web
docker build -t floppy-ears-farm-web .
docker run --name fefWeb -p 8080:8080 floppy-ears-farm-web

# using Nginx - build container image
cd apps/web
docker build -f Dockerfile.nginx -t floppy-ears-farm-web .
docker run --name fefWeb -p 80:80 floppy-ears-farm-web
