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


# Tenant Portal Feature Specification
Version: 3.0

## Purpose
Define tenant-facing workflows for managed properties.

**Relationship to tenant-portal-domain.md:** Preserves the existing tenant portal feature set while using canonical entities from the domain model.

## Related Specifications
- tenant-portal-domain.md
- lease-domain-model-v2.md
- maintenance-domain-model-v2.md

## Functional Requirements
- Preserves existing tenant-portal.md functionality
- Rent status
- Payment history
- AutoPay
- Maintenance requests with photo/video
- Lease renewal workflow
- Move-in resources
- Move-out resources

## Data Model
- tenant_id
- lease_id
- payment_id
- maintenance_request_id
- portal_preferences

## Permissions
Access follows `permissions.md` and related domain models.

## Automation
Uses `automation-v2.md` and canonical events from `event-envelope.md`.

## AI Behavior
AI may summarize, recommend, draft communications, and surface insights. AI may not execute privileged actions without authorization.

## Analytics
Track adoption, completion, usage, processing time, failures, and user engagement.

## Acceptance Criteria
- Consumes canonical domain entities.
- Does not redefine entity models.
- Conforms to specification-authoring-standard-v2.md.

## Revision History

|Version|Date|Author|Summary|
|---|---|---|---|
|3.0|2026-07-20|Joshua/AI|Expanded to full specification structure.|
