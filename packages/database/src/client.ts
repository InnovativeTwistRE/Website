import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

let queryClient: ReturnType<typeof postgres> | undefined;

/**
 * Lazily creates the shared Postgres connection + Drizzle client. One
 * connection is reused per process (database.md's single-source-of-truth
 * principle) — do not instantiate a second client elsewhere.
 *
 * `postgres()` does not connect eagerly, so calling this does not require a
 * live database to be reachable.
 */
export function getDb(connectionString: string) {
  queryClient ??= postgres(connectionString);
  return drizzle(queryClient, { schema });
}
