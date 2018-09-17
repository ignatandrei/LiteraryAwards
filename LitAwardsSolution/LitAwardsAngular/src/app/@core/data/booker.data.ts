export class BookerData {
    public RunSqlBooker(db:any){
          db.run(
      "CREATE TABLE table1 (Year,Author,Title,Genres,Country,AuthorWiki,AuthorFullWiki);"
    );
    db.run("INSERT INTO table1 VALUES (?,?,?,?,?,?,?)", [
      "1972",
      "John Berger&#91;35&#93;",
      "G.",
      "Experimental novel",
      "United Kingdom",
      "/wiki/John_Berger",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);
    db.run("INSERT INTO table1 VALUES (?,?,?,?,?,?,?)", [
      "2005",
      "John Banville",
      "The Sea",
      "Novel",
      "Ireland",
      "/wiki/John_Banville",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("CREATE TABLE booksPrize (bookName,AuthorFullWiki_origin);");

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Painter of Our Time (1958)&#91;9&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Foot of Clive (1962)&#91;2&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Corker's Freedom (1964)&#91;2&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "G. (1972)&#91;27&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Into Their Labours trilogy (1991): Pig Earth (1979), Once in Europa (1987), Lilac and Flag (1990)&#91;4&#93;&#91;27&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "To the Wedding (1995)&#91;9&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "King: A Street Story (1999)&#91;4&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "From A to X (2008)&#91;45&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Question of Geography (with Nella Bielski) (1987)&#91;46&#93;&#91;47&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Les Trois Chaleurs (1985)&#91;48&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Boris (1983)&#91;49&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Goya's Last Portrait (with Nella Bielski) (1989)&#91;50&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Jonah Who Will Be 25 in the Year 2000 (with Alain Tanner) (1976)&#91;27&#93;&#91;12&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "La Salamandre (The Salamander) (with Alain Tanner) (1971)&#91;51&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Le Milieu du monde (The Middle of the World) (with Alain Tanner) (1974)&#91;51&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Play Me Something (with Timothy Neat) (1989)&#91;52&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Une ville à Chandigarh (A City at Chandigarh) (1966)&#91;53&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Pages of the Wound (1994)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Collected Poems (2014)&#91;55&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Marcel Frishman (with George Besson) (1958)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Permanent Red (1960)&#91;54&#93; (Published in the United States in altered form in 1962 as Toward Reality: Essays in Seeing)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Success and Failure of Picasso (1965)&#91;27&#93;&#91;12&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Fortunate Man (with Jean Mohr) (1967)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Art and Revolution: Ernst Neizvestny And the Role of the Artist in the U.S.S.R (1969)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Moment of Cubism and Other Essays (1969)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Look of Things: Selected Essays and Articles (1972)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ways of Seeing&#91;27&#93; (with Mike Dibb, Sven Blomberg, Chris Fox and Richard Hollis) (1972)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Seventh Man (with Jean Mohr) (1975)&#91;12&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "About Looking (1980)&#91;12&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Another Way of Telling (with Jean Mohr) (1982)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "And Our Faces, My Heart, Brief as Photos (1984)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The White Bird (U.S. title: The Sense of Sight) (1985)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Keeping a Rendezvous (1992)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Sense of Sight (1993)&#91;56&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Albrecht Dürer: Watercolours and Drawings (1994)&#91;57&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Titian: Nymph and Shepherd (with Katya Berger) (1996)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Photocopies (1996)&#91;2&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Isabelle: A Story in Shorts (with Nella Bielski) (1998)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "At the Edge of the World (with Jean Mohr) (1999)&#91;58&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Selected Essays (Geoff Dyer, ed.) (2001)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Shape of a Pocket (2001)&#91;54&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "I Send You This Cadmium Red: A Correspondence between John Berger and John Christie (with John Christie) (2001)&#91;59&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "My Beautiful (with Marc Trivier) (2004)&#91;60&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Berger on Drawing (2005)&#91;61&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Here is Where We Meet (2005)&#91;9&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hold Everything Dear: Dispatches on Survival and Resistance (2007; 2nd ed. 2016)&#91;62&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Red Tenda of Bologna (2007)&#91;63&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "War with No End (with Naomi Klein, Hanif Kureishi, Arundhati Roy, Ahdaf Soueif, Joe Sacco and Haifa Zangana) (2007)&#91;64&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Meanwhile (2008)&#91;7&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Why Look at Animals? (2009)&#91;65&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "From I to J (with Isabel Coixet) (2009)&#91;66&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Lying Down to Sleep (with Katya Berger) (2010)&#91;67&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Railtracks (with Anne Michaels) (2011)&#91;68&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Bento's Sketchbook (2011)&#91;69&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Cataract (with Selçuk Demirel) (2012)&#91;70&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Understanding a Photograph (Geoff Dyer, ed.) (2013)&#91;71&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Daumier: The Heroism of Modern Life (2013)&#91;72&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Flying Skirts: An Elegy (with Yves Berger) (2014)&#91;73&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Portraits: John Berger on Artists (Tom Overton, ed.) (2015)&#91;50&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Cuatro horizontes (Four Horizons) (with Sister Lucia Kuppens, Sister Telchilde Hinkley and John Christie) (2015)&#91;74&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Lapwing &amp; Fox (Conversations between John Berger and John Christie) (2016)&#91;75&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Confabulations (Essays) (2016)&#91;12&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Landscapes: John Berger on Art (Tom Overton, ed.) (2016)&#91;76&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John by Jean: Fifty Years of Friendship (Jean Mohr, ed.) (2016)&#91;77&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Sparrow's Journey: John Berger Reads Andrey Platonov (CD: 44:34 &amp; 81-page book with Robert Chandler and Gareth Evans), London: House Sparrow Press in association with the London Review Bookshop (2016)&#91;78&#93;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Smoke (with Selçuk Demirel) (2017)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Seeing Through Drawing  (with John Christie) (2017). The book, published by OBJECTIF, features new texts by and about John Berger plus a catalogue section of images, information and stories from the invited artists in the main exhibition held on 8 July – 26 August 2017 at Mandell’s Gallery, Norwich. It contains two previously unpublished sequences of correspondence on art and communications between John Berger and his daughter Katya Berger Andreadakis along with tributes and stories from: Anne Michaels, Yves Berger, Eulàlia Bosch, Geoff Dyer, Gareth Evans, Paul Gordon and Tom Overton. The book also features a compilation of writings on the art and practice of drawing collected together by John Christie, from across John Berger’s art criticism, fiction, essays and letters.",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Andy Merrifield, John Berger, Reaktion Books (2013), p. 29",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ a b c Ray, Ed. Mohit K. (2007). The Atlantic Companion to Literature in English. Atlantic Publishers. p.&#160;48. ISBN&#160;9788126908325.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Berger, John; Mohr, Jean; Blomberg, Sven (2010). A Seventh Man: A Book of Images and Words about the Experience of Migrant Workers in Europe. Verso. ISBN&#160;9781844676491.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Christian Dimitriu, Alain Tanner, Paris: Henri Veyrier, 1985, pp. 125–134.",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ a b Hertel, Ralf (2005). Making Sense: Sense Perception in the British Novel of the 1980s and 1990s. Rodopi. p.&#160;74. ISBN&#160;9789042018648.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ a b McCance, Dawne (2013). Critical Animal Studies: An Introduction. SUNY Press. p.&#160;45. ISBN&#160;9781438445342.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Bürkle, Christoph (2006). Johann Sebastian Bach: der geometrische Komponist, Issues 764–766. Niggli. p.&#160;83.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Soja, Edward W. (1989). Postmodern Geographies: The Reassertion of Space in Critical Social Theory (illustrated, reprint ed.). Verso. p.&#160;21. ISBN&#160;9780860919360.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Merrifield, Andy (2013). John Berger (illustrated ed.). Reaktion Books. p.&#160;159. ISBN&#160;9781861899422.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ a b Talbot, Toby (2010). The New Yorker Theater and Other Scenes from a Life at the Movies (illustrated ed.). Columbia University Press. p.&#160;110. ISBN&#160;9780231519823.&#160;",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Fuller, Peter (1980) Seeing Berger. A Revaluation of ways of Seeing, Writers and Readers. ISBN&#160;0-906495-48-2.",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hertel, Ralf and David Malcolm (eds.), On John Berger: Telling Stories. Leiden: Brill, 2015. ISBN&#160;9789004306127.",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      'Hochschild, Adam Finding the Trapdoor: Essays, Portraits, Travels (Syracuse University Press, 1997), "Broad Jumper in the Alps," pp.&#160;50–64.',
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Merrifield, Andy John Berger, London: Reaktion Books, 2012. ISBN&#160;978-1-86189-904-0",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Papastergiadis, Nikos Modernity as exile: The stranger in John Berger's writing (Manchester University Press, 1993) ISBN&#160;0-7190-3876-6",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Chandan, Amarjit; Evans, Gareth; Gunaratnam, Yasmin (Eds.) The Long White Thread of Words: Poems for John Berger, Ripon: Smokestack Books, 2016. ISBN&#160;978-0-9934547-4-5",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Chandan, Amarjit; Gunaratnam, Yasmin (Eds.) A Jar of Wild Flowers: Essays in Celebration of John Berger, London: Zed Books, 2016. ISBN&#160;978-1-78360-879-9",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "'Introduction to John Berger on Picasso' Mike Gonzalez in International Socialism 40 (1988).",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Defending Picasso's late work by John Berger, International Socialism 40 (1988).",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "P. H. Newby (1969)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Bernice Rubens (1970)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. G. Farrell (Lost Man Booker Prize, 1970)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "V. S. Naipaul (1971)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Berger (1972)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. G. Farrell (1973)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Nadine Gordimer / Stanley Middleton (1974)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ruth Prawer Jhabvala (1975)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "David Storey (1976)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Scott (1977)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Iris Murdoch (1978)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Penelope Fitzgerald (1979)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "William Golding (1980)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Salman Rushdie (1981)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Thomas Keneally (1982)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. M. Coetzee (1983)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Anita Brookner (1984)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Keri Hulme (1985)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kingsley Amis (1986)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Penelope Lively (1987)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Carey (1988)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kazuo Ishiguro (1989)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A. S. Byatt (1990)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ben Okri (1991)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Michael Ondaatje / Barry Unsworth (1992)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Roddy Doyle (1993)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "James Kelman (1994)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Pat Barker (1995)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Graham Swift (1996)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Arundhati Roy (1997)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ian McEwan (1998)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. M. Coetzee (1999)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Margaret Atwood (2000)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Carey (2001)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Yann Martel (2002)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "DBC Pierre (2003)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Alan Hollinghurst (2004)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Banville (2005)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kiran Desai (2006)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Anne Enright (2007)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Aravind Adiga (2008)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hilary Mantel (2009)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Howard Jacobson (2010)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Julian Barnes (2011)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hilary Mantel (2012)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Eleanor Catton (2013)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Richard Flanagan (2014)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Marlon James (2015)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Beatty (2016)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "George Saunders (2017)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "David Newman and Robert Benton (1967)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Cassavetes (1968)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Mazursky and Larry Tucker (1969)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Éric Rohmer (1970)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Penelope Gilliatt (1971)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ingmar Bergman (1972)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "George Lucas, Gloria Katz and Willard Huyck (1973)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ingmar Bergman (1974)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Robert Towne and Warren Beatty (1975)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Alain Tanner and John Berger (1976)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Woody Allen and Marshall Brickman (1977)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Mazursky (1978)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Steve Tesich (1979)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Bo Goldman (1980)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Guare (1981)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Murray Schisgal and Larry Gelbart (1982)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Bill Forsyth (1983)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Lowell Ganz, Babaloo Mandel and Bruce Jay Friedman (1984)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Albert Brooks and Monica Johnson (1985)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hanif Kureishi (1986)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Boorman (1987)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ron Shelton (1988)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Gus Van Sant and Daniel Yost (1989)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Charles Burnett (1990)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "David Cronenberg (1991)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "David Webb Peoples (1992)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Jane Campion (1993)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Quentin Tarantino and Roger Avary (1994)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Amy Heckerling (1995)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Albert Brooks and Monica Johnson (1996)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Curtis Hanson and Brian Helgeland (1997)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Scott Frank (1998)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Charlie Kaufman (1999)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kenneth Lonergan (2000)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Julian Fellowes (2001)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ronald Harwood (2002)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Shari Springer Berman and Robert Pulcini (2003)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Alexander Payne and Jim Taylor (2004)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Noah Baumbach (2005)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Morgan (2006)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Tamara Jenkins (2007)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Mike Leigh (2008)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Joel Coen and Ethan Coen (2009)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Aaron Sorkin (2010)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Asghar Farhadi (2011)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Tony Kushner (2012)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Richard Linklater, Ethan Hawke, and Julie Delpy (2013)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Wes Anderson (2014)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Tom McCarthy and Josh Singer (2015)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kenneth Lonergan (2016)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Greta Gerwig (2017)",
      "https://en.wikipedia.org/wiki/John_Berger"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "6.1 Booker Prize, 2005",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "6.2 Kafka Prize, 2011",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Banville, John (1971). Nightspawn.&#160;",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Birchwood (1973)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Mefisto (1986)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Book of Evidence (1989)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ghosts (1993)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Athena (1995)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Ark (1996) (only 260 copies published)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Untouchable (1997)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Eclipse (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Shroud (2002)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Sea (2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Infinities (2009)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ancient Light (2012)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Blue Guitar (2015)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Mrs Osmond (2017)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Doctor Copernicus (1976)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kepler (1981)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Newton Letter (1982)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Long Lankin (1970; revised edition 1984)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Broken Jug (1994), after Heinrich von Kleist's play of that name",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "God's Gift: A Version of Amphitryon by Heinrich von Kleist (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Love in the Wars (adaptation of Heinrich von Kleist's Penthesilea, 2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Christine Falls (2006)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Silver Swan (2007)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Elegy for April (2010)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Death in Summer (2011)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Vengeance (2012)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Holy Orders (2013)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Even the Dead (2015)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Lemur (2008, previously serialised in The New York Times)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Black-Eyed Blonde, a Philip Marlowe novel (2014)&#91;49&#93;",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Prague Nights (2017) (published in the USA as Wolf on a String)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Prague Pictures: Portrait of a City (2003)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Time Pieces: A Dublin Memoir (2016)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      '^ "John Banville." Dictionary of Irish Literature. Ed. Robert Hogan. Westport, Connecticut: Greenwood Press, 1996. ISBN&#160;0-313-29172-1.',
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Evans, Vonnie Banville (1994). The House in the Faythe. Dublin: Code Green. ISBN&#160;978-1-907215-12-4.&#160;",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      '^ "Book of Members, 1780–2010: Chapter B" (PDF). American Academy of Arts and Sciences. Retrieved 17 May 2011.&#160;',
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ Roddy Doyle’s ‘The Guts’ named novel of the year Irish Times, 2013-11-27.",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "^ \"El XI Premio RBA de Novela Policíaca recae en Benjamin Black con 'Pecado'\". Lecturas (in Spanish). September 8, 2017. Retrieved September 13, 2017.&#160;",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Banville by Neil Murphy; Bucknell University Press (2018); ISBN&#160;978-1-61148-872-2",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Banville by John Kenny; Irish Academic Press (2009); ISBN&#160;978-0-7165-2901-9",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Irish Writers on Writing featuring John Banville. Edited by Eavan Boland (Trinity University Press, 2007).",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Nightspawn (1971)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Birchwood (1973)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Doctor Copernicus (1976)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kepler (1981)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Newton Letter (1982)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Mefisto (1986)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Book of Evidence (1989)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ghosts (1993)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Athena (1995)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Ark (1996)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Untouchable (1997)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Eclipse (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Shroud (2002)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Sea (2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Infinities (2009)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ancient Light (2012)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Blue Guitar (2015)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Long Lankin (1970)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Broken Jug (1994)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Seachange (1994)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Dublin 1742 (2002)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "God's Gift (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Love in the Wars (2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Todtnauberg (2006)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Prague Pictures: Portrait of a City (2003)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Time Pieces: A Dublin Memoir (2016)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Last September (1999)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Albert Nobbs (2011)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Sea (2013)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Zbigniew Herbert (1965)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "W. H. Auden (1966)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Vasko Popa (1967)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Václav Havel (1968)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Not given (1969)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Eugène Ionesco (1970)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Huchel (1971)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Sławomir Mrożek (1972)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Harold Pinter (1973)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Sándor Weöres (1974)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Miroslav Krleža (1975)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Italo Calvino (1976)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Pavel Kohout (1977)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Fulvio Tomizza (1977)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Simone de Beauvoir (1978)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Fulvio Tomizza (1979)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Sarah Kirsch (1980)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Doris Lessing (1981)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Tadeusz Różewicz (1982)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Friedrich Dürrenmatt (1983)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Christa Wolf (1984)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Stanisław Lem (1985)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Giorgio Manganelli (1986)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Milan Kundera (1987)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Andrzej Szczypiorski (1988)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Marguerite Duras (1989)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Helmut Heissenbüttel (1990)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Péter Nádas (1991)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Salman Rushdie (1992)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Chinghiz Aitmatov (1993)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Inger Christensen (1994)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Aleksandar Tišma (1995)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Jürg Laederach (1996)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Antonio Tabucchi (1997)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Dubravka Ugrešić (1998)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Péter Esterházy (1999)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "António Lobo Antunes (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Umberto Eco (2001)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Christoph Hein (2002)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Cees Nooteboom (2003)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Julian Barnes (2004)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Claudio Magris (2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Jorge Semprún (2006)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A. L. Kennedy (2007)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Agota Kristof (2008)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Per Olov Enquist (2009)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Nizon (2010)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Javier Marías (2011)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Patrick Modiano (2012)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Banville (2013)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Lyudmila Ulitskaya (2014)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Mircea Cărtărescu (2015)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Andrzej Stasiuk (2016)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Karl Ove Knausgård (2017)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "P. H. Newby (1969)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Bernice Rubens (1970)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. G. Farrell (Lost Man Booker Prize, 1970)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "V. S. Naipaul (1971)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Berger (1972)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. G. Farrell (1973)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Nadine Gordimer / Stanley Middleton (1974)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ruth Prawer Jhabvala (1975)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "David Storey (1976)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Scott (1977)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Iris Murdoch (1978)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Penelope Fitzgerald (1979)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "William Golding (1980)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Salman Rushdie (1981)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Thomas Keneally (1982)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. M. Coetzee (1983)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Anita Brookner (1984)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Keri Hulme (1985)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kingsley Amis (1986)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Penelope Lively (1987)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Carey (1988)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kazuo Ishiguro (1989)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A. S. Byatt (1990)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ben Okri (1991)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Michael Ondaatje / Barry Unsworth (1992)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Roddy Doyle (1993)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "James Kelman (1994)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Pat Barker (1995)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Graham Swift (1996)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Arundhati Roy (1997)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Ian McEwan (1998)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "J. M. Coetzee (1999)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Margaret Atwood (2000)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Peter Carey (2001)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Yann Martel (2002)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "DBC Pierre (2003)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Alan Hollinghurst (2004)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "John Banville (2005)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kiran Desai (2006)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Anne Enright (2007)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Aravind Adiga (2008)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hilary Mantel (2009)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Howard Jacobson (2010)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Julian Barnes (2011)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hilary Mantel (2012)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Eleanor Catton (2013)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Richard Flanagan (2014)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Marlon James (2015)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Paul Beatty (2016)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "George Saunders (2017)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Crumb Borne by Clive Barry (1965)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Dear Green Place by Archie Hind (1966)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Winter Journey by Eva Figes (1967)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Song and a Dance by P. J. Kavanagh (1968)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Poor Lazarus by Maurice Leitch (1969)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "When Did You Last See your Father? by Margaret Blount (1970)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Big Chapel by Thomas Kilroy (1971)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "G by John Berger (1972)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "In the Country of the Skin by Peter Redgrove (1973)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Bottle Factory Outing by Beryl Bainbridge (1974)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Friends and Romans by Sylvia Clayton (1975)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Falstaff by Robert Nye (1976)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Condition of Muzak by Michael Moorcock (1977)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Murderer by Roy Heath (1978)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Night in Tunisia by Neil Jordan and The House of Hunger by Dambudzo Marechera (1979)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "A Month in the Country by J. L. Carr (1980)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Kepler by John Banville (1981)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Where I Used to Play on the Green by Glyn Hughes (1982)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Waterland by Graham Swift (1983)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Empire of the Sun by J. G. Ballard (1984)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Hawksmoor by Peter Ackroyd (1985)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Continent by Jim Crace (1986)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Levels by Peter Benson (1987)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Sweet Desserts by Lucy Ellmann (1988)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Rosehill: Portrait from a Midlands City by Carol Lake (1989)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Shape-Shifter by Pauline Melville (1990)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Devil's Own Work by Alan Judd (1991)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Poor Things by Alasdair Gray (1992)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "The Eye in the Door by Pat Barker (1993)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Debatable Land by Candia McWilliam (1994)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Heart's Journey in Winter by James Buchan (1995)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Reading in the Dark by Seamus Deane (1996)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Fugitive Pieces by Anne Michaels (1997)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    db.run("INSERT INTO booksPrize VALUES (?,?)", [
      "Trumpet by Jackie Kay (1998)",
      "https://en.wikipedia.org/wiki/John_Banville"
    ]);

    }
}