# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md
- lease-domain-model-v2.md
- maintenance-domain-model-v2.md
- inspection-domain-model-v2.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# Property Management Domain
Version: 2.0

## Purpose

Define the shared property-management domain connecting managed properties, owners, tenants, leases, inspections, maintenance, reporting, and portal access.

## Related Specifications

- inspection-system.md
- inspection-domain-model-v2.md
- maintenance-management.md
- maintenance-domain-model-v2.md
- lease-management.md
- lease-domain-model-v2.md
- owner-portal-domain.md
- tenant-portal-domain.md

## Functional Requirements

- Managed property records
- Owner relationships
- Tenant relationships
- Lease relationships
- Maintenance relationships
- Inspection relationships
- Reporting relationships
- Portal authorization boundaries
- Historical ownership and occupancy tracking
- Cross-domain activity timeline

## Data Model

- property_id
- owner_id
- tenant_id
- lease_id
- inspection_id
- maintenance_id
- management_status
- management_start_date
- management_end_date
- created_at
- updated_at

## Permissions

Owner, tenant, vendor, agent, property manager, Admin, and Joshua access must remain isolated according to `permissions.md`.

## Automation

Recurring tasks, reminders, inspections, lease milestones, maintenance updates, and report generation execute through `automation-v2.md`.

All events must conform to `event-envelope.md`.

## AI Behavior

AI may summarize property history, identify maintenance trends, surface upcoming lease dates, and draft operational communications.

AI may not approve applicants, authorize spending, issue legal notices, or change signed documents without human approval.

## Analytics

Track:

- Occupancy
- Lease renewal
- Maintenance response
- Inspection completion
- Owner and tenant portal engagement
- Property-level operating trends
- Outstanding operational tasks

## Acceptance Criteria

- Related Specifications reference actual filenames.
- Property records connect correctly to lease, maintenance, and inspection domain entities.
- Feature PRDs and domain models have clearly separated responsibilities.
- Permissions remain isolated by authorized relationship.
- Cross-domain activity is auditable.
- Canonical values are used consistently.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Corrected inspection and maintenance references and aligned the domain with the related feature PRDs |
