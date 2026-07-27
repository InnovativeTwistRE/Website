# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- automation-v2.md
- database.md
- permissions.md
- audit-logging-v2.md
- background-job-framework.md

# Canonical References

Uses canonical values from `canonical-reference.md`.

All workflow-triggering events must conform to `event-envelope.md`.

No new canonical values are introduced.

# Workflow Engine
Version: 2.0

## Purpose

Provide the reusable execution engine for workflows across CRM, transactions, property management, inspections, reporting, and communications.

**Relationship to automation.md:** This is the generic execution engine on which the workflows defined by `automation-v2.md` run.

## Related Specifications

- automation-v2.md
- state-machine-definitions.md
- integration-event-catalog-v2.md
- error-handling.md

## Functional Requirements

- Trigger-based execution
- Conditional branching
- Scheduled steps
- Human approval steps
- Parallel and sequential actions
- Retry and rollback support
- Step-level status tracking
- Pause, resume, cancel, and replay controls
- Versioned workflow definitions

## Data Model

- workflow_definition_id
- workflow_version
- workflow_execution_id
- triggering_event_id
- correlation_id
- idempotency_key
- status
- current_step
- context
- retry_count
- started_at
- completed_at

## Permissions

Workflow actions must operate within the permissions of the service account and business context.

## Automation

The engine executes the workflow definitions and policies established in `automation-v2.md`.

## AI Behavior

AI may recommend optimization and summarize execution histories. It cannot bypass approvals, permissions, or validation.

## Analytics

Track:

- Execution count
- Completion rate
- Step failure rate
- Average duration
- Retry volume
- Human approval wait time
- Rollback frequency

## Acceptance Criteria

- Workflows execute from canonical events.
- Every execution is auditable and replayable.
- Approval gates cannot be skipped.
- Idempotency prevents duplicate business effects.
- Versioned workflows preserve historical reproducibility.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Added the automation relationship note and full required structure |
