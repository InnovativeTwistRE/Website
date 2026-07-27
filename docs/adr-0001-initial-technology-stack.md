# Dependencies

Relies on:
- CLAUDE.md
- canonical-reference.md
- naming-conventions-v2.md
- database.md
- permissions.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# ADR-0001: Initial Technology Stack

Version: 1.0

## Status

Accepted — 2026-07-27

## Context

CLAUDE.md §22 (Project Structure Principles) specifies a target `/apps` + `/packages` separation but explicitly defers the actual technology choice ("Adapt this to the selected stack"). No other specification in `docs/` pins a language, framework, database driver, auth library, or hosting target. Before any Phase 1 scaffolding could begin, this ambiguity had to be resolved deliberately — not inferred or defaulted by whoever writes the first line of code.

This decision was made explicitly by Joshua Alvelo, not inferred from the documentation set.

## Decision

### Language
- TypeScript everywhere, strict mode enabled repo-wide.
- `any` is avoided except where genuinely unavoidable (e.g., some third-party type gaps); such cases must be narrowly scoped and commented.

### Monorepo
- pnpm workspaces + Turborepo.
- Preserves the `/apps` + `/packages` separation from CLAUDE.md §22 exactly.

### Frontend / Full-Stack Web
- Next.js 16.2 LTS, React, App Router.
- Server Components by default; Server Actions only where they genuinely improve the architecture.
- Core domain/business logic never lives inside UI components or Server Actions — it lives in `/packages` and is called by them.

### Applications
- `apps/web` — public website + authenticated consumer/client application.
- `apps/admin` — internal administration, property management, and team interface.
- `apps/worker` — background processing: scheduled jobs, reports, integrations, AI workflows, notifications, synchronization.
- InvestorOS™, PropertyOS™, HomeownerOS™, ConciergeOS™, AIOS™, KnowledgeOS™ remain domain modules inside this shared architecture — not separate applications.

### Database
- PostgreSQL is the canonical relational database (already recommended in `database.md`).
- Drizzle ORM + Drizzle Kit for schema and migrations.
- PostgreSQL remains the source of truth; the domain model is never designed around ORM limitations.
- Decimal-safe PostgreSQL types (`numeric`) and decimal-safe TypeScript handling for all financial values.

### Authentication
- Better Auth, PostgreSQL-backed, Drizzle adapter.
- Must support: account/session management, email/password, password reset, email verification, future social login, MFA/2FA, roles, and multiple roles per user.
- Better Auth's role model is a session/authentication concern only. Authorization decisions still follow the platform's own domain permissions specification (`permissions.md`) — authentication-library roles are never treated as the entire authorization model.

### Validation / Shared Contracts
- Zod for all schema validation.
- Shared schemas/types live in packages, not duplicated per app.
- All external inputs are validated at system boundaries; client-side validation is UX only, server-side validation is authoritative (consistent with CLAUDE.md §19.4).

### UI
- Tailwind CSS.
- shadcn/ui may be used as an accessible component foundation, but does not determine the visual design.
- The Innovative Twist design system/tokens (CLAUDE.md §12) are built in `packages/ui`.
- WCAG 2.2 AA target (consistent with CLAUDE.md §11.5).

### Background Processing
- `apps/worker` is a real, independently deployable Node.js/TypeScript process — business workflows never depend on Vercel request duration.
- Queue/job access goes through an internal abstraction so the provider can change later.
- Phase 1 uses a Postgres-backed queue; Redis or a dedicated queue provider is only introduced if a real requirement justifies it.
- Reports, AI workflows, document processing, scheduled workflows, integration syncs, and heavy calculations run in the worker.

### File Storage
- S3-compatible object storage behind a storage adapter.
- Large files are never stored directly in PostgreSQL; the database stores metadata, ownership, visibility, checksums, versions, and storage keys only.
- The storage provider remains replaceable.

