import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage, StockPhoto } from "@innovative-twist/ui";

/**
 * Unsplash License (free to use, no attribution required) — interim stand-
 * ins per 2026-07-28 direction, until real photography/AI-generated images
 * replace them. Swap the `image` value for a local asset path when ready.
 */
const OPPORTUNITIES = [
  {
    label: "Buy",
    href: "/buyers",
    alt: "Suburban home exterior",
    image:
      "https://images.unsplash.com/photo-1768768736208-b8f0e498e174?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "Sell",
    href: "/sellers",
    alt: "Staged modern living room",
    image:
      "https://images.unsplash.com/photo-1600494448850-6013c64ba722?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "Rent",
    href: "/rentals",
    alt: "Home exterior for rent",
    image:
      "https://images.unsplash.com/photo-1773427668146-d13b76d647fa?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "Landlord",
    href: "/property-wealth-management",
    alt: "Apartment building exterior",
    image:
      "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "Investor",
    href: "/build-wealth",
    alt: "Investment duplex property",
    image:
      "https://images.unsplash.com/photo-1764344885138-f9e70be45aec?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "New Construction",
    href: "/buyers/new-construction",
    alt: "New construction home framing",
    image:
      "https://images.unsplash.com/photo-1704742950992-9815a104820c?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "Military",
    href: "/buyers/military",
    alt: "Family moving into a new home",
    image:
      "https://images.unsplash.com/photo-1714647211860-cff4bccb505a?fm=jpg&q=80&w=800&fit=crop",
  },
  {
    label: "55+ Living",
    href: "/communities/55-plus",
    alt: "Active senior couple outdoors",
    image:
      "https://images.unsplash.com/photo-1774537813422-90ad47fadc08?fm=jpg&q=80&w=800&fit=crop",
  },
];

const OCEANFRONT_BACKGROUND =
  "https://images.unsplash.com/photo-1768760534929-c2fad3d321ba?fm=jpg&q=80&w=2400&fit=crop";

const WHY_ITEMS = [
  {
    title: "Different Marketing",
    body: "We market your home like no one else.",
  },
  {
    title: "Smarter Strategy",
    body: "Data-driven decisions that create results.",
  },
  {
    title: "Better Communication",
    body: "You'll always know what's happening.",
  },
  {
    title: "Advanced Technology",
    body: "Tools that make the process simple.",
  },
  {
    title: "Relationships for Life",
    body: "We're here long after the closing table.",
  },
];

const ECOSYSTEM_NODES = [
  { label: "Buy", body: "Find your next home" },
  { label: "Sell", body: "Get top dollar for your home" },
  { label: "Rent", body: "Find quality rentals with ease" },
  { label: "Property Management", body: "Protect your investment and your time" },
  { label: "Invest", body: "Build wealth through real estate" },
  { label: "Concierge", body: "Prepare your home for a stunning sale" },
  { label: "Client for Life", body: "We're with you for the long run" },
];

