# Redesign Report — The Developer’s Expedition

Redesign completed 3 August 2026. This report records the audit, the replacement concept, the implementation decisions, and the final anti-generic review. Personal and project claims remain limited to `references/RESUME_CONTENT.md`.

## Phase 1 — Audit of the failed direction

### Why the old site felt like a newspaper

The previous interface was built as an “engineering field index” on warm paper. Nearly every visual decision reinforced the editorial metaphor:

- a warm off-white page and paper-grain texture;
- near-black ink with a single printed-signal orange;
- a strict 12-column grid visible as fine rules;
- “Field note,” “P—01,” “A—01,” “Track A,” and section-fraction labels in monospace;
- oversized sans-serif headlines followed by dense text columns;
- project entries separated almost exclusively by horizontal rules;
- a project archive composed like a publication index or table of contents;
- résumé facts displayed as ledgers, tracks, and article-like chronology.

The result was technically controlled but emotionally flat. It asked the visitor to read a designed document rather than enter a developer’s world.

### Outdated or mismatched layout decisions

- The hero was a name-heavy grid with a factual ledger. It had no scene, focal light, depth, or visual destination.
- The sticky masthead resembled a publication header. Its four equal-width mobile cells amplified the early-web/documentation feeling.
- Featured projects were long editorial rows with the same evidence/stack/trace anatomy. Alternating column spans did not make them feel meaningfully different.
- The archive behaved like a table. Capability content was a dark version of the same ruled list.
- The page moved through hard horizontal boundaries rather than spatial transitions.
- The only scene-level contrast came from switching between paper and near-black sections.

### Typography problems

- Public Sans carried hero names, section titles, project titles, body copy, and navigation. Scale changed, but voice did not.
- Monospace labels appeared throughout the page, making the portfolio feel like a technical magazine or documentation system.
- Source Serif was used only as a small italic accent, so it could not establish an expressive display language.
- Very large, tightly tracked sans-serif type against paper read as modernist editorial design rather than cinematic fantasy.

### Repetition and missing depth

- All four primary projects used the same content sequence and the same three-step trace.
- The archive, skills, résumé, contact index, and facts reused borders and rows as their main organizing device.
- Project traces were useful facts but visually resembled process documentation.
- The paper texture was the only atmospheric layer. There was no foreground/background separation, architectural silhouette, lighting source, fog, or landscape.
- JavaScript added section state, a small line reveal, and email copy, but did not change the sense of exploration.

### Weak interactions and responsive limitations

- Projects only gained a small active rule when scrolled into view.
- Active navigation was functional but visually minimal.
- Mobile was readable, but it was essentially the desktop document stacked into one column.
- The site offered no optional playful interaction connected to Hashem’s technical interests.

### What was preserved

- Every supported project, contribution, technology, internship fact, education fact, language, contact method, and team boundary.
- Semantic landmarks, logical heading hierarchy, the skip link, native links and buttons, keyboard focus, reduced-motion support, print support, and no-JavaScript access to content.
- The verified email, phone, LinkedIn, GitHub, canonical URL, and structured person metadata.
- The email copy enhancement and active-section navigation behavior, rebuilt in the new interaction language.

### What was rebuilt

- The complete page hierarchy, hero, navigation, background system, project system, skills visualization, chronology, about section, contact ending, typography, decorative language, motion, mobile behavior, and JavaScript architecture.
- The favicon, social-preview source, texture, and recruiter-facing résumé experience.

## Phase 2 — Replacement concept

The new concept is **The Developer’s Expedition**. The page treats projects as discovered technical realms connected by one route. The fantasy layer stays outside the professional claims: real project names remain dominant, while atmospheric subtitles such as “The Observatory” or “The Iron Gate” work only as navigation and art direction.

### Experience sequence

1. A cinematic moonlit opening identifies Hashem, his role, Bahrain, strongest languages, and direct actions.
2. Four principal projects become large illustrated locations connected by a winding route.
3. Three secondary projects become smaller discoveries beyond the principal path.
4. Skills become six connected disciplines around a full-stack core.
5. Experience and education become illuminated chapters along one path.
6. About becomes a quieter architectural chamber.
7. Contact becomes a final beacon with four obvious routes.

## Phase 3 — Structural redesign

`index.html` was rewritten rather than adapted. Editorial field ledgers, project rows, archive table, capability route, and two-column résumé tracks were removed. The new structure uses semantic sections and articles but gives each section a different spatial behavior. `resume.html` provides a focused, printable résumé view alongside the verified owner-supplied CV download.

## Phase 4 — Visual implementation

