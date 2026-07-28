import type { ReactNode } from "react";

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small uppercase section label (e.g. "WHY CONCIERGE?") used above headings. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={[
        "text-xs font-semibold tracking-wide text-(--color-primary-blue) uppercase",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
