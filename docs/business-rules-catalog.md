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


# Business Rules Catalog
Version: 1.0

## Purpose
Maintain a centralized catalog of business rules referenced throughout the platform.

## Related Specifications
- workflow-engine-v2.md
- automation-v2.md
- data-validation-framework.md

## Functional Requirements
- Unique rule identifiers
- Rule ownership
- Effective dates
- Version history
- Dependency tracking
- Rule deprecation

## Data Model
- rule_id
- rule_name
- description
- version
- effective_date
- status
- owner

## Permissions
Only Admin and Joshua (owner) may modify production rules.

## Automation
Workflow decisions reference rule identifiers instead of hard-coded logic.

## AI Behavior
AI may explain rules but may not change them.

## Analytics
Track rule usage and exception frequency.

## Acceptance Criteria
Business rules are versioned, discoverable, and reusable.

## Revision History
|Version|Date|Author|Summary|
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
