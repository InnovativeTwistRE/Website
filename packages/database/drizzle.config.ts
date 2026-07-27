import { defineConfig } from "drizzle-kit";

/**
 * Drizzle Kit config for schema generation/migrations. PostgreSQL remains
 * the source of truth (ADR-0001) — the domain model is never designed
 * around what Drizzle can express.
 */
export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ?? "postgresql://user:password@localhost:5432/innovative_twist_dev",
  },
});
