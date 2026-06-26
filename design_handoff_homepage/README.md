# Handoff: Your Mali Guides — Homepage Redesign

## Overview
A redesigned marketing homepage for **yourmaliguides.com**, the private-guiding service of **Djibril Kassogue**, an official local guide in Mali and West Africa. The page sells a single, trust-driven action: **message Djibril on WhatsApp** to plan a realistic, safety-aware private trip. The design goals were: build credibility, feel premium and editorial, and drive WhatsApp contacts.

The visual language follows the **"50 Difficult Places" design system** — warm, National-Geographic-meets-printed-field-guide: cream canvas, Playfair Display headlines, a single terracotta (clay) accent, hairline borders, soft warm-tinted shadows, and full-bleed atmospheric photography.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, layout, copy, and interactions. **They are not production code to copy directly.**

`Your Mali Guides - Home.dc.html` is authored as a "Design Component" (a streaming HTML prototype format) — it is for **reference only**. Do **not** try to run it or lift its markup wholesale; the `{{ }}` holes, `<helmet>`, `<sc-for>`, and `<x-import>` tags are prototype-runtime constructs, not real HTML.

Your task is to **recreate this design in the target codebase's environment** (the live site is **WordPress**; if rebuilding, use whatever stack the team prefers — a static site, Astro, Next.js, or a WordPress theme/blocks). Use that environment's established patterns, components, and templating. Where no environment exists yet, pick the most appropriate framework and implement there.

The data on the page (routes, FAQs, reasons, gallery, etc.) is defined as plain arrays in the prototype's logic section — treat those as the content model to reproduce as a CMS structure, JSON, or template loops.

## Fidelity
**High-fidelity (hifi).** This is a pixel-level mockup with final colors, typography, spacing, copy, and interaction behavior. Recreate the UI faithfully using the exact tokens in `design-tokens.css`. The only intentionally-open items:
- Route-card images currently point at the **live site's** existing labelled photos (Bamako, Djenné, Dogon, Timbuktu, West Africa route) via absolute `https://yourmaliguides.com/images/...webp` URLs. Keep using the real labelled photos for those named places.
- All other photography uses the client's supplied tour photos, included in `images/`.
- The About section uses the existing `djibril-kassogue-portrait.webp` from the live site — confirm/replace with a current portrait.

## Page Structure (top to bottom)

The page is a single scrolling column. Centered content, `max-width: 1200px` (`--content-max`), side gutter `clamp(1rem, 4vw, 3rem)` (`--gutter`). Background is cream `#fdfaf3` throughout except two dark bands (planning steps, footer) and the final CTA.

### 1. Header (floating, transparent over hero)
- `position: absolute; top:0; left:0; right:0; z-index:30` — floats over the hero image.
- Inner row: `max-width:1200px`, padding `18px gutter 0`, `display:flex; align-items:center; justify-content:space-between`.
- **Left:** logo lockup — a 38×38 clay (`#b85832`) rounded square (`border-radius:10px`, 1px `rgba(255,255,255,0.25)` border) with "YMG" in Inter 800/13px cream, then wordmark "Your Mali Guides" in Playfair 600/19px cream.
- **Right nav:** Inter 500/14px links at `rgba(244,239,228,0.82)` (About Djibril, Mali Tours, West Africa, Photos, Reviews), gap 26px; hover → full cream. Then a clay WhatsApp button (Inter 600/13.5px, cream text, `padding:10px 17px`, `border-radius:10px`, inline WhatsApp glyph SVG).

