# Agent.md — Akinyi & Chesire Advocates LLP: Design System & Architecture

## 1. Project Overview

| Field | Value |
|---|---|
| **Client** | Akinyi & Chesire Advocates LLP |
| **Industry** | Legal services — Advocates & Commissioners for Oaths |
| **Location** | Kenya (Nairobi HQ + Mombasa coastal office), East Africa reach |
| **Target Audience** | High-net-worth individuals, corporate executives, family estates, property investors, SMEs in Kenya/East Africa |
| **Brand Personality** | Authoritative yet approachable. Rooted in Kenyan heritage, modern in execution. Trustworthy, loyal, warm. |
| **Emotional Goal** | Visitors should feel: *"These people will protect me. I can trust them with my life's most important decisions."* |

---

## 2. Architecture

The site is a **SvelteKit 2** static site using **Svelte 5** (runes mode) and **@sveltejs/adapter-static**. It pre-renders to pure HTML/CSS/JS at build time — no server runtime required. Deployment targets **GitHub Pages** via a GitHub Actions workflow.

### Component Model

The single-page site is composed of 11 self-contained Svelte components, each owning its own markup, scoped styles, and reactive logic. The root page (`+page.svelte`) assembles them in sequence and manages shared state (overlay visibility, toast notifications, scroll effects).

| Component | Role |
|---|---|
| `Nav` | Sticky navigation with desktop links, CTA buttons, and a slide-out mobile menu. Receives `openConsultation` callback via props. |
| `Hero` | Full-viewport section with background image, gradient overlay, headline, body text, CTAs, and inline stats. All text uses fluid `clamp()` sizing. |
| `TrustBar` | Horizontal strip of trust badges (LSK, years, offices, clients). Edge-to-edge dark background for visual rhythm. |
| `About` | Asymmetric two-column editorial layout with an image stack (photos + stat cards) and firm narrative. |
| `PracticeAreas` | Bento-style grid of 6 practice areas. One featured card spans 2 rows with an image. Cards invert colors on hover. |
| `Team` | Staggered card layout with grayscale-to-color image transitions and hover overlays for specialisation detail. |
| `Testimonials` | Data-driven testimonial cards with avatar initials. Iterates over an array — easy to add/remove entries. |
| `Insights` | Tabbed section (Articles / Updates / FAQs) with reactive tab switching via `$state`. |
| `Locations` | Two office cards (Nairobi, Mombasa) with location images, addresses, and contact details. |
| `Contact` | Split layout: form on the left, dark info panel on the right with email/WhatsApp channels and social links. Receives `openLegal` and `showToast` callbacks. |
| `Footer` | Three-column footer with brand info, quick links, and legal compliance links. Dynamic copyright year. |

### Shared Patterns

- **Scroll reveal**: `IntersectionObserver` in `+page.svelte` watches `.reveal` elements and adds `.visible` class on intersection. Staggered delays via `.reveal-delay-1` through `.reveal-delay-4`.
- **Overlays**: Consultation and legal overlays are managed in `+page.svelte` with `$state` booleans. They use `role="dialog"`, `aria-modal`, and Escape key dismissal.
- **Props flow**: Parent page passes callbacks (`openConsultation`, `openLegal`, `showToast`) down to Nav, Contact, and Footer via Svelte 5 `$props()`.

### Static Assets

Images live in `static/images/` and are served at `/images/` in the built site. Each `<img>` has an `onerror` fallback pointing to Unsplash, so the site remains visually complete even when local images are missing.

---

## 3. Design Principles

The design follows an **"Authority of Stillness"** philosophy — confidence doesn't shout. The site should feel like walking into a mahogany-paneled office: warm, quiet, assured. Every element earns its place.

### Core Principles

