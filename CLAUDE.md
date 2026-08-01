# CLAUDE.md

## Innovative Twist Real Estate Platform
Version: 1.0  
Owner: Joshua Alvelo  
Brand: Innovative Twist Real Estate  
Brokerage: World Class Realty  
Primary Market: Hampton Roads, Virginia  
Platform Architecture: WealthOS™

---

# 1. Purpose of This File

This file is the highest-level source of truth for Claude Code while building the Innovative Twist Real Estate platform.

Claude must use this file to understand:

- what the platform is
- why it exists
- how each system connects
- how the brand should feel
- how users should move through the experience
- how data should be structured
- how code should be organized
- how AI should behave
- how future features should be evaluated

When another document conflicts with this file, pause and identify the conflict before implementing.

Do not make major product, architecture, branding, workflow, or data-model changes without documenting them.

---

# 2. Platform Vision

Innovative Twist Real Estate is not being built as a basic real estate website.

It is being built as a connected real estate wealth platform that helps people:

- learn
- buy
- sell
- invest
- manage property
- maintain property
- understand equity
- plan future purchases
- improve property performance
- build long-term wealth

The platform must create a client-for-life relationship.

A user should be able to enter the ecosystem as a renter, buyer, seller, homeowner, landlord, or investor and continue using the platform as their needs evolve.

The platform should feel like a premium software product, not a collection of disconnected pages, calculators, lead forms, or marketing funnels.

---

# 3. Core Brand Philosophy

All product decisions should reinforce these principles.

## 3.1 Education First

The platform should teach before it sells.

Users should understand:

- what a number means
- why it matters
- what assumptions were used
- what risks exist
- what their next logical action should be

Do not use pressure-heavy sales language.

Do not create interfaces that hide important information in order to force a conversion.

## 3.2 Data Over Emotion

Real estate decisions are emotional, but recommendations should be grounded in:

- verified property data
- transparent assumptions
- financial calculations
- market context
- user goals
- risk tolerance

## 3.3 Client for Life

The platform should remain useful after a transaction closes.

Users should have reasons to return for:

- annual home reviews
- equity tracking
- maintenance planning
- investor analysis
- document storage
- property management
- improvement planning
- market updates
- future purchases

## 3.4 Premium but Approachable

The experience should feel polished, modern, and high-end without feeling cold, corporate, or confusing.

## 3.5 Wealth Management Through Real Estate

The platform should treat real estate as a major financial asset.

Property management should be positioned as Property Wealth Management™ where appropriate.

---

# 4. Core Platform Architecture

The internal architecture is called WealthOS™.

WealthOS™ is the connected system behind the full Innovative Twist ecosystem.

It consists of:

- KnowledgeOS™
- InvestorOS™
- PropertyOS™
- HomeownerOS™
- ConciergeOS™
- AIOS™

These are internal architecture names unless a public-facing use is specifically approved.

---

# 5. Platform Systems

## 5.1 KnowledgeOS™

Purpose: educate users before and after decisions.

Includes:

- Knowledge Center™
- buyer education
- seller education
- renter education
- investor education
- landlord education
- neighborhood guides
- market updates
- Built in the 757™ content
- articles
- videos
- podcasts
- guides
- interactive learning tools

Rules:

- educational content should connect to relevant tools
- tools should link back to relevant education
- content should be written clearly
- avoid unnecessary industry jargon
- explain financial terms in plain language
- include beginner and advanced depth where practical

## 5.2 InvestorOS™

Purpose: help investors analyze deals, plan wealth, manage portfolios, and make better decisions.

Includes:

- Investor Dashboard™
- Deal Analysis Suite™
- Wealth Planning Suite™
- Portfolio Management Suite™
- Acquisition Suite™
- Property Wealth Management Suite™
- AI Intelligence Suite™
- branded reports
- saved properties
- saved assumptions
- investor goals
- portfolio tracking

## 5.3 PropertyOS™

Purpose: organize and manage owned or managed properties.

