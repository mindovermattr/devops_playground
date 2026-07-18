ARG NODE_VERSION=24.14.0-alpine
 
FROM node:${NODE_VERSION} AS dev
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY --chown=node:node . .

RUN npm run build
 
USER node
 
EXPOSE 3000
 
CMD ["npm", "run", "start:prod"]