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


# Report Registry
Version: 1.0

## Purpose
Maintain the authoritative registry of platform reports.

## Related Specifications
- report-scheduling-framework.md
- business-rules-catalog.md
- analytics-dashboard.md

## Functional Requirements
- Canonical report mapping
- Version history
- Ownership
- Availability
- Deprecation

## Data Model
- report_id
- canonical_name
- version
- owner
- status

## Permissions
Report access follows permissions.

## Automation
Scheduled reports publish completion events.

## AI Behavior
AI may recommend report improvements.

## Analytics
Report usage, generation success, failures.

## Acceptance Criteria
Every report maps to canonical Report Names.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
