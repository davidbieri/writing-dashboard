# CLAUDE.md

## Project Overview

UAP 5174 Writing Dashboard — a static academic dashboard for Virginia Tech's "UAP 5174: Planning Theory & History" course (Spring 2026). It provides a weekly theory spotlight, a FRED economic data widget, and a daily writing target calculator. Purely front-end: vanilla HTML, CSS, and JavaScript with no frameworks, no build tools, and no package manager.

## Project Structure

```
index.html              # Single-page entry point
master.css              # Global stylesheet (CSS custom properties, Grid, fluid typography)
assets/                 # Weekly illustration images (week0.png–week15.png)
data/
  references.bib        # BibTeX bibliography for course readings
widgets/
  research-spotlight.js # Date-driven weekly spotlight & BibTeX parser
  fred-widget.js        # FRED API integration (mortgage rate data via allorigins.win proxy)
  uap5174-logic.js      # Writing progress countdown to May 8, 2026 deadline
```

## How to Run

Serve with any static file server (needed for `fetch()` to work):

```sh
python3 -m http.server
```

No install, build, or compilation step required. Requires internet access for the FRED API widget.

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

## Testing & Linting

No test framework or linter is configured. Validate changes by opening the dashboard in a browser.

## External Dependencies

- **FRED API** (api.stlouisfed.org) — economic data, accessed via `allorigins.win` CORS proxy
- System fonts (Garamond / Georgia)
