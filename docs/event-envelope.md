# Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- audit-logging-v2.md
- error-handling.md

# Canonical References

This specification must be validated against `canonical-reference.md`.

No new User Roles, Account Status Values, Lead Types, Inspection Types, or Report Names are introduced.

# Event Envelope Standard
Version: 1.0

## Purpose

Define the single canonical event envelope used by `automation.md`, the workflow engine, internal services, and external integrations.

## Related Specifications

- automation.md
- workflow-engine.md
- integration-event-catalog.md
- background-job-framework.md
- audit-logging-v2.md
- api-design-standards.md

## Functional Requirements

Every event must use the following envelope:

| Field | Required | Description |
|---|---:|---|
| `event_id` | Yes | Globally unique event identifier. |
| `event_type` | Yes | Dot-delimited event name, such as `lead.created`. |
| `event_version` | Yes | Version of the event contract, such as `1.0`. |
| `occurred_at` | Yes | UTC timestamp when the business event occurred. |
| `actor_type` | Yes | Type of actor that initiated the event, such as user, system, integration, or automation. |
| `actor_id` | Conditional | Identifier for the initiating actor when one exists. |
| `organization_id` | Conditional | Organization or business account context. |
| `user_id` | Conditional | Related user identifier. |
| `contact_id` | Conditional | Related contact identifier. |
| `lead_id` | Conditional | Related lead identifier. |
| `property_id` | Conditional | Related property identifier. |
| `analysis_id` | Conditional | Related analysis identifier. |
| `report_id` | Conditional | Related report identifier. |
| `entity_type` | Yes | Primary business entity represented by the event. |
| `entity_id` | Yes | Identifier for the primary business entity. |
| `payload` | Yes | Event-specific structured data. |
| `correlation_id` | Yes | Identifier connecting related actions across services. |
| `idempotency_key` | Yes | Stable key preventing duplicate processing. |
| `source` | Yes | Service, application, integration, or worker that emitted the event. |
| `metadata` | No | Non-business processing context that does not belong in `payload`. |

### Required Rules

- `event_id` must be unique for every emitted event.
- `idempotency_key` must remain stable when the same event is retried.
- `event_version` must change when the contract changes incompatibly.
- `occurred_at` must represent the original business occurrence time, not retry time.
- Canonical values inside `payload` must match `canonical-reference.md`.
- Consumers must ignore unknown optional fields.
- Sensitive values must not be placed in logs or unrestricted metadata.
- Events must be immutable after publication.

### Canonical Example

```json
{
  "event_id": "evt_01JXYZ123",
  "event_type": "lead.created",
  "event_version": "1.0",
  "occurred_at": "2026-07-20T18:30:00Z",
  "actor_type": "user",
  "actor_id": "usr_123",
  "organization_id": "org_001",
  "user_id": "usr_123",
  "contact_id": "con_456",
  "lead_id": "lead_789",
  "property_id": null,
  "analysis_id": null,
  "report_id": null,
  "entity_type": "lead",
  "entity_id": "lead_789",
  "payload": {
    "lead_type": "buyer"
  },
  "correlation_id": "cor_01JXYZ456",
  "idempotency_key": "lead.created:lead_789:1",
  "source": "crm-service",
  "metadata": {}
}
```

## Data Model

The event store or message transport must preserve every required envelope field without renaming.

Recommended indexed fields:

- `event_id`
- `event_type`
- `event_version`
- `occurred_at`
- `entity_type`
- `entity_id`
- `correlation_id`
- `idempotency_key`
- `source`

## Permissions

Event producers and consumers must enforce `permissions.md`.

Events must not expose records to services or users that lack authorization for the underlying entity.

## Automation

`automation.md` must publish and consume events using this envelope exactly.

Workflow retries must reuse the original `idempotency_key` while generating a new delivery attempt record.

## AI Behavior

AI may summarize event histories but may not alter, invent, or silently repair an event envelope.

## Analytics

Track:

- Event volume by `event_type`
- Processing success and failure
- Duplicate suppression by `idempotency_key`
- Consumer lag
- Unsupported `event_version` failures
- Correlation-chain completion

## Acceptance Criteria

- `automation.md` and `integration-event-catalog.md` reference this file instead of defining their own envelope.
- Every event includes `event_version` and `idempotency_key`.
- Event schemas validate before publication.
- Duplicate deliveries do not create duplicate business outcomes.
- Event histories are traceable by `correlation_id`.
- Canonical values remain consistent with `canonical-reference.md`.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-20 | Joshua/AI | Established the canonical event envelope |
