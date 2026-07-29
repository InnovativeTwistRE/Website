import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StockPhoto } from "./StockPhoto";

describe("StockPhoto", () => {
  it("renders a real img with the given src and alt text", () => {
    render(
      <StockPhoto src="https://images.unsplash.com/photo-example" alt="Suburban home exterior" />,
    );
    const img = screen.getByAltText("Suburban home exterior") as HTMLImageElement;
    expect(img.src).toBe("https://images.unsplash.com/photo-example");
  });
});
