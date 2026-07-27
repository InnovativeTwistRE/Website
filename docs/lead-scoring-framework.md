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


    # Lead Scoring Framework
    Version: 1.0

    ## Purpose
    Define configurable lead scoring, prioritization, and qualification workflows.

    **Relationship to crm-domain-model.md:** This specification defines feature behavior. Canonical entities, relationships, and lifecycle originate in `crm-domain-model.md`.

    ## Related Specifications
    - crm-domain-model.md
    - workflow-engine-v2.md
    - automation-v2.md
    - event-envelope.md

    ## Functional Requirements
    - User-facing workflows
    - Configuration
    - Validation
    - Notifications
    - Auditing
    - Reporting integration

    ## Data Model
    Uses canonical entities from `crm-domain-model.md` and does not redefine them.

    ## Permissions
    Access follows `permissions.md`.

    ## Automation
    Consumes canonical events and automation workflows.

    ## AI Behavior
    AI may recommend actions, generate summaries, and draft content within authorized boundaries.

    ## Analytics
    Track adoption, completion, conversion, failures, and performance metrics.

    ## Acceptance Criteria
    - Uses canonical entities.
    - Does not duplicate domain-model definitions.
    - Integrates with canonical event framework.

    ## Revision History

    | Version | Date | Author | Summary |
    |---|---|---|---|
    |1.0|2026-07-20|Joshua/AI|Initial specification|
