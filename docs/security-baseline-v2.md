# Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- authentication.md
- permissions.md
- audit-logging-v2.md
- environment-configuration.md
- error-handling.md

# Canonical References

User access and account controls must use the User Roles and Account Status Values in `canonical-reference.md`.

No new canonical values are introduced.

# Security Baseline
Version: 2.0

## Purpose

Define the minimum security controls required across all applications, services, integrations, and environments.

## Related Specifications

- file-storage.md
- api-design-standards-v2.md
- retention-archival-policy.md
- backup-disaster-recovery-v2.md

## Functional Requirements

- Least-privilege access
- Multi-factor authentication support
- Secure password and session policies
- Encryption in transit
- Encryption at rest
- Rate limiting
- Input validation
- Secure secret storage
- Dependency vulnerability management
- Audit logging
- Incident alerting
- Regular credential rotation

## Data Model

Security events should record:

- security_event_id
- actor_id
- actor_role
- account_status
- action
- resource
- outcome
- ip_address
- user_agent
- correlation_id
- created_at

## Permissions

- Administrative security operations are limited to Admin and Joshua (owner).
- Canonical Account Status Values must control account accessibility.
- Suspended, locked, and archived accounts must not receive normal active access.

## Automation

Automated controls may lock accounts, revoke sessions, rate-limit requests, and alert authorized users based on defined security rules.

## AI Behavior

AI may summarize security events and identify anomalies. AI may not reveal secrets or independently change access permissions.

## Analytics

Track:

- Failed sign-in volume
- Locked accounts
- Privilege changes
- Suspicious access patterns
- Secret rotation compliance
- Vulnerability remediation time
- Security incident volume

## Acceptance Criteria

- Security controls are consistently enforced.
- Sensitive information is encrypted.
- Privileged activity is audited.
- Unauthorized access attempts fail safely.
- Canonical roles and statuses are used exactly.
- High-severity events create alerts.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 2.0 | 2026-07-20 | Joshua/AI | Expanded to the full required specification structure |
