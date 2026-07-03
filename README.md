# GITGUD

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-19-blue)
![Go](https://img.shields.io/badge/Go-1.25-00ADD8)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791)
![Status](https://img.shields.io/badge/status-in%20development-orange)

> **Practice. Build. Improve.**

AI-powered developer workspace designed to help developers master backend engineering through practical, real-world coding challenges.

---

## Preview

> Coming soon

Landing Page

Dashboard Workspace

AI Challenge Generator

Progress Tracking

---

## About

GITGUD is an AI-powered learning workspace focused on backend engineering.

Instead of learning passively through videos or articles, developers improve their skills by solving practical backend challenges, receiving AI-powered feedback, and tracking measurable progress.

The project is built as a full-stack software engineering portfolio while following modern software engineering practices, including documentation, architecture planning, and clean project organization.

---

## Why GITGUD?

Many learning platforms focus on consuming content.

GITGUD focuses on **building skills through practice**.

Every challenge encourages developers to think like backend engineers by solving real-world problems involving APIs, databases, authentication, and system design.

---

#  Features

## AI Challenge Generator

Generate backend-focused coding challenges powered by Google Gemini.

---

## Backend Learning Paths

Practice topics including:

- REST API
- Authentication
- JWT
- PostgreSQL
- Docker
- Caching
- Clean Architecture
- Middleware
- Database Design

---

## AI Feedback

Receive explanations, hints, improvements, and recommendations after submitting answers.

---

## Progress Tracking

Track:

- XP
- Level
- Learning Streak
- Challenge History
- Accuracy

---

## Developer Workspace

Everything happens in one workspace:

- Generate Challenge
- Solve Challenge
- Submit Answer
- Review AI Feedback
- Monitor Progress

---

##  System Architecture

```mermaid
flowchart LR

User

-->

React

-->

Go Fiber API

-->

PostgreSQL

Go Fiber API

-->

Gemini API
```

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React + Vite + TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Server State | TanStack Query |
| Backend | Go Fiber |
| Authentication | JWT |
| Database | PostgreSQL |
| AI | Google Gemini API |
| Deployment | Vercel + Google Cloud Run |
| Container | Docker |

---

#  Project Structure

```text
gitgud/

├── frontend/
│
├── backend/
│
├── docs/
│   ├── product/
│   ├── wireframes/
│   ├── architecture/
│   └── decisions/
│
├── README.md
├── README_ID.md
├── LICENSE
└── .gitignore
```

---

#  Documentation

All documentation is available in the **docs/** directory.

```
docs/

├── product/
│   ├── vision.md
│   ├── branding.md
│   ├── product-requirements.md
│   ├── sitemap.md
│   ├── user-flow.md
│   └── design-system.md
│
├── wireframes/
│   ├── landing.md
│   ├── login.md
│   ├── workspace.md
│   ├── history.md
│   ├── progress.md
│   ├── profile.md
│   └── settings.md
│
├── architecture/
│
└── decisions/
```

---

#  Getting Started

## Clone Repository

```bash
git clone https://github.com/davidkhasbiya/gitgud.git

cd gitgud
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend

```bash
cd backend

go mod tidy

go run cmd/api/main.go
```

Backend runs at:

```
http://localhost:8080
```

---

## Environment Variables

Example:

Frontend

```env
VITE_API_URL=http://localhost:8080/api/v1
```

Backend

```env
DATABASE_URL=

JWT_SECRET=

GEMINI_API_KEY=
```

---

# Roadmap

## Phase 1

- [x] Product Documentation
- [x] Wireframes
- [x] Architecture Design
- [x] Decision Records

---

## Phase 2

- [ ] Landing Page
- [ ] Authentication
- [ ] Dashboard
- [ ] Theme Toggle

---

## Phase 3

- [ ] AI Challenge Generator
- [ ] AI Feedback
- [ ] Challenge History
- [ ] Progress Tracking

---

## Phase 4

- [ ] Deployment
- [ ] Docker
- [ ] CI/CD
- [ ] Monitoring

---

#  Design Philosophy

**Low Noise. High Function.**

GITGUD adopts a developer-first interface inspired by modern developer tools.

Design principles:

- Minimal
- Monochrome
- Functional
- Accessible
- Responsive
- Content First

Inspired by:

- Linear
- GitHub
- Vercel
- Cursor
- Raycast

---

#  Built with AI Assistance

This project is designed and developed with the assistance of AI tools.

Development assistants:

- ChatGPT
- Google Gemini

AI is used for brainstorming, documentation, code reviews, and implementation assistance.

All architecture decisions, implementation, debugging, and final validation are performed by the project author.

---

#  License

This project is licensed under the MIT License.

See the **LICENSE** file for more information.