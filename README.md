# Tidy Tidys Frontend 2.0

A modern **Nuxt 3** frontend rebuild for Tidy Tidys — designed to replace the early template-like prototype with a cleaner, more premium, more believable product experience.

This version focuses on:

- a stronger visual identity
- a cleaner booking flow
- richer content and discovery pages
- better dashboard structure
- mock APIs that make the frontend feel like a real platform before backend integration begins

---

## Overview

Tidy Tidys Frontend 2.0 is a **frontend-first rebuild** of the product experience.

Instead of continuing to patch the original starter project, this version rebuilds the interface with a cleaner structure using:

- **Nuxt 3** for app structure and routing
- **Nuxt UI** for UI building blocks
- **Pinia** for client-side state
- **Nuxt Image** for optimized local image rendering
- **server/api** mock endpoints to keep the product moving before real backend hookup

The goal of this build is not only to look better than the old version, but to create a frontend that is:

- easier to scale
- easier to reason about
- easier to hand off
- easier to connect to a real backend later

---

## Product Direction

This frontend is intentionally designed to feel:

- elegant
- calm
- soft-premium
- more editorial than generic
- more trustworthy than template-like

Recent styling direction moved away from dark neutral-heavy UI into a **pastel colorful system** with:

- soft floating background gradients
- semi-glass white surfaces
- pastel accent tones
- more expressive cards and content blocks
- a clearer visual hierarchy across homepage, services, and dashboard pages

---

## Current Scope

This project currently includes a broad frontend surface with mock content and flows.

### Public-facing pages

- Home
- Explore
- Services
- Service Detail
- Service Category
- Compare Services
- Offers
- Membership
- Pricing
- Specialists
- Specialist Detail
- Insights
- Insight Detail
- Reviews
- Coverage
- FAQ
- About
- Contact
- Support
- Business Request

### Auth / user-facing pages

- Login
- Dashboard
- Bookings
- Booking Detail
- New Booking
- Booking Confirmation
- Profile
- Addresses
- Favorites

---

## Core Features

### 1. Homepage Content System

The homepage is no longer just a hero and a few cards. It now includes:

- hero section
- stats strip
- trust strip
- category cards
- featured services carousel
- offers section
- how-it-works cards
- membership section
- bundle cards
- coverage section
- insights section
- testimonials marquee
- reviews preview
- FAQ preview
- editorial showcase

This makes the app feel like a real product surface instead of a demo landing page.

### 2. Service Discovery

Users can browse services through:

- all services page
- category-based pages
- service comparison page
- featured carousel
- related services on detail pages
- search and sort interaction

### 3. Booking Flow

The current booking flow is frontend-driven and mock-based:

- choose service
- select date / time
- enter address / notes
- review summary
- confirm booking

Booking state is staged through Pinia before backend hookup.

### 4. Dashboard Experience

The dashboard now includes:

- stats cards
- recent bookings
- booking timeline
- quick actions
- recommendation cards
- profile snapshot
- image panels / spotlight blocks
- mobile dashboard top bar
- desktop sidebar layout

### 5. Content and Trust Layers

The app now includes content depth through:

- insights pages
- reviews pages
- specialist profiles
- FAQ hub
- support page
- about page
- membership page
- offers page

These layers make the product feel more believable and more complete.

---

## Tech Stack

- **Nuxt 3**
- **Vue 3**
- **TypeScript**
- **Nuxt UI**
- **Pinia**
- **Tailwind CSS (via Nuxt UI / modern styling flow)**
- **Nuxt Image**

---

## Project Structure

A simplified overview of the current frontend structure:

```text
.
├─ assets/
│  └─ css/
│     └─ main.css
├─ components/
│  ├─ app/
│  ├─ dashboard/
│  ├─ home/
│  ├─ insights/
│  ├─ reviews/
│  ├─ services/
│  ├─ shared/
│  └─ specialists/
├─ composables/
├─ layouts/
│  ├─ default.vue
│  ├─ auth.vue
│  └─ dashboard.vue
├─ middleware/
│  └─ auth.ts
├─ pages/
│  ├─ index.vue
│  ├─ about.vue
│  ├─ pricing.vue
│  ├─ explore/
│  ├─ offers/
│  ├─ membership/
│  ├─ coverage/
│  ├─ contact/
│  ├─ faq/
│  ├─ support/
│  ├─ reviews/
│  ├─ insights/
│  ├─ specialists/
│  ├─ services/
│  ├─ bookings/
│  ├─ addresses/
│  ├─ favorites/
│  ├─ profile/
│  ├─ requests/
│  └─ auth/
├─ public/
│  └─ images/
├─ server/
│  └─ api/
├─ shared/
│  └─ types.ts
├─ stores/
│  ├─ auth.ts
│  └─ booking.ts
├─ app.vue
├─ app.config.ts
└─ nuxt.config.ts
```

---

## Routing Strategy

This project uses **Nuxt file-based routing**, meaning routes are generated automatically from the `pages/` directory.

Examples:

- `pages/index.vue` → `/`
- `pages/services/index.vue` → `/services`
- `pages/services/[slug].vue` → `/services/:slug`
- `pages/specialists/[slug].vue` → `/specialists/:slug`
- `pages/bookings/[id].vue` → `/bookings/:id`

This keeps routing simple and scalable.

---

## Layout Strategy

Three main layouts are used:

### `default.vue`
Used for public-facing pages.

### `auth.vue`
Used for login/auth style pages.