- The atmosphere uses CSS gradients, one tiny procedural SVG grain texture, layered fog, restrained stars, and original inline SVG scenes.
- The hero landscape is an original composition of mountains, a distant tower, eclipse light, path, ruins, and silhouettes.
- Each featured project has a distinct SVG system: observatory/celestial atlas, connected gates, iron request gate, and ownership vault.
- Project illumination changes the global ambient color as each realm becomes current.
- Ornamental diamonds, arched frames, celestial rings, line-work, lanterns, and route paths form one reusable decorative grammar.
- No game art, screenshots, character forms, logos, icons, weapons, UI frames, music, or copied compositions are used.

## Phase 5 — Constellation Debugger

The optional puzzle asks the visitor to connect `Client → API → Authentication → Service → Database`.

- Native buttons support mouse, keyboard, and touch.
- A native `dialog` provides modal focus behavior and Escape dismissal, with an explicit close button.
- Incorrect nodes produce text feedback in a live status region.
- Restart is always available.
- Completion reveals a factual note about the layers represented in Hashem’s project work and adds a subtle beacon-light change.
- No portfolio content is hidden or unlocked by the puzzle.

## Phase 6 — Accessibility design

- Skip link, semantic landmarks, one page `h1`, ordered headings, native `details`, native buttons, native links, and a native modal dialog.
- Visible gold focus outlines, underlined text links, text labels in navigation, and status announcements for copy/puzzle feedback.
- All decorative SVGs are hidden from assistive technology; all project meaning is also present as text.
- Key project purpose and stack remain visible before a technical record is expanded.
- `prefers-reduced-motion` removes atmospheric motion, scroll reveals, smooth scrolling, and animated transitions.
- Forced-colors mode removes atmospheric decoration and retains bordered controls.
- Content remains complete without JavaScript; only navigation collapsing, ambient changes, copy, reveal motion, print shortcut, and the optional puzzle depend on it.

## Phase 7 — Responsive redesign

- At 320–375px, navigation becomes an explicit text-labeled menu, the hero actions stack, the landscape is reframed, projects become vertical discoveries, Arsenal becomes a labeled discipline path, and puzzle nodes become a simple ordered vertical route.
- At 768px, the full navigation returns, project realms alternate across the route, secondary discoveries spread along a staggered path, and chronology gains larger breathing room.
- At 1024px and above, the Arsenal becomes a radial six-discipline map and experience alternates around the illuminated path.
- Decorations simplify or move behind content at narrow widths. No important content relies on hover.

## Phase 8 — Performance decisions

- No framework, build pipeline, image library, canvas, WebGL, video, particle library, or animation dependency.
- One local display-font subset and two existing local body-font files are loaded with `font-display: swap`.
- Inline SVG prevents extra illustration requests and scales without raster assets.
- Motion uses CSS and `IntersectionObserver`; no high-frequency pointer or scroll tracking is used.
- The two fog layers animate only transforms. Mobile and reduced-motion modes reduce the effect load.
- JavaScript remains optional and contains no external dependency.

## Phase 9 — Anti-generic review

- **Does it resemble a newspaper?** No. Paper, grids, ledgers, archive tables, ruled editorial rows, and article-like pacing are gone.
- **Is the fantasy influence clear without copying a game?** Yes. It comes from original architecture, light, atmosphere, celestial mapping, and a journey structure—not borrowed assets or story elements.
- **Are projects the main focus?** Yes. Four large project realms occupy the longest and most visually differentiated sequence.
- **Can a recruiter orient quickly?** Yes. Name, full-stack role, intern role, Bahrain, core languages, work, résumé, and email are all available in the opening.
- **Is the content professional?** Yes. Fantasy language is limited to subtitles and interface framing; all project and biography copy is factual.
- **Are there too many effects?** Effects are restrained to atmosphere, section illumination, and small route feedback. No loader, cursor follower, autoplay, scroll hijack, or continuous particle DOM exists.
- **Does mobile retain the identity?** Yes. The atmosphere, diamond route, arches, typography, project motifs, and puzzle remain, but layouts become deliberately linear.
- **Could it belong to any random developer?** The motifs come directly from Hashem’s seven real projects and his emphasis on authentication, APIs, systems, data, and blockchain.

## Known placeholders

- No verified project repository or live-demo URLs were supplied. Maintainer comments remain beside each featured project.
- The subsequently supplied, verified CV is stored at `assets/resume/Hashem_Alkhaldy_CV.pdf`; every CV action now downloads that exact case-sensitive file. `resume.html` remains available as a recruiter-oriented, printable view.
