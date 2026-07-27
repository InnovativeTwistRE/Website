# Dependencies

Relies on:
- canonical-reference.md
- README.md

- database.md
- permissions.md
- file-storage.md

# Search Framework
Version: 2.0

## Canonical References
Filters for roles, statuses, lead types, inspection types, and report names must source values from canonical-reference.md.

## Purpose
Provide permission-aware global search.

## Searchable Objects
- Users
- Properties
- Transactions
- Documents
- Reports
- Messages
- Maintenance Requests
- Inspections

## Features
- Full-text search
- Faceted filters
- Saved searches
- Permission-aware indexing

## Acceptance Criteria
Search filters never introduce values outside canonical-reference.md.

## Revision History
| Version | Summary |
|---|---|
| 2.0 | Added canonical filter sourcing |
