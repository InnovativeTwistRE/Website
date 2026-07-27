# Dependencies

Relies on:
- canonical-reference.md
- README.md

- database.md
- permissions.md

# Audit Logging PRD
Version: 2.0

## Canonical References
Audit event payloads must preserve exact canonical values from canonical-reference.md.

## Purpose
Maintain an immutable audit trail for critical actions.

## Logged Events
- Authentication
- Record creation, updates, and deletion
- Permission changes
- Document access
- Report generation
- AI interactions
- Workflow automation

## Required Fields
- timestamp
- actor_id
- actor_role
- action
- entity_type
- entity_id
- before_value
- after_value

## Acceptance Criteria
Canonical values appear exactly as defined in canonical-reference.md.

## Revision History
| Version | Summary |
|---|---|
| 2.0 | Added canonical value preservation |
