# Claude Code Instructions — Roll out the homepage design across the whole site

## Your task
The homepage of **yourmaliguides.com** has been redesigned in the **"50 Difficult Places"** editorial style (see `README.md` and `design-tokens.css` in this same bundle, and the reference file `Your Mali Guides - Home.dc.html`). Your job is to **apply the same design language to every other page of the site** so the whole experience is consistent.

Do **not** copy the prototype HTML verbatim — it is a reference. Recreate the patterns in the site's real environment (the live site is **WordPress**; reproduce these as theme templates / blocks, or in whatever stack the team is migrating to). Reuse the existing tour content and copy already on each page — you are **restyling and restructuring**, not rewriting the business facts.

## Before you start — read these
1. `README.md` — the full homepage spec (sections, tokens, behaviors, content model).
2. `design-tokens.css` — the single source of truth for color, type, spacing, radius, shadow. Import it once globally and reference the `var(--*)` tokens everywhere. **Never hardcode a hex value that exists as a token, and never introduce a color outside this set.**
3. `Your Mali Guides - Home.dc.html` — the visual reference for every pattern named below.

## Step 1 — Extract shared building blocks first
Before touching individual pages, factor these out of the homepage into **reusable components/partials** so every page stays identical and future edits are one-touch:

- **Header** — transparent floating variant (over a hero photo) AND a solid variant (cream bg, ink text, 1px sand bottom border) for pages without a photo hero. Same logo lockup, nav, and clay WhatsApp button.
- **Footer** — the ink three-column footer, used unchanged on every page.
- **WhatsApp button** — a single component that builds `https://wa.me/22374482693?text=<encoded message>` and accepts an optional `topic` to prefill a context-specific message. Use it for every CTA site-wide.
- **Section header** — rust eyebrow (Inter 800 uppercase, `letter-spacing:0.18em`) + Playfair H2 + optional Source Serif intro, optionally above a 1px sand top-rule.
- **Card** — white surface, 1px sand border, `border-radius:16px`, `--shadow-card`; hover lifts to `--shadow-raised` and warms border toward clay.
- **Pill / tag** — `--tag-bg` fill, 1px sand, `border-radius:999px`, clay-text label.
- **Tinted inset panel** — `--tag-bg`, 1px sand, `border-radius:14px` (used for checklists / "how it works" lists).
- **Icon-in-circle** — forest stroke icon (Lucide or existing set) inside a 34–46px `rgba(31,76,59,0.08)` circle.
- **FAQ accordion** — single-open, `max-height` + opacity reveal (~280ms), chevron rotates 180°.
- **Photo hero** — full-bleed `<img>` + `--overlay-hero` gradient (+ optional left-darkening gradient), gold eyebrow, Playfair hero title, Source Serif lead, primary CTA. Use this as the standard top-of-page for every page that has a strong photo.

## Step 2 — Global rules to apply on every page
- **Background:** cream `#fdfaf3`. Dark bands only for "process/steps" sections and the footer.
- **Type:** Playfair Display 600 for all headings; Source Serif 4 for all reading copy (leading 1.7, ~64ch measure); Inter for UI/labels/eyebrows. Load all three fonts globally.
- **One accent:** clay `#b85832` for the primary action only — typically one prominent WhatsApp CTA per view. Don't let clay dominate; rust `#8d3f1f` carries eyebrows/labels, gold `#c49a3a` is reserved for eyebrows over dark photos, forest `#1f4c3b` signals confirmed/safe/positive facts.
- **Borders:** every divider/hairline is sand `#ddd6c4`.
- **Spacing rhythm:** section vertical padding `clamp(64px,8vw,104px)`; content `max-width:1200px`; gutter `clamp(1rem,4vw,3rem)`.
- **Imagery:** full-bleed warm photography for heroes (never on flat color); content images in cards/plates with 1px sand border and 12–16px radius. Use the client photos in `images/`. Keep the existing labelled route photos for named places.
- **Motion:** restrained, 160–400ms ease on hover only (shadow lift, border warm, image zoom to ~1.06, link lighten, clay → `#a64c29`). No entrance animations, parallax, or autoplay.
- **Voice/copy:** editorial, second-person, honest and specific. Sentence-case headings, UPPERCASE eyebrows. British-leaning spelling. No emoji, no exclamation marks in body, no marketing superlatives. Preserve the site's safety-aware, "what is realistic" honesty.
- **Accessibility:** real alt text on every image, focus-visible states on links/buttons, color contrast preserved (the tokens are designed for it), tap targets ≥44px.

## Step 3 — Page-by-page application
Apply the patterns above to each page. Keep the existing content; restyle and reorganize into these structures.

