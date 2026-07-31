# Dependencies

Relies on:
- CLAUDE.md
- canonical-reference.md
- naming-conventions-v2.md
- website-standards.md

# Canonical References

Validated against `canonical-reference.md`. No new canonical values (roles, statuses, lead types, inspection types, report names) are introduced.

# Navigation Architecture

Version: 1.0

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
4. Services
5. Resources
6. About
7. Contact

No other items may be added to this row. If a new top-level need arises, it goes inside an existing mega menu first; only add an 8th primary item as a last resort and only by revising this document deliberately.

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

### Services
- Property Management
- Rentals
- Investors
- Homeowner Services
- Commercial *(future placeholder — shown, not yet linked)*

### Resources
- Learning Center
- Blog
- Guides & Downloads
- Calculators
- FAQ
- Market Reports

### About
- Joshua Alvelo
- Meet the Team
- Built in the 757
- Testimonials
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
- Sticky navigation
- Transparent over the hero section; solid white background after scrolling
- Smooth hover transitions (respect `prefers-reduced-motion`, per CLAUDE.md 11.5/12.4)
- Large mega menus, single level, no nested fly-outs

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
| Property Wealth Management™ | Services → Property Management |
| Rentals | Services → Rentals |
| Build Wealth | Services → Investors |
| Concierge Services | Sell → Concierge Services |
| Knowledge Center™ | Resources → Learning Center |
| Communities | Buy → Communities |
| Built in the 757™ | About → Built in the 757 |
| Resources | Resources mega menu (expanded) |
| About | About mega menu |
| Contact | Contact (unchanged) |

## Revision History

| Version | Date | Summary |
|---|---|---|
| 1.0 | 2026-07-30 | Initial navigation architecture — supersedes the flat 12-item nav from 2026-07-28. |