### AI
- All AI provider access goes through `packages/ai`. Domain and UI code never call Anthropic, OpenAI, or any other model provider directly.
- Provider/model is replaceable behind this package.
- Model/prompt/version metadata is stored wherever the platform's AI specifications require it.
- AI is never the source of truth for property, financial, legal, applicant, or transaction data (consistent with CLAUDE.md §14).

### Integrations
- All external vendors (MLS/IDX, CRM, mapping, email, SMS, payments, AI, storage, etc.) go through `packages/integrations` via adapter interfaces.
- Core domain objects are never coupled directly to a vendor-specific schema (consistent with CLAUDE.md §18).

### Testing
- Vitest for unit/integration tests.
- Playwright for critical end-to-end browser journeys.
- Deterministic fixtures required for financial calculations (consistent with CLAUDE.md §19.6).
- Permission/security tests are mandatory, not optional.

### Hosting / Deployment Direction
- Vercel for the Next.js web applications initially.
- A managed PostgreSQL provider.
- An independently hosted, persistent worker process (not a Vercel serverless function).
- S3-compatible object storage.
- Deployment stays portable enough to change providers without redesigning WealthOS™.
- No provider assumption (Vercel, database host, storage provider, email/SMS provider, CRM provider, AI provider, IDX provider) is hard-coded into domain code.

### Architecture Principle

Next.js is the delivery framework, not the architecture. The domain model, calculations, permissions, reports, integrations, AI, and business workflows stay separated into the `packages/*` defined by CLAUDE.md §22, so they can be reused by the public website, authenticated dashboards, the admin system, the background worker, a future public API, and eventually a mobile application.

## Conflicts Checked Against Existing Specifications

Before writing this ADR, the following were checked for contradictions with the stack above. None were found:

- `database.md` — already recommends PostgreSQL, object storage for large files, and a queue/job system for async work. This stack satisfies all three with a concrete implementation (Drizzle, S3-compatible adapter, Postgres-backed queue).
- `permissions.md` — already models authorization as a domain concern separate from authentication. Better Auth's role model fits underneath that as a session/identity mechanism, not a replacement for it.
- `identity-access-domain-v2.md` / `authentication-v2.md` — written framework-agnostically (no ORM, no auth library named). Adopting Better Auth + Drizzle does not require changing either spec's Data Model or Functional Requirements.
- `api-integrations.md`, `integration-registry-v2.md`, `webhook-framework-v1.md` — already require adapter-based, vendor-replaceable integration patterns. `packages/integrations` and `packages/ai` implement exactly that.
- `file-storage-framework-v1.md` and related file-storage docs — already require a storage adapter and metadata-only database records. Matches the S3-compatible adapter decision directly.
- `ai-system.md` — names OpenAI and Anthropic as candidate future model providers; this is compatible with routing all such calls through `packages/ai` rather than calling them directly from domain/UI code.
- CLAUDE.md §22's suggested `/apps` (web, admin, worker) and `/packages` (ui, domain, calculations, database, auth, integrations, ai, reports, config, types) tree already matches this stack's application/package boundaries exactly — no restructuring needed, only concretization.

No existing specification required modification to accommodate this stack. `CLAUDE.md` §22 is updated separately (see below) to remove the "adapt to the selected stack" ambiguity now that the stack is locked, and `docs/technology-stack.md` is added as the living reference other specs can point to.

## Consequences

- Every future spec that needs to reference implementation technology (ORM, auth library, queue approach, hosting) should point to `docs/technology-stack.md` rather than re-describing it, to avoid the kind of drift found elsewhere in this doc set.
- Version upgrades to core pieces (Next.js, React, Better Auth, Drizzle) are deliberate decisions, not silent bumps — see the Version Policy in `docs/technology-stack.md`.
- The worker being a real persistent process (not serverless functions) means it needs its own hosting target and deployment pipeline, separate from the Vercel-hosted `apps/web`/`apps/admin`.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-27 | Joshua Alvelo / Claude | Initial technology stack decision recorded. |
