# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* pnpm-lock.yaml* npm-shrinkwrap.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Install serve to run the application
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

EXPOSE 5000

# Start the application
CMD ["serve", "-s", "dist", "-l", "5000"]
