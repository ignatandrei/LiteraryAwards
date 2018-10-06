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
      "William Gibson",
      "Peter J. King D. Phil."
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "One Hundred PhilosophersThe Life and Work of the World&#39;s Greatest Thinkers",
      "Diogenes Laertius"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Lives and Opinions of Eminent Philosophers",
      "Kaiten Nukariya"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Religion of the SamuraiA Study of Zen Philosophy and Discipline in China",
      "Henri Brunel"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Les plus beaux contes zenLe bonheur zen",
      "Thomas Cathcart, Daniel Klein"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Aristotle and an Aardvark Go to Washington",
      "Thomas Cleary"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Zen Antics (9780877739449)",
      "Michael Crichton"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sphere",
      "Jack London"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Sea-Wolf and Selected Stories100th Anniversary Edition (9780451529367)",
      "Agatha Christie"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "And Then There Were None",
      "Stephen King"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Christine (Signet)",
      "Simon Singh"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Code Book, TheThe Secret History of Codes and Code-breaking",
      "Sherry Argov"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Why Men Love BitchesFrom Doormat to Dreamgirl_A Woman&#39;s Guide to Holding Her Own in a Relationship",
      "Peter S. Beagle"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Last Unicorn",
      "Steven; Dubner, Stephen J. Levitt"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "FreakonomicsA Rogue Economist Explores the Hidden Side of Everything",
      "Pearl S. Buck"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Mother",
      "Malcolm Gladwell"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Tipping PointHow Little Things Can Make a Big Difference",
      "Auguste de Villiers de l&#39;Isle-Adam"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Contes Cruels (9780559895906)",
      "Stuart Crainer, Des Dearlove"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Ultimate Business Guru GuideThe Greatest Thinkers Who Made Management",
      "Douglas Mook"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Classic Experiments in Psychology (9780313318214)",
      "Peter F. Drucker"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Effective Executive",
      "Jim Collins"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Good to GreatWhy Some Companies Make the Leap and Others Don&#39;t (8601300383743)",
      "Jean Bott&#39;ro"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Plus Belle Histoire de Dieu. Qui Est Le Dieu de La Bible ?(La) (English and French Edition)",
      "Greg Egan"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Quarantine",
      "Paul Martin"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sex, Drugs and Chocolate",
      "Osho"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Meetings with Remarkable People",
      "Philip Zimbardo"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Lucifer EffectUnderstanding How Good People Turn Evil",
      "Stephen King"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Shining",
      "Daniel Kahneman"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Thinking, Fast and Slow",
      "Peter Bregman"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "18 MinutesFind Your Focus, Master Distraction, and Get the Right Things Done",
      "Adele Faber, Elaine Mazlish"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "How to Talk So Kids Will Listen &amp; Listen So Kids Will Talk",
      "Nigel Benson, Joannah Ginsburg, Voula Grand, Merrin Lazyan, Marcus Weeks, Catherine Collin"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Psychology BookBig Ideas Simply Explained",
      "Travis Bradberry, Jean Greaves, Patrick M. Lencioni"
    ]);

    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Emotional Intelligence 2.0",
      ""
    ]);
  }
}
