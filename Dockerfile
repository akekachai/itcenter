FROM node:16.18-alpine AS build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# STEP 2 : Production
FROM nginx:1.17.1-alpine
# RUN addgroup app && adduser -S -G app app
# USER app
COPY --from=build-stage /app/dist/APP_NAME /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]