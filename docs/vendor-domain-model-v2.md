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


# Vendor Domain Model
Version: 2.1

## Purpose
Model contractors, inspectors, service providers, and other third-party vendors.

**Relationship to vendor-management.md:** This domain-model specification defines the vendor data and entity layer. `vendor-management.md` defines onboarding, assignments, operational workflows, and user-facing vendor management functionality.

## Related Specifications
- vendor-management.md
- maintenance-domain-model-v2.md
- inspection-domain-model-v2.md

## Functional Requirements
- Vendor profiles
- Certifications
- Insurance tracking
- Performance metrics
- Service areas
- Availability

## Data Model
- vendor_id
- company_name
- contact_id
- license_number
- insurance_expiration
- status
- service_categories

## Permissions
Vendor access is restricted to assigned work and authorized information.

## Automation
Assignment workflows and reminders use automation-v2.md.

## AI Behavior
AI may recommend vendors based on history and performance.

## Analytics
Response time, completion rate, quality score, cost variance.

## Acceptance Criteria
Vendor records support all maintenance and inspection workflows.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|2.1|2026-07-20|Joshua/AI|Restored detailed v1 content and retained relationship clarification.|
