import type { Metadata } from "next";
import Link from "next/link";
import { Button, Eyebrow, PlaceholderImage } from "@innovative-twist/ui";
import {
  HomeIcon,
  MapPinIcon,
  UsersIcon,
  ClipboardIcon,
  MessageIcon,
  MonitorIcon,
  CreditCardIcon,
  WrenchIcon,
  BookIcon,
  ChartBarIcon,
  RepeatIcon,
  SmartphoneIcon,
  CheckIcon,
  LightbulbIcon,
  PiggyBankIcon,
  CalculatorIcon,
  KeyIcon,
  PawIcon,
  ShieldIcon,
  PhoneIcon,
} from "../../components/icons";

export const metadata: Metadata = {
  title: "Rentals in Hampton Roads | Innovative Twist Real Estate",
  description:
    "Find more than your next rental. Find your next home. Professional leasing, responsive maintenance, and a clear path from renting to homeownership.",
};

const TRUST_ITEMS = [
  { label: "Quality Homes", icon: HomeIcon },
  { label: "Great Locations", icon: MapPinIcon },
  { label: "Responsive Team", icon: UsersIcon },
  { label: "Easy Process", icon: ClipboardIcon },
];

const WHY_RESIDENTS = [
  {
    title: "Professional Leasing Team",
    body: "Our experienced team guides you every step of the way with clear communication and expert support.",
    icon: UsersIcon,
  },
  {
    title: "Responsive Communication",
    body: "Questions don't wait — and neither do we. Our team works hard to respond quickly and keep you informed.",
    icon: MessageIcon,
  },
  {
    title: "Easy Online Applications",
    body: "Apply securely from anywhere using our simple digital application process.",
    icon: ClipboardIcon,
  },
  {
    title: "Resident Portal",
    body: "Access your lease, payments, maintenance, and important documents anytime through your secure portal.",
    icon: MonitorIcon,
  },
  {
    title: "Online Payments",
    body: "Pay rent securely online, enroll in automatic payments, and manage your account with ease.",
    icon: CreditCardIcon,
  },
  {
    title: "Responsive Maintenance",
    body: "Submit maintenance requests online and receive updates throughout the repair process.",
    icon: WrenchIcon,
  },
];

const LEASING_PROCESS = [
  {
    step: "1",
    title: "Browse Available Homes",
    body: "Explore rentals using our advanced search tools to find homes that match your lifestyle and budget.",
    photoLabel: "Browsing available rentals online",
  },
  {
    step: "2",
    title: "Schedule a Showing",
    body: "Book a tour online or with our team at a time that works for you.",
    photoLabel: "Scheduling a rental showing",
  },
  {
    step: "3",
    title: "Submit Your Application",
    body: "Complete our secure online application and upload all required documents.",
    photoLabel: "Submitting a rental application on a tablet",
  },
  {
    step: "4",
    title: "Application Review",
    body: "We review your application and keep you informed throughout the process.",
    photoLabel: "Reviewing a rental application",
  },
  {
    step: "5",
    title: "Lease Approval & Signing",
    body: "Once approved, review and sign your lease electronically.",
    photoLabel: "Signing a lease",
  },
  {
    step: "6",
    title: "Move-In Orientation",
    body: "We'll review important information and your Resident Portal before you move in.",
    photoLabel: "Move-in orientation with new residents",
  },
  {
    step: "7",
    title: "Welcome Home",
    body: "Receive your keys and enjoy your new home knowing we're here to support you.",
    photoLabel: "Welcoming residents home",
  },
];

const RESIDENT_BENEFITS = [
  { label: "Resident Portal", icon: MonitorIcon },
  { label: "Pay Rent Online", icon: CreditCardIcon },
  { label: "Maintenance Requests", icon: WrenchIcon },
  { label: "Lease Documents", icon: BookIcon },
  { label: "Inspection Reports", icon: ClipboardIcon },
  { label: "Account History", icon: ChartBarIcon },
  { label: "Automatic Payments", icon: RepeatIcon },
  { label: "Mobile Friendly", icon: SmartphoneIcon },
];

const MAINTENANCE_ITEMS = [
  "Fast Response",
  "Easy Online Requests",
  "Real-Time Updates",
  "Quality Vendors",
];

const SUCCESS_CENTER_ITEMS = [
  {
    label: "Financial Education",
    body: "Practical budgeting, saving, and financial planning strategies.",
    icon: LightbulbIcon,
  },
  {
    label: "Credit Building",
    body: "Tools and resources to help you build stronger credit.",
    icon: ChartBarIcon,
  },
  {
    label: "First-Time Homebuyer",
    body: "Education and guidance to help you prepare for homeownership.",
    icon: HomeIcon,
  },
  {
    label: "Home Maintenance Tips",
    body: "Seasonal tips and home care advice for renters.",
    icon: WrenchIcon,
  },
  {
    label: "Community Events",
    body: "Stay connected through local events and neighborhood activities.",
    icon: UsersIcon,
  },
];

