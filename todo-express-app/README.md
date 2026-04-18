# Todo Express App

Application Node.js avec Express pour gérer une liste de tâches (CRUD complet).

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

ou

```bash
npm start
```

## Structure

```text
todo-express-app/
├── src/
│   ├── controllers/      # Logique HTTP
│   ├── middlewares/      # Middlewares globaux
│   ├── models/           # Contrats/modèles
│   ├── routes/           # Définition des routes
│   ├── services/         # Logique métier et stockage en mémoire
│   ├── utils/            # Validation
│   ├── app.js            # Configuration Express
│   └── server.js         # Point d'entrée
└── package.json
```

## API CRUD

- `GET /api/tasks` : liste toutes les tâches
- `GET /api/tasks/:id` : récupère une tâche
- `POST /api/tasks` : crée une tâche
- `PUT /api/tasks/:id` : met à jour une tâche
- `DELETE /api/tasks/:id` : supprime une tâche

### Exemple de création

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Apprendre Express","description":"Faire une API CRUD","completed":false}'
```
