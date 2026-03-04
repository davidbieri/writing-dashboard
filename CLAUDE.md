# CLAUDE.md

## Project Overview

UAP 5174 Writing Dashboard — a modular, data-driven educational dashboard for Virginia Tech's "UAP 5174: Planning Theory & History" course (Spring 2026). Hosted on GitHub Pages and embedded via iframe into Canvas LMS. It supports student writing progress, delivers weekly theory spotlights, and provides real-time economic context. Purely front-end: vanilla HTML, CSS, and JavaScript with no frameworks, no build tools, and no package manager. Follows a "Small Pieces Loosely Joined" philosophy for sustainability.

## Project Structure

```
index.html              # Single-page entry point (embedded in Canvas LMS via iframe)
master.css              # Global stylesheet (CSS custom properties, Grid, fluid typography)
assets/                 # 15 custom 1950s atomic-age comic panels for weekly course themes (week0.png–week15.png)
data/
  references.bib        # BibTeX bibliography for course readings
widgets/
  research-spotlight.js # Date-driven weekly spotlight, BibTeX parser & reflection prompts
  fred-widget.js        # FRED API integration (mortgage rate data via allorigins.win proxy)
  uap5174-logic.js      # Writing progress countdown to May 8, 2026 deadline
```

## How to Run

Serve with any static file server (needed for `fetch()` to work):

```sh
python3 -m http.server
```

No install, build, or compilation step required. Requires internet access for the FRED API widget. Production hosting is GitHub Pages.

## Code Style

- 4-space indentation (HTML, CSS, JS)
- Single quotes in JavaScript; double quotes in HTML attributes
- Semicolons at end of JS statements
- camelCase for JS variables/functions; kebab-case for CSS classes and HTML IDs
- `async/await` for async operations
- Template literals with `innerHTML` for widget DOM rendering
- Minimal comments; keep code self-documenting

## Architecture

Three independent JS modules each listen for `DOMContentLoaded` and inject HTML into slot `<div>` elements in `index.html`:

- `#spotlight-slot` ← `research-spotlight.js`
- `#fred-widget-slot` ← `fred-widget.js`
- `#writing-progress-slot` ← `uap5174-logic.js`

### Core Functional Modules

- **Research Spotlight** (`research-spotlight.js`): Auto-date logic syncs with the syllabus schedule (Jan 19 – May 4, 2026) to rotate content every Monday. Includes an async BibTeX fetcher that parses `data/references.bib` for one-click copyable citations, and a reflection generator that produces phronetic prompts tailored to each week's readings.

- **Economic Context** (`fred-widget.js`): Pulls live data from the St. Louis Fed FRED API (e.g., 30-Year Fixed Rate Mortgages) to ground spatial theory in market reality. Uses the `allorigins.win` CORS proxy for static-site compatibility.

- **Writing Tracker** (`uap5174-logic.js`): Calculates a dynamic daily word target based on a 6,000-word semester goal and business days remaining until the May 8, 2026 deadline.

## Visual Identity

1950s American Comic Strip / Atomic Age Science Fiction aesthetic. Heavy black outlines, Ben-Day dot shading, and bold action perspectives applied to abstract planning concepts (e.g., "Central Place Theory", "Authoritarian High Modernism"). Professional modern academic styling in `master.css`.

## Pedagogical Alignment

The dashboard reinforces the Graduate Honor Code and Wellness Principles by automating citation and tracking busywork so students can focus on critical engagement and original thinking. AI-assisted editing is permitted; AI-generated analysis is prohibited — enforced by a built-in "Required Practice" reminder.

## Testing & Linting

No test framework or linter is configured. Validate changes by opening the dashboard in a browser.

## External Dependencies

- **FRED API** (api.stlouisfed.org) — economic data, accessed via `allorigins.win` CORS proxy
- System fonts (Garamond / Georgia)
