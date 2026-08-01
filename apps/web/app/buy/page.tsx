import type { Metadata } from "next";
import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";
import {
  HomeIcon,
  ShieldIcon,
  BuildingIcon,
  DiamondIcon,
  MapPinIcon,
  PersonIcon,
  ClipboardIcon,
  SearchIcon,
  HandshakeIcon,
  KeyIcon,
  BookIcon,
  ScaleIcon,
  HeartIcon,
} from "../../components/icons";

export const metadata: Metadata = {
  title: "Buy a Home in Hampton Roads | Innovative Twist Real Estate",
  description:
    "Buying a home should feel exciting, not overwhelming. Education-first guidance for first-time buyers, military relocations, new construction, and luxury homes.",
};

/**
 * Icon badges use only the confirmed brand palette (primary/secondary
 * blue) rather than introducing new accent colors (green/purple/gold)
 * the way the reference mockup did — keeps to CLAUDE.md 12.1 without
 * another "exploratory color" decision like packages/ui/src/tokens.css's
 * navy. Revisit if a real brand-color set for category icons gets
 * approved later.
 */
const JOURNEY_SEGMENTS = [
  {
    label: "First-Time Home Buyer",
    body: "Your first home should be exciting, not confusing.",
    href: "/buy/first-time-home-buyer",
    icon: HomeIcon,
  },
  {
    label: "Military & VA Buyers",
    body: "Serving those who serve, with specialized guidance and VA expertise.",
    href: "/buy/military-va",
    icon: ShieldIcon,
  },
  {
    label: "New Construction",
    body: "Find the right builder, negotiate wisely, and protect your investment.",
    href: "/buy/new-construction",
    icon: BuildingIcon,
  },
  {
    label: "Luxury Homes",
    body: "An elevated buying experience for extraordinary homes.",
    href: "/buy/waterfront-homes",
    icon: DiamondIcon,
  },
  {
    label: "Relocating to Hampton Roads",
    body: "Helping you feel at home before you even arrive.",
    href: "/buy/relocation",
    icon: MapPinIcon,
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Discover",
    body: "We learn about your goals, lifestyle, budget, and timeline so every recommendation is built around you.",
    icon: PersonIcon,
  },
  {
    step: "2",
    title: "Strategize",
    body: "We create a personalized buying strategy and connect you with trusted financing professionals.",
    icon: ClipboardIcon,
  },
  {
    step: "3",
    title: "Explore",
    body: "Tour homes, compare neighborhoods, and evaluate opportunities with expert guidance.",
    icon: SearchIcon,
  },
  {
    step: "4",
    title: "Negotiate",
    body: "We negotiate strategically to protect your interests and position your offer for success.",
    icon: HandshakeIcon,
  },
  {
    step: "5",
    title: "Celebrate",
    body: "Close with confidence and enjoy continued support long after you get the keys.",
    icon: KeyIcon,
  },
];

const WHY_ITEMS = [
  {
    title: "Education Before Decisions",
    body: "Every recommendation starts with helping you understand your options.",
    icon: BookIcon,
    photoLabel: "Client consultation — reviewing options together",
  },
  {
    title: "Strategic Negotiation",
    body: "We advocate for your best interests from first offer to closing.",
    icon: ScaleIcon,
    photoLabel: "Handshake — offer accepted",
  },
  {
    title: "Relationships That Last",
    body: "Our support doesn't end when you get the keys.",
    icon: HeartIcon,
    photoLabel: "Family moving into new home",
  },
];

const COMMUNITIES = [
  {
    name: "Virginia Beach",
    body: "Coastal living with endless recreation and top schools.",
    href: "/communities/virginia-beach",
  },
  {
    name: "Chesapeake",
    body: "Space to grow with a strong sense of community.",
    href: "/communities/chesapeake",
  },
  {
    name: "Norfolk",
    body: "Urban energy, waterfront living, and culture.",
    href: "/communities/norfolk",
  },
  {
    name: "Suffolk",
    body: "Small-town feel with big opportunities.",
    href: "/communities/suffolk",
  },
];

