# Deployment

Frontend

Vercel

Backend

Google Cloud Run

Database

Neon PostgreSQL

Storage

Cloudinary

AI

Google AI Studio

---

```mermaid
flowchart LR

    User

    User --> Vercel

    Vercel --> CloudRun["Google Cloud Run"]

    CloudRun --> PostgreSQL

    CloudRun --> Gemini
```