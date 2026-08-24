# SKYLINE Engineering website UX and animation review

**Scope:** live site `https://skylineengineering.es/`, checked 2026-08-24 on the homepage in a mobile viewport, plus the local source that controls the observed interactions.

**Reviewed with:** `emil-design-eng` and `review-animations`, sourced from [emilkowalski/skills](https://github.com/emilkowalski/skills) under MIT license.

**Interaction coverage:** homepage load, sticky header state, mobile menu open/close, CTA/button hover states, villa-card image hover, navigation links, and persistent contact actions. No public dropdown, popover, or modal component was present in the checked routes, so those states have no finding.

## Findings

| Before | After | Why |
| --- | --- | --- |
| `components/layout/Navbar.tsx:32`: `transition-all duration-300` on the sticky header | `transition: background-color 200ms var(--ease-out), border-color 200ms var(--ease-out), padding 200ms var(--ease-out), backdrop-filter 200ms var(--ease-out)` | `transition-all` animates unbounded properties and can move layout unexpectedly. The header state change should name only the properties that visibly change and use a responsive custom ease-out curve. |
| `components/layout/Navbar.tsx:113-117`: Framer Motion animates `height: 0` to `height: 'auto'` for the mobile menu | Animate a compositor-friendly menu wrapper with `opacity` and `transform: translateY(-8px) -> translateY(0)`; keep layout measurement outside the animated path, with `duration: 180ms` and `ease: [0.23, 1, 0.32, 1]` | `height` is a layout property and can trigger repeated layout/paint work. The review standard prefers `transform` and `opacity`; the current menu also has no explicit entering ease-out. |
| `components/ui/VillaCard.tsx:17`: `group-hover:scale-105 transition-transform duration-700` | Gate the effect with `@media (hover: hover) and (pointer: fine)` and reduce it to `transform: scale(1.02)` over `200ms cubic-bezier(0.23, 1, 0.32, 1)` | A 700 ms hover effect is too slow for a frequently repeated interaction, and ungated hover motion can fire falsely on touch devices. The smaller scale keeps the architectural image polished without making the card feel sluggish. |
| CTA and navigation buttons, for example `components/sections/Hero.tsx:45-53`, have color hover transitions but no press transform | Add a shared press rule: `:active { transform: scale(0.97); }` with `transition: transform 140ms var(--ease-out)` | Press feedback confirms that the interface received the action. The scale is subtle, fast, and applies to pressable controls rather than relying only on a color change. |
| `app/globals.css:17-24`: reduced motion forces every animation and transition to `0.01ms` | Keep opacity/color transitions gentle, but remove movement selectively: `transform: none` for movement elements and short `opacity`/color transitions where they aid comprehension | The current rule technically suppresses motion but also removes useful state communication and makes all controls snap identically. Reduced motion should reduce movement, not erase every transition indiscriminately. |
| `components/layout/Navbar.tsx:115-117`: menu entry and exit share one generic transition configuration | Use deliberate asymmetric timing: enter `180ms ease-out`; exit `120ms ease-in` only for the closing response, or a retargetable CSS transition that snaps closed | Opening should feel immediately responsive, while dismissal should get out of the way quickly. A single generic duration/ease does not communicate that distinction. |

## Verdict

### Performance
The `height` animation in the mobile menu and `transition-all` on the sticky header are clear performance and predictability findings. They should be addressed before approving the motion implementation.

### Interruptibility & timing
The menu is triggered repeatedly and currently animates a layout property with a generic transition. Replace the layout animation and use a retargetable transform/opacity path.

### Accessibility
Reduced-motion support exists, which is good, but the global `0.01ms` override is too blunt. Hover motion also needs pointer/hover gating for touch users.

### Origin, physicality & cohesion
No trigger-anchored popovers or dropdowns were found on the checked public routes, so origin correctness is not applicable here. The overall visual language is restrained and architectural; reducing the card zoom supports that tone.

### Decision: BLOCK

The block is limited to motion polish: `transition-all`, layout-property animation, slow ungated hover motion, and missing press feedback are enough to fail the `review-animations` bar. The site is functional and the existing hero entrance (`components/sections/Hero.tsx:24-29`) uses a visible initial scale rather than `scale(0)`, which is a good baseline to preserve.

## Attribution

The review criteria come from Emil Kowalski's design-engineering skills repository: [github.com/emilkowalski/skills](https://github.com/emilkowalski/skills), MIT licensed. The local copies and attribution notice are stored under `.claude/skills/`.
