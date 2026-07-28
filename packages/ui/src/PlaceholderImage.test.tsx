import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PlaceholderImage } from "./PlaceholderImage";

describe("PlaceholderImage", () => {
  it("exposes the label as accessible alt text, not a broken image", () => {
    render(<PlaceholderImage label="Oceanfront home exterior" />);
    expect(
      screen.getByRole("img", { name: "Placeholder: Oceanfront home exterior" }),
    ).toBeDefined();
  });
});
