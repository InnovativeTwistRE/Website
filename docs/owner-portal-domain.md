# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.


# Owner Portal Domain
Version: 1.0

## Purpose
Define owner-facing portal capabilities for managed properties.

## Related Specifications
- property-management-domain.md
- report-registry.md
- payment-framework.md

## Functional Requirements
- Portfolio dashboard
- Statements
- Reports
- Documents
- Messaging

## Data Model
- owner_portal_id
- owner_id
- property_id
- preferences
- status

## Permissions
Owners may access only their authorized properties.

## Automation
Report generation and messaging use automation workflows.

## AI Behavior
AI may summarize portfolio performance.

## Analytics
Portal engagement, report usage, statement delivery.

## Acceptance Criteria
Owner data remains isolated and auditable.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
