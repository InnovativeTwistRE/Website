import type { Metadata } from "next";
import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";
import {
  UsersIcon,
  TrendDownIcon,
  ShieldIcon,
  MessageIcon,
  EyeIcon,
  ChartBarIcon,
  MegaphoneIcon,
  WrenchIcon,
  ClipboardIcon,
  HeadsetIcon,
  HeartIcon,
  HomeIcon,
  MonitorIcon,
  BookIcon,
  CalculatorIcon,
  ScaleIcon,
} from "../../../components/icons";

export const metadata: Metadata = {
  title:
    "Property Management in Hampton Roads | Property Wealth Management™ | Innovative Twist Real Estate",
  description:
    "Most companies manage properties. We help build wealth. The Property Wealth Blueprint™ protects your investment, maximizes income, and builds long-term wealth.",
};

const WELCOME_BENEFITS = [
  { label: "Higher Quality Residents", icon: UsersIcon },
  { label: "Reduced Vacancy", icon: TrendDownIcon },
  { label: "Asset Protection", icon: ShieldIcon },
  { label: "Professional Communication", icon: MessageIcon },
  { label: "Financial Transparency", icon: EyeIcon },
  { label: "Long-Term Strategy", icon: ChartBarIcon },
];

const BLUEPRINT_STEPS = [
  {
    step: "1",
    title: "Discover",
    body: "Understand your goals. We learn about your objectives and create a plan that aligns with your investment goals.",
    photoLabel: "Owner consultation — reviewing investment goals",
  },
  {
    step: "2",
    title: "Prepare",
    body: "Position the property for success. We analyze the market, recommend improvements, and prepare your property to attract quality residents.",
    photoLabel: "Preparing the property — walkthrough and recommendations",
  },
  {
    step: "3",
    title: "Market",
    body: "Launch a premium campaign. Professional photos, online exposure, digital advertising, and social media marketing.",
    photoLabel: "Professional photography — rental listing",
  },
  {
    step: "4",
    title: "Place",
    body: "Find exceptional residents. Comprehensive screening helps reduce risk and place qualified, reliable residents.",
    photoLabel: "Lease signing — new resident placement",
  },
  {
    step: "5",
    title: "Protect",
    body: "Manage the investment. We handle rent collection, maintenance, inspections, and communication to protect your asset.",
    photoLabel: "Property inspection — protecting the investment",
  },
  {
    step: "6",
    title: "Perform",
    body: "Track performance. Monthly reports and financial insights keep you informed about your property's performance.",
    photoLabel: "Owner Portal — performance reporting",
  },
  {
    step: "7",
    title: "Prosper",
    body: "Build wealth. We help optimize income, grow equity, and create long-term wealth through smart strategy.",
    photoLabel: "Portfolio growth — building long-term wealth",
  },
];

const INVESTMENT_FEATURES = [
  {
    title: "Rental Marketing",
    body: "Professional media and targeted marketing designed to reduce vacancy time.",
    icon: MegaphoneIcon,
    photoLabel: "Rental marketing — professional listing photos",
  },
  {
    title: "Resident Placement",
    body: "Finding quality residents through a proven screening and leasing process.",
    icon: UsersIcon,
    photoLabel: "Resident placement — meeting prospective residents",
  },
  {
    title: "Maintenance Coordination",
    body: "Proactive maintenance and trusted vendors protect your property and reduce costs.",
    icon: WrenchIcon,
    photoLabel: "Maintenance coordination — vendor at work",
  },
  {
    title: "Routine Inspections",
    body: "Detailed inspections with photo documentation help protect your investment.",
    icon: ClipboardIcon,
    photoLabel: "Routine inspection — documenting condition",
  },
  {
    title: "Property Performance Reports™",
    body: "Monthly financial statements, lease activity, maintenance updates, and more through your Owner Portal.",
    icon: ChartBarIcon,
    photoLabel: "Owner Portal — monthly performance report",
  },
  {
    title: "Owner Success Team™",
    body: "A dedicated team focused on communication, transparency, and your long-term success.",
    icon: HeadsetIcon,
    photoLabel: "Owner Success Team — dedicated support",
  },
  {
    title: "Resident Success",
    body: "Happy residents stay longer. We create positive experiences that lead to long-term tenancy.",
    icon: HeartIcon,
    photoLabel: "Resident success — positive move-in experience",
  },
  {
    title: "Resident Success Program™",
    body: "A structured onboarding and support program that keeps residents informed and engaged — a good experience is the best retention strategy.",
    icon: HomeIcon,
    photoLabel: "Resident Success Program — community engagement",
  },
];

