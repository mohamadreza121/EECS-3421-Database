# Relational — EECS 3421 Database Study Lab

A personal learning workspace for Reza, with an ivory, forest-green, and sage interface. This is the **template phase**. No lecture PDFs have been incorporated yet, and the demo content is not a claim of course coverage or exam readiness.

## Included now

- Dashboard and seven clearly marked lecture slots awaiting source PDFs.
- A sample lesson with key explanations, a table illustration, a quick check, and saved notes.
- Twelve searchable SQL command cards with syntax, examples, category filters, and bookmarks.
- Three worked examples with revealable reasoning and direct links to the playground.
- A real SQLite playground powered by locally served sql.js WebAssembly in a Web Worker. Supports arbitrary SQLite statements, schema previews, error feedback, and database reset. Queries time out after four seconds; results are capped at 200 rows per statement.
- Five demo practice questions with hints and explanation-based feedback.
- Six flip cards for quick recall.
- A five-question demo exam in timed (5-minute) and untimed modes, with saved answers, automatic timed submission, score, and full answer review.
- A progress journal for actual demo attempts, notes, saved commands, exam history, and JSON export. Lecture progress remains separate from demo progress.
- Global search (Ctrl/Cmd+K), mobile navigation, keyboard access, and reduced-motion support.

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run check
npm test
npm run build
npx serve dist
```

Open the HTTP URL printed by `serve`. Do not open `index.html` directly with `file://`: browser workers and WebAssembly need an HTTP server.

## Project structure

```text
src/index.html       App shell and accessible search dialog
src/app.js           Views, routing, progress, practice, exams, and SQL UI
src/content.js       Demo data and seven lecture placeholders
src/styles.css       Responsive design
src/sql-worker.js    SQLite execution, result cap, and errors
scripts/build.mjs    Copies source and sql.js runtime to dist/
tests/               Real SQLite worker/data validation
.openai/hosting.json Site identity and static output configuration
```

The app is static and does not need a backend or secret keys. SQL and learning progress remain in the browser. Progress is stored in localStorage, specific to a browser and origin; SQL database mutations last for the current loaded page. Editor text is saved. Do not use the sandbox for sensitive data.

The schema panel describes the original sample database; it is not a live schema inspector after DDL edits. Reset returns it to the original data. A timed-out query also resets the database. SQLite syntax may differ from the course's SQL dialect; this will be clarified from the lectures.

## Content phase: seven lectures

Supply the PDFs in the project conversation. For each lecture, verify its title, topics, notation, and SQL dialect; then add source/page references, explanations, multiple worked examples, common mistakes, practice, and exam questions. Replace the waiting states with actual content and derive course progress from completed lessons. Keep generic demo activity distinct from lecture coverage. Original PDFs should not be committed publicly without authorization.

## Deployment

`npm run build` produces a portable `dist/` directory suitable for static hosting. The Sites deployment additionally uses `.openai/hosting.json`. Hash-based routes work without a server-side rewrite. The GitHub repository contains the editable source; publishing a new commit to GitHub does not by itself update the separately hosted Site.

sql.js is MIT licensed. The build includes its license alongside the local runtime assets. Optional Google Fonts have system fallbacks.
