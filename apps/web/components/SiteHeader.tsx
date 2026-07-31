"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@innovative-twist/ui";
import { SiteLogo } from "./SiteLogo";
import { MegaMenuPanel } from "./nav/MegaMenuPanel";
import { MobileNav } from "./nav/MobileNav";
import { MobileStickyBar } from "./nav/MobileStickyBar";
import { PRIMARY_NAV, UTILITY_NAV, PHONE_DISPLAY, PHONE_HREF } from "./nav/navigation-data";

/**
 * Per docs/navigation-architecture.md: 7-item primary nav (max), mega
 * menus (not long dropdowns) shown only on hover/focus of their primary
 * item, solid white header throughout (no transparent-over-hero — dropped
 * 2026-07-30, see revision history in the doc), utility nav kept out of
 * the primary row, mobile full-screen slide-out with a persistent sticky
 * call/schedule bar.
 */
export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-(--color-light-grey) bg-white">
        {/* Utility strip */}
        <div className="mx-auto hidden max-w-7xl items-center justify-end gap-5 px-4 py-1.5 text-xs text-(--color-neutral-500) sm:px-6 lg:flex lg:px-8">
          {UTILITY_NAV.map((link) =>
            link.comingSoon ? null : (
              <Link key={link.label} href={link.href ?? "#"} className="hover:underline">
                {link.label}
              </Link>
            ),
          )}
          <a href={PHONE_HREF} className="font-medium hover:underline">
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Main row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <SiteLogo />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {PRIMARY_NAV.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-(--color-neutral-900) hover:text-(--color-primary-blue)"
                >
                  {item.label}
                </Link>
              ) : (
                // Each mega item owns its own positioning context and
                // hover/close scope, so the panel anchors directly under
                // this specific link (not full page width) and closes as
                // soon as the cursor leaves this item + its own panel.
                <div key={item.label} className="relative" onMouseLeave={() => setOpenMenu(null)}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-(--color-neutral-900) hover:text-(--color-primary-blue)"
                    aria-expanded={openMenu === item.label}
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onFocus={() => setOpenMenu(item.label)}
                  >
                    {item.label}
                  </Link>
                  {openMenu === item.label ? (
                    <div className="absolute top-full left-0 pt-3">
                      <MegaMenuPanel item={item} />
                    </div>
                  ) : null}
                </div>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button className="text-xs">Schedule Consultation</Button>
          </div>

          <button
            type="button"
            className="text-sm font-medium text-(--color-neutral-900) lg:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      {!mobileNavOpen ? <MobileStickyBar /> : null}
    </>
  );
}
