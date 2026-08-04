---
name: portfolio-static-build
description: Build, review, or refine Hashem Alkhaldy's static HTML, CSS, and JavaScript portfolio while enforcing truthfulness, accessibility, responsive behavior, performance, and a non-generic visual direction.
---

# Static Portfolio Build

## Required Context

Read:
- `references/RESUME_CONTENT.md`
- `references/DESIGN_DIRECTION.md`
- `references/QA_CHECKLIST.md`
- `DESIGN_NOTES.md` if it exists

## Build Sequence

1. Create a content hierarchy before writing CSS.
2. Draft semantic HTML using the resume facts.
3. Build a mobile-first layout.
4. Establish design tokens for:
   - Color
   - Typography
   - Spacing
   - Borders
   - Motion
   - Container widths
5. Implement the editorial grid without turning sections into cards.
6. Add project interactions only after the static experience is complete.
7. Add custom SVG or CSS details only when they reinforce the engineering identity.
8. Review every statement against the resume reference.
9. Validate accessibility and responsive behavior.
10. Complete the quality checklist.

## Content Priorities

Feature:
1. Alsayh
2. Social Media Platform
3. Localhost Server Project
4. NFT Marketplace

Archive:
- GraphQL Profile Dashboard
- Thunder Payment Channel
- Custom JavaScript Mini-Framework

## Technical Constraints

- Semantic HTML5.
- Modern CSS with custom properties, grid, flexbox, clamp, and logical properties.
- Vanilla JavaScript modules only if needed.
- No runtime dependencies.
- No framework.
- No unnecessary icon library.
- Prefer inline SVG icons with accessible labeling.
- Keep the site deployable as static files.
- Maintain usable content when JavaScript is unavailable.

## Accessibility

- Use meaningful heading order.
- Provide a skip link.
- Ensure visible keyboard focus.
- Respect reduced motion.
- Maintain adequate contrast.
- Use real buttons for actions and real anchors for navigation.
- Do not encode meaning using color alone.
- Make all custom interactions keyboard operable.

## Originality Test

Reject the design if it contains several of these:
- Centered gradient hero
- Floating technology badges
- Rounded cards for every section
- Glass panels
- Decorative blobs
- Generic "Hi, I'm..." copy
- Skill bars
- Fake terminal window
- Excessive pills
- Copy-pasted Bento grid
- Unmotivated dark mode
- Animation added only to look advanced

## Definition of Done

The finished result must:
- Look intentional without being distracting.
- Explain Hashem's technical work quickly.
- Present projects as evidence.
- Work on small phones and large screens.
- Load quickly.
- Be keyboard accessible.
- Contain no unsupported claims.
- Pass `references/QA_CHECKLIST.md`.
