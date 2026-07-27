# Dependencies

Relies on:
- canonical-reference.md
- event-envelope.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- permissions.md
- automation-v2.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.


# Buyer Portal Feature Specification
Version: 3.0

## Purpose
Define buyer-facing portal workflows.

**Relationship to consumer-domain-model.md:** Buyer entities originate in the consumer domain model.

## Related Specifications
- consumer-domain-model.md
- crm-domain-model.md

## Functional Requirements
- Saved homes
- Search alerts
- Buying process timeline (Consultation → Financing → Search → Offer → Inspection → Closing)
- Mortgage/pre-approval tracking
- Document uploads
- Buyer Readiness Report

## Data Model
- buyer_id
- search_id
- favorite_property_id
- readiness_report_id

## Permissions
Access follows `permissions.md` and related domain models.

## Automation
Uses `automation-v2.md` and canonical events from `event-envelope.md`.

## AI Behavior
AI may summarize, recommend, draft communications, and surface insights. AI may not execute privileged actions without authorization.

## Analytics
Track adoption, completion, usage, processing time, failures, and user engagement.

## Acceptance Criteria
- Consumes canonical domain entities.
- Does not redefine entity models.
- Conforms to specification-authoring-standard-v2.md.

## Revision History

|Version|Date|Author|Summary|
|---|---|---|---|
|3.0|2026-07-20|Joshua/AI|Expanded to full specification structure.|
