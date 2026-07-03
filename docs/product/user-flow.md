# GITGUD User Flow

Version: 1.0

---

# Overview

GITGUD is designed around one simple learning cycle:

Generate → Practice → Feedback → Progress

Every feature in the application should support this cycle.

---

# Primary User Flow

Landing Page

↓

Sign In

↓

Workspace

↓

Generate Challenge

↓

Solve Challenge

↓

Receive AI Feedback

↓

Submission Saved

↓

Progress Updated

↓

Continue Learning

---

# Detailed User Flow

## 1. Landing Page

Goal

Introduce GITGUD and encourage developers to start practicing.

User Actions

- Read product overview
- Explore features
- Switch theme
- Sign In

↓

Sign In

---

## 2. Authentication

Goal

Authenticate the developer.

User Actions

- Continue with Google

Success

↓

Workspace

Failure

↓

Show Error Message

---

## 3. Workspace

Goal

Provide a distraction-free environment for practice.

User Actions

- Choose Track
- Choose Topic
- Choose Difficulty
- Generate Challenge

↓

AI generates a challenge

---

## 4. Challenge Session

The developer receives a challenge.

Challenge Types

- Flashcard
- Multiple Choice
- Code Reading
- Debugging

Future

- Coding Challenge
- Interview Simulation

User Actions

- Read Challenge
- Answer Challenge
- Submit

↓

Submission

---

## 5. AI Feedback

Goal

Help the developer improve.

Developer receives

- Score
- Explanation
- Suggestions
- Correct Answer

↓

Save Result

---

## 6. Save Progress

Backend stores

- Challenge
- User Answer
- AI Feedback
- XP
- Accuracy
- Completion Time

↓

Update Progress

---

## 7. Progress

Developer can see

- XP
- Current Level
- Accuracy
- Weekly Activity
- Learning Streak

↓

Continue Practice

---

# Secondary Flows

History

Workspace

↓

History

↓

View Previous Challenge

↓

Retry Challenge

---

Profile

Workspace

↓

Profile

↓

Update Information

↓

Save

---

Settings

Workspace

↓

Settings

↓

Change Theme

↓

Logout

---

# Error Flow

AI Error

↓

Retry Request

Database Error

↓

Show Notification

Authentication Error

↓

Return to Login

Network Error

↓

Retry

---

# Future User Flow

Workspace

↓

Coding Challenge

↓

Monaco Editor

↓

Submit Code

↓

AI Code Review

↓

Feedback

↓

Save Progress

# Visual User Flow
Landing

    │

    ▼

Login

    │

    ▼

Workspace

    │

    ▼

Generate Challenge

    │

    ▼

AI Generate

    │

    ▼

Solve Challenge

    │

    ▼

Submit

    │

    ▼

AI Feedback

    │

    ▼

Save Submission

    │

    ▼

Update Progress

    │

    ▼

History