# Scrambled

## Running locally

```sh
npm install
```

### Frontend

```sh
cd frontend
npm run dev
```

### Game Server

```sh
cd servers/game
npm run start:dev:watch
```

### Reverse proxy

```sh
cd local
docker compose up --build --watch
```

### Finally

Visit http://localhost:8080/
