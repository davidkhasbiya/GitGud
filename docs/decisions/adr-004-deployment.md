# ADR-004: Deployment Strategy

Status: Accepted

Date: 2026-07-03

---

## Context

The application requires an easy deployment workflow while remaining close to production practices.

Options evaluated:

- Vercel + Cloud Run
- Railway
- Render
- VPS

---

## Decision

Use:

- Frontend → Vercel
- Backend → Google Cloud Run
- Database → Neon PostgreSQL

---

## Rationale

Advantages:

- Easy deployment.
- Good free tier.
- Container-based backend deployment.
- Production-like architecture.

Disadvantages:

- Multiple platforms to manage.
- Slightly more complex than an all-in-one solution.

---

## Consequences

Deployment pipeline:

GitHub

↓

Vercel (Frontend)

↓

Cloud Run (Backend)

↓

Neon PostgreSQL