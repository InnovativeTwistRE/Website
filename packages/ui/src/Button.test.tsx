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

  it("applies the onDark variant class", () => {
    render(<Button variant="onDark">Schedule a Consultation</Button>);
    const el = screen.getByRole("button", { name: "Schedule a Consultation" });
    expect(el.className).toContain("border-white");
  });

  it("renders as a link when href is given, not a button", () => {
    render(<Button href="tel:7577548512">Call</Button>);
    const el = screen.getByRole("link", { name: "Call" });
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("tel:7577548512");
  });
});