Includes:

- property records
- ownership data
- property documents
- maintenance history
- inspection history
- rent data
- expense data
- vendor records
- improvement history
- capital planning
- reserve planning
- property timeline
- annual property review
- owner dashboard

## 5.4 HomeownerOS™

Purpose: provide value to homeowners after closing.

Includes:

- Homeowner Portal™
- equity tracker
- home value tracker
- mortgage summary
- property timeline
- document vault
- annual home review
- seasonal maintenance
- insurance information
- tax information
- service history
- concierge requests
- future sale readiness

## 5.5 ConciergeOS™

Purpose: help users maintain, repair, prepare, and improve properties.

Includes:

- Concierge Services™
- vendor directory
- preferred professionals
- project tracking
- renovation planning
- repair coordination
- before-and-after documentation
- improvement ROI analysis
- Seasonal Home Care™
- Client Advantage™

## 5.6 AIOS™

Purpose: provide intelligent analysis throughout the platform.

AIOS™ should use shared user, property, portfolio, and market data.

AI must not operate as an isolated chatbot.

AI must explain:

- what it found
- why it matters
- which assumptions were used
- what risks exist
- what alternative scenarios look like
- what action the user can take next

AI must not guarantee financial returns, appreciation, tenant performance, legal outcomes, loan approval, or transaction results.

---

# 6. Primary User Types

The platform must support the following user types.

## 6.1 Visitor

Can:

- browse public pages
- read education
- view listings
- use limited tools
- submit forms
- begin an analysis

Cannot:

- access private dashboards
- access saved reports
- access private property records

## 6.2 Registered Consumer

Can:

- save searches
- save properties
- save reports
- access educational history
- manage profile and preferences
- receive recommendations

## 6.3 Buyer

Can:

- track buying goals
- view saved homes
- complete buyer education
- upload documents
- access milestone guidance
- communicate with the team

## 6.4 Seller

Can:

- track property preparation
- view valuation-related materials
- access listing milestones
- upload property documents
- review concierge projects
- receive market updates

## 6.5 Renter

Can:

- view rentals
- submit inquiries
- begin application workflows
- access tenant education
- access approved tenant documents and resources

## 6.6 Homeowner

Can:

- access Homeowner Portal™
- track equity
- store documents
- schedule annual reviews
- track maintenance
- request concierge services

## 6.7 Investor

Can:

- analyze deals
- save assumptions
- generate reports
- manage portfolio records
- access AI analysis
- track goals
- compare scenarios

## 6.8 Property Owner / Landlord

Can:

- view managed properties
- review performance
- access documents
- view inspections
- review income and expenses
- communicate with management

## 6.9 Tenant

Can:

- access approved tenant resources
- view property information
- access move-in and move-out workflows
- submit maintenance requests when integrated
- access rules and notices

## 6.10 Agent or Team Member

Can access assigned leads, clients, properties, tasks, and workflows according to permissions.

## 6.11 Property Manager

Can access assigned owner, tenant, property, inspection, maintenance, and operational records.

## 6.12 Admin

Has full system access.

## 6.13 Joshua

Has full owner-level access, reporting access, CRM visibility, and lead-intent visibility.

---

# 7. Public Website Structure

## 7.1 Primary Navigation (locked, maximum 7 items)

Primary navigation is capped at 7 items, single row, no wrapping: Home, Buy, Sell, Services, Resources, About, Contact. Buy, Sell, Services, Resources, and About use mega menus rather than long dropdown lists; Contact and Home are direct links. Full mega-menu contents, the utility navigation (Owner Portal, Tenant Portal, Client Login, etc. — never in the primary nav), the IA rules for landing/campaign pages, and the desktop/mobile UX requirements are documented in `docs/navigation-architecture.md`, which is canonical for navigation. This supersedes the flat 12-item nav originally listed here — no pages were dropped, only reorganized under the mega menus (see the mapping table in that doc).

All the underlying pages below still exist; navigation architecture governs how they're *exposed*, not whether they exist:

