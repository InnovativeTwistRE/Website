# Photo Manifest

Version: 1.0 (living document — updated as each page is built)

## Purpose

Running list of every real photo/image asset a built page needs, with recommended size and where it goes. Requested 2026-07-28 so photos can be sourced/shot in parallel with development instead of reconstructed from memory at the end. Each entry stays a placeholder (see `packages/ui/src/PlaceholderImage.tsx`) until the real file lands at the given path.

## How to deliver a file

Save it at the exact path listed below (create folders as needed under `apps/web/public/`), any reasonable filename — I'll wire the exact reference in code once it exists. JPG for photos, PNG for anything needing transparency.

## Homepage (`apps/web/app/page.tsx`) — built 2026-07-28

| # | Section | What it is | Recommended size | Aspect | Notes |
|---|---|---|---|---|---|
| 1 | Hero | Hampton Roads skyline at dusk, with Joshua | 2400×1029px | 21:9 (wide) | Full-bleed background behind the headline; needs enough negative space on the left third for text to stay readable |
| 2 | Meet Joshua | Joshua — video/story thumbnail | 1600×900px | 16:9 | Can be a still photo or a real video thumbnail |
| 3 | Opportunity Center — Buy | Home exterior | 800×800px | 1:1 (square) | |
| 4 | Opportunity Center — Sell | Staged interior | 800×800px | 1:1 (square) | |
| 5 | Opportunity Center — Rent | Home exterior | 800×800px | 1:1 (square) | |
| 6 | Opportunity Center — Landlord | Property exterior | 800×800px | 1:1 (square) | |
| 7 | Opportunity Center — Investor | Property exterior | 800×800px | 1:1 (square) | |
| 8 | Opportunity Center — New Construction | Home under construction | 800×800px | 1:1 (square) | |
| 9 | Opportunity Center — Military | Military family | 800×800px | 1:1 (square) | |
| 10 | Opportunity Center — 55+ Living | 55+ community | 800×800px | 1:1 (square) | |
| 11 | Search Properties | Virginia Beach oceanfront | 2400×600px | ~4:1 (wide banner) | Background behind the search bar band; renders dim/muted so text stays readable, doesn't need to be a bright/busy shot |
| 12 | Built in the 757 | Cover art / magazine cover | 1600×900px | 16:9 | |
| 13 | Client Testimonial 1 | Client story video thumbnail | 800×800px | 1:1 (square) | |
| 14 | Client Testimonial 2 | Client story video thumbnail | 800×800px | 1:1 (square) | |
| 15 | Client Testimonial 3 | Client story video thumbnail | 800×800px | 1:1 (square) | |

## Buy page (`apps/web/app/buy/page.tsx`) — built 2026-07-30

| # | Section | What it is | Recommended size | Aspect | Notes |
|---|---|---|---|---|---|
| 16 | Hero | Joshua handing over keys to a family in their new home | 2400×1150px | 21:9 (wide) | Same treatment as the homepage hero |
| 17 | Why Buyers Choose Us — Education | Client consultation, reviewing options together | 800×800px | 1:1 (square) | |
| 18 | Why Buyers Choose Us — Negotiation | Handshake, offer accepted | 800×800px | 1:1 (square) | |
| 19 | Why Buyers Choose Us — Relationships | Family moving into new home | 800×800px | 1:1 (square) | |
| 20 | Featured Communities — Virginia Beach | Skyline or streetscape | 900×1200px | 3:4 (portrait) | |
| 21 | Featured Communities — Chesapeake | Skyline or streetscape | 900×1200px | 3:4 (portrait) | |
| 22 | Featured Communities — Norfolk | Skyline or streetscape | 900×1200px | 3:4 (portrait) | |
| 23 | Featured Communities — Suffolk | Skyline or streetscape | 900×1200px | 3:4 (portrait) | |
| 24 | Trusted Partners — Mortgage & Lending | Partner company logo | 600×300px | ~2:1 (wide) | **Needs the actual company name too, not just a logo file** — this is a real vendor relationship (confirmed 2026-07-30), not a placeholder concept |
| 25 | Trusted Partners — Closing Attorney / Title | Partner company logo | 600×300px | ~2:1 (wide) | Same — real name + logo needed |
| 26 | Trusted Partners — Home Inspections | Partner company logo | 600×300px | ~2:1 (wide) | Same — real name + logo needed |
| 27–29 | Success Stories (×3) | Client story video thumbnails | 800×800px each | 1:1 (square) | Confirmed placeholder for now (2026-07-30) — real testimonials come later |
| 30 | Final CTA | Joshua handing keys to buyers outside their new home | 2400×900px | ~8:3 (wide banner) | |

## About page (`apps/web/app/about/page.tsx`) — built 2026-07-30

