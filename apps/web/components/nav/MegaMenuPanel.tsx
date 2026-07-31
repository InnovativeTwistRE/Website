import Link from "next/link";
import type { PrimaryNavMega } from "./navigation-data";

export function MegaMenuPanel({ item }: { item: PrimaryNavMega }) {
  return (
    <div className="border-t border-(--color-light-grey) bg-white py-8 shadow-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-8 gap-y-4 px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
