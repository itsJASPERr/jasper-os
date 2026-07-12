# JasperOS Architecture

## Layers

## Executive Layer

Contains:

- decisions
- priorities
- risks
- opportunities
- dependencies

Source:

ExecutiveStateProtocol v3.0.0


## State Layer

Responsible for:

- loading domains
- validation
- transformation


Example:

executive.json
portfolio.json
operations.json
knowledge.json


## Application Layer

Responsible for:

- workflows
- calculations
- permissions


## Interface Layer

Responsible for:

- dashboards
- cards
- views
- navigation


Rules:

Interface never owns state.