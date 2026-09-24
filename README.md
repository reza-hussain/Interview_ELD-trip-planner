# ELD Trip Planner

Monorepo with two independent packages:

- **`frontend/`** — Next.js app (Pages Router). See `frontend/README.md` for dev commands.
- **`backend/`** — API service (not yet scaffolded).

Each package manages its own dependencies (`frontend/package.json`, `backend/package.json` once added). There is no root package manager workspace configured — run installs/scripts from inside each package's folder.

```
.
├── frontend/   # Next.js app
└── backend/    # API service
```
