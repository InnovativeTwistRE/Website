# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- authentication.md
- permissions.md
- data-validation-framework.md
- error-handling.md
- audit-logging-v2.md

# Canonical References

API enumerations must match `canonical-reference.md`.

Event-producing APIs must use `event-envelope.md`.

No new canonical values are introduced.

# API Design Standards
Version: 2.0

## Purpose

Define consistent design requirements for internal and external platform APIs.

## Related Specifications

- api-integrations.md
- security-baseline-v2.md
- environment-configuration.md
- integration-event-catalog-v2.md

## Functional Requirements

- Resource-oriented endpoints
- Versioned APIs
- Consistent pagination
- Filtering and sorting
- Standard validation
- Standard error responses
- Correlation IDs
- Idempotency support
- Rate limiting
- Explicit authentication and authorization
- Backward-compatible change practices

### Naming

- Use plural resource paths.
- Use lowercase kebab-case paths.
- Use stable identifiers instead of display names.
- Preserve canonical enumeration values exactly.

### HTTP Behavior

- `GET` must be safe and idempotent.
- `PUT` and `DELETE` must be idempotent.
- `POST` must accept an idempotency key for retry-sensitive operations.
- Errors must follow `error-handling.md`.

## Data Model

API metadata should include:

- api_version
- endpoint
- method
- required_permission
- request_schema
- response_schema
- rate_limit
- owner
- status

## Permissions

Every endpoint must declare and enforce its required permission.

## Automation

APIs that produce business events must publish the canonical event envelope after successful transaction completion.

## AI Behavior

AI may assist with API documentation and schema review but may not invent unsupported endpoints or contracts.

## Analytics

Track:

- Request volume
- Latency
- Error rate
- Rate-limit events
- Authentication failures
- Idempotency conflicts
- Version usage

## Acceptance Criteria

- APIs follow consistent naming and response rules.
- Canonical values are validated.
- Permission checks occur server-side.
- Errors include correlation IDs.
- Retry-sensitive writes support idempotency.
- Event-producing endpoints use `event-envelope.md`.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Expanded to the full required specification structure |
