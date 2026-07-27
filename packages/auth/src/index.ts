import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@innovative-twist/database";

/**
 * Better Auth is a session/identity mechanism ONLY. Authorization always
 * follows docs/permissions.md and the platform's own domain specifications —
 * Better Auth's role field is never treated as the entire authorization
 * model (ADR-0001, docs/identity-access-domain-v2.md).
 *
 * Only email/password is enabled here. MFA, social login, and multi-role
 * support are added as their own Better Auth plugins during the Auth phase
 * (CLAUDE.md 27, priority 3) — enabling them now would require domain
 * tables that don't exist until the shared property model phase.
 */
export function createAuth(connectionString: string, secret: string, baseUrl: string) {
  return betterAuth({
    database: drizzleAdapter(getDb(connectionString), { provider: "pg" }),
    secret,
    baseURL: baseUrl,
    emailAndPassword: {
      enabled: true,
    },
  });
}
