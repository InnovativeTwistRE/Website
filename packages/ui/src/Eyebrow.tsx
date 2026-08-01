import type { ReactNode } from "react";

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small uppercase section label (e.g. "WHY CONCIERGE?") used above headings.
 * Default color is secondary-blue, not primary-blue — primary-blue text on
 * a white/light background is 3.54:1, which fails WCAG AA's 4.5:1 for
 * normal-size text (confirmed 2026-07-31). Secondary-blue (6.61:1) passes.
 * Pages on a navy background override this via className, since
 * primary-blue on navy (4.70:1) passes and secondary-blue on navy (2.52:1)
 * does not.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={[
        "text-xs font-semibold tracking-wide text-(--color-secondary-blue) uppercase",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
