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


# Notification Template Framework
Version: 1.0

## Purpose
Centralize reusable templates for email, SMS, push, and in-app notifications.

## Related Specifications
- notification-system-v2.md
- messaging-system-v2.md
- automation-v2.md

## Functional Requirements
- Versioned templates
- Variable substitution
- Localization-ready structure
- Preview mode
- Test sends
- Approval workflow before publishing

## Data Model
- template_id
- channel
- template_name
- version
- status
- subject
- body
- variables
- created_at
- updated_at

## Permissions
Only Admin and Joshua (owner) may publish production templates.

## Automation
Templates are rendered by automation workflows using the canonical event envelope.

## AI Behavior
AI may draft templates but cannot publish them.

## Analytics
Track delivery, open rate, click rate, and template usage.

## Acceptance Criteria
Templates are reusable, versioned, and auditable.

## Revision History
|Version|Date|Author|Summary|
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
