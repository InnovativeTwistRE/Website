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

## Revision History

| Date | Summary |
|---|---|
| 2026-07-28 | Initial manifest — homepage placeholders. |
| 2026-07-29 | Reverted a brief stock-photo experiment (#3–11) back to placeholders — no functional change to this manifest, sizes unchanged. |
