# Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- api-integrations.md
- audit-logging-v2.md

# Canonical References

This specification must be validated against `canonical-reference.md`.

It uses the canonical definitions for:
- User Roles
- Account Status Values
- Lead Types
- Inspection Types
- Report Names

No new canonical values are introduced.

# Data Validation Framework
Version: 1.0

## Purpose
Define a shared validation layer for user input, API payloads, imported records, workflow updates, and generated reports.

## Related Specifications
- entity-relationship-model-v2.md
- permissions.md
- reporting-engine.md
- file-storage.md

## Functional Requirements

### Validation Layers
- Client-side validation for immediate feedback
- Server-side validation as the authoritative enforcement layer
- Database constraints for critical integrity rules
- Import validation for bulk uploads and integrations
- Report validation before generation and delivery

### Canonical Value Validation
The following fields must be checked against `canonical-reference.md`:
- User role
- Account status
- Lead type
- Inspection type
- Report name

### Input Rules
- Reject unknown enumerated values
- Normalize whitespace without changing meaningful content
- Validate email, phone, date, currency, percentage, and address formats
- Reject malformed identifiers
- Enforce required fields by workflow stage
- Preserve the original submitted value in the audit record when normalization occurs

### Error Response Structure
Every validation error must include:
- `field`
- `code`
- `message`
- `received_value`
- `expected_format`
- `correlation_id`

## Data Model
Validation errors may be recorded with:
- validation_event_id
- actor_id
- entity_type
- entity_id
- field_name
- error_code
- submitted_value
- normalized_value
- created_at

## Permissions
Validation rules apply consistently to all User Roles. Administrative interfaces may display additional technical detail, but they may not bypass critical integrity constraints.

## Automation
Failed imports must generate a downloadable error report and may trigger an in-app notification for the initiating user.

## AI Behavior
AI may explain validation failures in plain language but may not override or silently modify required values.

## Analytics
Track:
- Validation failures by field
- Repeated failure patterns
- Import rejection rates
- Canonical value mismatch attempts
- Most common user corrections

## Acceptance Criteria
- All canonical fields reject unapproved values.
- Client and server rules produce consistent outcomes.
- Validation failures are traceable through audit logs.
- Invalid data cannot be committed to protected records.
- Errors are understandable to nontechnical users.

## Revision History
| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-20 | Joshua/AI | Initial specification |
