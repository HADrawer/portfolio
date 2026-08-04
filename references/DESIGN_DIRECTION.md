# Design Direction

## Selected Direction

Create a technical editorial portfolio with a restrained Swiss-modernist influence.

The website should feel like a carefully art-directed engineering dossier, not a startup landing page, dashboard template, personal brand influencer page, or AI-generated showcase.

## Why This Direction Fits

Hashem's strongest differentiator is not flashy visual design. It is breadth across:
- Backend development
- Systems programming
- APIs
- Authentication and privacy
- Data interfaces
- Blockchain prototypes

The interface should communicate:
- Structured thinking
- Engineering judgment
- Technical range
- Clarity
- Seriousness
- Curiosity

## Visual Personality

Keywords:
- Editorial
- Precise
- Technical
- Quietly confident
- Human
- Asymmetric
- Evidence-led
- Crafted
- Readable

Avoid:
- Futuristic cyberpunk
- Gamer aesthetics
- Neon-on-black
- Terminal cosplay
- Corporate SaaS
- Generic minimalist template
- Trend collage with no hierarchy

## Suggested Palette

Use a restrained palette, not a generic purple gradient.

Preferred starting point:
- Paper: warm off-white, around #F1EFE8
- Ink: near-black, around #151515
- Secondary ink: muted graphite
- Accent: one intentional signal color, such as cobalt blue, safety orange, or deep red
- Rules and borders: ink with low opacity

The implementer must test contrast and may adjust exact values.

## Typography

Use a deliberate two-family system:
- Primary grotesk or humanist sans for interface and body
- Secondary serif or mono for editorial contrast, metadata, or technical labels

Do not default to Inter, Poppins, Roboto, Montserrat, or Space Grotesk without a documented reason.

Prefer locally available system stacks or responsibly loaded open fonts. Keep loading performance strong.

## Layout

- Use a 12-column desktop grid.
- Use asymmetry with strong alignment.
- Use generous negative space.
- Create visible rhythm using numbered sections, rules, and typography.
- Avoid placing every section inside a rounded card.
- Projects should appear as an editorial index or case-study archive.
- Use full-width sections and disciplined composition.
- Mobile must be intentionally redesigned, not merely stacked.

## Homepage Structure

1. Compact utility header
   - Name or wordmark
   - Work
   - About
   - Resume
   - Contact

2. Hero
   - Hashem Ahmed Alkhaldy
   - Full-Stack Developer
   - A concise role-focused statement
   - Bahrain
   - Availability or target role language that does not invent employment status
   - Primary action: View selected work
   - Secondary action: Download resume or contact

3. Selected work
   - Feature four strongest projects:
     1. Alsayh
     2. Social Media Platform
     3. Localhost Server Project
     4. NFT Marketplace
   - Present as large editorial rows, not uniform cards.
   - Each row should expose the engineering problem, contribution, stack, and evidence.

4. Project archive
   - GraphQL Profile Dashboard
   - Thunder Payment Channel
   - Custom JavaScript Mini-Framework

5. Capability map
   - Organize skills by system layer rather than a cloud of badges:
     - Interface
     - Services and APIs
     - Data
     - Systems
     - Blockchain
     - Delivery tools

6. Experience and education
   - Compact chronological structure.
   - Script Solutions experience.
   - University of Bahrain.
   - Reboot Coding Institute.

7. About
   - Short and grounded.
   - Explain interest in backend systems, authentication, APIs, and maintainable user flows.
   - Do not use generic passion statements.

8. Contact
   - Direct, plain, easy to use.
   - Email, LinkedIn, GitHub.
   - No fake contact form backend.

## Project Case Study Pattern

Every featured project should answer:
- What was being built?
- What engineering problem mattered?
- What did Hashem personally contribute?
- What technologies were used and why?
- What tradeoff or system behavior can be explained from available facts?
- Where can a recruiter view the repository or live demo?

Do not invent missing links. Use visible placeholders in the source data or omit the action.

## Motion

- Use motion as feedback and pacing, not spectacle.
- Keep transitions around 120 to 240 milliseconds.
- Respect prefers-reduced-motion.
- No scroll hijacking.
- No excessive parallax.
- No cursor follower.
- No endless marquee.
- No loading screen.
- No fake command-line typing sequence.
- No animation that delays access to content.

## Texture and Originality

Allowed:
- Fine rules
- Registration marks
- Small section numbers
- Custom SVG diagrams
- A restrained paper grain made with CSS or SVG
- Technical annotations
- Subtle hover state that reveals metadata
- A custom project index interaction

Not allowed:
- Decorative 3D blobs
- Random glowing orbs
- Glass panels
- Generic abstract gradients
- AI-generated stock illustrations
- Oversized pill buttons everywhere
- Repeated icon cards
- Fake analytics
- Fake testimonials
- Fake client logos
- Skill progress bars
- Percentage proficiency claims

## Recruitment Focus

The first screen must answer within seconds:
- Who is this?
- What role does he do?
- Where is he based?
- What has he built?
- How can I inspect the work?
- How can I contact him?

The design must prioritize scanability for recruiters while preserving enough technical depth for engineers.
