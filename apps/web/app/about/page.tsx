import type { Metadata } from "next";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";
import {
  AnchorIcon,
  MegaphoneIcon,
  BuildingIcon,
  UsersIcon,
  BriefcaseIcon,
  VideoIcon,
  LightbulbIcon,
  HomeIcon,
  MicIcon,
  KeyIcon,
  CameraIcon,
  SearchIcon,
  BookIcon,
  ChartBarIcon,
  MessageIcon,
  HeartIcon,
  MapPinIcon,
} from "../../components/icons";

export const metadata: Metadata = {
  title: "About Joshua Alvelo | Innovative Twist Real Estate",
  description:
    "More than a REALTOR. Building relationships, creating opportunities, and helping Hampton Roads families build wealth through real estate.",
};

/**
 * Stats reused from the homepage (17+ Years Experience, 750+ Families
 * Helped, 21% Top Ranked Agent, 5★ Google Rating) rather than the
 * different figures shown in the reference mockup for this page — kept
 * site-wide consistency over a second, conflicting set of numbers.
 * Flagged 2026-07-30; update both places together once real numbers are
 * confirmed.
 */
const NUMBERS = [
  ["17+", "Years Experience"],
  ["750+", "Families Helped"],
  ["21%", "Top Ranked Agent"],
  ["5★", "Google Rating"],
];

const ROLES = [
  { label: "Navy Veteran", icon: AnchorIcon },
  { label: "Marketing Strategist", icon: MegaphoneIcon },
  { label: "Property Management Professional", icon: BuildingIcon },
  { label: "Community Builder", icon: UsersIcon },
  { label: "Entrepreneur", icon: BriefcaseIcon },
  { label: "Content Creator", icon: VideoIcon },
];

const JOURNEY = [
  { label: "Childhood", icon: HeartIcon },
  { label: "Creative Entrepreneur", icon: LightbulbIcon },
  { label: "Founded Innovative Twist Printing", icon: BriefcaseIcon },
  { label: "Growing Businesses", icon: ChartBarIcon },
  { label: "United States Navy Veteran", icon: AnchorIcon },
  { label: "Entered Real Estate", icon: HomeIcon },
  { label: "Property Management", icon: BuildingIcon },
  { label: "Built in the 757", icon: MicIcon },
  { label: "Building the Future", icon: KeyIcon },
];

const MARKETING_SKILLS = [
  { label: "Professional Photography", icon: CameraIcon },
  { label: "Cinematic Video", icon: VideoIcon },
  { label: "Drone Footage", icon: SearchIcon },
  { label: "Digital Marketing", icon: MegaphoneIcon },
  { label: "Print & Magazine", icon: BookIcon },
  { label: "Social Media Strategy", icon: ChartBarIcon },
  { label: "Branding & Design", icon: LightbulbIcon },
];

const WHY_CLIENTS = [
  {
    title: "Education Before Decisions",
    body: "I believe informed clients make confident decisions.",
    icon: BookIcon,
  },
  {
    title: "Communication",
    body: "You'll never wonder what's happening.",
    icon: MessageIcon,
  },
  {
    title: "Marketing",
    body: "Every home deserves its own strategy.",
    icon: MegaphoneIcon,
  },
  {
    title: "Technology",
    body: "Smarter systems, better experiences.",
    icon: ChartBarIcon,
  },
  {
    title: "Relationships",
    body: "I don't disappear after closing.",
    icon: HeartIcon,
  },
  {
    title: "Community",
    body: "Helping build stronger neighborhoods.",
    icon: UsersIcon,
  },
];

const BEYOND_REAL_ESTATE = [
  { label: "Husband", body: "My greatest success begins at home.", icon: HeartIcon },
  { label: "Father", body: "My children remind me why legacy matters.", icon: UsersIcon },
  { label: "Navy Veteran", body: "Service taught me discipline and honor.", icon: AnchorIcon },
  {
    label: "Business Owner",
    body: "Helping businesses stand out is a lifelong passion.",
    icon: BriefcaseIcon,
  },
  { label: "Content Creator", body: "I believe education should be free.", icon: VideoIcon },
  { label: "Community Advocate", body: "Hampton Roads isn't just where I work.", icon: MapPinIcon },
];

