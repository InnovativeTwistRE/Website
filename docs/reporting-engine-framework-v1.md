    # Dependencies

Relies on:
- canonical-reference.md
- specification-authoring-standard-v2.md
- platform-standards-v2.md
- event-envelope.md
- permissions.md
- automation-v2.md
- audit-logging-v2.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.


    # Reporting Engine Framework
    Version: 1.0

    ## Purpose
    Define the platform service responsible for executing, rendering, caching, scheduling, securing, and distributing canonical reports.

    **Relationship to report-registry.md and report-scheduling-framework.md:** `report-registry.md` defines canonical report identities and metadata. This framework defines how registered reports are executed, rendered, cached, exported, and delivered. Scheduling behavior is delegated to `report-scheduling-framework.md`.

    ## Related Specifications
    - report-registry.md
- report-scheduling-framework.md
- report-delivery-framework.md
- document-generation-framework.md
- import-export-framework.md
- background-job-framework.md
- observability-monitoring.md

    ## Functional Requirements
    - Execute reports by canonical report identifier and approved version.
- Support parameterized reports with typed parameters, defaults, required fields, validation rules, and permitted value ranges.
- Resolve report data from authorized source systems without duplicating source-of-truth business data.
- Support synchronous execution for lightweight reports and queued background execution for long-running reports.
- Generate report outputs in supported formats including in-app view, PDF, CSV, and spreadsheet export when permitted by the report definition.
- Apply report-level and field-level permissions before data retrieval and again before output delivery.
- Support date-range, property, portfolio, client, transaction, lease, vendor, and user-scoped filters where defined by the report registry.
- Provide deterministic report snapshots so delivered reports can be reproduced and audited.
- Cache eligible report results using report identity, version, parameters, tenant context, and authorization scope as cache keys.
- Prevent cache reuse across organizations, users, or permission boundaries.
- Invalidate cached results when source data changes, report definitions change, or the configured freshness window expires.
- Support scheduled, on-demand, event-triggered, and API-initiated report execution.
- Track execution status including queued, running, completed, partially completed, failed, canceled, and expired.
- Provide user-visible progress for long-running report jobs.
- Support retry policies for transient failures and dead-letter handling for unrecoverable jobs.
- Record report generation timestamp, source-data cutoff time, report version, parameters, initiator, delivery recipients, and checksum.
- Allow authorized users to cancel queued or running reports when the execution strategy supports cancellation.
- Enforce maximum row counts, file sizes, execution duration, and concurrency limits by report type and plan.
- Support paginated in-app report viewing without requiring full-file generation.
- Provide standardized headers, footers, pagination, branding, disclaimers, and metadata blocks for rendered reports.
- Allow canonical report templates to define grouped sections, summaries, subtotals, charts, and appendices.
- Preserve the exact canonical report name from `report-registry.md` in user-facing outputs.
- Provide downloadable artifacts through signed, expiring links.
- Support archival of final report artifacts according to retention policy.
- Prevent reports from exposing soft-deleted, legally restricted, or archived records unless the report explicitly authorizes historical access.
- Emit canonical events for report requested, started, completed, failed, delivered, downloaded, and expired.

    ## Data Model
    - report_execution_id
- report_definition_id
- report_version
- requested_by_user_id
- organization_id
- parameter_payload
- authorization_scope
- execution_status
- requested_at
- started_at
- completed_at
- source_data_cutoff_at
- output_format
- artifact_id
- checksum
- failure_code
- failure_message
- expires_at

    ## Permissions
    - Users may execute only reports authorized for their role, organization, portfolio, and record scope.
- Sensitive financial, identity, legal, and compliance fields require explicit field-level authorization.
- Shared or scheduled reports must be re-authorized at delivery time.
- Administrators may manage report definitions but may not automatically view report data without data access permission.

    ## Automation
    - Scheduled execution uses `report-scheduling-framework.md`.
- Large report jobs use `background-job-framework.md`.
- Completion and failure events use the canonical event envelope.
- Delivery uses `report-delivery-framework.md`.

    ## AI Behavior
    - AI may summarize completed reports, explain trends, and draft narrative commentary.
- AI summaries must cite the report execution identifier and source-data cutoff time.
- AI may not alter report calculations, canonical totals, or underlying report data.
- AI-generated commentary must be visually distinguishable from canonical report content.

    ## Analytics
    - Execution volume by report and organization.
- Median and percentile execution times.
- Failure and retry rates.
- Cache hit rate.
- Delivery and download rates.
- Most-used parameters and output formats.
- Scheduled versus on-demand utilization.

    ## Acceptance Criteria
    - A registered report can be executed using validated parameters.
- Unauthorized fields and records never appear in the output.
- Long-running reports execute through background jobs with progress visibility.
- Completed artifacts are checksum-protected and auditable.
- Scheduled reports are delivered using the configured delivery framework.
- Canonical report names remain unchanged.

    ## Revision History

    | Version | Date | Author | Summary |
    |---|---|---|---|
    | 1.0 | 2026-07-20 | Joshua/AI | Initial production-ready specification. |
