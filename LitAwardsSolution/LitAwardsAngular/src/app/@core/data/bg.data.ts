export class BGData {
  public RunSqlBG(db: any) {
    try {
      //window.alert(1);
      this.CreateTables(db);
      //window.alert(2);
      this.RunSql(db);
      //window.alert(3);
    } catch (e) {
      console.log("error" + JSON.stringify(e));
    }
  }
  private CreateTables(db: any) {
    db.run("CREATE TABLE tableAuthors (Author, bookName);");
  }
  private RunSql(db: any) {
    //window.alert(4);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "George Saunders",
      "Lincoln in the Bardo"
    ]);
    //window.alert(5);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "John Doerr",
      "Measure What Matters"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Rosling",
      "Factfulness"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "John Green",
      "Turtles All the Way Down"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Steven Pinker",
      "Enlightenment Now"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Matthew Desmond",
      "Evicted: Poverty and Profit in the American City"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Viet Thanh Nguyen",
      "The Sympathizer"
    ]);
    //window.alert('asd');
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Eddie Izzard",
      "Believe Me: A Memoir of Love"
      
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Vaclav Smil",
      "Energy and Civilization: A History"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Thi Bui",
      "The Best We Could Do: An Illustrated Memoir"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Jimmy Carter",
      "A Full Life"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Trevor Noah",
      "South Africa"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "J.D. Vance",
      "Hillbilly Elegy"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Yuval Noah Harari",
      "Homo Dues"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Maylis de Kerangal",
      "The Heart"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Ed Yong",
      "I Contain Multitudes"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Paul Kalanithi",
      "When Breath Becomes Air"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      
      "David Foster Wallace",
      "String Theory"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Shoe Dog",
      "Phil Knight"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Archie Brown",
      "The Myth of the Strong Leader"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Siddhartha Mukherjee",
      "The Gene: An Intimate History"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      
      "Robert Gordon",
      "The Rise and Fall of American Growth"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Seveneves",
      "Neal Stephenson"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Ryoichi Mikitani",
      "Power to Compete"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Yuval Noah Harari",
      "Sapiens"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Jordan Ellenberg",
      "How Not to be Wrong"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [      
      "Nick Lane",
      "The Vital Question"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "David Brooks",
      "The Road to Character"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Evan Thomas",
      "Being Nixon"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Julian Allwood",
      "Sustainable Materials With Both Eyes Open"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", ["Carol Dweck", "Mindset"]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Nancy Leys Stepan",
      "Eradication"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Randall Munroe",
      "Thing Explainer"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Jeremy N. Smith",
      "Epic Measures"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      
      "Mark Miodownik",
      "Stuff Matters"
    ]);
    db.run("INSERT INTO tableAuthors VALUES (?,?)", [
      "Allie Brosh",
      "Hyperbole and a Half"
    ]);
  }
}
