import type { Metadata } from "next";
import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";

export const metadata: Metadata = {
  title: "Buy a Home in Hampton Roads | Innovative Twist Real Estate",
  description:
    "Buying a home should feel exciting, not overwhelming. Education-first guidance for first-time buyers, military relocations, move-up buyers, and everyone in between.",
};

const JOURNEY_SEGMENTS = [
  {
    label: "First-Time Buyer",
    body: "Your first home should be exciting, not confusing.",
    href: "/buy/first-time-home-buyer",
  },
  {
    label: "Military & VA Buyers",
    body: "Serving those who serve, with VA loan expertise.",
    href: "/buy/military-va",
  },
  {
    label: "Relocating to Hampton Roads",
    body: "Helping you feel at home before you even arrive.",
    href: "/buy/relocation",
  },
  {
    label: "Move-Up Buyers",
    body: "Ready for more space or a different lifestyle.",
    href: "/buy/move-up",
  },
  {
    label: "Luxury & Waterfront",
    body: "An elevated buying experience for extraordinary homes.",
    href: "/buy/waterfront-homes",
  },
];

const PROCESS_STEPS = [
  { step: "1", title: "Discover", body: "We learn your goals, timeline, and budget." },
  {
    step: "2",
    title: "Strategize",
    body: "A personalized plan connected to financing and your priorities.",
  },
  { step: "3", title: "Explore", body: "Tour homes, compare neighborhoods, evaluate options." },
  {
    step: "4",
    title: "Negotiate",
    body: "We advocate for your interests to position your offer for success.",
  },
  {
    step: "5",
    title: "Celebrate",
    body: "Close with confidence, and support that continues after you get the keys.",
  },
];

const WHY_ITEMS = [
  {
    title: "Education Before Decisions",
    body: "Every recommendation starts with helping you understand your options.",
  },
  {
    title: "Strategic Negotiation",
    body: "We advocate for your best interests from first offer to closing.",
  },
  {
    title: "Relationships That Last",
    body: "Our support doesn't end when you get the keys.",
  },
];

const RESOURCES = [
  { label: "Mortgage Calculator", href: "/buy/financing" },
  { label: "First-Time Buyer Guide", href: "/buy/first-time-home-buyer" },
  { label: "VA Loan Guide", href: "/buy/military-va" },
  { label: "Closing Cost Guide", href: "/buy/resources" },
];

const FAQS = [
  {
    question: "How much money do I need to buy a home?",
    answer:
      "It depends on your loan program — some options require as little as 0-3.5% down, plus closing costs. We'll walk through real numbers based on your situation before you start looking.",
  },
  {
    question: "Should I get pre-approved before I start touring homes?",
    answer:
      "Yes. A pre-approval tells you what you can actually afford and makes your offer stronger once you find the right home. We can connect you with trusted local lenders.",
  },
  {
    question: "How long does the buying process take?",
    answer:
      "From an accepted offer to closing is typically 30-45 days, though it varies by financing and property. Finding the right home can take anywhere from a few weeks to a few months.",
  },
  {
    question: "Do you work with first-time buyers?",
    answer:
      "It's a big part of what we do. We explain each step in plain language and won't rush a decision that's this important.",
  },
];

export default function BuyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-(--color-light-grey)/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
                Buying a Home Should Feel
                <br />
                <span className="text-(--color-primary-blue)">Exciting, Not Overwhelming.</span>
              </h1>
              <p className="mt-4 text-base text-(--color-neutral-500)">
                Whether you&apos;re buying your first home, upgrading for a growing family,
                relocating to Hampton Roads, or searching for your dream home, we&apos;ll guide you
                every step of the way with strategy, education, and honest advice.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/search">Start Your Home Search</Button>
                <Button href="/contact" variant="secondary">
                  Schedule a Buyer Consultation
                </Button>
              </div>
            </div>
            <PlaceholderImage
              label="Buyer hero — family receiving keys to new home"
              aspect="video"
            />
          </div>
        </div>
      </section>

      {/* Where are you in your journey */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Choose Your Buying Journey</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
            Where Are You in Your Journey?
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {JOURNEY_SEGMENTS.map((segment) => (
            <Link
              key={segment.href}
              href={segment.href}
              className="group rounded-md border border-(--color-light-grey) p-4 text-left hover:border-(--color-primary-blue)"
            >
              <p className="text-sm font-semibold text-(--color-neutral-900) group-hover:text-(--color-primary-blue)">
                {segment.label}
              </p>
              <p className="mt-1 text-xs text-(--color-neutral-500)">{segment.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow className="text-(--color-primary-blue)">A Simple Process</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-white">Built Around You.</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-5">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step}>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why buyers choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Why Buyers Choose Innovative Twist</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
            We Don&apos;t Believe in Simply Opening Doors.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="text-center">
              <p className="text-sm font-semibold text-(--color-neutral-900)">{item.title}</p>
              <p className="mt-1 text-sm text-(--color-neutral-500)">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search CTA */}
      <section className="bg-(--color-light-grey)/30 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-(--color-neutral-900)">
            Ready to See What&apos;s Available?
          </h2>
          <p className="max-w-xl text-sm text-(--color-neutral-500)">
            Search active listings across Hampton Roads, or let us know what you&apos;re looking for
            and we&apos;ll help narrow it down.
          </p>
          <Button href="/search">Search Homes</Button>
        </div>
      </section>

      {/* Buyer resources */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Eyebrow>Buyer Resource Center</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
          Knowledge Creates Confidence.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="rounded-md border border-(--color-light-grey) p-4 text-sm font-medium text-(--color-neutral-900) hover:border-(--color-primary-blue) hover:text-(--color-primary-blue)"
            >
              {resource.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* Featured listings — honest empty state, not fabricated inventory */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-(--color-neutral-900)">Featured Homes</h2>
        </div>
        <div className="mt-4 rounded-md border border-dashed border-(--color-light-grey) bg-(--color-light-grey)/20 p-8 text-center text-sm text-(--color-neutral-500)">
          Live listings will appear here once MLS/IDX is connected (see docs/api-integrations.md).
          This is intentionally not populated with sample properties.
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-(--color-neutral-900)">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="text-sm font-semibold text-(--color-neutral-900)">{faq.question}</dt>
              <dd className="mt-1 text-sm text-(--color-neutral-500)">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Final CTA */}
      <section className="bg-(--color-navy-exploratory) py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Ready to Find the Place You&apos;ll Love Coming Home To?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">Schedule a Buyer Consultation</Button>
            <Button href="/search" variant="secondary">
              Search Homes
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
