import { z } from "zod";

/**
 * Shared environment schema. Every app/worker validates its environment
 * through this schema at startup rather than reading process.env ad hoc,
 * per docs/environment-configuration.md. Extend this schema deliberately as
 * new required environment variables are introduced.
 */
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.string().url(),
});

export type Env = z.infer<typeof EnvSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  return EnvSchema.parse(source);
}
