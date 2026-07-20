ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS dev
 
WORKDIR /app
 
COPY package*.json ./
 
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .
  
CMD ["npm", "run", "dev"]

# build
 
FROM node:${NODE_VERSION} AS builder
 
WORKDIR /app
 
COPY package*.json ./
 
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .
  
RUN npm run build

#runner stage

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

RUN npm install -g serve@14.2.6

COPY --from=builder --chown=node:node /app/dist ./dist

USER node

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]


 