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


    # Document Template Framework
    Version: 1.0

    ## Purpose
    Define reusable, versioned templates for generating letters, notices, agreements, reports, disclosures, and other platform documents.

    **Relationship to document-generation-framework.md and document-lifecycle-framework.md:** This framework defines template structure, merge fields, conditional content, versioning, and jurisdictional applicability. `document-generation-framework.md` renders documents from approved templates, while `document-lifecycle-framework.md` governs generated document status and retention.

    ## Related Specifications
    - document-generation-framework.md
- document-lifecycle-framework.md
- digital-signature-framework.md
- media-asset-management.md
- retention-archival-policy.md
- compliance-governance-framework.md

    ## Functional Requirements
    - Create templates for letters, notices, agreements, disclosures, reports, checklists, certificates, and portal documents.
- Assign each template a canonical identifier, document type, business domain, jurisdiction, language, owner, version, and lifecycle status.
- Support editable header, footer, body, signature, attachment, and metadata sections.
- Support approved merge fields mapped to canonical domain data.
- Validate merge fields at template-save time and generation time.
- Prevent templates from directly querying databases or using undocumented merge fields.
- Support conditional sections based on approved facts, jurisdiction, transaction type, lease type, role, or workflow state.
- Support repeating sections for collections such as properties, tenants, charges, maintenance items, inspection findings, and signatures.
- Support date, currency, number, percentage, address, phone, and name formatting.
- Support organization branding while preserving mandatory legal and canonical report language.
- Allow required clauses to be locked against local editing.
- Support optional clauses and clause libraries with documented applicability rules.
- Support jurisdiction-specific variants with effective dates.
- Require legal or compliance approval for templates containing regulated notices, disclosures, or contractual language.
- Provide draft, in review, approved, active, suspended, retired, and superseded states.
- Maintain immutable approved template versions.
- Allow generation to specify the exact approved template version or resolve the active version by effective date.
- Provide a preview mode using synthetic or authorized sample data.
- Provide template comparison showing additions, removals, and merge-field changes between versions.
- Detect missing required merge data and prevent final generation unless an authorized fallback exists.
- Support PDF, DOCX, HTML, and plain-text outputs where allowed by document type.
- Support attachments, exhibits, and appendices.
- Integrate with digital signature placement, signer roles, initials, dates, and signing order.
- Generate a manifest containing template version, merge-data references, generated-at timestamp, and checksum.
- Prevent editing of a finalized generated document; corrections require a new generated version.
- Emit canonical events for template created, submitted, approved, activated, retired, and document generated.

    ## Data Model
    - template_id
- template_version_id
- template_name
- document_type
- business_domain
- jurisdiction
- language
- status
- effective_from
- effective_through
- merge_field_schema
- conditional_section_rules
- locked_clause_ids
- branding_profile_id
- signature_configuration
- created_by_user_id
- approved_by_user_id

    ## Permissions
    - Template authors may create drafts and previews.
- Legal or compliance approvers must approve regulated templates.
- Organization administrators may customize only fields and sections explicitly marked customizable.
- Generated document access follows the underlying record permissions.

    ## Automation
    - Document generation may be initiated by workflows, approvals, scheduled jobs, user actions, or canonical events.
- Signature-ready documents route through `digital-signature-framework.md`.
- Final documents enter `document-lifecycle-framework.md`.

    ## AI Behavior
    - AI may draft nonbinding template language, suggest merge fields, and identify inconsistencies.
- AI may not approve legal language or activate templates.
- AI suggestions must not replace locked clauses or mandatory disclosures.
- AI-generated text must remain reviewable before template approval.

    ## Analytics
    - Generation volume by template and version.
- Template failure rate due to missing data.
- Average time from draft to approval.
- Use of jurisdictional variants.
- Signature completion rate for generated documents.
- Retired templates still referenced by active workflows.

    ## Acceptance Criteria
    - Only approved active templates can generate final documents.
- Every generated document identifies the exact template version used.
- Required merge fields and clauses are validated.
- Jurisdiction and effective-date selection is deterministic.
- Finalized documents are immutable.
- Regulated templates require authorized approval.

    ## Revision History

    | Version | Date | Author | Summary |
    |---|---|---|---|
    | 1.0 | 2026-07-20 | Joshua/AI | Initial production-ready specification. |
