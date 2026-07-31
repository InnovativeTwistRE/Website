"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@innovative-twist/ui";
import { PRIMARY_NAV, UTILITY_NAV, PHONE_DISPLAY, PHONE_HREF } from "./navigation-data";
import { SiteLogo } from "../SiteLogo";

export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      className={[
        "fixed inset-0 z-[60] flex flex-col bg-white transition-transform duration-300 lg:hidden",
        open ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-(--color-light-grey) px-4 py-3">
        <Link href="/" onClick={onClose}>
          <SiteLogo />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-sm font-medium text-(--color-neutral-900)"
        >
          Close
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="divide-y divide-(--color-light-grey)">
          {PRIMARY_NAV.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-lg font-semibold text-(--color-neutral-900)"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const isExpanded = expanded === item.label;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-lg font-semibold text-(--color-neutral-900)"
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                </button>
                {isExpanded ? (
                  <ul className="space-y-3 pb-4 pl-4">
                    <li>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm font-medium text-(--color-primary-blue)"
                      >
                        View all {item.label} →
                      </Link>
                    </li>
                    {item.items.map((entry) =>
                      entry.comingSoon ? (
                        <li key={entry.label} className="text-sm text-(--color-neutral-500)">
                          {entry.label} <span className="text-xs uppercase">Coming Soon</span>
                        </li>
                      ) : (
                        <li key={entry.label}>
                          <Link
                            href={entry.href ?? "#"}
                            onClick={onClose}
                            className="text-sm text-(--color-neutral-900)"
                          >
                            {entry.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-3 border-t border-(--color-light-grey) pt-6">
          {UTILITY_NAV.map((link) =>
            link.comingSoon ? (
              <span key={link.label} className="text-sm text-(--color-neutral-500)">
                {link.label} <span className="text-xs uppercase">Coming Soon</span>
              </span>
            ) : (
              <Link
                key={link.label}
                href={link.href ?? "#"}
                onClick={onClose}
                className="text-sm font-medium text-(--color-neutral-900)"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </nav>

      <div className="flex gap-3 border-t border-(--color-light-grey) p-4">
        <Button href={PHONE_HREF} variant="secondary" className="flex-1 text-center">
          Call {PHONE_DISPLAY}
        </Button>
        <Button className="flex-1">Schedule Consultation</Button>
      </div>
    </div>
  );
}
