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


# Tenant Portal Domain
Version: 1.0

## Purpose
Define tenant-facing portal capabilities and data boundaries.

## Related Specifications
- property-management-domain.md
- lease-domain-model.md
- maintenance-domain-model.md

## Functional Requirements
- Lease viewing
- Maintenance requests
- Payments
- Documents
- Messaging

## Data Model
- tenant_portal_id
- tenant_id
- lease_id
- preferences
- status

## Permissions
Tenants may access only their own records.

## Automation
Portal actions emit canonical events.

## AI Behavior
AI may answer questions using authorized tenant data only.

## Analytics
Portal adoption, request volume, response time.

## Acceptance Criteria
Tenant data isolation is enforced.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
