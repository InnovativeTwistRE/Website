import { describe, expect, it } from "vitest";
import { createCalculationResult } from "./index";

describe("createCalculationResult", () => {
  it("fills in defaults and stamps a timestamp", () => {
    const out = createCalculationResult({
      result: 42,
      inputs: { x: 1 },
      formulaVersion: "test-v1",
    });

    expect(out.result).toBe(42);
    expect(out.assumptions).toEqual({});
    expect(out.warnings).toEqual([]);
    expect(out.formulaVersion).toBe("test-v1");
    expect(() => new Date(out.calculatedAt)).not.toThrow();
  });
});
