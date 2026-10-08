# Axiomata — Website Design System

**Design Direction:** Editorial Technology / Industrial Digital  
**Brand Positioning:** A serious technology company that happens to have exceptional design.

---

## 1. Brand Overview

### Business
Axiomata is an IT solutions company focused on helping startups, small businesses, and growing industries use technology to improve how they operate.

### Primary Audience
- Startups
- Small and medium-sized businesses
- Growing teams
- Small-scale industries
- Businesses moving from manual processes to digital systems

### Core Services
- Custom software development
- Web applications
- Business systems
- Workflow automation
- AI integration
- APIs and integrations
- Digital transformation

### Brand Personality
**Axiomata should feel:**
- Professional
- Technical
- Confident
- Modern
- Clear
- Practical
- Approachable
- Engineering-driven

**It should NOT feel:**
- Overly corporate
- Generic SaaS
- Loud or gimmicky
- Like a creative branding agency
- Like a template website
- Overly futuristic
- Visually complicated

### Core Design Statement
> Make Axiomata feel like an engineering company with the clarity of an editorial publication.  
> The website should communicate competence before decoration.

---

## 2. Visual Direction

**Recommended Style:** Editorial Technology / Industrial Digital

**The design combines:**
- Large editorial typography
- Warm neutral surfaces
- Strong ink-black contrast
- Electric teal accents
- Fine technical lines
- Subtle grid systems
- Generous whitespace
- Restrained motion
- Structured layouts
- Engineering-inspired visual details

*The website should have personality without relying on neo-brutalist decoration.*

---

## 3. Design Principles

### 3.1 Clarity over decoration
Every visual element must have a reason to exist.  
**Avoid adding:**
- Decorative cards
- Excessive borders
- Random blobs
- Unnecessary gradients
- Multiple competing animations
- Decorative 3D objects without meaning

### 3.2 One visual idea per section
Each section should have one dominant visual concept:

| Section | Primary Visual Idea |
| :--- | :--- |
| **Hero** | Typography + technical visualization |
| **Intro** | Large statement |
| **Services** | Structured capability list |
| **Work** | Case-study visuals |
| **Philosophy** | Strong statement |
| **Audience** | Clear categories |
| **Process** | Timeline |
| **About** | Editorial layout |
| **CTA** | High-contrast conversion section |

### 3.3 Teal is a signal, not a background
Electric teal should behave like an indicator light.  
**Use it for:**
- Primary actions
- Active states
- Small indicators
- Technical nodes
- Important numbers
- Hover states
- Underlines
- Selected navigation
- Small graphic details

*Do not make large portions of the page teal without a strong reason.*

### 3.4 Professional does not mean boring
Keep some of the personality of the design:
- Oversized typography
- Asymmetry
- Technical diagrams
- Strong contrast
- Editorial layouts
- Subtle motion
- Unusual but purposeful compositions

*Remove the visual excess, not the character.*

---

## 4. Color System

### 4.1 Primary Palette

| Token Name | Hex Code | Usage & Role |
| :--- | :--- | :--- |
| **Ink Black** | `#111315` | Primary dark color. Primary text, navigation, dark sections, footer, primary buttons, strong visual blocks. |
| **Warm Ivory** | `#F6F2E9` | Primary page background (used instead of pure white). Refined, human, editorial character. |
| **Electric Teal** | `#00C7B7` | Primary brand accent. Use sparingly for CTAs, active states, indicators, nodes, numbers, and graphic accents. |

### 4.2 Supporting Palette

| Token Name | Hex Code | Usage & Role |
| :--- | :--- | :--- |
| **Soft Teal** | `#DDF5F1` | Light feature backgrounds, small highlighted areas, supporting UI blocks. |
| **Charcoal** | `#3B4143` | Secondary headings, strong body text, supporting content. |
| **Muted Gray** | `#77766F` | Secondary text, metadata, supporting labels. |
| **Warm Border** | `#E2DDD3` | Dividers, table borders, input borders, section boundaries. |

