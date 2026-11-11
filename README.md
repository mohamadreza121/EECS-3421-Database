# Relational — EECS 3421 Database Study Lab

A source-backed personal study app for Reza. All **seven uploaded PDFs (206 pages)** were reviewed and converted into connected explanations, a SQL field guide, practice, and written mock papers. The original ivory/forest-green design remains, with responsive navigation and readable lesson layouts.

## Learning material

- **39 guided lessons** across the original L6–L10 source labels, with PDF page references, explanatory paragraphs, runnable examples, recall prompts, common exam traps, completion checks, and personal notes.
- **59 command/reference cards**, searchable by concept and filterable by source/category, with bookmarks, syntax, examples, and explicit course-vs-SQLite labels.
- **32 worked examples**, with revealable reasoning and one-click opening in a fresh lab.
- **110 practice questions:** 70 multiple-choice concept checks, 30 executable SELECT challenges, and 10 written/design tasks with self-assessment rubrics. Filter by source, format, difficulty, and prior mistakes.
- **62 recall cards**, filterable by source, with self-marked known/not-yet-known states.
- **3 mock papers × 45 marks**, following the supplied workshop's approximate 10-concept/35-coding mark split. Each paper has five 2-mark concept items and seven 5-mark coding tasks. Solutions unlock after submission; concept scoring is automatic, coding scoring is explicitly self-assessed against one-point rubric criteria. The 60-minute timer is a study setting, not a claim about the official exam duration.
- A transaction schedule tool that declares its assumptions and contrasts read-committed, dirty-read, stable-snapshot, and serial-equivalent outcomes.
- Saved notes, drafts, reading progress, bookmarks, mistakes, attempts, and rubric reviews. JSON export and restore support moving progress between browsers.

## Course grounding

The source files cover SQL selection/projection/patterns/NULL, joins/subqueries/quantifiers/bags/sets, extended algebra/outer joins/aggregation/DML, constraints/assertions/triggers, the workshop, transactions/isolation, and views/materialization/indexes/tuning.

The original PDFs are linked to the owner's Library and are **not committed to this public repository**. `src/data/lectures.js` records filenames, page counts, and SHA-256 hashes. All lesson and exercise source references use 1-based PDF page numbers. See [docs/course-coverage.md](docs/course-coverage.md).

The workshop announces SQL through the point before Authorization, approximately 45 marks (10 concepts and 35 coding), a written closed-book exam, and November 16 during regular lecture time. It does not state a year or duration on that slide. The app directs the user to current course announcements for scheduling authority. Mocks are authored study exercises, not official past papers or predictions.

## SQL engine and grading

The browser runs locally served **sql.js/SQLite WebAssembly** inside Web Workers. The lab uses the course Beers/Bars/Drinkers/Likes/Sells/Frequents schema, plus small workspace and R/S counterexample tables. `Bars.bar` normalizes the workshop's key name; optional license preserves the attribute shown in L6. Full row data is an authored practice fixture, not a reconstruction of an unspecified complete lecture database.

The SELECT checker executes reference and submitted queries against **three independent fresh datasets**, comparing output column positions, NULL values, numeric values (with tolerance), row multiplicities, and row order when explicitly requested. Aliases and equivalent SQL formulations are accepted. Tests reject representative hardcoding, duplicate, missing-tie, and modification answers. Finite checks do not prove correctness on all possible databases and the UI says so.

The sandbox supports modifications, constraints, row triggers, views, and transaction undo. It does not simulate multi-client server isolation or crash durability. Database mutations last until page reload/reset; editor text is saved. Result sets cap at 200 rows and lab queries stop after four seconds. Practice checks have a separate eight-second cap and 500-row answer cap.

Course notation that SQLite cannot run is retained for paper study: quantified ANY/ALL comparisons, EXCEPT ALL/INTERSECT ALL, assertions, subquery CHECK forms, transition-row aliases/statement triggers, isolation-setting syntax, and materialized-view commands. Any runnable alternatives are labeled and their limits stated. The app also clarifies the scalar-empty-result slide, outer-join shorthand, SQLite bare-grouping permissiveness, transaction boundaries, and implementation-dependent repeatable-read behavior.

## Run

Node.js 20+:

```bash
npm ci
npm run check
npm test
npm run build
npx serve dist
```

Use the printed HTTP URL; `file://` does not support the worker/WASM setup. The app needs no backend, secret keys, or account to use its browser-local study functions. Optional Google Fonts have system fallbacks.

## Source structure

```text
src/app.js              Views, hash routing, interactions, schedules, and exam UI
src/study-state.js      Validated progress storage and separate auto/self scores
src/data/               Sources, lessons, commands, examples, questions, exams, cards, database fixtures
src/content.js          Data exports
src/sql-worker.js       Playground execution
src/grade-worker.js     Isolated multi-dataset SELECT checks
src/styles.css          Original visual system and course-content responsive layouts
scripts/build.mjs       Build to dist/ with local SQLite runtime and license
tests/course.test.mjs   Source references, runnable examples, actual grading, state, and marks
```

`npm run build` emits portable static `dist/`. Hash routes need no server rewrites. `.openai/hosting.json` retains the existing Site identity. GitHub is the editable source; a GitHub commit alone does not automatically update the separately hosted Site.

sql.js is MIT licensed; its license is copied beside the runtime in the build. The app stores learning progress only in this browser/origin. Export a backup before clearing browser data.