const WHY_OWNERS = [
  {
    title: "Asset Protection",
    body: "We take proactive steps to protect your investment and reduce risk.",
    icon: ShieldIcon,
  },
  {
    title: "Communication",
    body: "Responsive, clear communication you can count on every time.",
    icon: MessageIcon,
  },
  {
    title: "Technology",
    body: "Innovative systems and tools that make ownership simple and easy.",
    icon: MonitorIcon,
  },
  {
    title: "Marketing",
    body: "Advanced marketing strategies that reduce vacancy and attract quality residents.",
    icon: MegaphoneIcon,
  },
  {
    title: "Transparency",
    body: "Clear reporting, honest updates, and full financial transparency.",
    icon: ClipboardIcon,
  },
  {
    title: "Long-Term Wealth",
    body: "We help you grow your portfolio and build wealth for the future.",
    icon: ChartBarIcon,
  },
];

const OWNER_RESOURCES = [
  {
    label: "Owner Guide",
    body: "Complete guide to our management process.",
    icon: BookIcon,
    href: "/services/property-management/resources",
  },
  {
    label: "Rental Analysis",
    body: "Find out what your property can rent for.",
    icon: ChartBarIcon,
    href: "/services/property-management/rental-analysis",
  },
  {
    label: "Investment Calculator",
    body: "Run numbers and analyze potential.",
    icon: CalculatorIcon,
    href: "/resources/calculators",
  },
  {
    label: "Maintenance Guide",
    body: "Preventative tips to protect your property.",
    icon: WrenchIcon,
    href: "/services/property-management/resources",
  },
  {
    label: "Performance Report",
    body: "Sample report so you know what to expect.",
    icon: ClipboardIcon,
    href: "/services/property-management/resources",
  },
  {
    label: "Virginia Landlord Forms & Checklists",
    body: "Important laws, forms, and compliance info.",
    icon: ScaleIcon,
    href: "/services/property-management/resources",
  },
];

