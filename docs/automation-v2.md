# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- workflow-engine-v2.md
- background-job-framework.md
- notification-system-v2.md
- audit-logging-v2.md
- error-handling.md

# Canonical References

This specification must be validated against `canonical-reference.md`.

All events must conform to `event-envelope.md`.

No new canonical values are introduced.

# Automation Architecture
Version: 2.0

## Purpose

Define how event-driven automation operates across the Innovative Twist Real Estate Platform.

## Related Specifications

- workflow-engine-v2.md
- integration-event-catalog-v2.md
- background-job-framework.md
- state-machine-definitions.md
- permissions.md

## Functional Requirements

### Core Principles

- Human-controlled for high-impact decisions
- Event-driven
- Idempotent
- Observable
- Permission-aware
- Retryable when failures are temporary
- Reversible when business risk requires rollback

### Components

- Event producer
- Event bus or queue
- Workflow engine
- Job workers
- Scheduler
- Notification service
- Audit log
- Retry manager
- Dead-letter queue
- Administrative monitoring interface

### Event Model

Automation must not define a separate event schema.

All automation events must use the canonical envelope in `event-envelope.md`, including:

- `event_version`
- `idempotency_key`
- `correlation_id`
- `entity_type`
- `entity_id`

### Human Review Requirements

Human approval is required for:

- Legal notices
- Applicant approval or denial
- Tenant screening outcomes
- Offer strategy
- Financial recommendations
- Property value conclusions
- Public-facing communications with material consequences
- Contract execution
- Payment actions

### Workflow Status

Recommended workflow execution statuses:

- pending
- queued
- running
- waiting
- completed
- failed
- canceled
- partially_completed
- requires_review

These are workflow execution statuses, not Account Status Values.

### Retry Rules

Retry temporary failures using:

- Exponential backoff
- Limited retry count
- Jitter
- Dead-letter routing after final failure

Do not retry permanent failures automatically.

### Scheduled Jobs

Scheduled jobs should emit canonical events rather than contain all business logic directly.

## Data Model

Workflow execution records should include:

- workflow_execution_id
- workflow_definition_id
- triggering_event_id
- correlation_id
- idempotency_key
- status
- current_step
- retry_count
- started_at
- completed_at
- failed_at
- error_code

## Permissions

Automations must operate under explicit service permissions and may not exceed the access of the underlying workflow context.

## Automation

This document defines the automation architecture itself.

Workflow definitions execute through `workflow-engine-v2.md`.

## AI Behavior

AI may recommend workflow improvements, summarize failures, and draft content. AI may not bypass approval gates or fabricate successful execution.

## Analytics

Track:

- Workflow volume
- Completion rate
- Failure rate
- Retry rate
- Dead-letter volume
- Time to completion
- Human-review frequency
- Duplicate suppression

## Acceptance Criteria

- All events validate against `event-envelope.md`.
- Duplicate deliveries do not create duplicate actions.
- High-impact actions require approval.
- Failed steps are visible and traceable.
- Permissions are enforced at every step.
- Workflow execution history is auditable.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Reconciled the event model with the canonical event envelope |
