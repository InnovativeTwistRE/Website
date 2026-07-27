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

# Notification System PRD
Version: 2.0

## Purpose
Provide permission-aware notifications across email, SMS, push, and in-app messaging.

## Supported User Roles
Reference the canonical User Roles list.

## Functional Requirements
- In-app notifications
- Email
- SMS
- Push
- Delivery tracking
- Read/unread state
- Quiet hours
- Retry handling
- User preferences

## Events
Notifications may be generated from canonical Lead Types, Inspection Types, CRM workflows, reports, appointments, maintenance, and document workflows.

## AI Behavior
Prioritize notifications, group similar events, and generate daily summaries.

## Acceptance Criteria
Auditable, permission-aware, configurable, and integrated with reporting-engine.md.
