# Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- audit-logging-v2.md
- notification-system-v2.md
- api-integrations.md

# Canonical References

This specification must be validated against `canonical-reference.md`.

No new User Roles, Account Status Values, Lead Types, Inspection Types, or Report Names are introduced.

# Error Handling PRD
Version: 1.0

## Purpose
Define consistent application, integration, automation, and user-facing error behavior across the platform.

## Related Specifications
- data-validation-framework.md
- authentication.md
- file-storage.md
- automation.md

## Functional Requirements

### Error Categories
- Validation errors
- Authentication errors
- Authorization errors
- Resource-not-found errors
- Conflict errors
- Rate-limit errors
- Integration errors
- File-processing errors
- Automation errors
- Internal system errors

### User Experience
- Show a plain-language message
- Preserve user-entered data whenever possible
- Provide a safe retry action when appropriate
- Avoid exposing secrets, stack traces, or internal identifiers
- Display a support reference using the correlation ID

### API Error Format
Every API error must return:
- `status`
- `code`
- `message`
- `details`
- `correlation_id`
- `retryable`

### Retry Rules
- Retry only idempotent operations automatically
- Use exponential backoff for eligible integration failures
- Stop retrying after the configured threshold
- Route exhausted failures to an exception queue
- Never retry invalid canonical values

## Data Model
Error records may contain:
- error_event_id
- correlation_id
- actor_id
- service
- operation
- error_code
- severity
- retry_count
- resolved_at
- created_at

## Permissions
User-facing detail must be role-appropriate. Technical diagnostics are limited to Admin and Joshua (owner).

## Automation
Critical failures may generate alerts through `notification-system-v2.md`.

## AI Behavior
AI may summarize the likely cause and suggest a next step. It may not invent a successful result when an operation fails.

## Analytics
Track:
- Error volume
- Error rate by service
- Mean time to resolution
- Retry success rate
- Repeated integration failures
- User-impacting incidents

## Acceptance Criteria
- All errors include a correlation ID.
- Sensitive system details are never exposed to unauthorized users.
- Retry behavior is deterministic and auditable.
- Failed operations do not produce false success states.
- Critical errors generate the required alerts.

## Revision History
| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-20 | Joshua/AI | Initial specification |
