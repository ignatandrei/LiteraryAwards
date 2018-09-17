export class NobelData {
  public RunSqlNobel(db: any) {
    db.run(
      "CREATE TABLE Table1 (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name);"
    );

    db.run("INSERT INTO Table1 VALUES (?,?,?,?,?,?,?,?)", [
      "1932",
      "John Galsworthy",
      "English",
      '"for his distinguished art of narration, which takes its highest form in The Forsyte Saga"&#91;42&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/John_galsworthy.jpg/75px-John_galsworthy.jpg",
      "https://en.wikipedia.org/wiki/John_Galsworthy",
      "John_Galsworthy"
    ]);
    db.run("INSERT INTO Table1 VALUES (?,?,?,?,?,?,?,?)", [
      "1960",
      "Saint-John Perse",
      "French",
      '"for the soaring flight and the evocative imagery of his poetry, which in a visionary fashion reflects the conditions of our time"&#91;65&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Saint-John_Perse_1960.jpg/75px-Saint-John_Perse_1960.jpg",
      "https://en.wikipedia.org/wiki/Saint-John_Perse",
      "Saint-John_Perse"
    ]);
    db.run("INSERT INTO Table1 VALUES (?,?,?,?,?,?,?,?)", [
      "1962",
      "John Steinbeck",
      "English",
      '"for his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception"&#91;67&#93;',
      "novel, short story, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/JohnSteinbeck_crop.JPG/75px-JohnSteinbeck_crop.JPG",
      "https://en.wikipedia.org/wiki/John_Steinbeck",
      "John_Steinbeck"
    ]);
    db.run("INSERT INTO Table1 VALUES (?,?,?,?,?,?,?,?)", [
      "1974",
      "Eyvind Johnson",
      "Swedish",
      '"for a narrative art, farseeing in lands and ages, in the service of freedom"&#91;79&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eyvind.JPG/75px-Eyvind.JPG",
      "https://en.wikipedia.org/wiki/Eyvind_Johnson",
      "Eyvind_Johnson"
    ]);
    db.run("CREATE TABLE booksNobel (bookName,name);");

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "De fyra främlingarna (short story collection, 1924)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Timans och rättfärdigheten (novel, 1925)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Stad i mörker (novel, 1927)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Stad i ljus (novel, 1928)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Minnas (novel, 1928)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Kommentar till ett stjärnfall (novel, 1929)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Avsked till Hamlet (novel, 1930)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Natten är här (short story collection, 1932)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Bobinack (novel, 1932)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Regn i gryningen (novel, 1933)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Nu var det 1914 (novel, 1934)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Än en gång, kapten!  (short story collection, 1934)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Here's Your Life (Swedish: Här har du ditt liv!, novel, 1935)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Se dig inte om! (novel, 1936)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Slutspel i ungdomen (novel, 1937)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Nattövning (novel, 1938)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Den trygga världen (short story collection, 1940)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Soldatens återkomst (novel, 1940)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Grupp Krilon (novel, 1941)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Krilons resa (novel, 1942)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Krilon själv (novel, 1943)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Sju liv (short story compilation, 1944)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Return to Ithaca (Swedish: Strändernas svall, novel, 1946; drama, 1948)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Pan mot Sparta (short story collection, 1946)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Dagbok från Schweiz (1949)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Drömmar om rosor och eld (novel, 1949)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Lägg undan solen (novel, 1951)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Romantisk berättelse (novel, 1953)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Tidens gång (novel, 1955)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Vinterresa i Norrbotten (1955)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Molnen över Metapontion (novel, 1957)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Vägar över Metaponto – en resedagbok (1959)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Days of His Grace (Swedish: Hans nådes tid, novel, 1960)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Spår förbi Kolonos – en berättelse (1961)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Livsdagen lång (novel, 1964)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Stunder, vågor – anteckningar, berättelser (1965)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Favel ensam (novel, 1968)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Resa i hösten 1921 (1973)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Några steg mot tystnaden (novel, 1973)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Olibrius och gestalterna (youth short story collection, 1986)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Herr Clerk vår mästare (original version of Minnas, novel, 1998)",
      "Eyvind_Johnson"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Salvation of a Forsyte (The Salvation of Swithin Forsyte) (1900)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'On Forsyte \'Change (1930) (re-published 1986 as "Uncollected Forsyte")',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Danaë (1905-6) in Forsytes, Pendyces, and Others (1935)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Man of Property (1906) – first book of The Forsyte Saga (1922)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      '"Indian Summer of a Forsyte" (1918) – first interlude of The Forsyte Saga',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "In Chancery (1920) – second book of The Forsyte Saga",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      '"Awakening" (1920) – second interlude of The Forsyte Saga',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "To Let (1921) – third book of The Forsyte Saga",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The White Monkey (1924) – first book of A Modern Comedy (1929)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Silver Spoon (1926) – second book of A Modern Comedy",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      '"A Silent Wooing" (1927) – first Interlude of A Modern Comedy',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      '"Passers-By" (1927) – second Interlude of A Modern Comedy',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Swan Song (1928) – third book of A Modern Comedy",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Four Forsyte Stories (1929) - "A Sad Affair", "Dog at Timothy\'s", "The Hondekoeter" and "Midsummer Madness"',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Maid in Waiting (1931) – first book of End of the Chapter (1934)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Flowering Wilderness (1932) – second book of End of the Chapter",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "One More River (originally Over the River) (1933) – third book of End of the Chapter",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "From the Four Winds, 1897 (as John Sinjohn)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Jocelyn, 1898 (as John Sinjohn)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Villa Rubein, 1900 (as John Sinjohn)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Man of Devon, 1901 (as John Sinjohn)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Island Pharisees, 1904",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Silver Box, 1906 (his first play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Country House, 1907",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Commentary, 1908",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Fraternity, 1909",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Justification for the Censorship of Plays, 1909",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Strife, 1909 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Joy, 1909 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Justice, 1910 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Motley, 1910",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Spirit of Punishment, 1910",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Horses in Mines, 1910",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Patrician, 1911",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Little Dream, 1911",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Pigeon, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Eldest Son, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Quality, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Moods, Songs, and Doggerels, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "For Love of Beasts, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Inn of Tranquillity, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Addresses in America, 1912",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Dark Flower, 1913",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Fugitive, 1913",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Mob, 1914",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Freelands, 1915",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Little Man, 1915",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Bit o' Love, 1915",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Sheaf, 1916",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Beyond, 1917",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Five Tales, 1918 (Contents: "The First and Last," "A Stoic," "The Apple Tree," "The Juryman," and "Indian Summer of a Forsyte" (the first interlude of The Forsyte Saga)',
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Saint's Progress, 1919",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Foundations, 1920",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Skin Game, 1920 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Family Man, 1922",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Loyalties, 1922 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Windows, 1922",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Captures, 1923",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Abracadabra, 1924",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forest, 1924",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Old English, 1924",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Show, 1925",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Escape, 1926 (a play)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Verses New and Old, 1926",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Castles in Spain, 1927",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Manaton Edition, 1923–26 (collection, 30 vols.)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Exiled, 1929",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Roof, 1929",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Two Essays on Conrad, 1930",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Soames and the Flag, 1930",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Creation of Character in Literature, 1931 (The Romanes Lecture for 1931).",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Forty Poems, 1932",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Autobiographical Letters of Galsworthy: A Correspondence with Frank Harris, 1933",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grove Edition, 1927–34 (collection, 27 Vols.)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Collected Poems, 1934",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Punch and Go, 1935",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Life and Letters, 1935",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Winter Garden, 1935",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Forsytes, Pendyces and Others, 1935",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Selected Short Stories, 1935",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Glimpses and Reflections, 1937",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Galsworthy's Letters to Leon Lion, 1968",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Letters from John Galsworthy 1900–1932, 1970",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "^ Oxford University Calendar 1895, Oxford: Clarendon Press, 1895, 262",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forsyte Saga (1906–21, 1922)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Silver Box (1906)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Strife (1909)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Justice (1910)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Apple Tree (1916)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The First and the Last (1919)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Skin Game (1920)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Loyalties (1922)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Escape (1926)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "That Forsyte Woman (1949)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forsyte Saga (1967)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forsyte Saga (2002)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forsyte Saga: To Let (2003)",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "1939—Of Mice and Men—directed by Lewis Milestone, featuring Burgess Meredith, Lon Chaney, Jr., and Betty Field",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "1949—The Red Pony—directed by Lewis Milestone, featuring Myrna Loy, Robert Mitchum, and Louis Calhern",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "1992—Of Mice and Men—directed by Gary Sinise and starring John Malkovich and Gary Sinise",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "^ \"1939 Book Awards Given by Critics: Elgin Groseclose's 'Ararat' is Picked as Work Which Failed to Get Due Recognition\", The New York Times, February 14, 1940, p. 25. ProQuest Historical Newspapers The New York Times (1851–2007).",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "DeMott, Robert, ed. John Steinbeck, Novels 1942–1952 (Library of America, 2002) ISBN&#160;978-1-931082-07-5",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Davis, Robert C. The Grapes of Wrath: A Collection of Critical Essays. Englewood Cliffs, NJ: Prentice-Hall, 1982. PS3537 .T3234 G734",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "French, Warren. John Steinbeck's Fiction Revisited. NY: Twayne, 1994 ISBN&#160;0-8057-4017-1.",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Hughes, R. S. John Steinbeck: A Study of the Short Fiction. R.S. Hughes. Boston&#160;: Twayne, 1989. ISBN&#160;0-8057-8302-4.",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Meyer, Michael J. The Hayashi Steinbeck Bibliography, 1982–1996. Lanham, MD: Scarecrow, 1998 ISBN&#160;0-8108-3482-0.",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Heavilin, Barbara A. John Steinbeck's The Grapes of Wrath: A Reference Guide. Westport, CT: Greenwood, 2002 ISBN&#160;0-313-31837-9.",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Li, Luchen. ed. John Steinbeck: A Documentary Volume. Detroit: Gale, 2005 ISBN&#160;0-7876-8127-X.",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Steinbeck, John Steinbeck IV and Nancy (2001). The Other Side of Eden: Life with John Steinbeck. Prometheus Books. ISBN&#160;1-57392-858-5",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Cup of Gold (1929)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Red Pony (1933)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "To a God Unknown (1933)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Tortilla Flat (1935)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "In Dubious Battle (1936)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1937)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (1939)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Moon Is Down (1942)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Cannery Row (1945)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Wayward Bus (1947)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Pearl (1947)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Burning Bright (1950)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "East of Eden (1952)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Sweet Thursday (1954)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Short Reign of Pippin IV: A Fabrication (1957)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Winter of Our Discontent (1961)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Acts of King Arthur and His Noble Knights (1976)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Pastures of Heaven (1932)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Long Valley (1938)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Forgotten Village (1941)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Pearl (1947)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Red Pony (1949)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Viva Zapata! (1952)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1937 play)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1939 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1969 opera)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1992 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Best Laid Plans (2012 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (1940 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (1988 play)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (2007 opera)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Red Pony (1949 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Red Pony (1949 film score)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Red Pony (1973 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Tortilla Flat (1942 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Moon Is Down (1943 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "La perla (The Pearl) (1947 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "East of Eden (1955 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Wayward Bus (1957 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "East of Eden (1981 miniseries)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Cannery Row (1982 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Winter of Our Discontent (1983 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "In Dubious Battle (2016 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Sea of Cortez: A Leisurely Journal of Travel and Research (1941)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Bombs Away: The Story of a Bomber Team (1942)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Russian Journal (1948)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Log from the Sea of Cortez (1951)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Once There Was a War (1958)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Travels with Charley (1962)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "America and Americans (1966)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Journal of a Novel: The East of Eden Letters (1969)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "His Family  by Ernest Poole (1918)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Magnificent Ambersons by Booth Tarkington (1919)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Age of Innocence by Edith Wharton (1921)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Alice Adams by Booth Tarkington (1922)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "One of Ours by Willa Cather (1923)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Able McLaughlins by Margaret Wilson (1924)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "So Big by Edna Ferber (1925)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Arrowsmith by Sinclair Lewis (declined) (1926)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Early Autumn by Louis Bromfield (1927)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Bridge of San Luis Rey by Thornton Wilder (1928)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Scarlet Sister Mary by Julia Peterkin (1929)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Laughing Boy by Oliver La Farge (1930)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Years of Grace by Margaret Ayer Barnes (1931)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Good Earth by Pearl S. Buck (1932)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Store by Thomas Sigismund Stribling (1933)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Lamb in His Bosom by Caroline Pafford Miller (1934)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Now in November by Josephine Winslow Johnson (1935)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Honey in the Horn by Harold L. Davis (1936)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Gone with the Wind by Margaret Mitchell (1937)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Late George Apley by John Phillips Marquand (1938)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Yearling by Marjorie Kinnan Rawlings (1939)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath by John Steinbeck (1940)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "In This Our Life by Ellen Glasgow (1942)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Dragon's Teeth by Upton Sinclair (1943)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Journey in the Dark by Martin Flavin (1944)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Bell for Adano by John Hersey (1945)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "All the King's Men by Robert Penn Warren (1947)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Tales of the South Pacific by James A. Michener (1948)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Guard of Honor by James Gould Cozzens (1949)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Way West by A. B. Guthrie Jr. (1950)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Town by Conrad Richter (1951)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Caine Mutiny by Herman Wouk (1952)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Old Man and the Sea by Ernest Hemingway (1953)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Fable by William Faulkner (1955)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Andersonville by MacKinlay Kantor (1956)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Death in the Family by James Agee (1958)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Advise and Consent by Allen Drury (1960)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "To Kill a Mockingbird by Harper Lee (1961)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Edge of Sadness by Edwin O'Connor (1962)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Reivers by William Faulkner (1963)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Keepers of the House by Shirley Ann Grau (1965)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Fixer by Bernard Malamud (1967)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Confessions of Nat Turner by William Styron (1968)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "House Made of Dawn by N. Scott Momaday (1969)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Collected Stories of Jean Stafford by Jean Stafford (1970)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Angle of Repose by Wallace Stegner (1972)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Optimist's Daughter by Eudora Welty (1973)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Killer Angels by Michael Shaara (1975)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Humboldt's Gift by Saul Bellow (1976)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Elbow Room by James Alan McPherson (1978)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Stories of John Cheever by John Cheever (1979)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Executioner's Song by Norman Mailer (1980)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Confederacy of Dunces by John Kennedy Toole (1981)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Rabbit Is Rich by John Updike (1982)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Color Purple by Alice Walker (1983)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Ironweed by William Kennedy (1984)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Foreign Affairs by Alison Lurie (1985)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Lonesome Dove by Larry McMurtry (1986)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Summons to Memphis by Peter Taylor (1987)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Beloved by Toni Morrison (1988)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Breathing Lessons by Anne Tyler (1989)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Rabbit at Rest by John Updike (1991)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Thousand Acres by Jane Smiley (1992)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Good Scent from a Strange Mountain by Robert Olen Butler (1993)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Shipping News by E. Annie Proulx (1994)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Stone Diaries by Carol Shields (1995)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Independence Day by Richard Ford (1996)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "American Pastoral by Philip Roth (1998)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Hours by Michael Cunningham (1999)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Interpreter of Maladies by Jhumpa Lahiri (2000)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Empire Falls by Richard Russo (2002)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Middlesex by Jeffrey Eugenides (2003)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Known World  by Edward P. Jones (2004)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Gilead by Marilynne Robinson (2005)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "March by Geraldine Brooks (2006)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Road by Cormac McCarthy (2007)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Olive Kitteridge by Elizabeth Strout (2009)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Tinkers by Paul Harding (2010)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "A Visit from the Goon Squad by Jennifer Egan (2011)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Orphan Master's Son by Adam Johnson (2013)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Goldfinch by Donna Tartt (2014)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "All the Light We Cannot See by Anthony Doerr (2015)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Sympathizer by Viet Thanh Nguyen (2016)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Underground Railroad by Colson Whitehead (2017)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Less by Andrew Sean Greer (2018)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (1940 film)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (1988 play)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "The Grapes of Wrath (2007 opera)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1939)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1992)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Best Laid Plans (2012)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1937 play)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Of Mice and Men (1969 opera)",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Éloges (1911, transl. Eugène Jolas in 1928, Louise Varèse in 1944, Eleanor Clark and Roger Little in 1965, King Bosley in 1970)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Anabase (1924, transl. T.S. Eliot in 1930, Roger Little in 1970)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Exil (1942, transl. Denis Devlin, 1949)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Pluies (1943, transl. Denis Devlin in 1944)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Poème à l'étrangère (1943, transl. Denis Devlin in 1946)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Neiges (1944, transl. Denis Devlin in 1945, Walter J. Strachan in 1947)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Vents (1946, transl. Hugh Chisholm in 1953)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Amers (1957, transl. Wallace Fowlie in 1958, extracts by George Huppert in 1956, Samuel E. Morison in 1964)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Chronique (1960, transl. Robert Fitzgerald in 1961)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Poésie (1961, transl. W. H. Auden in 1961)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Oiseaux (1963, transl. Wallace Fowlie in 1963, Robert Fitzgerald in 1966, Roger Little in 1967, Derek Mahon in 2002)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Pour Dante (1965, transl. Robert Fitzgerald in 1966)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Chanté par celle qui fut là (1969, transl. Richard Howard in 1970)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Chant pour un équinoxe (1971)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Nocturne (1973)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Sécheresse (1974)",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Collected Poems (1971) Bollingen Series, Princeton University Press.",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Valery Larbaud, préface à Anabasis, translated by Jacques Le Clerq, in Anabasis, New York, Harcourt, Brace and C°, 1949",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Amos Wilder, "Nature and the immaculate world in Saint-John Perse", in Modern Poetry and the Christian tradition, New York, 1952',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Paul Claudel, "A Poem by St.-John Perse", translation by Hugh Chisholm, in Winds, New York, Pantheon Books, Bollingen Series, no. 34, 1953.',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      '"Tribute to Saint-John Perse", The Berkeley Review (Arthur J. Knodel, René Girard, Georges Huppert), vol. I, no. 1, Berkeley, 1956',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Archibald MacLeish, "Saint-John Perse. The Living Spring", in A continuing journey. Essays and Addresses, Boston, 1957',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Wallace Fowlie, "Saint-John Perse", in A Guide to Contemporary french Literature, from Valéry to Sartre, New York, 1957',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Conrad Aiken, A Reviewer's A.B.C., Collected criticism from 1916, New York, 1958",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Charles Guenther, "Prince among the Prophets", Poetry, Chicago, vol. XCIII, no. 5, 1959',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Joseph Henry McMahon, A Bibliography of works by and about Saint-John Perse, Stanford University, 1959",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Stanley Burnshaw, "Saint-John Perse", in The Poem Itself, New York, 1960',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Bernard Weinberg, The Limits of Symbolism. Studies of Five modern French Poets. Baudelaire, Rimbaud, Mallarmé, Valéry, Saint-John Perse, Manchester, 1961",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Léon-S. Roudiez, "The Epochal Poetry of Saint-John Perse", Columbia University Forum, New York, vol. IV, 1961',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Eugenia Maria Arsenault, Color imagery in the Vents of Saint-John Perse, Catholic University of America, Washington, 1963",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Eugenia Vassylkivsky, The Main Themes of Saint-John Perse, Columbia University, 1964",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Arthur J. Knodel, Saint-John Perse. A Study of his Poetry, Edimburg, 1966",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'R. W. Baldner, "Saint-John Perse as Poet Prophet" in Proceedings of the Pacific Northwest Conference on Foreign Languages, vol. XVII, no. 22, 1966',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Roger Little, Word Index of the Complete Poetry and Prose of Saint-John Perse, Durham, 1966 and 1967",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "M. Owen de Jaham, An Introduction to Saint-John Perse, University of South Western Louisiana, 1967",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Kathleen Raine, "Saint-John Perse, Poet of the Marvellous", Encounter, vol. IV, no. 29, October 1967; idem in Defending Ancient Springs, Oxford, 1968',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Charles Delamori, "The Love and aggression of Saint-John Perse\'s Pluies", Yale French Studies, 1970',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Richar O. Abel, The Relationship between the Poetry of T. S. Eliot and Saint-John Perse, University of Southern California, 1970",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Roger Little, Saint-John Perse. A Bibliography for Students of His Poetry, London, 1971",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Ruth N. Horry, Paul Claudel and Saint-John Perse. Parallels and Contrasts, University of North Carolina Press, Chapel Hill, 1971",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Pierre Emmanuel, Praise and Presence, with a Bibliography, Washington, 1971",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Candace Uter De Russy, Saint-John Perse's Chronique: a study of Kronos and other themes through imagery, Tulane University, 1971",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Marc Goodhart, Poet and Poem in Exile, University of Colorado, 1971",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "René Galand, Saint-John Perse, New York, 1972",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Richard Ruland, America as metaphor in modern French Letters. Celine, Julien Green and Saint-John Perse, New York, 1972",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Roger Little, Saint-John Perse, University of London, 1973",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Carol Nolan Rigolot, The Dialectics of Poetry: Saint-John Perse, University of Michigan, 1973",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Richard-Allen Laden, Saint-John Perse's Vents: From Theme to Poetry, Yale University, 1974",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Elizabeth Jackson, Worlds Apart Structural Parallels in the Poetry of Paul Valéry, Saint-John Perse, Benjamin Perret and René Char, The Hague, 1976",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Arthur J. Knodel, Saint-John Perse: Lettres, Princeton, 1979",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Edith Jonssen-Devillers, Cosmos and the Sacred in the poetics of Octavio Paz and Saint-John Perse, San Diego, University of California, 1976",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Elizabeth Jennings, "Saint-John Perse: the worldly seer", in Seven Men of Vision: an appreciation, London, 1976',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Roger Little, "The World and the Word in Saint-John Perse", in Sensibility and Creation: Essays in XXth Century French Poetry, London and New York, 1977',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Roger Little, "Claudel and Saint-John Perse. The Convert and the Unconvertible", Claudel Studies, VI, 1979',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'William Calin, "Saint-John Perse", in A Muse for heroes: Nine Centuries of the Epic in France, University of Toronto Press, 1983',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Steven Winspur, "The Poetic Signifiance of the Thing-in-itself", Sub-stance, no. 41, 1983',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Peter Fell, "A Critical Study of Saint-John Perse\'s Chronique"  . MA dissertation, University of Manchester, 1983',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Saint-John Perse: Documentary Exhibition and Works on the Poem Amers, Washington, 1984–1985",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Erika Ostrovsky, Under the Sign of Ambiguity: Saint-John Perse/Alexis Leger, New York, 1985",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Steven Winspur, Saint-John Perse and the Imaginary Reader, Geneva, 1988",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Peter Baker, "Perse on Poetry", The Connecticut Review, Willimantic, XI, no. 1, 1988',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Peter Baker, "Saint-John Perse, Alexis Leger, 1960", The Nobel Prize Winners: Literature, April 1988',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Erika Ostrovsky, "Saint-John Perse", The Twentieth Century, New York, 1990',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Luigi Fiorenzato, Anabasis/Anabase: T. S. Eliot translates Saint-John Perse, Padova, 1991–1992",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Peter Baker, "Metric, Naming and Exile: Perse, Pound, Genet", in The Scope of Words in Honor to Albert S. Cook, New York, 1991',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Peter Baker, Obdurate Brilliance: Exteriority and the Modern Long Poem, University of Florida Press, 1991",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Josef Krause, "The Two Axes of Saint-John Perse\'s Imagery", Studi Francesi, Torino, XXXVI, no. 106, 1992',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Carol Rigolot, \"Ancestors, Mentors and 'Grands Aînés': Saint-John Perse's Chronique\", Literary Generations, Lexington, 1992",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Richard L. Sterling, The Prose Works of Saint-John Perse. Towards an Understanding of His Poetry, New York, 1994",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Richard A. York, "Saint-John Perse, the diplomat", Claudel Studies, XXIII, 1–2, 1996',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Judith Urian, The Biblical context in Saint-John Perse's work, Hebrew University of Jerusalem, 1997",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Mary Gallagher, "Seminal Praise: The Poetry of Saint-John Perse", in An Introduction to Caribbean Francophone writing, Oxford, 1999',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Carol Rigolot, "Saint-John Perse\'s Oiseaux: from Audubon to Braque and beyond", in Resonant Themes: literature, history and the arts in XIXth – and XXth – century Europe, Chapel Hill, North Carolina, 1999',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Judith Urian, "Delicious abyss: the biblical darkness in the poetry of Saint-John Perse", Comparative literature studies, XXXVI, no. 3, 1999',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Jeffrey Mehlman, Émigré New York. French Intellectuals in Wartime, Manhattan, 1940&#8211;1944, Baltimore and London, 2000",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Zeyma Kamalick, In Defense of Poetry: T. S. Eliot's translation ofAnabase by Saint-John Perse, Princeton, 2000",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Emmanuelle Hériard Dubreuil, Une certaine idée de la France: Alexis Leger's views during the occupation of France June 1940 – August 1944, London School of Economics, 2001",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Pierre Lastenet, Saint-John Perse and the Sacred, University of London, 2001",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Marie-Noëlle Little, The Poet and the Diplomat [Correspondence Saint-John Perse/Dag Hammarskjöld], Syracuse University Press, 2001",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Marie-Noëlle Little, "Travellers in two Worlds: Dag Hammarskjöld and Alexis Leger", in Development Dialogue, Uppsala, 2001',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Carol Rigolot, Forged Genealogies: Saint-John Perse's Conversations with Culture, The University of North Carolina Press, 2002",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Mary Gallagher, \"Re-membering Caribbean childhoods, Saint-John Perse's Éloges and Patrick Chamoiseau's Antan d'enfance\", in The Francophone Caribbean today-literature, language, culture, The University of West Indies Press, 2003",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Colette Camelin, "Hermes and Aphrodite in Saint-John Perse\'s Winds and Seemarks", in Hermes and Aphrodite Encounters, Birmingham, 2004',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Henriette Levillain, Saint-John Perse, Ministère des Affaires étrangères, Paris, 2005",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Joseph Acquisto, "The Lyric of Narrative: Exile, Poetry and Story in Saint-John Perse and Elisabeth Bishop", Orbis Litterarum, no. 5, 2005',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Xue Die, "Saint-John Perse\'s Palm Trees", American Letters and Commentary, no. 17, 2005',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Valérie Loichot, \"Saint-John Perse's Imagined Shelter: J'habiterai mon nom, in Discursive Geographies, Writing Space and Place in French, Amsterdam, 2005",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Carol Rigolot, "Saint-John Perse", in Transatlantic relations, France and the Americas, Culture, Politics, History, Oxford and Santa Barbara, 2005',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "Valérie Loichot, Orphan Narratives: The Postplantation Literature of Faulkner, Glissant, Morrison and Saint-John Perse, University of Virginia Press, 2007",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Harris Feinsod, "Reconsidering the \'Spiritual Economy\': Saint-John Perse, his translators and the limits of internationalism", "Benjamin, Poetry and Criticism", Telos, New York, no. 38, 2007',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Peter Poiana, "The order of Nemesis in Saint-John Perse\'s Vents", Neophilologus, vol. 91, no. 1, 2007',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      'Jeffrey Meyers, "The Literary Politics of the Nobel Prize", Antioch Review, vol. 65, no. 2, 2007',
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO booksNobel VALUES (?,?)", [
      "^ May, Ernest Strange Victory, New York: Hill &amp; Wang, 2000, p. 150.",
      "Saint-John_Perse"
    ]);
  }
}
