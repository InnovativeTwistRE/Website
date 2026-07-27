# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- database.md
- permissions.md
- audit-logging-v2.md
- lease-management.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# Lease Domain Model
Version: 2.0

## Purpose

Define lease entities, parties, terms, versions, amendments, renewals, expirations, and termination records.

**Relationship to lease-management.md:** This domain-model specification defines the data and entity layer underneath the lease feature PRD in `lease-management.md`; the feature PRD defines user-facing lease workflows, interfaces, notifications, and operational rules.

## Related Specifications

- lease-management.md
- property-management-domain-v2.md
- document-lifecycle-framework.md
- workflow-engine-v2.md
- digital-signature-framework.md

## Functional Requirements

- Lease records
- Lease parties
- Lease terms
- Version history
- Amendments
- Renewals
- Expiration
- Termination
- Document references
- Signature status
- Compliance dates
- Property and tenant relationships

## Data Model

- lease_id
- property_id
- owner_id
- tenant_ids
- lease_version
- start_date
- end_date
- status
- rent_amount
- deposit_amount
- signed_document_id
- renewal_of_lease_id
- terminated_at
- created_at
- updated_at

## Permissions

Lease access follows role-based permissions in `permissions.md`.

Tenants and owners may access only leases for which they are authorized parties.

## Automation

Lease milestones emit canonical events.

Automations may schedule renewal reminders, expiration notices, document requests, and review tasks through `automation-v2.md`.

## AI Behavior

AI may summarize lease obligations, identify upcoming dates, and draft renewal communication.

AI may not interpret legal rights conclusively, alter signed terms, or execute agreements.

## Analytics

Track:

- Renewal rate
- Expiration pipeline
- Amendment volume
- Signature completion time
- Lease duration
- Termination reasons
- Upcoming compliance dates

## Acceptance Criteria

- Lease entities support all workflows in `lease-management.md`.
- Every lease version is immutable and auditable.
- Signed documents remain linked to the correct version.
- Events conform to `event-envelope.md`.
- Permissions are enforced.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Clarified relationship to lease-management.md and expanded the data-layer definition |
