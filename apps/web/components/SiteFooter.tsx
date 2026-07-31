import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "./nav/navigation-data";

const BUY_LINKS = [
  { label: "Home Buying", href: "/buy" },
  { label: "Search Homes", href: "/search" },
  { label: "Communities", href: "/communities" },
  { label: "Featured Listings", href: "/buy/featured-listings" },
];

const SELL_LINKS = [
  { label: "Selling Process", href: "/sell" },
  { label: "Home Valuation", href: "/sell/home-valuation" },
  { label: "Concierge Services", href: "/concierge" },
  { label: "Success Stories", href: "/sell/success-stories" },
];

const SERVICES_LINKS = [
  { label: "Property Management", href: "/services/property-management" },
  { label: "Rentals", href: "/rentals" },
  { label: "Investors", href: "/services/investors" },
  { label: "Homeowner Services", href: "/services/homeowner-services" },
];

export function SiteFooter() {
  return (
    <footer className="bg-(--color-navy-exploratory) text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Buy" links={BUY_LINKS} />
          <FooterColumn title="Sell" links={SELL_LINKS} />
          <FooterColumn title="Services" links={SERVICES_LINKS} />
          <div>
            <p className="text-sm font-semibold uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href="mailto:hello@innovativetwistrealestate.com">
                  hello@innovativetwistrealestate.com
                </a>
              </li>
              <li>Virginia Beach, VA — Serving Hampton Roads</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Innovative Twist Real Estate. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
