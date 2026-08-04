# Design Notes — The Developer’s Expedition

The redesign was researched and implemented on 3 August 2026. `references/RESUME_CONTENT.md` remains the sole source for personal and professional claims. The old technical-editorial direction in `references/DESIGN_DIRECTION.md` is recorded as historical context, but the user’s explicit redesign brief supersedes that failed visual direction.

## Design thesis

Create a modern, immersive portfolio that feels like entering a handcrafted technical world. Projects are locations; technology relationships are paths; experience is a sequence of illuminated chapters. Real names, roles, contributions, and technology labels remain primary. Fantasy appears only in atmosphere, spatial composition, ornament, subtitles, and interaction language.

The identity should feel melancholic and elegant rather than grim, aggressive, cyberpunk, or game-clan themed. Light is scarce and purposeful: pale cyan reveals systems, antique gold marks navigation and craft, and muted crimson appears around privacy/ownership work.

## Research synthesis

No external artwork or source composition was used. These references informed separate high-level principles:

1. [Atlas of the Celestial Heavens — Smithsonian Institution](https://www.si.edu/object/atlas-celestial-heavens%3Achndm_1980-32-1354)
   - Useful: orbital line logic, sparse points, and diagrammatic paths can make navigation feel exploratory without becoming a literal game map.
   - Applied as: original constellation paths, project route lines, radial Arsenal connections, and the technical puzzle.
   - Not copied: constellation artwork, labels, plates, specific star placements, or compositions.

2. [Ornamental Panel Design — The Metropolitan Museum of Art](https://www.metmuseum.org/art/collection/search/386550) and [Motif for an Iron Balcony — The Met](https://www.metmuseum.org/art/collection/search/355332)
   - Useful: thin metalwork, curved symmetry, negative space, and small repeated flourishes create elegance without heavy carved frames.
   - Applied as: original arched outlines, corner ticks, diamonds, lantern structures, and gateway rings.
   - Not copied: object silhouettes, scroll patterns, exact panels, proportions, or image assets.

3. [Cormorant open-source display family — Catharsis Fonts](https://github.com/catharsisfonts/cormorant)
   - Useful: a high-contrast, expressive display face can carry Belle Époque/fantasy elegance while body copy stays modern and legible.
   - Applied as: locally hosted Cormorant Garamond for large names, locations, and chapter headings only.
   - Licensing: SIL Open Font License. Public Sans remains the locally hosted body/UI face because its large x-height and neutral shapes protect recruiter scanability.

4. [The `dialog` element — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
   - Useful: native modal focus behavior, top-layer rendering, and Escape dismissal provide a stronger accessible base than a custom overlay.
   - Applied as: the optional Constellation Debugger, with an explicit close control and clear initial focus.

5. [Using media queries for accessibility — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
   - Useful: reduced motion should remove nonessential movement rather than merely slowing it.
   - Applied as: disabled fog/light animation, scroll reveals, smooth scrolling, and animated transitions under `prefers-reduced-motion: reduce`.

The named game references in the user brief informed only emotional qualities: mystery, depth, elegance, melancholy, handcrafted scenery, and cinematic menu pacing. Their characters, symbols, UI, fonts, images, stories, environments, and compositions were deliberately excluded.

## Visual identity

### Color

- Deep night: `#090C12`
- Night blue: `#0D131D`
- Raised surface: `#111722`
- Secondary surface: `#18202C`
- Ivory: `#ECE7DA`
- Mist: `#A7ADBA`
- Antique gold: `#C8A96A`
- Pale magical blue: `#91C7D5`
- Muted crimson: `#BD727C` (lightened from the initial direction for small-text contrast)

Dark values are layered instead of using pure black. Cyan is an environmental/system light, gold is navigation/craft, and crimson appears in privacy/ownership environments. There is no purple gradient or neon cyberpunk accent.

### Typography

- **Display:** Cormorant Garamond, weights 500–600, self-hosted under the SIL OFL. It is intentionally limited to names and major headings, where its contrast and narrow rhythm produce cinematic elegance.
- **Body/UI:** Public Sans, weights 400 and 600, self-hosted. Its restraint keeps paragraphs, buttons, and recruiter metadata legible against illustrated scenes.
- **Technical metadata:** system monospace, used sparingly for real categories, stack labels, dates, and route status—not terminal cosplay.

Typography no longer relies on large sans-serif blocks and mono labels as the entire personality. Display and body type now have clearly separate roles.

### Lighting and background

The page combines:

- a midnight base with several distinct raised blues;
- one CSS star field;
- two low-opacity fog bands;
- one slowly shifting angular light field driven by the active project ambient color;
- a tiny procedural SVG grain tile;
- original inline SVG architecture and landscapes inside the hero and projects.

The scene still reads when all animation is removed. No decoration is required to understand content.

### Ornament language

- 45-degree diamonds mark route nodes and current navigation.
- Pointed/elliptical arches frame scenes and quiet sections.
- Fine gold line-work indicates crafted structure.
- Concentric circles and sparse paths represent systems and celestial navigation.
- Lanterns mark experience/education chapters.
- Corner ticks inside buttons communicate a framed action without rounded SaaS pills.

No moth, mask, sword, creature, game icon, or copied crest was used.

## Project motifs

- **ClinicFlow / The Living Archive:** four isolated clinic chambers connect through secure access rings to a central record vault; a pulse line shows structured flow without using a generic medical cross.
- **Financial Instruments Platform / The Concordant Vault:** three asset seals, an illuminated ledger, locked assets, and several offers merging into one fulfilled request explain the hybrid market behavior.
- **Node Dashboard - Benchy / The Fivefold Network:** five connected towers use distinct Geth and Nethermind treatments, carry block signals through Clique links, and show one dimmed node on a recovery path.
- **Alsayh / The Observatory:** orbital map, observatory dome, mountains, and a route through structured destinations.
- **Social Media Platform / The Connected Kingdom:** protected gates, linked account nodes, and a central privacy seal.
- **Localhost Server / The Iron Gate:** request arrows, mechanical circles, and a structured HTTP gate.
- **NFT Marketplace / The Arcane Exchange:** ownership seal, concentric vault rings, and transaction-state geometry.
- **GraphQL Profile Dashboard / The Archive of Signals:** a small connected query volume.
- **Thunder Payment Channel / The Lightning Passage:** two peers connected by an angular signal.
- **Custom JavaScript Mini-Framework / The Clockwork Workshop:** interdependent modular mechanisms.

These illustrations are original geometric SVG and intentionally abstract. The real project name is always larger than the fantasy subtitle.

### Ten-project hierarchy

- Four primary featured realms receive full environmental diagrams and technical records: ClinicFlow, Financial Instruments Platform, Node Dashboard - Benchy, and Alsayh.
- Three additional major works remain on a connected waystation route with their existing motifs and expandable evidence: Social Media Platform, Localhost Server Project, and NFT Marketplace.
- Three discovered projects retain the concise archive presentation: GraphQL Profile Dashboard, Thunder Payment Channel, and Custom JavaScript Mini-Framework.

The expedition index exposes the hierarchy before the first realm, provides direct anchors, and identifies the complete count without turning the work into a crowded card grid.

## Navigation and interaction

- The fixed navigation is a full-width, dark menu bar rather than a floating pill.
- Six section destinations plus a direct CV download remain available in the navigation; mobile uses the same explicit “Journey menu” button.
- Active sections use a small gold diamond plus text-color change.
- As a featured project becomes current, its illustration illuminates and the global ambient color shifts.
- Native `details` elements expose technical records without JavaScript; the enhancement layer mirrors their open state with `aria-expanded`.
- Reveal motion is an optional enhancement, not a prerequisite for content.
- Email copy and puzzle progress use live status feedback.

## Motion

- Fog uses two slow transform animations.
- Hero celestial light breathes subtly.
- Project highlight is triggered by focus, hover, or viewport state.
- No scroll hijacking, mouse tracking, autoplay media, loader, cursor follower, marquee, or animation library.
- `prefers-reduced-motion` removes nonessential motion and immediately reveals content.

## Mobile adaptation

- The opening landscape is reframed rather than squeezed.
- Hero actions become full-width controls and identity metadata remains in the first screen sequence.
- Project realms become a vertical path with waypoint diamonds; illustrations retain their atmosphere at lower height.
- Additional major work becomes a compact connected route rather than three generic cards.
- Dense labels and nonessential monitoring marks are removed from new SVGs at the narrowest widths, while adjacent project text preserves the meaning.
- Secondary discoveries become a connected vertical path.
- The Arsenal becomes a readable discipline path instead of a compressed radial diagram.
- Experience follows one vertical lantern route.
- Constellation Debugger becomes an ordered vertical node list under 544px.
- Decorative arches extend beyond the viewport without creating document overflow.

## Constellation Debugger

The puzzle is the most professionally relevant optional interaction: the player restores an architectural route through client, API, access control, service, and database nodes. It is short, keyboard/touch playable, easy to close, resettable, silent, and never blocks content. ClinicFlow access control, Financial Platform vault logic, and Benchy consensus appear as visual fragments and in the completion text without adding steps. Completion lights the final contact beacon and reveals a factual note about Hashem’s project layers.

## Truth and placeholder policy

- No project repository or live-demo link appears because no verified URLs were supplied.
- `resume.html` is a complete, factual, printable résumé view. It can be saved as PDF through the browser.
- The verified owner-supplied PDF is preserved byte-for-byte at `assets/resume/Hashem_Alkhaldy_CV.pdf`; all CV actions download that exact case-sensitive path.
- The site does not state availability, metrics, clients, users, outcomes, performance gains, awards, or unsupported architecture.

## Final design rationale

The redesign is distinctive because the visual system is derived from Hashem’s actual project mix. Protected clinic domains belong to ClinicFlow, converging offer paths belong to the Financial Instruments Platform, five recovering towers belong to Benchy, and celestial planning remains with Alsayh. The same path logic connects the additional work, archive, skills, chronology, puzzle, and contact. This creates one authored world without letting the metaphor rewrite the professional truth.
