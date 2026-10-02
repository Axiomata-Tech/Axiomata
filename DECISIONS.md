# Architectural & Design Decisions

This document records sensible decisions made during the build where the specification allowed engineer discretion.

### 1. Font Loading & Fallbacks
- **Implementation:** Configured `next/font/google` with `display: 'swap'` and CSS variables (`--font-space-grotesk`, `--font-inter`, `--font-space-mono`).
- **Rationale:** Ensures zero layout shift (CLS: 0), optimal font rendering performance, and consistent typography across desktop and mobile.

### 2. Micro-Interaction System
- **Implementation:** Integrated strict 150ms step-free transitions for button and card hover/active states (`transform: translate(-3px, -3px)` and expanding hard shadows).
- **Reduced Motion:** Integrated Framer Motion's `useReducedMotion()` hook across all reveal animations, floating mockup loops, and timeline drawing, ensuring WCAG 2.1 AAA accessibility compliance.

### 3. Responsive Concept Work Grid
- **Implementation:** On desktop (>=1024px), the 12-column asymmetric layout highlights NOIRÉ (8 cols) and MOTIF (7 cols) while balancing VÉRA (4 cols) and NORTH & CO. (5 cols). On tablet (640–1024px), a clean 2-column grid is used with NOIRÉ as full-width lead. On mobile (<640px), a single-column stacked layout ensures crisp readability without horizontal overflow.

### 4. Contact Form Validation & Security
- **Implementation:**
  - Shared Zod schema between client (React Hook Form resolver) and server (`POST /api/contact`).
  - Honeypot field `company_website` silently rejects automated bot submissions.
  - In-memory rate limiting (max 5 submissions per minute per IP).
  - Explicit accessibility connections via `htmlFor`, `id`, `aria-describedby`, and `aria-invalid`.
  - Accessible success confirmation panel that auto-receives focus on submission.

### 5. Vector Mockup Visualizations
- **Implementation:** Created bespoke SVG vector illustrations for each conceptual exploration:
  - **NOIRÉ:** Hand-drawn geometric coffee cup with rising steam lines and lot metadata.
  - **VÉRA:** Minimalist geometric tailored silhouette with terracotta accent.
  - **NORTH & CO.:** Architectural floor plan elevations with blueprint blue highlights.
  - **MOTIF:** Precision automotive aerodynamic silhouette with signal yellow accents.
- **Rationale:** Satisfies the strict zero-bitmap, zero-stock-photo, zero-gradient rule while maintaining crisp vector rendering at all screen densities.
