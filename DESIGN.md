# Design

Visual system for the TriSol Ombrelones 2026 site. Colors and voice are **committed** — lifted from the printed catalog (vivid TriSol red, heavy black grotesque display, sun-burst mark, product photography on white). Identity preservation wins; this file documents the target, it does not reinvent it.

## Theme

Committed color strategy on a light base. White and near-white carry the product photography; the TriSol red punctuates and directs (CTAs, the sun-burst mark, section accents); a near-black ink handles display type and one or two drama sections. Premium, atemporal, technical — never promotional. Light mode is the product; there is no dark-mode toggle (isolated near-black sections provide contrast instead).

Physical scene: a sunlit terrace above the sea at midday — bright white stone, deep pool blue, one confident red mark. The page should feel like that light.

## Color

OKLCH throughout. Tokens as CSS custom properties.

### Core
- `--red` `oklch(0.58 0.24 26)` — TriSol red. Brand mark, accents, large headings on light. #E4002B-class.
- `--red-deep` `oklch(0.50 0.22 26)` — pressed/hover and **any surface carrying small white text** (white-on-`--red` is only ~4:1, fine for large/bold, not body; white-on-`--red-deep` clears 5:1).
- `--red-wash` `oklch(0.96 0.03 26)` — faint red tint for rare fills. Never place muted gray text on it; use `--ink` or a red-hued dark.
- `--ink` `oklch(0.17 0.006 30)` — near-black display type and dark sections. #121110-class.
- `--body` `oklch(0.34 0.006 45)` — running body text on light (~9:1 on white).
- `--muted` `oklch(0.52 0.006 45)` — captions, labels, meta (~4.7:1 on white; labels/large only, never long body).

