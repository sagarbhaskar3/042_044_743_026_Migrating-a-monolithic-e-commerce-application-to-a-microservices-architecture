FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM node:alpine
WORKDIR /app
COPY . .
EXPOSE 5002
CMD [ "npm", "start" ]
