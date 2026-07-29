import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
];

const SERVICE_LINKS = [
  { label: "Property Wealth Management™", href: "/property-wealth-management" },
  { label: "Rentals", href: "/rentals" },
  { label: "Build Wealth", href: "/build-wealth" },
  { label: "Concierge Services", href: "/concierge" },
];

const RESOURCE_LINKS = [
  { label: "Knowledge Center™", href: "/knowledge-center" },
  { label: "Communities", href: "/communities" },
  { label: "Built in the 757™", href: "/built-in-the-757" },
  { label: "Resources", href: "/resources" },
];

export function SiteFooter() {
  return (
    <footer className="bg-(--color-navy-exploratory) text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Quick Links" links={QUICK_LINKS} />
          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <div>
            <p className="text-sm font-semibold uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:7577548512">757.754.8512</a>
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