### Surfaces
- `--bg` `#FFFFFF` — primary page surface; where product photos live.
- `--paper` `oklch(0.985 0.004 70)` — subtle warm-near-white section alternation (#FBFAF8; chroma 0.004, a whisper toward brand, NOT cream).
- `--ink-surface` `oklch(0.17 0.006 30)` — inverted near-black sections (materials/tech, footer). Light text here gets +0.05 line-height.
- `--line` `oklch(0.90 0.004 60)` — hairline borders and rules (#E7E4E0).

### Fabric / structure neutrals (product truth, used for swatches + restrained accents only)
- `--sand` `oklch(0.86 0.02 80)` · `--fendi` `oklch(0.80 0.015 75)` · `--taupe` `oklch(0.66 0.02 70)` · `--khaki` `oklch(0.72 0.02 85)` · `--marrom` `oklch(0.30 0.02 50)` · `--wooden` `oklch(0.62 0.06 65)` · `--black-fabric` `oklch(0.22 0.004 40)`. These name real cover/structure finishes from the catalog; they are swatch colors, not UI theme colors.

Contrast rule: verify every text/bg pair. White-on-red → `--red-deep` for small text. No muted gray on tinted near-white.

## Typography

**Single family, committed: Archivo** (variable, Google Fonts) — a neo-grotesque with a true black weight and an expanded axis; it carries the catalog's monolithic bold-grotesque voice without the training-data reflex (Inter/DM/Space are banned). Loaded via `next/font/google`, `display: swap`, subset latin, exposed as `--font-archivo`. One family in multiple weights/widths is the deliberate choice, not a timid pair. The "TriSol" wordmark and sun-burst are the **logo** — reproduced as SVG/asset, never typeset.

- Display / hero: Archivo 800–900, tight but `letter-spacing` ≥ `-0.03em` (floor is -0.04; do not cross it). Hero clamp max ≤ `6rem`. `text-wrap: balance` on h1–h3. Uppercase reserved for model names (as in the catalog) and short labels.
- Section headings: Archivo 700–800, `-0.02em`.
- Body: Archivo 400–450, `line-height: 1.55`, measure capped 65–72ch, `text-wrap: pretty` on long prose.
- Labels / eyebrows / spec keys: Archivo 600, uppercase, `letter-spacing: 0.14em`, `--muted` or `--red`. Use as a **deliberate catalog device** (the printed piece uses tracked caps like "OMBRELONE LATERAL"), not as a reflexive eyebrow over every section.
- Scale: fluid `clamp()`, ratio ≥ 1.25.

## Space & form

- Spacing base 4px. Section rhythm `clamp(4rem, 9vw, 8rem)` vertical; vary it for cadence (tight groups, generous separations).
- Container max ~1240px; full-bleed for hero and lifestyle photography (let the photograph be the design).
- Radii: cards/media 12–14px, buttons pill (`999px`) or 8px, inputs 8px. Hard ceiling 16px (no over-rounding).
- Borders: 1px `--line` hairlines. Never pair a 1px border with a wide (≥16px) soft shadow on the same element. Shadows, when used, are tight and low (`0 1px 2px` / `0 6px 20px -12px`), sparing.
- Z-index scale: dropdown 100 · sticky-nav 200 · modal-backdrop 300 · modal 400 · toast 500.

## Components

- **Nav**: sticky, transparent over the hero → solidifies to `--bg` with hairline on scroll. TriSol mark left, model anchors + "Pedir orçamento" (primary) right. Mobile: full-screen sheet.
- **Hero**: full-bleed catalog photograph, near-black gradient scrim bottom-left, display headline + one line + primary/secondary CTA. The sun-burst mark appears once, with intent.
- **Model index / cards**: the five models (Zuri, Solene, Vitta, Pub, Brisa) — NOT identical cards. Editorial rows or an asymmetric grid; each leads with its real photo, name, type (lateral/central), one differentiator, and a "Ver detalhes / Orçamento" action. Type badge (lateral vs central) is the organizing signal.
- **Model detail**: photo-led, with spec chips (tamanho, abertura, vento, tecido, garantia), material line, color/finish swatches (fabric neutrals above), and a per-model WhatsApp CTA.
- **Comparison table**: the catalog "guia rápido" — modelo · tipo · tamanhos · abertura · vento · tecido/garantia. Responsive: table → stacked cards under ~720px.
- **Spec chip**: pill, hairline border, uppercase key + value.
- **Buttons**: primary = `--red-deep` fill, white, pill; hover darkens + slight lift. Secondary = `--ink` ghost/outline. Focus-visible ring always. Touch ≥ 44px.
- **Footer**: `--ink-surface`, wordmark, WhatsApp CTA, catalog download, site url `trisolombrelones.com.br`.

## Motion

Intentional, restrained, premium. `motion` / CSS scroll-driven where it earns its place.
- One orchestrated hero page-load reveal (headline + image + CTA stagger). Section reveals **enhance already-visible content** (never gate visibility on a class).
- Model photos: hover scale ~1.03 + soft shadow bloom; no bounce.
- Sun-burst mark: subtle continuous rotation or one-time draw, low amplitude.
- Durations 200–600ms; easing ease-out-quint/expo. No elastic, no bounce.
- Materials: transform/opacity primary; blur/scrim/clip-path when they materially improve a reveal.
- `@media (prefers-reduced-motion: reduce)`: crossfade or instant; disable continuous rotation and parallax.

## Assets

Real product photography is extracted from the 2026 catalog PDF (`/Downloads/TriSol - Catalogo 2026 - SEM precos.pdf`) into `public/`. Image-led brief: ship real photos, never CSS placeholders. Optimize (correct dimensions, `next/image`, lazy below fold, descriptive pt-BR alt text). TriSol wordmark + sun-burst reproduced as SVG.

## Voice

Portuguese (pt-BR). Direct, curatorial, confident. "Escolha o modelo pelo uso." Copy from the catalog is canonical ("Luz e sombra em equilíbrio.", "Conforto é detalhe. E elegância é decisão.", "Alta performance em proteção solar para áreas externas."). No promotional exclamation, no invented metrics, no price claims.
