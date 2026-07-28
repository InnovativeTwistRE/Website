export interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  /**
   * "center" (default) is for standalone use (cards, grids). "corner" tucks
   * the label into the bottom-left in small type — use this when the
   * placeholder sits behind real foreground content (e.g. a hero image
   * behind a headline), so the label doesn't visually collide with it.
   */
  labelPosition?: "center" | "corner";
}

const aspectClasses: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Honest stand-in for a real photo that hasn't been sourced yet — a labeled
 * placeholder rather than a broken <img> or a stock photo that could be
 * mistaken for a real property/team photo. Swap for a real <img>/<Image>
 * once the asset exists; do not leave this in place for launched pages.
 */
export function PlaceholderImage({
  label,
  className,
  aspect = "video",
  labelPosition = "center",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={[
        aspectClasses[aspect],
        "flex rounded-md border border-dashed border-(--color-light-grey) bg-(--color-light-grey)/40 p-4 text-xs text-(--color-neutral-500)",
        labelPosition === "center"
          ? "items-center justify-center text-center"
          : "items-end justify-start text-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </div>
  );
}
