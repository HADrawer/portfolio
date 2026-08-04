# QA Report — The Developer’s Expedition

Extension review completed 3 August 2026 against `references/QA_CHECKLIST.md`, the updated `references/RESUME_CONTENT.md`, the approved redesign, and the ten-project brief.

## Truthfulness and content

- [x] Identity, Bahrain location, phone, email, role headline, experience, education, dates, languages, technical skills, and all project claims were checked against `references/RESUME_CONTENT.md`.
- [x] All ten supported projects are present: four primary featured realms, three additional major works, and three discovered archive entries.
- [x] ClinicFlow, Financial Instruments Platform, Node Dashboard - Benchy, and Alsayh receive the strongest presentation; every major project states purpose, system focus, supported contribution, and stack.
- [x] The Social Media Platform explicitly separates Hashem’s work from teammate-delivered groups, notifications, and WebSocket chat.
- [x] No metrics, users, clients, team sizes, awards, availability claims, performance gains, production-scale claims, or unsupported outcomes were added.
- [x] No unverified project repository or demo action is shown. Maintainer comments mark the safe insertion points.
- [x] The verified CV is served from `assets/resume/Hashem_Alkhaldy_CV.pdf`; its bytes and SHA-256 match the supplied root PDF.

## Visual and originality review

- [x] The paper palette, editorial grid, field ledger, archive table, publication masthead, ruled project rows, and dossier language were removed.
- [x] The new hero uses an original inline-SVG night landscape, architectural ruin, eclipse light, route, and silhouettes.
- [x] Each primary project has a distinct original explanatory illustration and supported fantasy subtitle; real project names remain dominant.
- [x] Skills use a connected six-discipline Arsenal rather than badges, proficiency bars, a cloud, card grid, or percentages.
- [x] Experience/education follow an illuminated lantern path rather than a newspaper timeline.
- [x] Contact uses an original geometric gateway/beacon without hiding any action.
- [x] No copied game art, UI, iconography, characters, symbols, typefaces, scenes, sound, screenshots, or story elements.
- [x] No generic purple gradient, neon cyberpunk palette, glass cards, bento layout, SaaS hero, terminal, portrait circle, floating technology icons, or framework dependency.
- [x] `DESIGN_NOTES.md` records the research synthesis, original system, typography license, motif mapping, interaction logic, and mobile adaptation.
- [x] `REDESIGN_REPORT.md` records the failed-direction audit, what was preserved, what was rebuilt, all redesign phases, and final anti-generic review.

## HTML and semantics

- [x] `npx --yes html-validate index.html resume.html`: pass with no output.
- [x] Main page: one `h1`, no skipped heading levels, semantic header/nav/main/section/article/address/footer landmarks.
- [x] Résumé page: one `h1`, ordered section headings, semantic experience/education/project articles and contact address.
- [x] All local hash targets resolve. No duplicate/missing target was found in the browser matrix.
- [x] Buttons, links, `details`/`summary`, and `dialog` use native elements.
- [x] Meaningful new project diagrams use accessible titles and descriptions; decorative SVG remains hidden from assistive technology.

## Accessibility

- [x] Axe 4.12.1 at 375px and 1440px, the open mobile puzzle, and `resume.html` at 1024px: zero WCAG A/AA violations.
- [x] Axe marked gradient-backed contrast nodes as “incomplete,” so palette pairs were checked manually. The supported text-palette range is 4.57:1 to 18.62:1 on the darkest three surfaces.
- [x] Muted crimson was lightened to `#BD727C` to keep small text above 4.5:1 on `#18202C`.
- [x] Visible focus uses a 2px gold-bright outline with 4px offset. Automated keyboard testing measured the skip-link outline at 2px.
- [x] Skip link is first in keyboard order and moves focus to `#main-content`.
- [x] Mobile navigation opens with Enter, closes with Escape, and maintains correct `aria-expanded` state.
- [x] Project technical records open with Enter through native `summary` behavior and synchronize `aria-expanded`.
- [x] Constellation Debugger opens by keyboard, initially focuses the explicit close control, completes with Enter, announces status, closes with Escape, and returns focus to the trigger.
- [x] No visible compact control measured below both 40px width and 40px height in the automated matrix; primary controls target 44px or more.
- [x] Forced-colors mode removes nonessential atmosphere and retains control borders.

