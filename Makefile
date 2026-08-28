# ShopEase Project Makefile

.PHONY: install start build test seed clean

install:
	cd backend && npm install
	cd frontend && npm install

start:
	node backend/server.js

build:
	cd frontend && npm run build

test:
	cd backend && npm test || true
	cd frontend && npm test || true

seed:
	node backend/seeder.js

clean:
	rm -rf backend/node_modules frontend/node_modules frontend/dist
