FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Build front
FROM base AS build-frontend
ARG BASE_API_URL
ENV BASE_API_URL=$BASE_API_URL
ARG BASE_SOCKET_URL
ENV BASE_SOCKET_URL=$BASE_SOCKET_URL
COPY ./front ./
RUN npm ci
RUN npm run build

# Build backend
FROM base AS build-backend
COPY ./back ./
RUN npm ci
RUN npm run build

# Release
FROM base AS release
COPY --from=build-backend /usr/app/dist ./
COPY --from=build-frontend /usr/app/dist ./public
COPY ./back/package.json ./
COPY ./back/package-lock.json ./
RUN npm ci --only=production

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production
ENV STATIC_FILES_PATH=./public
ENV MOCK_REPOSITORY=false
ENV CORS_ORIGIN=false
ENV API_URL=/api

RUN npm i pm2 -g

CMD pm2 start ./index.js --name "app" --env production --no-daemon
