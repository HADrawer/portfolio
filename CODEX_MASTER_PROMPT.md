# Master Task: Design and Build a Distinctive Developer Portfolio

You are acting as a senior digital art director, UX designer, content strategist, and front-end engineer.

Build a production-ready personal portfolio for **Hashem Ahmed Alkhaldy**, a Bahrain-based full-stack developer and software developer intern seeking junior full-stack, backend, or software developer roles.

The website must be built with:

- Semantic HTML5
- Modern CSS3
- Vanilla JavaScript
- No frameworks
- No UI libraries
- No Tailwind
- No Bootstrap
- No React
- No build dependency required for the deployed site

The output must be deployable as a static website, including GitHub Pages.

## Mandatory First Step

Before writing implementation code:

1. Read `AGENTS.md`.
2. Read every file referenced by `AGENTS.md`.
3. Invoke the `portfolio-design-research` skill.
4. Research current, high-quality portfolio and editorial website references if browsing is available.
5. Produce `DESIGN_NOTES.md`.
6. Stop and critique the proposed direction for generic AI patterns.
7. Revise the direction if it resembles a common generated template.
8. Only then implement the site.

Do not skip the research and design-rationale phase.

## Core Design Objective

Create a **technical editorial portfolio with restrained Swiss-modernist influence**.

It should feel like a carefully art-directed engineering dossier. It must not look like:
- A startup landing page
- A SaaS dashboard
- A premade portfolio template
- A Web3 promo site
- A gaming page
- A generic AI-generated website

The visual identity should communicate:
- Structured thinking
- Engineering judgment
- Technical range
- Clarity
- Quiet confidence
- Human authorship

## Anti-Generic Requirements

The following patterns are prohibited unless there is a strong, written design justification:

- Purple or blue gradient hero backgrounds
- Glowing gradient blobs
- Glassmorphism
- Bento-box card layouts
- Rounded cards around every section
- Floating framework icons
- Generic centered hero composition
- Large text saying only "Hi, I'm Hashem"
- Fake terminal typing
- Cursor followers
- Scroll hijacking
- Excessive parallax
- Infinite marquees
- Skill progress bars
- Percentage skill levels
- Fake statistics
- Fake testimonials
- Fake clients
- Fake awards
- Generic AI illustrations
- Random 3D objects
- Pill-shaped controls everywhere
- Inter, Poppins, Montserrat, Roboto, or Space Grotesk as an unexplained default
- A dark theme simply because the subject is a developer

Do not solve originality by adding more effects. Solve it through composition, typography, rhythm, content hierarchy, and project storytelling.

## Research Standard

When browsing is available:

- Study 8 to 12 references.
- Use reputable curated sources such as Awwwards, SiteInspire, Typewolf, Godly, One Page Love, and Codrops.
- Select at least five references that are genuinely relevant.
- Borrow principles, never a finished design.
- Use different references for typography, grid, project presentation, interaction, and mobile behavior.
- Record the source URL and a short observation in `DESIGN_NOTES.md`.
- Record what must not be copied.
- Do not download or reuse copyrighted assets.
- Do not claim to have browsed when browsing was unavailable.

Your final layout must not be traceable to one reference.

## Content Source and Truthfulness

Use `references/RESUME_CONTENT.md` as the only source of truth for:
- Name
- Contact details
- Experience
- Education
- Skills
- Projects
- Dates
- Responsibilities
- Contributions

Never invent:
- User counts
- Revenue
- Conversion rates
- Performance improvements
- Clients
- Awards
- Team sizes
- Production scale
- Project results
- Repository URLs
- Live-demo URLs
- Employment status
- Availability dates

When a useful link is missing, omit it or use a clearly labeled placeholder in the source code for Hashem to replace.

Do not present a teammate's contribution as Hashem's work.

## Audience

Primary:
- Recruiters scanning quickly
- Hiring managers
- Software engineers reviewing technical credibility

The first viewport should make these facts easy to understand:
- His name
- His role
- His location
- His technical focus
- His strongest work
- How to contact him

## Required Information Architecture

### 1. Header

Create a compact, intentional header with:
- Name or custom typographic wordmark
- Work
- About
- Resume
- Contact

Do not use a large pill-shaped floating navbar.

### 2. Hero

Include:
- Hashem Ahmed Alkhaldy
- Full-Stack Developer
- Bahrain
- A short and specific value statement focused on APIs, backend systems, authentication, and clear user flows
- Primary action to inspect selected work
- Secondary contact or resume action

Avoid generic claims such as:
- "I create amazing digital experiences"
- "Passionate developer"
- "Turning ideas into reality"
- "Building the future"

Write grounded copy based on the resume.

### 3. Selected Work

Feature these four projects:

1. Alsayh
2. Social Media Platform
3. Localhost Server Project
4. NFT Marketplace

Do not present them as four identical cards.

Use an editorial project index or a varied case-study composition. Each project must expose:
- Project purpose
- Engineering problem
- Hashem's contribution
- Technologies
- A short evidence-based explanation
- Repository or demo action only when a real URL exists