- Homepage
- About
- Buyers
- Sellers
- Property Wealth Management™
- Rentals
- Build Wealth
- Concierge Services
- Knowledge Center™
- Communities
- Built in the 757™
- Resources
- Contact

Every page should have a clear purpose.

Do not duplicate large sections of copy across pages.

Do not use the same hero layout everywhere.

Each page should feel related to the same brand but visually distinct.

---

# 8. Investor Platform Structure

The investor platform is the centerpiece of Build Wealth™.

It must be treated as a connected operating system, not a calculator library.

## 8.1 Deal Analysis Suite™

Includes:

- Investment Property Analyzer™
- IT WealthScore™
- Cash Flow Calculator™
- NOI Calculator™
- Cap Rate Calculator™
- Cash-on-Cash Calculator™
- DSCR Calculator™
- Maximum Offer Calculator™
- Break-even Occupancy Calculator™
- Rental Demand Score™

## 8.2 Wealth Planning Suite™

Includes:

- Equity Growth Calculator™
- Appreciation Forecast™
- Mortgage Paydown Visualizer™
- Retirement Income Planner™
- Passive Income Planner™
- Financial Freedom Planner™
- Net Worth Tracker™
- Generational Wealth Planner™

Time horizons should support:

- 1 year
- 5 years
- 10 years
- 20 years
- 30 years

## 8.3 Portfolio Management Suite™

Includes:

- Portfolio Dashboard™
- Portfolio Health Score™
- Property Performance Dashboard™
- Occupancy Dashboard™
- Equity Distribution™
- Annual Wealth Review™
- Portfolio ROI™
- Portfolio Risk Analyzer™

## 8.4 Acquisition Suite™

Includes:

- Financing Comparison™
- BRRRR Analyzer™
- House Flip Analyzer™
- House Hack Analyzer™
- Short-Term Rental Analyzer™
- Long-Term Rental Analyzer™
- Multifamily Analyzer™
- Commercial Analyzer™
- 1031 Exchange Planner™

## 8.5 Property Wealth Management Suite™

Includes:

- Market Rent Analyzer™
- Maintenance Forecast™
- Capital Improvement Planner™
- Property Improvement ROI™
- Vacancy Cost Calculator™
- Reserve Fund Calculator™
- Inspection Tracker™
- Owner Dashboard™

## 8.6 AI Intelligence Suite™

Includes:

- AI Deal Analyzer™
- AI Neighborhood Analyzer™
- AI Rent Optimizer™
- AI Rehab Estimator™
- AI Portfolio Coach™
- AI Exit Strategy Advisor™
- AI Ask an Investor™

AI tools must use platform calculations and shared data before producing conclusions.

---

# 9. Shared Data Model Principles

The system must avoid duplicate data entry.

A property entered in one module should be available to every authorized module.

A user should not have to re-enter:

- address
- purchase price
- rent
- mortgage
- taxes
- insurance
- HOA
- expenses
- property details
- financial goals

Use a shared source of truth.

## 9.1 Primary Entities

Core entities include:

- User
- Contact
- InvestorProfile
- Property
- PropertyOwnership
- Listing
- Deal
- Analysis
- Scenario
- Portfolio
- PortfolioProperty
- Report
- Document
- Task
- Notification
- Activity
- Goal
- MaintenanceRecord
- Inspection
- Vendor
- Project
- Lease
- Tenant
- Owner
- Lead
- CRMEvent

## 9.2 Property Object

The Property object should support:

- internal property ID
- MLS ID
- address
- latitude
- longitude
- property type
- bedrooms
- bathrooms
- square footage
- lot size
- year built
- purchase price
- current value
- estimated value
- taxes
- insurance
- HOA
- rent
- vacancy
- utilities
- maintenance
- mortgage
- interest rate
- loan balance
- photos
- documents
- inspection records
- notes
- ownership
- management status
- source
- timestamps

## 9.3 Investor Profile

The InvestorProfile should support:

