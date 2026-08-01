/**
 * Single source of truth for the primary nav, mega menu contents, and
 * utility nav — drives both the desktop mega menus and the mobile
 * accordion so they never drift apart. Canonical structure lives in
 * docs/navigation-architecture.md; this file must match it exactly.
 */

export interface MegaMenuItem {
  label: string;
  href?: string;
  /** Shown but not linked — matches the doc's "future placeholder" items. */
  comingSoon?: boolean;
}

export interface PrimaryNavLink {
  type: "link";
  label: string;
  href: string;
}

export interface PrimaryNavMega {
  type: "mega";
  label: string;
  /** Landing page for the section itself (e.g. clicking "Buy" directly). */
  href: string;
  items: MegaMenuItem[];
}

export type PrimaryNavItem = PrimaryNavLink | PrimaryNavMega;

export const PRIMARY_NAV: PrimaryNavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "mega",
    label: "Buy",
    href: "/buy",
    items: [
      { label: "Home Buying", href: "/buy" },
      { label: "Search Homes (IDX)", href: "/search" },
      { label: "Communities", href: "/communities" },
      { label: "Mortgage & Financing", href: "/buy/financing" },
      { label: "Buyer Resources", href: "/buy/resources" },
      { label: "Featured Listings", href: "/buy/featured-listings" },
    ],
  },
  {
    type: "mega",
    label: "Sell",
    href: "/sell",
    items: [
      { label: "Selling Process", href: "/sell" },
      { label: "Home Valuation", href: "/sell/home-valuation" },
      { label: "Marketing Strategy", href: "/sell/marketing-strategy" },
      { label: "Concierge Services", href: "/concierge" },
      { label: "Seller Resources", href: "/sell/resources" },
      { label: "Success Stories", href: "/sell/success-stories" },
    ],
  },
  {
    type: "mega",
    label: "Rent",
    href: "/rentals",
    items: [
      { label: "Search Rentals", href: "/rentals" },
      { label: "Leasing Process", href: "/rentals/leasing-process" },
      { label: "Pet-Friendly Homes", href: "/rentals/pet-friendly" },
      { label: "Renter Resources", href: "/rentals/resources" },
      { label: "Homeownership Path", href: "/rentals/homeownership-path" },
      { label: "Resident Portal", href: "/portal/tenant" },
    ],
  },
  {
    type: "mega",
    label: "Manage & Invest",
    href: "/services/property-management",
    items: [
      { label: "Property Management", href: "/services/property-management" },
      { label: "Investors", href: "/services/investors" },
      { label: "Homeowner Services", href: "/services/homeowner-services" },
      { label: "Commercial", comingSoon: true },
    ],
  },
  {
    type: "mega",
    label: "About",
    href: "/about",
    items: [
      { label: "Joshua Alvelo", href: "/about" },
      { label: "Meet the Team", href: "/about/team" },
      { label: "Built in the 757", href: "/built-in-the-757" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", comingSoon: true },
    ],
  },
  { type: "link", label: "Contact", href: "/contact" },
];

export interface UtilityLink {
  label: string;
  href?: string;
  comingSoon?: boolean;
}

/** Never rendered in the primary nav — utility bar / header buttons only. */
export const UTILITY_NAV: UtilityLink[] = [
  { label: "Owner Portal", href: "/portal/owner" },
  { label: "Tenant Portal", href: "/portal/tenant" },
  { label: "Client Login", href: "/login" },
  { label: "Agent Login", comingSoon: true },
];

export const PHONE_DISPLAY = "757.754.8512";
export const PHONE_HREF = "tel:7577548512";
