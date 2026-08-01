import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "onDark";

interface CommonProps {
  variant?: Variant;
  className?: string;
}

export type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

// secondary/onDark:hover use secondary-blue, not primary-blue, for text on
// a white background — primary-blue text on white is 3.54:1, which fails
// WCAG AA's 4.5:1 for normal-size text (confirmed 2026-07-31);
// secondary-blue (6.61:1) passes. primary stays primary-blue since that's
// white text on a solid primary-blue background (16.8:1, no issue).
const variants: Record<Variant, string> = {
  primary: "bg-(--color-primary-blue) text-white hover:bg-(--color-secondary-blue)",
  secondary: "bg-white text-(--color-secondary-blue) border border-(--color-secondary-blue)",
  // For CTAs placed over a photo/dark background — e.g. the header's
  // transparent state over the hero. Not for use on white backgrounds.
  onDark:
    "border border-white text-white bg-transparent hover:bg-white hover:text-(--color-secondary-blue)",
};

/**
 * Design system Button — used across the public site's headers, heroes,
 * and CTAs (CLAUDE.md §12.3). Pass `href` to render as a link styled like
 * a button (e.g. a "Call" CTA) instead of a real <button>.
 */
export function Button({ variant = "primary", className, href, ...props }: ButtonProps) {
  const classes = [base, variants[variant], className].filter(Boolean).join(" ");
  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
