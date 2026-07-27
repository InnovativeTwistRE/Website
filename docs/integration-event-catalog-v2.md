# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- automation-v2.md
- api-design-standards-v2.md
- audit-logging-v2.md

# Canonical References

All payload values must match `canonical-reference.md`.

All events must conform to `event-envelope.md`.

No new canonical values are introduced.

# Integration Event Catalog
Version: 2.0

## Purpose

Define the catalog and governance rules for events exchanged between platform services and external integrations.

## Related Specifications

- automation-v2.md
- workflow-engine-v2.md
- background-job-framework.md
- error-handling.md

## Functional Requirements

### Event Categories

- Authentication
- CRM
- Property Management
- Documents
- Reporting
- Notifications
- Messaging
- Payments
- AI

### Event Envelope

This document does not define a separate envelope.

Every event must use `event-envelope.md`.

### Event Naming

Use dot-delimited names:

- `lead.created`
- `lead.updated`
- `form.submitted`
- `property.created`
- `inspection.completed`
- `report.completed`
- `maintenance.requested`
- `lease.renewed`
- `integration.sync_failed`

### Versioning

- `event_version` is mandatory.
- Breaking payload changes require a new event version.
- Consumers must explicitly declare supported versions.
- Unsupported versions must fail safely and be logged.

### Idempotency

- `idempotency_key` is mandatory.
- Consumers must prevent duplicate business outcomes.
- Retries must preserve the same idempotency key.

## Data Model

Event catalog records should include:

- event_type
- current_version
- producer
- consumers
- payload_schema
- retention_period
- sensitivity_classification
- status
- created_at
- updated_at

## Permissions

Event visibility and payload access must respect `permissions.md`.

## Automation

Cataloged events trigger workflows defined in `automation-v2.md` and executed by `workflow-engine-v2.md`.

## AI Behavior

AI may summarize event flows and identify schema inconsistencies. AI may not change contracts automatically.

## Analytics

Track:

- Event volume
- Producer failures
- Consumer failures
- Unsupported versions
- Duplicate suppression
- Processing latency
- Dead-letter volume

## Acceptance Criteria

- No local event envelope conflicts with `event-envelope.md`.
- Every event includes `event_version` and `idempotency_key`.
- Event contracts are versioned and documented.
- Consumers handle retries safely.
- Events are traceable through audit logs.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Replaced the conflicting envelope with event-envelope.md |
