# DevObsessed Style Guide

A comprehensive visual identity and design system reference for the DevObsessed brand. This document is intended for use across all media — web, presentations, print, and partner materials.

---

## Brand Identity

**DevObsessed** is a software consultancy that builds production-grade MVPs and scales engineering teams. The brand conveys technical precision, modern craftsmanship, and quiet confidence.

### Brand Personality

- **Technical but approachable** — expert-level depth without jargon walls
- **Minimal and intentional** — every element earns its place
- **Dark-first aesthetic** — a developer-native feel with glassmorphism depth
- **Confident, not loud** — the work speaks; the design stays out of the way

---

## Logo

The DevObsessed logo consists of a custom geometric mark (interlocking hexagonal letterforms) paired with the wordmark "DevObsessed" in a single horizontal lockup.

- **Mark color:** `#1CAF7D` (teal-green)
- **Wordmark color:** White on dark backgrounds, `#1a1a2e` on light backgrounds
- **Minimum clear space:** Equal to the height of the mark on all sides
- **Do not** rotate, stretch, recolor, or separate the mark from the wordmark

---

## Color Palette

### Primary Colors

| Name | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| **Background** | `#0a0f1a` | `#f5f5f7` | Page and section backgrounds |
| **Primary Text** | `#f5f5f7` | `#1a1a2e` | Headlines, body copy |
| **Brand Green** | `#34c759` | `#22a352` | Accent, CTAs, section labels, links |

### Secondary Colors

| Name | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| **Text Dim** | `#8da3b8` | `rgba(26,26,46, 0.7)` | Secondary body text, descriptions |
| **Text Muted** | `#8da3b8` | `rgba(26,26,46, 0.6)` | Tertiary text, metadata |
| **Text Faint** | `#8a97a5` | `rgba(26,26,46, 0.4)` | Subtle hints, timestamps |
| **Green Dim** | `#30b854` | `rgba(34,163,82, 0.65)` | Muted accent |
| **Green Faint** | `rgba(52,199,89, 0.1)` | `rgba(34,163,82, 0.1)` | Accent backgrounds, subtle highlights |
| **Green Glow** | `rgba(52,199,89, 0.06)` | `rgba(34,163,82, 0.08)` | Ambient glow effects |

### UI Surface Colors

| Name | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| **Border** | `rgba(255,255,255, 0.06)` | `rgba(0,0,0, 0.1)` | Default borders |
| **Border Hover** | `rgba(52,199,89, 0.12)` | `rgba(34,163,82, 0.2)` | Interactive hover states |
| **Glass BG** | `rgba(255,255,255, 0.03)` | `rgba(255,255,255, 0.35)` | Frosted glass surfaces |
| **Glass Border** | `rgba(255,255,255, 0.06)` | `rgba(0,0,0, 0.1)` | Glass element borders |
| **Nav BG** | `rgba(255,255,255, 0.04)` | `rgba(255,255,255, 0.5)` | Navigation bar |

### Accessibility Color

| Name | Value | Usage |
|---|---|---|
| **Focus Ring** | `#a855f7` (purple) | Keyboard focus indicators |

### Color Rules

- The brand is **dark-first** — dark mode is the default and primary experience
- Light mode must always be supported; never ship a color that only works in one theme
- Always use the token names (e.g. "Brand Green") rather than raw hex values in design specs
- The green accent is used sparingly — primarily for CTAs, labels, and interactive states
- Never use green for error states or destructive actions

---

## Typography

### Font Stack

| Role | Typeface | Weights | Usage |
|---|---|---|---|
| **Headlines** | DM Serif Display | 400 (Regular) | Page titles (h1), section headings (h2), card titles (h3) |
| **Body & UI** | Inter | 300, 400, 500, 600, 700 | Body copy, buttons, navigation, form fields |
| **Labels & Stats** | Space Grotesk | 400, 500, 600, 700 | Section labels, stat numbers, metrics, form labels |
| **Monospace** | JetBrains Mono | 400, 500 | Time labels, code snippets, technical callouts |

### Type Scale

| Element | Size | Line Height | Letter Spacing | Font |
|---|---|---|---|---|
| **Page title (h1)** | 32–56px (fluid) | 1.15 | -0.025em | DM Serif Display |
| **Section heading (h2)** | 32–56px (fluid) | 1.15 | -0.025em | DM Serif Display |
| **Card title (h3)** | 20–28px (fluid) | 1.25 | — | DM Serif Display |
| **Body / description** | 16px | 1.6 | — | Inter |
| **Card body** | 14px | 1.5 | — | Inter |
| **Section label** | 12px | — | 0.1em | Space Grotesk, uppercase |
| **Card label** | 11px | — | 0.1em | Space Grotesk, uppercase |
| **Button text** | 12px | — | 0.01em | Inter, 600 weight |
| **Stat number** | 32–54px (fluid) | 1.1 | — | Space Grotesk |
| **Footer link** | 14px | — | — | Inter |
| **Footer column title** | 12px | — | 0.08em | Space Grotesk, uppercase |

### Typography Rules

