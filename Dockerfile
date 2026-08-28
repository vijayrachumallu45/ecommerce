# Base Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy root manifest & app files
COPY package.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN cd backend && npm install
RUN cd frontend && npm install

# Copy application source
COPY . .

# Build frontend production bundle
RUN cd frontend && npm run build

# Expose backend API port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Entrypoint start command
CMD ["node", "backend/server.js"]
