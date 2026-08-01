# Dependencies

Relies on:
- CLAUDE.md
- canonical-reference.md
- naming-conventions-v2.md
- website-standards.md

# Canonical References

Validated against `canonical-reference.md`. No new canonical values (roles, statuses, lead types, inspection types, report names) are introduced.

# Navigation Architecture

Version: 1.2

## Purpose

Canonical navigation structure for the public website, replacing the 12-item flat nav built 2026-07-28. That nav wrapped to two rows and didn't hold up against premium real estate brand comparables (Compass, SERHANT., Sotheby's, The Oppenheim Group). Superseded 2026-07-30 by explicit product direction: a maximum of 7 primary items, single row, mega menus instead of long dropdown lists.

## Guiding Principle

The navigation answers one question immediately: **"What can Joshua help me with?"** Everything else is discoverable through mega menus, landing pages, search, or contextual links — not by adding more top-level items.

Navigation is organized around customer journeys (buy, sell, invest, rent, learn), not internal business/department structure. Every nav choice should help a visitor accomplish a goal in the fewest possible clicks, without exposing internal org structure where it doesn't improve the visitor's experience.

## Design Goals

- Single-row desktop navigation, no wrapping
- Maximum of 7 primary navigation items
- Clean white space, premium appearance, fast to scan
- Easy to expand as the business grows — new services go inside existing mega menus, not as new top-level items
- Comparable in feel to O Group, Compass, SERHANT., Sotheby's

## Primary Navigation (exactly 7 items)

1. Home
2. Buy
3. Sell
4. Rent
5. Manage & Invest
6. About
7. Contact

No other items may be added to this row. If a new top-level need arises, it goes inside an existing mega menu first; only add an 8th primary item as a last resort and only by revising this document deliberately.

**Changed 2026-07-31** (v1.2) — see Revision History for the full rationale: Rentals was promoted from a sub-item of "Services" to its own top-level mega menu ("Rent"), matching Buy/Sell as a true peer rather than a nested service. "Services" was renamed "Manage & Invest" to actually name what it contains (Property Management, Investors) instead of a generic label. To hold the 7-item ceiling, the standalone "Resources" mega menu was folded into "About" as a single item — audience-specific resources (Buyer/Seller/Renter Resources) already live inside their own mega menus, so the general resource hub didn't need its own top-level slot.

## Mega Menus

Desktop: large panels, not long dropdown lists. No nested fly-out menus (one level only). Icons optional.

### Buy
- Home Buying
- Search Homes (IDX)
- Communities
- Mortgage & Financing
- Buyer Resources
- Featured Listings

### Sell
- Selling Process
- Home Valuation
- Marketing Strategy
- Concierge Services
- Seller Resources
- Success Stories

### Rent
- Search Rentals
- Leasing Process
- Pet-Friendly Homes
- Renter Resources
- Homeownership Path
- Resident Portal

### Manage & Invest
- Property Management
- Investors
- Homeowner Services
- Commercial *(future placeholder — shown, not yet linked)*

### About
- Joshua Alvelo
- Meet the Team
- Built in the 757
- Testimonials
- Resources *(links to the general Learning Center/Blog/Guides/Calculators/FAQ/Market Reports hub — those live as sections on that page, not as separate top-level nav items)*
- Careers *(future placeholder — shown, not yet linked)*

### Contact (single page, no mega menu)
Contains: office information, contact form, map, schedule-consultation CTA, social links.

## Utility Navigation

Never appears in the primary navigation. Lives in a utility bar or as header buttons instead:

- Owner Portal
- Tenant Portal
- Client Login
- Agent Login *(future)*
- Search MLS *(optional, not yet built — no MLS integration exists per docs/api-integrations.md)*

## Information Architecture Rules

Not every page belongs in the primary navigation. Many pages exist only as SEO/campaign landing pages, reachable through mega menus, internal links, search, or calls to action — never as top-level nav items. Examples: First-Time Home Buyer, VA Loan Guide, Waterfront Homes, Golf Course Homes, 55+ Communities, Home Valuation, Property Management Pricing, Rental Application, Tenant Resources.

## UX Requirements

### Desktop
- Sticky navigation, solid white background at all times (no transparent-over-hero — that variant was built 2026-07-30 and dropped the same day; it only reads well over a real dark hero photo, and needs special-casing on every page that lacks a full-bleed hero, so a consistent solid header won out)
- Mega menus appear only on hover/focus of their primary item and close when the cursor leaves the header — not visible by default, not "sticky open"
- Smooth hover transitions (respect `prefers-reduced-motion`, per CLAUDE.md 11.5/12.4)
- Large mega menus, single level, no nested fly-outs, rendered as an overlay that does not push page content down

### Mobile
- Full-screen slide-out menu
- Expand/collapse sections (accordion, matches desktop mega menu groupings)
- Large touch targets
- Sticky call button
- Sticky "Schedule Consultation" button

## Future Expansion

New services are added inside existing mega menus, not as new primary items, so the 7-item ceiling holds as the business grows.

## Relationship to the Previous Nav (2026-07-28)

The prior 12-item flat nav (`CLAUDE.md` §7's original list) mapped page-for-page into this structure — no pages were dropped, only reorganized:

| Old flat nav item | New location |
|---|---|
| Buyers | Buy mega menu |
| Sellers | Sell mega menu |
| Property Wealth Management™ | Manage & Invest → Property Management |
| Rentals | Rent mega menu (own top-level item as of v1.2) |
| Build Wealth | Manage & Invest → Investors |
| Concierge Services | Sell → Concierge Services |
| Knowledge Center™ | About → Resources |
| Communities | Buy → Communities |
| Built in the 757™ | About → Built in the 757 |
| Resources | About → Resources (folded in as of v1.2) |
| About | About mega menu |
| Contact | Contact (unchanged) |

## Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0 | 2026-07-30 | Initial navigation architecture — supersedes the flat 12-item nav from 2026-07-28. |
| 1.1 | 2026-07-30 | Dropped transparent-over-hero — header is solid white at all times. Fixed a real bug in the first build where the mega menu could stay visibly open far longer than intended (it was rendered in normal document flow and its hover-close boundary was too broad); it's now an absolutely-positioned overlay tied to the nav row only. |
| 1.2 | 2026-07-31 | Joshua flagged that Rentals, Property Management, and Investors weren't getting the visibility Buy/Sell get, despite being major platform pillars (PropertyOS™/InvestorOS™). Promoted Rentals to its own top-level "Rent" mega menu (peer to Buy/Sell). Renamed "Services" to "Manage & Invest" so the label actually names what it contains, and reordered so Property Management leads it. To hold the 7-item ceiling, the standalone "Resources" mega menu was folded into "About" as a single item — Buy/Sell/Rent already carry their own audience-specific resource links, so the general hub page didn't need a dedicated top-level slot. |
