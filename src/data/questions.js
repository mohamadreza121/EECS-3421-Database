export const questions = [
  {
    "id": "c01",
    "module": "sql1",
    "pages": [
      4,
      9
    ],
    "topic": "Query meaning",
    "type": "mcq",
    "prompt": "What is the logical reading order of a basic single-table query?",
    "options": [
      "SELECT → WHERE → FROM",
      "FROM → WHERE → SELECT",
      "WHERE → SELECT → FROM",
      "The written order must be the physical execution order"
    ],
    "answer": 1,
    "explanation": "FROM supplies rows, WHERE filters them, and SELECT constructs the output. The optimizer may use a different physical plan.",
    "hints": [
      "Start by identifying the input relation."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c02",
    "module": "sql1",
    "pages": [
      14,
      15
    ],
    "topic": "Aliases",
    "type": "mcq",
    "prompt": "What does SELECT name AS beer FROM Beers change?",
    "options": [
      "The stored column name",
      "Every stored beer name",
      "The output column label",
      "The primary key constraint"
    ],
    "answer": 2,
    "explanation": "AS labels the result column. It does not alter Beers or update its rows.",
    "hints": [
      "Distinguish a query result from the stored table."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c03",
    "module": "sql1",
    "pages": [
      16,
      17
    ],
    "topic": "Expressions",
    "type": "mcq",
    "prompt": "If price is NULL, what is price*114?",
    "options": [
      "0",
      "114",
      "An empty string",
      "NULL"
    ],
    "answer": 3,
    "explanation": "Arithmetic on an unknown price remains unknown; multiplication does not invent a known value.",
    "hints": [
      "NULL is not zero."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c04",
    "module": "sql1",
    "pages": [
      22,
      23
    ],
    "topic": "Boolean conditions",
    "type": "mcq",
    "prompt": "Which finds Bud or Miller, but only at Joe’s Bar?",
    "options": [
      "bar='Joe''s Bar' AND (beer='Bud' OR beer='Miller')",
      "bar='Joe''s Bar' AND beer='Bud' OR beer='Miller'",
      "bar='Joe''s Bar' OR beer='Bud' OR beer='Miller'",
      "bar='Joe''s Bar' AND beer='Bud' AND beer='Miller'"
    ],
    "answer": 0,
    "explanation": "Parentheses group the alternatives before the bar restriction. Without them, OR can admit Miller at other bars.",
    "hints": [
      "AND binds more tightly than OR."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c05",
    "module": "sql1",
    "pages": [
      24,
      25
    ],
    "topic": "Patterns",
    "type": "mcq",
    "prompt": "In a LIKE pattern, what does one underscore match?",
    "options": [
      "Zero or more characters",
      "Exactly one character",
      "One word",
      "Only one digit"
    ],
    "answer": 1,
    "explanation": "The underscore matches one character of any kind; % matches an arbitrary-length sequence.",
    "hints": [
      "Separate the two wildcard symbols."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c06",
    "module": "sql1",
    "pages": [
      25
    ],
    "topic": "Patterns",
    "type": "mcq",
    "prompt": "How many character positions follow 555- in LIKE '%555-____'?",
    "options": [
      "Any number",
      "At least four",
      "Exactly four",
      "Exactly five"
    ],
    "answer": 2,
    "explanation": "Each underscore matches exactly one character, so four adjacent underscores require four positions.",
    "hints": [
      "Count the underscores, not the percent sign."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c07",
    "module": "sql1",
    "pages": [
      26,
      27
    ],
    "topic": "NULL",
    "type": "mcq",
    "prompt": "Which correctly selects missing prices?",
    "options": [
      "price=NULL",
      "price='NULL'",
      "price=0",
      "price IS NULL"
    ],
    "answer": 3,
    "explanation": "IS NULL tests missingness. Equality to the string NULL tests text, while ordinary equality to NULL is UNKNOWN.",
    "hints": [
      "Use the dedicated NULL predicate."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c08",
    "module": "sql1",
    "pages": [
      27,
      30
    ],
    "topic": "Three-valued logic",
    "type": "mcq",
    "prompt": "What happens to a row whose WHERE condition is UNKNOWN?",
    "options": [
      "It is included",
      "It is excluded",
      "It is included only with DISTINCT",
      "The table is deleted"
    ],
    "answer": 1,
    "explanation": "WHERE retains only TRUE. FALSE and UNKNOWN both fail the selection condition.",
    "hints": [
      "Selection requires a definite match."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c09",
    "module": "sql1",
    "pages": [
      28
    ],
    "topic": "Three-valued logic",
    "type": "mcq",
    "prompt": "Evaluate TRUE AND (FALSE OR NOT UNKNOWN).",
    "options": [
      "TRUE",
      "FALSE",
      "UNKNOWN",
      "Syntax error in the logic model"
    ],
    "answer": 2,
    "explanation": "NOT UNKNOWN=UNKNOWN, FALSE OR UNKNOWN=UNKNOWN, and TRUE AND UNKNOWN=UNKNOWN.",
    "hints": [
      "Work from the innermost operation outward."
    ],
    "difficulty": "Challenge"
  },
  {
    "id": "c10",
    "module": "sql1",
    "pages": [
      28,
      30
    ],
    "topic": "Three-valued logic",
    "type": "mcq",
    "prompt": "Which is TRUE?",
    "options": [
      "UNKNOWN OR FALSE",
      "UNKNOWN AND TRUE",
      "NOT UNKNOWN",
      "TRUE OR UNKNOWN"
    ],
    "answer": 3,
    "explanation": "TRUE OR UNKNOWN is TRUE because one disjunct is definitely TRUE. The other expressions remain UNKNOWN.",
    "hints": [
      "OR needs just one definite TRUE."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c11",
    "module": "sql1",
    "pages": [
      29,
      30
    ],
    "topic": "NULL trap",
    "type": "mcq",
    "prompt": "For a NULL price, price<2 OR price>=2 evaluates to what?",
    "options": [
      "TRUE",
      "FALSE",
      "UNKNOWN",
      "Zero"
    ],
    "answer": 2,
    "explanation": "Each comparison is UNKNOWN, so their OR is UNKNOWN. The row is not selected.",
    "hints": [
      "The ordinary-number excluded-middle intuition does not cover NULL."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c12",
    "module": "sql1",
    "pages": [
      21,
      23
    ],
    "topic": "String literals",
    "type": "mcq",
    "prompt": "How do you type Joe's Bar inside a SQL string literal?",
    "options": [
      "'Joe's Bar'",
      "\"Joe's Bar\"",
      "'Joe''s Bar'",
      "'Joe`s Bar'"
    ],
    "answer": 2,
    "explanation": "The embedded apostrophe is doubled inside a single-quoted string. Double-quoted text is an identifier in standard SQL.",
    "hints": [
      "The escape is another single quote."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c13",
    "module": "sql2",
    "pages": [
      3,
      7
    ],
    "topic": "Join multiplicity",
    "type": "mcq",
    "prompt": "Sally and Fred both like Bud and frequent Joe’s. The raw join projects beer without DISTINCT. How many Bud copies do these two people contribute?",
    "options": [
      "0",
      "1",
      "2",
      "Four because two tables are involved"
    ],
    "answer": 2,
    "explanation": "Each qualifying person produces a matched pair and contributes one Bud copy. Projection does not remove duplicate rows by default.",
    "hints": [
      "Count matching pairs before projecting."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c14",
    "module": "sql2",
    "pages": [
      8,
      9
    ],
    "topic": "Self-join",
    "type": "mcq",
    "prompt": "Why does the beer-pair query use b1.name<b2.name?",
    "options": [
      "To order the physical table",
      "To keep one orientation and exclude self-pairs",
      "To require different manufacturers",
      "To include each pair twice"
    ],
    "answer": 1,
    "explanation": "The strict ordering keeps only one orientation and rejects equal-name self-pairs. ORDER BY would sort rows without removing pairs.",
    "hints": [
      "Compare < with <>."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c15",
    "module": "sql2",
    "pages": [
      9
    ],
    "topic": "Self-join",
    "type": "mcq",
    "prompt": "Four beers share one known manufacturer. How many unordered distinct pairs does the lecture self-join return?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 1,
    "explanation": "There are 4×3/2=6 unordered pairs. <> would produce 12 ordered pairs.",
    "hints": [
      "Choose two different beers without considering order."
    ],
    "difficulty": "Challenge"
  },
  {
    "id": "c16",
    "module": "sql2",
    "pages": [
      12,
      14
    ],
    "topic": "Scalar subqueries",
    "type": "mcq",
    "prompt": "Which is the safe portable shape for a scalar subquery?",
    "options": [
      "Any number of columns and rows",
      "One column and at most one row",
      "Exactly two rows",
      "A sorted result of any size"
    ],
    "answer": 1,
    "explanation": "A scalar comparison needs one value. A zero-row result is NULL; multiple rows are an error in standard-style SQL/PostgreSQL. SQLite’s first-row behavior is not portable.",
    "hints": [
      "Scalar means one value, with NULL for no row."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c17",
    "module": "sql2",
    "pages": [
      17,
      19
    ],
    "topic": "IN vs JOIN",
    "type": "mcq",
    "prompt": "In the lecture R/S counterexample, IN outputs 1 once, while the join outputs 1 how many times?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "R.b=2 pairs with both S rows whose b is 2, so the join projects a=1 twice.",
    "hints": [
      "S contains two witnesses for the same R row."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c18",
    "module": "sql2",
    "pages": [
      15,
      19
    ],
    "topic": "IN semantics",
    "type": "mcq",
    "prompt": "Repeated copies of a value inside an IN subquery do what to a qualifying outer row?",
    "options": [
      "Multiply it by the copy count",
      "Do not multiply it",
      "Always remove it",
      "Make the query invalid"
    ],
    "answer": 1,
    "explanation": "IN tests membership for each outer row. Inner duplicates do not produce extra copies of that outer row.",
    "hints": [
      "Think predicate, not output loop."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c19",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "topic": "EXISTS",
    "type": "mcq",
    "prompt": "If a subquery returns one row whose selected value is NULL, EXISTS is what?",
    "options": [
      "TRUE",
      "FALSE",
      "UNKNOWN",
      "Invalid"
    ],
    "answer": 0,
    "explanation": "EXISTS checks whether a row exists, not whether the projected value is known.",
    "hints": [
      "The result contains a row."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c20",
    "module": "sql2",
    "pages": [
      21
    ],
    "topic": "Correlation",
    "type": "mcq",
    "prompt": "What makes a subquery correlated?",
    "options": [
      "It uses ORDER BY",
      "It refers to an outer query row",
      "It returns two columns",
      "It contains DISTINCT"
    ],
    "answer": 1,
    "explanation": "A reference such as b2.manf=b1.manf depends on the current b1 outer row.",
    "hints": [
      "Look for an alias defined outside the subquery."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c21",
    "module": "sql2",
    "pages": [
      22,
      23
    ],
    "topic": "Quantifiers",
    "type": "mcq",
    "prompt": "For the empty subquery result, which pair is correct?",
    "options": [
      "ANY TRUE; ALL FALSE",
      "ANY FALSE; ALL TRUE",
      "Both UNKNOWN",
      "Both FALSE"
    ],
    "answer": 1,
    "explanation": "There is no witness for ANY, while no counterexample exists against ALL.",
    "hints": [
      "Use existential versus universal logic."
    ],
    "difficulty": "Challenge"
  },
  {
    "id": "c22",
    "module": "sql2",
    "pages": [
      23,
      24
    ],
    "topic": "Quantifiers",
    "type": "mcq",
    "prompt": "Why is price>=ALL(SELECT price FROM Sells) not always equivalent to price=MAX(price)?",
    "options": [
      "MAX keeps duplicate rows",
      "ALL can be affected by NULLs and empty inputs",
      "ALL always returns one scalar number",
      "They use different tables by definition"
    ],
    "answer": 1,
    "explanation": "MAX ignores NULL inputs, while quantified comparisons can become UNKNOWN. Empty-set semantics also differ.",
    "hints": [
      "Test a right side containing a known value and NULL."
    ],
    "difficulty": "Challenge"
  },
  {
    "id": "c23",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "topic": "Bag semantics",
    "type": "mcq",
    "prompt": "If x appears twice on each side, UNION ALL contains how many x copies?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "UNION ALL adds multiplicities: 2+2=4. UNION would keep one distinct x.",
    "hints": [
      "ALL preserves the copies."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c24",
    "module": "sql2",
    "pages": [
      32
    ],
    "topic": "Bag difference",
    "type": "mcq",
    "prompt": "If x occurs five times on the left and twice on the right, EXCEPT ALL keeps how many?",
    "options": [
      "0",
      "1",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "Bag difference keeps max(5−2,0)=3 copies. SQLite does not implement EXCEPT ALL; this is paper reasoning.",
    "hints": [
      "Subtract counts, stopping at zero."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c25",
    "module": "sql2",
    "pages": [
      34
    ],
    "topic": "Natural join",
    "type": "mcq",
    "prompt": "Likes NATURAL JOIN Sells matches which shared attribute in the course schema?",
    "options": [
      "bar",
      "drinker",
      "price",
      "beer"
    ],
    "answer": 3,
    "explanation": "Likes(drinker,beer) and Sells(bar,beer,price) share only beer.",
    "hints": [
      "List the column names on each side."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c26",
    "module": "sql2",
    "pages": [
      34
    ],
    "topic": "Cartesian products",
    "type": "mcq",
    "prompt": "R has 2 rows and S has 3. R CROSS JOIN S has how many rows?",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "answer": 3,
    "explanation": "Each R row is paired with each S row: 2×3=6.",
    "hints": [
      "Imagine a nested loop over the two inputs."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c27",
    "module": "advanced",
    "pages": [
      3,
      7
    ],
    "topic": "Extended algebra",
    "type": "mcq",
    "prompt": "Which maps are correct?",
    "options": [
      "δ→GROUP BY, τ→DISTINCT",
      "δ→DISTINCT, τ→ORDER BY",
      "γ→ORDER BY, τ→WHERE",
      "δ→DELETE, γ→INSERT"
    ],
    "answer": 1,
    "explanation": "δ eliminates duplicates; τ sorts. γ groups and aggregates.",
    "hints": [
      "Recall each symbol’s purpose."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c28",
    "module": "advanced",
    "pages": [
      10,
      12
    ],
    "topic": "Grouping algebra",
    "type": "mcq",
    "prompt": "For C values 3 and 5 in the same (A,B) group, AVG(C) is what?",
    "options": [
      "3",
      "4",
      "5",
      "8"
    ],
    "answer": 1,
    "explanation": "The group mean is (3+5)/2=4.",
    "hints": [
      "There is one output row for that group."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c29",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "topic": "Outer joins",
    "type": "mcq",
    "prompt": "What happens to an unmatched left row in a LEFT JOIN?",
    "options": [
      "It is deleted",
      "It is kept, with right-side columns NULL",
      "It gets the first right row",
      "The query always errors"
    ],
    "answer": 1,
    "explanation": "A left outer join preserves left-side dangling rows and pads the missing partner with NULL.",
    "hints": [
      "Which side does LEFT promise to preserve?"
    ],
    "difficulty": "Core"
  },
  {
    "id": "c30",
    "module": "advanced",
    "pages": [
      16
    ],
    "topic": "Outer join filter",
    "type": "mcq",
    "prompt": "To keep every bar but attach only Bud listings, where does s.beer=Bud belong?",
    "options": [
      "In WHERE only",
      "In ON with the bar matching condition",
      "In ORDER BY",
      "In GROUP BY"
    ],
    "answer": 1,
    "explanation": "Putting the right-side restriction in ON restricts matches while preserving unmatched Bars rows. WHERE would reject NULL-padded rows.",
    "hints": [
      "A WHERE comparison to a padded NULL is not TRUE."
    ],
    "difficulty": "Challenge"
  },
  {
    "id": "c31",
    "module": "advanced",
    "pages": [
      20,
      21
    ],
    "topic": "COUNT and NULL",
    "type": "mcq",
    "prompt": "Bud prices are 2.50,3.00,NULL. What are COUNT(*) and COUNT(price)?",
    "options": [
      "2 and 2",
      "3 and 3",
      "3 and 2",
      "2 and 3"
    ],
    "answer": 2,
    "explanation": "There are three listing rows but only two known price values.",
    "hints": [
      "COUNT(*) counts rows."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c32",
    "module": "advanced",
    "pages": [
      18,
      20
    ],
    "topic": "AVG and NULL",
    "type": "mcq",
    "prompt": "For 2.50,3.00,NULL, AVG(price) is what?",
    "options": [
      "1.8333",
      "2.75",
      "5.50",
      "NULL"
    ],
    "answer": 1,
    "explanation": "AVG divides the sum 5.50 by two non-NULL inputs.",
    "hints": [
      "Do not count the unknown value in the denominator."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c33",
    "module": "advanced",
    "pages": [
      19
    ],
    "topic": "Aggregate DISTINCT",
    "type": "mcq",
    "prompt": "Two known Heineken prices are both 3.50. COUNT(DISTINCT price) is what?",
    "options": [
      "0",
      "1",
      "2",
      "3.50"
    ],
    "answer": 1,
    "explanation": "DISTINCT removes the repeated known aggregate input before counting.",
    "hints": [
      "Count different prices, not listings."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c34",
    "module": "advanced",
    "pages": [
      20
    ],
    "topic": "Empty aggregates",
    "type": "mcq",
    "prompt": "On an empty input without GROUP BY, which pair is correct?",
    "options": [
      "COUNT(*)=NULL; SUM(price)=0",
      "COUNT(*)=0; SUM(price)=NULL",
      "Both 0",
      "Both NULL"
    ],
    "answer": 1,
    "explanation": "COUNT returns 0; SUM/AVG/MIN/MAX return NULL when no non-NULL values exist.",
    "hints": [
      "COUNT is the exception."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c35",
    "module": "advanced",
    "pages": [
      25
    ],
    "topic": "GROUP BY correctness",
    "type": "mcq",
    "prompt": "Which follows the lecture’s grouped SELECT restriction?",
    "options": [
      "SELECT bar,AVG(price) FROM Sells GROUP BY beer",
      "SELECT beer,AVG(price) FROM Sells GROUP BY beer",
      "SELECT price,COUNT(*) FROM Sells GROUP BY beer",
      "SELECT bar,beer,AVG(price) FROM Sells GROUP BY beer"
    ],
    "answer": 1,
    "explanation": "beer is the grouping attribute and price is aggregated. The others expose ungrouped, nonaggregated attributes.",
    "hints": [
      "What single value would an ungrouped bar refer to?"
    ],
    "difficulty": "Core"
  },
  {
    "id": "c36",
    "module": "advanced",
    "pages": [
      26,
      29
    ],
    "topic": "HAVING",
    "type": "mcq",
    "prompt": "Which clause keeps beer groups offered at least three times?",
    "options": [
      "WHERE COUNT(*)>=3",
      "HAVING COUNT(*)>=3",
      "ORDER BY COUNT(*)>=3",
      "SELECT COUNT(*)>=3 without grouping"
    ],
    "answer": 1,
    "explanation": "HAVING tests aggregate properties of groups after GROUP BY.",
    "hints": [
      "The count does not exist at row-filter time."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c37",
    "module": "advanced",
    "pages": [
      34,
      36
    ],
    "topic": "Defaults",
    "type": "mcq",
    "prompt": "A column has DEFAULT 7 and permits NULL. Inserting explicit NULL stores what?",
    "options": [
      "7",
      "NULL",
      "0",
      "Always an error"
    ],
    "answer": 1,
    "explanation": "An explicit NULL is a supplied value. The default applies when the column is omitted or DEFAULT is explicitly requested in supported syntax.",
    "hints": [
      "Omission differs from an unknown value."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c38",
    "module": "advanced",
    "pages": [
      40,
      42
    ],
    "topic": "DELETE",
    "type": "mcq",
    "prompt": "After DELETE FROM Likes with no WHERE, what remains?",
    "options": [
      "No table",
      "The same table with zero rows",
      "Only its primary-key rows",
      "An unchanged table"
    ],
    "answer": 1,
    "explanation": "DELETE removes rows. The schema remains until a command such as DROP TABLE removes it.",
    "hints": [
      "Separate data deletion from schema deletion."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c39",
    "module": "advanced",
    "pages": [
      43,
      45
    ],
    "topic": "Deletion semantics",
    "type": "mcq",
    "prompt": "In the lecture’s two-beer same-manufacturer example, which rows are marked for deletion?",
    "options": [
      "Only whichever row is visited first",
      "Both initially qualifying rows",
      "Neither",
      "A random one"
    ],
    "answer": 1,
    "explanation": "The teaching model identifies the qualifying set before deleting it, so both initially qualifying beers are marked.",
    "hints": [
      "Use the lecture’s mark-then-delete model."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c40",
    "module": "constraints",
    "pages": [
      5,
      6
    ],
    "topic": "Composite keys",
    "type": "mcq",
    "prompt": "PRIMARY KEY(bar,beer) means what?",
    "options": [
      "Each bar appears once overall",
      "Each beer appears once overall",
      "Each bar–beer combination appears once",
      "Neither column may appear in another row at all"
    ],
    "answer": 2,
    "explanation": "The combination is unique. Repeating a bar with a different beer or vice versa is allowed.",
    "hints": [
      "The key is the pair."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c41",
    "module": "constraints",
    "pages": [
      7,
      10
    ],
    "topic": "Foreign keys",
    "type": "mcq",
    "prompt": "The referenced parent attributes must be what?",
    "options": [
      "Any indexed column",
      "A primary or unique key",
      "Always a text column",
      "Always named id"
    ],
    "answer": 1,
    "explanation": "The reference must identify a parent key tuple unambiguously.",
    "hints": [
      "A foreign key needs an identifiable target."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c42",
    "module": "constraints",
    "pages": [
      11,
      12
    ],
    "topic": "Foreign key enforcement",
    "type": "mcq",
    "prompt": "Which can introduce a dangling child reference?",
    "options": [
      "Inserting a child with a missing parent key",
      "Adding a new unreferenced parent",
      "Reading a child",
      "Renaming a SELECT alias"
    ],
    "answer": 0,
    "explanation": "A child’s new reference must have a matching parent. A parent deletion/update can also strand existing children.",
    "hints": [
      "Consider both child changes and parent changes."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c43",
    "module": "constraints",
    "pages": [
      13,
      17
    ],
    "topic": "Referential actions",
    "type": "mcq",
    "prompt": "ON DELETE SET NULL requires what additional compatibility?",
    "options": [
      "A NOT NULL child column",
      "A nullable child reference",
      "A unique price",
      "A materialized view"
    ],
    "answer": 1,
    "explanation": "The action must be allowed to assign NULL; a NOT NULL constraint would conflict.",
    "hints": [
      "Can the promised replacement value be stored?"
    ],
    "difficulty": "Core"
  },
  {
    "id": "c44",
    "module": "constraints",
    "pages": [
      14
    ],
    "topic": "Cascade",
    "type": "mcq",
    "prompt": "With ON UPDATE CASCADE, renaming parent Bud to Budweiser does what?",
    "options": [
      "Deletes all child rows",
      "Renames the referencing child values",
      "Sets all prices NULL",
      "Ignores references"
    ],
    "answer": 1,
    "explanation": "The new parent key is propagated into the child foreign-key values.",
    "hints": [
      "Cascade carries the key change along the reference."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c45",
    "module": "constraints",
    "pages": [
      18,
      22
    ],
    "topic": "CHECK",
    "type": "mcq",
    "prompt": "A nullable price has CHECK(price>0). What happens for NULL?",
    "options": [
      "It is always rejected",
      "It is not rejected by this CHECK alone",
      "It becomes 0",
      "It becomes the smallest positive number"
    ],
    "answer": 1,
    "explanation": "The comparison is UNKNOWN. CHECK rejects FALSE, so a separate NOT NULL is needed to require a value.",
    "hints": [
      "CHECK and NOT NULL express different requirements."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c46",
    "module": "constraints",
    "pages": [
      22
    ],
    "topic": "Tuple checks",
    "type": "mcq",
    "prompt": "For CHECK(bar='Joe''s Bar' OR price<=5), which known-value row is rejected?",
    "options": [
      "Joe's Bar, 6",
      "Sue's Bar, 5",
      "Sue's Bar, 6",
      "Joe's Bar, 2"
    ],
    "answer": 2,
    "explanation": "A non-Joe bar with price 6 makes both alternatives FALSE. Joe’s exception or a price at most 5 satisfies the condition.",
    "hints": [
      "Translate “only Joe may exceed 5” as an implication."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c47",
    "module": "constraints",
    "pages": [
      24,
      26
    ],
    "topic": "Assertions",
    "type": "mcq",
    "prompt": "For COUNT(Bars)<=COUNT(Drinkers), which change cannot create a violation from a satisfied state?",
    "options": [
      "Insert a bar",
      "Delete a drinker",
      "Insert a drinker",
      "Delete several drinkers"
    ],
    "answer": 2,
    "explanation": "Increasing the right-hand count cannot make the inequality false.",
    "hints": [
      "Look for the direction of the inequality."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c48",
    "module": "constraints",
    "pages": [
      28
    ],
    "topic": "Triggers",
    "type": "mcq",
    "prompt": "ECA stands for what?",
    "options": [
      "Entity, Column, Attribute",
      "Event, Condition, Action",
      "Execution, Commit, Abort",
      "Equality, Constraint, Alias"
    ],
    "answer": 1,
    "explanation": "A trigger responds to an event, optionally tests a condition, and performs an action.",
    "hints": [
      "Identify what starts it, what tests it, and what it does."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c49",
    "module": "constraints",
    "pages": [
      33
    ],
    "topic": "Trigger granularity",
    "type": "mcq",
    "prompt": "An UPDATE changes four rows. A row-level trigger with a TRUE condition fires how many times?",
    "options": [
      "0",
      "1",
      "4",
      "16"
    ],
    "answer": 2,
    "explanation": "A row trigger is considered once per affected row. A statement-level trigger is once per statement.",
    "hints": [
      "Count the affected rows."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c50",
    "module": "constraints",
    "pages": [
      34
    ],
    "topic": "Transition values",
    "type": "mcq",
    "prompt": "Which event provides both OLD and NEW row values?",
    "options": [
      "INSERT",
      "DELETE",
      "UPDATE",
      "SELECT"
    ],
    "answer": 2,
    "explanation": "UPDATE has before and after versions. INSERT has NEW; DELETE has OLD.",
    "hints": [
      "Which operation changes an existing row into another version?"
    ],
    "difficulty": "Core"
  },
  {
    "id": "c51",
    "module": "constraints",
    "pages": [
      38
    ],
    "topic": "Trigger condition",
    "type": "mcq",
    "prompt": "OLD.price=2.50 and NEW.price=3.50. Does NEW.price>OLD.price+1 hold?",
    "options": [
      "Yes",
      "No",
      "Only if the bar is Joe’s",
      "Always UNKNOWN"
    ],
    "answer": 1,
    "explanation": "3.50>3.50 is FALSE. The strict condition requires an increase greater than 1, not equal to 1.",
    "hints": [
      "Watch the strict inequality."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c52",
    "module": "constraints",
    "pages": [
      30,
      33
    ],
    "topic": "Dialect distinction",
    "type": "mcq",
    "prompt": "If FOR EACH ROW is omitted in a SQLite trigger, it becomes what?",
    "options": [
      "A statement-level trigger",
      "Still a row-level trigger",
      "An assertion",
      "A materialized view"
    ],
    "answer": 1,
    "explanation": "SQLite supports row triggers only. The course’s omission-means-statement convention belongs to its teaching notation, not SQLite.",
    "hints": [
      "Check the engine label before applying a syntax convention."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c53",
    "module": "workshop",
    "pages": [
      2
    ],
    "topic": "Exam format",
    "type": "mcq",
    "prompt": "What approximate mark split does the supplied workshop announce?",
    "options": [
      "35 concepts, 10 SQL",
      "10 concepts, 35 SQL",
      "45 concepts only",
      "10 marks total"
    ],
    "answer": 1,
    "explanation": "The announcement gives about 10 marks for concepts/definitions and 35 for SQL coding, about 45 total.",
    "hints": [
      "The coding portion is the larger share."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c54",
    "module": "workshop",
    "pages": [
      3
    ],
    "topic": "Schema reasoning",
    "type": "mcq",
    "prompt": "Which three tables directly establish that a person can obtain a liked beer at a frequented bar?",
    "options": [
      "Beers, Bars, Drinkers",
      "Likes, Sells, Frequents",
      "Beers, Likes, Bars",
      "Drinkers, Beers, Sells"
    ],
    "answer": 1,
    "explanation": "Likes connects person–beer, Frequents person–bar, and Sells bar–beer. All three relationships are needed.",
    "hints": [
      "Think of the three edges of the relationship triangle."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c55",
    "module": "transactions",
    "pages": [
      6
    ],
    "topic": "ACID",
    "type": "mcq",
    "prompt": "Which property means the whole transaction or none of it is applied?",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answer": 0,
    "explanation": "Atomicity makes the unit all-or-nothing. Isolation concerns concurrent interactions.",
    "hints": [
      "Distinguish incomplete work from conflicting work."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c56",
    "module": "transactions",
    "pages": [
      6
    ],
    "topic": "ACID",
    "type": "mcq",
    "prompt": "Which property concerns surviving a crash after commit?",
    "options": [
      "Atomicity",
      "Durability",
      "Projection",
      "Correlation"
    ],
    "answer": 1,
    "explanation": "Durability concerns retained committed effects. The in-memory browser lab does not demonstrate real crash durability.",
    "hints": [
      "The transaction has already committed."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c57",
    "module": "transactions",
    "pages": [
      7,
      8
    ],
    "topic": "Transaction control",
    "type": "mcq",
    "prompt": "Can ROLLBACK undo an earlier transaction that has already committed?",
    "options": [
      "Yes, always",
      "No",
      "Only if it used WHERE",
      "Only for views"
    ],
    "answer": 1,
    "explanation": "ROLLBACK undoes the active uncommitted transaction, not a completed committed one.",
    "hints": [
      "Mark the commit boundary."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c58",
    "module": "transactions",
    "pages": [
      9,
      14
    ],
    "topic": "Schedule trace",
    "type": "mcq",
    "prompt": "In the lecture’s 2.50/3.00 initial scenario, max,delete,insert(3.50),min returns what pair?",
    "options": [
      "MAX=3.00, MIN=2.50",
      "MAX=3.00, MIN=3.50",
      "MAX=3.50, MIN=3.50",
      "Both NULL"
    ],
    "answer": 1,
    "explanation": "MAX is read before the replacement; MIN after it. The two answers describe different database states.",
    "hints": [
      "Track prices after each statement."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c59",
    "module": "transactions",
    "pages": [
      22
    ],
    "topic": "Read committed",
    "type": "mcq",
    "prompt": "READ COMMITTED guarantees which?",
    "options": [
      "Every read uses one transaction-wide snapshot in all engines",
      "Only committed values are read; later statements may see newer committed data",
      "Phantoms never occur",
      "All writers are serialized by the SQL syntax"
    ],
    "answer": 1,
    "explanation": "The standard-level protection is against dirty reads, not every possible change between statements.",
    "hints": [
      "Committed does not mean permanently unchanged."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c60",
    "module": "transactions",
    "pages": [
      25
    ],
    "topic": "Dirty reads",
    "type": "mcq",
    "prompt": "A reader sees 3.50 from an uncommitted transaction that later rolls back. This is what?",
    "options": [
      "A natural join",
      "A dirty read",
      "A committed snapshot",
      "A materialized refresh"
    ],
    "answer": 1,
    "explanation": "The reader consumed a value that never became committed data.",
    "hints": [
      "Follow whether the writer had committed before the read."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c61",
    "module": "transactions",
    "pages": [
      23,
      24
    ],
    "topic": "Repeatable read",
    "type": "mcq",
    "prompt": "Under the standard minimum model, which may still occur at REPEATABLE READ?",
    "options": [
      "Dirty reads",
      "Changed rereads of protected rows",
      "Phantom rows",
      "All serializable anomalies are impossible"
    ],
    "answer": 2,
    "explanation": "The standard minimum prevents dirty/nonrepeatable reads but can allow phantoms. Some engines, including PostgreSQL, provide stronger repeatable-read guarantees.",
    "hints": [
      "Distinguish the standard minimum from a particular implementation."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c62",
    "module": "transactions",
    "pages": [
      20
    ],
    "topic": "Serializable",
    "type": "mcq",
    "prompt": "A serializable outcome should be equivalent to what?",
    "options": [
      "Every transaction running simultaneously without checks",
      "Some serial ordering of the transactions",
      "Always the first query’s output only",
      "A CROSS JOIN of all writes"
    ],
    "answer": 1,
    "explanation": "The transactions can run concurrently physically, but the observable outcome must match an allowed serial order.",
    "hints": [
      "Equivalent behavior need not mean literal one-at-a-time execution."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c63",
    "module": "views",
    "pages": [
      3,
      6
    ],
    "topic": "Virtual views",
    "type": "mcq",
    "prompt": "A virtual view stores what?",
    "options": [
      "A permanently frozen result table",
      "A query definition",
      "A mandatory B-tree",
      "A transaction log only"
    ],
    "answer": 1,
    "explanation": "The view’s definition is used against current base data; it is not a frozen snapshot.",
    "hints": [
      "Separate definition from stored result."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c64",
    "module": "views",
    "pages": [
      5,
      6
    ],
    "topic": "View multiplicity",
    "type": "mcq",
    "prompt": "CanDrink projects drinker and beer from visited bars without DISTINCT. If Sally can get Bud at two bars, how many Sally/Bud rows can appear?",
    "options": [
      "0",
      "1",
      "2",
      "Always a key violation"
    ],
    "answer": 2,
    "explanation": "The view inherits bag semantics from its query. Two qualifying bar listings contribute two copies.",
    "hints": [
      "The view definition did not eliminate duplicates."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c65",
    "module": "views",
    "pages": [
      7,
      10
    ],
    "topic": "View triggers",
    "type": "mcq",
    "prompt": "What does an INSTEAD OF INSERT trigger on a joined view provide?",
    "options": [
      "An automatically chosen sale price",
      "A meaning for the write in terms of base-table actions",
      "Guaranteed duplicate elimination",
      "A stronger isolation level"
    ],
    "answer": 1,
    "explanation": "The trigger translates the logical view write into specified modifications, such as the three pair insertions in Synergy.",
    "hints": [
      "The joined view does not itself specify a unique update path."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c66",
    "module": "views",
    "pages": [
      9,
      10
    ],
    "topic": "Synergy",
    "type": "mcq",
    "prompt": "Why does the lecture’s Synergy insertion give Sells.price=NULL?",
    "options": [
      "All prices must be zero",
      "The inserted view triple has no price attribute",
      "NULL makes a primary key unique",
      "The trigger is not allowed to insert numbers"
    ],
    "answer": 1,
    "explanation": "The triple supplies drinker, beer, and bar but no known price, so the projected sale pair leaves price missing.",
    "hints": [
      "List the attributes available in NEW."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c67",
    "module": "views",
    "pages": [
      11,
      13
    ],
    "topic": "Materialization",
    "type": "mcq",
    "prompt": "A materialized view can become stale when what happens?",
    "options": [
      "Its result is sorted",
      "Base data changes before the next maintenance/refresh",
      "It has a name",
      "A query reads it twice"
    ],
    "answer": 1,
    "explanation": "The stored result may lag behind base-table changes until it is maintained or refreshed.",
    "hints": [
      "Stored answers need an update strategy."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c68",
    "module": "views",
    "pages": [
      14,
      18
    ],
    "topic": "Indexes",
    "type": "mcq",
    "prompt": "What is the primary purpose of an index?",
    "options": [
      "Change the logical query answer",
      "Speed suitable row access",
      "Guarantee all queries use one plan",
      "Replace foreign keys"
    ],
    "answer": 1,
    "explanation": "An index is an access structure. It does not redefine what the query means.",
    "hints": [
      "Think access path, not new semantics."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c69",
    "module": "views",
    "pages": [
      18,
      19
    ],
    "topic": "Workloads",
    "type": "mcq",
    "prompt": "For the lecture’s 90% (bar,beer) price lookups and 10% inserts, which candidate directly fits the lookup?",
    "options": [
      "Beers(manf)",
      "Sells(bar,beer)",
      "Drinkers(phone)",
      "Likes(drinker)"
    ],
    "answer": 1,
    "explanation": "Sells(bar,beer) supports the dominant lookup. An existing primary-key index may already supply this access path.",
    "hints": [
      "Match the search predicate to index attributes."
    ],
    "difficulty": "Core"
  },
  {
    "id": "c70",
    "module": "views",
    "pages": [
      20,
      21
    ],
    "topic": "Tuning advisors",
    "type": "mcq",
    "prompt": "What should a tuning advisor evaluate?",
    "options": [
      "One index’s color",
      "A representative query/update workload",
      "Only the number of table names",
      "Only the shortest query text"
    ],
    "answer": 1,
    "explanation": "Candidate indexes must be assessed against their combined workload benefit and maintenance cost.",
    "hints": [
      "A fast isolated query is not the whole system."
    ],
    "difficulty": "Core"
  },
  {
    "id": "s01",
    "module": "sql1",
    "pages": [
      7,
      9
    ],
    "topic": "Selection",
    "type": "sql",
    "prompt": "Return the name of every beer made by Anheuser-Busch. One column: name. No particular order.",
    "solution": "SELECT name FROM Beers WHERE manf='Anheuser-Busch';",
    "hints": [
      "The manufacturer lives in Beers.",
      "Compare manf to a single-quoted string."
    ],
    "explanation": "FROM chooses Beers, WHERE tests the manufacturer, and SELECT projects its beer name.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s02",
    "module": "sql1",
    "pages": [
      14,
      17
    ],
    "topic": "Projection",
    "type": "sql",
    "prompt": "Return bar, beer, and price multiplied by 114 for every sale listing. Exactly three columns, no ordering required.",
    "solution": "SELECT bar,beer,price*114 AS priceInYen FROM Sells;",
    "hints": [
      "The calculation belongs in SELECT.",
      "Keep the original bar and beer columns too."
    ],
    "explanation": "An expression constructs a calculated result value without changing stored prices.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s03",
    "module": "sql1",
    "pages": [
      22,
      23
    ],
    "topic": "Conditions",
    "type": "sql",
    "prompt": "Return beer and price for Bud or Miller at Joe's Bar. Exactly two columns.",
    "solution": "SELECT beer,price FROM Sells WHERE bar='Joe''s Bar' AND (beer='Bud' OR beer='Miller');",
    "hints": [
      "Use one bar condition plus a parenthesized beer alternative.",
      "Double the apostrophe in Joe's Bar."
    ],
    "explanation": "The bar restriction applies to both beer alternatives. OR without parentheses changes the requested row set.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s04",
    "module": "sql1",
    "pages": [
      24,
      25
    ],
    "topic": "LIKE",
    "type": "sql",
    "prompt": "Return name and phone for drinkers whose phone ends with 555- followed by exactly four characters.",
    "solution": "SELECT name,phone FROM Drinkers WHERE phone LIKE '%555-____';",
    "hints": [
      "Use % for any prefix.",
      "Use four consecutive underscores after 555-."
    ],
    "explanation": "The pattern requires the stated suffix shape. A NULL phone is not a true match.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s05",
    "module": "sql1",
    "pages": [
      26,
      30
    ],
    "topic": "NULL",
    "type": "sql",
    "prompt": "Return bar and beer for sale listings with a missing price.",
    "solution": "SELECT bar,beer FROM Sells WHERE price IS NULL;",
    "hints": [
      "Missingness has a dedicated predicate.",
      "Use IS NULL, not =NULL."
    ],
    "explanation": "IS NULL explicitly retains unknown prices.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s06",
    "module": "sql2",
    "pages": [
      3,
      7
    ],
    "topic": "Joins",
    "type": "sql",
    "prompt": "Return DISTINCT beer names liked by at least one person who frequents Joe's Bar. One column.",
    "solution": "SELECT DISTINCT l.beer FROM Likes l JOIN Frequents f ON l.drinker=f.drinker WHERE f.bar='Joe''s Bar';",
    "hints": [
      "Connect Likes and Frequents by drinker.",
      "Several visitors can like the same beer, so remove result duplicates."
    ],
    "explanation": "The join finds witnesses; DISTINCT matches the request for unique beer names.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s07",
    "module": "sql2",
    "pages": [
      8,
      9
    ],
    "topic": "Self-join",
    "type": "sql",
    "prompt": "Return pairs of beers made by the same known manufacturer. Two columns: first beer name, second beer name. Require first name < second name to keep one orientation.",
    "solution": "SELECT b1.name,b2.name FROM Beers b1 JOIN Beers b2 ON b1.manf=b2.manf WHERE b1.name<b2.name;",
    "hints": [
      "Use two Beers aliases.",
      "Require equal manufacturer and strictly ordered names."
    ],
    "explanation": "The strict name ordering removes self-pairs and reversed pairs; NULL manufacturers do not match by ordinary equality.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s08",
    "module": "sql2",
    "pages": [
      13,
      14
    ],
    "topic": "Scalar subqueries",
    "type": "sql",
    "prompt": "Return bar names selling Miller for the same price Joe's Bar charges for Bud. One column; no DISTINCT requested.",
    "solution": "SELECT bar FROM Sells WHERE beer='Miller' AND price=(SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud');",
    "hints": [
      "Find the unique Joe/Bud price inside a subquery.",
      "Compare only Miller listings to that value."
    ],
    "explanation": "The bar–beer key makes the lookup scalar. A missing Joe/Bud listing leads to NULL and no true price equality.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s09",
    "module": "sql2",
    "pages": [
      15,
      16
    ],
    "topic": "IN",
    "type": "sql",
    "prompt": "Return name and manf for each beer Fred likes, using any correct SQL formulation. Exactly two columns.",
    "solution": "SELECT name,manf FROM Beers WHERE name IN(SELECT beer FROM Likes WHERE drinker='Fred');",
    "hints": [
      "The desired output is in Beers.",
      "Use Likes to identify Fred’s beer names."
    ],
    "explanation": "IN tests membership without multiplying Beers rows.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s10",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "topic": "NOT EXISTS",
    "type": "sql",
    "prompt": "Return names of beers whose manufacturer is known and has no other beer in Beers. One column.",
    "solution": "SELECT b1.name FROM Beers b1 WHERE b1.manf IS NOT NULL AND NOT EXISTS(SELECT 1 FROM Beers b2 WHERE b2.manf=b1.manf AND b2.name<>b1.name);",
    "hints": [
      "Exclude unknown manufacturers explicitly.",
      "Reject a candidate if another different name shares its manufacturer."
    ],
    "explanation": "The known-manufacturer requirement handles the NULL edge case deliberately.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s11",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "topic": "Set difference",
    "type": "sql",
    "prompt": "Return the names of drinkers who do not frequent any bar. One column.",
    "solution": "SELECT name FROM Drinkers EXCEPT SELECT drinker FROM Frequents;",
    "hints": [
      "Compare all Drinkers names against visitor names.",
      "EXCEPT or a correlated NOT EXISTS can express absence."
    ],
    "explanation": "The question includes inactive drinkers; beginning from Frequents would lose them.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s12",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "topic": "Universal conditions",
    "type": "sql",
    "prompt": "Return drinker names of people who like every beer sold at Joe's Bar. Include all drinkers if Joe sells no beers. One column.",
    "solution": "SELECT d.name FROM Drinkers d WHERE NOT EXISTS(SELECT 1 FROM Sells s WHERE s.bar='Joe''s Bar' AND NOT EXISTS(SELECT 1 FROM Likes l WHERE l.drinker=d.name AND l.beer=s.beer));",
    "hints": [
      "Look for a required Joe beer that the person does not like.",
      "Keep the person only when no such counterexample exists."
    ],
    "explanation": "Double NOT EXISTS expresses a universal condition and handles the empty requirement set correctly.",
    "ordered": false,
    "difficulty": "Challenge"
  },
  {
    "id": "s13",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "topic": "Outer joins",
    "type": "sql",
    "prompt": "Return every bar and its Bud price, including bars without a Bud listing. Exactly two columns: bar, price.",
    "solution": "SELECT b.bar,s.price FROM Bars b LEFT JOIN Sells s ON b.bar=s.bar AND s.beer='Bud';",
    "hints": [
      "Start from Bars and preserve it.",
      "Put the Bud matching restriction in ON."
    ],
    "explanation": "A right-side WHERE filter would erase the preserved unmatched bars.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s14",
    "module": "advanced",
    "pages": [
      17,
      21
    ],
    "topic": "Counting NULL",
    "type": "sql",
    "prompt": "For each beer with a sale listing, return beer, total listing count, and known-price count. Exactly three columns.",
    "solution": "SELECT beer,COUNT(*),COUNT(price) FROM Sells GROUP BY beer;",
    "hints": [
      "Group by beer.",
      "Use COUNT(*) for rows and COUNT(price) for known values."
    ],
    "explanation": "The two counts expose the difference between a missing price and a missing sale row.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s15",
    "module": "advanced",
    "pages": [
      22,
      23
    ],
    "topic": "Grouping",
    "type": "sql",
    "prompt": "Return beer and average known price for each beer appearing in Sells. Exactly two columns.",
    "solution": "SELECT beer,AVG(price) FROM Sells GROUP BY beer;",
    "hints": [
      "One result row represents one beer group.",
      "AVG already ignores NULL inputs."
    ],
    "explanation": "Group at the requested grain. Do not add bar to the grouping list.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s16",
    "module": "advanced",
    "pages": [
      24
    ],
    "topic": "Join + aggregate",
    "type": "sql",
    "prompt": "Return each drinker who frequents a bar selling Bud, and the average known Bud price across those bars. Exactly two columns.",
    "solution": "SELECT f.drinker,AVG(s.price) FROM Frequents f JOIN Sells s ON f.bar=s.bar WHERE s.beer='Bud' GROUP BY f.drinker;",
    "hints": [
      "Join by bar, filter Bud, then group by drinker.",
      "A group with only unknown Bud prices has a NULL average."
    ],
    "explanation": "The joined facts define the input rows for each drinker’s aggregate.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s17",
    "module": "advanced",
    "pages": [
      26,
      28
    ],
    "topic": "HAVING",
    "type": "sql",
    "prompt": "Return beer and average price for beers listed at least three times in Sells. Exactly two columns.",
    "solution": "SELECT beer,AVG(price) FROM Sells GROUP BY beer HAVING COUNT(*)>=3;",
    "hints": [
      "The count is a group condition.",
      "Keep NULL-price listings in COUNT(*)."
    ],
    "explanation": "HAVING filters the beer groups after the listing count is known.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s18",
    "module": "advanced",
    "pages": [
      19
    ],
    "topic": "DISTINCT aggregate",
    "type": "sql",
    "prompt": "Return beer and number of different known prices for each beer in Sells. Exactly two columns.",
    "solution": "SELECT beer,COUNT(DISTINCT price) FROM Sells GROUP BY beer;",
    "hints": [
      "Use a distinct aggregate input.",
      "COUNT(DISTINCT price) still ignores NULL."
    ],
    "explanation": "This counts price levels, not offers or bars.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s19",
    "module": "advanced",
    "pages": [
      6,
      7
    ],
    "topic": "Ordering",
    "type": "sql",
    "prompt": "Return bar, beer, price for all known-price sale listings, sorted by price descending, then bar ascending, then beer ascending.",
    "solution": "SELECT bar,beer,price FROM Sells WHERE price IS NOT NULL ORDER BY price DESC,bar ASC,beer ASC;",
    "hints": [
      "Filter unknown prices before sorting.",
      "Both tie-breakers matter."
    ],
    "explanation": "A full ordering makes result order deterministic when prices tie.",
    "ordered": true,
    "difficulty": "Applied"
  },
  {
    "id": "s20",
    "module": "advanced",
    "pages": [
      25,
      26
    ],
    "topic": "Maximum with ties",
    "type": "sql",
    "prompt": "Return bar, beer, price for every listing tied at the highest known price. Exactly three columns.",
    "solution": "SELECT bar,beer,price FROM Sells WHERE price=(SELECT MAX(price) FROM Sells);",
    "hints": [
      "Find the maximum with a scalar aggregate.",
      "Do not use LIMIT 1: all ties are requested."
    ],
    "explanation": "Equality to MAX returns all known-price ties. This task intentionally asks for the highest known price, not raw ALL semantics.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s21",
    "module": "advanced",
    "pages": [
      13,
      21
    ],
    "topic": "Zero-count groups",
    "type": "sql",
    "prompt": "Return every bar and the number of its sale listings, including zero. Exactly two columns.",
    "solution": "SELECT b.bar,COUNT(s.beer) FROM Bars b LEFT JOIN Sells s ON b.bar=s.bar GROUP BY b.bar;",
    "hints": [
      "Preserve Bars with a left join.",
      "Count a non-NULL matched key rather than the padded row."
    ],
    "explanation": "COUNT(*) would count the NULL-padded Empty Bar row as one. COUNT(s.beer) correctly yields zero.",
    "ordered": false,
    "difficulty": "Challenge"
  },
  {
    "id": "s22",
    "module": "constraints",
    "pages": [
      24
    ],
    "topic": "Violation queries",
    "type": "sql",
    "prompt": "Return bar and average price for bars whose average known sale price exceeds 5. Exactly two columns.",
    "solution": "SELECT bar,AVG(price) FROM Sells GROUP BY bar HAVING AVG(price)>5;",
    "hints": [
      "First find the violating groups.",
      "The average condition belongs in HAVING."
    ],
    "explanation": "This observes potential NoRipoffBars violations; it does not enforce an assertion.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s23",
    "module": "constraints",
    "pages": [
      25,
      26
    ],
    "topic": "Global conditions",
    "type": "sql",
    "prompt": "Return one scalar column: 1 if the number of bars is no greater than the number of drinkers, otherwise 0.",
    "solution": "SELECT (SELECT COUNT(*) FROM Bars)<=(SELECT COUNT(*) FROM Drinkers) AS rule_holds;",
    "hints": [
      "Use two scalar COUNT subqueries.",
      "Compare the two counts, not individual rows."
    ],
    "explanation": "The diagnostic expression corresponds to the lecture’s global FewBar condition.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s24",
    "module": "workshop",
    "pages": [
      3
    ],
    "topic": "Three-table reasoning",
    "type": "sql",
    "prompt": "Return distinct drinker, beer, bar triples where the person likes the beer and frequents a bar that sells that beer.",
    "solution": "SELECT DISTINCT l.drinker,l.beer,s.bar FROM Likes l JOIN Frequents f ON l.drinker=f.drinker JOIN Sells s ON s.bar=f.bar AND s.beer=l.beer;",
    "hints": [
      "Connect person on Likes/Frequents, bar on Frequents/Sells, and beer on Likes/Sells.",
      "There are three relationships to enforce."
    ],
    "explanation": "This is the Synergy relation. Missing one equality admits unrelated combinations.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s25",
    "module": "views",
    "pages": [
      5,
      6
    ],
    "topic": "CanDrink query",
    "type": "sql",
    "prompt": "Without creating a view, return distinct beer names Sally can obtain at any bar she frequents. One column.",
    "solution": "SELECT DISTINCT s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar WHERE f.drinker='Sally';",
    "hints": [
      "This asks what is available, not necessarily liked.",
      "Connect Frequents and Sells by bar."
    ],
    "explanation": "Unlike Synergy, CanDrink does not require a Likes row.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s26",
    "module": "views",
    "pages": [
      16,
      17
    ],
    "topic": "Indexable lookup",
    "type": "sql",
    "prompt": "Return the prices of beers manufactured by Pete's and sold at Joe's Bar. One column; duplicate prices are allowed.",
    "solution": "SELECT s.price FROM Beers b JOIN Sells s ON b.name=s.beer WHERE b.manf='Pete''s' AND s.bar='Joe''s Bar';",
    "hints": [
      "Use Beers for manufacturer and Sells for price/bar.",
      "Do not hardcode the beer name: future Pete’s beers must also qualify."
    ],
    "explanation": "The predicate structure fits the lecture’s two-index lookup explanation.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s27",
    "module": "sql2",
    "pages": [
      25,
      27
    ],
    "topic": "Intersection",
    "type": "sql",
    "prompt": "Return distinct drinker–beer pairs that are both liked and available at at least one frequented bar. Exactly two columns.",
    "solution": "SELECT drinker,beer FROM Likes INTERSECT SELECT f.drinker,s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar;",
    "hints": [
      "One relation is Likes; the other is the CanDrink query.",
      "Project the same two meanings in the same order before intersecting."
    ],
    "explanation": "INTERSECT returns one copy of each pair satisfying both sides.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s28",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "topic": "Anti-join",
    "type": "sql",
    "prompt": "Return names of beers not sold at any bar. One column.",
    "solution": "SELECT b.name FROM Beers b WHERE NOT EXISTS(SELECT 1 FROM Sells s WHERE s.beer=b.name);",
    "hints": [
      "Begin with all Beers candidates.",
      "Look for the absence of any matching Sells row."
    ],
    "explanation": "Starting from Sells cannot discover a beer absent from Sells.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s29",
    "module": "advanced",
    "pages": [
      26,
      28
    ],
    "topic": "HAVING OR subquery",
    "type": "sql",
    "prompt": "Return beer and average price when the beer has at least three listings OR is manufactured by Pete's. Exactly two columns.",
    "solution": "SELECT beer,AVG(price) FROM Sells GROUP BY beer HAVING COUNT(*)>=3 OR beer IN(SELECT name FROM Beers WHERE manf='Pete''s');",
    "hints": [
      "Both alternatives test a beer group.",
      "Use a manufacturer subquery for the second alternative."
    ],
    "explanation": "The OR is applied to groups; filtering to Pete’s first would change the problem.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "s30",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "topic": "At least two",
    "type": "sql",
    "prompt": "Return names of drinkers who frequent at least two different bars. One column, each name once.",
    "solution": "SELECT drinker FROM Frequents GROUP BY drinker HAVING COUNT(DISTINCT bar)>=2;",
    "hints": [
      "Group visit facts by drinker.",
      "Count different bars, not beer matches."
    ],
    "explanation": "The request concerns Frequents only. Extra joins would risk changing the count.",
    "ordered": false,
    "difficulty": "Applied"
  },
  {
    "id": "w01",
    "module": "constraints",
    "pages": [
      5,
      10
    ],
    "topic": "DDL",
    "type": "written",
    "prompt": "Write CREATE TABLE for Beers(name,manf) and Sells(bar,beer,price). Beers.name is a primary key. Sells has key (bar,beer); its beer references Beers.name.",
    "solution": "CREATE TABLE Beers(name CHAR(20) PRIMARY KEY,manf CHAR(20));\nCREATE TABLE Sells(bar CHAR(20),beer CHAR(20),price REAL,PRIMARY KEY(bar,beer),FOREIGN KEY(beer) REFERENCES Beers(name));",
    "rubric": [
      "Beers has both attributes and a primary key on name.",
      "Sells has bar, beer, and price with sensible types.",
      "The Sells primary key is the pair (bar,beer).",
      "Sells.beer references Beers.name.",
      "The parent is declared before or otherwise validly available to the child."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "Beers has both attributes and a primary key on name."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w02",
    "module": "constraints",
    "pages": [
      16,
      17
    ],
    "topic": "Referential policy",
    "type": "written",
    "prompt": "Write a separate Offers table whose nullable beer references Beers.name, clears the child reference on parent deletion, and follows parent renames.",
    "solution": "CREATE TABLE Offers(beer CHAR(20),price REAL,FOREIGN KEY(beer) REFERENCES Beers(name) ON DELETE SET NULL ON UPDATE CASCADE);",
    "rubric": [
      "Offers contains a beer column.",
      "The reference targets Beers(name).",
      "ON DELETE SET NULL is specified.",
      "ON UPDATE CASCADE is specified.",
      "beer permits NULL so the deletion policy can work."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "Offers contains a beer column."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w03",
    "module": "constraints",
    "pages": [
      22
    ],
    "topic": "Tuple constraints",
    "type": "written",
    "prompt": "Write a CREATE TABLE for LimitedSells(bar,beer,price) where only Joe's Bar may charge more than 5, and price must be known and nonnegative.",
    "solution": "CREATE TABLE LimitedSells(bar CHAR(20) NOT NULL,beer CHAR(20),price REAL NOT NULL CHECK(price>=0),CHECK(bar='Joe''s Bar' OR price<=5));",
    "rubric": [
      "bar, beer, and price are declared.",
      "price is NOT NULL.",
      "price is constrained to be nonnegative.",
      "The Joe exception uses OR with price<=5.",
      "bar is required so an unknown bar cannot bypass the exception through UNKNOWN."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "bar, beer, and price are declared."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w04",
    "module": "constraints",
    "pages": [
      24,
      26
    ],
    "topic": "Assertions",
    "type": "written",
    "prompt": "In the lecture’s SQL notation, write an assertion that no bar charges an average known price over 5.",
    "solution": "CREATE ASSERTION NoRipoffBars CHECK(NOT EXISTS(SELECT bar FROM Sells GROUP BY bar HAVING AVG(price)>5));",
    "rubric": [
      "A named CREATE ASSERTION is used.",
      "The CHECK encloses a Boolean condition.",
      "The inner query groups Sells by bar.",
      "HAVING finds AVG(price)>5 violations.",
      "NOT EXISTS requires no violating group."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "A named CREATE ASSERTION is used."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w05",
    "module": "constraints",
    "pages": [
      37,
      38
    ],
    "topic": "Trigger design",
    "type": "written",
    "prompt": "In lecture notation, log a bar in RipoffBars after a price update that raises a sale price by more than 1.",
    "solution": "CREATE TRIGGER PriceTrig AFTER UPDATE OF price ON Sells\nREFERENCING OLD ROW AS o NEW ROW AS n\nFOR EACH ROW WHEN(n.price>o.price+1)\nINSERT INTO RipoffBars VALUES(n.bar);",
    "rubric": [
      "The event is AFTER UPDATE OF price ON Sells.",
      "Old and new row values are both available.",
      "The trigger is row-level.",
      "The condition uses new price>old price+1, strictly.",
      "The action inserts the new row’s bar into RipoffBars."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "The event is AFTER UPDATE OF price ON Sells."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w06",
    "module": "transactions",
    "pages": [
      6,
      8
    ],
    "topic": "ACID explanation",
    "type": "written",
    "prompt": "Explain ACID using a transfer that debits one account and credits another.",
    "solution": "Atomicity: both balance changes occur or neither does. Consistency: declared and application integrity rules remain satisfied. Isolation: concurrent transactions are controlled so the required visibility/correctness guarantees hold. Durability: committed effects survive relevant system failures.",
    "rubric": [
      "Atomicity is explained as all-or-nothing.",
      "Consistency is tied to preserved valid rules.",
      "Isolation is distinguished from atomicity.",
      "Durability applies after commit.",
      "The transfer example mentions both the debit and credit."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "Atomicity is explained as all-or-nothing."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w07",
    "module": "transactions",
    "pages": [
      9,
      14,
      22
    ],
    "topic": "Schedule trace",
    "type": "written",
    "prompt": "Use the lecture’s initial Joe prices 2.50 and 3.00. Trace max,delete,insert(3.50),commit,min under read committed, assuming max occurred before Joe began.",
    "solution": "MAX reads 3.00. Joe deletes the old rows, inserts 3.50, and commits. MIN then reads the committed replacement 3.50. The two read-committed statements can observe different committed states; the pair MAX<MIN does not describe one simultaneous table state.",
    "rubric": [
      "The initial maximum is 3.00.",
      "The deletion removes both initial listings.",
      "The insertion creates the 3.50 replacement.",
      "The later minimum is 3.50 after commit.",
      "The explanation identifies different committed states rather than a dirty read."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "The initial maximum is 3.00."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w08",
    "module": "views",
    "pages": [
      7,
      10
    ],
    "topic": "View write semantics",
    "type": "written",
    "prompt": "Explain how an insert (drinker,beer,bar) into Synergy can be interpreted, and why price is missing.",
    "solution": "An INSTEAD OF INSERT trigger can insert (drinker,beer) into Likes, (bar,beer) into Sells, and (drinker,bar) into Frequents. Because the view tuple has no price attribute, the new sale price is NULL or an explicitly chosen default. Existing keys/conflicts must be handled or the insert can fail.",
    "rubric": [
      "The action uses an INSTEAD OF trigger.",
      "The Likes pair is identified.",
      "The Sells pair is identified.",
      "The Frequents pair is identified.",
      "No known price is invented from a tuple that lacks a price."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "The action uses an INSTEAD OF trigger."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w09",
    "module": "views",
    "pages": [
      18,
      21
    ],
    "topic": "Index tradeoff",
    "type": "written",
    "prompt": "For 90% price lookups by (bar,beer) and 10% inserts, recommend an index and explain one cost.",
    "solution": "An index on Sells(bar,beer) directly supports the lookup predicate, unless the composite primary key already supplies the equivalent index. Extra index entries consume storage and require maintenance on relevant writes. Beers(manf) does not help this stated lookup workload.",
    "rubric": [
      "Sells is the indexed relation.",
      "bar and beer are the useful attributes.",
      "The 90% lookup share is connected to the benefit.",
      "An existing key index is considered before creating a duplicate.",
      "Storage or write-maintenance cost is stated."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "Sells is the indexed relation."
    ],
    "difficulty": "Applied"
  },
  {
    "id": "w10",
    "module": "advanced",
    "pages": [
      43,
      45
    ],
    "topic": "Deletion reasoning",
    "type": "written",
    "prompt": "Explain why both same-manufacturer beers are removed in the lecture’s mark-then-delete example even though the first deletion could appear to remove the other row’s witness.",
    "solution": "The lecture defines the qualifying set using the pre-deletion state, marks every qualifying tuple, then deletes the marked set. Both beers initially have another beer of the same manufacturer, so both are marked. This is a conceptual SQL semantics exercise; do not infer an arbitrary row visitation algorithm.",
    "rubric": [
      "The pre-deletion state is used for qualification.",
      "Each beer has a different-name witness initially.",
      "Both beers are marked.",
      "All marked rows are deleted.",
      "The explanation avoids treating it as an arbitrary changing loop."
    ],
    "explanation": "Compare your answer to each rubric item. These points are self-assessed; the app does not automatically judge free text.",
    "hints": [
      "The pre-deletion state is used for qualification."
    ],
    "difficulty": "Applied"
  }
];