### 2. Hero
- `position:relative; min-height:94vh; display:flex; align-items:flex-end`.
- **Background:** full-bleed `<img>` (`images/masquerade-dancers.jpg` — a village gathering with masquerade figures), `object-fit:cover; object-position:center 40%`. Two stacked overlays: the system hero gradient `--overlay-hero` (transparent → ink 0.86 bottom-up) plus a left-darkening gradient `linear-gradient(96deg, rgba(21,32,29,0.66) 0%, rgba(21,32,29,0.24) 46%, rgba(21,32,29,0) 80%)` for text legibility.
- **Content** (max-width 780px, padding `128px gutter 104px`):
  - Eyebrow: Inter 800, UPPERCASE, `letter-spacing:0.18em`, 12.5px, gold `#c49a3a` — "Mali · West Africa · Private guiding".
  - H1: Playfair 600, `letter-spacing:-0.025em`, `line-height:0.99`, `font-size:clamp(2.9rem,6vw,5.4rem)`, cream, `text-wrap:balance` — **"Travel the real Mali and West Africa, with someone who lives it"**.
  - Lead paragraph: Source Serif 4, `clamp(1.1rem,1.5vw,1.32rem)`, `line-height:1.6`, `rgba(244,239,228,0.92)`, max-width 630px. "Djibril Kassogue" bolded in cream.
  - Buttons row (gap 14px): primary clay WhatsApp button (Inter 600/15px, `padding:15px 26px`, `border-radius:10px`, `--shadow-raised`) + secondary ghost button ("See Mali tour ideas →", translucent cream fill, 1px `rgba(244,239,228,0.35)` border, `backdrop-filter:blur(4px)`).
  - Trust chips row: 5 pills (`Official registered guide`, `Real local knowledge`, `Custom private trips`, `References available`, `Safety-aware planning`) — Inter 500/12.5px, translucent cream fill, 1px `rgba(244,239,228,0.28)` border, `border-radius:999px`, each with a 5px gold dot.

### 3. Floating "First message" panel
- A white card that **rises over the hero's bottom edge**: `margin-top:-72px; position:relative; z-index:10`. `background:#fff; border:1px solid var(--sand); border-radius:18px; box-shadow:--shadow-hero-card; padding:clamp(28px,4vw,44px)`.
- Two-column grid (`1fr 1.05fr`, gap `clamp(28px,4vw,56px)`, `align-items:center`):
  - **Left:** rust eyebrow "Your first message", Playfair H2 ("You do not need a finished itinerary"), Source Serif body, clay WhatsApp button.
  - **Right:** a tinted inset (`--tag-bg`, 1px sand, `border-radius:14px`, padding `26px 28px`) titled "WHAT TO SEND" with an 8-item checklist in a 2-col grid, each a forest check-icon + label: Your travel dates · Number of travellers · Arrival city · Places you hope to visit · Preferred language · Budget level · Travel pace · Any safety concerns.

### 4. Featured routes
- Section padding `clamp(64px,8vw,104px) 0`. Header block sits under a 1px sand top-rule: rust eyebrow "Featured routes", Playfair H2 "Private Mali trips, planned around real conditions", Source Serif intro (muted), max-width 60ch.
- **3-column card grid** (gap 24px) of 6 route cards. Each card: `background:#fff; border:1px solid sand; border-radius:16px; box-shadow:--shadow-card; overflow:hidden; flex column`.
  - **Image:** `aspect-ratio:3/2`, `object-fit:cover`, hover-zooms to `scale(1.06)` over 400ms; top overlay `--overlay-image-top`. A **feasibility badge** pill top-left (Inter 600/11.5px, cream text, `backdrop-filter:blur(3px)`) colored by status: forest `rgba(31,76,59,0.85)` (open), gold `rgba(196,154,58,0.9)` (conditions permitting), clay `rgba(184,88,50,0.9)` (feasibility checked first).
  - **Body:** Playfair 600/1.4rem title; "Best for …" line (clay-text label + body); muted note; footer row above a 1px sand rule with a clay "Ask on WhatsApp" link (+ glyph) and a muted "Route idea →" link.
  - Card hover: lifts `translateY(-3px)`, shadow → `--shadow-raised`, border warms toward clay.
  - The 6 routes: Bamako City and Culture · Djenné and Mopti · Dogon Country · Timbuktu and Desert Routes · Mali and Burkina Faso · West Africa Custom Route.

### 5. Why travel with Djibril
- White band (`#fff`) with sand top/bottom borders. Rust eyebrow + Playfair H2 "Trust, context, and real help from the ground".
- **3-column grid of 6 cells** built as a 1px-sand hairline-divided grid (cells `#fff`, gap is the 1px sand background showing through, wrapped in `border-radius:16px; overflow:hidden`). Each cell: a 46px tinted circle (`rgba(31,76,59,0.08)`) holding a forest stroke icon, Playfair 600/1.3rem title, Source Serif muted body. Items: Official local guide · Real local knowledge · Safer logistics · Fairer prices · Custom itineraries · West Africa experience.

