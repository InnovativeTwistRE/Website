import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./PropertyCard";

describe("PropertyCard", () => {
  it("renders price, address, and stats", () => {
    render(
      <PropertyCard
        imageLabel="Waterfront home exterior"
        price="$799,900"
        address="1325 Bay Front Dr"
        cityState="Virginia Beach, VA"
        beds={4}
        baths={3.5}
        sqft={2950}
        badge="Waterfront"
      />,
    );

    expect(screen.getByText("$799,900")).toBeDefined();
    expect(screen.getByText("1325 Bay Front Dr")).toBeDefined();
    expect(screen.getByText("Waterfront")).toBeDefined();
    expect(screen.getByText(/2,950 sqft/)).toBeDefined();
  });
});
