# Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md


# Canonical References

This specification must be validated against `canonical-reference.md`.

No new canonical values are introduced.

# State Machine Definitions
Version: 1.0

## Purpose
Define lifecycle state transitions for major platform entities.

## Covered Entities
- User (using canonical Account Status Values)
- Lead
- Transaction
- Lease
- Maintenance Request
- Inspection

## Functional Requirements
- Explicit allowed transitions
- Invalid transition rejection
- Audit logging for every transition
- Automation hooks on state changes

## Acceptance Criteria
Every state transition is deterministic, validated, and auditable.

## Revision History
| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
