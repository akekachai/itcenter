### STAGE 1: Build ###
FROM node:16.18-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
run npm install primeng --save
run npm install primeicons --save
run npm install @angular/animations --save
run npm install primeflex
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html