# Design System: SA'RU – Samudra Biru Dev Company Profile

> **Single source of truth for AI agents.** Every new screen, section, or component must align with the rules encoded here. Do not deviate unless the rule explicitly permits it.

---

## Design Read

**Reading this as:** Company profile / marketing landing for a digital agency (SA'RU – Samudra Biru Dev), targeting Indonesian business owners and procurement decision-makers, with a **dark ocean-tech aesthetic** — restrained depth, editorial weight, deep-water palette, and confident asymmetric layouts. Leaning toward premium B2B with ocean / water brand identity.

**Dial Settings:**
- `DESIGN_VARIANCE: 7` — Asymmetric, confident, not chaotic
- `MOTION_INTENSITY: 5` — Fluid CSS transitions and smooth scroll via Lenis; no over-engineered physics
- `VISUAL_DENSITY: 4` — Balanced; generous whitespace, not sparse editorial nor cockpit-packed

---

## 1. Visual Theme & Atmosphere

A **deep ocean technology studio** interface. The atmosphere is dark, cool, and technical — like the command deck of a submarine: purposeful surfaces, cool electric-blue light sources, and clear spatial hierarchy. The brand uses ocean / water as a literal metaphor: deep navy backgrounds, glowing teal-cyan accents, radial gradient "light blooms" from below (like light filtering through deep water), and grid texture overlays that evoke depth maps or sonar patterns.

Sections feel **cinematic but functional** — not decorative for decoration's sake. Glow effects and gradient overlays communicate depth, not just aesthetics. Every light source has a direction (usually bottom-up or bottom-left radial). The interface is **dark-mode first**, locked dark — no section ever inverts to light.

---

## 2. Color Palette & Roles

### Base Surfaces (Dark Ocean)
| Name | Hex | Role |
|------|-----|------|
| **Abyss Black** | `#040A0C` | Deepest background; hero gradient target, footer bottom |
| **Deep Navy** | `#071115` | Primary section background (`bg-water-900`), hero footer |
| **Dark Teal** | `#09151A` | `water-800` — alternative dark surface |
| **Midnight Ink** | `#0a0a0a` | System dark mode background fallback |

### Water Scale (Brand Palette — use precisely)
| Token | Hex | Role |
|-------|-----|------|
| `water-50` | `#B3E4F8` | Lightest tint; decorative highlights only |
| `water-100` | `#A4DFF7` | Very light highlight |
| `water-200` | `#91D8F5` | Subheading accent, hover state text |
| `water-300` | `#56C3F0` | Border highlights, shimmer overlays |
| `water-400` | `#49A6CC` | Interactive hover borders, gradient mid-point |
| `water-500` | `#3F8EAF` | Mid-tone brand color |
| `water-600` | `#1E4454` | Button text, CTA text color on white, strong borders |
| `water-700` | `#16313C` | Heavier dark surfaces |
| `water-800` | `#09151A` | Near-black dark background |
| `water-900` | `#040A0C` | Darkest — page base, CommonLayout default |

### Ice Scale (Accent / Glow)
| Token | Hex | Role |
|-------|-----|------|
| `ice-50` | `#F0FEFF` | Barely visible tint |
| `ice-100` | `#E9FEFF` | Very subtle highlight |
| `ice-200` | `#D1FDFE` | Soft glow text on dark cards |
| `ice-300` | `#6AF7FD` | CTA section body text, vivid glow highlight |
| `ice-400` | `#5FDEE4` | Bright teal accent for active states |
| `ice-500` | `#55C6CA` | CTA gradient terminus (bottom of gradient) |
| `ice-600` | `#50B9BE` | Border on active cards |
| `ice-700` | `#409498` | Hover border boost |
| `ice-800` | `#306F72` | Muted accent |
| `ice-900` | `#255659` | Deep accent |

### Neutrals & Text
| Name | Value | Role |
|------|-------|------|
| **Pure White** | `#FFFFFF` | Primary text on dark, CTA button fill, navbar CTA |
| **Off-White / Foreground** | `#EDEDED` | Dark-mode foreground fallback |
| **Muted Gray** | `#D0D0D0` | Secondary text on dark cards (e.g., `SolutionCard` descriptions) |
| **Dimmed Gray** | `#6B7280` (Tailwind `gray-500`) | Footer section labels, metadata |
| **Transparent Border** | `rgba(86,195,240,0.5)` | Card borders (`WhyCard`, `SolutionCard`) |
| **Active Border** | `rgba(86,195,240,1.0)` | Hover border boost |

### CTA Gradient (fixed recipe — do not alter)
```
background: linear-gradient(to bottom,
  #040B0D 6%,
  #337E9D 76%,
  #55C6CA 100%
);
border: 1px solid #122C37;
border-radius: 2.5rem;
```

### Banned Colors
- Pure black `#000000` — use Abyss Black `#040A0C` instead
- Pure white backgrounds — all backgrounds are dark
- Warm tones: beige, cream, brass, ochre, terracotta — completely off-brand
- Purple / neon gradient — BANNED. No AI-purple `#7c3aed` glows anywhere
- Any warm-gray palette (`stone`, `amber`, `orange` families)

---

## 3. Typography Rules

### Font Stack
| Role | Font | Variable | Usage |
|------|------|----------|-------|
| **Display / Headings** | `Inter` | `--font-inter` | All headings, hero title, section headers |
| **UI / Sans** | `Geist Sans` | `--font-geist-sans` | Body copy, navigation links |
| **Mono** | `Geist Mono` | `--font-geist-mono` | Code, metadata, timestamps |

> **Note on Inter:** This project uses Inter intentionally as the primary display font — it is the project's established brand font choice. Do not replace Inter with another font in new components without explicit instruction.

### Type Scale (from `globals.css` — use these utility classes)

| Utility Class | Size | Line Height | Tracking | Weight |
|--------------|------|-------------|---------|--------|
| `text-display-hero` | 72px | 80px | -1.44px | 400 |
| `text-display-sub` | 56px | 64px | -1.12px | 400 |
| `text-heading-h1` | 48px | 56px | -0.96px | 400 |
| `text-heading-h2` | 40px | 48px | -0.80px | 400 |
| `text-heading-h3` | 32px | 40px | -0.64px | 400 |
| `text-heading-h4` | 24px | 32px | -0.48px | 400 |
| `text-heading-h5` | 20px | 28px | -0.40px | 400 |
| `text-heading-h6` | 16px | 24px | -0.32px | 400 |
| `text-body-large` | 18px | 28px | 0 | 400 |
| `text-body-base` | 16px | 24px | 0 | 400 |
| `text-body-small` | 14px | 20px | 0 | 400 |

### Responsive Scaling
- Hero headline: `clamp(28px, 7.5vw, 80px)` — fluid scale, `font-weight: 500`, `tracking-tight`, `leading-[1.1]`
- Subpage hero: `clamp(32px, 5vw, 72px)` — italic style applied, `font-weight: 500`
- Portfolio hero: `clamp(60px, 10vw, 120px)` — bold, `tracking-tighter`, `leading-[0.9]`
- Body clamp: `clamp(16px, 2vw, 24px)` for larger body text in CTAs
- Nav links: `clamp(16px, 2vw, 18px)`

### Rules
- All headings use **negative letter-spacing** (`tracking-tight` to `tracking-tighter`)
- `leading-[1.1]` or `leading-none` for hero headlines; avoid default `leading-normal`
- Max-width for body text: `max-w-[640px]` to `max-w-[65ch]`
- Italic text is used sparingly, only on specific words in CTAs or subpage titles (e.g., `<span className="italic">Business?</span>`)
- Section H2s use `text-display-sub font-medium text-white`
- Section body copy uses `text-heading-h4` or `text-body-large`, color `text-gray-400` or `text-ice-200`

---

## 4. Component Stylings

### 4.1 CommonLayout (Section Wrapper)
The universal section container. **Always use this for new sections.**

```tsx
<section
  className={`h-screen w-full px-18 flex relative bg-water-900 ${className}`}
>
```

- Default: `bg-water-900` (`#040A0C`), `px-18` horizontal padding, `flex`, `relative`
- Override height: add `h-fit!` for content-height sections
- Override background: allowed for specific sections (e.g., `bg-[#071115]`)
- Responsive: reduce `px-18` to `px-4 md:px-18` or `px-6 sm:px-8 lg:px-12` for inner containers

### 4.2 Navbar
- **Position:** `fixed top-0 left-0 w-full z-99`
- **Background:** `bg-transparent` — overlays the hero image
- **Height:** `py-5` (approx. 64–72px total)
- **Logo:** `80×28px` PNG, left-aligned
- **Nav links:** white text `clamp(16px, 2vw, 18px)` weight 500, `hover:text-gray-300`
- **CTA button:** white pill `rounded-full`, `bg-white text-water-700`, `px-6 py-3`, hover: `-translate-y-0.5`, active: `scale-95`, shimmer overlay animation on hover
- **CTA icon:** diagonal arrow SVG, `water-600` fill (`#1E4454`)
- Mobile: nav links hidden (`hidden md:flex`), hamburger NOT yet implemented

### 4.3 Cards — SolutionCard (About/Feature Cards)
```
Size: max-w-[512px] h-[594px]
Background: bg-water-900
Border: border border-water-300/20, hover:border-water-300/40
Corner radius: rounded-[20px]
Padding: pb-[30px] px-[25px]
```
- Text top-aligned: `h3` title in `text-heading-h3 text-white font-semibold`, description in `text-heading-h4 text-[#d0d0d0]`
- SVG icon centered in the lower portion, `opacity-60 group-hover:opacity-90`
- BlueFire SVG background glow, `translate-y-1/4 group-hover:translate-y-1/5` on hover
- Transition: `transition-transform duration-1000 delay-30` for glow, `transition-transform duration-300` for icon

### 4.4 Cards — WhyCard (Process/Reason Cards)
```
Size: w-full max-w-[430px]
Border: border border-[rgba(86,195,240,0.5)]
Background: radial-gradient(81.27% 109.27% at 52.87% 100%, rgba(145,216,245,0.9) 0%, rgba(73,166,204,0.9) 41.09%, rgba(73,166,204,0) 100%)
Corner radius: rounded-[20px]
Padding: p-[25px] px-[20px]
```
- Title: `text-heading-h4 text-white font-semibold max-w-3/5`
- Step number: `text-display-hero text-transparent bg-clip-text bg-linear-to-t from-transparent to-white font-bold leading-none`
- Description: `text-heading-h5 font-normal leading-tight tracking-tight text-ice-200 max-w-4/5`
- Desktop layout: **asymmetric two-column** with `gap-40` and `translate-x-[10vw]` / `translate-x-[-10vw]` offsets — NOT a uniform grid

### 4.5 Cards — Partner Cards
```
Height: h-[243px]
Border: border border-water-600/70, hover:border-water-600
Corner radius: rounded-[1.25rem]
Padding: p-[30px]
Background: radial-gradient(86.71% 79.65% at 9.6% 100.14%, #132F3B 0%, #071115 100%)
Hover bg: radial-gradient(86.71% 79.65% at 9.6% 100.14%, #194152 0%, #071115 100%)
Hover scale: scale-105
```
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]`
- Empty filler cells: transparent border, no background — create visual rhythm in the grid

### 4.6 CTA Section
- Container: `rounded-[2.5rem] border border-[#122C37] overflow-hidden`
- Gradient: `bg-linear-to-b from-[#040B0D] from-6% via-[#337E9D] via-76% to-[#55C6CA]`
- Layout: `flex flex-col md:flex-row items-center justify-between`
- Left: headline + description + button (centered, `md:w-1/2`)
- Right: mascot/character image, full bleed to the right edge (`md:absolute md:right-[-40px] md:bottom-[-40px]`)
- CTA button: `bg-white rounded-full px-8 py-4`, `text-heading-h4 font-semibold text-water-600`, hover: `bg-ice-100`
- Arrow icon: `ArrowOutwardIcon`, diagonal direction, `text-water-600`

### 4.7 Buttons (Primary / Navbar CTA)
- **Primary (White Pill):** `bg-white rounded-full px-8 py-4`, `text-water-600 font-semibold`
- **Hover:** `-translate-y-0.5`, active: `scale-95 translate-y-0`
- **Shimmer effect:** `absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-water-300/40 to-transparent group-hover:translate-x-full transition-transform duration-1000`
- **Ring effect:** `ring-2 ring-water-400/0 group-hover:ring-water-400/40 transition-all duration-300`
- **No outer neon glow.** The shimmer and ring are the interaction states — subtle, not garish
- One primary CTA label per intent, sitewide: **"Get in Touch"** (nav) / **"Let's Talk"** (CTA section) — do not introduce new contact intent labels

### 4.8 Social Buttons
- Circle border button: `rounded-full border border-white`
- Size: `50px × 50px`
- Hover: `bg-white text-water-900`
- Icon size: 30px (react-icons)

### 4.9 Headline / Section Title
- Used via `<Headline>` shared component
- Styles: `text-display-sub w-150 font-medium` — left-aligned within `CommonLayout px-18`
- Text color: white (inherits from dark background)
- Placement: `mt-30 mb-20 py-5` — generous vertical breathing room

### 4.10 Footer
- Background: `bg-water-900` + decorative grid PNG + star-glow PNG (bottom-left)
- Max-width inner container: `max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12`
- Layout: `flex flex-col lg:flex-row justify-between items-start gap-12 py-8`
- Logo: 210×210px version (larger than navbar)
- Link columns: `text-heading-h3 font-normal text-white hover:text-water-200`
- Column labels: `text-heading-h5 font-medium text-gray-500`
- Social icons: `50×50px rounded-full border border-white`, hover fills white
- Address: `text-body-base text-gray-400 leading-relaxed`, max-width constrained cards
- Address labels: `text-heading-h5 font-medium text-water-200`

---

## 5. Layout Principles

### Grid & Containment
- **Section wrapper:** `CommonLayout` — `w-full px-18 flex relative bg-water-900`
- **Inner container max-width:** `max-w-[1400px] mx-auto` or `max-w-[1598px] w-full` for wider sections
- **Default padding:** `px-18` (section-level), `px-6 sm:px-8 lg:px-12` (footer-level)
- **CSS Grid over Flexbox math:** use `grid grid-cols-N gap-[Xpx]` — never `calc()` percentage hacks
- **No overlapping elements** — every element occupies its own clean spatial zone. The only exception is intentional decorative layering (gradient overlays, background glows) using `z-index` to maintain clear paint order

### Section Heights
- **Hero (home):** `h-[calc(100vh-10rem)]` — fills below navbar
- **Subpage hero:** `h-[300px] md:h-[381px]`
- **Portfolio hero:** `h-[calc(100vh-10rem)]` — full-bleed photo
- **Content sections:** `h-fit!` override on `CommonLayout`
- **NEVER use `h-screen`.** Always use `min-h-[100dvh]` for truly full-height sections

### Asymmetric Layout Rules
- **Hero:** Left-aligned headline, NOT centered. Background image full-bleed behind content
- **WhyChooseUs:** Two columns with staggered vertical offsets — `translate-x-[10vw]` on one column. Desktop only; mobile collapses to single column
- **CTA:** Split 50/50 text left + character image right
- **Centered layouts** are used only for subpage hero titles (center-aligned with `items-center justify-center` within the section)

### Responsive Collapse
- All multi-column layouts collapse to `grid-cols-1` or `flex-col` below `md:` (768px)
- Mobile specific: `hidden md:flex` for desktop layouts, `flex md:hidden` for mobile alternates
- Touch targets: all buttons/links minimum 44px height

### Background Decoratives
Consistent visual language for backgrounds:
1. **Grid texture:** `url(/images/shared/gridbg.png)` — `opacity-30`, `backgroundSize: cover`, adds depth/structure
2. **Radial gradient light bloom:** `radial-gradient(41.31% 41.31% at 50% 50%, #49A6CC 0%, rgba(73,166,204,0) 100%)` — centered bottom or edge, `z-0`, large radius (e.g., `w-[100rem] h-[100rem]`)
3. **Bottom gradient fade:** `bg-gradient-to-b from-transparent to-[#040A0C]` — fades sections into the background color seamlessly
4. **Overlay tint:** `bg-water-900/60 mix-blend-multiply` on photo backgrounds

---

## 6. Motion & Interaction

### Smooth Scroll
- **Lenis** is the scroll provider (`LenisProvider` wraps all content)
- All scroll-based experiences inherit from Lenis — do NOT use `window.scrollY` directly
- No custom scroll hijacking beyond what Lenis provides

### Transition Standards
- **Hover state transitions:** `transition-all duration-300 ease-in-out` (default)
- **Shimmer sweep:** `transition-transform duration-1000 ease-out`
- **Glow/icon hover:** `transition-transform duration-300` (icons) / `duration-1000 delay-30` (glows)
- **Card scale on hover:** `hover:scale-105` for partner cards
- **Button active:** `active:translate-y-0 active:scale-95`

### Gradient Light Directions
- Light sources always come from **below** (bottom of section upward) — matches the deep-ocean metaphor
- Gradient bottom fades reinforce depth: `from-transparent to-[#040A0C]`

### Perpetual Animation Policy
- Currently: **no perpetual animations** are implemented. New components should not introduce infinite CSS loops without a clear reason
- `MOTION_INTENSITY: 5` — fluid but not cinematic. No floating elements, no typewriter effects, no pulsing glows unless explicitly requested

### Animation Targets — Hardware Accelerated Only
- Animate `transform` and `opacity` only
- NEVER animate `top`, `left`, `width`, `height`, `background-color` directly
- `will-change: transform` — use sparingly on elements that definitely animate

---

## 7. Spacing Tokens

| Usage | Value |
|-------|-------|
| Section horizontal padding | `px-18` (≈4.5rem) |
| Card inner padding | `px-[25px] py-[30px]` |
| Card gap in grids | `gap-[30px]` |
| Between cards vertically in staggered layout | `gap-40` (10rem) |
| Section vertical margin (Headline) | `mt-30 mb-20` |
| Footer column gap | `gap-12 lg:gap-32` |
| Navbar padding | `px-8 py-5` |
| CTA button padding | `px-8 py-4` |
| Navbar CTA padding | `px-6 py-3` |
| Border radius — cards | `rounded-[20px]` or `rounded-[1.25rem]` |
| Border radius — buttons/pills | `rounded-full` |
| Border radius — CTA container | `rounded-[2.5rem]` |

---

## 8. Icon & Image Rules

### Icons
- **Primary library:** `react-icons` (`react-icons/ri` for social icons — `RiLinkedinFill`, `RiInstagramFill`, `RiTiktokFill`)
- **Inline SVG:** small inline SVGs are used for the navbar CTA arrow and CTA section arrow — keep consistent diagonal arrow style
- **Icon size in social buttons:** 30px (react-icons/ri)
- **Stroke width:** 2 for inline SVG arrow icons
- Do NOT hand-roll complex SVG illustrations

### Images
- **Next.js `<Image>` component** for all images with known dimensions
- Hero background: via `style={{ backgroundImage: url('...') }}` on the section (not as an `<img>` tag)
- Mascot / character image: positioned absolutely at bottom-right of CTA (`md:absolute md:right-[-40px] md:bottom-[-40px]`)
- Partner logos: `width={280} height={180}`, `object-contain`, white-optimized for dark background
- Footer logo: `width={210} height={210}` (larger brand mark)
- Navbar logo: `width={80} height={28}`
- `fill` prop for full-bleed SVG backgrounds inside `relative` containers

### Background Images
- Hero: `/images/sections/hero/Hero.png`
- Footer bg elements: `/images/shared/footer/grid-bg.png`, `/images/shared/footer/star-glow.png`
- Section grids: `/images/shared/gridbg.png`
- Glow SVG in cards: `/images/sections/about/BlueFire.svg`
- Icons: `/icons/ui/{name}.svg`

---

## 9. Section Patterns & Layout Families

Each section uses a distinct layout family. Do not repeat layout families within 2 consecutive sections:

| Section | Layout Family |
|---------|--------------|
| Hero (home) | Full-bleed photo + left-aligned headline overlay |
| HeroFooter | Two-column split (text left, social icons right) |
| AboutHeadline / Headline | Single column left-aligned display text |
| AboutPreview / SolutionCards | 3-column grid with staggered vertical offset |
| WhyChooseUs | 2-column asymmetric with offset cards + radial glow bg |
| Partners | 4-column grid with empty filler cells for rhythm |
| CTA | Gradient container with split text/image |
| Footer | Multi-column links + decorative background |

---

## 10. Theme Lock

**This project is DARK MODE ONLY.**

- All sections use dark backgrounds (`bg-water-900`, `bg-[#071115]`, `bg-[#040B0D]`)
- No section inverts to light/white background
- No warm-paper sandwiching between dark sections
- The CSS `@media (prefers-color-scheme: dark)` sets `--background: #0a0a0a` — this is the expected environment
- Do NOT add `bg-white`, `bg-gray-50`, `bg-slate-50` or any light background to any section

---

## 11. Anti-Patterns (Banned — AI Tells)

> If you do any of the following, the output is **wrong**. Revert and fix.

- ❌ **No emojis** — anywhere in UI, copy, or headings
- ❌ **No pure black `#000000`** — use `#040A0C` (Abyss Black)
- ❌ **No light/warm backgrounds** — no white, beige, cream, or warm-gray sections
- ❌ **No AI purple / neon gradient glow** — `#7c3aed`, `#6d28d9`, `#8b5cf6` are banned
- ❌ **No overlapping elements without explicit z-index logic** — decorative layers use `pointer-events-none z-0`, content uses `relative z-10`
- ❌ **No centered hero** — hero headline must be left-aligned
- ❌ **No 3-equal-column card grid for feature sections** — WhyChooseUs uses asymmetric stagger, not a grid
- ❌ **No placeholder-as-label in forms** — label above input, helper text below
- ❌ **No generic circular spinners** — skeletal loaders only
- ❌ **No `h-screen`** — use `min-h-[100dvh]` for full-height sections
- ❌ **No `window.scrollY` in React state** — use Lenis or Motion's `useScroll`
- ❌ **No mixed warm/cool grays** — this project is a cool-gray palette (`water-*`, `ice-*`, `gray-*`). Do not introduce `stone-*`, `amber-*`, `orange-*`
- ❌ **No multiple contact CTAs** — one CTA intent label per page. "Get in Touch" (nav) and "Let's Talk" (page CTA) are the two approved labels
- ❌ **No fake-precision numbers** unless taken from real brand data
- ❌ **No AI copywriting clichés** — "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize", "Game-changing"
- ❌ **No broken image links** — use project-local assets only (`/images/...`, `/icons/...`)
- ❌ **No plain white pill buttons with white text** — CTA pill is white bg with `text-water-600`
- ❌ **No section background inversion** from dark to light
- ❌ **No Inter replacement** — Inter is the intentional brand font for this project

---

## 12. Component File Conventions

```
src/
  components/
    layout/          # Structural wrappers: Navbar, Footer, CommonLayout, LenisProvider
    sections/        # Page-specific sections grouped by page (home/, about/, services/, etc.)
      home/
        HeroFooter/
        AboutPreview/
        WhyChooseUs/
    shared/          # Reusable cross-page components: HeroHeader, Headline, Partners, CTA
    ui/              # Primitive UI components: SocialButton
```

- Each component lives in its own folder: `ComponentName/ComponentName.tsx` + `ComponentName/index.ts`
- `index.ts` re-exports the default: `export { default } from './ComponentName'`
- New sections go in `sections/{pageName}/SectionName/`
- New shared components go in `shared/ComponentName/`
- Server Components by default; add `'use client'` only for interactivity, scroll listeners, or motion

---

## 13. Project Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Fonts | `next/font/google` — Inter, Geist Sans, Geist Mono |
| Smooth Scroll | Lenis v1.3 (via `LenisProvider`) |
| Icons | `react-icons` v5 (primary), inline SVG for brand-specific arrows |
| Images | Next.js `<Image>` component |
| Animation | CSS transitions (primary), Lenis scroll (secondary) |

> No Framer Motion, no GSAP, no animation libraries currently installed. Do not import them without explicit user approval and an `npm install` step.
