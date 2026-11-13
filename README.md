# Hari ng Tari — Practice Project Showcase

> **Personal practice project. The original Hari ng Tari application was never deployed, launched, or used in production.** This repository is a standalone, fictional portfolio demo built to showcase UI/UX, front-end engineering, dashboard design, and role-based navigation. It is **not** a real betting platform or live service.

## What this demo is

A compact, modern, responsive event-administration concept based on a historical personal programming exercise.

The original exercise explored PHP/MySQL application structure, multiple user roles, event administration and dashboards. This public demo is a **separate, static front-end reconstruction** with safe fictional information. No original private server code, database dumps, credentials, or transactions are included.

### Included

- Responsive dark-and-gold UI, optional light theme
- Four simulated account roles: Owner, Moderator, Agent and Member
- Overview dashboards and role-aware menus
- Fictional event directory with search and status filters
- Local-only create/edit/remove event metadata (Owner/Moderator)
- Mock results gallery (informational, not wagerable)
- Fictional people directory (Owner/Agent)
- Synthetic analytics and activity timelines
- CSV export of sample events
- Basic accessibility (labeled inputs, navigation focus, responsive layouts)
- Transparent notices throughout that this is a practice project

### Not included

- No real accounts or authentication
- No network APIs, database, analytics tracking, payment processors or wallets
- No gambling, wagers, odds, bets, wagering simulations or payouts
- No real events, video streams, user records or competitions
- No real admin access or operations
- No private production repository source code

All sample account credentials are intentionally public, and all editable data stays in browser **sessionStorage**. It is not saved to a server. The theme preference uses **localStorage**.

## Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Owner | `owner@hnt.demo` | `Demo123!` |
| Moderator | `moderator@hnt.demo` | `Demo123!` |
| Agent | `agent@hnt.demo` | `Demo123!` |
| Member | `member@hnt.demo` | `Demo123!` |

Select a role on the landing screen to pre-fill its credentials. These are **not real accounts**.

## Run locally

No build step or dependencies are required.

```sh
python -m http.server 3000
```

Open http://localhost:3000. You can also use any static file server.

## Deploy on Vercel

1. Import `isaacGrey/HariNgTari-demo` into Vercel.
2. Set Framework Preset to **Other**.
3. Leave Build Command empty and use the repository root as the output directory.
4. Deploy. This site needs no environment variables or backend.

Vercel hosting of **this portfolio demo** does not change the fact that the **original project was never deployed or used in production**.

## Tech stack

HTML5, modern CSS, vanilla JavaScript, Web Storage APIs, GitHub Actions, static hosting.

## Why I built it

To practice and demonstrate creating role-based interfaces, managing UI state, working with forms and data tables, and designing approachable administration screens. This is a **skills showcase**, not an operating product.

## Project status

**Portfolio demonstration only • Fictional data • Original project never deployed • No real betting functionality**
