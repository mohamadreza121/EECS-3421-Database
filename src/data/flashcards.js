export const flashcards = [
  {
    "id": "f-c01",
    "module": "sql1",
    "pages": [
      4,
      9
    ],
    "front": "What is the logical reading order of a basic single-table query?",
    "back": "FROM → WHERE → SELECT. FROM supplies rows, WHERE filters them, and SELECT constructs the output. The optimizer may use a different physical plan."
  },
  {
    "id": "f-c02",
    "module": "sql1",
    "pages": [
      14,
      15
    ],
    "front": "What does SELECT name AS beer FROM Beers change?",
    "back": "The output column label. AS labels the result column. It does not alter Beers or update its rows."
  },
  {
    "id": "f-c03",
    "module": "sql1",
    "pages": [
      16,
      17
    ],
    "front": "If price is NULL, what is price*114?",
    "back": "NULL. Arithmetic on an unknown price remains unknown; multiplication does not invent a known value."
  },
  {
    "id": "f-c05",
    "module": "sql1",
    "pages": [
      24,
      25
    ],
    "front": "In a LIKE pattern, what does one underscore match?",
    "back": "Exactly one character. The underscore matches one character of any kind; % matches an arbitrary-length sequence."
  },
  {
    "id": "f-c06",
    "module": "sql1",
    "pages": [
      25
    ],
    "front": "How many character positions follow 555- in LIKE '%555-____'?",
    "back": "Exactly four. Each underscore matches exactly one character, so four adjacent underscores require four positions."
  },
  {
    "id": "f-c07",
    "module": "sql1",
    "pages": [
      26,
      27
    ],
    "front": "Which correctly selects missing prices?",
    "back": "price IS NULL. IS NULL tests missingness. Equality to the string NULL tests text, while ordinary equality to NULL is UNKNOWN."
  },
  {
    "id": "f-c08",
    "module": "sql1",
    "pages": [
      27,
      30
    ],
    "front": "What happens to a row whose WHERE condition is UNKNOWN?",
    "back": "It is excluded. WHERE retains only TRUE. FALSE and UNKNOWN both fail the selection condition."
  },
  {
    "id": "f-c09",
    "module": "sql1",
    "pages": [
      28
    ],
    "front": "Evaluate TRUE AND (FALSE OR NOT UNKNOWN).",
    "back": "UNKNOWN. NOT UNKNOWN=UNKNOWN, FALSE OR UNKNOWN=UNKNOWN, and TRUE AND UNKNOWN=UNKNOWN."
  },
  {
    "id": "f-c10",
    "module": "sql1",
    "pages": [
      28,
      30
    ],
    "front": "Which is TRUE?",
    "back": "TRUE OR UNKNOWN. TRUE OR UNKNOWN is TRUE because one disjunct is definitely TRUE. The other expressions remain UNKNOWN."
  },
  {
    "id": "f-c11",
    "module": "sql1",
    "pages": [
      29,
      30
    ],
    "front": "For a NULL price, price<2 OR price>=2 evaluates to what?",
    "back": "UNKNOWN. Each comparison is UNKNOWN, so their OR is UNKNOWN. The row is not selected."
  },
  {
    "id": "f-c13",
    "module": "sql2",
    "pages": [
      3,
      7
    ],
    "front": "Sally and Fred both like Bud and frequent Joe’s. The raw join projects beer without DISTINCT. How many Bud copies do these two people contribute?",
    "back": "2. Each qualifying person produces a matched pair and contributes one Bud copy. Projection does not remove duplicate rows by default."
  },
  {
    "id": "f-c14",
    "module": "sql2",
    "pages": [
      8,
      9
    ],
    "front": "Why does the beer-pair query use b1.name<b2.name?",
    "back": "To keep one orientation and exclude self-pairs. The strict ordering keeps only one orientation and rejects equal-name self-pairs. ORDER BY would sort rows without removing pairs."
  },
  {
    "id": "f-c16",
    "module": "sql2",
    "pages": [
      12,
      14
    ],
    "front": "Which is the safe portable shape for a scalar subquery?",
    "back": "One column and at most one row. A scalar comparison needs one value. A zero-row result is NULL; multiple rows are an error in standard-style SQL/PostgreSQL. SQLite’s first-row behavior is not portable."
  },
  {
    "id": "f-c17",
    "module": "sql2",
    "pages": [
      17,
      19
    ],
    "front": "In the lecture R/S counterexample, IN outputs 1 once, while the join outputs 1 how many times?",
    "back": "2. R.b=2 pairs with both S rows whose b is 2, so the join projects a=1 twice."
  },
  {
    "id": "f-c18",
    "module": "sql2",
    "pages": [
      15,
      19
    ],
    "front": "Repeated copies of a value inside an IN subquery do what to a qualifying outer row?",
    "back": "Do not multiply it. IN tests membership for each outer row. Inner duplicates do not produce extra copies of that outer row."
  },
  {
    "id": "f-c19",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "front": "If a subquery returns one row whose selected value is NULL, EXISTS is what?",
    "back": "TRUE. EXISTS checks whether a row exists, not whether the projected value is known."
  },
  {
    "id": "f-c20",
    "module": "sql2",
    "pages": [
      21
    ],
    "front": "What makes a subquery correlated?",
    "back": "It refers to an outer query row. A reference such as b2.manf=b1.manf depends on the current b1 outer row."
  },
  {
    "id": "f-c21",
    "module": "sql2",
    "pages": [
      22,
      23
    ],
    "front": "For the empty subquery result, which pair is correct?",
    "back": "ANY FALSE; ALL TRUE. There is no witness for ANY, while no counterexample exists against ALL."
  },
  {
    "id": "f-c22",
    "module": "sql2",
    "pages": [
      23,
      24
    ],
    "front": "Why is price>=ALL(SELECT price FROM Sells) not always equivalent to price=MAX(price)?",
    "back": "ALL can be affected by NULLs and empty inputs. MAX ignores NULL inputs, while quantified comparisons can become UNKNOWN. Empty-set semantics also differ."
  },
  {
    "id": "f-c23",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "front": "If x appears twice on each side, UNION ALL contains how many x copies?",
    "back": "4. UNION ALL adds multiplicities: 2+2=4. UNION would keep one distinct x."
  },
  {
    "id": "f-c24",
    "module": "sql2",
    "pages": [
      32
    ],
    "front": "If x occurs five times on the left and twice on the right, EXCEPT ALL keeps how many?",
    "back": "3. Bag difference keeps max(5−2,0)=3 copies. SQLite does not implement EXCEPT ALL; this is paper reasoning."
  },
  {
    "id": "f-c25",
    "module": "sql2",
    "pages": [
      34
    ],
    "front": "Likes NATURAL JOIN Sells matches which shared attribute in the course schema?",
    "back": "beer. Likes(drinker,beer) and Sells(bar,beer,price) share only beer."
  },
  {
    "id": "f-c27",
    "module": "advanced",
    "pages": [
      3,
      7
    ],
    "front": "Which maps are correct?",
    "back": "δ→DISTINCT, τ→ORDER BY. δ eliminates duplicates; τ sorts. γ groups and aggregates."
  },
  {
    "id": "f-c29",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "front": "What happens to an unmatched left row in a LEFT JOIN?",
    "back": "It is kept, with right-side columns NULL. A left outer join preserves left-side dangling rows and pads the missing partner with NULL."
  },
  {
    "id": "f-c30",
    "module": "advanced",
    "pages": [
      16
    ],
    "front": "To keep every bar but attach only Bud listings, where does s.beer=Bud belong?",
    "back": "In ON with the bar matching condition. Putting the right-side restriction in ON restricts matches while preserving unmatched Bars rows. WHERE would reject NULL-padded rows."
  },
  {
    "id": "f-c31",
    "module": "advanced",
    "pages": [
      20,
      21
    ],
    "front": "Bud prices are 2.50,3.00,NULL. What are COUNT(*) and COUNT(price)?",
    "back": "3 and 2. There are three listing rows but only two known price values."
  },
  {
    "id": "f-c32",
    "module": "advanced",
    "pages": [
      18,
      20
    ],
    "front": "For 2.50,3.00,NULL, AVG(price) is what?",
    "back": "2.75. AVG divides the sum 5.50 by two non-NULL inputs."
  },
  {
    "id": "f-c33",
    "module": "advanced",
    "pages": [
      19
    ],
    "front": "Two known Heineken prices are both 3.50. COUNT(DISTINCT price) is what?",
    "back": "1. DISTINCT removes the repeated known aggregate input before counting."
  },
  {
    "id": "f-c34",
    "module": "advanced",
    "pages": [
      20
    ],
    "front": "On an empty input without GROUP BY, which pair is correct?",
    "back": "COUNT(*)=0; SUM(price)=NULL. COUNT returns 0; SUM/AVG/MIN/MAX return NULL when no non-NULL values exist."
  },
  {
    "id": "f-c35",
    "module": "advanced",
    "pages": [
      25
    ],
    "front": "Which follows the lecture’s grouped SELECT restriction?",
    "back": "SELECT beer,AVG(price) FROM Sells GROUP BY beer. beer is the grouping attribute and price is aggregated. The others expose ungrouped, nonaggregated attributes."
  },
  {
    "id": "f-c36",
    "module": "advanced",
    "pages": [
      26,
      29
    ],
    "front": "Which clause keeps beer groups offered at least three times?",
    "back": "HAVING COUNT(*)>=3. HAVING tests aggregate properties of groups after GROUP BY."
  },
  {
    "id": "f-c37",
    "module": "advanced",
    "pages": [
      34,
      36
    ],
    "front": "A column has DEFAULT 7 and permits NULL. Inserting explicit NULL stores what?",
    "back": "NULL. An explicit NULL is a supplied value. The default applies when the column is omitted or DEFAULT is explicitly requested in supported syntax."
  },
  {
    "id": "f-c38",
    "module": "advanced",
    "pages": [
      40,
      42
    ],
    "front": "After DELETE FROM Likes with no WHERE, what remains?",
    "back": "The same table with zero rows. DELETE removes rows. The schema remains until a command such as DROP TABLE removes it."
  },
  {
    "id": "f-c39",
    "module": "advanced",
    "pages": [
      43,
      45
    ],
    "front": "In the lecture’s two-beer same-manufacturer example, which rows are marked for deletion?",
    "back": "Both initially qualifying rows. The teaching model identifies the qualifying set before deleting it, so both initially qualifying beers are marked."
  },
  {
    "id": "f-c40",
    "module": "constraints",
    "pages": [
      5,
      6
    ],
    "front": "PRIMARY KEY(bar,beer) means what?",
    "back": "Each bar–beer combination appears once. The combination is unique. Repeating a bar with a different beer or vice versa is allowed."
  },
  {
    "id": "f-c41",
    "module": "constraints",
    "pages": [
      7,
      10
    ],
    "front": "The referenced parent attributes must be what?",
    "back": "A primary or unique key. The reference must identify a parent key tuple unambiguously."
  },
  {
    "id": "f-c42",
    "module": "constraints",
    "pages": [
      11,
      12
    ],
    "front": "Which can introduce a dangling child reference?",
    "back": "Inserting a child with a missing parent key. A child’s new reference must have a matching parent. A parent deletion/update can also strand existing children."
  },
  {
    "id": "f-c43",
    "module": "constraints",
    "pages": [
      13,
      17
    ],
    "front": "ON DELETE SET NULL requires what additional compatibility?",
    "back": "A nullable child reference. The action must be allowed to assign NULL; a NOT NULL constraint would conflict."
  },
  {
    "id": "f-c44",
    "module": "constraints",
    "pages": [
      14
    ],
    "front": "With ON UPDATE CASCADE, renaming parent Bud to Budweiser does what?",
    "back": "Renames the referencing child values. The new parent key is propagated into the child foreign-key values."
  },
  {
    "id": "f-c45",
    "module": "constraints",
    "pages": [
      18,
      22
    ],
    "front": "A nullable price has CHECK(price>0). What happens for NULL?",
    "back": "It is not rejected by this CHECK alone. The comparison is UNKNOWN. CHECK rejects FALSE, so a separate NOT NULL is needed to require a value."
  },
  {
    "id": "f-c47",
    "module": "constraints",
    "pages": [
      24,
      26
    ],
    "front": "For COUNT(Bars)<=COUNT(Drinkers), which change cannot create a violation from a satisfied state?",
    "back": "Insert a drinker. Increasing the right-hand count cannot make the inequality false."
  },
  {
    "id": "f-c48",
    "module": "constraints",
    "pages": [
      28
    ],
    "front": "ECA stands for what?",
    "back": "Event, Condition, Action. A trigger responds to an event, optionally tests a condition, and performs an action."
  },
  {
    "id": "f-c49",
    "module": "constraints",
    "pages": [
      33
    ],
    "front": "An UPDATE changes four rows. A row-level trigger with a TRUE condition fires how many times?",
    "back": "4. A row trigger is considered once per affected row. A statement-level trigger is once per statement."
  },
  {
    "id": "f-c50",
    "module": "constraints",
    "pages": [
      34
    ],
    "front": "Which event provides both OLD and NEW row values?",
    "back": "UPDATE. UPDATE has before and after versions. INSERT has NEW; DELETE has OLD."
  },
  {
    "id": "f-c52",
    "module": "constraints",
    "pages": [
      30,
      33
    ],
    "front": "If FOR EACH ROW is omitted in a SQLite trigger, it becomes what?",
    "back": "Still a row-level trigger. SQLite supports row triggers only. The course’s omission-means-statement convention belongs to its teaching notation, not SQLite."
  },
  {
    "id": "f-c54",
    "module": "workshop",
    "pages": [
      3
    ],
    "front": "Which three tables directly establish that a person can obtain a liked beer at a frequented bar?",
    "back": "Likes, Sells, Frequents. Likes connects person–beer, Frequents person–bar, and Sells bar–beer. All three relationships are needed."
  },
  {
    "id": "f-c55",
    "module": "transactions",
    "pages": [
      6
    ],
    "front": "Which property means the whole transaction or none of it is applied?",
    "back": "Atomicity. Atomicity makes the unit all-or-nothing. Isolation concerns concurrent interactions."
  },
  {
    "id": "f-c56",
    "module": "transactions",
    "pages": [
      6
    ],
    "front": "Which property concerns surviving a crash after commit?",
    "back": "Durability. Durability concerns retained committed effects. The in-memory browser lab does not demonstrate real crash durability."
  },
  {
    "id": "f-c57",
    "module": "transactions",
    "pages": [
      7,
      8
    ],
    "front": "Can ROLLBACK undo an earlier transaction that has already committed?",
    "back": "No. ROLLBACK undoes the active uncommitted transaction, not a completed committed one."
  },
  {
    "id": "f-c58",
    "module": "transactions",
    "pages": [
      9,
      14
    ],
    "front": "In the lecture’s 2.50/3.00 initial scenario, max,delete,insert(3.50),min returns what pair?",
    "back": "MAX=3.00, MIN=3.50. MAX is read before the replacement; MIN after it. The two answers describe different database states."
  },
  {
    "id": "f-c59",
    "module": "transactions",
    "pages": [
      22
    ],
    "front": "READ COMMITTED guarantees which?",
    "back": "Only committed values are read; later statements may see newer committed data. The standard-level protection is against dirty reads, not every possible change between statements."
  },
  {
    "id": "f-c60",
    "module": "transactions",
    "pages": [
      25
    ],
    "front": "A reader sees 3.50 from an uncommitted transaction that later rolls back. This is what?",
    "back": "A dirty read. The reader consumed a value that never became committed data."
  },
  {
    "id": "f-c61",
    "module": "transactions",
    "pages": [
      23,
      24
    ],
    "front": "Under the standard minimum model, which may still occur at REPEATABLE READ?",
    "back": "Phantom rows. The standard minimum prevents dirty/nonrepeatable reads but can allow phantoms. Some engines, including PostgreSQL, provide stronger repeatable-read guarantees."
  },
  {
    "id": "f-c62",
    "module": "transactions",
    "pages": [
      20
    ],
    "front": "A serializable outcome should be equivalent to what?",
    "back": "Some serial ordering of the transactions. The transactions can run concurrently physically, but the observable outcome must match an allowed serial order."
  },
  {
    "id": "f-c63",
    "module": "views",
    "pages": [
      3,
      6
    ],
    "front": "A virtual view stores what?",
    "back": "A query definition. The view’s definition is used against current base data; it is not a frozen snapshot."
  },
  {
    "id": "f-c64",
    "module": "views",
    "pages": [
      5,
      6
    ],
    "front": "CanDrink projects drinker and beer from visited bars without DISTINCT. If Sally can get Bud at two bars, how many Sally/Bud rows can appear?",
    "back": "2. The view inherits bag semantics from its query. Two qualifying bar listings contribute two copies."
  },
  {
    "id": "f-c65",
    "module": "views",
    "pages": [
      7,
      10
    ],
    "front": "What does an INSTEAD OF INSERT trigger on a joined view provide?",
    "back": "A meaning for the write in terms of base-table actions. The trigger translates the logical view write into specified modifications, such as the three pair insertions in Synergy."
  },
  {
    "id": "f-c66",
    "module": "views",
    "pages": [
      9,
      10
    ],
    "front": "Why does the lecture’s Synergy insertion give Sells.price=NULL?",
    "back": "The inserted view triple has no price attribute. The triple supplies drinker, beer, and bar but no known price, so the projected sale pair leaves price missing."
  },
  {
    "id": "f-c67",
    "module": "views",
    "pages": [
      11,
      13
    ],
    "front": "A materialized view can become stale when what happens?",
    "back": "Base data changes before the next maintenance/refresh. The stored result may lag behind base-table changes until it is maintained or refreshed."
  },
  {
    "id": "f-c68",
    "module": "views",
    "pages": [
      14,
      18
    ],
    "front": "What is the primary purpose of an index?",
    "back": "Speed suitable row access. An index is an access structure. It does not redefine what the query means."
  },
  {
    "id": "f-c69",
    "module": "views",
    "pages": [
      18,
      19
    ],
    "front": "For the lecture’s 90% (bar,beer) price lookups and 10% inserts, which candidate directly fits the lookup?",
    "back": "Sells(bar,beer). Sells(bar,beer) supports the dominant lookup. An existing primary-key index may already supply this access path."
  },
  {
    "id": "f-c70",
    "module": "views",
    "pages": [
      20,
      21
    ],
    "front": "What should a tuning advisor evaluate?",
    "back": "A representative query/update workload. Candidate indexes must be assessed against their combined workload benefit and maintenance cost."
  }
];
