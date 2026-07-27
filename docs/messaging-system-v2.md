# Dependencies

Relies on:
- README.md
- database.md
- permissions.md
- reporting-engine.md
- file-storage.md
- design-system.md
- ai-system.md

## Canonical References

This document uses the project's canonical definitions for:
- User Roles
- Account Status Values
- Lead Types
- Inspection Types
- Report Names

No new canonical values are introduced in this document.

# Messaging System PRD
Version: 2.0

## Purpose
Provide secure messaging between users defined by the canonical User Roles.

## Functional Requirements
- Direct messaging
- Group conversations
- Attachments
- Property-linked threads
- Read receipts
- Search
- Archive

## Permissions
Controlled by permissions.md and canonical Account Status values.

## AI Behavior
Summarize conversations and draft suggested replies without sending automatically.

## Acceptance Criteria
Encrypted, searchable, permission-controlled, and fully audited.