/**
 * Real vendor relationships, per the client (2026-07-30) — these names
 * appeared consistently across multiple reference mockups, not a one-off,
 * so used directly as text. Not fabricated logo graphics — real logo
 * files are tracked in docs/photo-manifest.md.
 */
const TRUSTED_PARTNERS = [
  "Movement Mortgage",
  "Fortis Title & Escrow",
  "Farmers Insurance",
  "Property Inspections",
  "Quality Contracting",
  "Focus Media Group",
  "Two Men and a Truck",
];

const COMMUNITY_ITEMS = [
  { label: "Local Neighborhoods", icon: MapPinIcon },
  { label: "Community Events", icon: UsersIcon },
  { label: "Local Businesses", icon: BriefcaseIcon },
  { label: "Volunteer Work", icon: HeartIcon },
  { label: "Built in the 757 Magazine", icon: BookIcon },
];

const FAQS = [
  {
    question: "How long have you been in real estate?",
    answer:
      "I bring years of marketing and business experience into everything I do in real estate, giving clients a different kind of advantage than a typical agent.",
  },
  {
    question: "Do you help military families?",
    answer:
      "Yes — as a Navy veteran myself, I understand PCS timelines, VA loans, and what it's like to relocate on short notice.",
  },
  {
    question: "Do you offer property management?",
    answer:
      "Yes, through our Property Wealth Management™ services — from tenant placement to ongoing maintenance and reporting.",
  },
  {
    question: "What areas do you serve?",
    answer: "Hampton Roads, Virginia — including Virginia Beach, Norfolk, Chesapeake, and Suffolk.",
  },
  {
    question: "What makes Innovative Twist different?",
    answer:
      "A background in marketing and branding most agents don't have, combined with a genuine commitment to staying involved with clients long after closing.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Joshua on the waterfront boardwalk at dusk"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <Eyebrow>About Joshua Alvelo</Eyebrow>
            <h1 className="mt-2 text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              More Than a REALTOR.
            </h1>
            <p className="mt-3 text-2xl font-semibold text-(--color-primary-blue)">
              Building Relationships.
              <br />
              Creating Opportunities.
              <br />
              Helping Families Build Wealth.
            </p>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Real estate isn&apos;t just about buying or selling property. It&apos;s about helping
              people make confident decisions that change their lives.
            </p>
            <Button href="/contact" className="mt-6">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Joshua */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <PlaceholderImage label="Joshua Alvelo — portrait" aspect="portrait" />
          <div>
            <Eyebrow>Meet Joshua</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Hi, I&apos;m Joshua Alvelo.
            </h2>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              Founder of Innovative Twist Real Estate. I didn&apos;t build Innovative Twist to
              become another real estate company. I built it because I believe people deserve better
              than a transaction.
            </p>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              Buying or selling a home is one of the biggest financial decisions most people will
              ever make. It deserves a guide who takes the time to educate, strategize, communicate,
              and stay involved after the closing table.
            </p>
            <p className="mt-3 text-sm font-semibold text-(--color-neutral-900)">
              My mission is simple: help people make smarter real estate decisions while building
              relationships that last a lifetime.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {ROLES.map((role) => (
                <div key={role.label} className="flex items-center gap-2">
                  <role.icon className="h-4 w-4 shrink-0 text-(--color-primary-blue)" />
                  <span className="text-xs font-medium text-(--color-neutral-900)">
                    {role.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow className="text-(--color-primary-blue)">My Journey</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold text-white">From the Beginning.</h2>
          <div className="relative mt-10 grid grid-cols-3 gap-y-8 sm:grid-cols-9">
            <div
              className="absolute top-5 right-0 left-0 hidden border-t border-dashed border-white/20 sm:block"
              aria-hidden="true"
            />
            {JOURNEY.map((stop) => (
              <div key={stop.label} className="relative text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--color-navy-exploratory) text-white ring-2 ring-(--color-primary-blue)">
                  <stop.icon className="h-5 w-5" />
                </div>
                <p className="mt-2 px-1 text-[11px] font-medium text-white/80">{stop.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where marketing meets real estate */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            <PlaceholderImage label="For Sale sign — IT branded" aspect="square" />
            <PlaceholderImage label="Built in the 757 — cover art" aspect="square" />
            <PlaceholderImage label="Drone / camera equipment" aspect="square" />
            <PlaceholderImage label="Tablet with IT branding" aspect="square" />
          </div>
          <div>
            <Eyebrow>Where Marketing Meets Real Estate</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Most agents market homes.
              <br />I build marketing campaigns.
            </h2>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              My background in branding and visual marketing gives every listing an advantage. Every
              property deserves a custom strategy, not a template. From professional photography and
              cinematic video to digital advertising, social media, print marketing, and magazine
              exposure, every decision is made with one goal in mind: creating demand.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {MARKETING_SKILLS.map((skill) => (
                <li key={skill.label} className="flex items-center gap-2">
                  <skill.icon className="h-4 w-4 shrink-0 text-(--color-primary-blue)" />
                  <span className="text-xs font-medium text-(--color-neutral-900)">
                    {skill.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why clients choose me */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Why Clients Choose Me</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {WHY_CLIENTS.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/20 text-(--color-primary-blue)">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="mt-2 text-xs font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-[11px] text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers that matter */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-(--color-neutral-900)">Numbers That Matter</h2>
            <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {NUMBERS.map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold text-(--color-primary-blue)">{value}</dt>
                  <dd className="text-xs text-(--color-neutral-500) uppercase">{label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-(--color-neutral-500)">
              Every number represents a family, a dream, or an opportunity trusted to me.
            </p>
          </div>
          <PlaceholderImage label="Hampton Roads skyline" aspect="video" />
        </div>
      </section>

      {/* Beyond real estate */}
      <section className="bg-(--color-light-grey)/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Beyond Real Estate</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
            More Than a Job Title.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {BEYOND_REAL_ESTATE.map((item) => (
              <div key={item.label}>
                <PlaceholderImage label={`${item.label} — photo`} aspect="square" />
                <p className="mt-2 text-xs font-semibold text-(--color-neutral-900)">
                  {item.label}
                </p>
                <p className="mt-1 text-[11px] text-(--color-neutral-500)">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built in the 757 */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow className="text-(--color-primary-blue)">Built in the 757™</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Helping Hampton Roads Tell Its Story.
              </h2>
              <p className="mt-3 text-sm text-white/80">
                Real estate is about more than homes. It&apos;s about people. Built in the 757
                highlights the entrepreneurs, neighborhoods, businesses, and stories that make our
                community special.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/built-in-the-757">Listen to the Podcast</Button>
                <Button href="/built-in-the-757" variant="onDark">
                  Read the Magazine
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <PlaceholderImage label="Latest episode — podcast player" aspect="square" />
              <PlaceholderImage label="Built in the 757 — magazine cover" aspect="square" />
              <PlaceholderImage label="Joshua recording — behind the scenes" aspect="square" />
              <PlaceholderImage label="Hampton Roads aerial" aspect="square" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted partners */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Your Team Beyond Your REALTOR®</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
            When you work with Innovative Twist, you don&apos;t just hire a REALTOR®. You gain an
            entire team of trusted professionals.
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TRUSTED_PARTNERS.map((partner) => (
            <span key={partner} className="text-sm font-semibold text-(--color-neutral-500)">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow className="text-(--color-primary-blue)">Community</Eyebrow>
              <h2 className="mt-2 text-2xl font-bold text-white">
                I Live Here. I Work Here. I Invest Here.
              </h2>
              <p className="mt-3 text-sm text-white/80">
                Helping Hampton Roads grow isn&apos;t just part of my business. It&apos;s part of
                who I am.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {COMMUNITY_ITEMS.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 shrink-0 text-(--color-primary-blue)" />
                    <span className="text-xs font-medium text-white">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderImage label="Hampton Roads coastline aerial" aspect="video" />
          </div>
        </div>
      </section>

      {/* What clients are saying — placeholder per client direction */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Eyebrow>What Clients Are Saying</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
          5.0 Average Rating on Google
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <PlaceholderImage label="Client story — video testimonial" aspect="square" />
          <PlaceholderImage label="Client story — video testimonial" aspect="square" />
          <PlaceholderImage label="Client story — video testimonial" aspect="square" />
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
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Joshua with a family, casual conversation"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative bg-(--color-navy-exploratory)/90 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Let&apos;s Build Your Next Chapter Together.
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Because buying real estate is important. Choosing the right person to guide you is
                even more important.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Schedule a Consultation</Button>
              <Button href="/search" variant="secondary">
                Search Homes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
