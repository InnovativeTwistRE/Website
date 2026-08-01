import type { Metadata } from "next";
import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";
import {
  CameraIcon,
  DroneIcon,
  VideoIcon,
  TargetIcon,
  MegaphoneIcon,
  BookIcon,
  MicIcon,
  UsersIcon,
  WrenchIcon,
  SofaIcon,
  DiamondIcon,
} from "../../components/icons";

export const metadata: Metadata = {
  title: "Sell Your Home in Hampton Roads | Innovative Twist Real Estate",
  description:
    "Selling your home isn't about putting a sign in the yard. Every listing gets a customized marketing strategy designed to attract qualified buyers and maximize exposure.",
};

const MARKETING_ASSETS = [
  { label: "Professional Photography — twilight exterior" },
  { label: "Drone Photography — aerial property view" },
  { label: "Twilight Photography — dusk exterior" },
  { label: "Social Media Campaigns — device mockups" },
  { label: "Print Marketing — brochure and postcard" },
  { label: "Magazine Feature — Built in the 757" },
  { label: "Open House Experience — welcoming guests" },
];

const SELLING_PROCESS = [
  { step: "1", title: "Consultation" },
  { step: "2", title: "Pricing Strategy" },
  { step: "3", title: "Home Preparation" },
  { step: "4", title: "Professional Photography" },
  { step: "5", title: "Drone & Cinematic Video" },
  { step: "6", title: "Marketing Launch" },
  { step: "7", title: "Private Showings" },
  { step: "8", title: "Negotiations" },
  { step: "9", title: "Successful Closing" },
];

const MARKETING_ADVANTAGES = [
  {
    title: "Professional Photography",
    body: "Magazine-quality images that capture attention from the first click.",
    icon: CameraIcon,
  },
  {
    title: "Drone Photography",
    body: "Showcase location, lot size, and nearby amenities from above.",
    icon: DroneIcon,
  },
  {
    title: "Cinematic Video",
    body: "Create emotional connections through storytelling, not simple walkthroughs.",
    icon: VideoIcon,
  },
  {
    title: "Digital Advertising",
    body: "Target qualified buyers across Google, Facebook, Instagram, YouTube, and more.",
    icon: TargetIcon,
  },
  {
    title: "Social Media Strategy",
    body: "Purpose-driven campaigns that build visibility where buyers spend their time.",
    icon: MegaphoneIcon,
  },
  {
    title: "Print Marketing",
    body: "Premium brochures, postcards, feature sheets, and professionally branded materials.",
    icon: BookIcon,
  },
  {
    title: "Built in the 757",
    body: "Selected listings receive additional exposure through the magazine, podcast, and community media.",
    icon: MicIcon,
  },
  {
    title: "Professional Network",
    body: "Trusted lenders, title companies, inspectors, contractors, and service providers working for you.",
    icon: UsersIcon,
  },
];

const PREP_ITEMS = [
  {
    title: "Repairs",
    body: "Identify the improvements that provide the greatest return before listing.",
    icon: WrenchIcon,
  },
  {
    title: "Staging",
    body: "Help buyers emotionally connect with your home from the moment they walk through the door.",
    icon: SofaIcon,
  },
  {
    title: "Presentation",
    body: "Professional cleaning, staging, photography, and marketing designed for an unforgettable first impression.",
    icon: DiamondIcon,
  },
];

const SELLER_RESOURCES = [
  { label: "Seller Guide", href: "/sell/resources" },
  { label: "Home Preparation Checklist", href: "/sell/resources" },
  { label: "Moving Checklist", href: "/sell/resources" },
  { label: "Pricing Guide", href: "/sell/resources" },
  { label: "Closing Cost Guide", href: "/sell/resources" },
  { label: "Market Reports", href: "/resources/market-reports" },
  { label: "Tax Information", href: "/sell/resources" },
  { label: "Frequently Asked Questions", href: "/resources/faq" },
];