### 4.3 Color Ratio
Recommended visual distribution across pages:
- **70–75%**: Warm Ivory (`#F6F2E9`)
- **20–25%**: Ink Black (`#111315`)
- **3–5%**: Electric Teal (`#00C7B7`)

---

## 5. Typography

### Primary Typeface
- **Primary Interface & Editorial:** `Inter` (Headings, Navigation, Body, Buttons, Forms, UI)
  - Inter provides world-class legibility, optical balancing, high x-height, and zero layout shift (CLS 0.0) when self-hosted via `next/font/google`.
- **Technical & Metadata:** `Roboto Mono` (Tags, Status indicators, Metric counters, Architecture nodes)
  - Roboto Mono brings engineering precision without compromising readability.

### Typography Hierarchy

| Level | Desktop | Mobile | Line Height | Attributes & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `48px – 80px` | `38px – 48px` | `1.05 – 1.08` | `Inter`, Extrabold/Bold, Natural title/sentence case, tight tracking (`-0.02em`) |
| **H2** | `36px – 48px` | `28px – 36px` | `1.12 – 1.15` | `Inter`, Extrabold/Bold, Section titles, consistent rhythm |
| **H3** | `20px – 28px` | `18px – 22px` | `1.2` | `Inter`, Bold, Service & case study headings |
| **Body** | `16px – 18px` | `15px – 16px` | `1.6` | `Inter`, Regular (`#3B4143`), high contrast against Warm Ivory |
| **Technical Meta** | `11px – 13px` | `11px – 12px` | `1.2` | `Roboto Mono`, Medium/Bold, uppercase, `0.1em` letter-spacing |

---

## 6. Layout System

- **Maximum Container Width:** `1280px`
- **Primary Content Width:** `1200px – 1280px`
- **Side Padding:** `32px – 48px` (Desktop), `20px – 24px` (Mobile)
- **Grid System:**
  - Desktop: 12 columns (`~24px` gutter)
  - Tablet: 8 columns
  - Mobile: 4 columns

---

## 7. Spacing System

Spacing Scale: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `96px`, `128px`, `160px`.

- **Section Vertical Spacing:**
  - Desktop: `120px – 160px`
  - Tablet: `96px – 120px`
  - Mobile: `72px – 96px`

---

## 8. Borders and Dividers

- **Primary Divider:** `2px solid #111315`
- **Secondary Divider:** `1px solid #E2DDD3`
- **Occasional Accent Divider:** `2px solid #00C7B7`

---

## 9. Buttons

### Primary Button
- **Default:** Background `#111315`, Text `#F6F2E9`
- **Hover:** Background `#00C7B7`, Text `#111315`
- **Shape:** Slightly squared (small radius `2px`–`4px`, no exaggerated pill shape)
- **Example:** `[ Start a conversation → ]`

### Secondary Button
- **Outlined / Text Variant:** `#111315` text with subtle border or arrow indicator.
- **Example:** `Explore solutions →`

---

## 10. Navigation

### Structure & Behavior
- **Left:** Wordmark `AXIOMATA`
- **Center/Right:** `Solutions`, `Work`, `About`, `Contact`
- **Right Action:** `[ Start a conversation → ]`
- **Scroll Effect:**
  - Reduce vertical padding slightly
  - Backdrop blur with subtle border: `background: rgba(246, 242, 233, 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid #E2DDD3;`

---

## 11. Mobile Menu

- Full-screen navigation with focus trap, scroll lock, keyboard navigation (`Tab`, `Escape`), and clear close button.
- Warm Ivory background (`#F6F2E9`), large Ink Black links (`#111315`), and Electric Teal active indicators (`#00C7B7`).

---

## 12. Hero Section

### Objective
Immediately communicate what Axiomata does, who it helps, why it matters, and the primary call-to-action.

### Copy & Visual Direction
- **Headline:** *"Technology for businesses ready to move."*
- **Subdeck:** *"We design and build practical digital solutions for startups, small businesses, and growing teams."*
- **Visual:** Replace floating browser-stack cluster with a clean **System Diagram** or **Technical Grid** (thin lines, node connections, small teal indicator lights).

---

## 13. Intro / Positioning Section