### 6. About / Meet your guide
- Cream band. Two-column grid (`0.9fr 1.1fr`, gap `clamp(36px,5vw,72px)`, centered).
  - **Left:** portrait in a `4/5` framed plate (`border-radius:16px`, 1px sand, `--shadow-raised`). A small white **credential badge** floats at bottom-right (`--shadow-hero-card`): clay shield-check icon + "Official registered / local guide, Mali".
  - **Right:** rust eyebrow "Meet your guide", Playfair H2 "Djibril Kassogue", two Source Serif paragraphs (1.16rem, line-height 1.7), then 4 tag pills (Speaks local languages · Trusted local contacts · Years of guiding · West Africa network) in `--tag-bg` with clay-text.

### 7. How planning works (dark band)
- `background: var(--ink)`. A faint background photo (`images/plantation-walk.jpg`) at `opacity:0.14`.
- Gold eyebrow "How planning works", Playfair H2 cream "Three simple steps to a custom trip".
- **3-column grid** of numbered steps; each has a 2px gold top-rule (`rgba(196,154,58,0.55)`), a giant Playfair gold numeral (3rem), and a Source Serif description at `rgba(244,239,228,0.92)`.

### 8. Photo story
- Cream band. Header row: rust eyebrow "Photo story" + Playfair H2 + muted intro on the left, "View full gallery →" link (clay-text) on the right.
- **4-column CSS grid mosaic**, `grid-auto-rows:200px`, gap 14px. 6 images with explicit `grid-column`/`grid-row` spans (one 2×2 feature tile, two tall 1×2 tiles, three single tiles). Each tile: `border-radius:12px; overflow:hidden; 1px sand`; image hover-zooms to `scale(1.07)` over 400ms.

### 9. Safety-aware planning
- White band, sand top border. Two-column grid (`1fr 1fr`).
  - **Left:** rust eyebrow, Playfair H2 "Safety and feasibility come first", Source Serif body, clay WhatsApp button ("Ask what is realistic for your dates").
  - **Right:** tinted panel (`--tag-bg`, 1px sand, `border-radius:14px`) titled "HOW ROUTES ARE JUDGED" with 4 rows, each a 34px tinted circle + forest check icon + title/body: Current local advice · Routes assessed case by case · Transport and timing checked · Alternative plans when needed.

### 10. Final CTA
- Full-bleed photo (`images/village-ceremony.jpg`, `object-position:center 30%`) under a flat dark overlay `linear-gradient(180deg, rgba(21,32,29,0.78), rgba(21,32,29,0.7))`. Centered content, max-width 760px, padding `clamp(72px,9vw,120px) gutter`.
- Gold eyebrow "Plan with a local guide", Playfair display H2 cream `clamp(2.2rem,4.5vw,3.6rem)` "Plan a realistic private trip in Mali", Source Serif lead, large clay WhatsApp button (Inter 600/16px, `padding:16px 30px`, `--shadow-raised`), and a small caption line "Dates · Group size · Places of interest · Preferred language · Travel pace".

### 11. Footer
- `background: var(--ink)`, padding `clamp(56px,7vw,80px) 0 40px`.
- Three columns (`1.6fr 1fr 1.2fr`, gap 48px) over a `rgba(244,239,228,0.14)` bottom rule:
  - **Brand:** YMG lockup + Playfair wordmark (cream), description paragraph at `rgba(244,239,228,0.72)`, clay WhatsApp button.
  - **Explore:** gold uppercase label + Inter 14px link column (About Djibril, Mali Tours, West Africa, Photos, Reviews).
  - **Contact:** gold label + links — `WhatsApp: +223 74 48 26 93`, Facebook, Instagram — plus a fine-print note about conditions.
- Bottom strip: copyright + travel-advisory disclaimer, Inter 12.5px at `rgba(244,239,228,0.5)`.

## Interactions & Behavior
- **WhatsApp links** are the single primary action and appear in the header, hero, first-message panel, every route card, the safety section, the final CTA, and the footer. Each builds a `https://wa.me/22374482693?text=<url-encoded message>` deep link. The default message prompts for dates, travellers, places, language. Route cards and the safety button pass a **topic-specific** prefilled message (e.g. "Hello Djibril, I am interested in Dogon Country. My dates are: ___ …"). Reproduce this URL-building so each CTA opens WhatsApp with the relevant prefilled text.
- **FAQ accordion:** 6 questions; clicking a question toggles its answer open and closes the others (single-open accordion, `openFaq` index state, `-1` = all closed; first item open by default). Answer reveals via `max-height` 0 → 320px + opacity 0 → 1 over ~280ms ease; the chevron rotates 180° over 220ms.
- **Hover states (all 160–400ms ease):** nav/footer links lighten to full cream; route + gallery images zoom; route cards lift and warm their border; buttons darken clay `#b85832` → `#a64c29` (`--accent-primary-hover`).
- **Smooth scrolling** via `scroll-behavior:smooth`.
- No entrance animations, no parallax, no autoplay — motion is restrained per the design system.

