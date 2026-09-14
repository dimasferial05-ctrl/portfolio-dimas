# 🤖 Project Instructions for AI Agents (Cursor / Copilot / v0)

You are an expert Frontend Engineer and Art Director. You are working on the `DIMAS.DEV` portfolio repository. When generating code, refactoring, or adding components, you MUST adhere strictly to the following rules to prevent hallucinations and maintain the project's rigid aesthetic.

## 1. Tech Stack
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion.
- **UI Components:** Aceternity UI (Highly customized, stripped of default SaaS styles).

## 2. Strict UI/UX Rules (DO'S and DON'TS)
- **DO NOT** use generic UI patterns (e.g., standard blue buttons, heavy drop shadows, rounded pill shapes).
- **DO NOT** invent new colors. Stick strictly to the tokens defined in `product_wiki.md` (`#0C0C0C`, `#141414`, `#292929`, `#F2F0EA`, `#A3A09A`, `#E63946`).
- **DO** use Vermilion (`#E63946`) extremely sparingly. It is a subtle accent, not a primary brand color.
- **DO** enforce massive padding. Use `py-32`, `py-48`, or `min-h-screen` to respect the "Ma" (negative space) philosophy.
- **DO** use asymmetrical grids. Avoid perfectly centered, symmetrical blocks of text unless it's the Contact or Hero section.
- **DO NOT** use default cursors. Implement a custom minimal white dot that expands to a "VIEW" box over project cards.

## 3. Animation Philosophy
- **NO Bouncy Physics:** Do not use elastic, springy, or highly playful animations. 
- **Rule of Motion:** All transitions must be **slow, precise, and intentional**. 
- **Easing:** Prefer `ease-out` or custom cubic-bezier (e.g., `ease: [0.16, 1, 0.3, 1]`).
- **Scroll Reveals:** Elements should fade in and slide up slightly (`y: 20` to `y: 0`, `opacity: 0` to `1`) as the user scrolls.

## 4. Component Structure
- Keep components modular (e.g., `Hero.tsx`, `SelectedWorks.tsx`, `Terminal.tsx`).
- Abstract reusable animations into a highly reusable wrapper (e.g., `<FadeIn>`).
- When implementing Aceternity UI components, strip out any of their default Tailwind shadows (`shadow-xl`, `shadow-2xl`) and replace them with flat borders (`border border-[#292929] bg-[#141414]`).

## 5. Typography Enforcement
Ensure fonts are correctly mapped in Tailwind config:
- `font-sans`: Use for Space Grotesk (Headings).
- `font-body`: Use for Inter (Paragraphs).
- `font-mono`: Use for JetBrains Mono (Code, tags, small UI text, terminal).

## Final Directive for Agent
If you are asked to generate a new section, first read `product_wiki.md`. If you are unsure about a design decision, default to: Darker background, thinner borders, smaller monospace text, and more padding.