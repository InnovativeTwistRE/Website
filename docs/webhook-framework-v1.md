    # Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- event-envelope.md
- permissions.md
- audit-logging-v2.md
- security-baseline-v2.md
- observability-monitoring.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.


    # Webhook Framework
    Version: 1.0

    ## Purpose
    Define secure, reliable outbound and inbound webhook delivery for platform integrations.

    **Relationship to integration-registry.md and event-envelope.md:** `integration-registry.md` defines approved integrations. `event-envelope.md` defines canonical event structure. This framework governs webhook subscriptions, signatures, delivery, retries, replay protection, and observability.

    ## Related Specifications
    - integration-registry.md
- integration-event-catalog-v2.md
- event-envelope.md
- background-job-framework.md
- security-baseline-v2.md
- api-gateway-v1.md

    ## Functional Requirements
    - Allow authorized integrations to subscribe to approved event types.
- Support organization-scoped, environment-scoped, and resource-scoped subscriptions.
- Require HTTPS endpoints for production webhooks.
- Validate callback URLs before activation.
- Sign outbound webhook payloads using managed secrets and timestamped signatures.
- Include event ID, event type, event version, occurred-at time, delivery ID, and correlation ID.
- Prevent replay using timestamps, nonces, and delivery identifiers.
- Deliver events asynchronously through background jobs.
- Support exponential backoff with configurable retry limits.
- Distinguish retryable failures from permanent failures.
- Move exhausted deliveries to a dead-letter queue.
- Allow authorized users to inspect and manually replay failed deliveries.
- Prevent replay from changing the original event payload or identity.
- Support endpoint suspension after repeated failures.
- Notify integration owners before and after automatic suspension.
- Track delivery attempts, response status, latency, and response body truncation.
- Redact credentials and sensitive values from webhook logs.
- Support secret rotation with overlapping validation windows.
- Support test deliveries using synthetic payloads.
- Support inbound webhooks only from registered providers.
- Verify inbound signatures before processing.
- Validate inbound payload schema and provider event identifiers.
- Deduplicate inbound events.
- Map accepted inbound events to canonical internal events.
- Reject unknown, malformed, unsigned, or expired inbound events.
- Provide per-endpoint rate limiting and concurrency controls.
- Emit canonical events for subscription created, delivery succeeded, delivery failed, endpoint suspended, and replay requested.

    ## Data Model
    - webhook_subscription_id
- integration_id
- organization_id
- event_type
- endpoint_url
- secret_reference_id
- status
- delivery_id
- event_id
- attempt_number
- response_status
- response_latency_ms
- next_retry_at
- dead_lettered_at
- last_success_at
- last_failure_at

    ## Permissions
    - Only integration administrators may create or modify webhook subscriptions.
- Webhook payload access follows the underlying event and organization scope.
- Manual replay requires elevated permission and is fully audited.
- Secret values are never displayed after creation.

    ## Automation
    - Deliveries run through `background-job-framework.md`.
- Retry, suspension, and notification behavior is automated.
- Inbound events are converted to canonical events only after verification.
- Secret rotation coordinates with `secrets-key-management-v1.md`.

    ## AI Behavior
    - AI may summarize delivery failures and suggest troubleshooting steps.
- AI may not expose secrets or replay events.
- AI may not alter endpoint URLs or subscription scope without approval.

    ## Analytics
    - Delivery success rate.
- Retry rate.
- Average delivery latency.
- Dead-letter volume.
- Endpoint suspension count.
- Duplicate inbound event count.
- Failures by integration and event type.

    ## Acceptance Criteria
    - Outbound webhooks are signed and replay-resistant.
- Inbound webhooks are verified before processing.
- Duplicate inbound events do not create duplicate business actions.
- Failed deliveries follow configured retry and dead-letter behavior.
- Manual replay preserves original payload identity.
- Secret material is never exposed in logs or UI.

    ## Revision History

    | Version | Date | Author | Summary |
    |---|---|---|---|
    | 1.0 | 2026-07-20 | Joshua/AI | Initial production-ready specification. |
