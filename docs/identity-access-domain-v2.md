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
Version: 2.1

## Purpose
Define users, identities, sessions, authentication, authorization, and delegated access.

**Relationship to authentication-v2.md and permissions.md:** This domain-model specification defines the shared identity and authorization data layer. `authentication-v2.md` defines authentication behavior and flows, while `permissions.md` defines authorization rules and enforcement built on these entities.

## Related Specifications
- authentication-v2.md
- permissions.md
- security-baseline-v2.md

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
Identity data remains secure, auditable, permission-aware, and is consumed by authentication and authorization feature specifications.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
|2.1|2026-07-20|Joshua/AI|Restored detailed v1 content and retained relationship clarification.|
