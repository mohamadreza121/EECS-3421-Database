export const lessons = [
  {
    "id": "what-sql",
    "module": "sql1",
    "title": "Think in relations, not loops",
    "pages": [
      3,
      11
    ],
    "idea": "SQL says which answer you want. The DBMS chooses how to obtain it.",
    "paragraphs": [
      "A relation is a table, an attribute is a column, and a tuple is a row. In Beers(name, manf), each row describes one beer and its manufacturer. A query itself returns another table.",
      "Read a single-table query in this logical order: FROM chooses the input, WHERE keeps qualifying rows, and SELECT constructs the output columns. This is a reasoning model, not a promise that the engine physically executes three separate steps.",
      "For the query below, inspect each Beers row. Keep it only when manf equals Anheuser-Busch, then output name. The three qualifying rows in the practice data are Bud, Bud Lite, and Michelob.",
      "Unlike a Java loop, you do not specify array indices or update an accumulator. Query optimization is the DBMS choosing an execution strategy that preserves the requested result."
    ],
    "sql": "SELECT name\nFROM Beers\nWHERE manf = 'Anheuser-Busch';",
    "trap": "SELECT names columns; WHERE tests rows. Reversing those roles leads to a different answer.",
    "recall": "Explain FROM → WHERE → SELECT without reading the query aloud.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "projection",
    "module": "sql1",
    "title": "Choose, rename, and calculate",
    "pages": [
      12,
      21
    ],
    "idea": "The SELECT list can contain columns, arithmetic, aliases, and constants.",
    "paragraphs": [
      "SELECT * keeps every column of the input table. SELECT name keeps just that attribute. AS changes a result-column label; it does not rename the stored column or update the base table.",
      "price * 114 computes a new value for each qualifying row. AS priceInYen labels that calculated result. A NULL price still produces NULL after multiplication.",
      "A quoted constant is repeated for each qualifying row. This is useful when combining information from separate sources: add a source label so each result row retains its origin.",
      "To place an apostrophe inside an SQL string literal, double it: Joe followed by two apostrophes and s. Use straight single quotes for strings. The curly quotation marks printed on slides should be normalized when typing SQL."
    ],
    "sql": "SELECT bar, beer, price * 114 AS priceInYen,\n       'course example' AS source\nFROM Sells\nWHERE bar = 'Joe''s Bar';",
    "trap": "An alias labels the result. It does not change the stored data.",
    "recall": "What differs between name AS beer and the string literal 'beer'?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "conditions",
    "module": "sql1",
    "title": "Build precise conditions",
    "pages": [
      22,
      23
    ],
    "idea": "A condition is a test on a row. Parentheses make the intended logic explicit.",
    "paragraphs": [
      "Use = for equality and <> for inequality. The other lecture comparisons are <, >, <=, and >=. SQL equality is not Java assignment, and SQL uses AND, OR, and NOT instead of Java’s &&, ",
      "",
      ", and !.",
      "To find Joe’s Bud price, both bar and beer must match. Using OR would also include every other beer at Joe’s and every Bud listing at other bars.",
      "AND binds more tightly than OR. For “Bud or Miller, but only at Joe’s,” put the beer alternatives inside parentheses before adding the bar restriction.",
      "Before running a query, describe one row that should pass and one that should fail. This catches misplaced OR conditions much faster than guessing from a large output."
    ],
    "sql": "SELECT beer, price\nFROM Sells\nWHERE bar = 'Joe''s Bar'\n  AND (beer = 'Bud' OR beer = 'Miller');",
    "trap": "bar = Joe AND beer = Bud OR beer = Miller admits Miller at every bar.",
    "recall": "Which rows would appear if AND were replaced by OR?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "patterns",
    "module": "sql1",
    "title": "Read LIKE patterns one symbol at a time",
    "pages": [
      24,
      25
    ],
    "idea": "% matches any sequence; _ matches exactly one character.",
    "paragraphs": [
      "A LIKE pattern is a quoted string. A percent sign can represent zero, one, or many characters. An underscore represents exactly one character, not an arbitrary number of digits.",
      "The lecture’s phone example is typed as %555-____ with four adjacent underscores and no spaces. It asks for a suffix containing 555-, followed by exactly four characters.",
      "The practice data returns Sally, Fred, and Eve for that pattern. Bob’s 222 exchange fails. Alice’s NULL phone gives UNKNOWN and is not kept.",
      "NOT LIKE negates the pattern test, but it does not automatically include NULLs. To include missing phones, add OR phone IS NULL explicitly. Case sensitivity depends on the database/collation; do not build exam reasoning on a particular case-folding behavior."
    ],
    "sql": "SELECT name, phone\nFROM Drinkers\nWHERE phone LIKE '%555-____';",
    "trap": "Four underscores mean four characters. Adding spaces changes the pattern.",
    "recall": "Explain why %555-% accepts more strings than %555-____.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "null",
    "module": "sql1",
    "title": "NULL means unknown, not zero",
    "pages": [
      26,
      27
    ],
    "idea": "Ordinary comparisons with NULL produce UNKNOWN. WHERE keeps only TRUE.",
    "paragraphs": [
      "NULL can mean a value is missing or not applicable. It is different from 0, an empty string, and the text 'NULL'. In the seed, The Pub sells Bud but its price is unknown.",
      "If price is NULL, both price < 2 and price >= 2 are UNKNOWN. Their OR remains UNKNOWN. A WHERE clause removes that row even though the condition looks exhaustive for ordinary numbers.",
      "Use IS NULL and IS NOT NULL to test missingness. price = NULL is never a true equality test; NULL = NULL also does not become TRUE through ordinary equality.",
      "A query can explicitly retain the unknown price using OR price IS NULL. Always decide whether an unknown value should be included, excluded, or handled separately before writing your predicate."
    ],
    "sql": "SELECT bar, beer, price\nFROM Sells\nWHERE price IS NULL;",
    "trap": "Adding the two comparisons price < 2 OR price >= 2 does not include NULL.",
    "recall": "What does WHERE UNKNOWN do to a row?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "three-valued",
    "module": "sql1",
    "title": "Work through three-valued logic",
    "pages": [
      28,
      30
    ],
    "idea": "UNKNOWN survives many logical operations, but FALSE AND UNKNOWN is FALSE.",
    "paragraphs": [
      "The lecture uses TRUE=1, FALSE=0, UNKNOWN=½ as a memory aid. AND takes the smaller truth value; OR takes the larger; NOT maps x to 1−x. These are conceptual truth values, not literal SQL numeric values to store.",
      "TRUE AND UNKNOWN is UNKNOWN. FALSE AND UNKNOWN is FALSE. TRUE OR UNKNOWN is TRUE, and FALSE OR UNKNOWN is UNKNOWN. NOT UNKNOWN is still UNKNOWN.",
      "For TRUE AND (FALSE OR NOT UNKNOWN), evaluate the innermost operation first. NOT UNKNOWN is UNKNOWN; FALSE OR UNKNOWN is UNKNOWN; TRUE AND UNKNOWN is UNKNOWN.",
      "The excluded-middle rule p OR NOT p is not guaranteed TRUE when p is UNKNOWN. This explains why seemingly complementary price predicates can both fail to select a NULL row."
    ],
    "sql": "SELECT NULL < 2 AS less_than,\n       NULL >= 2 AS at_least,\n       (NULL < 2 OR NULL >= 2) AS combined;",
    "trap": "UNKNOWN is not the same as FALSE, even though WHERE rejects both.",
    "recall": "Evaluate FALSE OR (TRUE AND UNKNOWN).",
    "table": {
      "headers": [
        "p",
        "q",
        "p AND q",
        "p OR q"
      ],
      "rows": [
        [
          "TRUE",
          "UNKNOWN",
          "UNKNOWN",
          "TRUE"
        ],
        [
          "FALSE",
          "UNKNOWN",
          "FALSE",
          "UNKNOWN"
        ],
        [
          "UNKNOWN",
          "UNKNOWN",
          "UNKNOWN",
          "UNKNOWN"
        ]
      ]
    },
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "joins",
    "module": "sql2",
    "title": "Join by matching facts",
    "pages": [
      3,
      7
    ],
    "idea": "A join creates matching row pairs. It can multiply rows.",
    "paragraphs": [
      "Likes tells you what a person likes; Frequents tells you where that person goes. To find beers liked by visitors to Joe’s, first connect the tables on drinker, then restrict Frequents.bar.",
      "The lecture’s comma-separated FROM represents a Cartesian product followed by a WHERE filter. An explicit JOIN ... ON separates the matching rule from the additional row filter, which often makes the query easier to read.",
      "Sally and Fred both frequent Joe’s and both like Bud. Bob also frequents Joe’s and likes Bud. The raw query therefore returns Bud three times. If the question asks for distinct beer names, add DISTINCT.",
      "Qualify an ambiguous attribute with its table or alias. Likes.drinker and Frequents.drinker are separate input columns even when a join makes their values equal."
    ],
    "sql": "SELECT l.beer\nFROM Likes AS l\nJOIN Frequents AS f ON f.drinker = l.drinker\nWHERE f.bar = 'Joe''s Bar';",
    "trap": "A matching condition omitted from a multi-table query creates unwanted combinations.",
    "recall": "Why can one beer appear more than once?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "self-join",
    "module": "sql2",
    "title": "Use two aliases for two roles",
    "pages": [
      8,
      9
    ],
    "idea": "A self-join compares different rows from the same table.",
    "paragraphs": [
      "To find beers made by the same manufacturer, one Beers row plays the first-beer role and another plays the second-beer role. Alias the copies b1 and b2 so each comparison is unambiguous.",
      "b1.manf = b2.manf requires a common manufacturer. b1.name < b2.name excludes equal-name self-pairs and keeps only one orientation of each pair.",
      "For Bud, Bud Lite, and Michelob, the output has three unordered pairs: Bud/Bud Lite, Bud/Michelob, and Bud Lite/Michelob. Replacing < with <> would produce six ordered pairs.",
      "The manufacturer of Mystery is NULL. Ordinary equality does not match that unknown manufacturer to anything, including itself. Treat NULL behavior separately if a different business rule is requested."
    ],
    "sql": "SELECT b1.name AS first_beer, b2.name AS second_beer\nFROM Beers b1 JOIN Beers b2\n  ON b1.manf = b2.manf\nWHERE b1.name < b2.name;",
    "trap": "Using <> removes self-pairs but still produces both orientations.",
    "recall": "For four beers by one manufacturer, how many unordered pairs exist? Answer: 6.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "derived-scalar",
    "module": "sql2",
    "title": "Choose the shape of a subquery",
    "pages": [
      10,
      14
    ],
    "idea": "A derived table returns a relation. A scalar subquery supplies one value.",
    "paragraphs": [
      "A subquery in FROM acts as a temporary input table. Give it an alias and join or filter it like any other relation. A subquery in a scalar comparison must have a single result column and at most one result row for portable SQL.",
      "To find bars selling Miller at Joe’s Bud price, first obtain Joe’s Bud price as a scalar. The composite key on Sells(bar,beer) makes that lookup unambiguous. Then compare each Miller listing to it.",
      "The seed has Joe’s Bud at 2.50, so Sue’s Miller at 2.50 qualifies. NULL prices cannot satisfy ordinary equality.",
      "Correction to Part 2 p.12: a zero-row scalar subquery normally yields NULL, not an error. Multiple rows are an error in PostgreSQL/standard-style reasoning; SQLite instead uses the first row. Do not use SQLite’s permissiveness to justify an ambiguous exam query."
    ],
    "sql": "SELECT bar\nFROM Sells\nWHERE beer = 'Miller'\n  AND price = (SELECT price FROM Sells\n               WHERE bar = 'Joe''s Bar' AND beer = 'Bud');",
    "trap": "Do not compare to a multirow subquery with = when you need IN.",
    "recall": "What happens if Joe does not sell Bud?",
    "table": null,
    "note": "Scalar cardinality clarification: PostgreSQL value expressions §4.2.11; SQLite expression documentation. See the source notes page.",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "in-vs-join",
    "module": "sql2",
    "title": "IN is a test, not a second output loop",
    "pages": [
      15,
      19
    ],
    "idea": "IN checks membership once for each outer row; a join emits every matching pair.",
    "paragraphs": [
      "In R={(1,2),(3,4)} and S={(2,5),(2,6)}, R.b=2 matches two S rows. A join outputs a=1 twice. The IN query tests whether 2 occurs at all and outputs that R row’s a only once.",
      "Duplicates inside the IN subquery do not multiply the outer row. This does not mean IN makes the whole answer distinct: if R itself had duplicate qualifying rows, those copies would still be returned.",
      "Use IN when your question is “does this row belong to that set?” Use a join when you need attributes from the matching rows or deliberately want all combinations.",
      "NOT IN has a NULL trap. If the right side contains NULL and no equal known value exists, the result can be UNKNOWN rather than TRUE. A correlated NOT EXISTS is often clearer when expressing absence."
    ],
    "sql": "SELECT a FROM R WHERE b IN (SELECT b FROM S);\nSELECT R.a FROM R JOIN S ON R.b = S.b;",
    "trap": "Adding DISTINCT to a join may change intended multiplicities elsewhere. First understand the requested answer.",
    "recall": "Predict both result multisets before running the two statements.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "exists",
    "module": "sql2",
    "title": "Read EXISTS as “is there a witness?”",
    "pages": [
      20,
      21
    ],
    "idea": "EXISTS cares whether at least one row exists, not what SELECT returns.",
    "paragraphs": [
      "A correlated subquery refers to the current row of an outer query. For each candidate beer b1, ask whether another beer b2 has the same manufacturer and a different name.",
      "NOT EXISTS keeps b1 only when no such competing row exists. The inner b2.name <> b1.name matters: without it, every known-manufacturer beer matches itself and is wrongly excluded.",
      "SELECT 1 and SELECT * are equally suitable for an EXISTS test. Even SELECT NULL counts as an existing row; EXISTS does not inspect the projected value.",
      "The seed’s Mystery row is a useful edge case. Its NULL manufacturer cannot equal another manufacturer by ordinary =, so the literal lecture query retains it. If “unique manufacturer” should require a known manufacturer, add b1.manf IS NOT NULL."
    ],
    "sql": "SELECT b1.name\nFROM Beers b1\nWHERE NOT EXISTS (\n  SELECT 1 FROM Beers b2\n  WHERE b2.manf = b1.manf AND b2.name <> b1.name\n);",
    "trap": "EXISTS(SELECT NULL ...) can be TRUE. It is a row-existence test.",
    "recall": "Which reference makes the inner query correlated?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "any-all",
    "module": "sql2",
    "title": "ANY needs one witness; ALL allows no counterexample",
    "pages": [
      22,
      24
    ],
    "idea": "Quantified comparisons have empty-set and NULL edge cases.",
    "paragraphs": [
      "x > ANY(S) asks whether at least one comparison is TRUE. x > ALL(S) asks whether every comparison is TRUE. With known nonempty values {2,4}, 3 > ANY is TRUE while 3 > ALL is FALSE.",
      "On an empty right side, ANY is FALSE and ALL is TRUE. The universal statement is vacuously true because there is no violating row.",
      "If no comparison is TRUE for ANY but one is UNKNOWN, the result is UNKNOWN. If no comparison is FALSE for ALL but one is UNKNOWN, the result is UNKNOWN. This is why ALL is not always interchangeable with comparison to MAX.",
      "SQLite does not implement quantified ANY/ALL comparison syntax. The runnable version below deliberately means “highest known price” by filtering NULLs. It is a useful task variant, not a universally equivalent rewrite of the lecture’s unfiltered ALL query."
    ],
    "sql": "SELECT bar, beer, price\nFROM Sells\nWHERE price = (SELECT MAX(price) FROM Sells);",
    "trap": "x >= ALL(S) and x = MAX(S) differ on empty sets and NULLs.",
    "recall": "Explain why ALL(empty set) is TRUE.",
    "table": null,
    "note": "",
    "courseSQL": "SELECT beer FROM Sells\nWHERE price >= ALL (SELECT price FROM Sells);",
    "extra": []
  },
  {
    "id": "bag-set",
    "module": "sql2",
    "title": "Count copies before eliminating them",
    "pages": [
      25,
      32
    ],
    "idea": "SELECT uses bag semantics; UNION, INTERSECT, and EXCEPT remove duplicates by default.",
    "paragraphs": [
      "A bag is a multiset: a row can occur several times. Projection can produce duplicates even when the stored rows have keys, because projecting away a key hides the differences.",
      "SELECT DISTINCT removes duplicate projected rows. UNION combines compatible results then removes duplicates. UNION ALL retains every copy from both sides.",
      "INTERSECT keeps distinct rows common to both inputs; EXCEPT keeps distinct rows in the left input but not the right. Both inputs must return the same number of columns with corresponding compatible meanings.",
      "The lecture’s EXCEPT ALL subtracts multiplicities: if a drinker appears three times on the left and twice on the right, one copy remains. SQLite has UNION ALL but not EXCEPT ALL or INTERSECT ALL. Study the counts on paper for those operators."
    ],
    "sql": "SELECT drinker FROM Frequents\nEXCEPT\nSELECT drinker FROM Likes;",
    "trap": "EXCEPT is directional; swapping inputs changes the question.",
    "recall": "If A has x three times and B has x twice, how many x values are in UNION, UNION ALL, INTERSECT ALL, and EXCEPT ALL? Answers: 1, 5, 2, 1.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "join-types",
    "module": "sql2",
    "title": "CROSS, NATURAL, and ON name different matching rules",
    "pages": [
      33,
      35
    ],
    "idea": "Use explicit ON conditions when you want the relationship to stay visible.",
    "paragraphs": [
      "CROSS JOIN forms every pair: if R has m rows and S has n, the product has m×n rows before any filter. It is not automatically a mistake, but it must match the task.",
      "NATURAL JOIN matches all equally named columns and emits a single copy of each shared join column. Likes and Sells share beer, so their natural join relates people to sale listings of beers they like.",
      "JOIN ... ON can match differently named attributes, such as Drinkers.name and Frequents.drinker. A theta join permits a general Boolean condition, not just equality.",
      "NATURAL JOIN is sensitive to schema changes: adding another shared column changes its join rule. For exam work, name the shared columns you intend and explain whether duplicate columns remain in the output."
    ],
    "sql": "SELECT d.name, f.bar\nFROM Drinkers d JOIN Frequents f\n  ON d.name = f.drinker;",
    "trap": "NATURAL JOIN matches every shared name, not just the first one.",
    "recall": "Which column links Likes NATURAL JOIN Sells?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "algebra",
    "module": "advanced",
    "title": "Translate extended algebra into SQL",
    "pages": [
      3,
      12
    ],
    "idea": "δ removes duplicates, τ sorts, and γ groups and aggregates.",
    "paragraphs": [
      "The extended algebra makes three operations explicit. δ(R) retains one copy of each distinct tuple. SQL’s SELECT DISTINCT is the familiar counterpart.",
      "τ with an attribute list creates a sequence ordered by those attributes. SQL uses ORDER BY; specify ASC or DESC and a tie-breaker when a predictable complete order matters.",
      "γ separates grouping attributes from aggregate expressions. γ_A,B,AVG(C)→X forms one group per distinct (A,B), then calculates one mean C named X for that group.",
      "For rows (1,2,3), (4,5,6), and (1,2,5), the two groups are (1,2) and (4,5). Their means are 4 and 6. Grouping does not choose one arbitrary original row to represent all of its attributes."
    ],
    "sql": "SELECT beer, AVG(price) AS mean_price\nFROM Sells\nGROUP BY beer\nORDER BY mean_price DESC, beer;",
    "trap": "An unsorted SQL result is not guaranteed to preserve insertion order.",
    "recall": "Map DISTINCT, ORDER BY, and GROUP BY to δ, τ, and γ.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "outer-joins",
    "module": "advanced",
    "title": "Keep rows with no partner",
    "pages": [
      13,
      16
    ],
    "idea": "An outer join preserves designated unmatched rows and pads the other side with NULL.",
    "paragraphs": [
      "A left join preserves every left row. A right join preserves every right row. A full join preserves unmatched rows from both sides as well as all matched pairs. The lecture calls unmatched rows dangling tuples.",
      "To list every bar, start from Bars and left join Sells on bar. Empty Bar has no listing, so its beer and price are NULL. A bar with several listings still generates several result rows.",
      "A right-table filter in WHERE can remove the NULL-padded rows and accidentally turn the result into an inner-join-like answer. Put a condition such as s.beer=Bud into ON when you want all bars but only matching Bud listings.",
      "The slide’s shorthand “OUTER JOIN defaults to FULL” is not portable SQL syntax. Write LEFT, RIGHT, or FULL explicitly. The browser’s SQLite build supports explicit LEFT/RIGHT/FULL joins; use explicit ON to make your intent clear."
    ],
    "sql": "SELECT b.bar, s.price\nFROM Bars b LEFT JOIN Sells s\n  ON b.bar = s.bar AND s.beer = 'Bud';",
    "trap": "WHERE s.beer = Bud would discard Empty Bar after padding.",
    "recall": "Where should the Bud restriction go if every bar must remain?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "aggregates",
    "module": "advanced",
    "title": "Aggregate known values, not missing ones",
    "pages": [
      8,
      9,
      17,
      21
    ],
    "idea": "COUNT(*) counts rows; COUNT(column) counts non-NULL values.",
    "paragraphs": [
      "SUM, AVG, MIN, and MAX operate on known values of a column. COUNT(price) counts known prices. COUNT(*) counts every input row, including a row whose price is NULL.",
      "Bud has three listings in the practice data: 2.50, 3.00, and NULL. Thus COUNT(*)=3, COUNT(price)=2, SUM(price)=5.50, and AVG(price)=2.75. Dividing the sum by all three rows would be wrong.",
      "COUNT(DISTINCT price) counts distinct non-NULL prices. For Heineken’s two 3.50 listings it is 1, while COUNT(price) is 2.",
      "With no non-NULL input values, SUM/AVG/MIN/MAX return NULL. COUNT returns 0. A query without GROUP BY still produces its one aggregate result row for an empty filtered input."
    ],
    "sql": "SELECT COUNT(*) AS listings, COUNT(price) AS known,\n       AVG(price) AS average, COUNT(DISTINCT price) AS prices\nFROM Sells WHERE beer = 'Bud';",
    "trap": "AVG does not silently replace NULL with zero.",
    "recall": "Why is COUNT(*) larger than COUNT(price) for Bud?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "grouping",
    "module": "advanced",
    "title": "Form the groups before calculating",
    "pages": [
      22,
      25
    ],
    "idea": "GROUP BY produces one result row per distinct combination of grouping values.",
    "paragraphs": [
      "To find an average per beer, group by beer and apply AVG to price inside each beer group. To find an average Bud price per drinker, first join Frequents to Sells on bar and restrict beer, then group by drinker.",
      "The joined rows determine the weighting. If a person can appear multiple times for the same relevant listing, duplicates can distort an average. The practice schema’s composite keys prevent duplicate visit facts.",
      "For course-safe SQL, each selected expression must be aggregated or depend only on grouping attributes. SELECT bar,beer,AVG(price) GROUP BY beer has no single bar to report for a beer sold at many bars.",
      "SQLite accepts some bare ungrouped columns. That permissiveness is not an exam rule. Follow the lecture restriction even when the playground runs an under-specified query."
    ],
    "sql": "SELECT f.drinker, AVG(s.price) AS bud_average\nFROM Frequents f JOIN Sells s ON f.bar = s.bar\nWHERE s.beer = 'Bud'\nGROUP BY f.drinker;",
    "trap": "Grouping by beer and bar gives a different grain than grouping only by beer.",
    "recall": "What exactly does one result row represent?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "having",
    "module": "advanced",
    "title": "WHERE filters rows. HAVING filters groups.",
    "pages": [
      26,
      29
    ],
    "idea": "Put each predicate at the stage where its required values exist.",
    "paragraphs": [
      "WHERE price>3 removes cheap rows before aggregation. HAVING AVG(price)>3 retains groups whose computed mean exceeds 3. These are different questions.",
      "For beers offered at three or more bars, GROUP BY beer then HAVING COUNT(*)>=3. In the seed, Bud qualifies. A NULL price still counts as a listing because COUNT(*) counts rows.",
      "The lecture combines an aggregate condition with a subquery: keep a beer if it has at least three listings OR its manufacturer is Pete’s. The subquery identifies qualifying beer names; it does not need to be grouped with the outer query.",
      "An unaggregated outer attribute in HAVING should be a grouping attribute. Do not invent a single price for a group that contains several prices."
    ],
    "sql": "SELECT beer, AVG(price) AS average\nFROM Sells\nGROUP BY beer\nHAVING COUNT(*) >= 3\n   OR beer IN (SELECT name FROM Beers WHERE manf = 'Pete''s');",
    "trap": "An aggregate condition such as COUNT(*) >= 3 does not belong in WHERE.",
    "recall": "Explain how WHERE price IS NOT NULL changes COUNT(*) before HAVING.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "insert-default",
    "module": "advanced",
    "title": "Insert by meaning, not remembered column order",
    "pages": [
      30,
      39
    ],
    "idea": "An explicit target-column list makes each inserted value’s destination visible.",
    "paragraphs": [
      "INSERT ... VALUES adds rows. With a target list, VALUES follows that list’s order, not the table’s original order. The lecture reverses Likes columns to demonstrate this.",
      "An omitted attribute receives its declared default, otherwise NULL if permitted. An explicitly inserted NULL does not ask for the default. A NOT NULL constraint may reject the omission.",
      "INSERT ... SELECT inserts every result row of a query. PotBuddies is a convenient target for the drinkers who share a bar with Sally. Use DISTINCT if the desired target is one name per person.",
      "The practice schema already contains Sally/Bud and enforces a composite key, so blindly replaying that lecture insertion would fail. The runnable example uses a new Eve/Bud pair instead. Samples are adapted to the seed, not silently claimed to be the original database state."
    ],
    "sql": "INSERT INTO Likes(beer,drinker) VALUES('Bud','Eve');\nSELECT * FROM Likes WHERE drinker = 'Eve';",
    "trap": "Omitting a value and explicitly supplying NULL are different when a default exists.",
    "recall": "Why might INSERT SELECT need DISTINCT?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "delete-update",
    "module": "advanced",
    "title": "Think in selected row sets when modifying data",
    "pages": [
      40,
      48
    ],
    "idea": "UPDATE changes selected rows; DELETE removes selected rows. Missing WHERE applies to all rows.",
    "paragraphs": [
      "For an update, first identify the qualifying row set, then assign the requested values. Setting high prices to 4 affects only prices greater than 4; a NULL price does not pass that condition.",
      "DELETE FROM Likes WHERE drinker=Sally AND beer=Bud removes one fact. DELETE FROM Likes removes every fact but keeps the table itself. DROP TABLE removes the table definition too.",
      "The lecture’s conceptual deletion model marks all qualifying rows, then deletes the marked set. In its same-manufacturer example, both Bud and Bud Lite are removed when both qualified in the original state. Do not reason as if the exam algorithm visits rows and changes later decisions arbitrarily.",
      "Real engines can have restrictions or different behavior for self-referential DML. To make the playground demonstration unambiguous, materialize a target set first when reproducing that lecture thought experiment. Also account for foreign keys before deleting referenced Beers rows."
    ],
    "sql": "UPDATE Sells SET price = 4.00 WHERE price > 4.00;\nSELECT bar,beer,price FROM Sells ORDER BY bar,beer;",
    "trap": "A missing WHERE clause is a valid all-row operation, not a syntax error.",
    "recall": "What remains after DELETE FROM Likes: an empty table or no table?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "keys",
    "module": "constraints",
    "title": "State what must be unique",
    "pages": [
      3,
      6
    ],
    "idea": "A composite key makes the combination unique, not each component independently.",
    "paragraphs": [
      "A constraint is a rule the DBMS enforces on stored data. A primary key identifies rows; a UNIQUE constraint also prevents duplicate key values under the database’s NULL rules. A table has one primary-key constraint, which can contain several columns.",
      "In Sells, (bar,beer) is a composite key. A bar can sell several beers, and a beer can be sold at several bars, but the same bar–beer pair appears only once.",
      "Declare a multiattribute key as a table-level PRIMARY KEY(bar,beer). Declaring PRIMARY KEY separately on bar and beer does not express the same rule and is not a valid way to create two primary keys.",
      "For course reasoning, primary-key columns cannot be NULL. The sandbox explicitly adds NOT NULL to text/composite key columns to avoid SQLite’s historical permissiveness in ordinary rowid tables."
    ],
    "sql": "CREATE TABLE DemoSales(\n  bar TEXT NOT NULL,\n  beer TEXT NOT NULL,\n  price REAL,\n  PRIMARY KEY(bar,beer)\n);",
    "trap": "UNIQUE(bar,beer) allows the same bar with a different beer.",
    "recall": "Can Joe sell both Bud and Miller when (bar,beer) is the key?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "foreign-keys",
    "module": "constraints",
    "title": "Follow the reference in both directions",
    "pages": [
      7,
      17
    ],
    "idea": "A child reference must match a parent key; parent changes need a policy.",
    "paragraphs": [
      "Sells.beer references Beers.name. Inserting a sale for a nonexistent beer can create a dangling reference and is rejected. Updating a sale’s beer can create the same problem.",
      "Deleting a parent beer can strand existing sales. The lecture contrasts rejection, CASCADE, and SET NULL. A cascade delete removes dependent child rows; a cascade update copies the new parent key into the child references.",
      "ON DELETE and ON UPDATE are independent policies. ON DELETE SET NULL with ON UPDATE CASCADE means deletion clears the reference, while renaming the parent propagates the new name.",
      "SET NULL requires the child columns to permit NULL. It is not suitable for the sandbox’s NOT NULL Sells.beer, so the example creates a separate nullable child. For composite foreign keys, the components refer to one parent key tuple, not independent parent rows."
    ],
    "sql": "CREATE TABLE DemoOffers(\n  beer TEXT REFERENCES Beers(name)\n    ON DELETE SET NULL ON UPDATE CASCADE,\n  price REAL\n);",
    "trap": "CASCADE does not invent missing parent rows during a child insert.",
    "recall": "What happens if SET NULL targets a NOT NULL child column?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "checks",
    "module": "constraints",
    "title": "Put row-local rules in CHECK",
    "pages": [
      18,
      22
    ],
    "idea": "Attribute checks test one value; tuple checks can relate several values in a row.",
    "paragraphs": [
      "CHECK(price<=5) expresses an upper bound on a value. A tuple-level rule can allow a high price only at Joe’s: bar=Joe OR price<=5. This implication fails only for a non-Joe bar with a known price greater than 5.",
      "CHECK does not normally reject UNKNOWN. A NULL price can satisfy the constraint in the sense that it does not make the expression FALSE. Add NOT NULL if a price must always be supplied.",
      "The lecture’s subquery-based CHECK is a teaching form for referring to other relations. SQLite forbids subqueries in CHECK, so use a foreign key for membership in Beers rather than pasting that slide into the sandbox.",
      "A local check does not replace a global rule. If a row-local check refers conceptually to a parent table, changing only that parent might require separate enforcement; foreign keys are designed to enforce the cross-table dependency."
    ],
    "sql": "CREATE TABLE DemoPrices(\n  bar TEXT NOT NULL, beer TEXT, price REAL,\n  CHECK(bar='Joe''s Bar' OR price<=5)\n);",
    "trap": "CHECK(price>0) alone does not imply price IS NOT NULL.",
    "recall": "Which combination enforces a required positive price? NOT NULL plus CHECK(price>0).",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "assertions",
    "module": "constraints",
    "title": "Express a global rule as “no violation exists”",
    "pages": [
      23,
      27
    ],
    "idea": "An assertion can relate whole tables or aggregated groups.",
    "paragraphs": [
      "NoRipoffBars requires that no bar’s average price exceed 5. First write a query that finds violating bars; then wrap it in NOT EXISTS. This is the same counterexample pattern used in universal queries.",
      "FewBar compares COUNT(*) over Bars and Drinkers. An insert into Bars or deletion from Drinkers can violate it. An insertion into Drinkers cannot turn a satisfied count inequality into a violation.",
      "In the lecture model, the assertion must remain true after relevant changes. A DBMS can avoid rechecking changes that cannot affect it. This differs from deciding only whether one incoming tuple is acceptable.",
      "SQLite does not implement CREATE ASSERTION. Run the diagnostic SELECT to see whether violations exist; that query observes the rule but does not enforce it. Full enforcement with triggers would need every relevant insert, update, and delete path."
    ],
    "sql": "SELECT bar,AVG(price) AS average\nFROM Sells\nGROUP BY bar\nHAVING AVG(price)>5;",
    "trap": "A query that finds violations is not automatically a stored constraint.",
    "recall": "Which operations can violate COUNT(Bars)<=COUNT(Drinkers)?",
    "table": null,
    "note": "",
    "courseSQL": "CREATE ASSERTION NoRipoffBars CHECK (\n  NOT EXISTS (SELECT bar FROM Sells\n              GROUP BY bar HAVING AVG(price)>5)\n);",
    "extra": []
  },
  {
    "id": "trigger-eca",
    "module": "constraints",
    "title": "Read a trigger as event, condition, action",
    "pages": [
      28,
      33
    ],
    "idea": "The event starts the rule; the condition decides whether its action runs.",
    "paragraphs": [
      "A trigger is an event–condition–action rule. In BeerTrig, the event is an insertion into Sells, the condition is an unknown beer, and the action adds the beer to Beers with a missing manufacturer.",
      "BEFORE runs before the triggering operation; AFTER runs after it. UPDATE OF price narrows an update event to the named column. INSTEAD OF replaces an operation, especially when interpreting a write to a view.",
      "A row-level trigger fires for each affected row. A statement-level trigger fires once for the statement, independent of the affected-row count. The lecture uses FOR EACH ROW to distinguish the row form.",
      "The lecture’s REFERENCING aliases are retained for paper exercises. SQLite uses NEW.column and OLD.column and supports row-level triggers only, even if FOR EACH ROW is omitted. Do not apply the lecture’s omission-means-statement convention to SQLite."
    ],
    "sql": "CREATE TRIGGER DemoBeerTrig\nBEFORE INSERT ON Sells\nFOR EACH ROW\nWHEN NOT EXISTS(SELECT 1 FROM Beers WHERE name=NEW.beer)\nBEGIN\n  INSERT INTO Beers(name) VALUES(NEW.beer);\nEND;",
    "trap": "Creating a trigger defines future behavior; it does not replay earlier modifications.",
    "recall": "Label the event, condition, and action in the example.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "old-new",
    "module": "constraints",
    "title": "Keep old and new values in the right roles",
    "pages": [
      34,
      38
    ],
    "idea": "INSERT has NEW, DELETE has OLD, and UPDATE has both.",
    "paragraphs": [
      "For an update-trigger condition, OLD is the value before the row change and NEW is the proposed or resulting row according to trigger timing. A price increase greater than 1 is NEW.price>OLD.price+1.",
      "AFTER UPDATE OF price makes the trigger relevant to price updates. Its WHEN condition excludes decreases, increases of exactly 1, and comparisons made UNKNOWN by a NULL price.",
      "The lecture’s action inserts the bar into RipoffBars. That table is an event log in the sandbox: repeated qualifying events can add the same bar again. If the requirement is a unique list, impose uniqueness and design duplicate handling deliberately.",
      "An action can contain several modification statements in BEGIN ... END. The old/new row roles must remain consistent through each statement; reversing them would log decreases instead of increases."
    ],
    "sql": "CREATE TRIGGER DemoPriceTrig\nAFTER UPDATE OF price ON Sells\nFOR EACH ROW WHEN NEW.price>OLD.price+1\nBEGIN\n  INSERT INTO RipoffBars(bar) VALUES(NEW.bar);\nEND;",
    "trap": "“More than $1” uses >, not >=.",
    "recall": "For 2.50→3.50, does the trigger fire? No. For 2.50→3.51? Yes.",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "workshop-schema",
    "module": "workshop",
    "title": "Use the course schema as a connected story",
    "pages": [
      3
    ],
    "idea": "Ask which facts each table contributes before deciding how to join it.",
    "paragraphs": [
      "Beers describes manufacturers. Bars describes places. Drinkers describes people. Likes connects a person and a beer; Frequents connects a person and a bar; Sells connects a bar and a beer with a price.",
      "“Can obtain a liked beer at a visited bar” needs all three relationships: the person likes the beer, visits the bar, and that bar sells that same beer. A join missing any one connection admits unrelated facts.",
      "L6 uses Bars(name,addr,license), while the workshop uses Bars(bar,addr). The lab normalizes the place key to Bars.bar and retains optional license. Other table and attribute names match the running schema.",
      "The slides specify the schema and illustrative rows, not one complete dataset. All lab rows are authored practice fixtures. Seed data intentionally contains an empty bar, an inactive drinker, NULL values, repeated manufacturer values, and tied prices. A query must solve the general question, not hardcode those rows."
    ],
    "sql": "SELECT DISTINCT l.drinker,l.beer,s.bar\nFROM Likes l\nJOIN Frequents f ON f.drinker=l.drinker\nJOIN Sells s ON s.bar=f.bar AND s.beer=l.beer;",
    "trap": "Joining three tables needs enough conditions to connect all the intended roles.",
    "recall": "Which table do you need to add a manufacturer restriction?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "exam-method",
    "module": "workshop",
    "title": "Prepare for a written SQL exam",
    "pages": [
      2,
      3
    ],
    "idea": "Practise constructing answers without running them before checking your result.",
    "paragraphs": [
      "The supplied workshop announces an in-person, paper-based, closed-book midterm on November 16 during regular lecture time in the usual room. It asks students to bring photo identification. Check the current course announcements for any later changes; the slide does not state an exam duration or year.",
      "The announced scope starts at SQL and ends just before Authorization. The approximate mark split is 10 for concepts/terminology/definitions and 35 for SQL coding, about 45 total. The app’s three mock papers follow that mark split but are newly authored practice, not past or predicted exams.",
      "For each coding question: state the output grain; choose the tables; draw the matching relationships; place row filters in WHERE; decide grouping and HAVING; then check duplicate and NULL behavior. Test a counterexample such as an empty relation or an extra matching join row.",
      "Use the paper-first exam mode: solutions and executable checks stay hidden until submission. The optional timer is a study choice, not the lecturer’s stated duration. Code/written rubrics are self-assessed; automatic multiple-choice marks are kept separate."
    ],
    "sql": "",
    "trap": "A high score on repeated seed data is not evidence that a query generalizes.",
    "recall": "Can you write a join, a grouped query, and a NOT EXISTS query from memory?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "acid",
    "module": "transactions",
    "title": "Know which ACID property solves which problem",
    "pages": [
      3,
      6
    ],
    "idea": "Atomicity is all-or-nothing; isolation controls interactions between transactions.",
    "paragraphs": [
      "A transaction is a group of queries and/or modifications treated as one unit. Two ATM withdrawals illustrate why individually correct statements can interact badly when they read and overwrite the same account value.",
      "Atomicity means the transaction completes as a whole or its work is undone. Consistency means integrity rules are preserved. Isolation governs how concurrent transactions can observe and affect one another. Durability means committed effects survive the relevant system failures.",
      "Do not attribute every anomaly to atomicity. Two individually atomic withdrawals can still lose an update if their interaction is not controlled. Conversely, isolation alone does not validate an incorrect debit amount or a missing business constraint.",
      "The browser database is held in memory and is reset on reload. COMMIT is meaningful inside that sandbox, but the app does not demonstrate crash durability or a multi-client database server."
    ],
    "sql": "",
    "trap": "Atomic and isolated are different guarantees.",
    "recall": "Which property protects against a transaction applying only half of a transfer?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "commit-rollback",
    "module": "transactions",
    "title": "Draw the transaction boundary",
    "pages": [
      7,
      8,
      16,
      17
    ],
    "idea": "COMMIT finishes with retained changes; ROLLBACK finishes by discarding uncommitted changes.",
    "paragraphs": [
      "In the playground, BEGIN starts an explicit transaction. UPDATE changes rows inside it. ROLLBACK restores the earlier state for that transaction; COMMIT keeps the changes in the currently loaded in-memory database.",
      "Without an explicit transaction, engines often autocommit individual statements. A later ROLLBACK cannot undo a statement that was already committed. The lecture’s rollback story must be read with an active uncommitted transaction boundary.",
      "An error does not have one universal transaction-wide effect across all SQL engines. Some abort a statement, some mark a transaction failed, and some error classes trigger rollback. After an error, understand the engine’s state and issue ROLLBACK when needed.",
      "The example changes Joe’s Bud price, reads the temporary value, rolls back, and reads the restored value. It demonstrates atomic undo in one connection; it does not simulate another user reading concurrently."
    ],
    "sql": "BEGIN;\nUPDATE Sells SET price=9 WHERE bar='Joe''s Bar' AND beer='Bud';\nSELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';\nROLLBACK;\nSELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';",
    "trap": "COMMIT in this browser does not persist the database across reload.",
    "recall": "Can ROLLBACK undo a previously committed transaction?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "interleavings",
    "module": "transactions",
    "title": "Trace Sally and Joe one statement at a time",
    "pages": [
      9,
      15
    ],
    "idea": "A result can be inconsistent across two reads even when each read is individually correct.",
    "paragraphs": [
      "Use the lecture’s dedicated scenario: Joe initially sells Bud at 2.50 and Miller at 3.00, and no other beer. Sally reads MAX then MIN. Joe deletes both old listings then inserts Heineken at 3.50.",
      "In schedule max,delete,insert,min, Sally’s first answer is 3.00 and her second is 3.50. The displayed maximum is below the displayed minimum because the two answers describe different database states.",
      "Every program’s internal order must be preserved: max before min and delete before insert. Interleavings reorder statements from different programs, not statements within the same program arbitrarily.",
      "A sufficiently isolated transaction can make Sally’s reads consistent. Merely writing BEGIN does not promise the strongest isolation level in every DBMS. Use the chosen level and the schedule assumptions when answering."
    ],
    "sql": "",
    "trap": "The main lab seed has extra Joe listings. Use this scenario’s stated initial rows for the paper trace.",
    "recall": "Under max,min,delete,insert, what does Sally see? MAX=3.00, MIN=2.50.",
    "table": {
      "headers": [
        "Step",
        "Joe’s available prices",
        "Sally’s result"
      ],
      "rows": [
        [
          "max",
          "2.50, 3.00",
          "MAX=3.00"
        ],
        [
          "delete",
          "none",
          "—"
        ],
        [
          "insert",
          "3.50",
          "—"
        ],
        [
          "min",
          "3.50",
          "MIN=3.50"
        ]
      ]
    },
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "isolation",
    "module": "transactions",
    "title": "Choose a level by the anomalies it allows",
    "pages": [
      18,
      25
    ],
    "idea": "Read committed avoids dirty reads but does not promise the same answer on every statement.",
    "paragraphs": [
      "READ UNCOMMITTED can permit dirty reads of changes that later roll back. READ COMMITTED permits only committed data but can see a different committed state on a later statement.",
      "In the standard minimum model, REPEATABLE READ prevents changed previously read rows from reappearing differently, while phantom rows may still appear for a repeated search. SERIALIZABLE requires an outcome equivalent to a serial ordering and rules out serialization anomalies.",
      "The lecture uses a simplified growing-result intuition for repeatable read. Actual implementations can be stronger: PostgreSQL repeatable read uses a stable snapshot and prevents phantoms. State whether an answer uses the lecture/standard model or a named DBMS.",
      "SET TRANSACTION ISOLATION LEVEL ... is course notation for a server DBMS. This SQLite sandbox does not expose four independently testable server isolation modes. The interactive schedule tool is a reasoning aid, not a real concurrency engine."
    ],
    "sql": "",
    "trap": "Read committed is not the same as “all reads in this transaction use one snapshot.”",
    "recall": "Which weakest standard level rules out dirty reads? READ COMMITTED.",
    "table": {
      "headers": [
        "Standard minimum level",
        "Dirty read",
        "Changed reread",
        "Phantom"
      ],
      "rows": [
        [
          "Read uncommitted",
          "May occur",
          "May occur",
          "May occur"
        ],
        [
          "Read committed",
          "Prevented",
          "May occur",
          "May occur"
        ],
        [
          "Repeatable read",
          "Prevented",
          "Prevented",
          "May occur"
        ],
        [
          "Serializable",
          "Prevented",
          "Prevented",
          "Prevented"
        ]
      ]
    },
    "note": "",
    "courseSQL": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;",
    "extra": []
  },
  {
    "id": "schedule-method",
    "module": "transactions",
    "title": "Separate visibility from program order",
    "pages": [
      12,
      25
    ],
    "idea": "First list committed states. Then decide which of them each read may observe.",
    "paragraphs": [
      "To solve a schedule question, write each transaction’s ordered actions and mark BEGIN, COMMIT, and ROLLBACK. Track the data after each change and distinguish a writer’s private state from committed shared state.",
      "For read committed, a read cannot justify its answer using uncommitted changes. It can nevertheless observe a new committed state at a later read. For read uncommitted, a later rollback does not erase the fact that a reader already consumed a dirty value.",
      "For serializable reasoning, compare the outcome with running Sally entirely before Joe or Joe entirely before Sally. An impossible mixture of those complete outcomes is a warning that the schedule is not serializable under the stated transactions.",
      "The lecture’s “isolation is a personal choice” emphasizes the reader’s requested guarantees. Do not assume a writer choosing serializable automatically upgrades all other readers. Concrete visibility is also constrained by the engine’s concurrency implementation."
    ],
    "sql": "",
    "trap": "A ROLLBACK at the end does not make a prior dirty read acceptable.",
    "recall": "Why must you mark COMMIT explicitly when explaining READ COMMITTED?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "virtual-views",
    "module": "views",
    "title": "Give a reusable query a name",
    "pages": [
      3,
      6
    ],
    "idea": "A virtual view stores a query definition, not a frozen copy of its output.",
    "paragraphs": [
      "A view is defined from base tables and possibly other views. CREATE VIEW CanDrink AS ... gives a name to the person–beer combinations obtainable at frequented bars.",
      "Query CanDrink like a table, for example SELECT beer WHERE drinker=Sally. The DBMS resolves its definition against current base data, so changing the base rows changes the subsequent view result.",
      "One person can obtain the same beer at several bars. The lecture’s view without DISTINCT retains those copies. Add DISTINCT if the view’s intended semantics are unique person–beer facts.",
      "A view can simplify repeated joins and expose only selected attributes. Creating a virtual view is not the same as creating an index or automatically caching an expensive result."
    ],
    "sql": "CREATE VIEW CanDrink AS\nSELECT f.drinker,s.beer\nFROM Frequents f JOIN Sells s ON f.bar=s.bar;\nSELECT beer FROM CanDrink WHERE drinker='Sally';",
    "trap": "A virtual view does not freeze the data at creation time.",
    "recall": "Why might Sally see Bud more than once through CanDrink?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "synergy",
    "module": "views",
    "title": "Interpret view writes with an INSTEAD OF trigger",
    "pages": [
      7,
      10
    ],
    "idea": "A joined view row can correspond to several base facts, so a write needs an explicit meaning.",
    "paragraphs": [
      "Synergy consists of person–beer–bar triples where the person likes the beer, frequents the bar, and the bar sells that beer. All three matching conditions are required.",
      "Inserting one triple does not specify an existing sale price. The lecture interprets it as inserting a Likes pair, a Sells pair with NULL price, and a Frequents pair. An INSTEAD OF INSERT trigger translates that view write into base-table operations.",
      "Some DBMSs automatically update simple unambiguous views. Joined views such as Synergy generally need a rule or trigger. SQLite views are read-only unless an INSTEAD OF trigger supplies the write behavior.",
      "Under the sandbox’s keys, inserting already existing pairs can fail. In an exercise, use genuinely new pairs or deliberately define conflict behavior. Do not silently use ignore-on-conflict when the paper task specifies ordinary inserts."
    ],
    "sql": "SELECT l.drinker,l.beer,s.bar\nFROM Likes l\nJOIN Frequents f ON l.drinker=f.drinker\nJOIN Sells s ON s.bar=f.bar AND s.beer=l.beer;",
    "trap": "A view tuple alone cannot invent a known Sells.price.",
    "recall": "Why is NULL used for the inserted sale price in the lecture interpretation?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "materialized",
    "module": "views",
    "title": "Trade freshness for repeated-query speed",
    "pages": [
      11,
      13
    ],
    "idea": "A materialized view stores results and needs a maintenance strategy.",
    "paragraphs": [
      "A materialized view actually stores the query result. Subsequent base-table changes do not magically update that stored copy unless the DBMS maintains it or a refresh is requested.",
      "The course mailing-list example refreshes four times per day. A newly enrolled student can miss a mailing before the next refresh. The issue is freshness, not whether the original SELECT was syntactically correct.",
      "A data warehouse may reconstruct summaries overnight because refreshing after every sale is too expensive. Choosing a refresh interval balances update cost, query speed, and acceptable staleness.",
      "SQLite has no CREATE MATERIALIZED VIEW command. The runnable table snapshot below demonstrates stored-result staleness, but it is an ordinary table, not a native materialized view with a refresh facility."
    ],
    "sql": "CREATE TABLE KnownPriceSnapshot AS\nSELECT bar,beer,price FROM Sells WHERE price IS NOT NULL;\nSELECT * FROM KnownPriceSnapshot;",
    "trap": "An index is not a materialized query result, and a virtual view is not a snapshot.",
    "recall": "What event would make a materialized mailing list stale?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "indexes",
    "module": "views",
    "title": "Use an access path, not a new answer",
    "pages": [
      14,
      17
    ],
    "idea": "An index speeds locating rows for suitable predicates; it should not change the logical answer.",
    "paragraphs": [
      "An index is an auxiliary data structure on one or more attributes. The lecture mentions hash tables and disk-page-sized balanced B-tree nodes. It is not a new relation returned to the user.",
      "BeerInd on Beers(manf) can locate Pete’s beers. SellInd on Sells(bar,beer) can then locate the selected bar–beer listing. The logical query is unchanged; the optimizer decides which access paths to use.",
      "A composite index’s attribute order matters for common B-tree access patterns. (bar,beer) is a natural fit for bar=... AND beer=..., and often for a bar-prefix lookup. Do not assume it is equally effective for an arbitrary beer-only filter.",
      "The sandbox already has an index supporting the Sells composite primary key, so adding the identical index can be redundant. EXPLAIN QUERY PLAN is provided as a lab aid, not as additional required lecture syntax. Small seed timings are not a meaningful performance benchmark."
    ],
    "sql": "CREATE INDEX BeerInd ON Beers(manf);\nEXPLAIN QUERY PLAN\nSELECT name FROM Beers WHERE manf='Pete''s';",
    "trap": "Creating an index does not guarantee the optimizer will use it.",
    "recall": "Why does an index on manf not help every query on Beers?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  },
  {
    "id": "workload",
    "module": "views",
    "title": "Judge an index against the workload",
    "pages": [
      18,
      21
    ],
    "idea": "Query benefits must pay for storage and index maintenance.",
    "paragraphs": [
      "The lecture workload is 90% lookups of price at a given bar and beer and 10% inserts. An appropriate Sells(bar,beer) index helps the dominant lookup; Beers(manf) has no useful lookup role in that stated workload.",
      "Indexes consume space and must be maintained for relevant data changes. Inserts and deletes usually add or remove index entries. Updates incur maintenance when indexed information changes. More indexes are not automatically better.",
      "A tuning advisor collects a sample workload, proposes candidate indexes, and asks the optimizer to estimate their effects. Evaluate overall weighted cost rather than choosing the index that helps one favorite query.",
      "For a reasoning exercise with arbitrary cost units, suppose an index saves 8 units on each lookup but adds 2 per insert. At 90/10, expected savings are 0.9×8−0.1×2=7 units per operation. These are illustrative arithmetic values, not measurements from your lecturer or the browser."
    ],
    "sql": "",
    "trap": "A tiny warm-cache query timing does not establish that a production index is useful.",
    "recall": "What would change your index choice if most operations became inserts?",
    "table": null,
    "note": "",
    "courseSQL": "",
    "extra": []
  }
];
