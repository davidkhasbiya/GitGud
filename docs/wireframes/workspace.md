# Workspace

## Purpose

Main workspace for practicing backend challenges.

---

## Layout

```mermaid
flowchart TB

Workspace

--> Header

--> Sidebar

--> Main

Main --> ChallengeGenerator

Main --> CurrentChallenge

Main --> AnswerEditor

Main --> AIFeedback
```

---

## Sidebar

```mermaid
graph TD

Sidebar

--> Workspace

--> History

--> Progress

--> Profile

--> Settings
```

---

## Main Content

```mermaid
flowchart LR

    User

    User --> Generate

    Generate --> Solve

    Solve --> Submit

    Submit --> Feedback

    Feedback --> Progress
```

---

## Primary Action

Generate Challenge