"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@innovative-twist/ui";
import { SiteLogo } from "./SiteLogo";

/**
 * Canonical public page list, per CLAUDE.md 7 — confirmed 2026-07-28 as the
 * real page set (not the shorter list shown in early homepage mockups).
 * Homepage itself isn't a nav item; the logo links there.
 *
 * `label` is the full canonical name (used in the mobile menu, where a
 * vertical list has room). `navLabel` is a shortened display form for the
 * cramped horizontal desktop bar — flagged 2026-07-28 as looking too
 * crowded with the full names. Trademark symbols are dropped from nav text
 * only; they stay on the actual page headings/copy.
 */
const NAV_ITEMS = [
  { label: "About", navLabel: "About", href: "/about" },
  { label: "Buyers", navLabel: "Buyers", href: "/buyers" },
  { label: "Sellers", navLabel: "Sellers", href: "/sellers" },
  {
    label: "Property Wealth Management™",
    navLabel: "Property Management",
    href: "/property-wealth-management",
  },
  { label: "Rentals", navLabel: "Rentals", href: "/rentals" },
  { label: "Build Wealth", navLabel: "Build Wealth", href: "/build-wealth" },
  { label: "Concierge Services", navLabel: "Concierge", href: "/concierge" },
  { label: "Knowledge Center™", navLabel: "Knowledge Center", href: "/knowledge-center" },
  { label: "Communities", navLabel: "Communities", href: "/communities" },
  { label: "Built in the 757™", navLabel: "Built in the 757", href: "/built-in-the-757" },
  { label: "Resources", navLabel: "Resources", href: "/resources" },
  { label: "Contact", navLabel: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--color-light-grey) bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <SiteLogo />
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm whitespace-nowrap text-(--color-neutral-900) hover:text-(--color-primary-blue)"
            >
              {item.navLabel}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a href="tel:7577548512" className="text-sm font-medium text-(--color-neutral-900)">
            757.754.8512
          </a>
          <Button className="text-xs">Schedule a Consultation</Button>
        </div>

        <button
          type="button"
          className="text-(--color-neutral-900) lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className="border-t border-(--color-light-grey) px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-(--color-neutral-900)"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href="tel:7577548512" className="text-sm font-medium text-(--color-neutral-900)">
              757.754.8512
            </a>
            <Button>Schedule a Consultation</Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
