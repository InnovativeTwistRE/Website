import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Schedule Consultation</Button>);
    expect(screen.getByRole("button", { name: "Schedule Consultation" })).toBeDefined();
  });

  it("applies the secondary variant class", () => {
    render(<Button variant="secondary">Browse Trusted Partners</Button>);
    const el = screen.getByRole("button", { name: "Browse Trusted Partners" });
    expect(el.className).toContain("border");
  });
});
