# Dependencies

Relies on:
- canonical-reference.md
- README.md

- database.md
- permissions.md
- audit-logging-v2.md

# Entity Relationship Model
Version: 2.0

## Canonical References
Uses canonical-reference.md for User Roles, Account Status Values, Lead Types, Inspection Types, and Report Names.

## Purpose
Define the core platform entities and their relationships.

## Core Entities
- User
- Property
- Lead
- Transaction
- Lease
- Maintenance Request
- Inspection
- Vendor
- Document
- Report

## Relationship Rules
- User role values must match canonical-reference.md.
- Account status values must match canonical-reference.md.
- Lead.type must match canonical-reference.md.
- Inspection.type must match canonical-reference.md.
- Report.name must use canonical report names.

## Acceptance Criteria
Every enumerated field validates against canonical-reference.md.

## Revision History
| Version | Summary |
|---|---|
| 2.0 | Added canonical enum enforcement |
