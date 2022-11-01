FROM node:16.18.0-alpine AS builder
COPY . /app
WORKDIR /app
RUN npm install && npm run build:prod

FROM nginx:1.17.1-alpine
COPY --from=build /app/default.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/ /var/www
EXPOSE 80