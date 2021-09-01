### Stage 1: Build ###
FROM node:14.17.5-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install -g -E @angular/cli @angular/compiler @angular-devkit/core @angular-devkit/schematics @angular-eslint/schematics @angular-eslint/template-parser

RUN npm ci

RUN npm run build

### Stage 2: Run ###
FROM nginx:stable-alpine

RUN mkdir -p /var/log/movies-web-app

VOLUME /var/cache/nginx

COPY --from=builder /app/nginx-config/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/movies-web-app /usr/share/nginx/html

EXPOSE 80
