export const commands = [
  {
    "id": "select",
    "name": "SELECT / FROM",
    "category": "Retrieve",
    "module": "sql1",
    "pages": [
      5,
      9
    ],
    "description": "Choose input tables and construct the result columns.",
    "syntax": "SELECT columns FROM table_name;",
    "example": "SELECT name FROM Beers WHERE manf='Anheuser-Busch';",
    "note": "Reason FROM → WHERE → SELECT. This is logical meaning, not a mandatory physical algorithm.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "star",
    "name": "SELECT *",
    "category": "Retrieve",
    "module": "sql1",
    "pages": [
      12,
      13
    ],
    "description": "Return every attribute of the input.",
    "syntax": "SELECT * FROM table_name;",
    "example": "SELECT * FROM Beers WHERE manf='Miller';",
    "note": "For a join, * includes the joined input’s columns; qualify or list columns when the output shape matters.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "alias",
    "name": "AS / table aliases",
    "category": "Retrieve",
    "module": "sql1",
    "pages": [
      14,
      15
    ],
    "description": "Label an output column or give a relation a shorter name.",
    "syntax": "SELECT t.column AS label FROM table_name AS t;",
    "example": "SELECT b.name AS beer,b.manf AS manufacturer FROM Beers AS b;",
    "note": "A result alias does not rename the stored column. SQL dialects differ on where a SELECT alias may be reused.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "expr",
    "name": "Expressions & constants",
    "category": "Retrieve",
    "module": "sql1",
    "pages": [
      16,
      21
    ],
    "description": "Compute a per-row value or add a source label.",
    "syntax": "SELECT column*factor AS label, 'constant' FROM table_name;",
    "example": "SELECT bar,beer,price*114 AS priceInYen FROM Sells;",
    "note": "NULL multiplied by 114 remains NULL. Constants repeat for each result row.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "where",
    "name": "WHERE",
    "category": "Filter",
    "module": "sql1",
    "pages": [
      22,
      23
    ],
    "description": "Keep rows for which the condition is TRUE.",
    "syntax": "SELECT columns FROM table_name WHERE condition;",
    "example": "SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';",
    "note": "Both FALSE and UNKNOWN rows are excluded.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "logic",
    "name": "AND / OR / NOT",
    "category": "Filter",
    "module": "sql1",
    "pages": [
      22,
      28
    ],
    "description": "Combine conditions using three-valued SQL logic.",
    "syntax": "WHERE condition1 AND (condition2 OR condition3)",
    "example": "SELECT beer,price FROM Sells WHERE bar='Joe''s Bar' AND (beer='Bud' OR beer='Miller');",
    "note": "AND has higher precedence than OR. Parentheses document the intended logic.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "compare",
    "name": "= / <> / < / <= / > / >=",
    "category": "Filter",
    "module": "sql1",
    "pages": [
      22,
      23
    ],
    "description": "Compare scalar values.",
    "syntax": "WHERE column <> value",
    "example": "SELECT beer,price FROM Sells WHERE price>=3 AND beer<>'Bud';",
    "note": "Ordinary comparisons to NULL produce UNKNOWN; use IS NULL for missingness.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "like",
    "name": "LIKE / NOT LIKE",
    "category": "Filter",
    "module": "sql1",
    "pages": [
      24,
      25
    ],
    "description": "Match a string against percent and underscore wildcards.",
    "syntax": "WHERE column LIKE '%pattern_'",
    "example": "SELECT name,phone FROM Drinkers WHERE phone LIKE '%555-____';",
    "note": "% means any sequence, including empty; _ means exactly one character. Four underscores have no spaces.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "null",
    "name": "IS NULL / IS NOT NULL",
    "category": "Filter",
    "module": "sql1",
    "pages": [
      26,
      30
    ],
    "description": "Test missing values explicitly.",
    "syntax": "WHERE column IS NULL",
    "example": "SELECT bar,beer FROM Sells WHERE price IS NULL;",
    "note": "The predicate price=NULL is not a substitute.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "distinct",
    "name": "DISTINCT",
    "category": "Retrieve",
    "module": "sql2",
    "pages": [
      28,
      31
    ],
    "description": "Remove duplicate result tuples.",
    "syntax": "SELECT DISTINCT columns FROM table_name;",
    "example": "SELECT DISTINCT price FROM Sells;",
    "note": "DISTINCT applies to the whole projected row. It does not sort the output.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "comma",
    "name": "Comma join",
    "category": "Combine",
    "module": "sql2",
    "pages": [
      3,
      7
    ],
    "description": "Describe a product plus a matching WHERE condition.",
    "syntax": "SELECT columns FROM R,S WHERE R.key=S.key;",
    "example": "SELECT l.beer FROM Likes l,Frequents f WHERE l.drinker=f.drinker AND f.bar='Joe''s Bar';",
    "note": "A missing matching predicate can create a Cartesian-product result.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "join",
    "name": "JOIN ... ON",
    "category": "Combine",
    "module": "sql2",
    "pages": [
      35
    ],
    "description": "Match rows with an explicit condition.",
    "syntax": "SELECT columns FROM R JOIN S ON condition;",
    "example": "SELECT d.name,f.bar FROM Drinkers d JOIN Frequents f ON d.name=f.drinker;",
    "note": "One outer row can match many partner rows. Keep output multiplicity in mind.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "cross",
    "name": "CROSS JOIN",
    "category": "Combine",
    "module": "sql2",
    "pages": [
      34
    ],
    "description": "Form every pair of input rows.",
    "syntax": "SELECT * FROM R CROSS JOIN S;",
    "example": "SELECT R.a,R.b,S.b,S.c FROM R CROSS JOIN S;",
    "note": "m input rows and n partner rows produce m×n pairs before filtering.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "natural",
    "name": "NATURAL JOIN",
    "category": "Combine",
    "module": "sql2",
    "pages": [
      34
    ],
    "description": "Match all equally named attributes and merge shared output columns.",
    "syntax": "SELECT * FROM R NATURAL JOIN S;",
    "example": "SELECT * FROM Likes NATURAL JOIN Sells;",
    "note": "Here the shared attribute is beer. A later schema change can change a natural join’s meaning.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "self",
    "name": "Self-join",
    "category": "Combine",
    "module": "sql2",
    "pages": [
      8,
      9
    ],
    "description": "Give the same table two aliases for two row roles.",
    "syntax": "SELECT a.x,b.x FROM T a JOIN T b ON a.key=b.key WHERE a.x<b.x;",
    "example": "SELECT b1.name,b2.name FROM Beers b1 JOIN Beers b2 ON b1.manf=b2.manf WHERE b1.name<b2.name;",
    "note": "< excludes self-pairs and reverse copies. <> excludes self-pairs only.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "derived",
    "name": "Subquery in FROM",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      10,
      11
    ],
    "description": "Use a query result as a named temporary relation.",
    "syntax": "SELECT q.column FROM (SELECT columns FROM T) AS q;",
    "example": "SELECT l.beer FROM Likes l JOIN (SELECT drinker FROM Frequents WHERE bar='Joe''s Bar') AS jd ON l.drinker=jd.drinker;",
    "note": "Name the derived table and qualify attributes when needed.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "scalar",
    "name": "Scalar subquery",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      12,
      14
    ],
    "description": "Supply one scalar value to a comparison.",
    "syntax": "WHERE column=(SELECT one_column FROM T WHERE unique_condition)",
    "example": "SELECT bar FROM Sells WHERE beer='Miller' AND price=(SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud');",
    "note": "A zero-row scalar result is NULL. Multiple rows are a cardinality error in standard-style SQL/PostgreSQL, but SQLite uses its first row; avoid that ambiguity.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "in",
    "name": "IN / NOT IN",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      15,
      19
    ],
    "description": "Test whether a value occurs in a query result.",
    "syntax": "WHERE value IN (SELECT one_column FROM T)",
    "example": "SELECT name,manf FROM Beers WHERE name IN (SELECT beer FROM Likes WHERE drinker='Fred');",
    "note": "IN does not multiply an outer row for repeated inner matches. NOT IN can become UNKNOWN when the right side contains NULL.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "exists",
    "name": "EXISTS / NOT EXISTS",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "description": "Test whether a witness row exists.",
    "syntax": "WHERE NOT EXISTS(SELECT 1 FROM T WHERE correlated_condition)",
    "example": "SELECT b1.name FROM Beers b1 WHERE NOT EXISTS(SELECT 1 FROM Beers b2 WHERE b2.manf=b1.manf AND b2.name<>b1.name);",
    "note": "EXISTS ignores projected values: even a row containing NULL is a witness.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "any",
    "name": "ANY",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      22
    ],
    "description": "Require at least one comparison to be TRUE.",
    "syntax": "value comparison ANY (subquery)",
    "example": "SELECT beer FROM Sells WHERE price>ANY(SELECT price FROM Sells);",
    "note": "Course syntax; SQLite does not support this quantified comparison. For the known, nonempty-price variant, compare to MIN over known prices. Empty and NULL cases require separate reasoning.",
    "mode": "course",
    "labSQL": "SELECT beer FROM Sells WHERE price>(SELECT MIN(price) FROM Sells);"
  },
  {
    "id": "all",
    "name": "ALL",
    "category": "Subqueries",
    "module": "sql2",
    "pages": [
      23,
      24
    ],
    "description": "Require every comparison to be TRUE.",
    "syntax": "value comparison ALL (subquery)",
    "example": "SELECT beer FROM Sells WHERE price>=ALL(SELECT price FROM Sells);",
    "note": "Course syntax. ALL(empty) is TRUE. NULLs can make ALL UNKNOWN. MAX is only a task-specific known-price alternative, not an unconditional rewrite.",
    "mode": "course",
    "labSQL": "SELECT beer FROM Sells WHERE price=(SELECT MAX(price) FROM Sells);"
  },
  {
    "id": "union",
    "name": "UNION",
    "category": "Sets",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "description": "Combine compatible result tables and eliminate duplicates.",
    "syntax": "SELECT column FROM A UNION SELECT column FROM B;",
    "example": "SELECT drinker FROM Likes UNION SELECT drinker FROM Frequents;",
    "note": "Both sides need the same number of compatible columns in corresponding positions.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "union-all",
    "name": "UNION ALL",
    "category": "Sets",
    "module": "sql2",
    "pages": [
      30
    ],
    "description": "Combine results while preserving all copies.",
    "syntax": "SELECT column FROM A UNION ALL SELECT column FROM B;",
    "example": "SELECT drinker FROM Likes UNION ALL SELECT drinker FROM Frequents;",
    "note": "If a value appears m times on the left and n on the right, it appears m+n times.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "intersect",
    "name": "INTERSECT",
    "category": "Sets",
    "module": "sql2",
    "pages": [
      25,
      28
    ],
    "description": "Keep distinct rows present in both results.",
    "syntax": "SELECT columns FROM A INTERSECT SELECT columns FROM B;",
    "example": "SELECT drinker,beer FROM Likes INTERSECT SELECT f.drinker,s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar;",
    "note": "The matching meaning comes from the projected positions, not the input table names.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "except",
    "name": "EXCEPT",
    "category": "Sets",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "description": "Keep distinct left-side rows absent from the right side.",
    "syntax": "SELECT column FROM A EXCEPT SELECT column FROM B;",
    "example": "SELECT name FROM Drinkers EXCEPT SELECT drinker FROM Frequents;",
    "note": "EXCEPT is directional. This finds drinkers who do not frequent a bar.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "except-all",
    "name": "EXCEPT ALL / INTERSECT ALL",
    "category": "Sets",
    "module": "sql2",
    "pages": [
      32
    ],
    "description": "Subtract multiplicities or keep their minimum.",
    "syntax": "query1 EXCEPT ALL query2",
    "example": "SELECT drinker FROM Frequents EXCEPT ALL SELECT drinker FROM Likes;",
    "note": "Course/paper practice. SQLite does not implement these ALL variants. EXCEPT ALL uses max(m−n,0); INTERSECT ALL uses min(m,n).",
    "mode": "course",
    "labSQL": null
  },
  {
    "id": "order",
    "name": "ORDER BY / τ",
    "category": "Retrieve",
    "module": "advanced",
    "pages": [
      3,
      7
    ],
    "description": "Sort results by a list of attributes.",
    "syntax": "ORDER BY first_column ASC,second_column DESC",
    "example": "SELECT bar,beer,price FROM Sells ORDER BY bar ASC,price DESC,beer ASC;",
    "note": "Sorting is the SQL counterpart of τ. Specify tie-breakers when a complete order matters.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "left",
    "name": "LEFT OUTER JOIN",
    "category": "Combine",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "description": "Preserve all left rows and pad missing partners.",
    "syntax": "SELECT columns FROM R LEFT JOIN S ON condition;",
    "example": "SELECT b.bar,s.price FROM Bars b LEFT JOIN Sells s ON b.bar=s.bar AND s.beer='Bud';",
    "note": "Keep right-side matching restrictions in ON if unmatched left rows must remain.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "right-full",
    "name": "RIGHT / FULL OUTER JOIN",
    "category": "Combine",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "description": "Preserve unmatched rows from the right side or both sides.",
    "syntax": "SELECT * FROM R FULL OUTER JOIN S ON R.b=S.b;",
    "example": "SELECT R.a,R.b AS rb,S.b AS sb,S.c FROM R FULL OUTER JOIN S ON R.b=S.b;",
    "note": "Write RIGHT or FULL explicitly; the slide’s bare OUTER JOIN shorthand is not portable. This bundled SQLite supports explicit forms.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "sum",
    "name": "SUM",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      8,
      9,
      17,
      20
    ],
    "description": "Add non-NULL input values.",
    "syntax": "SELECT SUM(column) FROM T;",
    "example": "SELECT SUM(price) AS total FROM Sells;",
    "note": "All-NULL or empty input returns NULL, not a standard SUM of zero.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "avg",
    "name": "AVG",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      18,
      20
    ],
    "description": "Average the known input values.",
    "syntax": "SELECT AVG(column) FROM T;",
    "example": "SELECT AVG(price) AS bud_average FROM Sells WHERE beer='Bud';",
    "note": "Bud’s seed values 2.50,3.00,NULL average to 2.75, not 5.50/3.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "count",
    "name": "COUNT(*) / COUNT(column)",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      17,
      21
    ],
    "description": "Count rows or non-NULL values.",
    "syntax": "SELECT COUNT(*),COUNT(column) FROM T;",
    "example": "SELECT COUNT(*) AS listings,COUNT(price) AS known FROM Sells WHERE beer='Bud';",
    "note": "COUNT(*) counts 3 Bud listings; COUNT(price) counts 2 known prices. COUNT returns 0 on empty input.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "minmax",
    "name": "MIN / MAX",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      8,
      9,
      20
    ],
    "description": "Find the smallest or largest non-NULL value.",
    "syntax": "SELECT MIN(column),MAX(column) FROM T;",
    "example": "SELECT MIN(price),MAX(price) FROM Sells;",
    "note": "Ties are not removed from a separate equality query against MAX. Return all highest-price listings unless asked otherwise.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "count-distinct",
    "name": "Aggregate DISTINCT",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      19
    ],
    "description": "Remove duplicate known aggregate inputs before calculating.",
    "syntax": "SELECT COUNT(DISTINCT column) FROM T;",
    "example": "SELECT COUNT(DISTINCT price) FROM Sells WHERE beer='Heineken';",
    "note": "Two 3.50 Heineken listings yield one distinct known price.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "group",
    "name": "GROUP BY / γ",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      22,
      25
    ],
    "description": "Form one group per combination of grouping values.",
    "syntax": "SELECT key,AGG(column) FROM T GROUP BY key;",
    "example": "SELECT beer,AVG(price) FROM Sells GROUP BY beer;",
    "note": "For course-safe SQL, nonaggregated result attributes must be grouping attributes.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "having",
    "name": "HAVING",
    "category": "Aggregate",
    "module": "advanced",
    "pages": [
      26,
      29
    ],
    "description": "Filter the groups that survive aggregation.",
    "syntax": "GROUP BY key HAVING aggregate_condition",
    "example": "SELECT beer,AVG(price) FROM Sells GROUP BY beer HAVING COUNT(*)>=3;",
    "note": "WHERE filters rows first. HAVING filters grouped results.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "insert",
    "name": "INSERT ... VALUES",
    "category": "Modify",
    "module": "advanced",
    "pages": [
      31,
      33
    ],
    "description": "Insert one row using an explicit target list.",
    "syntax": "INSERT INTO T(column1,column2) VALUES(value1,value2);",
    "example": "INSERT INTO Likes(beer,drinker) VALUES('Bud','Eve');",
    "note": "This seed already contains Sally/Bud, so that literal slide insertion would violate the composite key.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "default",
    "name": "DEFAULT",
    "category": "Define",
    "module": "advanced",
    "pages": [
      34,
      36
    ],
    "description": "Supply a value when an inserted column is omitted.",
    "syntax": "column TYPE DEFAULT value",
    "example": "INSERT INTO Drinkers(name) VALUES('New Drinker');\nSELECT * FROM Drinkers WHERE name='New Drinker';",
    "note": "Omission uses the default address; explicit NULL does not.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "insert-select",
    "name": "INSERT ... SELECT",
    "category": "Modify",
    "module": "advanced",
    "pages": [
      37,
      39
    ],
    "description": "Insert every row produced by a query.",
    "syntax": "INSERT INTO T(column) SELECT expression FROM S WHERE condition;",
    "example": "INSERT INTO PotBuddies(name) SELECT DISTINCT d2.drinker FROM Frequents d1 JOIN Frequents d2 ON d1.bar=d2.bar WHERE d1.drinker='Sally' AND d2.drinker<>'Sally';\nSELECT * FROM PotBuddies;",
    "note": "The target and SELECT must have compatible column counts. DISTINCT avoids duplicate buddy names.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "delete",
    "name": "DELETE FROM",
    "category": "Modify",
    "module": "advanced",
    "pages": [
      40,
      45
    ],
    "description": "Delete the rows selected by WHERE.",
    "syntax": "DELETE FROM T WHERE condition;",
    "example": "DELETE FROM Likes WHERE drinker='Sally' AND beer='Bud';",
    "note": "Without WHERE, all rows are deleted but the table remains. Foreign keys can reject a referenced-parent deletion.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "update",
    "name": "UPDATE ... SET",
    "category": "Modify",
    "module": "advanced",
    "pages": [
      46,
      48
    ],
    "description": "Assign values to selected rows.",
    "syntax": "UPDATE T SET column=value WHERE condition;",
    "example": "UPDATE Sells SET price=4.00 WHERE price>4.00;",
    "note": "NULL prices do not satisfy price>4. Test the intended target set before changing it.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "create",
    "name": "CREATE TABLE",
    "category": "Define",
    "module": "constraints",
    "pages": [
      5,
      10
    ],
    "description": "Declare attributes and integrity rules.",
    "syntax": "CREATE TABLE T(column TYPE,constraint);",
    "example": "CREATE TABLE DemoBeer(name TEXT NOT NULL PRIMARY KEY,manf TEXT);",
    "note": "The lab uses SQLite types. CHAR/VARCHAR lengths on lecture slides are not enforced by SQLite like fixed-width server types.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "pk",
    "name": "PRIMARY KEY / UNIQUE",
    "category": "Constraints",
    "module": "constraints",
    "pages": [
      5,
      6
    ],
    "description": "Require identifying or candidate key values to be unique.",
    "syntax": "PRIMARY KEY(column1,column2)",
    "example": "CREATE TABLE DemoPairs(bar TEXT NOT NULL,beer TEXT NOT NULL,PRIMARY KEY(bar,beer));",
    "note": "A composite key is unique as a combination. Add NOT NULL explicitly for the SQLite text/composite demonstration.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "fk",
    "name": "REFERENCES / FOREIGN KEY",
    "category": "Constraints",
    "module": "constraints",
    "pages": [
      7,
      12
    ],
    "description": "Require a child key to refer to a parent unique key.",
    "syntax": "FOREIGN KEY(child) REFERENCES Parent(parent_key)",
    "example": "CREATE TABLE DemoChild(beer TEXT REFERENCES Beers(name),price REAL);",
    "note": "The referenced key must be primary or unique. The lab enables PRAGMA foreign_keys=ON.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "actions",
    "name": "ON DELETE / ON UPDATE",
    "category": "Constraints",
    "module": "constraints",
    "pages": [
      13,
      17
    ],
    "description": "Choose how parent changes affect dependent references.",
    "syntax": "REFERENCES Parent(key) ON DELETE SET NULL ON UPDATE CASCADE",
    "example": "CREATE TABLE DemoPolicy(beer TEXT REFERENCES Beers(name) ON DELETE SET NULL ON UPDATE CASCADE);",
    "note": "SET NULL needs nullable child columns. CASCADE is not a repair for inserting a missing parent reference.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "check",
    "name": "CHECK / NOT NULL",
    "category": "Constraints",
    "module": "constraints",
    "pages": [
      18,
      22
    ],
    "description": "Reject invalid row values or require a value.",
    "syntax": "price REAL NOT NULL CHECK(price>0)",
    "example": "CREATE TABLE DemoCheck(price REAL NOT NULL CHECK(price>0));",
    "note": "CHECK alone can pass UNKNOWN. SQLite does not allow subqueries inside CHECK.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "assertion",
    "name": "CREATE ASSERTION",
    "category": "Constraints",
    "module": "constraints",
    "pages": [
      23,
      26
    ],
    "description": "Declare a database-wide condition in course SQL.",
    "syntax": "CREATE ASSERTION rule_name CHECK(condition);",
    "example": "CREATE ASSERTION FewBar CHECK((SELECT COUNT(*) FROM Bars)<=(SELECT COUNT(*) FROM Drinkers));",
    "note": "Not executable in SQLite. The diagnostic query only observes violations; it does not enforce the invariant.",
    "mode": "course",
    "labSQL": "SELECT (SELECT COUNT(*) FROM Bars)<=(SELECT COUNT(*) FROM Drinkers) AS rule_holds;"
  },
  {
    "id": "trigger",
    "name": "CREATE TRIGGER / ECA",
    "category": "Triggers",
    "module": "constraints",
    "pages": [
      28,
      33
    ],
    "description": "Attach an action to an event and optional condition.",
    "syntax": "CREATE TRIGGER name BEFORE/AFTER event ON T FOR EACH ROW WHEN condition BEGIN action; END;",
    "example": "CREATE TRIGGER DemoBeerTrig BEFORE INSERT ON Sells FOR EACH ROW WHEN NOT EXISTS(SELECT 1 FROM Beers WHERE name=NEW.beer) BEGIN INSERT INTO Beers(name) VALUES(NEW.beer); END;",
    "note": "This is the SQLite adaptation. Course notation can use REFERENCING NEW ROW AS an alias.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "oldnew",
    "name": "OLD / NEW / UPDATE OF",
    "category": "Triggers",
    "module": "constraints",
    "pages": [
      34,
      38
    ],
    "description": "Compare before and after versions of an updated row.",
    "syntax": "AFTER UPDATE OF column ON T ... WHEN NEW.column>OLD.column+value",
    "example": "CREATE TRIGGER DemoPriceTrig AFTER UPDATE OF price ON Sells FOR EACH ROW WHEN NEW.price>OLD.price+1 BEGIN INSERT INTO RipoffBars VALUES(NEW.bar); END;",
    "note": "INSERT offers NEW, DELETE offers OLD, UPDATE offers both. An exact $1 increase does not pass >1.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "referencing",
    "name": "REFERENCING / statement triggers",
    "category": "Triggers",
    "module": "constraints",
    "pages": [
      30,
      36
    ],
    "description": "Name transition rows/tables in the lecture’s trigger notation.",
    "syntax": "REFERENCING OLD ROW AS o NEW ROW AS n FOR EACH ROW",
    "example": "CREATE TRIGGER PriceTrig AFTER UPDATE OF price ON Sells REFERENCING OLD ROW AS o NEW ROW AS n FOR EACH ROW WHEN(n.price>o.price+1) INSERT INTO RipoffBars VALUES(n.bar);",
    "note": "Course notation; SQLite uses fixed OLD/NEW names and row triggers only. Omission of FOR EACH ROW in SQLite does not make a statement trigger.",
    "mode": "course",
    "labSQL": null
  },
  {
    "id": "begin",
    "name": "BEGIN",
    "category": "Transactions",
    "module": "transactions",
    "pages": [
      5,
      8
    ],
    "description": "Start an explicit transaction in the SQLite lab.",
    "syntax": "BEGIN; statements; COMMIT;",
    "example": "BEGIN; UPDATE Sells SET price=4 WHERE price>4; ROLLBACK;",
    "note": "BEGIN is the lab’s transaction-start command; the slides concentrate on COMMIT/ROLLBACK and isolation choices.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "commit",
    "name": "COMMIT",
    "category": "Transactions",
    "module": "transactions",
    "pages": [
      7
    ],
    "description": "Finish a transaction and retain its changes.",
    "syntax": "COMMIT;",
    "example": "BEGIN; UPDATE Drinkers SET phone='555-1212' WHERE name='Fred'; COMMIT;",
    "note": "Retained inside the in-memory lab only. Reloading still resets the database; this is not a durability experiment.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "rollback",
    "name": "ROLLBACK",
    "category": "Transactions",
    "module": "transactions",
    "pages": [
      8
    ],
    "description": "Abort an active uncommitted transaction.",
    "syntax": "ROLLBACK;",
    "example": "BEGIN; UPDATE Sells SET price=99; ROLLBACK;",
    "note": "ROLLBACK does not undo a transaction that has already committed.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "isolation",
    "name": "SET TRANSACTION ISOLATION LEVEL",
    "category": "Transactions",
    "module": "transactions",
    "pages": [
      18,
      25
    ],
    "description": "Choose the transaction visibility guarantees in course/server SQL.",
    "syntax": "SET TRANSACTION ISOLATION LEVEL level_name;",
    "example": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;",
    "note": "Course-only in this lab. Use the isolation comparison and schedule simulator for reasoning; a single SQLite connection cannot demonstrate the four concurrent server levels.",
    "mode": "course",
    "labSQL": null
  },
  {
    "id": "view",
    "name": "CREATE VIEW",
    "category": "Views",
    "module": "views",
    "pages": [
      3,
      6
    ],
    "description": "Store a query definition as a virtual relation.",
    "syntax": "CREATE VIEW name AS SELECT ...;",
    "example": "CREATE VIEW CanDrink AS SELECT f.drinker,s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar;\nSELECT * FROM CanDrink;",
    "note": "Without DISTINCT, the view retains duplicates from multiple visited bars.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "instead",
    "name": "INSTEAD OF trigger",
    "category": "Views",
    "module": "views",
    "pages": [
      7,
      10
    ],
    "description": "Translate a view write into base-table modifications.",
    "syntax": "CREATE TRIGGER name INSTEAD OF INSERT ON View BEGIN ... END;",
    "example": "CREATE VIEW DemoNames AS SELECT name FROM Drinkers;\nCREATE TRIGGER DemoNameInsert INSTEAD OF INSERT ON DemoNames BEGIN INSERT INTO Drinkers(name) VALUES(NEW.name); END;\nINSERT INTO DemoNames VALUES('Demo Visitor');\nSELECT * FROM Drinkers WHERE name='Demo Visitor';",
    "note": "This small SQLite example illustrates the mechanism; the full course Synergy exercise requires three base-table inserts.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "materialized",
    "name": "CREATE MATERIALIZED VIEW",
    "category": "Views",
    "module": "views",
    "pages": [
      11,
      13
    ],
    "description": "Store a query result and plan how to refresh it.",
    "syntax": "CREATE MATERIALIZED VIEW name AS SELECT ...;",
    "example": "CREATE MATERIALIZED VIEW PriceSummary AS SELECT beer,AVG(price) FROM Sells GROUP BY beer;",
    "note": "SQLite does not implement this command. A table snapshot is an illustration of staleness, not a native materialized view.",
    "mode": "course",
    "labSQL": "CREATE TABLE PriceSummarySnapshot AS SELECT beer,AVG(price) AS average FROM Sells GROUP BY beer;"
  },
  {
    "id": "index",
    "name": "CREATE INDEX",
    "category": "Indexes",
    "module": "views",
    "pages": [
      14,
      19
    ],
    "description": "Create an access structure on chosen attributes.",
    "syntax": "CREATE INDEX index_name ON T(column1,column2);",
    "example": "CREATE INDEX BeerInd ON Beers(manf);",
    "note": "The optimizer decides whether to use it. A duplicate index on a key may add maintenance without useful new access.",
    "mode": "run",
    "labSQL": null
  },
  {
    "id": "plan",
    "name": "EXPLAIN QUERY PLAN",
    "category": "Indexes",
    "module": "views",
    "pages": [
      16,
      21
    ],
    "description": "Inspect SQLite’s access plan as an optional lab tool.",
    "syntax": "EXPLAIN QUERY PLAN SELECT ...;",
    "example": "EXPLAIN QUERY PLAN SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';",
    "note": "Supplemental SQLite tool, not syntax introduced in the lecture. Tiny seed execution times are not a benchmark.",
    "mode": "run",
    "labSQL": null
  }
];
