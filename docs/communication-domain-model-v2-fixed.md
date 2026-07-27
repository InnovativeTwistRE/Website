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


# Communication Domain Model
Version: 2.1

## Purpose
Define emails, SMS, calls, chats, notes, and conversation threads as shared platform entities.

**Relationship to messaging-system-v2.md:** This domain-model specification defines the underlying communication entities. `messaging-system-v2.md` defines messaging features, delivery workflows, channels, UI behavior, and operational logic built on these entities.

## Related Specifications
- messaging-system-v2.md
- notification-template-framework.md
- crm-domain-model.md

## Functional Requirements
- Conversation threads
- Messages
- Attachments
- Delivery status
- Read receipts
- Communication preferences

## Data Model
- communication_id
- thread_id
- sender_id
- recipient_id
- channel
- status
- created_at

## Permissions
Communications are visible only to authorized participants and staff.

## Automation
Outbound and inbound communications publish canonical events.

## AI Behavior
AI may summarize conversations and draft responses but cannot send messages without authorization.

## Analytics
Delivery rates, response time, engagement, unread messages.

## Acceptance Criteria
All communication channels use the same underlying entity model.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|2.1|2026-07-20|Joshua/AI|Restored detailed v1 content and retained relationship clarification.|
