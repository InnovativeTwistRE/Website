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


# Report Scheduling Framework
Version: 1.0

## Purpose
Schedule recurring generation and delivery of canonical reports.

## Related Specifications
- reporting-engine.md
- owner-reporting.md
- market-reports.md

## Functional Requirements
- Daily, weekly, monthly schedules
- On-demand execution
- Delivery preferences
- Retry failed deliveries
- Archive generated reports

## Data Model
- schedule_id
- report_name
- recipient_id
- cadence
- next_run_at
- last_run_at
- status

## Permissions
Report visibility follows canonical User Roles and permissions.

## Automation
Scheduled executions publish events using event-envelope.md.

## AI Behavior
AI may recommend optimal reporting cadence.

## Analytics
Track delivery success, failures, and report usage.

## Acceptance Criteria
Only canonical Report Names are schedulable.

## Revision History
|Version|Date|Author|Summary|
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
