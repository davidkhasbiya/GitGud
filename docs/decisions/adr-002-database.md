# ADR-002: Database Selection

Status: Accepted

Date: 2026-07-03

---

## Context

The application requires persistent storage for:

- Users
- Challenges
- Progress
- History

Several database options were evaluated:

- Firestore
- PostgreSQL
- MongoDB
- MySQL

---

## Decision

Use PostgreSQL.

---

## Rationale

Advantages:

- Industry standard relational database.
- Strong SQL knowledge is valuable for backend roles.
- Excellent support with Go.
- Supports transactions and relationships.

Disadvantages:

- Requires schema management.
- Slightly steeper learning curve.

---

## Consequences

Database schema will use:

- UUID primary keys
- Foreign keys
- Indexed columns
- Database migrations