- **Section labels** are always uppercase, Space Grotesk, 12px, with 0.1em letter spacing and a green dot indicator before the text
- **Headlines** use DM Serif Display exclusively — never Inter or Space Grotesk for h1/h2
- **Never skip heading levels** (e.g. h1 directly to h3)
- **Use `text-wrap: pretty`** for headlines and body paragraphs to avoid orphaned words
- Fluid type uses CSS `clamp()` for smooth scaling between mobile and desktop

---

## Spacing & Layout

### Container

| Context | Max Width | Side Padding |
|---|---|---|
| Default | 1280px | 24–120px (fluid) |
| Large screens (1600px+) | 1400px | — |
| Extra large (1800px+) | 1600px | 48px |
| Ultra wide (2200px+) | 1920px | — |
| Small mobile (480px and below) | — | 16px |

### Section Spacing

| Element | Value |
|---|---|
| Content section (top/bottom padding) | 80–160px (fluid) |
| CTA section (top/bottom padding) | 100–200px (fluid) |
| Section header to content gap | 48–80px (fluid) |

### Grid Gap

| Breakpoint | Gap |
|---|---|
| Default | 24px |
| Large (1600px+) | 32px |
| Extra large (1800px+) | 40px |

### Border Radius

| Element | Radius |
|---|---|
| Default | 10px |
| Glass cards | 20px |
| Bento/content cards | 24px |
| Large containers | 24px |
| Primary buttons | 100px (full pill) |
| Tags / chips | 100px (full pill) |
| Form inputs | 12px |
| Small UI buttons | 8px |

---

## Visual Effects

### Glassmorphism

Glassmorphism is the defining visual treatment of the DevObsessed brand. All card surfaces use frosted-glass effects with noise texture overlays.

| Surface Type | Backdrop Blur | Saturation |
|---|---|---|
| Content cards (bento) | 20px | 180% |
| Standard glass elements | 12px | 180% |
| Containers / panels | 8px | 180% |
| Light mode (all) | 4px | 110% |

**Required layers for every glass surface:**
1. **Background:** Semi-transparent fill (Glass BG token)
2. **Border:** 1px solid Glass Border token
3. **Noise overlay:** Fractal noise texture at 3% opacity
4. **Gradient border:** Top-to-bottom gradient fading from visible to transparent (gives subtle top-lit edge)

**Rules:**
- Never use a glass surface without the noise overlay — it prevents the surface from looking flat
- Always pair with the appropriate shadow token
- Light mode reduces blur significantly to maintain readability

### Shadows

| Context | Dark Mode | Light Mode |
|---|---|---|
| **Card (resting)** | Inset top/bottom highlights + 24px blur drop shadow | Subtle 3px + 24px blur drop shadow |
| **Card (hover)** | Enhanced inset highlights + 40px blur | 32px blur drop shadow |
| **Navigation** | Inset highlights + 24px blur + hairline outline | 3px + 24px blur |

Dark mode shadows use **inset highlights** (white at low opacity) to simulate light catching the glass edge. Light mode uses conventional drop shadows only.

### Background Grid

A fixed 80px square grid pattern sits behind all content at very low opacity:
- Dark mode: white lines at 1.8% opacity
- Light mode: black lines at 3% opacity

---

## Components

### Section Header

Every content section opens with a standardized header block:

```
[green dot] SECTION LABEL          ← Space Grotesk, 12px, uppercase, green, 0.1em tracking
Section Heading Text               ← DM Serif Display, 32–56px fluid
Optional description paragraph     ← Inter, 16px, dim text color
```

### Glass Card (Bento Card)

The primary content container. Used for service descriptions, team members, case studies, and feature callouts.

```
┌─────────────────────────────────┐
│                                 │  ← 24px border radius
│  CARD LABEL                     │  ← Space Grotesk, 11px, uppercase, 0.1em
│  Card Title                     │  ← DM Serif Display, 20–28px fluid
│                                 │
│  Body text describing the       │  ← Inter, 14px, 1.5 line height
│  content of this card.          │
│                                 │
└─────────────────────────────────┘
```

- Frosted glass background with noise overlay
- Gradient border (top-lit edge effect)
- Hover: lifts 2px, shadow intensifies, border brightens

### Primary Button (CTA)

```
╭──────────────────────╮
│      CTA TEXT         │  ← Inter 600, 12px, 0.01em tracking
╰──────────────────────╯
   ← 100px radius (pill), 16px vertical / 32px horizontal padding
```

- Glass background with animated rotating beam border (conic gradient)
- Hover: lifts 1px, shadow intensifies
- The beam animation rotates a subtle light sweep around the border (2.5s loop)

### Secondary Button

Plain text link style:
- Dim text color at rest
- Transitions to Brand Green on hover
- No background, no border
- 12px, Inter 500

### Tech Chip / Tag

```
╭─────────╮
│  React  │  ← 13px, Space Grotesk 500, muted text
╰─────────╯
   ← pill shape, 8px/16px padding, glass background, 1px border
```

- Hover: border transitions to Border Hover color

