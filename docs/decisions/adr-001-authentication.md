# ADR-001: Authentication Strategy

Status: Accepted

Date: 2026-07-03

---

## Context

GITGUD requires a secure authentication system for developers to save learning progress, challenge history, and profile information.

Several authentication solutions were evaluated:

- JWT
- Firebase Authentication
- Clerk
- Auth0

---

## Decision

Use JWT (JSON Web Token) with Email and Password authentication.

Passwords will be hashed using bcrypt before being stored in PostgreSQL.

---

## Rationale

Advantages:

- Learn backend authentication fundamentals.
- Full control over authentication flow.
- No vendor lock-in.
- Easy integration with Go Fiber.
- Commonly used in backend development.

Disadvantages:

- More implementation effort.
- Must handle token expiration and middleware.

---

## Consequences

Backend will implement:

- Register
- Login
- JWT Middleware
- Logout
- Protected Routes