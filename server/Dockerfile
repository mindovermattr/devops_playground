ARG NODE_VERSION=24.14.0-alpine

#development stage

FROM node:${NODE_VERSION} AS dev

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

CMD ["npm", "run", "dev"]

# build stage
 
FROM node:${NODE_VERSION} AS builder
 
WORKDIR /app
 
COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

# runner

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

COPY package.json .

COPY --from=builder --chown=node:node /app/node_modules ./node_modules

COPY --from=builder --chown=node:node /app/dist ./dist

USER node
 
EXPOSE 3000

CMD ["node", "dist/src/main.js"]
 