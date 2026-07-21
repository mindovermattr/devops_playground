ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci

# development stage

FROM deps AS dev

COPY . .

CMD ["npm", "run", "dev"]

# build stage
 
FROM deps AS builder

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
 