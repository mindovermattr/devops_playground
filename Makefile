.PHONY: dev dev-build dev-detached migrate prod

COMPOSE_DEV=docker compose -f docker-compose.dev.yml
COMPOSE_PROD=docker compose -f docker-compose.yml

dev:
	$(COMPOSE_DEV) up

dev-build:
	$(COMPOSE_DEV) up --build

dev-detached:
	$(COMPOSE_DEV) up -d

migrate:
	$(COMPOSE_DEV) exec backend npm run db:migrate

prod:
	$(COMPOSE_PROD) up