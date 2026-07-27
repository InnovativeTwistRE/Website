# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- permissions.md
- automation-v2.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.


# Document Generation Framework
Version: 1.0

## Purpose
Define document creation, templates, merge fields, PDFs, and export workflows.

**Relationship to document-lifecycle-framework.md:** This specification defines the feature-layer behavior. Canonical entities, relationships, and lifecycle originate in `document-lifecycle-framework.md`.

## Related Specifications
- document-lifecycle-framework.md
- workflow-engine-v2.md
- event-envelope.md

## Functional Requirements
- User-facing workflows
- Business rules
- Notifications
- Validation
- Audit integration
- Error handling

## Data Model
Uses canonical entities from `document-lifecycle-framework.md` and does not redefine them.

## Permissions
Access follows `permissions.md`.

## Automation
Consumes `event-envelope.md` and `automation-v2.md`.

## AI Behavior
AI may assist with recommendations, summaries, and drafting but cannot execute privileged actions without authorization.

## Analytics
Track adoption, completion rates, processing time, and failures.

## Acceptance Criteria
- No duplication of domain-model definitions.
- All workflows consume canonical entities.
- Events conform to the canonical event envelope.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