- experience level
- target property types
- preferred markets
- available cash
- financing preferences
- target ROI
- target cap rate
- risk tolerance
- passive income target
- retirement target
- time horizon
- investment goals
- saved assumptions
- preferred analysis defaults

---

# 10. Reports

Reports are a major platform feature.

Reports must be branded, understandable, and reusable.

Supported reports include:

- Investment Opportunity Report™
- Property Snapshot™
- IT WealthScore Report™
- Annual Wealth Review™
- Portfolio Health Report™
- Cash Flow Forecast™
- Property Wealth Report™
- Retirement Projection™
- Investor Readiness Assessment™

Every report should include, where relevant:

- title page
- property details
- executive summary
- key metrics
- assumptions
- charts
- risk analysis
- scenario comparisons
- AI explanation
- recommendations
- next steps
- generated date
- Innovative Twist branding
- Joshua Alvelo attribution
- compliance disclaimer
- link or QR code back to the platform

Reports must be saved to the user's dashboard.

---

# 11. User Experience Rules

## 11.1 General

The product should feel simple even when the calculations are complex.

Use progressive disclosure.

Show the most important result first.

Allow advanced users to inspect assumptions and details.

## 11.2 Beginner and Advanced Modes

Where appropriate, tools should support:

Beginner Mode:

- plain-language labels
- guided inputs
- explanations
- recommended defaults
- educational prompts

Advanced Mode:

- full assumptions
- editable formulas
- detailed expense categories
- scenario comparisons
- deeper charts

## 11.3 Auto-Save

Authenticated users should not lose work.

Save:

- property data
- analysis progress
- assumptions
- generated reports
- saved scenarios
- dashboard preferences

## 11.4 Mobile

Every public page, dashboard, tool, form, and report preview must work on mobile.

Do not treat mobile as a reduced desktop layout.

Prioritize:

- tap targets
- readable type
- short input flows
- sticky primary actions where useful
- collapsed advanced sections
- fast loading

## 11.5 Accessibility

Target WCAG 2.2 AA where practical.

Requirements include:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- form labels
- error summaries
- accessible charts
- alt text
- reduced-motion support
- no meaning communicated by color alone

---

# 12. Visual Design System

The visual direction is:

- premium
- clean
- modern
- Apple-inspired
- white-space driven
- financial-dashboard capable
- approachable
- locally grounded

## 12.1 Brand Colors

Primary Blue: `#1390D0`  
Secondary Blue: `#0A5FA3`  
White: `#FFFFFF`  
Light Grey: `#DEDEDE`

Additional neutrals may be introduced through design tokens.

Do not hard-code colors throughout components.

### Gold accent — scoped, not site-wide

Approved 2026-07-31 as a second accent color, reserved for Property Wealth Management™ and other
premium, investor-tier content (PropertyOS™/InvestorOS™) — not for the general public site (Buy,
Sell, About, Homepage stay on the core blue palette above). Rationale: Property Wealth Management
is positioned as a distinct, higher tier of service — building long-term wealth for owners, not
just collecting rent — and should read visually as more premium than the rest of the site.

Two shades, defined in `packages/ui/src/tokens.css`, same reasoning as primary/secondary blue:

- Gold `#C9A356` — 7.02:1 contrast on navy. Use on navy backgrounds, for icons, borders, and large
  text. Do not use on white/light backgrounds — it fails even the 3:1 non-text threshold there.
- Gold Deep `#8F6E1A` — 4.76:1 contrast on white. Use for small/normal text on white/light
  backgrounds. On navy it only reaches 3.50:1 — large text/icons only there, not small body text.

Before extending gold to any other page or system, confirm the scope with Joshua first — this is a
deliberate exception to a single-accent palette, not a general design-system expansion.

## 12.2 Layout

Use:

- generous whitespace
- clear hierarchy
- modular sections
- strong typography
- restrained use of borders
- clean cards
- consistent spacing
- intentional imagery

Avoid:

