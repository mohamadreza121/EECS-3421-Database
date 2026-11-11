export const exams = [
  {
    "id": "paper-a",
    "title": "Mock A · Build the foundations",
    "description": "A balanced first paper: basic SQL, joins, grouping, integrity, and triggers.",
    "marks": 45,
    "minutes": 60,
    "items": [
      {
        "id": "paper-a-c09",
        "type": "mcq",
        "marks": 2,
        "module": "sql1",
        "pages": [
          28
        ],
        "topic": "Three-valued logic",
        "prompt": "Evaluate TRUE AND (FALSE OR NOT UNKNOWN).",
        "options": [
          "TRUE",
          "FALSE",
          "UNKNOWN",
          "Syntax error in the logic model"
        ],
        "answer": 2,
        "explanation": "NOT UNKNOWN=UNKNOWN, FALSE OR UNKNOWN=UNKNOWN, and TRUE AND UNKNOWN=UNKNOWN."
      },
      {
        "id": "paper-a-c17",
        "type": "mcq",
        "marks": 2,
        "module": "sql2",
        "pages": [
          17,
          19
        ],
        "topic": "IN vs JOIN",
        "prompt": "In the lecture R/S counterexample, IN outputs 1 once, while the join outputs 1 how many times?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 2,
        "explanation": "R.b=2 pairs with both S rows whose b is 2, so the join projects a=1 twice."
      },
      {
        "id": "paper-a-c43",
        "type": "mcq",
        "marks": 2,
        "module": "constraints",
        "pages": [
          13,
          17
        ],
        "topic": "Referential actions",
        "prompt": "ON DELETE SET NULL requires what additional compatibility?",
        "options": [
          "A NOT NULL child column",
          "A nullable child reference",
          "A unique price",
          "A materialized view"
        ],
        "answer": 1,
        "explanation": "The action must be allowed to assign NULL; a NOT NULL constraint would conflict."
      },
      {
        "id": "paper-a-c59",
        "type": "mcq",
        "marks": 2,
        "module": "transactions",
        "pages": [
          22
        ],
        "topic": "Read committed",
        "prompt": "READ COMMITTED guarantees which?",
        "options": [
          "Every read uses one transaction-wide snapshot in all engines",
          "Only committed values are read; later statements may see newer committed data",
          "Phantoms never occur",
          "All writers are serialized by the SQL syntax"
        ],
        "answer": 1,
        "explanation": "The standard-level protection is against dirty reads, not every possible change between statements."
      },
      {
        "id": "paper-a-c67",
        "type": "mcq",
        "marks": 2,
        "module": "views",
        "pages": [
          11,
          13
        ],
        "topic": "Materialization",
        "prompt": "A materialized view can become stale when what happens?",
        "options": [
          "Its result is sorted",
          "Base data changes before the next maintenance/refresh",
          "It has a name",
          "A query reads it twice"
        ],
        "answer": 1,
        "explanation": "The stored result may lag behind base-table changes until it is maintained or refreshed."
      },
      {
        "id": "paper-a-code1",
        "type": "written",
        "marks": 5,
        "module": "sql1",
        "pages": [
          22,
          25
        ],
        "topic": "Selection + patterns",
        "prompt": "Write a query returning name and phone for drinkers who live in Toronto or York and whose phone matches a 555- exchange with exactly four following characters.",
        "solution": "SELECT name,phone FROM Drinkers WHERE (addr='Toronto' OR addr='York') AND phone LIKE '%555-____';",
        "rubric": [
          "Return name and phone.",
          "Read Drinkers.",
          "Group the Toronto/York alternatives.",
          "Apply the %555-____ pattern with four adjacent underscores.",
          "Connect the address condition and pattern with AND; use valid string quotes."
        ]
      },
      {
        "id": "paper-a-code2",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          3,
          7
        ],
        "topic": "Join multiplicity",
        "prompt": "Return distinct manufacturer names of beers liked by people who frequent Joe's Bar. Exclude unknown manufacturers.",
        "solution": "SELECT DISTINCT b.manf FROM Beers b JOIN Likes l ON b.name=l.beer JOIN Frequents f ON l.drinker=f.drinker WHERE f.bar='Joe''s Bar' AND b.manf IS NOT NULL;",
        "rubric": [
          "Project manufacturer, not beer.",
          "Join Beers.name to Likes.beer.",
          "Join Likes.drinker to Frequents.drinker.",
          "Filter Joe’s Bar and known manufacturers.",
          "Use DISTINCT and valid complete syntax."
        ]
      },
      {
        "id": "paper-a-code3",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          22,
          29
        ],
        "topic": "Grouping",
        "prompt": "For each beer with at least two known-price listings, return beer and its average known price.",
        "solution": "SELECT beer,AVG(price) FROM Sells GROUP BY beer HAVING COUNT(price)>=2;",
        "rubric": [
          "Project beer and AVG(price).",
          "Read Sells.",
          "Group by beer only.",
          "Use COUNT(price), not COUNT(*), for known-price count.",
          "Apply >=2 in HAVING with coherent syntax."
        ]
      },
      {
        "id": "paper-a-code4",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          20,
          21
        ],
        "topic": "Absence",
        "prompt": "Return names of drinkers who do not like any beer sold at The Pub.",
        "solution": "SELECT d.name FROM Drinkers d WHERE NOT EXISTS(SELECT 1 FROM Likes l JOIN Sells s ON l.beer=s.beer WHERE l.drinker=d.name AND s.bar='The Pub');",
        "rubric": [
          "Start from all Drinkers candidates.",
          "Connect Likes.beer to Sells.beer.",
          "Correlate the inner liker to the outer person.",
          "Restrict sale rows to The Pub.",
          "Use NOT EXISTS or an equally correct absence formulation, including zero-like people."
        ]
      },
      {
        "id": "paper-a-code5",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          13,
          21
        ],
        "topic": "Outer aggregation",
        "prompt": "Return every beer name and the number of bars selling it, including zero for unsold beers.",
        "solution": "SELECT b.name,COUNT(s.bar) FROM Beers b LEFT JOIN Sells s ON b.name=s.beer GROUP BY b.name;",
        "rubric": [
          "Preserve Beers as the left relation.",
          "Join Beers.name to Sells.beer.",
          "Group by beer identity.",
          "Count a matched Sells key, not COUNT(*) on the padded row.",
          "Return one name/count row per beer, including zero."
        ]
      },
      {
        "id": "paper-a-code6",
        "type": "written",
        "marks": 5,
        "module": "constraints",
        "pages": [
          16,
          17
        ],
        "topic": "Referential policy",
        "prompt": "Write a separate Offers table whose nullable beer references Beers.name, clears the child reference on parent deletion, and follows parent renames.",
        "solution": "CREATE TABLE Offers(beer CHAR(20),price REAL,FOREIGN KEY(beer) REFERENCES Beers(name) ON DELETE SET NULL ON UPDATE CASCADE);",
        "rubric": [
          "Offers contains a beer column.",
          "The reference targets Beers(name).",
          "ON DELETE SET NULL is specified.",
          "ON UPDATE CASCADE is specified.",
          "beer permits NULL so the deletion policy can work."
        ]
      },
      {
        "id": "paper-a-code7",
        "type": "written",
        "marks": 5,
        "module": "constraints",
        "pages": [
          37,
          38
        ],
        "topic": "Trigger design",
        "prompt": "In lecture notation, log a bar in RipoffBars after a price update that raises a sale price by more than 1.",
        "solution": "CREATE TRIGGER PriceTrig AFTER UPDATE OF price ON Sells\nREFERENCING OLD ROW AS o NEW ROW AS n\nFOR EACH ROW WHEN(n.price>o.price+1)\nINSERT INTO RipoffBars VALUES(n.bar);",
        "rubric": [
          "The event is AFTER UPDATE OF price ON Sells.",
          "Old and new row values are both available.",
          "The trigger is row-level.",
          "The condition uses new price>old price+1, strictly.",
          "The action inserts the new row’s bar into RipoffBars."
        ]
      }
    ]
  },
  {
    "id": "paper-b",
    "title": "Mock B · Reason through edge cases",
    "description": "A second paper emphasizing bags, NULLs, global rules, and reusable queries.",
    "marks": 45,
    "minutes": 60,
    "items": [
      {
        "id": "paper-b-c21",
        "type": "mcq",
        "marks": 2,
        "module": "sql2",
        "pages": [
          22,
          23
        ],
        "topic": "Quantifiers",
        "prompt": "For the empty subquery result, which pair is correct?",
        "options": [
          "ANY TRUE; ALL FALSE",
          "ANY FALSE; ALL TRUE",
          "Both UNKNOWN",
          "Both FALSE"
        ],
        "answer": 1,
        "explanation": "There is no witness for ANY, while no counterexample exists against ALL."
      },
      {
        "id": "paper-b-c31",
        "type": "mcq",
        "marks": 2,
        "module": "advanced",
        "pages": [
          20,
          21
        ],
        "topic": "COUNT and NULL",
        "prompt": "Bud prices are 2.50,3.00,NULL. What are COUNT(*) and COUNT(price)?",
        "options": [
          "2 and 2",
          "3 and 3",
          "3 and 2",
          "2 and 3"
        ],
        "answer": 2,
        "explanation": "There are three listing rows but only two known price values."
      },
      {
        "id": "paper-b-c49",
        "type": "mcq",
        "marks": 2,
        "module": "constraints",
        "pages": [
          33
        ],
        "topic": "Trigger granularity",
        "prompt": "An UPDATE changes four rows. A row-level trigger with a TRUE condition fires how many times?",
        "options": [
          "0",
          "1",
          "4",
          "16"
        ],
        "answer": 2,
        "explanation": "A row trigger is considered once per affected row. A statement-level trigger is once per statement."
      },
      {
        "id": "paper-b-c57",
        "type": "mcq",
        "marks": 2,
        "module": "transactions",
        "pages": [
          7,
          8
        ],
        "topic": "Transaction control",
        "prompt": "Can ROLLBACK undo an earlier transaction that has already committed?",
        "options": [
          "Yes, always",
          "No",
          "Only if it used WHERE",
          "Only for views"
        ],
        "answer": 1,
        "explanation": "ROLLBACK undoes the active uncommitted transaction, not a completed committed one."
      },
      {
        "id": "paper-b-c69",
        "type": "mcq",
        "marks": 2,
        "module": "views",
        "pages": [
          18,
          19
        ],
        "topic": "Workloads",
        "prompt": "For the lecture’s 90% (bar,beer) price lookups and 10% inserts, which candidate directly fits the lookup?",
        "options": [
          "Beers(manf)",
          "Sells(bar,beer)",
          "Drinkers(phone)",
          "Likes(drinker)"
        ],
        "answer": 1,
        "explanation": "Sells(bar,beer) supports the dominant lookup. An existing primary-key index may already supply this access path."
      },
      {
        "id": "paper-b-code1",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          8,
          9
        ],
        "topic": "Self-join",
        "prompt": "Return unordered pairs of different drinkers who live at the same known address. List the alphabetically smaller name first.",
        "solution": "SELECT d1.name,d2.name FROM Drinkers d1 JOIN Drinkers d2 ON d1.addr=d2.addr WHERE d1.addr IS NOT NULL AND d1.name<d2.name;",
        "rubric": [
          "Use two Drinkers aliases.",
          "Match equal addresses.",
          "Only known addresses can qualify.",
          "Use strict name ordering to exclude self/reverse pairs.",
          "Return exactly the two requested names in coherent SQL."
        ]
      },
      {
        "id": "paper-b-code2",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          13,
          14
        ],
        "topic": "Scalar values",
        "prompt": "Return bar and beer for all listings with a known price strictly higher than Joe's Bud price.",
        "solution": "SELECT bar,beer FROM Sells WHERE price>(SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud');",
        "rubric": [
          "Return bar and beer.",
          "Use Sells as the candidate relation.",
          "Look up Joe/Bud using both key attributes.",
          "Use a strict > comparison to the scalar result.",
          "Do not hardcode 2.50; preserve correct missing-price behavior."
        ]
      },
      {
        "id": "paper-b-code3",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          26,
          29
        ],
        "topic": "HAVING",
        "prompt": "Return drinker and number of distinct obtainable beers for visitors who can obtain at least three distinct beers at their frequented bars.",
        "solution": "SELECT f.drinker,COUNT(DISTINCT s.beer) FROM Frequents f JOIN Sells s ON f.bar=s.bar GROUP BY f.drinker HAVING COUNT(DISTINCT s.beer)>=3;",
        "rubric": [
          "Join Frequents and Sells on bar.",
          "Group by drinker.",
          "Count DISTINCT beer to avoid cross-bar duplicates.",
          "Use the distinct count in HAVING >=3.",
          "Return the requested name/count grain."
        ]
      },
      {
        "id": "paper-b-code4",
        "type": "written",
        "marks": 5,
        "module": "views",
        "pages": [
          3,
          6
        ],
        "topic": "View definition",
        "prompt": "Define a virtual view KnownOffers(bar,beer,price) containing only known-price listings and then query it for prices under 3.",
        "solution": "CREATE VIEW KnownOffers AS SELECT bar,beer,price FROM Sells WHERE price IS NOT NULL;\nSELECT bar,beer,price FROM KnownOffers WHERE price<3;",
        "rubric": [
          "Use CREATE VIEW ... AS.",
          "The view projects bar, beer, and price.",
          "The definition filters price IS NOT NULL.",
          "The second query reads KnownOffers.",
          "The second query tests price<3 and has coherent syntax."
        ]
      },
      {
        "id": "paper-b-code5",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          31,
          39
        ],
        "topic": "INSERT SELECT",
        "prompt": "Insert one PotBuddies row per person other than Fred who frequents at least one bar Fred frequents. Assume PotBuddies is initially empty.",
        "solution": "INSERT INTO PotBuddies(name) SELECT DISTINCT f2.drinker FROM Frequents f1 JOIN Frequents f2 ON f1.bar=f2.bar WHERE f1.drinker='Fred' AND f2.drinker<>'Fred';",
        "rubric": [
          "Insert into PotBuddies(name) from a SELECT.",
          "Use two visit roles.",
          "Match the bar values.",
          "Fix one role to Fred and exclude Fred from the other.",
          "Use DISTINCT for one insertion per person."
        ]
      },
      {
        "id": "paper-b-code6",
        "type": "written",
        "marks": 5,
        "module": "constraints",
        "pages": [
          22
        ],
        "topic": "Tuple constraints",
        "prompt": "Write a CREATE TABLE for LimitedSells(bar,beer,price) where only Joe's Bar may charge more than 5, and price must be known and nonnegative.",
        "solution": "CREATE TABLE LimitedSells(bar CHAR(20) NOT NULL,beer CHAR(20),price REAL NOT NULL CHECK(price>=0),CHECK(bar='Joe''s Bar' OR price<=5));",
        "rubric": [
          "bar, beer, and price are declared.",
          "price is NOT NULL.",
          "price is constrained to be nonnegative.",
          "The Joe exception uses OR with price<=5.",
          "bar is required so an unknown bar cannot bypass the exception through UNKNOWN."
        ]
      },
      {
        "id": "paper-b-code7",
        "type": "written",
        "marks": 5,
        "module": "constraints",
        "pages": [
          24,
          26
        ],
        "topic": "Assertions",
        "prompt": "In the lecture’s SQL notation, write an assertion that no bar charges an average known price over 5.",
        "solution": "CREATE ASSERTION NoRipoffBars CHECK(NOT EXISTS(SELECT bar FROM Sells GROUP BY bar HAVING AVG(price)>5));",
        "rubric": [
          "A named CREATE ASSERTION is used.",
          "The CHECK encloses a Boolean condition.",
          "The inner query groups Sells by bar.",
          "HAVING finds AVG(price)>5 violations.",
          "NOT EXISTS requires no violating group."
        ]
      }
    ]
  },
  {
    "id": "paper-c",
    "title": "Mock C · Complete rehearsal",
    "description": "A final mixed paper across queries, updates, constraints, views, and transactions.",
    "marks": 45,
    "minutes": 60,
    "items": [
      {
        "id": "paper-c-c16",
        "type": "mcq",
        "marks": 2,
        "module": "sql2",
        "pages": [
          12,
          14
        ],
        "topic": "Scalar subqueries",
        "prompt": "Which is the safe portable shape for a scalar subquery?",
        "options": [
          "Any number of columns and rows",
          "One column and at most one row",
          "Exactly two rows",
          "A sorted result of any size"
        ],
        "answer": 1,
        "explanation": "A scalar comparison needs one value. A zero-row result is NULL; multiple rows are an error in standard-style SQL/PostgreSQL. SQLite’s first-row behavior is not portable."
      },
      {
        "id": "paper-c-c24",
        "type": "mcq",
        "marks": 2,
        "module": "sql2",
        "pages": [
          32
        ],
        "topic": "Bag difference",
        "prompt": "If x occurs five times on the left and twice on the right, EXCEPT ALL keeps how many?",
        "options": [
          "0",
          "1",
          "3",
          "5"
        ],
        "answer": 2,
        "explanation": "Bag difference keeps max(5−2,0)=3 copies. SQLite does not implement EXCEPT ALL; this is paper reasoning."
      },
      {
        "id": "paper-c-c45",
        "type": "mcq",
        "marks": 2,
        "module": "constraints",
        "pages": [
          18,
          22
        ],
        "topic": "CHECK",
        "prompt": "A nullable price has CHECK(price>0). What happens for NULL?",
        "options": [
          "It is always rejected",
          "It is not rejected by this CHECK alone",
          "It becomes 0",
          "It becomes the smallest positive number"
        ],
        "answer": 1,
        "explanation": "The comparison is UNKNOWN. CHECK rejects FALSE, so a separate NOT NULL is needed to require a value."
      },
      {
        "id": "paper-c-c58",
        "type": "mcq",
        "marks": 2,
        "module": "transactions",
        "pages": [
          9,
          14
        ],
        "topic": "Schedule trace",
        "prompt": "In the lecture’s 2.50/3.00 initial scenario, max,delete,insert(3.50),min returns what pair?",
        "options": [
          "MAX=3.00, MIN=2.50",
          "MAX=3.00, MIN=3.50",
          "MAX=3.50, MIN=3.50",
          "Both NULL"
        ],
        "answer": 1,
        "explanation": "MAX is read before the replacement; MIN after it. The two answers describe different database states."
      },
      {
        "id": "paper-c-c65",
        "type": "mcq",
        "marks": 2,
        "module": "views",
        "pages": [
          7,
          10
        ],
        "topic": "View triggers",
        "prompt": "What does an INSTEAD OF INSERT trigger on a joined view provide?",
        "options": [
          "An automatically chosen sale price",
          "A meaning for the write in terms of base-table actions",
          "Guaranteed duplicate elimination",
          "A stronger isolation level"
        ],
        "answer": 1,
        "explanation": "The trigger translates the logical view write into specified modifications, such as the three pair insertions in Synergy."
      },
      {
        "id": "paper-c-code1",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          20,
          21
        ],
        "topic": "Universal query",
        "prompt": "Return drinker names who like every beer manufactured by Anheuser-Busch. Include all drinkers if that manufacturer has no beers.",
        "solution": "SELECT d.name FROM Drinkers d WHERE NOT EXISTS(SELECT 1 FROM Beers b WHERE b.manf='Anheuser-Busch' AND NOT EXISTS(SELECT 1 FROM Likes l WHERE l.drinker=d.name AND l.beer=b.name));",
        "rubric": [
          "Start from all Drinkers.",
          "Restrict the required Beers set to the manufacturer.",
          "Correlate Likes to both the person and required beer.",
          "Reject a person only when a missing required like exists.",
          "Handle an empty requirement set correctly."
        ]
      },
      {
        "id": "paper-c-code2",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          19,
          26
        ],
        "topic": "Grouped distinct count",
        "prompt": "Return manufacturer and the number of different beers sold for each known manufacturer with at least two different sold beers.",
        "solution": "SELECT b.manf,COUNT(DISTINCT b.name) FROM Beers b JOIN Sells s ON b.name=s.beer WHERE b.manf IS NOT NULL GROUP BY b.manf HAVING COUNT(DISTINCT b.name)>=2;",
        "rubric": [
          "Join Beers to Sells by beer identity.",
          "Exclude unknown manufacturers.",
          "Group by manufacturer.",
          "Count DISTINCT beers rather than sale listings.",
          "Apply the same count >=2 in HAVING and return both requested columns."
        ]
      },
      {
        "id": "paper-c-code3",
        "type": "written",
        "marks": 5,
        "module": "advanced",
        "pages": [
          46,
          48
        ],
        "topic": "Modification",
        "prompt": "Increase every known Miller price by 0.50, and separately delete Bob's Bud like. Do not affect other rows.",
        "solution": "UPDATE Sells SET price=price+0.50 WHERE beer='Miller' AND price IS NOT NULL;\nDELETE FROM Likes WHERE drinker='Bob' AND beer='Bud';",
        "rubric": [
          "Use UPDATE Sells with price=price+0.50.",
          "Restrict to Miller.",
          "Do not assign a numeric price to missing values.",
          "Use DELETE FROM Likes.",
          "Restrict deletion by both Bob and Bud, with valid syntax."
        ]
      },
      {
        "id": "paper-c-code4",
        "type": "written",
        "marks": 5,
        "module": "sql2",
        "pages": [
          25,
          30
        ],
        "topic": "Sets",
        "prompt": "Return drinker names that occur in exactly one of the two sets: people with a Likes fact and people with a Frequents fact. One copy per name.",
        "solution": "SELECT drinker FROM (SELECT drinker FROM Likes EXCEPT SELECT drinker FROM Frequents)\nUNION\nSELECT drinker FROM (SELECT drinker FROM Frequents EXCEPT SELECT drinker FROM Likes);",
        "rubric": [
          "Compute liked-person names absent from visitors.",
          "Compute visitor names absent from likers.",
          "Combine both directional differences.",
          "Use set semantics to avoid duplicates.",
          "Return exactly one name column with correct grouping/parentheses for the chosen dialect."
        ]
      },
      {
        "id": "paper-c-code5",
        "type": "written",
        "marks": 5,
        "module": "constraints",
        "pages": [
          5,
          10
        ],
        "topic": "DDL",
        "prompt": "Write CREATE TABLE for Beers(name,manf) and Sells(bar,beer,price). Beers.name is a primary key. Sells has key (bar,beer); its beer references Beers.name.",
        "solution": "CREATE TABLE Beers(name CHAR(20) PRIMARY KEY,manf CHAR(20));\nCREATE TABLE Sells(bar CHAR(20),beer CHAR(20),price REAL,PRIMARY KEY(bar,beer),FOREIGN KEY(beer) REFERENCES Beers(name));",
        "rubric": [
          "Beers has both attributes and a primary key on name.",
          "Sells has bar, beer, and price with sensible types.",
          "The Sells primary key is the pair (bar,beer).",
          "Sells.beer references Beers.name.",
          "The parent is declared before or otherwise validly available to the child."
        ]
      },
      {
        "id": "paper-c-code6",
        "type": "written",
        "marks": 5,
        "module": "views",
        "pages": [
          7,
          10
        ],
        "topic": "View trigger",
        "prompt": "In lecture notation, write the INSTEAD OF INSERT trigger that maps a new Synergy(drinker,beer,bar) row into three projected base pairs. Assume parent entities exist and pairs are new.",
        "solution": "CREATE TRIGGER ViewTrig INSTEAD OF INSERT ON Synergy\nREFERENCING NEW ROW AS n FOR EACH ROW\nBEGIN\n INSERT INTO Likes(drinker,beer) VALUES(n.drinker,n.beer);\n INSERT INTO Sells(bar,beer) VALUES(n.bar,n.beer);\n INSERT INTO Frequents(drinker,bar) VALUES(n.drinker,n.bar);\nEND;",
        "rubric": [
          "Use INSTEAD OF INSERT ON Synergy and a new row reference.",
          "Insert the drinker/beer pair into Likes.",
          "Insert the bar/beer pair into Sells.",
          "Insert the drinker/bar pair into Frequents.",
          "Group actions coherently and leave price unknown rather than inventing a value."
        ]
      },
      {
        "id": "paper-c-code7",
        "type": "written",
        "marks": 5,
        "module": "transactions",
        "pages": [
          7,
          8
        ],
        "topic": "Transaction boundary",
        "prompt": "Using SQLite-style BEGIN for the start, write a transaction that temporarily sets Joe's Bud to 9, queries it, and then undoes that change. State what COMMIT would do instead.",
        "solution": "BEGIN;\nUPDATE Sells SET price=9 WHERE bar='Joe''s Bar' AND beer='Bud';\nSELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';\nROLLBACK;\n-- COMMIT instead would retain the change in the current database.",
        "rubric": [
          "Start an explicit transaction before modifying.",
          "Target Joe/Bud using both key attributes.",
          "Set the intended temporary price.",
          "Read the temporary value before ROLLBACK.",
          "Use ROLLBACK and distinguish it from COMMIT; do not claim crash persistence in this in-memory app."
        ]
      }
    ]
  }
];
