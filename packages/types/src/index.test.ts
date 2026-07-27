import { describe, expect, it } from "vitest";
import { MoneySchema } from "./index";

describe("MoneySchema", () => {
  it("accepts a valid decimal string", () => {
    expect(MoneySchema.parse({ amount: "1234.56", currency: "USD" })).toEqual({
      amount: "1234.56",
      currency: "USD",
    });
  });

  it("defaults currency to USD", () => {
    expect(MoneySchema.parse({ amount: "100" }).currency).toBe("USD");
  });

  it("rejects more than two decimal places", () => {
    expect(() => MoneySchema.parse({ amount: "1234.567", currency: "USD" })).toThrow();
  });

  it("rejects a plain float-looking non-string amount", () => {
    expect(() => MoneySchema.parse({ amount: 1234.56, currency: "USD" })).toThrow();
  });
});
