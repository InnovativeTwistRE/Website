import { describe, expect, it } from "vitest";
import { loadEnv } from "./index";

describe("loadEnv", () => {
  it("parses a valid environment", () => {
    const env = loadEnv({
      DATABASE_URL: "postgresql://user:password@localhost:5432/db",
      BETTER_AUTH_SECRET: "a".repeat(32),
      BETTER_AUTH_URL: "http://localhost:3000",
    } as NodeJS.ProcessEnv);

    expect(env.DATABASE_URL).toContain("postgresql://");
  });

  it("throws when a required variable is missing", () => {
    expect(() => loadEnv({} as NodeJS.ProcessEnv)).toThrow();
  });
});
