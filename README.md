# Hashem Ahmed Alkhaldy — The Developer’s Expedition

A recruitment-focused, static developer portfolio with an original dark-fantasy visual identity. The site uses semantic HTML, modern CSS, original inline SVG, and a small vanilla JavaScript enhancement layer. There is no framework, dependency install, runtime package, or build step.

## Preview locally

From the project root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Pages

- `index.html` — cinematic ten-project journey, Arsenal, chronology, about, contact, CV downloads, and optional puzzle.
- `resume.html` — factual recruiter-oriented résumé view with a direct CV download and print-friendly styles.

## Architecture

```text
.
├── index.html
├── resume.html
├── styles.css
├── script.js
├── DESIGN_NOTES.md
├── REDESIGN_REPORT.md
├── QA_REPORT.md
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── resume/
└── references/
```

The file structure is intentionally compact. A multi-file component architecture would add navigation overhead without a build system or reusable page set.

## Interaction model

- JavaScript collapses the mobile navigation, observes the active section/project, synchronizes the project index and expandable-record state, adds optional reveal motion, copies the email address, and runs the Constellation Debugger.
- All portfolio text, project records, navigation anchors, contact links, and résumé content remain usable without JavaScript.
- Project technical records use native `details`/`summary` elements.
- The puzzle uses a native `dialog` and native buttons.

## Fonts and assets

- Cormorant Garamond is self-hosted for display headings under the SIL Open Font License.
- Public Sans is self-hosted for UI and body copy under the SIL Open Font License.
- All scene and project art is original CSS/SVG geometry authored for this portfolio.
- No external image, game asset, screenshot, music, AI-generated image, video, or icon library is loaded.

Licenses are stored beside the font files in `assets/fonts/`.

## Project inventory

The route is intentionally grouped so ten projects remain scannable:

| Tier | Projects |
| --- | --- |
| Primary featured realms | ClinicFlow; Financial Instruments Platform; Node Dashboard - Benchy; Alsayh |
| Additional major work | Social Media Platform; Localhost Server Project; NFT Marketplace |
| Discovered archive | GraphQL Profile Dashboard; Thunder Payment Channel; Custom JavaScript Mini-Framework |

No project-specific repository or live-demo URL has been supplied for any of the ten projects. Their actions are omitted, and `PROJECT_LINK_SLOT` comments document the safe insertion points.

## Owner-provided CV PDF

The verified PDF is stored at the case-sensitive deployed path:

```text
assets/resume/Hashem_Alkhaldy_CV.pdf
```

Every CV action in the header/mobile menu, hero, experience route, contact routes, footer, and résumé page downloads that file. To replace it later, overwrite the file with a verified owner-provided PDF using the exact same filename. Do not generate, convert, or modify it in the site workflow.

## Add project links

Repository and demo URLs are currently missing for ClinicFlow, Financial Instruments Platform, Node Dashboard - Benchy, Alsayh, Social Media Platform, Localhost Server Project, NFT Marketplace, GraphQL Profile Dashboard, Thunder Payment Channel, and Custom JavaScript Mini-Framework. Add actions only after Hashem supplies and verifies each exact URL.

The verified general GitHub, LinkedIn, email, phone, and canonical portfolio URLs are already connected.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the production branch and the root (`/`) folder.
5. Save.

The canonical and Open Graph URLs currently use `https://hadrawer.github.io/portfolio/`. Update them if the deployment URL changes.

GitHub Pages uses a case-sensitive filesystem. Keep `Hashem_Alkhaldy_CV.pdf` and every link to it in exact agreement.

## Accessibility and performance

- Semantic landmarks, logical headings, skip link, native controls, visible focus, live status feedback, forced-colors support, reduced motion, and print styles.
- No canvas, WebGL, large raster hero, videos, animation library, scroll hijacking, or high-frequency pointer tracking.
- `IntersectionObserver` enhancements fall back to a complete static page.
- Responsive layouts are intentionally reconfigured and checked at 320px, 375px, 768px, 1024px, and 1440px.

See `DESIGN_NOTES.md` for the research synthesis and visual rationale, and `REDESIGN_REPORT.md` for the old-design audit and replacement decisions.
