"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@innovative-twist/ui";
import { SiteLogo } from "./SiteLogo";

/**
 * Canonical public page list, per CLAUDE.md 7 — confirmed 2026-07-28 as the
 * real nav (not the shorter list shown in early homepage mockups).
 * Homepage itself isn't a nav item; the logo links there.
 */
const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
  { label: "Property Wealth Management™", href: "/property-wealth-management" },
  { label: "Rentals", href: "/rentals" },
  { label: "Build Wealth", href: "/build-wealth" },
  { label: "Concierge Services", href: "/concierge" },
  { label: "Knowledge Center™", href: "/knowledge-center" },
  { label: "Communities", href: "/communities" },
  { label: "Built in the 757™", href: "/built-in-the-757" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--color-light-grey) bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <SiteLogo />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-x-4 gap-y-1 lg:flex lg:flex-wrap">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-(--color-neutral-900) uppercase hover:text-(--color-primary-blue)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a href="tel:7571234567" className="text-sm font-medium text-(--color-neutral-900)">
            (757) 123-4567
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
            <a href="tel:7571234567" className="text-sm font-medium text-(--color-neutral-900)">
              (757) 123-4567
            </a>
            <Button>Schedule a Consultation</Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
