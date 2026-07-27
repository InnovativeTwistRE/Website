# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md
- maintenance-management.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# Maintenance Domain Model
Version: 2.0

## Purpose

Define maintenance requests, vendors, work orders, costs, communications, and completion records at the data and entity level.

**Relationship to maintenance-management.md:** This domain-model specification is the data and entity layer underneath the maintenance feature PRD in `maintenance-management.md`; the feature PRD defines the user experience, operational workflows, interfaces, and business behavior.

## Related Specifications

- maintenance-management.md
- property-management-domain-v2.md
- workflow-engine-v2.md
- business-rules-catalog.md
- media-asset-management.md

## Functional Requirements

- Maintenance request records
- Work orders
- Vendor assignments
- Priority and status tracking
- Estimates and approvals
- Completion verification
- Cost tracking
- Media and document references
- Communication history
- Property and lease relationships

## Data Model

- maintenance_id
- property_id
- lease_id
- tenant_id
- owner_id
- vendor_id
- work_order_id
- priority
- status
- description
- estimated_cost
- approved_cost
- final_cost
- opened_at
- completed_at
- created_at
- updated_at

## Permissions

Owners, tenants, vendors, agents, property managers, Admin, and Joshua receive access only to the records and actions allowed by `permissions.md`.

## Automation

Status changes publish canonical events.

Approved workflows may assign vendors, send updates, create reminders, and escalate overdue work through `automation-v2.md`.

## AI Behavior

AI may classify requests, summarize communication, identify duplicate requests, and recommend priority.

AI may not authorize spending, approve vendors, or change evidence without human approval.

## Analytics

Track:

- Initial response time
- Time to assignment
- Completion time
- Vendor performance
- Cost variance
- Reopened requests
- Request volume by property and category

## Acceptance Criteria

- Maintenance entities support all workflows in `maintenance-management.md`.
- Costs and approvals remain traceable.
- Events conform to `event-envelope.md`.
- Permissions are enforced.
- Maintenance history is complete and auditable.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Clarified relationship to maintenance-management.md and expanded the data-layer definition |
