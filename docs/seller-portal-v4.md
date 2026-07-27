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


# Seller Portal Feature Specification
Version: 3.0

## Purpose
Define seller-facing portal workflows.

**Relationship to consumer-domain-model.md:** Seller entities originate in the consumer domain model.

## Related Specifications
- consumer-domain-model.md
- marketing-domain-model.md

## Functional Requirements
- Listing status dashboard
- Marketing activity tracking
- Showing feedback log
- Offer review & negotiation
- Seller Net Sheet
- Disclosure/repair uploads
- Timeline (Prep → Marketing → Under Contract → Closing)

## Data Model
- seller_id
- listing_id
- showing_feedback_id
- offer_id
- seller_net_sheet_id

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
