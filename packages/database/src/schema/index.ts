/**
 * Drizzle schema. Empty for Phase 1 (architecture setup) — domain tables
 * (User, Property, Lease, Inspection, etc., per docs/database.md) are added
 * during the "shared property model" phase, not here.
 *
 * Keeping this file present and wired to drizzle-kit + a real Postgres
 * dialect proves the ORM/migration pipeline works end to end before any
 * table is defined.
 */
export {};
