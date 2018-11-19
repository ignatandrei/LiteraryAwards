export class PetersonData {
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
      "Beyle, Marie-Henri (Stendhal)",
      "The Charterhouse of Parma"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Bronte, Emily",
      "Wuthering Heights"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Bulgakov, Mikhail",
      "The Master and Margarita"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Cary, Joyce",
      "The Horse&#8217;s Mouth"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Chandler, Raymond",
      "The Big Sleep"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Chandler, Raymond",
      "The Long Goodbye"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dalyrmple, Theodore",
      "Our CultureWhat&#8217;s Left of It"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dalrymple, Theodore",
      "Life at the BottomThe Worldview That Makes the Underclass"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dostoevesky, Fyodor",
      "Crime and Punishment"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dostoevesky, Fyodor",
      "Notes from Underground"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dostoevesky, Fyodor",
      "The Brothers Karamazov"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dostoevsky, Fyodor",
      "The Devils"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Dostoevsky, Fyodor",
      "The Idiot"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Golding, William",
      "Lord of the Flies"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Graves, Robert",
      "I, Claudius"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Hammet, Dashiel",
      "The Maltese Falcon"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Hemingway, Ernest",
      "A Farewell To Arms"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Hemingway, Ernest",
      "For Whom the Bell Tolls"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Hemingway, Ernest",
      "The Old Man and the Sea"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Huxley, Aldous",
      "Brave New World"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Huxley, Aldous",
      "Island"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Huxley, Aldous",
      "Point Counterpoint"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Kazantzakis, Nikos",
      "The Fratricides"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Kazantzakis, Nikos",
      "Zorba the Greek"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Kesey, Ken",
      "One Flew Over the Cuckoo&#8217;s Nest"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Kesey, Ken",
      "Sometimes a Great Notion"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Keyes, Daniel",
      "Flowers for Algernon"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Laurence, Margaret",
      "The Stone Angel"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Lee, Harper",
      "To Kill a Mockingbird"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nietzsche, Friedrich",
      "Beyond Good and Evil"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nietzsche, Friedrich",
      "On the Genealogy of Morals"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nietzsche, Friedrich",
      "The Antichrist"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nietzsche, Friedrich",
      "The Gay Science"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Nietzsche, Friedrich",
      "The Will to Power"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Orwell, George",
      "1984"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Orwell, George",
      "Animal Farm"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Orwell, George",
      "Road to Wigan Pier"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Pirsig, Robert",
      " Zen and the Art of Motorcycle Maintenance"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Shem, Samuel",
      "The House of God"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Solzhenitsyn, Aleksandr",
      "Cancer Ward"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Solzhenitsyn, Aleksandr",
      "The First Circle"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Steinbeck, John",
      "East of Eden"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Steinbeck, John",
      "The Grapes of Wrath"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Steinbeck, John",
      "Of Men and Mice"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Stendhal",
      "The Red and the Black"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Thompson, Hunter S",
      "Fear and Loathing in Las Vegas"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Tolstoy, Leo",
      "Anna Karenina"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Tolstoy, Leo",
      "War and Peace"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Troyat, Henri",
      "Tolstoy"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Wolfe, Tom",
      "The Electric Kool Aid Acid Test"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Becker, Ernest",
      "The Denial of Death"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Ellenberger, Henri",
      "The Discovery of the Unconscious"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eysenck, Hans",
      "Genius"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Frankl, Viktor",
      "Man&#8217;s Search for Meaning"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Freud, Sigmund",
      "An Outline of Psychoanalysis"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Freud, Sigmund",
      "The Interpretation of Dreams"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      " Aion"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Answer to Job"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      " Archetypes of the Collective Unconscious"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Modern Man in Search of a Soul"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      " Mysterium Coniunctionis (Difficult; read the last half)"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Psychology and Alchemy"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      " PsychologyEast and West"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Psychology of ReligionEast and West"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Symbols of Transformation"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "The Symbolic Life"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Jung, Carl",
      "Two Essays on Analytical Psychology"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "May, Rollo. Angel, Ernest &amp; Ellenberger, Henri",
      "ExistenceA new dimension in psychiatry and psychology"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Neumann, Erich",
      "The Origins and History of Consciousness"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Neumann, Erich",
      "The Great Mother"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Piaget, Jean",
      "Play, Dreams and Imitation in Childhood"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Piaget, Jean",
      "The Moral Judgment of the Child"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Rogers, Carl",
      "A Way of Being"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Rogers, Carl",
      "On Becoming a Person"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Gibson, James J",
      "An Ecological Approach to Visual Perception"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Goldberg, Elkhonon",
      "The New Executive Brain"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Gray, Jeffrey and Neil McNaughton",
      "The Neuropsychology of Anxiety"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "LeDoux, Joseph",
      "The Emotional Brain"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Panksepp, Jaak",
      "Affective Neuroscience"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sacks, Oliver",
      "The Man who Mistook his Wife for a Hat"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sacks, Oliver",
      "Awakenings"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Sacks, Oliver",
      "An Anthropologist on Mars"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Swanson, Larry",
      "Brain ArchitectureUnderstanding the Basic Plan"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Burton Russell, Jeffrey",
      "MephistophelesThe Devil in the Modern World"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      "A History of Religious Ideas (Vol. 1, Vol. 2, Vol. 3)"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      "Myth and Reality"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      "Myths, Dreams and Mysteries"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      " ShamanismArchaic Techniques of Ecstasy"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      "The Forge and the Crucible"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Eliade, Mircea",
      "The Sacred and the Profane"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Frye, Northrop",
      "The Great Code"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Frye, Northrop",
      "Words with Power"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Lewis, Bernard",
      "The Crisis of Islam"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Smith, Huston",
      "(introductory)The World&#8217;s Religions"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "The Bible",
      "Designed to be Read as Living Literature"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "de Solla Price, Derek J",
      "Little Science, Big Science"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "De Soto, Hernando",
      " The Mystery of CapitalWhy Capitalism Triumphs in the West and Fails Everywhere Else"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Gall, John",
      " SystemanticsHow Systems Work and Especially How They Fail"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Porter, Theodore M",
      "The Rise of Statistical Thinking 1820-1900"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Radzinsky, Edvard",
      "StalinThe First In-depth Biography Based on Explosive New Documents from Russia&#8217;s Secret Archives"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Shirer, William L",
      " The Rise and Fall of the Third Reich"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Peterson, Jordan B",
      "12 Rules for LifeAn Antidote to Chaos"
    ]);
    db.run("INSERT INTO tableAuthors(Author, bookName) VALUES (?,?)", [
      "Peterson, Jordan B",
      "Maps of Meaning"
    ]);
  }
}
