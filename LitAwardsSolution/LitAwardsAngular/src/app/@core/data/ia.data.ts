export class IAData {
  public RunSqlData(db: any) {
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
    db.run(
      "CREATE TABLE tableAuthors (id INTEGER PRIMARY KEY AUTOINCREMENT ,Author, bookName);"
    );
  }
  private RunSql(db: any) {
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Roger Zelazny",
      "Lord of Light (9780060567231)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "A. E. van Vogt",
      "The Voyage of the Space Beagle (9780765320773)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Frank Herbert",
      "Dune (Dune Chronicles, Book 1)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Orson Scott Card",
      "Ender&#39;s Game (The Ender Quintet) (9780765342294)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Philip K. Dick",
      "Ubik"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Aleksandr I. Solzhenitsyn",
      "The Gulag Archipelago Volume 1An Experiment in Literary Investigation (8601400693506)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "L. Frank Baum",
      "The Marvelous Land of Oz (Books of Wonder)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Stephen King",
      "The StandExpanded Edition8"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nassim Nicholas Taleb",
      "The Black SwanThe Impact of the Highly Improbable (Incerto)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nigel Calder",
      "Magic UniverseA Grand Tour of Modern Science (9780192806697)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "George Orwell",
      "1984"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Diogenes Laertius",
      "The Lives and Opinions of Eminent Philosophers"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Kaiten Nukariya",
      "Religion of the SamuraiA Study of Zen Philosophy and Discipline in China"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Henri Brunel",
      "Les plus beaux contes zenLe bonheur zen"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Thomas Cathcart, Daniel Klein",
      "Aristotle and an Aardvark Go to Washington"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Thomas Cleary",
      "Zen Antics (9780877739449)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Michael Crichton",
      "Sphere"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jack London",
      "The Sea-Wolf and Selected Stories100th Anniversary Edition (9780451529367)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Agatha Christie",
      "And Then There Were None"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Stephen King",
      "Christine (Signet)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Simon Singh",
      "Code Book, TheThe Secret History of Codes and Code-breaking"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sherry Argov",
      "Why Men Love BitchesFrom Doormat to Dreamgirl_A Woman&#39;s Guide to Holding Her Own in a Relationship"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Peter S. Beagle",
      "The Last Unicorn"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Steven; Dubner, Stephen J. Levitt",
      "FreakonomicsA Rogue Economist Explores the Hidden Side of Everything"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Pearl S. Buck",
      "The Mother"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Malcolm Gladwell",
      "The Tipping PointHow Little Things Can Make a Big Difference"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Auguste de Villiers de l&#39;Isle-Adam",
      "Contes Cruels (9780559895906)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Stuart Crainer, Des Dearlove",
      "The Ultimate Business Guru GuideThe Greatest Thinkers Who Made Management"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Douglas Mook",
      "Classic Experiments in Psychology (9780313318214)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Peter F. Drucker",
      "The Effective Executive"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jim Collins",
      "Good to GreatWhy Some Companies Make the Leap and Others Don&#39;t (8601300383743)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jean Bott&#39;ro",
      "Plus Belle Histoire de Dieu. Qui Est Le Dieu de La Bible ?(La) (English and French Edition)"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Greg Egan",
      "Quarantine"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Paul Martin",
      "Sex, Drugs and Chocolate"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Osho",
      "Meetings with Remarkable People"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Philip Zimbardo",
      "The Lucifer EffectUnderstanding How Good People Turn Evil"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Stephen King",
      "The Shining"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Daniel Kahneman",
      "Thinking, Fast and Slow"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Peter Bregman",
      "18 MinutesFind Your Focus, Master Distraction, and Get the Right Things Done"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Adele Faber, Elaine Mazlish",
      "How to Talk So Kids Will Listen &amp; Listen So Kids Will Talk"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nigel Benson, Joannah Ginsburg, Voula Grand, Merrin Lazyan, Marcus Weeks, Catherine Collin",
      "The Psychology BookBig Ideas Simply Explained"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Travis Bradberry, Jean Greaves, Patrick M. Lencioni",
      "Emotional Intelligence 2.0"
    ]);
  }
}
