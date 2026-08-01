# Dependencies

Relies on:
- CLAUDE.md
- canonical-reference.md
- naming-conventions-v2.md
- adr-0001-initial-technology-stack.md

# Canonical References

Validated against `canonical-reference.md`.

No new canonical values are introduced.

# Technology Stack

Version: 1.0

## Purpose

This is the living reference for the platform's technology choices. It is the doc other specifications should cite when they need to name a specific tool, library, or version — rather than each spec describing its own implementation stack independently (the drift that pattern caused elsewhere in this doc set is exactly what this file exists to prevent).

The decision itself, its rationale, and the conflict check against existing specs are recorded in `adr-0001-initial-technology-stack.md`. This file tracks the current, maintained state of that decision going forward.

## Stack Summary

| Layer | Choice |
|---|---|
| Language | TypeScript (strict mode) |
| Monorepo tooling | pnpm workspaces + Turborepo |
| Web framework | Next.js 16.2 LTS (App Router, React) |
| Database | PostgreSQL |
| ORM / migrations | Drizzle ORM + Drizzle Kit |
| Authentication | Better Auth (Postgres-backed, Drizzle adapter) |
| Validation | Zod |
| UI | Tailwind CSS, shadcn/ui as accessible foundation |
| Background processing | Node.js/TypeScript worker (`apps/worker`), Postgres-backed queue initially |
| File storage | S3-compatible object storage behind a storage adapter |
| AI provider access | Routed through `packages/ai` only |
| External integrations | Routed through `packages/integrations` via adapters only |
| Unit/integration testing | Vitest |
| End-to-end testing | Playwright |
| Web hosting | Vercel |
| Database hosting | Managed PostgreSQL provider |
| Worker hosting | Independently hosted persistent process (not serverless) |

## Applications

- `apps/web` — public website + authenticated consumer/client application.
- `apps/admin` — internal administration, property management, and team interface.
- `apps/worker` — background processing: scheduled jobs, reports, integrations, AI workflows, notifications, synchronization.

WealthOS™'s domain modules (InvestorOS™, PropertyOS™, HomeownerOS™, ConciergeOS™, AIOS™, KnowledgeOS™) are implemented as packages/modules consumed by these three applications — never as separate, disconnected applications.

## Non-Negotiable Boundaries

These are architectural rules, not suggestions:

- Core domain/business logic never lives inside UI components or Next.js Server Actions.
- Authentication (Better Auth) is a session/identity mechanism only. Authorization always follows `permissions.md` and the platform's own domain specifications, never the auth library's role model alone.
- No direct calls to Anthropic, OpenAI, or any model provider outside `packages/ai`.
- No direct coupling to MLS/IDX, CRM, mapping, email, SMS, payment, or storage vendor schemas outside `packages/integrations` (and `packages/database`'s storage adapter for files).
- No large files stored directly in PostgreSQL — only metadata, ownership, visibility, checksums, versions, and storage keys.
- Financial values always use decimal-safe types, never floating point (consistent with `database.md`).

## Version Policy

- **Runtime (Node.js):** pinned via `.nvmrc` and the root `package.json` `engines` field. Updated deliberately, not automatically.
- **Framework versions (Next.js, React):** pinned as exact versions in the relevant `package.json`. Upgrading a major version is a deliberate decision — record it as a new entry in a follow-up ADR, not a routine dependency bump.
- **Core libraries (Drizzle, Better Auth, Zod, Tailwind, shadcn/ui, Vitest, Playwright):** use caret ranges for patch/minor updates, reviewed through normal PRs. A major version bump still gets a note added to this file's Revision History.
- **Security patches** may be applied ahead of the normal review cycle regardless of the above.
- Any change to this table should be reflected here immediately — this file must never fall out of sync with the actual `package.json` files across the monorepo.

## Acceptance Criteria

- Every `apps/*` and `packages/*` `package.json` uses versions consistent with this file.
- No spec in `docs/` names a conflicting library for a role already decided here (ORM, auth, validation, queue, storage, testing) without first updating this file and its ADR.
- New packages or apps added to the monorepo are reflected in the Applications section and in CLAUDE.md §22.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-27 | Joshua Alvelo / Claude | Initial technology stack reference, per ADR-0001. |
| 1.1 | 2026-07-31 | Claude | Security patch pass: Next.js 16.2.0 → 16.2.12 (patch, fixes a critical Vitest arbitrary-file-execution advisory and several Next.js DoS/cache advisories), Drizzle ORM ^0.38.0 → ^0.45.2 (fixes a SQL-identifier-escaping injection advisory), Drizzle Kit ^0.30.6 → ^0.31.10, Vitest ^2.1.0 → ^3.2.7 (major version — required for the critical fix; full pipeline re-verified green after the bump, no test/typecheck/lint/build regressions). Reduced `pnpm audit` findings from 34 (1 critical, 18 high, 13 moderate, 2 low) to 5 (3 high, 2 moderate); the remainder are `postcss`/`sharp` bundled inside Next.js's own dependency tree and `esbuild` bundled inside `drizzle-kit`'s — not independently pinnable without an override, tracked as pending upstream patches rather than left unaddressed. |
