# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md
- inspection-system.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# Inspection Domain Model
Version: 2.0

## Purpose

Model inspections, findings, photos, follow-up actions, and the underlying entities that support inspection operations.

**Relationship to inspection-system.md:** This domain-model specification defines the data and entity layer underneath the inspection feature PRD in `inspection-system.md`; the feature PRD defines user-facing behavior, workflows, screens, and operational requirements.

## Related Specifications

- inspection-system.md
- property-management-domain-v2.md
- media-asset-management.md
- report-registry.md
- workflow-engine-v2.md

## Functional Requirements

- Inspection records
- Inspection scheduling references
- Findings
- Photos and supporting evidence
- Follow-up tasks
- Final report references
- Historical version preservation
- Relationship mapping to properties, inspectors, tenants, owners, and maintenance actions

## Data Model

- inspection_id
- property_id
- inspection_type
- inspector_id
- scheduled_at
- started_at
- completed_at
- status
- findings
- media_asset_ids
- report_id
- created_at
- updated_at

## Permissions

Inspection visibility and modification rights follow `permissions.md`.

Inspection evidence must remain inaccessible to unauthorized users.

## Automation

Completed inspections emit canonical events through `event-envelope.md`.

Inspection findings may create follow-up tasks or maintenance requests through `automation-v2.md`.

## AI Behavior

AI may summarize findings, identify patterns, and draft follow-up language.

AI may not alter inspection evidence, photographs, timestamps, or original findings.

## Analytics

Track:

- Inspection completion rate
- Inspection duration
- Unresolved findings
- Follow-up completion
- Inspection frequency
- Findings by property and category

## Acceptance Criteria

- Inspection entities support every workflow in `inspection-system.md`.
- Inspection evidence remains historically accurate.
- Canonical Inspection Types are used exactly.
- Events conform to `event-envelope.md`.
- Access is permission-controlled and auditable.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Clarified relationship to inspection-system.md and expanded the data-layer definition |
