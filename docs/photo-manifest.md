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
| 2 | Meet Joshua | Joshua — video/story thumbnail | 1600×900px | 16:9 | See "Hero photo" discussion below — related to this same image need |
| 3–10 | Opportunity Center (8 cards) | Buy, Sell, Rent, Landlord, Investor, New Construction, Military, 55+ Living | 800×800px each | 1:1 (square) | See AI-photos discussion below |
| 11 | Search Properties | Virginia Beach oceanfront | 2400×600px | ~4:1 (wide banner) | Background behind the search bar band |
| 12 | Built in the 757 | Cover art / magazine cover | 1600×900px | 16:9 | |
| 13–15 | Client Testimonials (3 cards) | Client story video thumbnails | 800×800px each | 1:1 (square) | Placeholders until real client video/testimonials exist |

## Revision History

| Date | Summary |
|---|---|
| 2026-07-28 | Initial manifest — homepage placeholders. |
