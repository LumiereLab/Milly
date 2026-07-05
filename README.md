# Milly

A self-hosted Kanban / ticketing app, built as a learning project and a real product in parallel. Backend is NestJS + Prisma, frontend is React + Vite, both in TypeScript.

> **Status:** early and actively changing. Core data model and CRUD endpoints exist for boards, columns, and tickets; drag-and-drop reordering, comments, and the single-board detail view are in progress. Treat anything below as a snapshot, not a stable API.

## Stack

- **Backend:** NestJS, Prisma ORM (`prisma-client` generator, output to `src/generated/prisma`), PostgreSQL
- **Frontend:** React 19, Vite, React Router, TypeScript
- **Dev environment:** Docker Compose + a `.devcontainer` config (VS Code / GitHub Codespaces)

## Data model

Defined in `milly-backend/prisma/schema.prisma`:

- **Board** — a Kanban board (`title`, `description`, `owner`), has many `Column`s and `Ticket`s
- **Column** — a status column on a board (`name`, `position`), belongs to a `Board`, has many `Ticket`s
- **Ticket** — a card (`title`, `description`, `owner`, `asignee`), belongs to a `Board` and a `Column`, has many `Comment`s
- **Comment** — belongs to a `Ticket`

Columns are DB-driven rather than a hardcoded enum, so boards can have custom, user-defined columns and ordering.

## Project layout

```
milly-backend/          NestJS API
  prisma/                Prisma schema + migrations
  src/
    boards/              Board CRUD (controller, service, DTOs)
    columns/             Column CRUD, scoped to a board
    tickets/             Ticket CRUD
    comments/            Ticket comments (stubbed, not yet implemented)
    prisma/              PrismaService wrapper
    generated/prisma/    Generated Prisma client (do not edit by hand)

milly-frontend/         React + Vite SPA
  src/
    pages/               KanbanBoardsPage, KanbanDetailsPage, TicketsPage
    components/
      KanbanBoards/       Board list/grid + board creation form
      Tickets/            Ticket card + ticket creation form
    api/                 Fetch wrappers for the backend API
    types/               Shared TS types (board, column, ticket, api)
    config/              API base URL config

compose.yaml             Docker Compose services (app + db)
.devcontainer/           Devcontainer for VS Code / Codespaces
```

## Current API surface

| Method | Path | Description |
|---|---|---|
| GET | `/boards` | List boards |
| GET | `/board/:id` | Get a single board |
| POST | `/boards` | Create a board |
| DELETE | `/boards/:id` | Delete a board |
| GET | `/boards/:id/columns` | List columns for a board |
| POST | `/boards/:id/column` | Create a column on a board |
| PATCH | `/boards/:boardId/column/:id` | Update a column |
| DELETE | `/column/:id` | Delete a column |
| GET | `/tickets` | List tickets |
| POST | `/tickets` | Create a ticket |
| DELETE | `/tickets/:id` | Delete a ticket |

Not yet implemented: updating/moving tickets between columns (the planned transactional `moveTicket` endpoint), and the comments endpoints.

## Getting started

### Environment

The backend reads `DATABASE_URL` via `prisma.config.ts` (not the `datasource` block in `schema.prisma`). No `.env.example` exists yet in this snapshot — create a `milly-backend/.env` with at least:

```
DATABASE_URL="postgresql://user:password@localhost:5432/milly"
```

The frontend reads the API base URL from `VITE_API_BASE_URL` in a `milly-frontend/.env`.

> Note: `compose.yaml` and the devcontainer are currently still wired up for MySQL (a leftover from before the Postgres migration), while `schema.prisma` already targets `postgresql`. If you use Docker Compose as-is, update the `db` service and `DATABASE_URL` to Postgres first.

### Backend

```bash
cd milly-backend
npm install
npx prisma migrate dev
npm run start:dev
```

### Frontend

```bash
cd milly-frontend
npm install
npm run dev
```

### Docker / Devcontainer

`compose.yaml` defines an `app` service (built from `.devcontainer/Dockerfile`) and a `db` service. Open the repo in VS Code / Codespaces with the Dev Containers extension to pick up the `.devcontainer/devcontainer.json` config automatically.

## Known gaps / next steps

- Comments module is a stub (`Commentcontroller`) with no routes yet
- No drag-and-drop on the frontend yet (dnd-kit is the planned library, not yet installed)
- No board detail view wiring tickets into their columns yet
- `compose.yaml` / devcontainer still reference MySQL and need updating to Postgres
- No `.env.example` files committed yet