1. **Trust through restraint** — fewer elements, more conviction in each one. No decorative clutter. Sharp corners signal authority; minimal shadows replaced by colour blocking.
2. **Heritage through texture** — the tribal bar motif is the site's cultural signature, saying "we are Kenyan, we are global." Used sparingly as an accent (nav, footer, mobile menu), never as wallpaper. Warm serif typography and tinted neutrals reinforce heritage.
3. **Modernity through space** — generous whitespace, asymmetric layouts, fluid typography. Sections breathe. Not everything is centred—editorial asymmetry breaks the "identical card grid" anti-pattern.
4. **Authority through contrast** — bold alternation between light and dark sections creates visual rhythm: cream-light → forest-dark (trust bar) → cream → warm-white → charcoal (insights) → cream-light → cream → charcoal (footer). Each transition resets attention.

### Anti-Patterns Avoided

| Pattern | Alternative Used |
|---|---|
| Glassmorphism nav | Solid background with subtle shadow on scroll |
| Identical card grids | Bento grid with one featured card spanning 2 rows |
| Hero metric template | Stats pushed to a secondary grid column, not centred |
| Everything centred | Left-aligned editorial content with asymmetric image stacks |
| Modal overuse | Overlays only for consultation booking and legal compliance (dismissible via backdrop click, close button, and Escape key) |
| Same `fadeUp` on everything | Orchestrated hero sequence with 5 staggered timings, plus varied `reveal-delay` classes per section |

### Layout Rhythm

The page uses **scroll-snap sections** at `100vh` minimum height, creating a full-screen paging feel on capable devices. Each section owns its background colour, creating strong visual breaks without needing dividers or decorative borders.

### Responsive Strategy

- **Desktop (≥1024px)**: Full navigation links, two-column hero grid with stats on the right, multi-column content grids.
- **Tablet (768–1023px)**: Hamburger menu, hero collapses to single column, grids reduce to 2 columns.
- **Mobile (<768px)**: Slide-out menu panel from the right, single-column layout throughout, hero stats stack vertically, contact form goes full-width above the info panel.

---

## 4. Brand Colours

| Token | Hex | Role |
|---|---|---|
| `--forest` | `#154230` | Primary — trust, authority, Kenyan green |
| `--burgundy` | `#5D1E21` | Secondary — power, heritage, warmth |
| `--charcoal` | `#101111` | Dark neutral — text, dark sections |
| `--gold` | `#A6824A` | Accent — prestige, tradition, CTAs |
| `--cream` | `#E6E2DA` | Background — warmth, openness, paper |

### Extended palette (derived)

| Token | Hex | Purpose |
|---|---|---|
| `--forest-deep` | `#0D2C20` | Dark hover states |
| `--gold-light` | `#C9A96E` | Highlight text on dark |
| `--cream-light` | `#F4F1EC` | Alternate section bg |
| `--warm-white` | `#FAF8F5` | Card surfaces |
| `--text-primary` | `#1A1A17` | Body text (tinted warm) |
| `--text-secondary` | `#5C5A52` | Supporting text (tinted warm, NOT pure gray) |

---

## 5. Typography System

### Font Pairing

- **Headlines**: `DM Serif Display` — warm, authoritative, high-contrast serif with character. Evokes legal gravitas without being stuffy.
- **Body**: `Source Sans 3` — humanist sans-serif, highly legible, warm x-height. Professional but inviting.
- **Accent/Labels**: `Source Sans 3` caps with wide tracking — for section labels, captions.

### Type Scale (Fluid)

```css
--text-xs:    clamp(0.70rem, 0.65rem + 0.25vw, 0.80rem);
--text-sm:    clamp(0.80rem, 0.75rem + 0.25vw, 0.90rem);
--text-base:  clamp(0.95rem, 0.88rem + 0.35vw, 1.10rem);
--text-lg:    clamp(1.10rem, 1.00rem + 0.50vw, 1.30rem);
--text-xl:    clamp(1.30rem, 1.10rem + 1.00vw, 1.75rem);
--text-2xl:   clamp(1.75rem, 1.40rem + 1.75vw, 2.75rem);
--text-3xl:   clamp(2.25rem, 1.75rem + 2.50vw, 3.75rem);
--text-hero:  clamp(2.75rem, 2.00rem + 3.75vw, 5.00rem);
```

