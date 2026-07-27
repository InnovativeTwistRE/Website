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


# CRM Domain Model
Version: 1.0

## Purpose
Define the core CRM entities and relationships.

## Related Specifications
- lead-management.md
- contact-management.md
- workflow-engine-v2.md

## Functional Requirements
- Lead lifecycle
- Contact management
- Activity timeline
- Opportunity tracking
- Assignment rules

## Data Model
- crm_record_id
- contact_id
- lead_id
- owner_id
- status
- created_at

## Permissions
CRM access follows permissions.md.

## Automation
CRM events publish via event-envelope.md.

## AI Behavior
AI may score, summarize, and prioritize leads without changing source data.

## Analytics
Lead conversion, response time, pipeline velocity.

## Acceptance Criteria
CRM entities are canonical, versioned, and auditable.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
