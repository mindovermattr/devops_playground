# =========================================
# Stage: Builder (Vite React.js App)
# =========================================
ARG NODE_VERSION=24.14.0-alpine
 
FROM node:${NODE_VERSION} AS builder
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm ci

COPY --chown=node:node . .
  
RUN npm run build

#runner stage

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

RUN npm install -g serve@14.2.6

COPY --from=builder /app/dist ./dist

USER node

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]


 