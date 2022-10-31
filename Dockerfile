FROM node:15.14.0-alpine3.10 AS builder
COPY . /app
WORKDIR /app
RUN npm install && npm run build:prod && rm -rf node_modules/

FROM nginx:1.19.10-alpine
COPY --from=build /app/default.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/ /var/www
EXPOSE 80