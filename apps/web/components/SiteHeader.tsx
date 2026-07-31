"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@innovative-twist/ui";
import { SiteLogo } from "./SiteLogo";
import { MegaMenuPanel } from "./nav/MegaMenuPanel";
import { MobileNav } from "./nav/MobileNav";
import { MobileStickyBar } from "./nav/MobileStickyBar";
import type { PrimaryNavMega } from "./nav/navigation-data";
import { PRIMARY_NAV, UTILITY_NAV, PHONE_DISPLAY, PHONE_HREF } from "./nav/navigation-data";

function isMegaItem(item: (typeof PRIMARY_NAV)[number]): item is PrimaryNavMega {
  return item.type === "mega";
}

/**
 * Per docs/navigation-architecture.md: 7-item primary nav (max), mega
 * menus (not long dropdowns), sticky + transparent-over-hero fading to
 * solid white on scroll, utility nav kept out of the primary row, mobile
 * full-screen slide-out with a persistent sticky call/schedule bar.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Force the solid/white state whenever a mega menu is open, even if the
  // page hasn't scrolled — a transparent header with a white panel open
  // underneath it reads as broken, not premium.
  const solid = scrolled || openMenu !== null;
  const activeMegaItem = PRIMARY_NAV.filter(isMegaItem).find((item) => item.label === openMenu);

  const textClass = solid
    ? "text-(--color-neutral-900) hover:text-(--color-primary-blue)"
    : "text-white hover:text-white/70";

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid
            ? "border-b border-(--color-light-grey) bg-white shadow-sm"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Utility strip */}
        <div
          className={[
            "mx-auto hidden max-w-7xl items-center justify-end gap-5 px-4 py-1.5 text-xs sm:px-6 lg:flex lg:px-8",
            solid ? "text-(--color-neutral-500)" : "text-white/80",
          ].join(" ")}
        >
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
            <SiteLogo variant={solid ? "color" : "white"} />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {PRIMARY_NAV.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium ${textClass}`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium ${textClass}`}
                  aria-expanded={openMenu === item.label}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button variant={solid ? "primary" : "onDark"} className="text-xs">
              Schedule Consultation
            </Button>
          </div>

          <button
            type="button"
            className={`text-sm font-medium lg:hidden ${textClass}`}
            onClick={() => setMobileNavOpen(true)}
          >
            Menu
          </button>
        </div>

        {/* Mega menu panel — one level, no nested fly-outs */}
        {activeMegaItem ? <MegaMenuPanel item={activeMegaItem} /> : null}
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      {!mobileNavOpen ? <MobileStickyBar /> : null}
    </>
  );
}
