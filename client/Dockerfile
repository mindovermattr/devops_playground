ARG NODE_VERSION=24.14.0-alpine

#deps stage

FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci

#dev

FROM deps AS dev
 
COPY . .
  
CMD ["npm", "run", "dev"]

# build
 
FROM deps AS builder
 
COPY . .
  
RUN npm run build

# runner stage

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

RUN npm install -g serve@14.2.6

COPY --from=builder --chown=node:node /app/dist ./dist

USER node

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]


 