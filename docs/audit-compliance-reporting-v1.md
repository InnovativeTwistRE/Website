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


    # Audit & Compliance Reporting Framework
    Version: 1.0

    ## Purpose
    Define compliance dashboards, exception reporting, broker oversight, regulatory exports, and audit evidence packages.

    **Relationship to compliance-governance-framework.md and audit-logging-v2.md:** `compliance-governance-framework.md` defines obligations, controls, policies, and exceptions. `audit-logging-v2.md` records immutable activity. This framework converts those records into authorized oversight reports and evidence packages.

    ## Related Specifications
    - compliance-governance-framework.md
- audit-logging-v2.md
- reporting-engine-framework-v1.md
- retention-archival-policy.md
- security-baseline-v2.md
- identity-access-domain-v2.md

    ## Functional Requirements
    - Provide compliance dashboards by organization, office, broker, agent, property manager, business domain, and reporting period.
- Report open, overdue, resolved, waived, and escalated compliance exceptions.
- Provide broker supervision views for required reviews, approvals, signatures, disclosures, notices, and transaction milestones.
- Provide license and credential expiration reporting for users and vendors.
- Provide consent, communication preference, and opt-out compliance reporting.
- Provide document completion reporting for required forms, signatures, acknowledgments, and delivery receipts.
- Provide access-control review reports for role assignments, privileged accounts, dormant users, and failed authentication activity.
- Provide financial control reports for approvals, distributions, payment exceptions, refunds, reversals, and reconciliation differences.
- Provide property-management compliance views for lease dates, notices, inspections, deposits, owner statements, and maintenance records.
- Support configurable reporting periods, business units, jurisdictions, responsible parties, and obligation categories.
- Generate exception aging and SLA breach reports.
- Generate evidence packages that include relevant audit events, document versions, approvals, communications, and delivery records.
- Preserve original timestamps, actor identities, source systems, and checksums in evidence packages.
- Support regulator-ready and auditor-ready exports without exposing unrelated records.
- Support read-only audit workspaces with time-limited access.
- Track report generation, access, download, and sharing activity.
- Support scheduled compliance summaries and event-triggered alerts for critical exceptions.
- Distinguish system-detected exceptions, manually reported exceptions, and externally reported findings.
- Allow authorized users to annotate findings without altering underlying evidence.
- Support remediation plans, owners, target dates, status, and closure evidence.
- Prevent a finding from being marked resolved without required closure evidence.
- Support legal holds that override normal retention deletion.
- Provide cross-period trend analysis for recurring violations and control failures.
- Emit canonical events for exception opened, escalated, remediated, closed, report generated, and evidence package exported.

    ## Data Model
    - compliance_report_id
- reporting_period_start
- reporting_period_end
- organization_id
- jurisdiction
- control_id
- exception_id
- exception_status
- severity
- responsible_user_id
- detected_at
- due_at
- resolved_at
- remediation_plan_id
- evidence_package_id
- legal_hold_id

    ## Permissions
    - Compliance reports are restricted by organization, role, jurisdiction, and assigned oversight scope.
- Evidence package export requires elevated authorization.
- Read-only auditors may not modify source records or findings.
- Legal-hold and privileged investigation data require explicit authorization.

    ## Automation
    - Scheduled summaries use `report-scheduling-framework.md`.
- Critical exceptions trigger notification and escalation workflows.
- Evidence collection uses canonical audit, document, approval, and communication references.
- Long-running exports use background jobs.

    ## AI Behavior
    - AI may summarize exception patterns, identify recurring control failures, and draft remediation recommendations.
- AI may not determine legal compliance conclusively or close findings.
- AI analysis must cite the underlying report, evidence, and reporting period.
- AI may not alter audit evidence.

    ## Analytics
    - Open exceptions by severity and age.
- SLA breach rate.
- Average remediation time.
- Repeat exception rate.
- Controls with highest failure frequency.
- Broker or manager review completion rate.
- Evidence package generation and access activity.

    ## Acceptance Criteria
    - Reports reconcile to immutable audit records.
- Users see only records within their authorized oversight scope.
- Evidence packages identify source records and checksums.
- Resolved findings include required closure evidence.
- Legal holds prevent deletion of protected records.
- Scheduled and event-triggered compliance reporting functions as configured.

    ## Revision History

    | Version | Date | Author | Summary |
    |---|---|---|---|
    | 1.0 | 2026-07-20 | Joshua/AI | Initial production-ready specification. |
