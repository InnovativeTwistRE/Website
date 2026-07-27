import { describe, expect, it } from "vitest";
import { createAuth } from "./index";

describe("createAuth", () => {
  it("constructs a Better Auth instance from config without connecting", () => {
    const auth = createAuth(
      "postgresql://user:password@localhost:5432/innovative_twist_dev",
      "a".repeat(32),
      "http://localhost:3000",
    );
    expect(auth).toBeDefined();
  });
});
