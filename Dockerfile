# Dockerfile v32.4 [NODEJS + COOLIFY OPTIMIZED]
FROM node:18-slim

# Install sqlite3 build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Ensure data directory exists for SQLite
RUN mkdir -p src/data

# Expose the API and Web port
EXPOSE 8000

# Healthcheck for Coolify
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8000/health || exit 1

# Start the Node.js server
CMD ["npm", "start"]
