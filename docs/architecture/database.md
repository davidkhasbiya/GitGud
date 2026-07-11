# Database

Database

PostgreSQL

ORM

SQLC

Migration

Goose

---


# Entity Relationship Diagram

```mermaid
erDiagram

USERS ||--o{ SUBMISSIONS : submits

PRACTICES ||--o{ SUBMISSIONS : answered_by

SKILLS ||--o{ PRACTICES : contains

USERS ||--|| PROGRESS : has

USERS {

uuid id PK

string name

string email

string password_hash

timestamp created_at

timestamp updated_at

}

SKILLS {

uuid id PK

string name

string slug

timestamp created_at

}

PRACTICES {

uuid id PK

uuid skill_id FK

string title

text description

string difficulty

string type

integer xp_reward

timestamp created_at

}

SUBMISSIONS {

uuid id PK

uuid user_id FK

uuid practice_id FK

text answer

integer score

text feedback

integer xp_earned

timestamp submitted_at

}

PROGRESS {

uuid id PK

uuid user_id FK

integer level

integer xp

integer streak

integer total_completed

integer accuracy

timestamp updated_at

}
```

---

# Notes

Each user has one progress record.

Each challenge belongs to one track.

Each submission belongs to one user.

Each submission belongs to one challenge.