- crowded dashboards
- excessive gradients
- excessive glassmorphism
- unnecessary animation
- generic real estate template styling
- visual noise
- large blocks of centered body text

## 12.3 Components

Build reusable components for:

- navigation
- buttons
- cards
- metric cards
- property cards
- report cards
- charts
- tables
- form controls
- tooltips
- alerts
- modal dialogs
- drawers
- tabs
- accordions
- progress indicators
- file upload
- timeline
- activity feed
- dashboard widgets
- empty states
- loading states
- error states

Do not create page-specific duplicates when a shared component can be extended.

## 12.4 Motion

Motion should communicate state or hierarchy.

Use motion for:

- page transitions
- expanding details
- chart loading
- success confirmation
- dashboard updates
- step progression

Avoid decorative animation that slows users down.

Respect reduced-motion preferences.

---

# 13. Brand Voice

The brand voice should be:

- direct
- educational
- confident
- clear
- conversational
- practical
- trustworthy

Avoid:

- hype
- exaggerated promises
- generic luxury language
- aggressive sales language
- unnecessary jargon
- fear-based manipulation

Preferred positioning:

- "We educate first."
- "Make an educated decision with the information available."
- "Data over assumptions."
- "Build wealth through real estate."
- "Your property is an asset."

Use "primary bedroom," not "master bedroom."

Use Joshua Alvelo's voice as the foundation for consumer-facing copy: straightforward, human, and knowledgeable.

---

# 14. AI Behavior Rules

AI features must:

- use available structured data
- identify missing data
- separate facts from assumptions
- show calculations where relevant
- explain risk
- provide alternatives
- avoid certainty when uncertainty exists
- recommend next actions
- preserve user privacy
- record relevant AI outputs when authorized

AI responses should distinguish:

- verified property data
- estimated data
- user-entered assumptions
- external market data
- AI inference

AI must never fabricate:

- MLS data
- property values
- legal requirements
- loan terms
- rent amounts
- tax information
- insurance information
- inspection findings

When data is unavailable, say so clearly.

---

# 15. Legal and Compliance Principles

This platform supports real estate education and operations but does not replace licensed legal, tax, lending, insurance, appraisal, inspection, or accounting professionals.

All financial projections should include appropriate disclaimers.

Do not present estimates as guarantees.

Do not create discriminatory logic in:

- tenant screening
- property recommendations
- neighborhood analysis
- lead scoring
- AI outputs
- marketing automation

Housing-related features must be designed with Fair Housing compliance in mind.

Do not use protected-class data for ranking, targeting, recommendations, approval, or denial.

Legal documents and notices must be versioned by effective date.

Virginia property-management workflows must be capable of reflecting current law and brokerage policy.

---

# 16. Security and Privacy

Use least-privilege access.

Sensitive data may include:

- identity information
- financial documents
- bank records
- tax records
- lease documents
- owner records
- tenant records
- inspection records
- signatures
- payment information

Requirements:

- encryption in transit
- encryption at rest where supported
- role-based access control
- audit logging
- secure file storage
- signed URLs for private files
- secure session management
- input validation
- rate limiting
- secret management
- no secrets in source control
- no private data in client-side logs
- no sensitive values in analytics payloads

---

# 17. Automation Principles

Automation should reduce manual work without creating confusion.

Every important automated action should be:

- traceable
- logged
- retryable where practical
- idempotent where practical
- visible to authorized users
- reversible where appropriate

Examples:

- save completed analysis
- generate report
- update CRM
- create follow-up task
- tag high-intent lead
- notify Joshua
- schedule annual review
- send document reminders
- update portfolio metrics
- create maintenance reminder

Do not send communications automatically unless the workflow explicitly authorizes it.

---

# 18. Integration Principles

Expected integrations may include:

- MLS
- Propertyware
- BoldTrail
- Google Maps
- Google Places
- rental data providers
- mortgage data providers
- tax data providers
- insurance data providers
- school data providers
- Walk Score or similar
- accounting tools
- cloud storage
- email
- SMS
- payment processing
- AI providers