## Responsive behavior

- [x] Headless Chromium checks at 320, 375, 768, 1024, 1440, and 1920px.
- [x] At every checked width: `documentElement.scrollWidth === innerWidth` and `body.scrollWidth === innerWidth`.
- [x] No horizontal overflow, missing anchors, console errors, page errors, or failed local requests at any checked width.
- [x] 320px: explicit mobile navigation works; puzzle becomes a vertical touch/keyboard sequence and completes.
- [x] 375px: cinematic hero remains readable; actions stack; project realms, Arsenal, experience, and contact retain their identity.
- [x] 768px: the uncrowded Journey menu remains active, project realms alternate, discoveries stagger, and chronology expands.
- [x] 1024px+: Arsenal becomes radial, experience alternates around its route, and contact routes expand across columns.
- [x] 1440–1920px: content width remains controlled and atmospheric scenes scale without stretching body copy.
- [x] Visual screenshots were inspected for hero, projects, Arsenal, experience, about, contact, social preview, and résumé.

## Motion and resilience

- [x] Under `prefers-reduced-motion: reduce`, reveal opacity is `1`, fog is `display: none`, and root scroll behavior is `auto`.
- [x] All animation and transition durations collapse to 0.01ms in reduced-motion mode.
- [x] No scroll hijacking, cursor follower, mouse tracking, canvas loop, autoplay, audio, loading screen, or high-frequency handler.
- [x] With JavaScript disabled: primary navigation is visible, all ten projects render, native technical records remain operable, CV actions remain available, and contact is present.
- [x] `node --check script.js`: pass.
- [x] `git diff --check`: pass.

## Interaction checks

- [x] Active navigation, expedition-index state, and current-project ambient state are progressive `IntersectionObserver` enhancements with no fixed project count.
- [x] Hover, focus-within, and current-viewport state all illuminate projects; mobile does not depend on hover.
- [x] Email copy has a secure-context Clipboard path, fallback copy path, disabled-during-copy state, and live feedback.
- [x] Constellation Debugger supports keyboard, pointer, and touch; provides wrong-step feedback, restart, close, and completion state; content is never locked behind it.
- [x] The résumé page exposes the verified PDF download directly and retains print-friendly CSS without creating an alternate generated CV file.

## Links

- [x] All local page, stylesheet, script, font, SVG, favicon, texture, and CV requests returned successfully in browser testing.
- [x] Email and phone use valid `mailto:` and `tel:` actions.
- [x] GitHub and the canonical GitHub Pages destination returned HTTP 200 during the final remote check.
- [x] LinkedIn blocks automated HEAD requests with HTTP 403; the exact source-of-truth profile URL is preserved as a normal user-facing link.
- [x] No placeholder `href`, empty href, fake download, or invented project link appears.
- [x] Five homepage CV actions and the résumé-page action use the exact PDF path, filename, accessible label, and `download` metadata.

## Print and résumé

- [x] Print rules remove the new project index ornaments, primary SVG scenes, waystation motifs, and interactive puzzle while preserving factual project records.
- [x] The recruiter-oriented résumé page remains printable and now lists all ten projects.

## Performance and delivery

- [x] Static HTML/CSS/JavaScript only; no framework, package runtime, build output, or production dependency.
- [x] The CV PDF is download-on-action and is not part of the normal initial page request set.
- [x] The 126KB social preview is crawler-facing and is not requested during a normal page visit.
- [x] No content raster image, large video, image sequence, canvas, WebGL, particle library, animation library, or icon set.
- [x] One 37KB display-font subset and two existing 15KB body-font files use `font-display: swap`; the critical display and body regular files are preloaded.
- [x] Inline SVG scales without additional illustration requests or layout shift.
- [x] Motion uses CSS transforms and `IntersectionObserver`; no continuous JavaScript animation loop.
- [x] The site works from `python3 -m http.server 8000` and remains GitHub Pages compatible.

## Remaining owner-supplied assets

1. Verified project-specific repository URLs for all ten projects.
2. Verified project-specific live-demo URLs for all ten projects.
