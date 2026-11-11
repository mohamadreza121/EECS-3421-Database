export const examples = [
  {
    "id": "e01",
    "module": "sql1",
    "pages": [
      7,
      11
    ],
    "title": "Turn English into SELECT–FROM–WHERE",
    "question": "Which beers are made by Anheuser-Busch?",
    "sql": "SELECT name FROM Beers WHERE manf='Anheuser-Busch';",
    "steps": [
      "The desired answer is a beer name, so project name.",
      "The manufacturer is a Beers attribute, so no join is necessary.",
      "Test manf for the exact manufacturer string. In the seed, Bud, Bud Lite, and Michelob qualify."
    ],
    "pitfall": "Filtering on name instead of manf asks a different question.",
    "courseSQL": ""
  },
  {
    "id": "e02",
    "module": "sql1",
    "pages": [
      14,
      21
    ],
    "title": "Label a calculated result",
    "question": "Show Joe’s sale prices in the lecture’s illustrative yen conversion.",
    "sql": "SELECT beer,price*114 AS priceInYen,'Joe''s Bar' AS source FROM Sells WHERE bar='Joe''s Bar';",
    "steps": [
      "WHERE retains Joe’s listings.",
      "Multiply each known price by 114; NULL would remain NULL.",
      "AS labels the calculated column. The constant source text repeats in each output row."
    ],
    "pitfall": "The constant label does not create an extra row.",
    "courseSQL": ""
  },
  {
    "id": "e03",
    "module": "sql1",
    "pages": [
      22,
      25
    ],
    "title": "Get the parentheses and pattern right",
    "question": "Find known 555-exchange phones of Sally or Fred.",
    "sql": "SELECT name,phone FROM Drinkers WHERE (name='Sally' OR name='Fred') AND phone LIKE '%555-____';",
    "steps": [
      "Group the two name alternatives.",
      "Require the phone suffix shape with four underscores.",
      "AND applies that pattern to both candidate names."
    ],
    "pitfall": "Without parentheses, Sally can bypass the phone restriction.",
    "courseSQL": ""
  },
  {
    "id": "e04",
    "module": "sql1",
    "pages": [
      27,
      30
    ],
    "title": "Watch a tautology fail for NULL",
    "question": "Why does a complementary price test still omit a sale?",
    "sql": "SELECT bar,beer,price FROM Sells WHERE price<2 OR price>=2;\nSELECT bar,beer,price FROM Sells WHERE price IS NULL;",
    "steps": [
      "The first query retains every known numeric price in this data.",
      "For The Pub/Bud, both comparisons evaluate to UNKNOWN.",
      "The second query isolates the missing-price row, making the excluded case visible."
    ],
    "pitfall": "UNKNOWN OR UNKNOWN is UNKNOWN, not TRUE.",
    "courseSQL": ""
  },
  {
    "id": "e05",
    "module": "sql2",
    "pages": [
      4,
      7
    ],
    "title": "Follow both sides of a join",
    "question": "Show each Joe visitor together with each beer that visitor likes.",
    "sql": "SELECT f.drinker,l.beer FROM Frequents f JOIN Likes l ON f.drinker=l.drinker WHERE f.bar='Joe''s Bar';",
    "steps": [
      "Frequents supplies the visitor and bar fact.",
      "Likes supplies each visitor’s liked beers.",
      "One person with two likes contributes two output rows; the result grain is a person–liked-beer pair."
    ],
    "pitfall": "Do not join on beer: Frequents has no beer column.",
    "courseSQL": ""
  },
  {
    "id": "e06",
    "module": "sql2",
    "pages": [
      9
    ],
    "title": "Build one unordered pair",
    "question": "Find beer pairs with the same known manufacturer.",
    "sql": "SELECT b1.name,b2.name FROM Beers b1 JOIN Beers b2 ON b1.manf=b2.manf WHERE b1.name<b2.name;",
    "steps": [
      "Use b1 and b2 for two roles from Beers.",
      "Equal manufacturers create candidate pairs.",
      "The name ordering chooses one orientation of every different-name pair. Anheuser-Busch’s three beers yield three pairs."
    ],
    "pitfall": "<> alone would keep both orientations.",
    "courseSQL": ""
  },
  {
    "id": "e07",
    "module": "sql2",
    "pages": [
      11
    ],
    "title": "A derived table is a relation",
    "question": "First find Joe’s visitors; then connect their likes.",
    "sql": "SELECT l.beer FROM Likes l JOIN (SELECT drinker FROM Frequents WHERE bar='Joe''s Bar') jd ON l.drinker=jd.drinker;",
    "steps": [
      "The inner query returns a one-column relation of visitors.",
      "jd names that relation.",
      "The outer query joins jd to Likes; multiplicity is the same as the corresponding direct join."
    ],
    "pitfall": "A subquery is not automatically a scalar. Its location determines its role.",
    "courseSQL": ""
  },
  {
    "id": "e08",
    "module": "sql2",
    "pages": [
      13,
      14
    ],
    "title": "Compare to one lookup value",
    "question": "Which bars sell Miller at Joe’s Bud price?",
    "sql": "SELECT bar FROM Sells WHERE beer='Miller' AND price=(SELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud');",
    "steps": [
      "Use the unique (bar,beer) lookup for Joe/Bud.",
      "Its seed result is 2.50.",
      "Restrict the outer rows to Miller and compare their price; Sue’s Bar qualifies in the seed."
    ],
    "pitfall": "A multirow scalar is not portable even if SQLite selects its first row.",
    "courseSQL": ""
  },
  {
    "id": "e09",
    "module": "sql2",
    "pages": [
      17,
      19
    ],
    "title": "See why IN and JOIN differ",
    "question": "Compare the lecture’s two R/S queries.",
    "sql": "SELECT a FROM R WHERE b IN(SELECT b FROM S);\nSELECT R.a FROM R JOIN S ON R.b=S.b;",
    "steps": [
      "The IN test sees that b=2 is present and outputs the qualifying R row once.",
      "The join pairs (1,2) with (2,5), then with (2,6).",
      "After projecting a, the join shows two copies of 1."
    ],
    "pitfall": "Membership and pairing are different operations under bag semantics.",
    "courseSQL": ""
  },
  {
    "id": "e10",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "title": "Express absence with a counterexample",
    "question": "Which beers have no sale listing?",
    "sql": "SELECT b.name FROM Beers b WHERE NOT EXISTS(SELECT 1 FROM Sells s WHERE s.beer=b.name);",
    "steps": [
      "Start with every beer, including beers missing from Sells.",
      "The inner query looks for one sale witness for that beer.",
      "NOT EXISTS keeps precisely the beer candidates with no witness."
    ],
    "pitfall": "Starting from Sells loses the very missing cases you need.",
    "courseSQL": ""
  },
  {
    "id": "e11",
    "module": "sql2",
    "pages": [
      22,
      24
    ],
    "title": "Separate ALL from a known maximum",
    "question": "Find all highest known-price listings.",
    "sql": "SELECT bar,beer,price FROM Sells WHERE price=(SELECT MAX(price) FROM Sells);",
    "steps": [
      "MAX ignores missing prices and finds 5.50 in the seed.",
      "Compare each known listing to that maximum.",
      "Both Pete’s Ale listings qualify; LIMIT 1 would incorrectly remove a tie."
    ],
    "pitfall": "This is a known-price task, not a universal rewrite valid for ALL with NULLs/empty inputs.",
    "courseSQL": "SELECT beer FROM Sells WHERE price>=ALL(SELECT price FROM Sells);"
  },
  {
    "id": "e12",
    "module": "sql2",
    "pages": [
      25,
      30
    ],
    "title": "Compare UNION and UNION ALL",
    "question": "Combine visitor and liker names with and without copies.",
    "sql": "SELECT drinker FROM Frequents UNION SELECT drinker FROM Likes;\nSELECT drinker FROM Frequents UNION ALL SELECT drinker FROM Likes;",
    "steps": [
      "Each SELECT can contain repeated names because a person has several facts.",
      "UNION returns one copy of each projected name appearing on either side.",
      "UNION ALL keeps the sum of the copies, so its count is larger."
    ],
    "pitfall": "Set compatibility depends on column positions, not the source relation names.",
    "courseSQL": ""
  },
  {
    "id": "e13",
    "module": "sql2",
    "pages": [
      26,
      27
    ],
    "title": "Intersect two kinds of person–beer facts",
    "question": "Which liked beers can a person get at a visited bar?",
    "sql": "SELECT drinker,beer FROM Likes INTERSECT SELECT f.drinker,s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar;",
    "steps": [
      "Likes already provides the first relation of person–beer pairs.",
      "Frequents joined to Sells supplies available person–beer pairs.",
      "INTERSECT keeps pairs on both sides and removes duplicate copies."
    ],
    "pitfall": "CanDrink availability does not by itself imply a person likes the beer.",
    "courseSQL": ""
  },
  {
    "id": "e14",
    "module": "advanced",
    "pages": [
      13,
      16
    ],
    "title": "Keep every bar, not just every offer",
    "question": "List every bar with its Bud price.",
    "sql": "SELECT b.bar,s.price FROM Bars b LEFT JOIN Sells s ON b.bar=s.bar AND s.beer='Bud';",
    "steps": [
      "Bars is the preserved left input.",
      "ON requires the matching bar and a Bud listing.",
      "Empty Bar appears with NULL price. The Pub’s Bud also has NULL, but because of a real listing rather than padding."
    ],
    "pitfall": "Inspect s.beer to distinguish no match from a matched NULL price.",
    "courseSQL": ""
  },
  {
    "id": "e15",
    "module": "advanced",
    "pages": [
      17,
      21
    ],
    "title": "Count listings and known values",
    "question": "Compare the two Bud counts.",
    "sql": "SELECT COUNT(*) AS listings,COUNT(price) AS known,AVG(price) AS average FROM Sells WHERE beer='Bud';",
    "steps": [
      "The input has Bud prices 2.50,3.00,NULL.",
      "COUNT(*)=3; COUNT(price)=2.",
      "AVG(price)=2.75, because only the two known values contribute."
    ],
    "pitfall": "A NULL price is not a zero-price listing.",
    "courseSQL": ""
  },
  {
    "id": "e16",
    "module": "advanced",
    "pages": [
      22,
      25
    ],
    "title": "Choose the result grain first",
    "question": "Calculate each visitor’s mean Bud price.",
    "sql": "SELECT f.drinker,AVG(s.price) FROM Frequents f JOIN Sells s ON f.bar=s.bar WHERE s.beer='Bud' GROUP BY f.drinker;",
    "steps": [
      "Join visit facts to sale listings on bar.",
      "WHERE beer=Bud selects the relevant listing rows.",
      "GROUP BY drinker makes one output row per visitor represented in the join. Sally’s mean is (2.50+3.00)/2=2.75."
    ],
    "pitfall": "Grouping additionally by bar would give per-person/per-bar rows.",
    "courseSQL": ""
  },
  {
    "id": "e17",
    "module": "advanced",
    "pages": [
      26,
      29
    ],
    "title": "Keep the group-level OR intact",
    "question": "Average beers with three listings or manufacturer Pete’s.",
    "sql": "SELECT beer,AVG(price) FROM Sells GROUP BY beer HAVING COUNT(*)>=3 OR beer IN(SELECT name FROM Beers WHERE manf='Pete''s');",
    "steps": [
      "Group all Sells rows by beer without first filtering manufacturers.",
      "COUNT(*)>=3 identifies sufficiently widely listed beers.",
      "The subquery identifies Pete’s beer names; OR admits those groups as an independent alternative."
    ],
    "pitfall": "Filtering to Pete’s in WHERE discards non-Pete’s groups before counting.",
    "courseSQL": ""
  },
  {
    "id": "e18",
    "module": "advanced",
    "pages": [
      13,
      21
    ],
    "title": "Count zero with an outer join",
    "question": "How many listings does each bar have?",
    "sql": "SELECT b.bar,COUNT(s.beer) FROM Bars b LEFT JOIN Sells s ON b.bar=s.bar GROUP BY b.bar;",
    "steps": [
      "LEFT JOIN keeps bars with no listing.",
      "COUNT(s.beer) counts known matched keys.",
      "Empty Bar has a padded row but no known s.beer, so its count is zero."
    ],
    "pitfall": "COUNT(*) would return 1 for the padded Empty Bar row.",
    "courseSQL": ""
  },
  {
    "id": "e19",
    "module": "advanced",
    "pages": [
      32,
      36
    ],
    "title": "Defaults apply to omitted columns",
    "question": "Insert a new person without an address.",
    "sql": "INSERT INTO Drinkers(name) VALUES('New Person');\nSELECT name,addr,phone FROM Drinkers WHERE name='New Person';",
    "steps": [
      "Only name is supplied in the target list.",
      "The omitted addr receives 123 Simcoe St.",
      "The omitted phone has no declared default, so it is NULL."
    ],
    "pitfall": "Explicit addr=NULL would not request the address default.",
    "courseSQL": ""
  },
  {
    "id": "e20",
    "module": "advanced",
    "pages": [
      37,
      39
    ],
    "title": "Insert potential buddies once",
    "question": "Add people who share a visited bar with Sally.",
    "sql": "INSERT INTO PotBuddies(name) SELECT DISTINCT d2.drinker FROM Frequents d1 JOIN Frequents d2 ON d1.bar=d2.bar WHERE d1.drinker='Sally' AND d2.drinker<>'Sally';\nSELECT * FROM PotBuddies;",
    "steps": [
      "Use two Frequents aliases for Sally’s visits and candidate visits.",
      "Match their bar and exclude Sally herself.",
      "DISTINCT collapses candidates who share more than one bar before insertion."
    ],
    "pitfall": "The target has no uniqueness constraint, so rerunning the INSERT can still add new copies.",
    "courseSQL": ""
  },
  {
    "id": "e21",
    "module": "advanced",
    "pages": [
      40,
      48
    ],
    "title": "Make an update reversible while experimenting",
    "question": "Cap known prices at 4 inside a transaction, then undo it.",
    "sql": "BEGIN;\nUPDATE Sells SET price=4 WHERE price>4;\nSELECT bar,beer,price FROM Sells;\nROLLBACK;",
    "steps": [
      "The WHERE condition selects prices above 4, not NULLs.",
      "The query shows the temporary changed data.",
      "ROLLBACK discards the uncommitted cap and restores the seed state."
    ],
    "pitfall": "The later rollback cannot undo a separate earlier committed transaction.",
    "courseSQL": ""
  },
  {
    "id": "e22",
    "module": "constraints",
    "pages": [
      8,
      17
    ],
    "title": "A separate child makes policy visible",
    "question": "Follow a parent rename and clear a reference on deletion.",
    "sql": "CREATE TABLE DemoParent(name TEXT PRIMARY KEY NOT NULL);\nCREATE TABLE DemoChild(beer TEXT REFERENCES DemoParent(name) ON UPDATE CASCADE ON DELETE SET NULL);\nINSERT INTO DemoParent VALUES('Old');\nINSERT INTO DemoChild VALUES('Old');\nUPDATE DemoParent SET name='New' WHERE name='Old';\nSELECT * FROM DemoChild;\nDELETE FROM DemoParent WHERE name='New';\nSELECT * FROM DemoChild;",
    "steps": [
      "Create an isolated parent and nullable child for the experiment.",
      "The update changes the child’s Old reference to New.",
      "The delete leaves the child row present and changes its reference to NULL."
    ],
    "pitfall": "A NOT NULL child would conflict with the SET NULL policy.",
    "courseSQL": ""
  },
  {
    "id": "e23",
    "module": "constraints",
    "pages": [
      18,
      22
    ],
    "title": "CHECK and NOT NULL do different jobs",
    "question": "See a required positive value definition.",
    "sql": "CREATE TABLE PositivePrice(price REAL NOT NULL CHECK(price>0));\nINSERT INTO PositivePrice VALUES(2.50);\nSELECT * FROM PositivePrice;",
    "steps": [
      "The value must exist because of NOT NULL.",
      "The known value must be positive because of CHECK.",
      "Trying NULL or -1 separately should fail for different reasons."
    ],
    "pitfall": "CHECK(price>0) without NOT NULL would not reject a missing value.",
    "courseSQL": ""
  },
  {
    "id": "e24",
    "module": "constraints",
    "pages": [
      24,
      26
    ],
    "title": "Find a global-rule violation first",
    "question": "Find bars with mean known price above 5.",
    "sql": "SELECT bar,AVG(price) FROM Sells GROUP BY bar HAVING AVG(price)>5;",
    "steps": [
      "Group every bar’s listings.",
      "Compute AVG over known prices.",
      "HAVING identifies violating groups. The current seed has no violating bar; an empty result is expected."
    ],
    "pitfall": "An empty violation query result means this current state passes; it does not install ongoing enforcement.",
    "courseSQL": ""
  },
  {
    "id": "e25",
    "module": "constraints",
    "pages": [
      30,
      38
    ],
    "title": "Log a strict price increase",
    "question": "Raise one price by 1.25 and inspect the trigger log.",
    "sql": "CREATE TRIGGER DemoPriceTrig AFTER UPDATE OF price ON Sells FOR EACH ROW WHEN NEW.price>OLD.price+1 BEGIN INSERT INTO RipoffBars(bar) VALUES(NEW.bar); END;\nUPDATE Sells SET price=price+1.25 WHERE bar='Joe''s Bar' AND beer='Bud';\nSELECT * FROM RipoffBars;",
    "steps": [
      "Define the row-level AFTER price-update event.",
      "Compare NEW against OLD plus 1.",
      "The increase is 1.25, so Joe’s Bar is inserted into the log. An increase of exactly 1 would not qualify."
    ],
    "pitfall": "This log permits duplicate bar events; it is not a unique set.",
    "courseSQL": ""
  },
  {
    "id": "e26",
    "module": "workshop",
    "pages": [
      3
    ],
    "title": "Close all three sides of the triangle",
    "question": "Construct Synergy from the base relationships.",
    "sql": "SELECT DISTINCT l.drinker,l.beer,s.bar FROM Likes l JOIN Frequents f ON l.drinker=f.drinker JOIN Sells s ON s.bar=f.bar AND s.beer=l.beer;",
    "steps": [
      "Join Likes to Frequents on the person.",
      "Match Sells to both the visited bar and the liked beer.",
      "Project person, beer, bar and remove duplicate result triples if requested."
    ],
    "pitfall": "Joining only on bar would attach beers that the person may not like.",
    "courseSQL": ""
  },
  {
    "id": "e27",
    "module": "transactions",
    "pages": [
      7,
      8
    ],
    "title": "See temporary and restored values",
    "question": "Update Joe’s Bud to 9 and roll it back.",
    "sql": "BEGIN;\nUPDATE Sells SET price=9 WHERE bar='Joe''s Bar' AND beer='Bud';\nSELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';\nROLLBACK;\nSELECT price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';",
    "steps": [
      "BEGIN creates the undo boundary.",
      "The first SELECT sees 9 in this connection.",
      "ROLLBACK restores 2.50 in the seed; the second SELECT verifies it."
    ],
    "pitfall": "One connection can show undo, not a real concurrent dirty read.",
    "courseSQL": ""
  },
  {
    "id": "e28",
    "module": "views",
    "pages": [
      3,
      6
    ],
    "title": "Name an availability query",
    "question": "Create CanDrink and ask what Sally can obtain.",
    "sql": "CREATE VIEW CanDrink AS SELECT f.drinker,s.beer FROM Frequents f JOIN Sells s ON f.bar=s.bar;\nSELECT beer FROM CanDrink WHERE drinker='Sally';",
    "steps": [
      "The definition joins visits to sale availability.",
      "The view retains the query definition and can be queried as a table.",
      "Bud occurs twice for Sally in the seed because she visits two bars selling it."
    ],
    "pitfall": "A virtual view is not automatically DISTINCT.",
    "courseSQL": ""
  },
  {
    "id": "e29",
    "module": "views",
    "pages": [
      7,
      10
    ],
    "title": "Translate one Synergy insert into three facts",
    "question": "Use a SQLite INSTEAD OF trigger on a new triple.",
    "sql": "CREATE VIEW Synergy AS SELECT l.drinker,l.beer,s.bar FROM Likes l JOIN Frequents f ON l.drinker=f.drinker JOIN Sells s ON s.bar=f.bar AND s.beer=l.beer;\nCREATE TRIGGER SynergyInsert INSTEAD OF INSERT ON Synergy BEGIN INSERT INTO Likes(drinker,beer) VALUES(NEW.drinker,NEW.beer); INSERT INTO Sells(bar,beer) VALUES(NEW.bar,NEW.beer); INSERT INTO Frequents(drinker,bar) VALUES(NEW.drinker,NEW.bar); END;\nINSERT INTO Synergy VALUES('Eve','Unserved','Empty Bar');\nSELECT * FROM Synergy WHERE drinker='Eve';",
    "steps": [
      "The view requires the like, visit, and offer facts to agree.",
      "The trigger inserts those three projected pairs instead of writing directly to the virtual view.",
      "The supplied parent entities already exist and the pairs are new. Sells.price is omitted and becomes NULL."
    ],
    "pitfall": "Reusing existing pairs can cause primary-key conflicts; the example deliberately avoids them.",
    "courseSQL": ""
  },
  {
    "id": "e30",
    "module": "views",
    "pages": [
      11,
      13
    ],
    "title": "Make staleness observable",
    "question": "Compare a stored table snapshot with current base data.",
    "sql": "CREATE TABLE PriceSnapshot AS SELECT bar,beer,price FROM Sells;\nUPDATE Sells SET price=9 WHERE bar='Joe''s Bar' AND beer='Bud';\nSELECT 'stored snapshot' AS source,price FROM PriceSnapshot WHERE bar='Joe''s Bar' AND beer='Bud'\nUNION ALL SELECT 'current base',price FROM Sells WHERE bar='Joe''s Bar' AND beer='Bud';",
    "steps": [
      "Create a stored copy at the seed’s price 2.50.",
      "Change only the base Sells row to 9.",
      "The snapshot remains 2.50 while the base row reads 9. This ordinary-table demo illustrates why materialized results need refresh."
    ],
    "pitfall": "PriceSnapshot is not a native materialized view or an automatically refreshed table.",
    "courseSQL": ""
  },
  {
    "id": "e31",
    "module": "views",
    "pages": [
      14,
      17
    ],
    "title": "Inspect an indexable lookup",
    "question": "Create a manufacturer index and inspect the plan.",
    "sql": "CREATE INDEX BeerInd ON Beers(manf);\nEXPLAIN QUERY PLAN SELECT s.price FROM Beers b JOIN Sells s ON b.name=s.beer WHERE b.manf='Pete''s' AND s.bar='Joe''s Bar';",
    "steps": [
      "BeerInd supplies an access path for the manufacturer predicate.",
      "The Sells key already supplies a bar–beer lookup index.",
      "The optimizer may choose the plan it estimates cheapest; the answer is unchanged by index creation."
    ],
    "pitfall": "Do not treat milliseconds on ten seed rows as proof of a production performance gain.",
    "courseSQL": ""
  },
  {
    "id": "e32",
    "module": "sql2",
    "pages": [
      20,
      21
    ],
    "title": "Turn “every” into “no missing requirement”",
    "question": "Find drinkers who like every beer sold at Joe’s.",
    "sql": "SELECT d.name FROM Drinkers d WHERE NOT EXISTS(SELECT 1 FROM Sells s WHERE s.bar='Joe''s Bar' AND NOT EXISTS(SELECT 1 FROM Likes l WHERE l.drinker=d.name AND l.beer=s.beer));",
    "steps": [
      "For one person d, search Joe’s required beers.",
      "For each required beer, search for a matching Likes row for d.",
      "A missing like is a counterexample. Keep d only if no counterexample exists. If Joe sells nothing, every drinker passes."
    ],
    "pitfall": "A simple IN test means “some,” not “every.”",
    "courseSQL": ""
  }
];
