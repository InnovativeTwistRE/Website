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


# Consumer Domain Model
Version: 1.0

## Purpose
Define the shared entity model for buyers, sellers, renters, homeowners, investors, and prospects.

## Related Specifications
- crm-domain-model.md
- buyer-portal.md
- seller-portal.md
- tenant-portal-domain.md
- owner-portal-domain.md

## Functional Requirements
- Consumer profiles
- Household relationships
- Preferences
- Communication preferences
- Lifecycle stages
- Consent management

## Data Model
- consumer_id
- contact_id
- profile_type
- household_id
- preferences
- consent_status
- lifecycle_stage
- created_at
- updated_at

## Permissions
Consumers may access only their own records. Staff access follows permissions.md.

## Automation
Lifecycle changes publish canonical events and may trigger onboarding or nurture workflows.

## AI Behavior
AI may summarize history and recommend next actions but may not modify profile data without authorization.

## Analytics
Profile completion, engagement, conversion, communication preferences.

## Acceptance Criteria
All consumer-facing modules use this shared entity model.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