---

## 6. Motion & Interaction

### Hero Entrance
The hero uses a 5-step orchestrated animation sequence at page load, each element appearing 160ms after the previous:
1. Label line + "Advocates & Commissioners..." text
2. "Where Authority / Meets Purpose" headline
3. Body paragraph
4. CTA buttons
5. Stats overlay

The hero background image fades in simultaneously over 1.4s. All animations use `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint) for natural deceleration.

### Scroll Reveal
Elements with `.reveal` class start at `opacity: 0; translateY(20px)` and transition to their natural position when intersecting the viewport (6% threshold, -40px root margin). Delay classes (`.reveal-delay-1` through `.reveal-delay-4`) stagger siblings within a section.

### Hover States
- **Nav links**: gold underline grows from left on hover
- **Practice cards**: background inverts to forest green, text becomes cream, gold left-border grows from top
- **Team images**: grayscale lifts to full colour, subtle scale, overlay with specialisation text fades in
- **Location / About images**: gentle 1.04× scale
- **Insight cards**: background opacity increases
- **All transitions**: 0.3–0.7s with ease-out-quint curves

---

## 7. Section Content Guide

Each section of the site serves a specific purpose in the visitor journey:

| Section | Purpose | Background |
|---|---|---|
| **Hero** | Establish authority and emotional trust in under 3 seconds. Bold headline, clear positioning, immediate CTAs. | Charcoal with image overlay |
| **Trust Bar** | Social proof strip — credentials, longevity, reach. Scans in 1 second. | Forest green |
| **About** | Firm narrative — who they are, what they stand for. Editorial layout with staggered images conveys depth, not a brochure. | Cream-light |
| **Practice Areas** | Core service offering. The bento grid lets the eye wander rather than march — each card earns discovery. | Cream |
| **Team** | Humanise the firm. Photos with grayscale-to-colour transition signal "we're approachable behind the suits." | Cream-light |
| **Testimonials** | Third-party validation. Italic text + left border = editorial quotation style, not a carousel. | Warm-white |
| **Insights** | Demonstrate thought leadership. Tabbed interface keeps content compact. Dark background signals a shift toward intellectual depth. | Charcoal |
| **Locations** | Practical: where are they? Image cards with contact details. Two offices = national presence. | Cream-light |
| **Contact** | Conversion point. Split layout: form invites action, dark panel offers alternative channels (email, WhatsApp). | Cream |
| **Footer** | Navigation redundancy, legal compliance, brand sign-off. | Charcoal |

---

## 8. Assets

### Images (`static/images/`)

| File | Usage |
|---|---|
| `hero-bg.jpg` | Hero background — legal consultation scene |
| `office-nairobi.jpg` | About section — office interior |
| `legal-books.jpg` | About section — decorative |
| `handshake.jpg` | Practice areas — featured card |
| `team-woman.jpg` | Team card — managing partner |
| `team-man.jpg` | Team card — partner |
| `nairobi-skyline.jpg` | Location card — Nairobi office |
| `mombasa.jpg` | Location card — Mombasa office |

All images have Unsplash fallback URLs in `onerror` handlers, so the site renders gracefully when local files are absent.

### Branding Artifacts (`static/`)

| File | Description |
|---|---|
| `IMG-20260318-WA0017.jpg` | Brand artifact (logo/card) |
| `IMG-20260318-WA0018.jpg` | Brand artifact (logo/card) |
| `logo.svg` | Full SVG logo |
| `rough-cream-logo.png` | Textured logo variant |

---

*This document describes the design system, architectural decisions, and visual principles of the Akinyi & Chesire Advocates LLP website. It is intended as a reference for anyone working on the codebase — not a task tracker.*
