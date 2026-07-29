export interface StockPhotoProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
}

const aspectClasses: Record<NonNullable<StockPhotoProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * A real, properly-licensed stock photo (Unsplash License — free to use,
 * no attribution required) used as an interim stand-in for generic
 * category/background imagery, per 2026-07-28 direction. Distinct from
 * PlaceholderImage: this renders an actual photo, not a labeled box.
 * Never use this for anything that could be mistaken for a real listing,
 * a real client, or a real Innovative Twist property/team photo — those
 * stay PlaceholderImage until the genuine asset exists.
 */
export function StockPhoto({ src, alt, className, aspect = "video" }: StockPhotoProps) {
  return (
    <div
      className={[aspectClasses[aspect], "overflow-hidden rounded-md", className]
        .filter(Boolean)
        .join(" ")}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}
