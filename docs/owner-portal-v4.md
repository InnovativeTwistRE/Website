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


# Owner Portal Feature Specification
Version: 3.0

## Purpose
Define owner-facing workflows for managed properties.

**Relationship to owner-portal-domain.md:** Owner portal entities originate in the owner portal domain model.

## Related Specifications
- owner-portal-domain.md
- financial-domain-model.md
- report-registry.md

## Functional Requirements
- Financial statements & distributions
- Income/expense summary
- Maintenance status and approval requests
- Inspection reports and history
- Lease expiration and renewal visibility
- Document vault (management agreement, tax documents, 1099s)
- Secure messaging with property manager
- Owner Statement delivery (canonical report name)

## Data Model
- owner_id
- statement_id
- distribution_id
- inspection_report_id
- maintenance_approval_id
- lease_id
- document_id

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