const HOMEOWNERSHIP_PATH = [
  { label: "Rent", icon: HomeIcon },
  { label: "Build Credit", icon: ChartBarIcon },
  { label: "Save", icon: PiggyBankIcon },
  { label: "Mortgage Preparation", icon: CalculatorIcon },
  { label: "Buy Your First Home", icon: KeyIcon },
];

const RENTAL_RESOURCES = [
  { label: "Moving Checklist", icon: ClipboardIcon, href: "/rentals/resources" },
  { label: "Pet Guide", icon: PawIcon, href: "/rentals/pet-friendly" },
  { label: "Utility Setup Guide", icon: LightbulbIcon, href: "/rentals/resources" },
  { label: "Renters Insurance Guide", icon: ShieldIcon, href: "/rentals/resources" },
  { label: "Resident Handbook", icon: BookIcon, href: "/rentals/resources" },
  { label: "Frequently Asked Questions", icon: MessageIcon, href: "/resources/faq" },
  { label: "Maintenance Tips", icon: WrenchIcon, href: "/rentals/resources" },
  { label: "Emergency Contacts", icon: PhoneIcon, href: "/rentals/resources" },
];

const FAQS = [
  {
    question: "What are your application requirements?",
    answer:
      "Requirements vary by property, but generally include proof of income, a background and credit check, and rental history. We'll walk you through exactly what's needed before you apply.",
  },
  {
    question: "Do you accept pets?",
    answer:
      "Many of our homes are pet-friendly with property-specific guidelines. Check each listing for pet policies, or reach out to our leasing team for pet-friendly options.",
  },
  {
    question: "What is the security deposit?",
    answer:
      "Security deposits vary by property and are outlined in your lease before you sign — there are no surprise fees.",
  },
  {
    question: "When is rent due?",
    answer:
      "Rent is due on the date specified in your lease, and can be paid securely online through your Resident Portal.",
  },
  {
    question: "How do maintenance requests work?",
    answer:
      "Submit a request anytime through your Resident Portal. Our team coordinates with trusted vendors and keeps you updated from request to resolution.",
  },
  {
    question: "Can Innovative Twist help me buy a home later?",
    answer:
      "Absolutely. Renting is often the first step on The Homeownership Path™ — when you're ready to buy, our team is here to help you make that move.",
  },
];

