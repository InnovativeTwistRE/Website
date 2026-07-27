import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-[--color-primary-blue] text-white hover:bg-[--color-secondary-blue]",
  secondary: "bg-white text-[--color-primary-blue] border border-[--color-primary-blue]",
};

/**
 * First real component in the design system — exists to prove the
 * react + tailwind + vitest pipeline builds end to end, not as a finished
 * component library. Real components (§12.3 of CLAUDE.md) are built out
 * during the public website phase.
 */
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = [base, variants[variant], className].filter(Boolean).join(" ");
  return <button className={classes} {...props} />;
}
