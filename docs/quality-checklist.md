# Dependencies

Relies on:
- technology-stack.md
- adr-0001-initial-technology-stack.md

# Quality Checklist
Version: 1.0
Owner: Joshua Alvelo / Claude

## Purpose

A repeatable check, run at the end of a work session (or whenever asked for "the closing check"),
so verification of the build doesn't depend on Joshua knowing what to ask for. This is the
concrete answer to "how do we know Claude didn't quietly do the wrong thing" — a fixed list,
run and reported every time, not a one-off audit.

This is a process document, not an architecture document. It does not decide product or stack
questions — see technology-stack.md and CLAUDE.md for those.

## What Gets Run Every Time

1. **Pipeline** — `typecheck`, `test`, `lint`, `format:check`, and a clean `build` (cache cleared
   first) across the whole monorepo. All must pass with zero errors.
2. **Dependency security** — `pnpm audit`. Anything critical or high gets fixed immediately if a
   patched version exists within the locked major version; anything that can't be fixed without
   breaking the locked stack gets documented in technology-stack.md's revision history as pending
   upstream, not silently ignored.
3. **Secrets check** — confirm no `.env` or credentials file has ever been committed
   (`git log --all --full-history -- "*.env"`), and that everything in `.gitignore` still covers
   real secret file patterns.
4. **Accessibility spot-check** — for any page touched this session: WCAG AA contrast on new/
   changed text, keyboard reachability, and that nothing communicates meaning by color alone.
5. **Browser verification** — for any page touched this session: load it, check the console for
   errors, screenshot it, and confirm mobile layout doesn't break (CLAUDE.md §11.4 is not optional).
6. **Content integrity** — no fabricated stats, testimonials, vendor names, or listings. Anything
   still pending real data from Joshua stays clearly marked as a placeholder in code, not quietly
   filled in with a plausible-looking guess.
7. **Documentation sync** — if a page or feature changed a business rule, data shape, or added a
   new image slot, the relevant doc (photo-manifest.md, the domain doc, technology-stack.md, etc.)
   is updated in the same session, not left to drift.
8. **Git hygiene** — review the actual diff before committing (not just trust the file list),
   confirm the commit message explains *why*, push only after everything above is green.

## What Gets Added Once Real User Data Exists

Not needed yet — no live auth, no real database records, no forms collecting real user data as of
this writing. Once that changes, add:

- Permission/role-boundary tests: can Role A actually read/write Role B's data, or does it just
  look like it can't from the UI.
- Input validation confirmed on both client and server, not just client.
- Audit logging confirmed working on sensitive actions (per CLAUDE.md §16/§17).
- **One paid, focused external security review of the auth/permissions/API layer before real
  financial or tenant data goes live.** This is the one seam where a second set of paid eyes is
  worth it regardless of how the rest of the build goes — see the open question below.

## Open Question — Not Resolved, Flagged for Joshua

`docs/api-gateway-v1.md` and `docs/api-design-standards-v2.md` (pre-existing specs, not part of
the ADR-0001 reconciliation pass) describe a full standalone API gateway service — versioned
routes, partner/mobile/portal traffic, blue/green deployment, tenant-aware caching. The locked
stack in `technology-stack.md` does not include a separate API gateway app; `apps/web` and
`apps/admin` currently talk to the shared `packages/database`/`packages/domain`/`packages/auth`
directly through Next.js's own route handlers.

Per this project's ground rule, this gap is being flagged, not resolved. Recommendation: leave the
current architecture as-is until there's a concrete near-term need for a formal external API
surface (a native mobile app, a third-party partner integration) — both are listed as later-phase
roadmap items in CLAUDE.md, not urgent. When one becomes real, `packages/domain` and
`packages/database` are already framework-agnostic, so a formal API layer can be added on top
without a rewrite. Building the full gateway spec now, with no client that needs it, would be
exactly the kind of premature complexity CLAUDE.md §19.1 warns against.

## Revision History

| Version | Date | Author | Summary |
|---|---|---|---|
| 1.0 | 2026-07-31 | Claude | Initial checklist, created in response to Joshua asking for a repeatable end-of-session verification routine. |