### Stat Bar

A horizontal row of key metrics, typically 4 columns:

```
│    15+     │    50+     │    99%     │    24hr    │
│  CLIENTS   │  PROJECTS  │  ON TIME   │  RESPONSE  │
```

- Numbers: Space Grotesk, 32–54px fluid, primary text color
- Labels: Inter, 12px, dim text color
- Columns separated by vertical 1px borders (border token color)

---

## Grid Layouts

| Pattern | Columns | Usage |
|---|---|---|
| Hero | 2 columns | Hero sections with text + visual |
| Bento 2-col | 2 equal columns | Service cards, feature pairs |
| Featured | 1.6fr + 1fr | Featured content with sidebar |
| Article | 3 columns | Blog/article listings |
| Team | 4 columns | Team member cards |
| Proof | 3 columns (first card spans 2) | Social proof / testimonials |

All grids collapse to single-column on mobile (below 768px). Team grid goes to 2 columns on tablet, then single on mobile.

---

## Responsive Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| **Small mobile** | ≤480px | 16px padding, single column, compact type |
| **Mobile** | ≤768px | Single column grids, mobile nav overlay |
| **Tablet** | ≤1024px | 2-column grids reduce, some stacking |
| **Desktop** | Default | Full multi-column layouts |
| **Large desktop** | 1600px+ | Wider containers, larger gaps |
| **Extra large** | 1800px+ | Max container 1600px, 48px padding |
| **Ultra wide** | 2200px+ | Max container 1920px |

---

## Animation & Motion

### Principles

- **Compositor-only properties:** All animations use `transform` and `opacity` exclusively — never animate `width`, `height`, `margin`, or `padding`
- **Subtle and purposeful:** Motion reinforces hierarchy, never distracts
- **Respect user preferences:** All animations are disabled when `prefers-reduced-motion: reduce` is set

### Standard Animations

| Animation | Description | Duration |
|---|---|---|
| **Fade in** | Scroll-triggered opacity transition | 0.7s ease |
| **Card hover lift** | `translateY(-2px)` + shadow change | 0.3s |
| **Button hover lift** | `translateY(-1px)` + shadow change | 0.3s |
| **Button beam** | Rotating conic gradient border sweep | 2.5s linear loop |
| **Blob float** | Ambient background blobs drifting | 20–30s ease-in-out loop |
| **Square drift** | Background decorative squares moving | 25–45s ease-in-out loop |
| **Focus pulse** | Purple glow pulse on focused elements | 2s ease-in-out loop |

---

## Accessibility

| Feature | Specification |
|---|---|
| **Focus indicator** | 2px solid purple (`#a855f7`), 2px offset, with glow |
| **Skip to content** | Visible on tab, purple background |
| **Reduced motion** | All animations disabled via `prefers-reduced-motion` |
| **High contrast** | Blur removed, borders solidified via `prefers-contrast: more` |
| **Backdrop filter fallback** | Solid backgrounds when `backdrop-filter` is unsupported |
| **Decorative elements** | All marked `aria-hidden="true"` |
| **Interactive regions** | Keyboard-focusable with visible indicators |

---

## Theme System

DevObsessed supports **dark mode** (default) and **light mode** via a data attribute toggle.

- Dark mode: Deep navy background, white text, vibrant green accent
- Light mode: Warm light gray background, dark text, deeper green accent
- Theme preference is persisted in localStorage
- All components must work correctly in both themes

### Key Theme Differences

| Property | Dark | Light |
|---|---|---|
| Overall feel | Deep, immersive, developer-native | Clean, airy, professional |
| Glass blur | 8–20px | 4px (reduced) |
| Glass saturation | 180% | 110% (reduced) |
| Shadows | Inset highlights + drop shadows | Drop shadows only |
| Grid lines | White at 1.8% opacity | Black at 3% opacity |
| Green accent | Brighter (`#34c759`) | Deeper (`#22a352`) |

---

## Usage in Presentations

When using this style guide for PowerPoint, Keynote, or Google Slides:

### Slide Backgrounds
- **Primary:** `#0a0f1a` (dark mode background)
- **Alternative:** `#f5f5f7` (light mode background)
- Optionally add the 80px grid pattern at low opacity

### Text on Dark Slides
- Headlines: `#f5f5f7`, DM Serif Display
- Body: `#8da3b8`, Inter
- Accent/highlights: `#34c759`

### Text on Light Slides
- Headlines: `#1a1a2e`, DM Serif Display
- Body: `rgba(26,26,46, 0.7)`, Inter
- Accent/highlights: `#22a352`

### Card Elements
- Use rounded rectangles (24px radius) with semi-transparent fills to simulate the glass card effect
- Add a subtle gradient border along the top edge for the lit-edge look

### Brand Green Usage
- Section dividers and accent lines
- Bullet points and icon fills
- CTA buttons and highlighted text
- The green dot before section labels

---

*This style guide is the source of truth for the DevObsessed visual identity. For web-specific implementation details (CSS tokens, Tailwind patterns, React components), see the `devobsessed-design` skill.*