| # | Section | What it is | Recommended size | Aspect | Notes |
|---|---|---|---|---|---|
| 31 | Hero | Joshua on the waterfront boardwalk at dusk | 2400×1150px | 21:9 (wide) | |
| 32 | Meet Joshua | Portrait — Joshua in office, blazer + cap | 1200×1600px | 3:4 (portrait) | |
| 33 | Marketing showcase | For Sale sign, IT branded | 800×800px | 1:1 (square) | |
| 34 | Marketing showcase | Built in the 757 — cover art | 800×800px | 1:1 (square) | Can reuse #12 |
| 35 | Marketing showcase | Drone / camera equipment in use | 800×800px | 1:1 (square) | |
| 36 | Marketing showcase | Tablet with IT branding | 800×800px | 1:1 (square) | |
| 37 | Numbers That Matter | Hampton Roads skyline | 1600×900px | 16:9 | |
| 38–43 | Beyond Real Estate (×6) | Husband, Father, Navy Veteran, Business Owner, Content Creator, Community Advocate | 800×800px each | 1:1 (square) | Personal photos |
| 44 | Built in the 757 | Latest episode — podcast player | 800×800px | 1:1 (square) | |
| 45 | Built in the 757 | Magazine cover | 800×800px | 1:1 (square) | Can reuse #12/#34 |
| 46 | Built in the 757 | Joshua recording — behind the scenes | 800×800px | 1:1 (square) | |
| 47 | Built in the 757 | Hampton Roads aerial | 800×800px | 1:1 (square) | |
| 48 | Community | Hampton Roads coastline aerial | 1600×900px | 16:9 | |
| 49–51 | What Clients Are Saying (×3) | Client story video thumbnails | 800×800px each | 1:1 (square) | Placeholder — real testimonials come later |
| 52 | Final CTA | Joshua with a family, casual conversation | 2400×900px | ~8:3 (wide banner) | |

Trusted-partner logos for this page reuse the same real companies as the Buy page's Trusted Partners section (#24–26) — see that entry for the logo-file request. This page currently shows the names as plain text, no logo graphics yet.

## Sell page (`apps/web/app/sell/page.tsx`) — built 2026-07-31

| # | Section | What it is | Recommended size | Aspect | Notes |
|---|---|---|---|---|---|
| 53 | Hero | Joshua greeting sellers outside their home at twilight | 2400×1150px | 21:9 (wide) | Same treatment as the Buy/homepage hero |
| 54 | Marketing Campaigns | Professional photography — twilight exterior | 1200×675px | 16:9 | |
| 55 | Marketing Campaigns | Drone photography — aerial property view | 1200×675px | 16:9 | |
| 56 | Marketing Campaigns | Twilight photography — dusk exterior | 1200×675px | 16:9 | |
| 57 | Marketing Campaigns | Social media campaigns — device mockups | 1200×675px | 16:9 | |
| 58 | Marketing Campaigns | Print marketing — brochure and postcard | 1200×675px | 16:9 | |
| 59 | Marketing Campaigns | Magazine feature — Built in the 757 | 1200×675px | 16:9 | Can reuse #12/#34/#45 |
| 60 | Marketing Campaigns | Open house experience — welcoming guests | 2400×675px | ~4:1 (wide) | Full-width bottom tile in the grid |
| 61 | Know Your Home's Value | Home value report preview — UI mockup, not a real property's data | 1200×675px | 16:9 | Deliberately not built with a hardcoded fake address/price — see revision note below |
| 62 | Client Success Stories | Client story — video testimonial | 1200×675px | 16:9 | Placeholder — real testimonials come later, same as #49–51 |
| 63 | Final CTA | Joshua with sellers celebrating outside their home | 2400×900px | ~8:3 (wide banner) | |

## Revision History

| Date | Summary |
|---|---|
| 2026-07-28 | Initial manifest — homepage placeholders. |
| 2026-07-29 | Reverted a brief stock-photo experiment (#3–11) back to placeholders — no functional change to this manifest, sizes unchanged. |
| 2026-07-30 | Added Buy page placeholders (#16–30). Items #24–26 need real partner names in addition to logo files — confirmed real vendor relationships (mortgage, closing attorneys, inspections), not placeholder concepts like the rest of this list. |
| 2026-07-30 | Added About page placeholders (#31–52). |
| 2026-07-31 | Added Sell page placeholders (#53–63). The reference mockup for this page showed a "Home Value Report" widget with a specific fake address and dollar figures, and four "SOLD" cards with specific fake addresses, sale prices, and days-on-market — neither was reproduced with those specifics. Presenting fabricated transaction results as real is a compliance risk for a licensed brokerage, not just a content-accuracy one. The value-report slot (#61) is a UI placeholder instead of a hardcoded example, and the sold-listings section is an honest empty state pending real MLS/CRM data, same pattern as the Buy page's Featured Homes section. |