- **Statement:** *"We turn business challenges into practical technology."*
- **Subtext:** *"From internal systems to customer-facing applications, Axiomata builds digital solutions around the way your business actually works."*
- **Style:** Visually quiet, oversized type, generous whitespace.

---

## 14. Services Section (Capability Model)

Shift from creative website categories to a broader technology capability model:

1. **`01 — SOFTWARE`**: Custom software built around your business (web applications, internal tools, operational platforms).
2. **`02 — AUTOMATION`**: Less manual work, more efficient operations (connected workflows, process automation).
3. **`03 — AI`**: Useful AI, not AI for the sake of AI (intelligent capabilities integrated into products and workflows).
4. **`04 — DIGITAL FOUNDATIONS`**: Build the systems you need to scale (APIs, databases, integrations, cloud-ready architecture).

---

## 15. Work / Case Studies Section

- **Positioning:** Rename `ConceptWork` to `Work`. Present real or structured technical case studies.
- **Case Study Flow:** `Problem` → `Approach` → `Technology` → `Outcome`.
- **Categories:** Business platform, Automation system, Web application, AI integration, Internal operations tool, Data platform.
- *(Any remaining concept explorations are explicitly labeled "Concept / Internal Project").*

---

## 16. Philosophy Section

- **Statement:** *"Technology should make work simpler, not more complicated."*
- **Principles:**
  - **Practical:** Solving real operational problems.
  - **Clear:** Understandable, maintainable, and useful systems.
  - **Built to grow:** Solutions that support long-term scaling.
- **Palette:** Warm Ivory (`#F6F2E9`) + Ink Black (`#111315`) + Teal Signal (`#00C7B7`).

---

## 17. Audience Section

Organized by business stage & operational scale:
- **STARTUPS:** Turn ideas into working products (MVP development, product engineering, AI features).
- **SMALL BUSINESSES:** Move from manual processes to digital systems (internal tools, business automation, customer portals).
- **GROWING TEAMS:** Connect systems and improve operations (process automation, custom software, APIs).
- **INDUSTRIES:** Build technology around specialized operations (industry-specific workflows, data collection, monitoring tools).

---

## 18. Process Section

Four clear execution phases:
1. **01 — DISCOVER:** Understand the business, users, workflows, and problem.
2. **02 — DESIGN:** Define the solution, experience, and technical direction.
3. **03 — BUILD:** Develop, integrate, test, and refine the system.
4. **04 — LAUNCH:** Deploy, monitor, improve, and support the product.
- **Visual:** Clean horizontal timeline with electric teal node indicators.

---

## 19. About Section

Establishes engineering credibility:
- Focus on practical engineering, modern technologies, maintainable systems, performance, security, and long-term support.
- Avoid hyperbole ("world-class", "revolutionary") in favor of clear, grounded capability descriptions.

---

## 20. CTA & Footer

- **CTA Section:** High-contrast dark block (`#111315` BG) reading *"Have a problem worth solving? Let's build something that works."*
- **Footer:** 4-column layout (`#111315` BG, `#F6F2E9` text, `#00C7B7` accents, 2px paper top divider).

---

## 21. Brand Signature Pattern

```
01
─────────────────────────────────────────────

SOFTWARE
Systems built around the way you work.

                                        ●
                                   teal signal
```

This pattern of `INK + IVORY + TEAL SIGNAL + TECHNICAL LINE + LARGE TYPE` creates a signature visual rhythm across services, case studies, process, and about sections.

---

## 22. Summary: What to Remove vs. What to Keep

### Remove / Replace
- Neo-brutalist visual language (excessive heavy offset shadows everywhere)
- Excessive thick borders on every container
- Green accent section (`#0FA958`)
- Industry-specific creative agency positioning (Coffee, Fashion, Architecture, Auto Detailing)
- Floating browser stack mockup cluster in hero

### KEEP
- Strong typography & oversized headings
- Asymmetrical 12-column grid layout
- Mobile accessibility (SkipLink, focus trap, aria attributes)
- Process timeline & 4-phase execution
- High-contrast dark CTA & footer
- 2px primary divider line
- Restrained motion & animation polish
