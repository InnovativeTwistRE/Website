import Link from "next/link";
import type { PrimaryNavMega } from "./navigation-data";

/**
 * Anchored under its trigger link (not full page width) — our menus are
 * 5-6 short links each, not the dozens-of-items case full-bleed mega
 * panels are built for. Still a multi-column grid, not a long single-
 * column dropdown list, per docs/navigation-architecture.md.
 */
export function MegaMenuPanel({ item }: { item: PrimaryNavMega }) {
  return (
    <div className="grid w-max min-w-64 grid-cols-2 gap-x-6 gap-y-3 rounded-md border border-(--color-light-grey) bg-white p-5 shadow-lg">
      {item.items.map((entry) =>
        entry.comingSoon ? (
          <span
            key={entry.label}
            className="text-sm text-(--color-neutral-500)"
            aria-disabled="true"
          >
            {entry.label}
            <span className="ml-2 text-xs tracking-wide uppercase">Coming Soon</span>
          </span>
        ) : (
          <Link
            key={entry.label}
            href={entry.href ?? "#"}
            className="text-sm font-medium text-(--color-neutral-900) hover:text-(--color-primary-blue)"
          >
            {entry.label}
          </Link>
        ),
      )}
    </div>
  );
}