### `dashboard.vue`
Used for logged-in user areas like dashboard, bookings, addresses, favorites, and profile.

Pages opt into layouts through `definePageMeta()`.

Example:

```ts

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
```

---

## Sidebar Note

If the sidebar appears missing, that is usually not a rendering bug.

The current dashboard structure is intentionally responsive:

- **Desktop**: left sidebar is visible
- **Mobile / smaller screens**: sidebar is hidden and replaced with a drawer-style menu through the dashboard top bar

If the sidebar is not showing on desktop, check:

1. the page is actually using `layout: 'dashboard'`
2. `AppSidebar` is still mounted inside `layouts/dashboard.vue`
3. your viewport is above the desktop breakpoint

---

## Styling System

The project currently uses a **pastel editorial design system**.

### Visual characteristics

- pastel gradient background field
- semi-transparent white cards
- soft borders and blur
- pastel accent surfaces (pink / blue / mint / peach / lilac)
- softer shadows than typical dashboard UI
- cleaner typography hierarchy
- calmer motion system

### Common utility patterns

Some reusable style concepts include:

- `soft-card`
- `soft-card-strong`
- `brand-chip`
- `warm-chip`
- `section-space`
- `display-title`
- `section-title`
- `body-muted`

These should be preferred over random one-off styling whenever possible.

---

## Images

Images are stored in `public/images/...` and rendered through **Nuxt Image**.

Suggested structure:

```text
public/
└─ images/
   ├─ hero/
   ├─ services/
   └─ avatars/
```

Example usage:

```vue
<NuxtImg
  src="/images/services/home-cleaning.jpg"
  alt="Home Cleaning"
  width="1200"
  height="800"
/>
```

Using `NuxtImg` keeps image rendering cleaner and more production-friendly than plain `<img>`.

---

## Mock API Strategy

Until the real backend is connected, the app uses mock server endpoints under `server/api/`.

Current examples include:

- `/api/services`
- `/api/bookings`
- `/api/me`
- `/api/specialists`
- `/api/insights`
- `/api/reviews`
- `/api/addresses`
- `/api/faqs`
- `/api/offers`
- `/api/memberships`
- `/api/coverage`
- `/api/favorites`

This is intentionally useful for:

- frontend development
- content testing
- layout verification
- product demos
- UI iteration before backend is ready

---

## State Management

Pinia is currently used for lightweight frontend state.

### Current stores

#### `auth.ts`
Handles demo authentication state.

#### `booking.ts`
Handles booking draft state between step 1 and confirmation.

As backend integration begins, these stores can evolve into:

- token/session handling
- authenticated user profile state
- cached booking drafts
- favorites / settings / repeated data

---

## Motion and Interaction

The app includes a subtle motion system:

- route transitions
- layout transitions
- reveal-on-scroll blocks
- hover lift cards
- image hover scale
- toasts for save / confirm actions
- drawer interactions for mobile navigation

The motion is intentionally soft to match the product direction.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in the browser at the local Nuxt dev URL shown in the terminal.

---

## Recommended Modules

The build assumes these modules are installed:

```bash
npm install @nuxt/ui @pinia/nuxt
npx nuxt module add image
```

If you are rebuilding from scratch or syncing this project elsewhere, make sure these are present.

---

## Example `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2026-04-22',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})
```

---

## Design Principles For Future Changes

When continuing this project, try to preserve these principles:

### 1. Do not go back to template clutter
Avoid overly dense navbar items, random gradients, too many competing CTA styles, or dashboard blocks that all fight for attention.

### 2. Prefer reusable patterns
If a visual block appears more than once, it should probably become a component.

### 3. Keep discovery elegant
More content is good, but it must stay grouped and paced.

### 4. Keep mock data believable
Even placeholders should feel realistic enough to support demos and decision-making.

### 5. Maintain the pastel editorial direction
If new pages are added, they should still feel part of the same world.

---

## Recommended Next Steps

If development continues, the best next phases would be:

### Backend integration
- real authentication
- real booking creation
- real profile persistence
- real favorites / saved addresses
- real support / request submission

### Product depth
- add-ons in booking flow
- booking edit / cancel flow
- favorites interactions
- review detail pages
- specialist availability
- richer membership logic

### Content maturity
- CMS-backed insights
- richer FAQ system
- campaign scheduling
- full offer detail pages

### UX refinement
- onboarding flow
- empty state illustrations
- richer success states
- more contextual micro-interactions

---

## Suggested Handoff Summary

If this project is being handed to another developer or team, the most important context is:

- this is **not** a backend-complete app yet
- this is a **frontend-first product rebuild**
- mock data is intentionally broad to support believable exploration
- design direction is **pastel premium / editorial / soft modern**
- dashboard sidebar is responsive and not always visible on smaller screens
- the codebase should continue scaling through **components + pages + mock APIs**, not through giant monolithic files

---

## Why This README Exists

This README replaces the default Nuxt starter documentation because this project is no longer a generic Nuxt app.

It is now a structured frontend product prototype with:

- real direction
- real page architecture
- real content surface
- real UI system
- real next-step value

That deserves documentation that reflects the product, not the starter template.

---

## Final Note

Tidy Tidys Frontend 2.0 is already in a strong place visually.

It is no longer “just a rebuild.”
It now feels like a product with shape, intent, and personality.

The best thing you can do from here is keep changes deliberate.
Don't add noise.
Only add what strengthens the experience.