/**
 * Homepage — approved design, 2026-07-28 ("Marketed Different. Sold on
 * Purpose."). Canonical nav confirmed to CLAUDE.md 7 (lives in
 * components/SiteHeader.tsx). Photography is placeholder throughout — the
 * mockup's photos were ChatGPT-generated and are being reshot; listing
 * cards are an honest empty state until MLS/IDX is connected
 * (docs/api-integrations.md), not fabricated inventory.
 */
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          label="Hero — Hampton Roads skyline at dusk with Joshua Alvelo"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              Marketed Different.
              <br />
              <span className="text-(--color-primary-blue)">Sold on Purpose.</span>
            </h1>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Helping buyers, sellers, investors and landlords make smarter real estate decisions
              through strategy, education, and innovative marketing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Buy a Home</Button>
              <Button variant="secondary">Sell My Home</Button>
              <Button variant="secondary">Explore Rentals</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Joshua */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PlaceholderImage label="Joshua Alvelo — Watch My Story" aspect="video" />
          <div>
            <Eyebrow>Meet Joshua Alvelo</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
              Real Estate is About People. Not Just Properties.
            </h2>
            <p className="mt-4 text-(--color-neutral-500)">
              With a passion for innovative marketing and a commitment to exceptional service, I
              created Innovative Twist Real Estate to help people move forward with confidence and
              clarity.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["17+", "Years Experience"],
                ["750+", "Families Helped"],
                ["21%", "Top Ranked Agent"],
                ["5★", "Google Rating"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold text-(--color-primary-blue)">{value}</dt>
                  <dd className="text-xs text-(--color-neutral-500) uppercase">{label}</dd>
                </div>
              ))}
            </dl>
            <Button className="mt-6" variant="secondary">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunity Center */}
      <section className="bg-(--color-light-grey)/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Opportunity Center</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
            What Brings You Here Today?
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {OPPORTUNITIES.map((item) => (
              <Link key={item.href} href={item.href} className="group text-left">
                <StockPhoto src={item.image} alt={item.alt} aspect="square" />
                <p className="mt-2 text-sm font-semibold text-(--color-neutral-900) group-hover:text-(--color-primary-blue)">
                  {item.label} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative overflow-hidden bg-(--color-navy-exploratory) py-10">
        <StockPhoto
          src={OCEANFRONT_BACKGROUND}
          alt="Virginia Beach oceanfront"
          aspect="wide"
          className="absolute inset-0 h-full w-full rounded-none"
        />
        <div className="absolute inset-0 bg-(--color-navy-exploratory)/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-white uppercase">Search Properties</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Buy", "Rent", "Luxury", "Investment", "New Construction"].map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={
                  i === 0
                    ? "rounded bg-(--color-primary-blue) px-3 py-1.5 font-medium text-white"
                    : "rounded px-3 py-1.5 font-medium text-white/70 hover:text-white"
                }
              >
                {tab}
              </button>
            ))}
          </div>
          <form className="mt-4 grid gap-3 rounded-md bg-white p-4 sm:grid-cols-6">
            <input
              type="text"
              placeholder="City, Neighborhood, Address, ZIP or MLS#"
              className="rounded border border-(--color-light-grey) px-3 py-2 text-sm sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Min Price"
              className="rounded border border-(--color-light-grey) px-3 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Max Price"
              className="rounded border border-(--color-light-grey) px-3 py-2 text-sm"
            />
            <select className="rounded border border-(--color-light-grey) px-3 py-2 text-sm">
              <option>Beds</option>
            </select>
            <Button type="submit">Search</Button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Waterfront",
              "Golf Communities",
              "55+ Communities",
              "New Construction",
              "Condos",
              "Military Relocation",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/30 px-3 py-1 text-xs text-white"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Innovative Twist */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Why Innovative Twist?</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
              A Better Experience. A Better Result.
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
              {WHY_ITEMS.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-(--color-neutral-900)">{item.title}</p>
                  <p className="mt-1 text-xs text-(--color-neutral-500)">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="rounded-md bg-(--color-navy-exploratory) p-6 text-white">
            <p className="text-lg">
              &ldquo;We don&apos;t just help people buy and sell homes. We help them build better
              futures.&rdquo;
            </p>
            <cite className="mt-4 block text-sm text-white/70 not-italic">— Joshua Alvelo</cite>
          </blockquote>
        </div>
      </section>

      {/* Services Ecosystem */}
      <section className="bg-(--color-light-grey)/30 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Our Services Ecosystem</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
            Everything You Need. One Trusted Team.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {ECOSYSTEM_NODES.map((node) => (
              <div
                key={node.label}
                className="rounded-md border border-(--color-light-grey) bg-white p-4"
              >
                <p className="text-sm font-semibold text-(--color-primary-blue)">{node.label}</p>
                <p className="mt-1 text-xs text-(--color-neutral-500)">{node.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings — honest empty state, not fabricated inventory */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ListingsEmptyState
            eyebrow="Find the Place You'll Love Coming Home To"
            cta={{ label: "View All Homes", href: "/buyers" }}
          />
          <ListingsEmptyState
            eyebrow="Quality Homes. Quality Living."
            cta={{ label: "View All Rentals", href: "/rentals" }}
          />
        </div>
      </section>

      {/* Property management / investing promo */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-md bg-(--color-navy-exploratory) p-8 text-white">
            <h3 className="text-xl font-bold">Protect Your Investment. Grow Your Wealth.</h3>
            <p className="mt-2 text-sm text-white/80">
              Full-service management designed to keep your property performing while giving you
              peace of mind.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary">For Landlords</Button>
              <Button variant="secondary">Find a Rental</Button>
            </div>
          </div>
          <div className="rounded-md bg-(--color-navy-exploratory) p-8 text-white">
            <h3 className="text-xl font-bold">Smart Investing Starts With Better Information.</h3>
            <p className="mt-2 text-sm text-white/80">
              Tools, insights and local expertise to help you make confident investing decisions.
            </p>
            <Button className="mt-6" variant="secondary">
              Explore Investments
            </Button>
          </div>
        </div>
      </section>

      {/* Built in the 757 + testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Built in the 757™</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Real Stories. Real People. Real Hampton Roads.
            </h3>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              Our podcast and magazine spotlight the people, businesses, and neighborhoods that make
              our community special.
            </p>
            <PlaceholderImage
              label="Built in the 757 — cover art"
              aspect="video"
              className="mt-4"
            />
          </div>
          <div>
            <Eyebrow>Client Testimonials</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Success Isn&apos;t Measured by Closings. It&apos;s Measured by Relationships.
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <PlaceholderImage label="Client story — video" aspect="square" />
              <PlaceholderImage label="Client story — video" aspect="square" />
              <PlaceholderImage label="Client story — video" aspect="square" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-(--color-navy-exploratory) py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold text-white">Ready for Your Next Move?</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Schedule a Consultation</Button>
            <Button variant="secondary">Search Homes</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ListingsEmptyState({
  eyebrow,
  cta,
}: {
  eyebrow: string;
  cta: { label: string; href: string };
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-bold text-(--color-neutral-900)">{eyebrow}</h3>
        <Link href={cta.href} className="text-sm text-(--color-primary-blue)">
          {cta.label} →
        </Link>
      </div>
      <div className="mt-4 rounded-md border border-dashed border-(--color-light-grey) bg-(--color-light-grey)/20 p-8 text-center text-sm text-(--color-neutral-500)">
        Live listings will appear here once MLS/IDX is connected (see docs/api-integrations.md).
        This is intentionally not populated with sample properties, so nothing on this page could be
        mistaken for a real, available listing.
      </div>
    </div>
  );
}
