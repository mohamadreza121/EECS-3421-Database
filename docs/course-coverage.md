# Course coverage and source audit

All seven supplied PDFs were read as text and visually reviewed. Title/outline/action slides are included in the page totals. Page references below use PDF page numbers. Original PDFs and full extracted slide text are excluded from this repository.

## L6 · SQL 1: SQL Part 1: the foundations

Source: DB - L6 SQL Part 1.pdf (31 pages). SHA-256: b49a861bb299d19ab809fb3796df4e05403f3d8bbdd12fc4f9aa1fe04449ed4b.

| Guided lesson | PDF pages |
| --- | --- |
| Think in relations, not loops | 3, 11 |
| Choose, rename, and calculate | 12, 21 |
| Build precise conditions | 22, 23 |
| Read LIKE patterns one symbol at a time | 24, 25 |
| NULL means unknown, not zero | 26, 27 |
| Work through three-valued logic | 28, 30 |

Linked material: 9 reference cards, 4 worked examples, 17 practice items.

## L7 · SQL 2: SQL Part 2: joins & subqueries

Source: DB - L7 - SQL Part 2.pdf (36 pages). SHA-256: c7dbe3925cec7fb074383d3147214289b5ebdb06afd929c82cb04b86e5dfb690.

| Guided lesson | PDF pages |
| --- | --- |
| Join by matching facts | 3, 7 |
| Use two aliases for two roles | 8, 9 |
| Choose the shape of a subquery | 10, 14 |
| IN is a test, not a second output loop | 15, 19 |
| Read EXISTS as “is there a witness?” | 20, 21 |
| ANY needs one witness; ALL allows no counterexample | 22, 24 |
| Count copies before eliminating them | 25, 32 |
| CROSS, NATURAL, and ON name different matching rules | 33, 35 |

Linked material: 17 reference cards, 10 worked examples, 24 practice items.

## L7 · Advanced: Advanced SQL: groups & changes

Source: DB - L7 - SQL Part 3 (Advanced).pdf (49 pages). SHA-256: 4bfa447f7ce9df66d24d8b36be32491891f5002f6bf527efe94aa56be5514524.

| Guided lesson | PDF pages |
| --- | --- |
| Translate extended algebra into SQL | 3, 12 |
| Keep rows with no partner | 13, 16 |
| Aggregate known values, not missing ones | 8, 9, 17, 21 |
| Form the groups before calculating | 22, 25 |
| WHERE filters rows. HAVING filters groups. | 26, 29 |
| Insert by meaning, not remembered column order | 30, 39 |
| Think in selected row sets when modifying data | 40, 48 |

Linked material: 15 reference cards, 8 worked examples, 24 practice items.

## L8 · Constraints: Constraints & triggers

Source: DB - L8 Constraints.pdf (39 pages). SHA-256: c6066ec6e01513f9e5ace39cd136d140bd1c9c513eb330448ae1dbaedea1d3ef.

| Guided lesson | PDF pages |
| --- | --- |
| State what must be unique | 3, 6 |
| Follow the reference in both directions | 7, 17 |
| Put row-local rules in CHECK | 18, 22 |
| Express a global rule as “no violation exists” | 23, 27 |
| Read a trigger as event, condition, action | 28, 33 |
| Keep old and new values in the right roles | 34, 38 |

Linked material: 9 reference cards, 4 worked examples, 20 practice items.

## L9 · Workshop: SQL workshop & exam preparation

Source: DB - L9 - SQL workshop.pdf (3 pages). SHA-256: 98a0178ca6cede31011ae73d0a4be84ff10e07e8b4c2e673581da461a95a7fa0.

| Guided lesson | PDF pages |
| --- | --- |
| Use the course schema as a connected story | 3 |
| Prepare for a written SQL exam | 2, 3 |

Linked material: 0 reference cards, 1 worked examples, 3 practice items.

## L10 · Part 1: Transactions & isolation

Source: DB - L10 - Trans-View-Index Part 1.pdf (26 pages). SHA-256: 707cdb54e656da01adca587b8a9bf0709a4fcabd60404a3d7da4d86a5dc11630.

| Guided lesson | PDF pages |
| --- | --- |
| Know which ACID property solves which problem | 3, 6 |
| Draw the transaction boundary | 7, 8, 16, 17 |
| Trace Sally and Joe one statement at a time | 9, 15 |
| Choose a level by the anomalies it allows | 18, 25 |
| Separate visibility from program order | 12, 25 |

Linked material: 4 reference cards, 1 worked examples, 10 practice items.

## L10 · Part 2: Views, materialization & indexes

Source: DB - L10 - Trans-View-Index Part 2.pdf (22 pages). SHA-256: 1cbf5bb535875b26829c73d5ea3022e8729ee0cdcd30d95ffc0789bfe4d48d81.

| Guided lesson | PDF pages |
| --- | --- |
| Give a reusable query a name | 3, 6 |
| Interpret view writes with an INSTEAD OF trigger | 7, 10 |
| Trade freshness for repeated-query speed | 11, 13 |
| Use an access path, not a new answer | 14, 17 |
| Judge an index against the workload | 18, 21 |

Linked material: 5 reference cards, 4 worked examples, 12 practice items.

## Scope and verification

The workshop p.2 supplies the approximate 45-mark split used for mocks. Scheduling details absent from the supplied slide, including the year and duration, are not invented. No Authorization material is included. Every runnable snippet is executed on a fresh seed in tests. All 30 SQL reference answers are checked against three datasets. Concepts, unsupported standard syntax, and self-assessed rubrics were reviewed against the source pages; official engine documentation is linked in the app for the stated dialect clarifications.
