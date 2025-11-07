# Multi-stage Dockerfile for React Router app

# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json package-lock.json* ./
RUN npm ci --only=production=false

# Now copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production (with Node.js for react-router serve)
FROM node:22-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy PostgreSQL root certificate for secure DB connections
COPY root.crt /root/.postgresql/root.crt

# Copy environment file
COPY .env.production ./.env

ARG DATABASE_URL
ENV db_url ${DATABASE_URL}

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application and environment file
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 8080

# Start the application with logging
CMD ["node", "--env-file=.env", "build/server/index.js"]

