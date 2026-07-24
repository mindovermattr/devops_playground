ARG NODE_VERSION=24.14.0-alpine

#deps stage

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY client/package*.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm npm ci

COPY client .

RUN npm run build

#

FROM nginx:alpine

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]