Integrations must be abstracted behind service layers.

Do not spread vendor-specific logic throughout the application.

Use adapters so providers can be replaced.

Handle:

- missing data
- stale data
- rate limits
- timeouts
- partial failure
- provider outages
- schema changes

---

# 19. Engineering Standards

## 19.1 General

Prefer:

- readable code
- small focused modules
- typed interfaces
- explicit error handling
- reusable services
- testable business logic
- documented assumptions

Avoid:

- hidden side effects
- duplicated calculations
- hard-coded business rules
- giant components
- vendor lock-in
- premature complexity
- silent failures

## 19.2 Financial Calculations

All financial formulas must exist in shared, tested modules.

Do not duplicate formulas across front end, back end, reports, and AI.

Calculations should return:

- result
- inputs
- assumptions
- warnings
- formula version
- timestamp

Use decimal-safe arithmetic for money.

Define rounding rules.

Test edge cases.

## 19.3 Types

Use strict typing.

Avoid broad `any` usage.

Create shared schemas for:

- API payloads
- database objects
- forms
- reports
- calculations
- AI tool inputs and outputs

## 19.4 Validation

Validate on both client and server.

Provide useful user-facing errors.

Do not rely on client validation for security.

## 19.5 Logging

Use structured logging.

Include correlation IDs for workflows.

Do not log sensitive documents or private financial data.

## 19.6 Testing

Include:

- unit tests for calculations
- integration tests for APIs
- permission tests
- validation tests
- report generation tests
- workflow tests
- end-to-end tests for critical user journeys

Critical calculations require deterministic test fixtures.

---

# 20. Performance Standards

Prioritize:

- fast initial load
- image optimization
- lazy loading
- code splitting
- caching
- efficient database queries
- pagination
- background processing for reports
- background processing for AI tasks
- responsive charts
- graceful loading states

Do not block the user interface while generating large reports or running long AI workflows.

---

# 21. Search Engine and Content Standards

Public pages should support:

- semantic metadata
- page titles
- descriptions
- canonical URLs
- open graph data
- structured data where appropriate
- clean heading hierarchy
- fast performance
- accessible content

Do not expose private dashboard content to search engines.

---

# 22. Project Structure Principles

Use a structure that separates:

- public website
- authenticated application
- shared components
- domain logic
- integrations
- data access
- background jobs
- AI services
- report generation
- documentation
- tests

Suggested documentation structure:

```text
/docs
├── CLAUDE.md
├── README.md
├── architecture/
├── website/
├── investor-suite/
├── property-management/
├── homeowner-portal/
├── concierge/
├── knowledge-center/
├── reports/
├── integrations/
└── design/
```

Application organization (locked, not merely suggested):

```text
/apps
├── web      — public website + authenticated consumer/client application
├── admin    — internal administration, property management, and team interface
└── worker   — background processing: jobs, reports, integrations, AI workflows, notifications, sync

/packages
├── ui             — design system, tokens, and shared components (CLAUDE.md §12)
├── domain         — core business entities and domain logic, framework-agnostic
├── calculations   — shared, tested financial formula modules (CLAUDE.md §19.2)
├── database       — Drizzle schema, migrations, and Postgres access (single source of truth)
├── auth           — Better Auth configuration, session/role helpers
├── integrations   — vendor adapters (MLS/IDX, CRM, mapping, email, SMS, payments, etc.)
├── ai             — the only package permitted to call an AI model provider
├── reports        — report generation engine (branding, templates, rendering)
├── config         — shared configuration, env schemas, feature flags
└── types          — shared Zod schemas and inferred TypeScript types (CLAUDE.md §19.3)
```

## 22.1 Selected Technology Stack