export default function RentalsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Hero — family moving into their new rental home"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-(--color-neutral-900) sm:text-5xl">
              Find More Than Your Next Rental.{" "}
              <span className="text-(--color-primary-blue)">Find Your Next Home.</span>
            </h1>
            <p className="mt-4 text-base text-(--color-neutral-500)">
              Whether you&apos;re searching for your first apartment, a larger home for your growing
              family, or a place to begin your next chapter, we&apos;re here to help you find a home
              that fits your lifestyle and your goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#search">Search Available Rentals</Button>
              <Button href="/contact" variant="secondary">
                Contact Our Leasing Team
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-(--color-neutral-500)"
                >
                  <item.icon className="h-4 w-4 text-(--color-primary-blue)" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search band */}
      <section id="search" className="bg-(--color-navy-exploratory) py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
            Find Your Next Home
          </p>
          <form className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7 lg:items-end">
            <label className="text-xs text-white/70 lg:col-span-1">
              City
              <input
                type="text"
                placeholder="Any City"
                className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50"
              />
            </label>
            <label className="text-xs text-white/70 lg:col-span-1">
              Zip Code
              <input
                type="text"
                placeholder="Any Zip"
                className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50"
              />
            </label>
            <label className="text-xs text-white/70 lg:col-span-1">
              Price Range
              <select className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                <option>$0 – $3,000+</option>
              </select>
            </label>
            <label className="text-xs text-white/70 lg:col-span-1">
              Bedrooms
              <select className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                <option>Any</option>
              </select>
            </label>
            <label className="text-xs text-white/70 lg:col-span-1">
              Bathrooms
              <select className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                <option>Any</option>
              </select>
            </label>
            <label className="text-xs text-white/70 lg:col-span-1">
              Property Type
              <select className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                <option>Any Type</option>
              </select>
            </label>
            <Button className="w-full lg:col-span-1">Search Homes</Button>
          </form>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/70">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5" /> Pet Friendly
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5" /> Available Now
            </label>
          </div>
          <div className="mt-4 rounded-md border border-dashed border-white/20 bg-white/5 p-4 text-xs text-white/60">
            Live rental listings will populate here once connected to real inventory data (see
            docs/api-integrations.md). This is intentionally not populated with sample properties.
          </div>
        </div>
      </section>

      {/* Why residents choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Why Residents Choose Innovative Twist</Eyebrow>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_RESIDENTS.map((item) => (
            <div key={item.title} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-(--color-neutral-900)">{item.title}</p>
              <p className="mt-1 text-xs text-(--color-neutral-500)">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-(--color-neutral-500)">
          Renting should feel simple, not stressful. We&apos;ve built a leasing experience focused
          on communication, convenience, and professionalism.
        </p>
      </section>

      {/* Leasing process */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wide text-white/70 uppercase">
            The Leasing Process™
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEASING_PROCESS.map((item) => (
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

      {/* Resident benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Eyebrow>Resident Benefits</Eyebrow>
        <p className="mt-2 max-w-xl text-sm text-(--color-neutral-500)">
          Everything you need is available 24/7 through your secure Resident Portal.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {RESIDENT_BENEFITS.map((item) => (
            <div key={item.label} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary-blue)/10 text-(--color-primary-blue)">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="mt-2 text-xs font-medium text-(--color-neutral-900)">{item.label}</p>
            </div>
          ))}
        </div>
        <Button href="/portal/tenant" className="mt-6">
          Login to Portal
        </Button>
      </section>

      {/* Maintenance + Pet-friendly */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-md bg-(--color-navy-exploratory) p-6">
            <p className="text-xs font-semibold tracking-wide text-(--color-primary-blue) uppercase">
              Maintenance Made Simple™
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">Fast. Simple. Transparent.</h2>
            <p className="mt-2 text-sm text-white/80">
              Maintenance issues happen. What matters is how they&apos;re handled. Our process keeps
              you informed from start to finish.
            </p>
            <ul className="mt-4 space-y-2">
              {MAINTENANCE_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white">
                  <CheckIcon className="h-4 w-4 text-(--color-primary-blue)" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/rentals/resources">Submit Maintenance Request</Button>
              <Button href="/rentals/resources" variant="onDark">
                Maintenance FAQ
              </Button>
              <Button href="tel:7577548512" variant="onDark">
                Emergency Maintenance
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-(--color-light-grey) p-6">
            <p className="text-xs font-semibold tracking-wide text-(--color-secondary-blue) uppercase">
              Pet-Friendly Living
            </p>
            <h2 className="mt-2 text-2xl font-bold text-(--color-neutral-900)">
              Pets Are Part of the Family.
            </h2>
            <p className="mt-2 text-sm text-(--color-neutral-500)">
              We understand pets are part of the family. Many of our homes welcome pets with
              property-specific guidelines designed to create a positive experience for both
              residents and property owners.
            </p>
            <PlaceholderImage
              label="Dog in a pet-friendly rental home"
              aspect="video"
              className="mt-4"
            />
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/rentals/pet-friendly">View Pet-Friendly Homes</Button>
              <Button href="/rentals/pet-friendly" variant="secondary">
                Read Pet Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Success Center + Homeownership Path */}
      <section className="bg-(--color-navy-exploratory) py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-semibold tracking-wide text-(--color-primary-blue) uppercase">
                Resident Success Center™
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Helping You Build More Than a Place to Live. Helping You Build a Better Future.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Most property management companies focus on collecting rent. We focus on helping
                people move forward — access tools, resources, and programs designed to support your
                goals, today and for the future.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {SUCCESS_CENTER_ITEMS.map((item) => (
                  <div key={item.label}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <p className="mt-2 text-xs font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-[11px] text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/rentals/resources">Explore Success Center</Button>
                <Button href="/rentals/homeownership-path" variant="onDark">
                  Start Planning for Homeownership
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-white/15 bg-white/5 p-6">
              <p className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                The Homeownership Path™
              </p>
              <ul className="mt-4 space-y-4">
                {HOMEOWNERSHIP_PATH.map((step) => (
                  <li key={step.label} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--color-primary-blue) text-(--color-primary-blue)">
                      <step.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white">{step.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold tracking-wide text-white/70 uppercase">
                Your Future. Our Mission.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-sm font-medium text-white hover:underline"
              >
                Still have questions? Contact our leasing team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Resource Center + FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Rental Resource Center</Eyebrow>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {RENTAL_RESOURCES.map((resource) => (
                <Link
                  key={resource.label}
                  href={resource.href}
                  className="flex items-center gap-2 rounded-md border border-(--color-light-grey) p-3 text-xs font-medium text-(--color-neutral-900) hover:border-(--color-primary-blue) hover:text-(--color-secondary-blue)"
                >
                  <resource.icon className="h-4 w-4 shrink-0 text-(--color-primary-blue)" />
                  {resource.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/rentals/resources">Visit Resource Center</Button>
              <Button href="/rentals/resources" variant="secondary">
                Download Move-In Guide
              </Button>
            </div>
          </div>

          <div>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <dl className="mt-4 space-y-5">
              {FAQS.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-sm font-semibold text-(--color-neutral-900)">
                    {faq.question}
                  </dt>
                  <dd className="mt-1 text-sm text-(--color-neutral-500)">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <PlaceholderImage
          label="Family unpacking boxes in their new rental home"
          aspect="wide"
          labelPosition="corner"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
        <div className="relative bg-(--color-navy-exploratory)/90 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Let&apos;s Help You Find Your Next Home.
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Whether you&apos;re looking for your first apartment, your next rental, or taking
                the first step toward homeownership, we&apos;re here to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="#search">Search Available Rentals</Button>
              <Button href="/contact" variant="secondary">
                Schedule a Showing
              </Button>
              <Button href="tel:7577548512" variant="secondary">
                Contact Leasing Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
