FROM node:16.18-alpine AS build
WORKDIR /itcenter
COPY . /itcenter
RUN npm install @angular/cli -g
RUN npm run build
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html