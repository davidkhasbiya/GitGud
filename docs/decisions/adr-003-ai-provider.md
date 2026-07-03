# ADR-003: AI Provider

Status: Accepted

Date: 2026-07-03

---

## Context

GITGUD needs an AI service capable of generating backend programming challenges and providing feedback.

Options evaluated:

- Google AI Studio (Gemini)
- OpenAI
- Anthropic Claude

---

## Decision

Use Google AI Studio (Gemini API).

---

## Rationale

Advantages:

- Free tier suitable for portfolio projects.
- Easy REST API integration.
- Good support for code generation and explanations.
- Simple API key setup.

Disadvantages:

- Free tier rate limits.
- Model behavior may change over time.

---

## Consequences

The backend is responsible for:

- Prompt construction
- Response validation
- Error handling
- Rate limit handling