Use hierarchy and art direction to make the projects feel distinct while preserving one system.

### 4. Project Archive

Include:
- GraphQL Profile Dashboard
- Thunder Payment Channel
- Custom JavaScript Mini-Framework

The archive may be a compact table, index, or typographic list.

### 5. Capability Map

Do not use a logo cloud.

Group skills by system layer:
- Interface
- Services and APIs
- Data
- Systems
- Blockchain
- Delivery tools

Create a meaningful visual relationship between these layers. A custom inline SVG system map is allowed if it is accessible and responsive.

### 6. Experience and Education

Include:
- Script Solutions internship
- University of Bahrain
- Reboot Coding Institute

Keep this section concise and chronological.

### 7. About

Write a short, factual description of Hashem's interests and working style based on the resume:
- Backend systems
- Authentication and authorization
- APIs
- Maintainable code
- Clear user flows
- Practical project delivery

Do not invent a personal story.

### 8. Contact

Include:
- Email
- LinkedIn
- GitHub

Make contact information easy to copy and use.

Do not create a fake contact form backend. A `mailto:` action is acceptable.

## Art Direction

Start from the direction in `references/DESIGN_DIRECTION.md`.

Suggested visual behavior:
- Warm paper-like background
- Near-black typography
- One carefully chosen signal color
- Thin rules
- Strong numbering
- Asymmetric 12-column grid
- Editorial line lengths
- Clear baseline rhythm
- Deliberate negative space
- A restrained combination of sans, serif, or mono type
- Subtle CSS or SVG texture
- Custom technical annotations

The exact system must be justified in `DESIGN_NOTES.md`.

## Typography

Create a clear type hierarchy.

Requirements:
- Body copy must remain highly readable.
- Metadata can use a mono or narrow face sparingly.
- Large text must not cause mobile overflow.
- Use fluid sizing responsibly.
- Limit the number of font files and weights.
- Provide sensible fallback stacks.
- Avoid trendy type choices without a reason.
- Do not make every heading uppercase.

## Motion and Interaction

Use motion only for:
- Feedback
- Hierarchy
- Revealing useful metadata
- Section transitions
- Project-index interaction

Requirements:
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking.
- Avoid a loading screen.
- Avoid animation that delays reading.
- Keep typical transitions around 120 to 240 milliseconds.
- All interactions must work with keyboard input.
- The site must remain useful without JavaScript.

Potential original interaction:
- A project index where focus or hover reveals a project-specific technical note, architecture fragment, or inline SVG diagram.
- On mobile, the same content must be visible without hover.

## Responsive Behavior

Design mobile intentionally.

Do not simply collapse a desktop grid.

Requirements:
- No horizontal overflow at 320px.
- Comfortable tap targets.
- Readable project summaries.
- Navigation remains usable.
- Important project evidence appears before secondary decoration.
- Complex diagrams simplify or become stacked explanatory lists.
- Test at 320, 375, 768, 1024, and 1440 pixels.

## Accessibility

Include:
- Semantic landmarks
- Skip link
- Correct heading hierarchy
- Visible focus states
- Sufficient contrast
- Reduced-motion support
- Keyboard-accessible interactions
- Accurate accessible names
- Decorative SVGs hidden from assistive technology
- No meaning conveyed by color alone

## Performance

- Keep the page lightweight.
- Do not add a library for a small interaction.
- Optimize all local assets.
- Avoid unnecessary webfont weights.
- Prevent layout shift.
- Use progressive enhancement.
- The initial content must render without JavaScript.

## SEO and Metadata

Add:
- Accurate page title
- Meta description
- Canonical placeholder that is easy to update
- Open Graph metadata using only available assets
- Favicon or a simple original monogram
- Structured data for a Person only when every field is factual
- Sensible social-preview fallback

## Files to Produce

At minimum:

```text
/
├── index.html
├── styles.css
├── script.js
├── README.md
├── DESIGN_NOTES.md
├── AGENTS.md
├── assets/
│   ├── icons/
│   ├── images/
│   └── resume/
├── references/
└── skills/
```

You may create project detail pages when the content supports them. Do not create empty pages.

## README Requirements

Document:
- How to run locally
- How to deploy to GitHub Pages
- Where to add the resume PDF
- Where to add missing project links
- How design tokens are organized
- Which parts can be edited safely
- Browser support
- Accessibility considerations

## Final Verification

Before declaring completion:

1. Review every claim against `references/RESUME_CONTENT.md`.
2. Run the `portfolio-static-build` skill.
3. Complete `references/QA_CHECKLIST.md`.
4. Check keyboard navigation.
5. Check reduced motion.
6. Check responsiveness at all required widths.
7. Check for horizontal overflow.
8. Check all links.
9. Check the console.
10. Check that the site remains readable without JavaScript.
11. Search the finished UI for generic AI patterns.
12. Remove any decoration that does not support the content.
13. Summarize:
    - Files created
    - Design direction
    - Research influences
    - Accessibility checks
    - Known placeholders
    - How to preview the result

Do not finish with a generic template. Continue refining until the portfolio feels designed specifically around Hashem's actual engineering work.
