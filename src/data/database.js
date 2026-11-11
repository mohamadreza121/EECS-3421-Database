// Schema from the supplied lecture workshop. Rows are authored practice fixtures,
// not a claim that every lecture example uses these exact rows.
export const schemaSQL = `PRAGMA foreign_keys=ON;
CREATE TABLE Beers(name TEXT PRIMARY KEY NOT NULL, manf TEXT);
CREATE TABLE Bars(bar TEXT PRIMARY KEY NOT NULL, addr TEXT, license TEXT UNIQUE);
CREATE TABLE Drinkers(name TEXT PRIMARY KEY NOT NULL, addr TEXT DEFAULT '123 Simcoe St.', phone TEXT);
CREATE TABLE Likes(drinker TEXT NOT NULL REFERENCES Drinkers(name), beer TEXT NOT NULL REFERENCES Beers(name), PRIMARY KEY(drinker,beer));
CREATE TABLE Sells(bar TEXT NOT NULL REFERENCES Bars(bar), beer TEXT NOT NULL REFERENCES Beers(name), price REAL CHECK(price>=0), PRIMARY KEY(bar,beer));
CREATE TABLE Frequents(drinker TEXT NOT NULL REFERENCES Drinkers(name), bar TEXT NOT NULL REFERENCES Bars(bar), PRIMARY KEY(drinker,bar));
CREATE TABLE PotBuddies(name TEXT);
CREATE TABLE RipoffBars(bar TEXT);
CREATE TABLE R(a INTEGER,b INTEGER);
CREATE TABLE S(b INTEGER,c INTEGER);
INSERT INTO Beers VALUES ('Bud','Anheuser-Busch'),('Bud Lite','Anheuser-Busch'),('Michelob','Anheuser-Busch'),('Miller','Miller'),('Heineken','Heineken'),('Pete''s Ale','Pete''s'),('Mystery',NULL),('Unserved','Solo');
INSERT INTO Bars VALUES ('Joe''s Bar','Toronto','L1'),('Sue''s Bar','York','L2'),('The Pub','Toronto','L3'),('Empty Bar','York','L4');
INSERT INTO Drinkers(name,addr,phone) VALUES ('Sally','Toronto','416-555-1234'),('Fred','York','905-555-4567'),('Alice','Toronto',NULL),('Bob','York','647-222-3333'),('Eve','Vaughan','905-555-0000');
INSERT INTO Likes VALUES ('Sally','Bud'),('Sally','Miller'),('Fred','Bud'),('Fred','Heineken'),('Alice','Pete''s Ale'),('Bob','Bud'),('Bob','Miller');
INSERT INTO Sells VALUES ('Joe''s Bar','Bud',2.50),('Joe''s Bar','Miller',3.00),('Joe''s Bar','Heineken',3.50),('Sue''s Bar','Bud',3.00),('Sue''s Bar','Miller',2.50),('Sue''s Bar','Pete''s Ale',5.50),('The Pub','Bud',NULL),('The Pub','Heineken',3.50),('The Pub','Pete''s Ale',5.50),('The Pub','Mystery',4.00);
INSERT INTO Frequents VALUES ('Sally','Joe''s Bar'),('Sally','Sue''s Bar'),('Fred','Joe''s Bar'),('Alice','Sue''s Bar'),('Bob','The Pub'),('Bob','Joe''s Bar');
INSERT INTO R VALUES(1,2),(3,4);
INSERT INTO S VALUES(2,5),(2,6);`;
export const tables=[
{name:'Beers',columns:['name TEXT · PK','manf TEXT · nullable'],description:'Beer identity and manufacturer.'},
{name:'Bars',columns:['bar TEXT · PK','addr TEXT','license TEXT · UNIQUE'],description:'The workshop uses bar; L6 uses name and also shows license. Here license is retained as an optional extra.'},
{name:'Drinkers',columns:['name TEXT · PK','addr TEXT · default','phone TEXT · nullable'],description:'People, addresses, phone numbers.'},
{name:'Likes',columns:['drinker TEXT · PK, FK','beer TEXT · PK, FK'],description:'A composite key: a person–beer pair.'},
{name:'Sells',columns:['bar TEXT · PK, FK','beer TEXT · PK, FK','price REAL · nullable, CHECK ≥ 0'],description:'A bar–beer pair identifies a sale listing.'},
{name:'Frequents',columns:['drinker TEXT · PK, FK','bar TEXT · PK, FK'],description:'A person–bar pair.'},
{name:'PotBuddies',columns:['name TEXT'],description:'Empty workspace table for INSERT SELECT exercises.'},
{name:'RipoffBars',columns:['bar TEXT'],description:'Empty event log for trigger exercises.'},
{name:'R',columns:['a INTEGER','b INTEGER'],description:'Lecture 7 IN vs JOIN counterexample.'},
{name:'S',columns:['b INTEGER','c INTEGER'],description:'Two matching b=2 rows make join multiplicity visible.'}
];
export const gradeVariants=[
{label:'Original practice data',sql:''},
{label:'Extra matches, ties, and changed NULL values',sql:`INSERT INTO Beers VALUES('New AB','Anheuser-Busch'),('New Pete','Pete''s');
INSERT INTO Bars VALUES('Annex','Toronto','L5');
INSERT INTO Drinkers(name,addr,phone) VALUES('Carol','Toronto','416-555-9999');
INSERT INTO Likes VALUES('Fred','New AB'),('Sally','Heineken'),('Sally','New Pete'),('Carol','Bud');
INSERT INTO Frequents VALUES('Carol','Joe''s Bar'),('Sally','Annex');
INSERT INTO Sells VALUES('Joe''s Bar','New Pete',4.75),('Annex','New AB',6.00),('Annex','Bud',2.50),('Annex','Miller',6.00);
UPDATE Sells SET price=2.25 WHERE bar='The Pub' AND beer='Bud';
UPDATE Sells SET price=NULL WHERE bar='Sue''s Bar' AND beer='Miller';`},
{label:'Empty requirement sets and people with no facts',sql:`DELETE FROM Sells WHERE bar='Joe''s Bar';
DELETE FROM Likes WHERE drinker='Fred';
DELETE FROM Frequents WHERE drinker='Fred';
UPDATE Sells SET price=NULL WHERE beer='Heineken';
INSERT INTO Drinkers(name,addr,phone) VALUES('Dana','York','905-555-1111');
INSERT INTO Beers VALUES('Unsold AB','Anheuser-Busch');`}
];
