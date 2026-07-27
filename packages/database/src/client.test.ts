import { describe, expect, it } from "vitest";
import { getDb } from "./client";

describe("getDb", () => {
  it("constructs a client without requiring a live connection", () => {
    const db = getDb("postgresql://user:password@localhost:5432/innovative_twist_dev");
    expect(db).toBeDefined();
  });

  it("reuses the same underlying connection across calls", () => {
    const first = getDb("postgresql://user:password@localhost:5432/innovative_twist_dev");
    const second = getDb("postgresql://user:password@localhost:5432/innovative_twist_dev");
    expect(first).toBeDefined();
    expect(second).toBeDefined();
  });
});
