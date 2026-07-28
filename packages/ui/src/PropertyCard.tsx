import { PlaceholderImage } from "./PlaceholderImage";

export interface PropertyCardProps {
  imageLabel: string;
  price: string;
  address: string;
  cityState: string;
  beds: number;
  baths: number;
  sqft: number;
  badge?: string;
}

/**
 * Shared property card — CLAUDE.md 12.3 lists this as a reusable component.
 * Used for both for-sale and rental listings on the public site; real
 * listing data replaces these props once MLS/IDX integration exists
 * (docs/api-integrations.md) — this component only defines the shape.
 */
export function PropertyCard({
  imageLabel,
  price,
  address,
  cityState,
  beds,
  baths,
  sqft,
  badge,
}: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-(--color-light-grey) bg-white">
      <div className="relative">
        <PlaceholderImage label={imageLabel} aspect="video" className="rounded-none border-0" />
        {badge ? (
          <span className="absolute top-2 left-2 rounded bg-(--color-secondary-blue) px-2 py-1 text-xs font-medium text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-lg font-semibold text-(--color-neutral-900)">{price}</p>
        <p className="text-sm text-(--color-neutral-900)">{address}</p>
        <p className="text-sm text-(--color-neutral-500)">{cityState}</p>
        <p className="pt-1 text-sm text-(--color-neutral-500)">
          {beds} bd &middot; {baths} ba &middot; {sqft.toLocaleString()} sqft
        </p>
      </div>
    </div>
  );
}
