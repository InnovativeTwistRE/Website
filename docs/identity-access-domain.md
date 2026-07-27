**Superseded by identity-access-domain-v2.md.** This file is retained for historical reference only. It is not an implementation source — use identity-access-domain-v2.md instead.

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


# Identity & Access Domain
Version: 1.0

## Purpose
Define users, identities, sessions, authentication, authorization, and delegated access.

## Related Specifications
- security-baseline-v2.md
- permissions.md
- authentication.md

## Functional Requirements
- User identities
- Sessions
- MFA
- Delegated access
- Roles
- Access history

## Data Model
- identity_id
- user_id
- session_id
- role
- account_status
- last_login_at

## Permissions
Uses canonical User Roles and Account Status Values exactly.

## Automation
Security events emit canonical events for monitoring and audit.

## AI Behavior
AI may identify suspicious access patterns but cannot grant permissions.

## Analytics
Login success, MFA adoption, session duration, access anomalies.

## Acceptance Criteria
Identity data remains secure, auditable, and permission-aware.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|1.0|2026-07-20|Joshua/AI|Initial specification|
