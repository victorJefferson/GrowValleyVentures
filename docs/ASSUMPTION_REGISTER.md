# AFAQ Partners — Assumption Register

Track A implementation (`cursor/afaq-partners-cms-2208`). Review and sign off post-preview.

## Brand and legal

| Assumption | Value |
|------------|-------|
| Brand name | **AFAQ Partners** (full rebrand from GrowValley) |
| Logo | Interim: existing green logo asset until AFAQ logo supplied |
| Legal entity (Terms) | AFAQ Partners LLC, Dubai |
| Primary email | `reach@afaqpartners.com` |

## Statistics

| Location | Values used |
|----------|-------------|
| Home / About hero | $5B+ Transactions, $2B+ Capital, $350M AUM, 500+ Projects |
| About hero (2nd label) | $2B+ **Mandates** on About-only hero seed |
| Home footer stats bar | $150M+ AUM, $3B+ Revenue Generated, $1B+ Capital Funded |
| Service sub-pages | Per-page numbers from client spec (not normalized) |

## Navigation and URLs

| Item | Choice |
|------|--------|
| Nav label | Expertise |
| Footer / breadcrumbs | Our Capabilities |
| URL prefix | `/our-capabilities/*` (unchanged) |
| Header CTA | Talk to an Advisor → `/contact` |
| Redirects | `/contact-us` → `/contact`, `/platform` → `/digital`, `/careers` → `/join-us/jobs` |

## People

| Issue | Resolution |
|-------|------------|
| Priya Menon vs Priya Shah | **Priya Menon** everywhere |
| Sofia vs Sofía | **Sofia Alvarez** (no accent) |
| Amelia Brooks | Succession principal only; not on Team page |
| Leadership order | William J. Daly → Jazeer Jamal → Suhail Ismail |
| Titles | CIO & Partner / CEO & Partner / CXO & Partner |

## CMS and deployment

| Item | Choice |
|------|--------|
| Sanity dataset (preview) | **`stage`** |
| Production dataset | Untouched until merge + explicit seed |
| Workflow | `sanity dataset copy production stage` then `npm run seed:sanity` |
| Insights / case studies | Feature flags **enabled** |

## Service sitemap

- All **15** existing sub-service routes retained
- `/private-equity` = combined PE+VC copy (spec 3.1)
- `/venture-capital` = standalone VC copy (spec 3.3)
- Philanthropy, Social Impact, Collectibles = live (overview copy from Family Office section)
- Wills / Trusts / Cross-Border = bullets on parent Succession page only

## Open items — client input still needed

- [ ] AFAQ logo and favicon files
- [ ] Calendly URL for Get Started page embed
- [ ] Press release PDFs and archive content
- [ ] WhatsApp number for media/contact
- [ ] Privacy Policy legal placeholders (`[DATE]`, retention periods, analytics tool name)
- [ ] Confirm Priya Menon vs Shah if different people
- [ ] Principal headshots for updated bios

## Optional follow-up questionnaire

See plan document sections Q1–25 for full client clarification list. Only the open items above block polish/compliance; preview QA can proceed without them.