### About Djibril (`/about/`)
- Photo hero (portrait or guiding-in-the-field shot) with gold eyebrow "Meet your guide", Playfair title, short lead.
- Long-form story in a single Source Serif prose column (~64ch), with a clay drop-cap on the opening paragraph (a system signature). Pull a terse quote with the **2px clay left-rule** pull-quote pattern (used sparingly).
- A facts/credentials strip: languages spoken, years guiding, regions covered, official registration — as a `FactsList` (label/value rows) or pill set.
- The floating credential badge (shield-check) pattern over his portrait.
- Close with the standard final-CTA band.

### Mali Tours (`/tours/`)
- Photo hero ("Private Mali trips, planned around real conditions").
- The **route-card grid** (reuse the homepage's 6-card pattern with feasibility badges) as the core. If there are more routes than on the homepage, paginate or extend the grid.
- Each route should deep-link to its own section/page with a topic-prefilled WhatsApp CTA.
- Add the "How planning works" 3-step dark band and the "Safety and feasibility come first" panel — they belong on this page too.
- FAQ accordion scoped to tour/logistics questions.

### Individual route / destination pages (Bamako, Djenné & Mopti, Dogon, Timbuktu, etc.)
- This is exactly what the "50 Difficult Places" system was built for — use the **destination-page template** shape: photo hero → a "Before you book" planning panel that **rises ~56px over the hero's bottom edge** (`--shadow-hero-card`) → two-column body with a **sticky ~312px trip-facts sidebar** (`--sidebar-w`) beside a ~680px Source Serif prose measure → practical tips as a responsive card grid → FAQ accordion → local-contact / CTA block.
- Trip-facts sidebar (`FactsList`): best months, getting there, typical duration, rough cost, difficulty/feasibility (use the forest/gold/clay difficulty scale), permits.
- State drawbacks plainly (honesty is a feature). Topic-prefilled WhatsApp CTA throughout.

### West Africa (`/west-africa/`)
- Photo hero broadened to the regional framing.
- Cross-border route cards (Mali + Burkina Faso, Ivory Coast, Guinea, etc.) using the same card grid; lead with feasibility/conditions badges since these are conditions-dependent.
- Emphasize border timing, visas, transport, local contacts — in the tinted "how it works" list pattern.

### Photos (`/photos/`)
- Photo hero or a tight intro band.
- The **mosaic gallery** pattern (CSS grid with mixed `grid-column`/`grid-row` spans, 12–14px radius tiles, hover zoom). Scale it up to the full photo set; consider a lightbox on click (keep it calm — fade, no bounce).
- Group by theme (people, routes, culture, landscapes) with section eyebrows between bands.

### Reviews (`/reviews/`)
- Photo hero or solid header "What travellers say".
- Testimonials as **cards** (white, 1px sand, `--shadow-card`): Source Serif quote, attribution in Inter, optional gold-filled `star` rating (the one filled icon the system allows). Keep real names/sources where available.
- A trust strip (official registration, references available) and the final-CTA band.

### Contact / Plan a trip (if present, else add a clear path)
- Reuse the homepage **"first message" panel**: the "what to send" checklist + a single large WhatsApp CTA. WhatsApp is the primary channel; if a form exists, mirror its fields to the checklist.

### Global, every page
- Same header (choose transparent vs. solid per whether the page has a photo hero), same footer, same final-CTA band before the footer, consistent section rhythm and tokens.

## Step 4 — Verify before you finish
Run through this checklist on each page:
- [ ] Imports `design-tokens.css`; no off-system colors; no hardcoded hex where a token exists.
- [ ] Playfair headings / Source Serif body / Inter UI applied correctly; eyebrows UPPERCASE 800 +0.18em.
- [ ] Exactly the intended single clay primary CTA per view; rust/gold/forest used per their roles.
- [ ] All hairlines are sand; cards use the right radius + warm shadow; hover states present (160–400ms).
- [ ] Every CTA opens `wa.me/22374482693` with sensible (topic-aware) prefilled text.
- [ ] Header + footer + final-CTA band identical to the homepage components.
- [ ] Real alt text, focus states, ≥44px tap targets, contrast intact.
- [ ] Copy stays honest, specific, second-person; no emoji, no superlatives, British spelling.
- [ ] Responsive: grids collapse gracefully (3→2→1), hero text stays legible, sidebar un-sticks and stacks on mobile.

## Notes
- Treat the homepage as the canonical reference for any ambiguity — match its spacing, weights, and shadows exactly.
- If you build shared components well in Step 1, most pages become composition work. Prioritize that.
- When a page's content doesn't fit a pattern cleanly, prefer the closest existing system pattern over inventing a new one. If you must add a pattern, keep it within the tokens and document it.