The technology stack is locked and documented in `docs/technology-stack.md`, with the decision record and rationale in `docs/adr-0001-initial-technology-stack.md`. Summary: TypeScript (strict) throughout; pnpm workspaces + Turborepo; Next.js 16.2 LTS (App Router) for `apps/web` and `apps/admin`; PostgreSQL with Drizzle ORM; Better Auth for authentication (authorization still follows this platform's own permissions specifications, never the auth library's role model alone); Zod for validation; Tailwind CSS with shadcn/ui as an accessible foundation (not the design system itself); a real persistent Node.js/TypeScript process for `apps/worker`; S3-compatible object storage behind a storage adapter; AI provider access only through `packages/ai`; external vendor access only through `packages/integrations`; Vitest and Playwright for testing; Vercel for web hosting with an independently hosted worker process.

Any change to this stack requires a new ADR entry and an update to `docs/technology-stack.md` — not a silent substitution during implementation.

---

# 23. Documentation Rules

Every major feature should have documentation covering:

- purpose
- users
- permissions
- inputs
- outputs
- data dependencies
- states
- edge cases
- analytics
- automation
- acceptance criteria

Update documentation when behavior changes.

Do not leave architecture decisions only in code comments or chat history.

---

# 24. Development Workflow

Before implementing a feature:

1. Identify the user and business purpose.
2. Identify the relevant domain entities.
3. Identify permissions.
4. Identify data sources.
5. Identify calculations.
6. Identify empty, loading, success, and error states.
7. Identify automation and notifications.
8. Identify analytics.
9. Identify tests.
10. Confirm the feature fits WealthOS™ architecture.

During implementation:

- reuse shared components
- reuse shared formulas
- follow design tokens
- preserve accessibility
- write tests
- document decisions

After implementation:

- test desktop and mobile
- test permissions
- test failure states
- test calculation accuracy
- test report output
- update documentation
- verify no sensitive data is exposed

---

# 25. Definition of Done

A feature is not complete until:

- the user flow works
- mobile works
- permissions work
- validation works
- errors are handled
- accessibility is reviewed
- analytics are included where required
- tests pass
- documentation is updated
- loading and empty states exist
- business logic is not duplicated
- security implications are addressed
- the result matches brand and design standards

---

# 26. Product Decision Rules

When deciding whether to add a feature, ask:

1. Does it educate the user?
2. Does it reduce friction?
3. Does it use shared data?
4. Does it strengthen the client-for-life relationship?
5. Does it help users build, protect, manage, or understand wealth?
6. Does it belong inside an existing system?
7. Can it be built without duplicating another feature?
8. Can the result be explained clearly?
9. Can it be maintained?
10. Does it respect privacy, Fair Housing, and professional boundaries?

Do not add features only because competitors have them.

---

# 27. Development Priorities

Priority order:

1. Stable shared architecture
2. Core public website
3. Authentication and user profiles
4. Shared property model
5. Investor analysis tools
6. Reports
7. Investor dashboard
8. Homeowner Portal™
9. Property Wealth Management™ workflows
10. Concierge workflows
11. Knowledge Center™ expansion
12. AI intelligence
13. advanced integrations
14. mobile application
15. white-label or national expansion

---

# 28. Roadmap Guardrails

Future possibilities include:

- MLS auto-import
- AI underwriting
- property scanner
- photo-based rehab estimation
- voice AI
- market forecasting
- tax optimization
- cost segregation tools
- depreciation tools
- opportunity-zone analysis
- syndication tools
- private lending tools
- portfolio benchmarking
- investor community
- mobile app
- public API
- white-label platform

Do not let future roadmap items destabilize the core architecture.

Build extension points, not speculative complexity.

---

# 29. Final Instruction to Claude Code

Build one connected platform.

Do not build disconnected pages, calculators, reports, dashboards, or AI tools.

Every feature should:

- use shared data
- preserve user context
- reinforce the Innovative Twist brand
- educate the user
- explain its results
- support future growth
- protect sensitive information
- create a clear next step

When uncertain, choose the implementation that is:

- simpler
- clearer
- more reusable
- easier to explain
- easier to maintain
- safer for the user
- more consistent with Education First and Client for Life