export default function SellPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Hero — Joshua greeting sellers outside their home at twilight"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              Your Home Has One Chance to Make a First Impression.{" "}
              <span className="text-(--color-primary-blue)">Let&apos;s Make It Count.</span>
            </h1>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Selling your home isn&apos;t about putting a sign in the yard. It&apos;s about
              creating demand. At Innovative Twist Real Estate, every listing receives a customized
              marketing strategy designed to attract qualified buyers, maximize exposure, and
              position your home to achieve its highest potential.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/sell/home-valuation">Get Your Home Value</Button>
              <Button href="/contact" variant="secondary">
                Schedule a Listing Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing campaigns intro */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            {MARKETING_ASSETS.slice(0, 6).map((asset) => (
              <PlaceholderImage key={asset.label} label={asset.label} aspect="video" />
            ))}
            {MARKETING_ASSETS.slice(6, 7).map((asset) => (
              <div key={asset.label} className="col-span-2">
                <PlaceholderImage label={asset.label} aspect="wide" />
              </div>
            ))}
          </div>
          <div>
            <Eyebrow>We Don&apos;t Just List Homes.</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
              We Launch Marketing Campaigns.
            </h2>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              Every home has a story. Our job is to make buyers fall in love with yours before they
              ever walk through the front door. From branding and professional media to digital
              advertising and strategic pricing, we create excitement that drives results.
            </p>
            <Button href="/sell/marketing-strategy" className="mt-4">
              View Our Marketing Process
            </Button>
          </div>
        </div>
      </section>

      {/* Our proven selling process */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Our Proven Selling Process</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
            A Clear Path From List to Close.
          </h2>
        </div>
        <div className="relative mt-10 grid grid-cols-3 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
          <div
            className="absolute top-5 right-0 left-0 hidden border-t border-dashed border-(--color-light-grey) lg:block"
            aria-hidden="true"
          />
          {SELLING_PROCESS.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--color-secondary-blue) bg-white text-sm font-bold text-(--color-secondary-blue)">
                {item.step}
              </div>
              <p className="mt-3 text-xs font-semibold text-(--color-neutral-900)">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing advantage */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wide text-white/70 uppercase">
            The Innovative Twist Marketing Advantage™
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {MARKETING_ADVANTAGES.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparing your home + Know your value */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Preparing Your Home for Success</Eyebrow>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PREP_ITEMS.map((item) => (
                <div key={item.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-(--color-neutral-900)">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-(--color-neutral-500)">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-(--color-neutral-500)">
              The smallest details often create the biggest return. We&apos;ll guide you through
              preparing your home so it stands out from the competition.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/concierge">Learn About Concierge Services</Button>
              <Button href="/sell/resources" variant="secondary">
                Download Checklist
              </Button>
            </div>
          </div>

          <div>
            <Eyebrow>Know Your Home&apos;s Value</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Every Great Strategy Starts With Knowing Your Home&apos;s Value.
            </h2>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              A home value isn&apos;t just a number. It&apos;s the foundation for every decision
              that follows. Receive a personalized valuation based on recent sales, neighborhood
              trends, market conditions, and your home&apos;s unique features.
            </p>
            <Button href="/sell/home-valuation" className="mt-4">
              Get Your Free Home Value Report
            </Button>
            <PlaceholderImage
              label="Home value report preview — populated with real property data at request time, not a fixed example"
              aspect="wide"
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* Success stories — honest empty state, no fabricated sale prices/addresses */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow className="text-(--color-primary-blue)">Real Results</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold text-white">Real Strategies. Real Success.</h2>
          <p className="mt-2 max-w-xl text-sm text-white/80">
            Every home tells a different story. Behind every successful sale is a carefully planned
            strategy, professional marketing, thoughtful negotiation, and a team committed to
            helping our clients achieve their goals.
          </p>
          <div className="mt-6 rounded-md border border-dashed border-white/30 bg-white/5 p-8 text-center text-sm text-white/70">
            Verified recent sales will appear here once connected to MLS/CRM data (see
            docs/api-integrations.md). This is intentionally not populated with sample results.
          </div>
        </div>
      </section>

      {/* Seller resource center */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Seller Resource Center</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-(--color-neutral-900)">
              Knowledge Creates Confidence.
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SELLER_RESOURCES.map((resource) => (
                <li key={resource.label}>
                  <Link
                    href={resource.href}
                    className="text-sm text-(--color-neutral-900) hover:text-(--color-secondary-blue)"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/sell/resources">Visit Resource Center</Button>
              <Button href="/sell/resources" variant="secondary">
                Download Seller Guide
              </Button>
            </div>
          </div>

          <div>
            <Eyebrow>Client Success Stories</Eyebrow>
            <h2 className="mt-2 text-xl font-bold text-(--color-neutral-900)">
              Marketing Doesn&apos;t Just Change How a Home Looks.
            </h2>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              It changes what buyers are willing to pay. The difference between an average listing
              and an exceptional one often comes down to presentation, strategy, and exposure.
            </p>
            <PlaceholderImage
              label="Client story — video testimonial"
              aspect="video"
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Joshua with sellers celebrating outside their home"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative bg-(--color-navy-exploratory)/90 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Let&apos;s Position Your Home for Success.
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Every home deserves more than a listing. It deserves a strategy. Whether you&apos;re
                moving across town or across the country, we&apos;ll guide you with honesty,
                communication, innovative marketing, and a plan designed around you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/sell/home-valuation">Get Your Home Value</Button>
              <Button href="/contact" variant="secondary">
                Schedule a Listing Consultation
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
