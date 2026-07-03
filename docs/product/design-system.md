# GITGUD Design System

Version: 1.0

Status: Draft

---

# Overview

The GITGUD Design System provides a consistent visual language and interaction model across the entire application.

The goal is to create a modern developer workspace that is clean, fast, minimal, and distraction-free.

---

# Design Principles

Developer First

Every interface should help developers practice with minimal distractions.

Low Noise

Reduce unnecessary colors, animations, and decorative elements.

High Function

Every component must serve a purpose.

Consistency

Maintain consistent spacing, typography, colors, and interactions.

Accessibility

Support keyboard navigation, readable typography, and sufficient color contrast.

---

# Design Keywords

Industrial

Minimal

Modern

Technical

Monochrome

Workspace

Terminal

IDE

---

# Layout

Max Width

1280px

Container

width: 100%

max-width: 1280px

padding-inline: 24px

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

# Spacing Scale

4px

8px

12px

16px

24px

32px

40px

48px

64px

96px

Use an 8-point spacing system whenever possible.

---

# Border Radius

Small

8px

Medium

12px

Large

16px

Extra Large

24px

Avoid overly rounded components.

---

# Border

Default

1px

Style

Solid

Color

Light

zinc-200

Dark

zinc-800

Borders should define hierarchy instead of shadows.

---

# Shadows

Minimal usage.

Prefer borders over shadows.

Only use shadows for:

- Dropdown
- Modal
- Popover

---

# Color Palette

## Light Theme

Background

White

Surface

zinc-50

Card

White

Border

zinc-200

Primary Text

zinc-950

Secondary Text

zinc-600

Accent

Emerald-500

Success

Emerald-500

Warning

Amber-500

Error

Rose-500

---

## Dark Theme

Background

zinc-950

Surface

zinc-900

Card

zinc-900

Border

zinc-800

Primary Text

White

Secondary Text

zinc-400

Accent

Emerald-400

Success

Emerald-400

Warning

Amber-400

Error

Rose-400

---

# Typography

Primary Font

Inter

Usage

Headings

Body

Buttons

Labels

---

Monospace Font

JetBrains Mono

Usage

Code

Metadata

XP

Level

Terminal

Statistics

---

# Typography Scale

Display

48

Heading 1

40

Heading 2

32

Heading 3

24

Heading 4

20

Body

16

Small

14

Caption

12

---

# Icons

Style

Outline

Stroke Width

Consistent

Recommended

Lucide Icons

Avoid

Filled Icons

Gradient Icons

3D Icons

---

# Buttons

Primary

Solid background

Used for primary actions.

Secondary

Outline button

Used for secondary actions.

Ghost

Transparent

Used for toolbar and navigation.

Danger

Rose

Used for destructive actions.

---

# Inputs

Border only.

No heavy shadow.

Support

Focus

Error

Disabled

---

# Cards

White (Light)

Zinc-900 (Dark)

Thin Border

Minimal Shadow

Padding

24px

---

# Navigation

Sidebar

Collapsed on mobile.

Topbar

Contains

Theme Toggle

Profile Menu

Breadcrumb

---

# Badges

Small

Monospace

Uppercase

Examples

BEGINNER

GO

JWT

API

---

# Terminal Component

Uses JetBrains Mono.

Shows blinking cursor.

Monochrome style.

Minimal animation.

---

# Motion

Fast

150ms

Hover

200ms

Avoid excessive animations.

Use transitions only to improve usability.

---

# Responsive Breakpoints

Mobile

<640px

Tablet

640–1024px

Desktop

>1024px

---

# Theme

Support

Light

Dark

System

Theme preference should be persisted.

---

# Accessibility

Keyboard Accessible

Visible Focus Ring

Semantic HTML

ARIA Labels where necessary

Minimum contrast ratio follows WCAG recommendations.

---

# Design Rules

Every page should answer:

What is the user's primary action?

That action should always be the most visually prominent element.

Remove anything that does not support the user's goal.