export default function PropertyManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Hero — rental property at twilight"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              Your Property Is More Than a Rental.{" "}
              <span className="text-(--color-primary-blue)">
                It&apos;s a Wealth-Building Asset.
              </span>
            </h1>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Whether you own one rental home or an expanding portfolio, our Property Wealth
              Blueprint™ helps protect your investment, maximize income, simplify ownership, and
              build long-term wealth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Schedule an Owner Consultation</Button>
              <Button href="/services/property-management/rental-analysis" variant="secondary">
                Get My Free Rental Analysis
              </Button>
            </div>
            <p className="mt-4 text-sm text-(--color-neutral-500)">
              Trusted by Hampton Roads property owners
            </p>
          </div>
        </div>
      </section>

      {/* Welcome to Property Wealth Management */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:items-start">
          <div className="grid grid-cols-2 gap-3">
            <PlaceholderImage label="Rental property exterior at twilight" aspect="square" />
            <PlaceholderImage label="Meeting with a property owner" aspect="square" />
            <PlaceholderImage
              label="Owner Portal — reviewing performance on a tablet"
              aspect="square"
            />
            <PlaceholderImage label="Inspecting property condition" aspect="square" />
          </div>
          <div>
            <Eyebrow>Welcome To</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-(--color-neutral-900)">
              Property Wealth Management™
            </h2>
            <p className="mt-2 text-sm font-semibold text-(--color-secondary-blue)">
              Most Companies Manage Properties. We Help Build Wealth.
            </p>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              Traditional property management focuses on collecting rent. Our Property Wealth
              Blueprint™ is designed to improve the overall performance of your investment.
            </p>
            <p className="mt-3 text-sm text-(--color-neutral-500)">
              Every recommendation — from pricing and resident placement to maintenance,
              inspections, and reporting — is made with one goal: helping your property perform
              better today while creating long-term wealth tomorrow.
            </p>
            <Button href="#blueprint" className="mt-4">
              Discover the Blueprint
            </Button>
          </div>
          <ul className="space-y-4">
            {WELCOME_BENEFITS.map((benefit) => (
              <li key={benefit.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                  <benefit.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-(--color-neutral-900)">
                  {benefit.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Property Wealth Blueprint */}
      <section id="blueprint" className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wide text-white/70 uppercase">
            The Property Wealth Blueprint™
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BLUEPRINT_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-md border border-white/15 bg-white/5 p-4 text-center"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border-2 border-(--color-primary-blue) text-sm font-bold text-white">
                  {item.step}
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/70">{item.body}</p>
                <PlaceholderImage label={item.photoLabel} aspect="video" className="mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything your investment needs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Everything Your Investment Needs</Eyebrow>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {INVESTMENT_FEATURES.map((item) => (
            <div key={item.title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-(--color-neutral-900)">{item.title}</p>
              <p className="mt-1 text-xs text-(--color-neutral-500)">{item.body}</p>
              <PlaceholderImage label={item.photoLabel} aspect="video" className="mt-3" />
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 rounded-md border border-(--color-light-grey) p-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-(--color-neutral-900)">
              Real-Time Insights. Total Transparency.
            </h3>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              Know exactly how your investment is performing, anytime, anywhere, through your secure
              Owner Portal.
            </p>
          </div>
          <PlaceholderImage
            label="Owner Portal dashboard preview — sample occupancy, income, and cash flow metrics UI, not a real property's actual figures"
            aspect="portrait"
          />
        </div>
      </section>

      {/* Why owners choose Innovative Twist */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wide text-white/70 uppercase">
            Why Owners Choose Innovative Twist
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {WHY_OWNERS.map((item) => (
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

      {/* Success stories — honest empty state, no fabricated rent/vacancy figures */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <Eyebrow>Success Stories</Eyebrow>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              Every property is unique, but our system is designed to deliver consistent results for
              owners across Hampton Roads.
            </p>
            <Button
              href="/services/property-management/success-stories"
              variant="secondary"
              className="mt-4"
            >
              View More Success Stories
            </Button>
          </div>
          <div className="rounded-md border border-dashed border-(--color-light-grey) bg-(--color-light-grey)/20 p-8 text-center text-sm text-(--color-neutral-500)">
            Verified owner results (rent growth, vacancy reduction, occupancy, NOI) will appear here
            once connected to real property performance data (see docs/api-integrations.md). This is
            intentionally not populated with sample figures.
          </div>
        </div>
      </section>

      {/* Resources for property owners */}
      <section className="bg-(--color-light-grey)/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <Eyebrow>Resources for Property Owners</Eyebrow>
              <p className="mt-2 text-sm text-(--color-neutral-500)">
                Free guides, checklists, and tools to help you make smart decisions and protect your
                investment.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {OWNER_RESOURCES.map((resource) => (
                  <Link
                    key={resource.label}
                    href={resource.href}
                    className="rounded-md border border-(--color-light-grey) p-3 text-xs font-medium text-(--color-neutral-900) hover:border-(--color-primary-blue) hover:text-(--color-secondary-blue)"
                  >
                    <resource.icon className="h-4 w-4 text-(--color-primary-blue)" />
                    <span className="mt-2 block">{resource.label}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/services/property-management/resources">
                  Visit Resource Center
                </Button>
                <Button href="/services/property-management/rental-analysis" variant="secondary">
                  Get a Rental Analysis
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-md border border-(--color-light-grey) bg-white p-6">
              <p className="text-lg font-bold text-(--color-neutral-900)">Still have questions?</p>
              <p className="mt-2 text-sm text-(--color-neutral-500)">We&apos;re here to help.</p>
              <Button href="/contact" variant="secondary" className="mt-4">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Joshua reviewing the Owner Portal with property owners"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative bg-(--color-navy-exploratory)/90 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Build Wealth With Confidence.</h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Whether you&apos;re purchasing your first rental property or managing a growing
                portfolio, our Property Wealth Blueprint™ is designed to help protect your
                investment, maximize performance, and support your long-term financial goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Schedule an Owner Consultation</Button>
              <Button href="/services/property-management/rental-analysis" variant="secondary">
                Get My Free Rental Analysis
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
