FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Build front
FROM base AS build-frontend
COPY ./front ./
RUN npm install
RUN npm run build

# Build backend
FROM base AS build-backend
COPY ./back ./
RUN npm install
RUN npm run build

# Release
FROM base AS release
COPY --from=build-backend /usr/app/dist ./
COPY --from=build-frontend /usr/app/dist ./public
COPY ./back/package.json ./
RUN npm install --only=production

ENTRYPOINT [ "node", "index" ]