const RESOURCES = [
  { label: "First-Time Buyer Guide", href: "/buy/first-time-home-buyer", icon: HomeIcon },
  { label: "VA Loan Guide", href: "/buy/military-va", icon: ShieldIcon },
  { label: "Mortgage Calculator", href: "/buy/financing", icon: ClipboardIcon },
  { label: "Closing Cost Guide", href: "/buy/resources", icon: BookIcon },
];

const LOAN_PROGRAMS = [
  "VA Specialists",
  "Conventional",
  "FHA",
  "Down Payment Assistance",
  "Rate Buydowns",
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
    question: "How do VA loans work?",
    answer:
      "VA loans let eligible service members and veterans buy with 0% down and no private mortgage insurance. We work with lenders who specialize in VA financing and understand the process.",
  },
  {
    question: "What are closing costs?",
    answer:
      "Closing costs are fees beyond the purchase price — typically 2-5% of the loan amount, covering things like lender fees, title insurance, and taxes. We'll give you a clear estimate early.",
  },
  {
    question: "How long does the process take?",
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
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Hero — Joshua handing over keys to a family in their new home"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <Eyebrow>Buying a Home Should Feel</Eyebrow>
            <h1 className="mt-2 text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              Exciting.
              <br />
              <span className="text-(--color-primary-blue)">Not Overwhelming.</span>
            </h1>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Whether you&apos;re buying your first home, upgrading for a growing family, relocating
              to Hampton Roads, or searching for your dream home, we&apos;re here to guide you every
              step of the way with strategy, education, and honest advice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/search">Start Your Home Search</Button>
              <Button href="/contact" variant="secondary">
                Schedule a Buyer Consultation
              </Button>
            </div>
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
          <p className="mx-auto mt-2 max-w-xl text-sm text-(--color-neutral-500)">
            Select the option that best fits your goals and we&apos;ll personalize your experience.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {JOURNEY_SEGMENTS.map((segment) => (
            <Link
              key={segment.href}
              href={segment.href}
              className="group rounded-md border border-(--color-light-grey) p-5 text-left hover:border-(--color-primary-blue)"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                <segment.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-(--color-neutral-900) group-hover:text-(--color-secondary-blue)">
                {segment.label}
              </p>
              <p className="mt-1 text-xs text-(--color-neutral-500)">{segment.body}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-(--color-neutral-500)">
          No matter where you are in your home buying journey, we&apos;ll meet you there. Every
          recommendation and strategy is tailored to your goals.
        </p>
      </section>

      {/* Process */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow className="text-(--color-primary-blue)">A Simple Process</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-white">Built Around You.</h2>
          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-5">
            <div
              className="absolute top-5 right-0 left-0 hidden border-t border-dashed border-white/20 sm:block"
              aria-hidden="true"
            />
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--color-navy-exploratory) text-white ring-2 ring-(--color-primary-blue)">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {item.step}. {item.title}
                </p>
                <p className="mt-1 text-xs text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why buyers choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <Eyebrow>Why Buyers Choose Innovative Twist</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              We Don&apos;t Believe in Simply Opening Doors.
            </h2>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              We believe in opening opportunities. From your first consultation to long after
              closing day, our goal is to become your trusted real estate resource for life.
            </p>
            <Button href="/about" variant="secondary" className="mt-4">
              Learn More About Our Approach
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <div key={item.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-(--color-neutral-900)">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-(--color-neutral-500)">{item.body}</p>
                <PlaceholderImage label={item.photoLabel} aspect="square" className="mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="bg-(--color-light-grey)/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Featured Communities</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
                Hampton Roads is full of great places to call home. Find the one that fits your
                lifestyle.
              </h2>
            </div>
            <Button href="/communities" variant="secondary">
              Explore All Communities
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITIES.map((community) => (
              <Link key={community.href} href={community.href} className="group">
                <PlaceholderImage
                  label={`${community.name} — skyline or streetscape`}
                  aspect="portrait"
                />
                <p className="mt-2 text-sm font-semibold text-(--color-neutral-900) group-hover:text-(--color-secondary-blue)">
                  {community.name}
                </p>
                <p className="mt-1 text-xs text-(--color-neutral-500)">{community.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings — honest empty state, not fabricated inventory */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-(--color-neutral-900)">Featured Homes</h2>
          <Link href="/search" className="text-sm text-(--color-secondary-blue)">
            View All Homes →
          </Link>
        </div>
        <div className="mt-4 rounded-md border border-dashed border-(--color-light-grey) bg-(--color-light-grey)/20 p-8 text-center text-sm text-(--color-neutral-500)">
          Live listings will appear here once MLS/IDX is connected (see docs/api-integrations.md).
          This is intentionally not populated with sample properties.
        </div>
      </section>

      {/* Buyer resources + mortgage partners */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Buyer Resource Center</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-(--color-neutral-900)">
              Knowledge Creates Confidence.
            </h2>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              The right information at the right time can make all the difference.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {RESOURCES.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="rounded-md border border-(--color-light-grey) p-3 text-xs font-medium text-(--color-neutral-900) hover:border-(--color-primary-blue) hover:text-(--color-secondary-blue)"
                >
                  <resource.icon className="h-4 w-4 text-(--color-primary-blue)" />
                  <span className="mt-2 block">{resource.label}</span>
                </Link>
              ))}
            </div>
            <Button href="/resources" variant="secondary" className="mt-4">
              Visit the Resource Center
            </Button>
          </div>

          <div>
            <Eyebrow>Mortgage & Financing</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-(--color-neutral-900)">
              Finding the Right Home Starts With the Right Financing.
            </h2>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              We partner with trusted local lenders who offer a variety of loan programs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {LOAN_PROGRAMS.map((program) => (
                <span
                  key={program}
                  className="rounded-full border border-(--color-light-grey) px-3 py-1 text-xs text-(--color-neutral-500)"
                >
                  {program}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/buy/financing">Get Pre-Approved</Button>
              <Button href="/buy/financing" variant="secondary">
                Meet Our Lending Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted partners — real vendor relationships (mortgage, closing
          attorneys, inspections). Names/logos pending from the client;
          tracked in docs/photo-manifest.md rather than fabricated here. */}
      <section className="bg-(--color-light-grey)/30 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Our Trusted Partners</Eyebrow>
          <h2 className="mt-2 text-xl font-bold text-(--color-neutral-900)">
            An Entire Network Working Together.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-(--color-neutral-500)">
            We&apos;ve built relationships with trusted local professionals who share our commitment
            to a smooth, informed buying experience.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Partner logo — mortgage & lending" aspect="wide" />
            <PlaceholderImage label="Partner logo — closing attorney / title" aspect="wide" />
            <PlaceholderImage label="Partner logo — home inspections" aspect="wide" />
          </div>
        </div>
      </section>

      {/* Success stories — generic placeholders, no fabricated testimonials */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="text-(--color-primary-blue)">Success Stories</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Real People. Real Journeys. Real Results.
              </h2>
            </div>
            <Link href="/about/testimonials" className="text-sm text-white hover:underline">
              View All Reviews →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Client story — video testimonial" aspect="square" />
            <PlaceholderImage label="Client story — video testimonial" aspect="square" />
            <PlaceholderImage label="Client story — video testimonial" aspect="square" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-(--color-neutral-900)">
            Frequently Asked Questions
          </h2>
          <Link href="/resources/faq" className="text-sm text-(--color-secondary-blue)">
            View All FAQs →
          </Link>
        </div>
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
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Joshua handing keys to buyers outside their new home"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative bg-(--color-navy-exploratory)/90 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Ready to Find the Place You&apos;ll Love Coming Home To?
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Every great journey begins with a single conversation. We&apos;re here to provide
                honest guidance, thoughtful strategy, and unwavering support from start to finish.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Schedule a Buyer Consultation</Button>
              <Button href="/search" variant="secondary">
                Search Homes
              </Button>
              <Button href="tel:7577548512" variant="secondary">
                Call Joshua
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
