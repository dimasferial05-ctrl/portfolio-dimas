# 🏯 DIMAS.DEV — Interactive Developer Portfolio

## 1. Product Overview
DIMAS.DEV is the personal interactive portfolio of **Dimas Ferial Hidayat**, a Software Developer and Frontend Enthusiast currently studying Information and Computer Technology (D4) at Politeknik Negeri Subang. The portfolio serves as a digital garden and professional showcase, highlighting technical capabilities, problem-solving skills, and a high-end sense of UI/UX design.

## 2. Design Concept & Philosophy
**Vibe:** Japanese Minimalism × Modern Developer × Neo-Tokyo.
The design heavily utilizes the concept of **"Ma" (間)**—intentional negative space. It relies on severe minimalism, editorial layouts, and striking typography rather than heavy graphics. It should feel like a high-end print magazine fused with a hacker's terminal.

## 3. Design System & Tokens
DO NOT deviate from these exact values.

### Colors ("Ink + Paper + Vermilion")
- **Background (`bg-background`):** `#0C0C0C` (Ink Black) with a 2-4% CSS noise/grain overlay.
- **Surface (`bg-surface`):** `#141414` (For cards and elevated sections).
- **Border (`border-subtle`):** `#292929` (Extremely thin, 1px only).
- **Primary Text (`text-primary`):** `#F2F0EA` (Off-white).
- **Secondary Text (`text-secondary`):** `#A3A09A`.
- **Accent (`text-accent`):** `#E63946` (Vermilion Red). Used strictly as a "shuin" (Japanese seal/stamp) for tiny dots, cursor interactions, or active link highlights.

### Typography
- **Headings:** `Space Grotesk` (Bold, geometric, modern).
- **Body:** `Inter` (Clean, maximum readability).
- **Code & Metadata:** `JetBrains Mono` (Technical, used for tags, nav, and terminal).

### Shapes & Grid
- **Border Radius:** `0px` to `8px` max. NEVER use fully rounded (pill) shapes for cards or buttons. Keep it sharp and editorial.
- **Grid:** 12-column architecture (`max-w-[1440px]`). Strongly favor asymmetrical layouts.

## 4. Architecture & Content Flow
1. **Global Nav:** Floating Dock (Bottom Center) + Persistent Meta Tag (Bottom Left: `DF / 2026`).
2. **Hero:** Giant typography, Text Flip component, minimalist call-to-action.
3. **About (01):** Asymmetrical layout with a subtle Pixelated Canvas interaction.
4. **Tech Stack (02):** Infinite 3D Marquee of technical skills.
5. **Selected Works (03):** The core showcase (KosPasti, Smart-Stay, TBCareKids). Large imagery, focus card interactions.
6. **Experience (04):** Animated scroll-drawing timeline.
7. **Status (05):** "Currently Building" unstyled dark terminal window with blinking Vermilion cursor.
8. **Contact (06):** Massive typography, subtle background ripple, final CTA.