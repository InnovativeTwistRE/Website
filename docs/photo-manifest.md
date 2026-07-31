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

## Revision History

| Date | Summary |
|---|---|
| 2026-07-28 | Initial manifest — homepage placeholders. |
| 2026-07-29 | Reverted a brief stock-photo experiment (#3–11) back to placeholders — no functional change to this manifest, sizes unchanged. |
| 2026-07-30 | Added Buy page placeholders (#16–30). Items #24–26 need real partner names in addition to logo files — confirmed real vendor relationships (mortgage, closing attorneys, inspections), not placeholder concepts like the rest of this list. |
