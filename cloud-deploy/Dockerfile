# Multi-stage production Dockerfile
FROM node:18-alpine AS base

WORKDIR /app
COPY backend/package*.json ./
RUN npm install --production

COPY backend/ ./
COPY public/ ./public/

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD ["node", "server.js"]
