# JasperOS Engineering Rules

## Mission

JasperOS is the Executive Operating Interface.

It consumes ExecutiveStateProtocol state.
It does not create executive truth.

---

# Source of Truth

ExecutiveStateProtocol v3.0.0 is immutable.

Never:
- rename keys
- remove fields
- restructure schemas
- create parallel executive state models

---

# Architecture

Required flow:

ExecutiveStateProtocol
        ↓
Domain State Providers
        ↓
Application Logic
        ↓
React Components
        ↓
User Interface

---

# Development Rules

Before implementing any feature:

1. Read EXECUTIVE_CONTEXT.md
2. Check existing decisions
3. Check current architecture
4. Preserve backwards compatibility

---

# Code Rules

Prefer:

- reusable components
- typed interfaces
- domain separation
- provider patterns
- explicit data flow

Avoid:

- hardcoded executive data
- duplicated state
- business logic inside UI components
- schema modifications

---

# Feature Development

Every feature must answer:

1. Which executive capability does this enable?
2. Which state domain does it consume?
3. Does it require protocol changes?

If protocol changes are required, stop and request approval.