## State Management
Minimal — this is a marketing page.
- `openFaq` (integer index, default `0`, `-1` when all closed) — the only interactive state, drives the FAQ accordion.
- All other content is static data (see content model below). No data fetching.

## Content Model (reproduce as CMS/JSON/template loops)
- **routes[]**: `{ title, image, alt, bestFor, note, feasibility, feasibilityColor, whatsappTopic, ideaUrl }` × 6.
- **reasons[]**: `{ icon, title, body }` × 6.
- **steps[]**: `{ number, text }` × 3.
- **safetyPoints[]**: `{ title, body }` × 4.
- **gallery[]**: `{ src, alt, gridColumn, gridRow }` × 6.
- **faqs[]**: `{ question, answer }` × 6.
- **checklist[]**, **trustChips[]**, **aboutTags[]**: string arrays.
- **WhatsApp number:** `+223 74 48 26 93` → `wa.me/22374482693`.

## Design Tokens
Full values are in **`design-tokens.css`** (drop-in CSS custom properties). Summary:

**Colors:** ink `#15201d` · muted `#5c6762` · forest `#1f4c3b` · clay `#b85832` (primary accent) · clay-hover `#a64c29` · clay-text/rust `#8d3f1f` · gold `#c49a3a` · cream `#fdfaf3` (page bg) · sand `#ddd6c4` (hairlines) · tag-bg `#f5f0e6` · body text `#283531` · on-dark `#f4efe4`.

**Typography:**
- Display/headings → **Playfair Display** 600, tracking −0.025em (hero) / −0.015em (headings), leading ~0.98–1.08.
- Body/reading → **Source Serif 4** 400, leading 1.7, ~64–68ch measure.
- UI/labels/eyebrows → **Inter**; eyebrows are 800, UPPERCASE, `letter-spacing:0.18em`.
- Scale highlights: hero `clamp(2.9rem,6vw,5.4rem)`; section H2 `clamp(2rem,3.4vw,3rem)`; lead ~1.18rem; body 1rem–1.16rem; eyebrow 12px.

**Spacing:** 4px base scale. Section vertical rhythm `clamp(64px,8vw,104px)`. Gutter `clamp(1rem,4vw,3rem)`. Content max 1200px.

**Radii:** cards 16–18px · nested/inset 12–14px · buttons & tiles 10px · pills 999px · image plates 6px.

**Shadows (warm ink-tinted, never grey):** `--shadow-card` (resting) · `--shadow-raised` (hover/floating) · `--shadow-hero-card` (badge/panel over photo).

## Assets
All in **`images/`** (client-supplied tour photography of Mali / West Africa — masquerade and ceremony scenes, fishing villages, textiles, portraits, bush taxi, etc.). Filenames are descriptive (e.g. `masquerade-dancers.jpg`, `village-ceremony.jpg`, `girls-calabash.jpg`, `bush-taxi.jpg`). Optimize/resize for web (the prototype uses them at full size).

**Still referenced from the live site (absolute URLs, not in this bundle):**
- Route-card photos for named places: `https://yourmaliguides.com/images/bamako-city-culture.webp`, `djenne-mud-mosque.webp`, `dogon-country-landscape.webp`, `desert-route.webp`, `west-africa-route.webp`.
- About portrait: `https://yourmaliguides.com/images/djibril-kassogue-portrait.webp`.

**Icons:** inline stroke SVGs (2px stroke, round caps) for checks, map-pin, shield-check, calendar, etc., plus a WhatsApp glyph. Match with **Lucide** (or the codebase's icon set); icons are single-color forest/muted, often inside a soft tinted circle. No emoji.

**Fonts:** load Playfair Display, Source Serif 4, and Inter (Google Fonts or self-hosted).

## Files in this bundle
- `Your Mali Guides - Home.dc.html` — the full design reference (read-only prototype).
- `design-tokens.css` — all color / type / spacing / radius / shadow custom properties.
- `images/` — client tour photography used across the page.
- `README.md` — this document (self-sufficient implementation spec).
