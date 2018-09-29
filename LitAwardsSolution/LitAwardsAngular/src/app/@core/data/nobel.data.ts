export class NobelData {
  public RunSqlNobel(db: any) {

    try{
    this.CreateTables(db);
    this.RunLaureates(db);
    this.RunBooks(db);
    }
    catch(e){
      console.log('error');
    }
  }
  private CreateTables(db: any) {
    db.run(
      "CREATE TABLE tableAuthors  (id INTEGER PRIMARY KEY AUTOINCREMENT ,Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name);"
    );
    db.run("CREATE TABLE booksName (bookName,name);");
  }
    private RunLaureates(db: any) {
    

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1901",
      "Sully Prudhomme",
      "French",
      '"in special recognition of his poetic composition, which gives evidence of lofty idealism, artistic perfection and a rare combination of the qualities of both heart and intellect"&#91;12&#93;',
      "poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sully-Prudhomme.jpg/75px-Sully-Prudhomme.jpg",
      "https://en.wikipedia.org/wiki/Sully_Prudhomme",
      "Sully_Prudhomme"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1902",
      "Theodor Mommsen",
      "German",
      '"the greatest living master of the art of historical writing, with special reference to his monumental work, A History of Rome"&#91;13&#93;',
      "history, law",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/T-mommsen-2.jpg/75px-T-mommsen-2.jpg",
      "https://en.wikipedia.org/wiki/Theodor_Mommsen",
      "Theodor_Mommsen"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1903",
      "Bjørnstjerne Bjørnson",
      "Norwegian",
      '"as a tribute to his noble, magnificent and versatile poetry, which has always been distinguished by both the freshness of its inspiration and the rare purity of its spirit"&#91;14&#93;',
      "poetry, novel, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Portrett_av_Bj%C3%B8rnstjerne_Bj%C3%B8rnson%2C_1909_-_no-nb_digifoto_20150129_00043_bldsa_BB0791.jpg/75px-Portrett_av_Bj%C3%B8rnstjerne_Bj%C3%B8rnson%2C_1909_-_no-nb_digifoto_20150129_00043_bldsa_BB0791.jpg",
      "https://en.wikipedia.org/wiki/Bj%C3%B8rnstjerne_Bj%C3%B8rnson",
      "Bj%C3%B8rnstjerne_Bj%C3%B8rnson"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1904",
      "Frédéric Mistral",
      "Provençal",
      '"in recognition of the fresh originality and true inspiration of his poetic production, which faithfully reflects the natural scenery and native spirit of his people, and, in addition, his significant work as a Provençal philologist"&#91;15&#93;',
      "poetry, philology",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/97/Frederic_Mistral_portrait_photo.jpg/75px-Frederic_Mistral_portrait_photo.jpg",
      "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Mistral",
      "Fr%C3%A9d%C3%A9ric_Mistral"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "",
    //   "&#160;Spain",
    //   '"in recognition of the numerous and brilliant compositions which, in an individual and original manner, have revived the great traditions of the Spanish drama"&#91;15&#93;',
    //   "drama",
    //   '<a href="/wiki/File:Jos%C3%A9_Echegaray_y_Eizaguirre.jpg" class="image"><img alt="José Echegaray y Eizaguirre.jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jos%C3%A9_Echegaray_y_Eizaguirre.jpg/75px-Jos%C3%A9_Echegaray_y_Eizaguirre.jpg" width="75" height="105" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jos%C3%A9_Echegaray_y_Eizaguirre.jpg/113px-Jos%C3%A9_Echegaray_y_Eizaguirre.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jos%C3%A9_Echegaray_y_Eizaguirre.jpg/150px-Jos%C3%A9_Echegaray_y_Eizaguirre.jpg 2x" data-file-width="162" data-file-height="227"></a>',
    //   "//upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg/23px-Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg.png",
    //   "https://en.wikipedia.org/wiki/Spanish_language",
    //   "Spanish_language"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1905",
      "Henryk Sienkiewicz",
      "Polish",
      '"because of his outstanding merits as an epic writer"&#91;16&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Henryk_Sienkiewicz_02.jpg/75px-Henryk_Sienkiewicz_02.jpg",
      "https://en.wikipedia.org/wiki/Henryk_Sienkiewicz",
      "Henryk_Sienkiewicz"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1906",
      "Giosuè Carducci",
      "Italian",
      '"not only in consideration of his deep learning and critical research, but above all as a tribute to the creative energy, freshness of style, and lyrical force which characterize his poetic masterpieces"&#91;17&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Carducci.jpg/75px-Carducci.jpg",
      "https://en.wikipedia.org/wiki/Giosu%C3%A8_Carducci",
      "Giosu%C3%A8_Carducci"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1907",
      "Rudyard Kipling",
      "English",
      '"in consideration of the power of observation, originality of imagination, virility of ideas and remarkable talent for narration that characterize the creations of this world-famous author"&#91;18&#93;',
      "novel, short story, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kiplingcropped.jpg/75px-Kiplingcropped.jpg",
      "https://en.wikipedia.org/wiki/Rudyard_Kipling",
      "Rudyard_Kipling"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1908",
      "Rudolf Christoph Eucken",
      "German",
      '"in recognition of his earnest search for truth, his penetrating power of thought, his wide range of vision, and the warmth and strength in presentation with which in his numerous works he has vindicated and developed an idealistic philosophy of life"&#91;19&#93;',
      "philosophy",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rudolf_Christoph_Eucken.jpg/75px-Rudolf_Christoph_Eucken.jpg",
      "https://en.wikipedia.org/wiki/Rudolf_Christoph_Eucken",
      "Rudolf_Christoph_Eucken"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1909",
      "Selma Lagerlöf",
      "Swedish",
      '"in appreciation of the lofty idealism, vivid imagination and spiritual perception that characterize her writings"&#91;20&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Selma_Lagerl%C3%B6f.jpg/75px-Selma_Lagerl%C3%B6f.jpg",
      "https://en.wikipedia.org/wiki/Selma_Lagerl%C3%B6f",
      "Selma_Lagerl%C3%B6f"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1910",
      "Paul von Heyse",
      "German",
      '"as a tribute to the consummate artistry, permeated with idealism, which he has demonstrated during his long productive career as a lyric poet, dramatist, novelist and writer of world-renowned short stories"&#91;21&#93;',
      "poetry, drama, novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Die_Gartenlaube_%281867%29_b_565.jpg/75px-Die_Gartenlaube_%281867%29_b_565.jpg",
      "https://en.wikipedia.org/wiki/Paul_Heyse",
      "Paul_Heyse"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1911",
      "Maurice Maeterlinck",
      "French",
      '"in appreciation of his many-sided literary activities, and especially of his dramatic works, which are distinguished by a wealth of imagination and by a poetic fancy, which reveals, sometimes in the guise of a fairy tale, a deep inspiration, while in a mysterious way they appeal to the readers\' own feelings and stimulate their imaginations"&#91;22&#93;',
      "drama, poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Maurice_Maeterlinck.jpg/75px-Maurice_Maeterlinck.jpg",
      "https://en.wikipedia.org/wiki/Maurice_Maeterlinck",
      "Maurice_Maeterlinck"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1912",
      "Gerhart Hauptmann",
      "German",
      '"primarily in recognition of his fruitful, varied and outstanding production in the realm of dramatic art"&#91;23&#93;',
      "drama, novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gerhart_Hauptmann_nobel.jpg/75px-Gerhart_Hauptmann_nobel.jpg",
      "https://en.wikipedia.org/wiki/Gerhart_Hauptmann",
      "Gerhart_Hauptmann"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1913",
      "Rabindranath Tagore",
      "Bengali",
      '"because of his profoundly sensitive, fresh and beautiful verse, by which, with consummate skill, he has made his poetic thought, expressed in his own English words, a part of the literature of the West"&#91;24&#93;',
      "poetry, novel, drama, short story, music",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rabindranath_Tagore_in_1909.jpg/75px-Rabindranath_Tagore_in_1909.jpg",
      "https://en.wikipedia.org/wiki/Rabindranath_Tagore",
      "Rabindranath_Tagore"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "1914",
    //   "1914",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "https://en.wikipedia.org",
    //   "en.wikipedia.org"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1915",
      "Romain Rolland",
      "French",
      '"as a tribute to the lofty idealism of his literary production and to the sympathy and love of truth with which he has described different types of human beings"&#91;25&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Romain_Rolland_1915.jpg/75px-Romain_Rolland_1915.jpg",
      "https://en.wikipedia.org/wiki/Romain_Rolland",
      "Romain_Rolland"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1916",
      "Verner von Heidenstam",
      "Swedish",
      '"in recognition of his significance as the leading representative of a new era in our literature"&#91;26&#93;',
      "poetry, novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Verner_von_Heidenstam_in_1915.jpg/75px-Verner_von_Heidenstam_in_1915.jpg",
      "https://en.wikipedia.org/wiki/Verner_von_Heidenstam",
      "Verner_von_Heidenstam"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1917",
      "Karl Adolph Gjellerup",
      "Danish",
      '"for his varied and rich poetry, which is inspired by lofty ideals"&#91;27&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Karl_Gjellerup.jpg/75px-Karl_Gjellerup.jpg",
      "https://en.wikipedia.org/wiki/Karl_Adolph_Gjellerup",
      "Karl_Adolph_Gjellerup"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "",
    //   "&#160;Denmark",
    //   '"for his authentic descriptions of present-day life in Denmark"&#91;27&#93;',
    //   "novel",
    //   '<a href="/wiki/File:Henrik_Pontoppidan_1917.jpg" class="image"><img alt="Henrik Pontoppidan 1917.jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Henrik_Pontoppidan_1917.jpg/75px-Henrik_Pontoppidan_1917.jpg" width="75" height="106" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Henrik_Pontoppidan_1917.jpg/113px-Henrik_Pontoppidan_1917.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/42/Henrik_Pontoppidan_1917.jpg/150px-Henrik_Pontoppidan_1917.jpg 2x" data-file-width="280" data-file-height="396"></a>',
    //   "//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
    //   "https://en.wikipedia.org/wiki/Danish_language",
    //   "Danish_language"
    // ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "1918",
    //   "1918",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "https://en.wikipedia.org",
    //   "en.wikipedia.org"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1919",
      "Carl Spitteler",
      "German",
      '"in special appreciation of his epic, Olympian Spring"&#91;28&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Carl_Spitteler_1919.jpg/75px-Carl_Spitteler_1919.jpg",
      "https://en.wikipedia.org/wiki/Carl_Spitteler",
      "Carl_Spitteler"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1920",
      "Knut Hamsun",
      "Norwegian",
      '"for his monumental work, Growth of the Soil"&#91;29&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Knut_Hamsun.jpeg/75px-Knut_Hamsun.jpeg",
      "https://en.wikipedia.org/wiki/Knut_Hamsun",
      "Knut_Hamsun"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1921",
      "Anatole France",
      "French",
      '"in recognition of his brilliant literary achievements, characterized as they are by a nobility of style, a profound human sympathy, grace, and a true Gallic temperament"&#91;30&#93;',
      "novel, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Anatole_France_1921.jpg/75px-Anatole_France_1921.jpg",
      "https://en.wikipedia.org/wiki/Anatole_France",
      "Anatole_France"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1922",
      "Jacinto Benavente",
      "Spanish",
      '"for the happy manner in which he has continued the illustrious traditions of the Spanish drama"&#91;31&#93;',
      "drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Jacinto_Benavente_y_Martinez.jpg/75px-Jacinto_Benavente_y_Martinez.jpg",
      "https://en.wikipedia.org/wiki/Jacinto_Benavente",
      "Jacinto_Benavente"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1923",
      "William Butler Yeats",
      "English",
      '"for his always inspired poetry, which in a highly artistic form gives expression to the spirit of a whole nation"&#91;32&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/75px-William_Butler_Yeats_by_George_Charles_Beresford.jpg",
      "https://en.wikipedia.org/wiki/W._B._Yeats",
      "W._B._Yeats"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1924",
      "Władysław Reymont",
      "Polish",
      '"for his great national epic, The Peasants"&#91;33&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/W%C5%82adys%C5%82aw_Reymont.jpg/75px-W%C5%82adys%C5%82aw_Reymont.jpg",
      "https://en.wikipedia.org/wiki/W%C5%82adys%C5%82aw_Reymont",
      "W%C5%82adys%C5%82aw_Reymont"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1925",
      "George Bernard Shaw",
      "English",
      '"for his work which is marked by both idealism and humanity, its stimulating satire often being infused with a singular poetic beauty"&#91;35&#93;',
      "drama, literary criticism",
      "//upload.wikimedia.org/wikipedia/en/thumb/3/30/Bernard-Shaw-ILN-1911-original.jpg/75px-Bernard-Shaw-ILN-1911-original.jpg",
      "https://en.wikipedia.org/wiki/George_Bernard_Shaw",
      "George_Bernard_Shaw"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1926",
      "Grazia Deledda",
      "Italian",
      '"for her idealistically inspired writings, which with plastic clarity picture the life on her native island and with depth and sympathy deal with human problems in general"&#91;36&#93;',
      "poetry, novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Grazia_Deledda_1926.jpg/75px-Grazia_Deledda_1926.jpg",
      "https://en.wikipedia.org/wiki/Grazia_Deledda",
      "Grazia_Deledda"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1927",
      "Henri Bergson",
      "French",
      '"in recognition of his rich and vitalizing ideas and the brilliant skill with which they have been presented"&#91;37&#93;',
      "philosophy",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bergson-Nobel-photo.jpg/75px-Bergson-Nobel-photo.jpg",
      "https://en.wikipedia.org/wiki/Henri_Bergson",
      "Henri_Bergson"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1928",
      "Sigrid Undset",
      "Norwegian",
      '"principally for her powerful descriptions of Northern life during the Middle Ages"&#91;38&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sigrid_Undset_crop.jpg/75px-Sigrid_Undset_crop.jpg",
      "https://en.wikipedia.org/wiki/Sigrid_Undset",
      "Sigrid_Undset"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1929",
      "Thomas Mann",
      "German",
      '"principally for his great novel, Buddenbrooks, which has won steadily increased recognition as one of the classic works of contemporary literature"&#91;39&#93;',
      "novel, short story, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thomas_Mann_1937.jpg/75px-Thomas_Mann_1937.jpg",
      "https://en.wikipedia.org/wiki/Thomas_Mann",
      "Thomas_Mann"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1930",
      "Sinclair Lewis",
      "English",
      '"for his vigorous and graphic art of description and his ability to create, with wit and humour, new types of characters"&#91;40&#93;',
      "novel, short story, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Sinclair_Lewis_1930.jpg/75px-Sinclair_Lewis_1930.jpg",
      "https://en.wikipedia.org/wiki/Sinclair_Lewis",
      "Sinclair_Lewis"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1931",
      "Erik Axel Karlfeldt",
      "Swedish",
      '"The poetry of Erik Axel Karlfeldt"&#91;41&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Erik_Axel_Karlfeldt.jpg/75px-Erik_Axel_Karlfeldt.jpg",
      "https://en.wikipedia.org/wiki/Erik_Axel_Karlfeldt",
      "Erik_Axel_Karlfeldt"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1932",
      "John Galsworthy",
      "English",
      '"for his distinguished art of narration, which takes its highest form in The Forsyte Saga"&#91;42&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/John_galsworthy.jpg/75px-John_galsworthy.jpg",
      "https://en.wikipedia.org/wiki/John_Galsworthy",
      "John_Galsworthy"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1933",
      "Ivan Bunin",
      "Russian",
      '"for the strict artistry with which he has carried on the classical Russian traditions in prose writing"&#91;43&#93;',
      "short story, poetry, novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ivan_Bunin_1933.jpg/75px-Ivan_Bunin_1933.jpg",
      "https://en.wikipedia.org/wiki/Ivan_Bunin",
      "Ivan_Bunin"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1934",
      "Luigi Pirandello",
      "Italian",
      '"for his bold and ingenious revival of dramatic and scenic art"&#91;44&#93;',
      "drama, novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Luigi_Pirandello_1932.jpg/75px-Luigi_Pirandello_1932.jpg",
      "https://en.wikipedia.org/wiki/Luigi_Pirandello",
      "Luigi_Pirandello"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "1935",
    //   "1935",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "https://en.wikipedia.org",
    //   "en.wikipedia.org"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1936",
      "Eugene O'Neill",
      "English",
      '"for the power, honesty and deep-felt emotions of his dramatic works, which embody an original concept of tragedy"&#91;45&#93;',
      "drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eugene_O%27Neill_1936.jpg/75px-Eugene_O%27Neill_1936.jpg",
      "https://en.wikipedia.org/wiki/Eugene_O%27Neill",
      "Eugene_O%27Neill"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1937",
      "Roger Martin du Gard",
      "French",
      '"for the artistic power and truth with which he has depicted human conflict as well as some fundamental aspects of contemporary life in his novel cycle Les Thibault"&#91;46&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Roger_Martin_du_Gard_1937.jpg/75px-Roger_Martin_du_Gard_1937.jpg",
      "https://en.wikipedia.org/wiki/Roger_Martin_du_Gard",
      "Roger_Martin_du_Gard"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1938",
      "Pearl S. Buck",
      "English",
      '"for her rich and truly epic descriptions of peasant life in China and for her biographical masterpieces"&#91;47&#93;',
      "novel, biography",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pearl_Buck_%28Nobel%29.jpg/75px-Pearl_Buck_%28Nobel%29.jpg",
      "https://en.wikipedia.org/wiki/Pearl_S._Buck",
      "Pearl_S._Buck"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1939",
      "Frans Eemil Sillanpää",
      "Finnish",
      '"for his deep understanding of his country\'s peasantry and the exquisite art with which he has portrayed their way of life and their relationship with Nature"&#91;48&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FransEemilSillanp%C3%A4%C3%A4.jpg/75px-FransEemilSillanp%C3%A4%C3%A4.jpg",
      "https://en.wikipedia.org/wiki/Frans_Eemil_Sillanp%C3%A4%C3%A4",
      "Frans_Eemil_Sillanp%C3%A4%C3%A4"
    ]);

    
    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1944",
      "Johannes Vilhelm Jensen",
      "Danish",
      '"for the rare strength and fertility of his poetic imagination with which is combined an intellectual curiosity of wide scope and a bold, freshly creative style"&#91;49&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Johannes_Vilhelm_Jensen_1944.jpg/75px-Johannes_Vilhelm_Jensen_1944.jpg",
      "https://en.wikipedia.org/wiki/Johannes_Vilhelm_Jensen",
      "Johannes_Vilhelm_Jensen"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1945",
      "Gabriela Mistral",
      "Spanish",
      '"for her lyric poetry, which inspired by powerful emotions, has made her name a symbol of the idealistic aspirations of the entire Latin American world"&#91;50&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gabriela_Mistral-01_cropped.jpg/75px-Gabriela_Mistral-01_cropped.jpg",
      "https://en.wikipedia.org/wiki/Gabriela_Mistral",
      "Gabriela_Mistral"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1946",
      "Hermann Hesse",
      "German",
      '"for his inspired writings, which while growing in boldness and penetration, exemplify the classical humanitarian ideals and high qualities of style"&#91;51&#93;',
      "novel, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hermann_Hesse_1946.jpg/75px-Hermann_Hesse_1946.jpg",
      "https://en.wikipedia.org/wiki/Hermann_Hesse",
      "Hermann_Hesse"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1947",
      "André Gide",
      "French",
      '"for his comprehensive and artistically significant writings, in which human problems and conditions have been presented with a fearless love of truth and keen psychological insight"&#91;52&#93;',
      "novel, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andr%C3%A9_Gide.jpg/75px-Andr%C3%A9_Gide.jpg",
      "https://en.wikipedia.org/wiki/Andr%C3%A9_Gide",
      "Andr%C3%A9_Gide"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1948",
      "T. S. Eliot",
      "English",
      '"for his outstanding, pioneer contribution to present-day poetry"&#91;53&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg/75px-Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg",
      "https://en.wikipedia.org/wiki/T._S._Eliot",
      "T._S._Eliot"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1949",
      "William Faulkner",
      "English",
      '"for his powerful and artistically unique contribution to the modern American novel"&#91;54&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Carl_Van_Vechten_-_William_Faulkner.jpg/75px-Carl_Van_Vechten_-_William_Faulkner.jpg",
      "https://en.wikipedia.org/wiki/William_Faulkner",
      "William_Faulkner"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1950",
      "Bertrand Russell",
      "English",
      '"in recognition of his varied and significant writings in which he champions humanitarian ideals and freedom of thought"&#91;55&#93;',
      "philosophy",
      "//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bertrand_Russell_transparent_bg.png/75px-Bertrand_Russell_transparent_bg.png",
      "https://en.wikipedia.org/wiki/Bertrand_Russell",
      "Bertrand_Russell"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1951",
      "Pär Lagerkvist",
      "Swedish",
      '"for the artistic vigour and true independence of mind with which he endeavours in his poetry to find answers to the eternal questions confronting mankind"&#91;56&#93;',
      "poetry, novel, short story, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lagerkvist.jpg/75px-Lagerkvist.jpg",
      "https://en.wikipedia.org/wiki/P%C3%A4r_Lagerkvist",
      "P%C3%A4r_Lagerkvist"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1952",
      "François Mauriac",
      "French",
      '"for the deep spiritual insight and the artistic intensity with which he has in his novels penetrated the drama of human life"&#91;57&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fran%C3%A7ois_Mauriac_%281932%29.jpg/75px-Fran%C3%A7ois_Mauriac_%281932%29.jpg",
      "https://en.wikipedia.org/wiki/Fran%C3%A7ois_Mauriac",
      "Fran%C3%A7ois_Mauriac"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1953",
      "Winston Churchill",
      "English",
      '"for his mastery of historical and biographical description as well as for brilliant oratory in defending exalted human values"&#91;58&#93;',
      "history, essay, memoirs",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Churchill_portrait_NYP_45063.jpg/75px-Churchill_portrait_NYP_45063.jpg",
      "https://en.wikipedia.org/wiki/Winston_Churchill",
      "Winston_Churchill"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1954",
      "Ernest Hemingway",
      "English",
      '"for his mastery of the art of narrative, most recently demonstrated in The Old Man and the Sea, and for the influence that he has exerted on contemporary style"&#91;59&#93;',
      "novel, short story, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/75px-ErnestHemingway.jpg",
      "https://en.wikipedia.org/wiki/Ernest_Hemingway",
      "Ernest_Hemingway"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1955",
      "Halldór Laxness",
      "Icelandic",
      '"for his vivid epic power, which has renewed the great narrative art of Iceland"&#91;60&#93;',
      "novel, short story, drama, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Halld%C3%B3r_Kiljan_Laxness_1955.jpg/75px-Halld%C3%B3r_Kiljan_Laxness_1955.jpg",
      "https://en.wikipedia.org/wiki/Halld%C3%B3r_Laxness",
      "Halld%C3%B3r_Laxness"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1956",
      "Juan Ramón Jiménez",
      "Spanish",
      '"for his lyrical poetry, which in Spanish language constitutes an example of high spirit and artistical purity"&#91;61&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/16/JRJimenez.JPG/75px-JRJimenez.JPG",
      "https://en.wikipedia.org/wiki/Juan_Ram%C3%B3n_Jim%C3%A9nez",
      "Juan_Ram%C3%B3n_Jim%C3%A9nez"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1957",
      "Albert Camus",
      "French",
      '"for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times"&#91;62&#93;',
      "novel, short story, drama, philosophy, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/75px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg",
      "https://en.wikipedia.org/wiki/Albert_Camus",
      "Albert_Camus"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1958",
      "Boris Pasternak",
      "Russian",
      '"for his important achievement both in contemporary lyrical poetry and in the field of the great Russian epic tradition"&#91;63&#93;',
      "novel, poetry, translation",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Boris_Pasternak_in_youth.jpg/75px-Boris_Pasternak_in_youth.jpg",
      "https://en.wikipedia.org/wiki/Boris_Pasternak",
      "Boris_Pasternak"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1959",
      "Salvatore Quasimodo",
      "Italian",
      '"for his lyrical poetry, which with classical fire expresses the tragic experience of life in our own times"&#91;64&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Salvatore_Quasimodo_1959.jpg/75px-Salvatore_Quasimodo_1959.jpg",
      "https://en.wikipedia.org/wiki/Salvatore_Quasimodo",
      "Salvatore_Quasimodo"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1960",
      "Saint-John Perse",
      "French",
      '"for the soaring flight and the evocative imagery of his poetry, which in a visionary fashion reflects the conditions of our time"&#91;65&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Saint-John_Perse_1960.jpg/75px-Saint-John_Perse_1960.jpg",
      "https://en.wikipedia.org/wiki/Saint-John_Perse",
      "Saint-John_Perse"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1961",
      "Ivo Andrić",
      "Serb",
      '"for the epic force with which he has traced themes and depicted human destinies drawn from the history of his country"&#91;66&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/7/75/S._Kragujevic%2C_Ivo_Andric%2C_1961.jpg/75px-S._Kragujevic%2C_Ivo_Andric%2C_1961.jpg",
      "https://en.wikipedia.org/wiki/Ivo_Andri%C4%87",
      "Ivo_Andri%C4%87"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1962",
      "John Steinbeck",
      "English",
      '"for his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception"&#91;67&#93;',
      "novel, short story, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/JohnSteinbeck_crop.JPG/75px-JohnSteinbeck_crop.JPG",
      "https://en.wikipedia.org/wiki/John_Steinbeck",
      "John_Steinbeck"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1963",
      "Giorgos Seferis",
      "Greek",
      '"for his eminent lyrical writing, inspired by a deep feeling for the Hellenic world of culture"&#91;68&#93;',
      "poetry, essay, memoirs",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Giorgos_Seferis_1963.jpg/75px-Giorgos_Seferis_1963.jpg",
      "https://en.wikipedia.org/wiki/Giorgos_Seferis",
      "Giorgos_Seferis"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1964",
      "Jean-Paul Sartre",
      "French",
      '"for his work, which rich in ideas and filled with the spirit of freedom and the quest for truth, has exerted a far-reaching influence on our age"&#91;69&#93;',
      "novel, philosophy, drama, literary criticism, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jean-Paul_Sartre_FP.JPG/75px-Jean-Paul_Sartre_FP.JPG",
      "https://en.wikipedia.org/wiki/Jean-Paul_Sartre",
      "Jean-Paul_Sartre"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1965",
      "Mikhail Sholokhov",
      "Russian",
      '"for the artistic power and integrity with which, in his epic of the Don, he has given expression to a historic phase in the life of the Russian people"&#91;70&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sholokhov-1938.jpg/75px-Sholokhov-1938.jpg",
      "https://en.wikipedia.org/wiki/Mikhail_Sholokhov",
      "Mikhail_Sholokhov"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1966",
      "Shmuel Yosef Agnon",
      "Hebrew",
      '"for his profoundly characteristic narrative art with motifs from the life of the Jewish people"&#91;71&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Agnon.jpg/75px-Agnon.jpg",
      "https://en.wikipedia.org/wiki/Shmuel_Yosef_Agnon",
      "Shmuel_Yosef_Agnon"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "",
    //   "&#160;Sweden(Born in Germany)",
    //   '"for her outstanding lyrical and dramatic writing, which interprets Israel\'s destiny with touching strength"&#91;71&#93;',
    //   "poetry, drama",
    //   '<a href="/wiki/File:Nelly_Sachs_1966.jpg" class="image"><img alt="Nelly Sachs 1966.jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelly_Sachs_1966.jpg/75px-Nelly_Sachs_1966.jpg" width="75" height="106" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelly_Sachs_1966.jpg/113px-Nelly_Sachs_1966.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelly_Sachs_1966.jpg/150px-Nelly_Sachs_1966.jpg 2x" data-file-width="280" data-file-height="396"></a>',
    //   "//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png",
    //   "https://en.wikipedia.org/wiki/German_language",
    //   "German_language"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1967",
      "Miguel Ángel Asturias",
      "Spanish",
      '"for his vivid literary achievement, deep-rooted in the national traits and traditions of Indian peoples of Latin America"&#91;72&#93;',
      "novel, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/31/MiguelAngelAsturias.JPG/75px-MiguelAngelAsturias.JPG",
      "https://en.wikipedia.org/wiki/Miguel_%C3%81ngel_Asturias",
      "Miguel_%C3%81ngel_Asturias"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1968",
      "Yasunari Kawabata",
      "Japanese",
      '"for his narrative mastery, which with great sensibility expresses the essence of the Japanese mind"&#91;73&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yasunari_Kawabata_1938.jpg/75px-Yasunari_Kawabata_1938.jpg",
      "https://en.wikipedia.org/wiki/Yasunari_Kawabata",
      "Yasunari_Kawabata"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1969",
      "Samuel Beckett",
      "English and French",
      '"for his writing, which - in new forms for the novel and drama - in the destitution of modern man acquires its elevation"&#91;74&#93;',
      "novel, drama, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Samuel_Beckett%2C_f11.jpg/75px-Samuel_Beckett%2C_f11.jpg",
      "https://en.wikipedia.org/wiki/Samuel_Beckett",
      "Samuel_Beckett"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1970",
      "Aleksandr Solzhenitsyn",
      "Russian",
      '"for the ethical force with which he has pursued the indispensable traditions of Russian literature"&#91;75&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Aleksandr_Solzhenitsyn_1974crop.jpg/75px-Aleksandr_Solzhenitsyn_1974crop.jpg",
      "https://en.wikipedia.org/wiki/Aleksandr_Solzhenitsyn",
      "Aleksandr_Solzhenitsyn"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1971",
      "Pablo Neruda",
      "Spanish",
      '"for a poetry that with the action of an elemental force brings alive a continent\'s destiny and dreams"&#91;76&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pablo_Neruda.jpg/75px-Pablo_Neruda.jpg",
      "https://en.wikipedia.org/wiki/Pablo_Neruda",
      "Pablo_Neruda"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1972",
      "Heinrich Böll",
      "German",
      '"for his writing, which through its combination of a broad perspective on his time and a sensitive skill in characterization has contributed to a renewal of German literature"&#91;77&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bundesarchiv_B_145_Bild-F062164-0004%2C_Bonn%2C_Heinrich_B%C3%B6ll.jpg/75px-Bundesarchiv_B_145_Bild-F062164-0004%2C_Bonn%2C_Heinrich_B%C3%B6ll.jpg",
      "https://en.wikipedia.org/wiki/Heinrich_B%C3%B6ll",
      "Heinrich_B%C3%B6ll"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1973",
      "Patrick White",
      "English",
      '"for an epic and psychological narrative art, which has introduced a new continent into literature"&#91;78&#93;',
      "novel, short story, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/20/Patrick_White_1973.jpg/75px-Patrick_White_1973.jpg",
      "https://en.wikipedia.org/wiki/Patrick_White",
      "Patrick_White"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1974",
      "Eyvind Johnson",
      "Swedish",
      '"for a narrative art, farseeing in lands and ages, in the service of freedom"&#91;79&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eyvind.JPG/75px-Eyvind.JPG",
      "https://en.wikipedia.org/wiki/Eyvind_Johnson",
      "Eyvind_Johnson"
    ]);

    // db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
    //   "",
    //   "&#160;Sweden",
    //   '"for writings that catch the dewdrop and reflect the cosmos"&#91;79&#93;',
    //   "poetry, novel, drama",
    //   '<a href="/wiki/File:Harry_Martinson.jpg" class="image"><img alt="Harry Martinson.jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Harry_Martinson.jpg/75px-Harry_Martinson.jpg" width="75" height="102" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Harry_Martinson.jpg/113px-Harry_Martinson.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Harry_Martinson.jpg/150px-Harry_Martinson.jpg 2x" data-file-width="350" data-file-height="474"></a>',
    //   "//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png",
    //   "https://en.wikipedia.org/wiki/Swedish_language",
    //   "Swedish_language"
    // ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1975",
      "Eugenio Montale",
      "Italian",
      '"for his distinctive poetry, which, with great artistic sensitivity, has interpreted human values under the sign of an outlook on life with no illusions"&#91;80&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Eugenio_Montale.jpg/75px-Eugenio_Montale.jpg",
      "https://en.wikipedia.org/wiki/Eugenio_Montale",
      "Eugenio_Montale"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1976",
      "Saul Bellow",
      "English",
      '"for the human understanding and subtle analysis of contemporary culture that are combined in his work"&#91;81&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SaulBellow.jpg/75px-SaulBellow.jpg",
      "https://en.wikipedia.org/wiki/Saul_Bellow",
      "Saul_Bellow"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1977",
      "Vicente Aleixandre",
      "Spanish",
      '"for a creative poetic writing, which illuminates man\'s condition in the cosmos and in present-day society, at the same time representing the great renewal of the traditions of Spanish poetry between the wars"&#91;82&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vicentealeixandre.jpg/75px-Vicentealeixandre.jpg",
      "https://en.wikipedia.org/wiki/Vicente_Aleixandre",
      "Vicente_Aleixandre"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1978",
      "Isaac Bashevis Singer",
      "Yiddish",
      '"for his impassioned narrative art which, with roots in a Polish-Jewish cultural tradition, brings universal human conditions to life"&#91;83&#93;',
      "novel, short story, memoirs",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Isaac_Bashevis_Singer_%28upright%29.jpg/75px-Isaac_Bashevis_Singer_%28upright%29.jpg",
      "https://en.wikipedia.org/wiki/Isaac_Bashevis_Singer",
      "Isaac_Bashevis_Singer"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1979",
      "Odysseas Elytis",
      "Greek",
      '"for his poetry, which, against the background of Greek tradition, depicts with sensuous strength and intellectual clear-sightedness modern man\'s struggle for freedom and creativeness"&#91;84&#93;',
      "poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/69/Odysseas_Elytis_1974.jpg/75px-Odysseas_Elytis_1974.jpg",
      "https://en.wikipedia.org/wiki/Odysseas_Elytis",
      "Odysseas_Elytis"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1980",
      "Czesław Miłosz",
      "Polish",
      '"who with uncompromising clear-sightedness voices man\'s exposed condition in a world of severe conflicts"&#91;85&#93;',
      "poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/80/Czes%C5%82aw_Mi%C5%82osz_2011%28Lt%2C_detail%29.jpg/75px-Czes%C5%82aw_Mi%C5%82osz_2011%28Lt%2C_detail%29.jpg",
      "https://en.wikipedia.org/wiki/Czes%C5%82aw_Mi%C5%82osz",
      "Czes%C5%82aw_Mi%C5%82osz"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1981",
      "Elias Canetti",
      "German",
      '"for writings marked by a broad outlook, a wealth of ideas and artistic power"&#91;86&#93;',
      "novel, drama, memoirs, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Elias_Canetti_2.jpg/75px-Elias_Canetti_2.jpg",
      "https://en.wikipedia.org/wiki/Elias_Canetti",
      "Elias_Canetti"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1982",
      "Gabriel García Márquez",
      "Spanish",
      '"for his novels and short stories, in which the fantastic and the realistic are combined in a richly composed world of imagination, reflecting a continent\'s life and conflicts"&#91;87&#93;',
      "novel, short story, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gabriel_Garcia_Marquez.jpg/75px-Gabriel_Garcia_Marquez.jpg",
      "https://en.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez",
      "Gabriel_Garc%C3%ADa_M%C3%A1rquez"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1983",
      "William Golding",
      "English",
      '"for his novels, which with the perspicuity of realistic narrative art and the diversity and universality of myth, illuminate the human condition in the world of today"&#91;88&#93;',
      "novel, poetry, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/William_Golding_1983.jpg/75px-William_Golding_1983.jpg",
      "https://en.wikipedia.org/wiki/William_Golding",
      "William_Golding"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1984",
      "Jaroslav Seifert",
      "Czech",
      '"for his poetry, which endowed with freshness, and rich inventiveness provides a liberating image of the indomitable spirit and versatility of man"&#91;89&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jaroslav_Seifert_1981_foto_Hana_Hamplov%C3%A1.jpg/75px-Jaroslav_Seifert_1981_foto_Hana_Hamplov%C3%A1.jpg",
      "https://en.wikipedia.org/wiki/Jaroslav_Seifert",
      "Jaroslav_Seifert"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1985",
      "Claude Simon",
      "French",
      "\"who in his novel combines the poet's and the painter's creativeness with a deepened awareness of time in the depiction of the human condition\"&#91;90&#93;",
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Claude_Simon_1967.jpg/75px-Claude_Simon_1967.jpg",
      "https://en.wikipedia.org/wiki/Claude_Simon",
      "Claude_Simon"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1986",
      "Wole Soyinka",
      "English",
      '"who in a wide cultural perspective and with poetic overtones fashions the drama of existence"&#91;91&#93;',
      "drama, novel, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Soyinka%2C_Wole_%281934%29.jpg/75px-Soyinka%2C_Wole_%281934%29.jpg",
      "https://en.wikipedia.org/wiki/Wole_Soyinka",
      "Wole_Soyinka"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1987",
      "Joseph Brodsky",
      "Russian and English",
      '"for an all-embracing authorship, imbued with clarity of thought and poetic intensity"&#91;92&#93;',
      "poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Joseph_Brodsky_1988.jpg/75px-Joseph_Brodsky_1988.jpg",
      "https://en.wikipedia.org/wiki/Joseph_Brodsky",
      "Joseph_Brodsky"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1988",
      "Naguib Mahfouz",
      "Arabic",
      '"who, through works rich in nuance - now clear-sightedly realistic, now evocatively ambiguous - has formed an Arabian narrative art that applies to all mankind"&#91;93&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/be/Necip_Mahfuz.jpg/75px-Necip_Mahfuz.jpg",
      "https://en.wikipedia.org/wiki/Naguib_Mahfouz",
      "Naguib_Mahfouz"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1989",
      "Camilo José Cela",
      "Spanish",
      '"for a rich and intensive prose, which with restrained compassion forms a challenging vision of man\'s vulnerability"&#91;94&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Camilo_Jos%C3%A9_Cela_Madrid_1996.jpg/75px-Camilo_Jos%C3%A9_Cela_Madrid_1996.jpg",
      "https://en.wikipedia.org/wiki/Camilo_Jos%C3%A9_Cela",
      "Camilo_Jos%C3%A9_Cela"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1990",
      "Octavio Paz",
      "Spanish",
      '"for impassioned writing with wide horizons, characterized by sensuous intelligence and humanistic integrity"&#91;95&#93;',
      "poetry, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/98/Octavio_Paz_-_1988_Malm%C3%B6.jpg/75px-Octavio_Paz_-_1988_Malm%C3%B6.jpg",
      "https://en.wikipedia.org/wiki/Octavio_Paz",
      "Octavio_Paz"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1991",
      "Nadine Gordimer",
      "English",
      '"who through her magnificent epic writing has - in the words of Alfred Nobel - been of very great benefit to humanity"&#91;96&#93;',
      "novel, short story, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nadine_Gordimer_01.JPG/75px-Nadine_Gordimer_01.JPG",
      "https://en.wikipedia.org/wiki/Nadine_Gordimer",
      "Nadine_Gordimer"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1992",
      "Derek Walcott",
      "English",
      '"for a poetic oeuvre of great luminosity, sustained by a historical vision, the outcome of a multicultural commitment"&#91;97&#93;',
      "poetry, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Derek_Walcott.jpg/75px-Derek_Walcott.jpg",
      "https://en.wikipedia.org/wiki/Derek_Walcott",
      "Derek_Walcott"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1993",
      "Toni Morrison",
      "English",
      '"who in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality"&#91;98&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Toni_Morrison_2008-2.jpg/75px-Toni_Morrison_2008-2.jpg",
      "https://en.wikipedia.org/wiki/Toni_Morrison",
      "Toni_Morrison"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1994",
      "Kenzaburō Ōe",
      "Japanese",
      '"who with poetic force creates an imagined world, where life and myth condense to form a disconcerting picture of the human predicament today"&#91;99&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Oe_Kenzaburo_1-2.jpg/75px-Oe_Kenzaburo_1-2.jpg",
      "https://en.wikipedia.org/wiki/Kenzabur%C5%8D_%C5%8Ce",
      "Kenzabur%C5%8D_%C5%8Ce"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1995",
      "Seamus Heaney",
      "English",
      '"for works of lyrical beauty and ethical depth, which exalt everyday miracles and the living past"&#91;100&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Seamus_Heaney_Photograph_Edit.jpg/75px-Seamus_Heaney_Photograph_Edit.jpg",
      "https://en.wikipedia.org/wiki/Seamus_Heaney",
      "Seamus_Heaney"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1996",
      "Wisława Szymborska",
      "Polish",
      '"for poetry that with ironic precision allows the historical and biological context to come to light in fragments of human reality"&#91;101&#93;',
      "poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Szymborska_2011_%281%29.jpg/75px-Szymborska_2011_%281%29.jpg",
      "https://en.wikipedia.org/wiki/Wis%C5%82awa_Szymborska",
      "Wis%C5%82awa_Szymborska"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1997",
      "Dario Fo",
      "Italian",
      '"who emulates the jesters of the Middle Ages in scourging authority and upholding the dignity of the downtrodden"&#91;102&#93;',
      "drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dario_Fo-Cesena.jpg/75px-Dario_Fo-Cesena.jpg",
      "https://en.wikipedia.org/wiki/Dario_Fo",
      "Dario_Fo"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1998",
      "José Saramago",
      "Portuguese",
      '"who with parables sustained by imagination, compassion and irony continually enables us once again to apprehend an elusory reality"&#91;103&#93;',
      "novel, drama, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/JSJoseSaramago.jpg/75px-JSJoseSaramago.jpg",
      "https://en.wikipedia.org/wiki/Jos%C3%A9_Saramago",
      "Jos%C3%A9_Saramago"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "1999",
      "Günter Grass",
      "German",
      '"whose frolicsome black fables portray the forgotten face of history"&#91;104&#93;',
      "novel, drama, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/G%C3%BCnter_Grass_auf_dem_Blauen_Sofa.jpg/75px-G%C3%BCnter_Grass_auf_dem_Blauen_Sofa.jpg",
      "https://en.wikipedia.org/wiki/G%C3%BCnter_Grass",
      "G%C3%BCnter_Grass"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2000",
      "Gao Xingjian",
      "Chinese",
      '"for an oeuvre of universal validity, bitter insights and linguistic ingenuity, which has opened new paths for the Chinese novel and drama"&#91;105&#93;',
      "novel, drama, literary criticism",
      "//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gao_Xingjian.jpg/75px-Gao_Xingjian.jpg",
      "https://en.wikipedia.org/wiki/Gao_Xingjian",
      "Gao_Xingjian"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2001",
      "V. S. Naipaul",
      "English",
      '"for having united perceptive narrative and incorruptible scrutiny in works that compel us to see the presence of suppressed histories"&#91;106&#93;',
      "novel, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/VS_Naipaul_2016_Dhaka.jpg/75px-VS_Naipaul_2016_Dhaka.jpg",
      "https://en.wikipedia.org/wiki/V._S._Naipaul",
      "V._S._Naipaul"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2002",
      "Imre Kertész",
      "Hungarian",
      '"for writing that upholds the fragile experience of the individual against the barbaric arbitrariness of history"&#91;107&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/86/Imre_Kert%C3%A9sz_%281929-%29_Hungarian_writer_II._by_Csaba_Segesv%C3%A1ri.JPG/75px-Imre_Kert%C3%A9sz_%281929-%29_Hungarian_writer_II._by_Csaba_Segesv%C3%A1ri.JPG",
      "https://en.wikipedia.org/wiki/Imre_Kert%C3%A9sz",
      "Imre_Kert%C3%A9sz"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2003",
      "J. M. Coetzee",
      "English",
      '"who in innumerable guises portrays the surprising involvement of the outsider"&#91;108&#93;',
      "novel, essay, translation",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/J.M._Coetzee.JPG/75px-J.M._Coetzee.JPG",
      "https://en.wikipedia.org/wiki/J._M._Coetzee",
      "J._M._Coetzee"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2004",
      "Elfriede Jelinek",
      "German",
      '"for her musical flow of voices and counter-voices in novels and plays that with extraordinary linguistic zeal reveal the absurdity of society\'s clichés and their subjugating power"&#91;109&#93;',
      "novel, drama",
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Elfriede_jelinek_2004_small.jpg/75px-Elfriede_jelinek_2004_small.jpg",
      "https://en.wikipedia.org/wiki/Elfriede_Jelinek",
      "Elfriede_Jelinek"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2005",
      "Harold Pinter",
      "English",
      '"who in his plays uncovers the precipice under everyday prattle and forces entry into oppression\'s closed rooms"&#91;110&#93;',
      "drama, screenplay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Pinterfoto_cropped2.jpg/75px-Pinterfoto_cropped2.jpg",
      "https://en.wikipedia.org/wiki/Harold_Pinter",
      "Harold_Pinter"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2006",
      "Orhan Pamuk",
      "Turkish",
      '"who in the quest for the melancholic soul of his native city has discovered new symbols for the clash and interlacing of cultures"&#91;111&#93;',
      "novel, screenplay, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Orhan_Pamuk_2009_Shankbone.jpg/75px-Orhan_Pamuk_2009_Shankbone.jpg",
      "https://en.wikipedia.org/wiki/Orhan_Pamuk",
      "Orhan_Pamuk"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2007",
      "Doris Lessing",
      "English",
      '"that epicist of the female experience, who with scepticism, fire and visionary power has subjected a divided civilisation to scrutiny"&#91;112&#93;',
      "novel, drama, poetry, short story, memoirs",
      "//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Doris_lessing_20060312_%28square%29.jpg/75px-Doris_lessing_20060312_%28square%29.jpg",
      "https://en.wikipedia.org/wiki/Doris_Lessing",
      "Doris_Lessing"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2008",
      "J. M. G. Le Clézio",
      "French",
      '"author of new departures, poetic adventure and sensual ecstasy, explorer of a humanity beyond and below the reigning civilization"&#91;113&#93;',
      "novel, short story, essay, translation",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jean-Marie_Gustave_Le_Cl%C3%A9zio-press_conference_Dec_06th%2C_2008-2.jpg/75px-Jean-Marie_Gustave_Le_Cl%C3%A9zio-press_conference_Dec_06th%2C_2008-2.jpg",
      "https://en.wikipedia.org/wiki/J._M._G._Le_Cl%C3%A9zio",
      "J._M._G._Le_Cl%C3%A9zio"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2009",
      "Herta Müller",
      "German",
      '"who, with the concentration of poetry and the frankness of prose, depicts the landscape of the dispossessed"&#91;114&#93;',
      "novel, poetry",
      "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Herta_M%C3%BCller_1.jpg/75px-Herta_M%C3%BCller_1.jpg",
      "https://en.wikipedia.org/wiki/Herta_M%C3%BCller",
      "Herta_M%C3%BCller"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2010",
      "Mario Vargas Llosa",
      "Spanish",
      '"for his cartography of structures of power and his trenchant images of the individual\'s resistance, revolt, and defeat"&#91;115&#93;',
      "novel, short story, essay, drama, memoirs",
      "//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vargas_Llosa_Madrid_2012.jpg/75px-Vargas_Llosa_Madrid_2012.jpg",
      "https://en.wikipedia.org/wiki/Mario_Vargas_Llosa",
      "Mario_Vargas_Llosa"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2011",
      "Tomas Tranströmer",
      "Swedish",
      '"because, through his condensed, translucent images, he gives us fresh access to reality"&#91;116&#93;',
      "poetry, translation",
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Transtroemer.jpg/75px-Transtroemer.jpg",
      "https://en.wikipedia.org/wiki/Tomas_Transtr%C3%B6mer",
      "Tomas_Transtr%C3%B6mer"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2012",
      "Mo Yan",
      "Chinese",
      '"who with hallucinatory realism merges folk tales, history and the contemporary"&#91;117&#93;',
      "novel, short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/81/MoYan_Hamburg_2008.jpg/75px-MoYan_Hamburg_2008.jpg",
      "https://en.wikipedia.org/wiki/Mo_Yan",
      "Mo_Yan"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2013",
      "Alice Munro",
      "English",
      '"master of the contemporary short story"&#91;118&#93;',
      "short story",
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alice_Munro.jpg/75px-Alice_Munro.jpg",
      "https://en.wikipedia.org/wiki/Alice_Munro",
      "Alice_Munro"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2014",
      "Patrick Modiano",
      "French",
      '"for the art of memory with which he has evoked the most ungraspable human destinies and uncovered the life-world of the occupation"&#91;119&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Patrick_Modiano_6_dec_2014_-_22.jpg/75px-Patrick_Modiano_6_dec_2014_-_22.jpg",
      "https://en.wikipedia.org/wiki/Patrick_Modiano",
      "Patrick_Modiano"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2015",
      "Svetlana Alexievich",
      "Russian",
      '"for her polyphonic writings, a monument to suffering and courage in our time" &#91;120&#93;',
      "history, essay",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/80/Swetlana_Alexijewitsch_2013.jpg/75px-Swetlana_Alexijewitsch_2013.jpg",
      "https://en.wikipedia.org/wiki/Svetlana_Alexievich",
      "Svetlana_Alexievich"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2016",
      "Bob Dylan",
      "English",
      '"for having created new poetic expressions within the great American song tradition"&#91;121&#93;',
      "poetry, songwriting",
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/75px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
      "https://en.wikipedia.org/wiki/Bob_Dylan",
      "Bob_Dylan"
    ]);

    db.run("INSERT INTO tableAuthors (Year,Laureate,Languages,Citation,Genres,PictureUrl,LaureateFullWiki,name) VALUES (?,?,?,?,?,?,?,?)", [
      "2017",
      "Kazuo Ishiguro",
      "English",
      '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"&#91;122&#93;',
      "novel",
      "//upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kazuo_Ishiguro_in_Stockholm_2017_02.jpg/75px-Kazuo_Ishiguro_in_Stockholm_2017_02.jpg",
      "https://en.wikipedia.org/wiki/Kazuo_Ishiguro",
      "Kazuo_Ishiguro"
    ]);

   
  }
  private RunBooks(db: any) {
    //#region laureates



 
    db.run("INSERT INTO booksName VALUES (?,?)", ['HMS Birkenhead (1845)','Rudyard_Kipling']);
		  
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Birkenhead, Lord. (1978). Rudyard Kipling, Appendix B, "Honours and Awards". Weidenfeld &amp; Nicolson, London; Random House Inc., New York','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipling, Rudyard (1894) "To the City of Bombay", dedication to Seven Seas, Macmillan &amp; Co.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipling, Rudyard (1956) Kipling: a selection of his stories and poems, Volume 2 pp.349 Doubleday, 1956','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipling, Rudyard. (1920). Letters of Travel (1892–1920). Macmillan &amp; Co.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Snodgrass, Chris. (2002). A Companion to Victorian Poetry. Blackwell, Oxford','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Carrington, C. E., (1955) The life of Rudyard Kipling, Doubleday &amp; Co., Garden City, NY, p. 236','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Carrington, C. E., (1955) The life of Rudyard Kipling, p. 286','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Mackey, Albert G. (1946). Encyclopedia of Freemasonry, Vol. 1. Chicago: The Masonic History Co.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Webb, George (1997). Foreword to: Kipling, Rudyard. The Irish Guards in the Great War. 2 vols. Spellmount. p. 9','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Fringes of the Fleet, Macmillan &amp; Co., 1916','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipling, Rudyard (1923). The Irish Guards in the Great War. 2 vols. London.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipling, Rudyard (1940) The Definitive edition of Rudyard Kipling\'s verse. Hodder &amp; Stoughton.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Schliemann, H, Troy and its remains, London: Murray, 1875, pp. 102, 119–20','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rudyard Kipling, War Stories and Poems (Oxford Paperbacks, 1999), pp. xxiv–xxv','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Short Stories from the Strand, The Folio Society, 1992','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jarrell, Randall (1999). "On Preparing to Read Kipling." No Other Book: Selected Essays. New York: HarperCollins.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ leader, Zachary (2007). The Life of Kingsley Amis. Vintage. pp. 704–705. ISBN&#160;0375424989.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Khushwant Singh, Review of The Book of Prayer by Renuka Narayanan , 2001','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bauer, Helen Pike (1994) Rudyard Kipling: A Study of the Short Fiction New York: Twayne','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David, C. (2007). Rudyard Kipling: a critical study, New Delhi, Anmol, 2007. ISBN&#160;81-261-3101-2','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dillingham, William B (2005) Rudyard Kipling: Hell and Heroism New York: Palgrave Macmillan','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilbert, Elliot L. ed., (1965) Kipling and the Critics (New York: New York University Press)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Green, Roger Lancelyn, ed., (1971) Kipling: the Critical Heritage (London: Routledge and Kegan Paul).','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gross, John, ed. (1972) Rudyard Kipling: the Man, his Work and his World (London: Weidenfeld and Nicolson)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Harris, Brian (2014) "The Surprising Mr Kipling: An anthology and reassessment of the poetry of Rudyard Kipling (CreateSpace) ISBN&#160;978-1-4942-2194-2','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kemp, Sandra. (1988) Kipling\'s Hidden Narratives Oxford: Blackwell','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lycett, Andrew (1999). Rudyard Kipling. London, Weidenfeld &amp; Nicolson. ISBN&#160;0-297-81907-0','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lycett, Andrew (ed.) (2010). Kipling Abroad, I. B. Tauris. ISBN&#160;978-1-84885-072-9','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mallett, Phillip (2003) Rudyard Kipling: A Literary Life Basingstoke: Palgrave Macmillan','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Montefiore, Jan (ed.) (2013) In Time\'s Eye: Essays on Rudyard Kipling Manchester: Manchester University Press','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Narita, Tatsushi. T. S. Eliot and his Youth as \'A Literary Columbus\'. Nagoya: Kougaku Shuppan, 2011','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nicolson, Adam (2001) Carrie Kipling 1862–1939&#160;: The Hated Wife. Faber &amp; Faber, London. ISBN&#160;0-571-20835-5','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ricketts, Harry. (2001) Rudyard Kipling: A Life New York: Da Capo Press ISBN&#160;0-7867-0830-1','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rutherford, Andrew, ed. (1964) Kipling\'s Mind and Art (Edinburgh and London: Oliver and Boyd)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sergeant, David, (2013) Kipling\'s Art of Fiction 1884–1901 (Oxford: Oxford University Press)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Seymour-Smith, Rudyard Kipling, (1990).','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shippey, Tom, "Rudyard Kipling," in: Cahier Calin: Makers of the Middle Ages. Essays in Honor of William Calin, ed. Richard Utz and Elizabeth Emery (Kalamazoo, MI: Studies in Medievalism, 2011), pp.&#160;21–23.','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tompkins, J. M. S. (1959) The Art of Rudyard Kipling (London&#160;: Methuen) online edition','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Walsh, Sue (2010) Kipling\'s Children\'s Literature: Language, Identity, and Constructions of Childhood Farnham: Ashgate','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wilson, Angus The Strange Ride of Rudyard Kipling: His Life and Works New York: The Viking Press, 1978. ISBN&#160;0-670-67701-9','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light that Failed (1891)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Captains Courageous (1896)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kim (1901)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Plain Tales from the Hills (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soldiers Three (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of the Gadsbys (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Black and White (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Phantom \'Rickshaw and other Eerie Tales (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Deodars (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wee Willie Winkie and Other Child Stories (1888)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Sea to Sea and Other Sketches, Letters of Travel (1889)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barrack-Room Ballads (1892, poetry)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Many Inventions (1893)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Second Jungle Book (1895)"Letting in the Jungle""Red Dog"','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Seven Seas (1896, poetry)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Day\'s Work (1898)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stalky &amp; Co. (1899)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Just So Stories (1902)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Five Nations (1903, poetry)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Puck of Pook\'s Hill (1906)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rewards and Fairies (1910)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fringes of the Fleet (1915, non-fiction)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Debits and Credits (1926)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Limits and Renewals (1932)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rudyard Kipling\'s Verse: Definitive Edition (1940)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Choice of Kipling\'s Verse (by T. S. Eliot, 1941)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Boy Jack (1997 play)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rudyard Kipling: A Remembrance Tale (2006 documentary)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Boy Jack (2007 film)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (1894)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Second Jungle Book (1895)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Mowgli Stories (1933)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (1967)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (1994)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book: Mowgli\'s Story (1998)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book 2 (2003)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (2016)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['TaleSpin (1990–91)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jungle Cubs (1996–1998)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (1993)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book Groove Party (2000)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elephant Boy (1937)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jungle Book (1942)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Adventures of Mowgli (1973)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Second Jungle Book: Mowgli &amp; Baloo (1997)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mowgli\'s First Adventure: In Search of the Elephant Eye Diamond (1998)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mowgli (2019)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elephant Boy (1973)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mowgli\'s Brothers (1976)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jungle Book Shōnen Mowgli (1989–90)episodes','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mowgli: The New Adventures of the Jungle Book (1998)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Jungle Book (2010–)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Third Jungle Book (1992)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Graveyard Book (2008)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light That Failed (1923)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light That Failed (1939)','Rudyard_Kipling']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Baldi, Giusso, Razetti, Zaccaria, Dal testo alla storia. Dalla storia al testo, Torino, 2001, vol. 3/1B, p. 778: "Partecipò intensamente alla vita culturale del tempo e ... sostenne infinite polemiche letterarie e politiche".','Giosu%C3%A8_Carducci']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Giulio Ferroni, Profilo storico della letteratura italiana, Torino, 1992, p. 780: "Si trasforma in poeta ufficiale dell\'Italia umbertina".','Giosu%C3%A8_Carducci']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Biagini, Mario, Giosuè Carducci, Mursia, 1976, p. 208.','Giosu%C3%A8_Carducci']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Addio caro Orco (2004), published by Feltrinelli','Giosu%C3%A8_Carducci']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Without dogma (Bez dogmatu, 1891).','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Polaniecki Family, a.k.a. Children of the Soil (Rodzina Połanieckich, 1894).','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (1895):  a story of St. Peter in Rome in the reign of Emperor Nero.','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Field of Glory (Na polu chwały, 1906):  a story of King John III Sobieski and the Battle of Vienna.','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Whirlpool (novel) (Wiry, 1910).','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Desert and Wilderness (W pustyni i w puszczy, 1912):  the adventures of a Polish boy, Staś, and a younger English girl, Nell, in Africa during the Mahdist War of 1881–99.','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yanko the Musician and other stories (1893)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lillian Morris and other stories (1894)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hania and other stories (1897)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Let Us Follow Him and other stories (1897, unauthorized)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sielanka, a forest picture, and other stories (1898)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Bright Shore (1898)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Vain (1899)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Life and Death and other legends and stories  (1904)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (dir. Enrico Guazzoni, 1913)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Obrona Częstochowy (dir. Edward Puchalski, 1913)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (dir. Gabriellino D\'Annunzio and Georg Jacoby, 1924)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (dir. Mervyn LeRoy, 1951)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Szkice węglem (dir. Antoni Bohdziewicz, 1957)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Knights of the Teutonic Order (dir. Aleksander Ford, 1960)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Invasion 1700 (dir. Fernando Cerchio, 1962)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colonel Wolodyjowski (dir. Jerzy Hoffman, 1969)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Desert and Wilderness (dir. Władysław Ślesicki, 1973)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Deluge (dir. Jerzy Hoffman, 1974)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (TV miniseries, dir. Franco Rossi, 1985)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['With Fire and Sword (dir. Jerzy Hoffman, 1999)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Desert and Wilderness (dir. Gavin Hood, 2001)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (dir. Jerzy Kawalerowicz, 2001)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis? (1913)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (1924)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (1951)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis? (TV, 1985)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quo Vadis (2001)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['With Fire and Sword (1999 film)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Deluge (1974 film)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colonel Wolodyjowski (1969 film)','Henryk_Sienkiewicz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ramón Menéndez Pidal, Manual de gramática histórica española (Espasa-Calpe, 1968), §66.2','Spanish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lloyd A. Kasten and Florian J. Cody, Tentative Dictionary of Medieval Spanish (2nd ed., Hispanic Seminary of Medieval Studies, 2001)','Spanish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ John B. Dabor, Spanish Pronunciation: Theory and Practice (3rd ed.: Holt, Rinehart and Winston, 1997), Ch. 7','Spanish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ El español en Namibia, 2005. Instituto Cervantes.','Spanish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mirèio (1859) - PDF (in Provençal)','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Calendau (1867) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nerto, short story (1884) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Rèino Jano, drama (1890) - en ligne','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lou Pouèmo dóu Rose (1897) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Moun espelido, Memòri e Raconte (Mes mémoires) (1906) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Discours e dicho (1906) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Genèsi, traducho en prouvençau (1910) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lis óulivado (1912) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lou Tresor dóu Felibrige ou Dictionnaire provençal-français embrassant les divers dialectes de la langue d\'oc moderne (1878–1886) -  online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Proso d’Armana (posthume) (1926, 1927, 1930) - online','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Coupo Santo (1867)','Fr%C3%A9d%C3%A9ric_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mellem Slagene, (Between the Battles) saga drama, 1857','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Synnøve Solbakken, peasant story, 1857','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arne, 1859','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fiskerjenten, 1868','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brudeslåtten, peasant story, 1872','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sigurd Jorsalfar, saga drama, 1872','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['En fallit, (The Bankrupt) drama, 1875','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Redaktøren, (The Editor) drama, 1875','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kaptejn Mansana, (Captain Mansana) novel, 1875','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Magnhild, 1877','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leonarda, 1879','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['En hanske (A Gauntlet), 1883','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Støv (Dust), 1882','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fred, oratorium, 1891','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Lange og Tora Parsberg, 1898','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Daglannet, 1904','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Norges Vel, kantat, 1909','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brandes, Georg (1899). Henrik Ibsen. Björnstjerne Björnson. Critical Studies. London: William Heinemann.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Payne, William Morton (1910). Björnstjerne Björnson, 1832–1910. Chicago: A.C. McClurg &amp; Co.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collin, Christen (1907). Bjørnstjerne Bjørnson hans Barndom og Ungdom. Kristiania: H. Aschehoug &amp; Co.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Larson, Harold (1944). Bjørnstjerne Bjørnson: A Study in Norwegian Nationalism. New York: King\'s Crown Press.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Haugen, Eva Lund; and Einar Haugen (1978). Bjørnson: Land of the Free. Bjørnstjerne Bjørnson\'s American Letters 1880–1881. Northfield, Minn.: Norwegian-American Historical Association.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Haugen, Einar (1978). The Vocabulary of Bjørnson\'s Literary Works. N.Y.: Columbia University Press.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Amdam, Per (1978). Bjørnstjerne Bjørnson. J.W. Cappelen.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Boyesen, Hjalmar Hjorth (1873). "Björnstjerne Björnson as a Dramatist," The North American Review, Vol. 116, No. 238, pp.&#160;109–138.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Boyesen, Hjalmar Hjorth (1895). "Bjørnstjerne Bjørnson." In: Essays on Scandinavian Literature. New York: Charles Scribner\'s Sons.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brandes, Georg (1886). "Bjørnstjerne Bjørnson." In: Eminent Authors of the Nineteenth Century. New York: Thomas Y. Crowell Company.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Buchanan, Robert (1872). "Bjørnstjerne Bjørnson," The Contemporary Review 21, pp.&#160;45–62.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gosse, Edmund (1890). "Norwegian Poetry Since 1814." In: Northern Studies. London: Walter Scott.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jorgenson, Theodore (1933). "Bjørnstjerne Bjørnson." In: History of Norwegian Literature. New York: The Macmillan Company.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lewisohn, Ludwig (1915). "The Scandinavian Theater." In: The Modern Drama, an Essay in Interpretation. New York: B.W Huebsch.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Naess, Harald S. (1993). A History of Norwegian Literature. University of Nebraska Press.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nordberg, Carl E. (1920). The Peasant Stories of Bjørnstjerne Bjørnson. Minneapolis, Minn.: The Free Church Book Concern.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Payne, William Morton (1903). "Bjørnstjerne Bjørnson," The International Quarterly 7, pp.&#160;171–191.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Phelps, William Lyon (1918). "Bjørnstjerne Bjørnson." In: Essays on Modern Novelists. New York: The Macmillan Company.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quiller-Couch, A.T. (1896). "Bjørnstjerne Bjørnson." In: Adventures in Criticism. London: Cassell &amp; Company, pp.&#160;346–354.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Schmiesing, Ann (2004). "The Christiania Theater and Norwegian Nationalism: Bjørnson\'s Defense of the 1856 Whistle Concerts in \'Pibernes Program\'," Scandinavian Studies, Vol. 76, No. 3, pp.&#160;317–340.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Willcox, Louise Collier (1910). "Bjornstjerne Bjornson," The North American Review, Vol. 192, No. 656, pp.&#160;44–55.','Bj%C3%B8rnstjerne_Bj%C3%B8rnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Provinces of the Roman Empire from Caesar to Diocletian (1885), published as volume 5 of his History of Rome, is a description of all Roman regions during the early imperial period.','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roman Chronology to the Time of Caesar (1858) written with his brother August Mommsen.','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roman Constitutional Law (1871–1888). This systematic treatment of Roman constitutional law in three volumes has been of importance for research on ancient history.','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roman Criminal Law (1899)','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Corpus Inscriptionum Latinarum, lead editor and editor (1861, et seq.)','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Digesta (of Justinian), editor (1866–1870, two volumes)','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Iordanis Romana et Getica (1882) was Mommsen\'s critical edition of Jordanes\' The Origin and Deeds of the Goths and has subsequently come to be generally known simply as Getica.','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Codex Theodosianus, editor (1905, posthumous)','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mommsen, Theodor. Rome, from earliest times to 44 B. C. (1906) online','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mommsen, Theodor. History of Rome: Volume 1 (1894) online edition','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mommsen, Theodor. History of Rome: Volume 2 (1871) online edition','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mommsen, Theodor. History of Rome: Volume 3 (1891) online edition','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mommsen, Theodor. History of Rome: Volume 4 (1908) online edition','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mahan, Alfred Thayer. From Sail to Stream: Recollections of Naval Life. New York: Harper and Brothers Publishers, 1907: 277','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carter, Jesse Benedict. "Theodor Mommsen," The Atlantic Monthly, Vol. XCIII, 1904.','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gay, Peter, and Victor G. Wexler, (eds). Historians at Work, Vol. III, 1975, pp.&#160;271+','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Whitman, Sidney, and Theodor Mommsen. "German Feeling toward England and America," North American Review, Vol. 170, No. 519 (Feb., 1900), pp.&#160;240–243 online in JSTOR, an exchange of letters','Theodor_Mommsen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Lebensanschauungen der großen Denker (1890; 7th ed., 1907; 1918; Eng. trans., W. Hough and Boyce Gibson, The Problem of Human Life, 1909) (The Problem of Human Life as Viewed by the Great Thinkers)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Kampf um einen geistigen Lebensinhalt (1896) (The Struggle for a Spiritual Content of Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Wahrheitsgehalt der Religion (1901) (The Truth of Religion)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grundlinien einer neuen Lebensanschauung (1907) (Life\'s Basis and Life\'s Ideal: The Fundamentals of a New Philosophy of Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Sinn und Wert des Lebens (1908) (The Meaning and Value of Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Geistige Strömungen der Gegenwart (1908; first appeared in 1878 as Die Grundbegriffe der Gegenwart; Eng. trans. by M. Stuart Phelps, New York, 1880) (Main Currents of Modern Thought)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Können wir noch Christen sein? (1911) (Can We Still Be Christians?, 1914))','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Present Day Ethics in their Relation to the Spiritual Life (1913) (Deem Lectures given at New York University)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Sozialismus und seine Lebensgestaltung (1920) (Socialism: an Analysis (1922))','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Methode der aristotelischen Forschung (1872) (The Aristotelian Method of Research)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Geschichte der philosophische Terminologie (1879) (History of Philosophical Terminology)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prolegomena zu Forschungen über die Einheit des Geisteslebens (1885) (Prolegomena to Research on the Unity of the Spiritual Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beiträge zur Geschichte der neueren Philosophie (1886, 1905) (Contributions to the History of the Newer Philosophies)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Einheit des Geisteslebens (1888) (The Unity of the Spiritual Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas von Aquino und Kant (1901) (Thomas Aquinas and Kant)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gesammelte Aufsätze zu Philosophische und Lebensanschauung (1903) (Collected Essays on Views of Philosophy and Life)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Philosophie der Geschichte (1907) (Philosophy of History)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Einführung in die Philosophie der Geisteslebens (1908; Eng. trans., The Life of the Spirit, F. L. Pogson, 1909, Crown Theological Library) (Introduction to the Philosophy of the Life of the Spirit)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hauptprobleme der Religionsphilosophie der Gegenwart (1907) (Main Problems of the Current Philosophy of Religion)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Liberty in Teaching in the German Universities (1897)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Are the Germans still a Nation of Thinkers? (1898)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Progress of Philosophy in the 19th Century (1899)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Finnish Question (1899)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Present Status of Religion in Germany (1901)','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Problem of Human Life as Viewed by the Great Thinkers from Plato to the Present Time, Charles Scribner\'s Sons, 1909.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Back to Religion, 1912.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Main Currents of Modern Thought: A Study of the Spiritual and Intellectual Movements of the Present Day, T. Fisher Unwin, 1912.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Meaning and Value of Life, A. and C. Black, 1913.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Can we Still be Christians?, The Macmillan Company, 1914.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Essays, T. Fisher Unwin, 1914.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Knowledge and Life (translation), G.P. Putnam\'s Sons, 1914.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kierkegaard Research: Sources, Reception and Resources, Volume 8, Tome III, Ashgate Publishing, Ltd., 2009, p. 177.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beck, Friedrich Alfred. Rudolf Eucken, Deutsche Buch-Gemeinschaft, 1927.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Booth, Meyrick. Rudolf Eucken: His Philosophy and Influence, Charles Scribner\'s Sons, 1913.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Feuling, Daniel. "Rudolf Eucken\'s Philosophy," The Dublin Review, Vol. CLV, July/October, 1914.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gibson, W. R. Boyce. Rudolf Eucken\'s Philosophy of Life, A. &amp; C. Black, 1915.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jones, Abel J. Rudolf Eucken: A Philosophy of Life, T. C. &amp; E. C. Jack, 1913.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jones, W. Tudor. Rudolf Eucken: His Life and Philosophy, Haldeman-Julius Co., 1920.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['MacSwiney, Margaret Mary. Rudolf Eucken and the Spiritual Life, National Capital Press, 1915.','Rudolf_Christoph_Eucken']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gösta Berlings saga (1891; novel). Translated as The Story of Gösta Berling (Pauline Bancroft Flach, 1898), Gösta Berling\'s Saga (Velma Swanston Howard, Lillie Tudeer, 1898), The Story of Gösta Berling (R. Bly, 1962)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Osynliga länkar (1894; short stories). Translated as Invisible Links (Pauline Bancroft Flach, (1869–1966) 1899)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Antikrists mirakler (1897; novel). Translated as The Miracles of Antichrist (Selma Ahlström Trotz, 1899) and The Miracles of Antichrist (Pauline Bancroft Flach (1869–1966), 1899)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drottningar i Kungahälla (1899; short stories). Translated as The Queens of Kungahälla and Other Sketches From a Swedish Homestead (Jessie Bröchner, 1901; C. Field, 1917)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['En herrgårdssägen (1899; short stories). Translated as The Tale of a Manor and Other Sketches (C. Field, 1922)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jerusalem&#160;: två berättelser. 1, I Dalarne (1901; novel). Translated as Jerusalem (Jessie Bröchner, 1903; V.S. Howard, 1914)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jerusalem&#160;: två berättelser. 2, I det heliga landet (1902; novel). Translated as The Holy City&#160;: Jerusalem II (V.S. Howard, 1918)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kristuslegender (1904; short stories). Translated as Christ Legends and Other Stories (Velma Swanston Howard (1868–1937), 1908)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nils Holgerssons underbara resa genom Sverige (1906–07; novel). Translated as The Wonderful Adventures of Nils (Velma Swanston Howard, 1907; Richard E. Oldenburg, 1967) and Further Adventures of Nils (V.S. Howard, 1911)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['En saga om en saga och andra sagor (1908; short stories). Translated as The Girl from the Marsh Croft (Velma Swanston Howard, 1910) and Girl from the Marsh Croft and Other Stories (edited by Greta Anderson, 1996)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hem och stat: Föredrag vid rösträttskongressen den 13 juni 1911 (1911; non-fiction). Translated as Home and State: Being an Address Delivered at Stockholm at the Sixth Convention of the International Woman Suffrage Alliance, June 1911 (C. Ursula Holmstedt, 1912)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Liljecronas hem (1911; novel). Translated as Liliecrona\'s Home (Anna Barwell, 1913)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stormyrtossen: Folkskädespel i 4 akter (1913) with Bernt Fredgren','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Astrid och andra berättelser (1914; short stories)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kejsarn av Portugallien (1914; novel). Translated as The Emperor of Portugallia (V.S. Howard, 1916)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dunungen: Lustspel i fyra akter (1914; play)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Silvergruvan och andra berättelser (1915; short stories)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Troll och Människor (1915, 1921; novel). Translated as The Changeling (Lagerlöf novel) (Susanna Stevens, 1992)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bannlyst (1918; novel). Translated as The Outcast (Lagerlöf novel) (W. Worster, 1920/22)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kavaljersnoveller (1918; novel)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zachris Topelius utveckling och mognad (1920; non-fiction), biography of Zachris Topelius.','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mårbacka (1922; memoir). Translated as Marbacka: The Story of a Manor (V.S. Howard, 1924) and Memories of Marbacka (Greta Andersen, 1996). See Mårbacka.','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['En Herrgårdssägen: Skådespel i fyra akter (1929; play), based on 1899 work En herrgårdssägen','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mors porträtt och andra berättelser (1930; short stories)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ett barns memoarer: Mårbacka (1930; memoir). Translated as Memories of My Childhood (Lagerlöf) Further Years at Mårbacka (V.S. Howard, 1934)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dagbok för Selma Ottilia Lovisa Lagerlöf (1932; memoir). Translated as The Diary of Selma Lagerlöf (V.S. Howard, 1936)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Höst (1933; short stories). Translated as Harvest (book) (Florence and Naboth Hedin, 1935)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Julberättelser (1936)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gösta Berlings saga: Skådespel i fyra akter med prolog och epilog effer romanen med samma namn (1936)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Från skilda tider: Efterlämnade skrifter (1943–45)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dockteaterspel (1959)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madame de Castro: En unglomsdikt (1984)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Charlotte Löwensköld (1925; novel). Translated as Charlotte Löwenskölds (V.S. Howard), trans. re-published as The Ring of the Löwenskölds (V.S. Howard, 1931)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Svärd (1928; novel). Translation re-published as The Ring of the Löwenskölds (V.S. Howard, 1931)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Berendsohn, Walter A., Selma Lagerlöf: Her Life and Work (adapted from the German by George F. Timpson) – London&#160;: Nicholson &amp; Watson, 1931','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vrieze, Folkerdina Stientje de, Fact and Fiction in the Autobiographical Works of Selma Lagerlof – Assen, Netherlands&#160;: Van Gorcum, 1958','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nelson, Anne Theodora, The Critical Reception of Selma Lagerlöf in France – Evanston, Ill., 1962','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olson-Buckner, Elsa, The epic tradition in Gösta Berlings saga – Brooklyn, N.Y.&#160;: Theodore Gaus, 1978','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Edström, Vivi, Selma Lagerlöf (trans. by Barbara Lide) – Boston&#160;: Twayne Publishers, 1984','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madler, Jennifer Lynn, The Literary Response of German-language Authors to Selma Lagerlöf – Urbana, Ill.&#160;: University of Illinois, 1998','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Watson, Jennifer, Swedish Novelist Selma Lagerlöf, 1858–1940, and Germany at the Turn of the Century: O du Stern ob meinem Garten – Lewiston, NY&#160;: Edwin Mellen Press, 2004','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lass from the Stormy Croft (1917)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Girl from the Marsh Croft (1935)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Husmandstøsen (1952)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Girl from the Marsh Croft (1958)','Selma_Lagerl%C3%B6f']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Serres chaudes (1889)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Douze chansons (1896)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quinze chansons (expanded version of Douze chansons) (1900)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ariane et Barbe-bleue (Ariane and Bluebeard) (first published in German translation, 1899)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Miracle de saint Antoine (The Miracle of Saint Antony) (first performed in German translation, 1904)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marie-Magdeleine (Mary Magdalene) (first performed in German translation, February 1910; staged and published in French, 1913)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Bourgmestre de Stilmonde (first performed in Buenos Aires, 1918; published 1919)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Trésor des humbles (The Treasure of the Humble) (1896)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La sagesse et la destinée (Wisdom and Destiny) (1898)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Vie des abeilles (The Life of the Bee) (1901)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le temple enseveli (The Buried Temple) (1902)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Double Jardin (The Double Garden) (1904)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Intelligence des fleurs (The Intelligence of Flowers) (1907)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Hôte inconnu (first published in English translation, 1914; in original French, 1917)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Débris de la guerre (1916)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le grand secret (The Great Secret) (Fasquelle, 1921; Bernard Miall trans., 1922)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Vie des termites (The Life of Termites) (1926)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Vie de l\'espace (The Life of Space) (1928)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Grande Féerie (1929)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Vie des fourmis (The Life of the Ant) (1930)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Araignée de verre (1932)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Avant le grand silence (Before the Great Silence) (1934)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Ombre des ailes (The Shadow of Wings) (1936)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Devant Dieu (1937)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Autre Monde ou le cadran stellaire (The Other World, or The Star System) (1941)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bulles bleues (1948)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Livre des XII béguines and L\'Ornement des noces spirituelles, translated from the Flemish of Ruusbroec (1885)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Ornement des noces spirituelles de Ruysbroeck l\'admirable (1891)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Disciples à Saïs and Fragments de Novalis from the German of Novalis, together with an Introduction by Maeterlinck on Novalis and German Romanticism (1895)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jean-Marie Pierret, Phonétique historique du français et notions de phonétique générale, 1994.','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bettina Knapp, Maurice Maeterlinck, Boston: Thackery Publishers, 1975, p. 18.','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c V. E. d\'Assonville, Eugene Marais and the Waterberg, Marnix, 2008, pp. 53–54.','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ L. Rousseau, 1974, Die Groot Verlange, Capetown: Human &amp; Rousseau, p. 398.','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Robert Ardrey, The Territorial Imperative: A Personal Inquiry into the Animal Origins of Property and Nations (1966).','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leon Rousseau, The Dark Stream, (Jonathan Ball Publishers:Cape Town, 1982).','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Peter Laki, Bartók and His World, Princeton University Press, 1995, pp. 130–31.','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['W. L. Courtney, The Development of M. Maeterlinck (London, 1904)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. J. Moses, Maurice Maeterlinck: A Study (New York, 1911)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['E. Thomas, Maurice Maeterlinck, (New York, 1911)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['J. Bethell, The life and Works of Maurice Maeterlinck (New York, 1913)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Archibald Henderson, European Dramatists (Cincinnati, 1913)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['E. E. Slosson, Major Prophets of To-Day (Boston, 1914)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['G. F. Sturgis, The Psychology of Maeterlinck as Shown in his Dramas (Boston, 1914)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Bird (1910)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Bird (1918)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Bird (1940)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Bird (1970)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Bird (1976)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Blue Bird (2011)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pelléas et Mélisande (1898 Fauré orchestral suite)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pelléas et Mélisande  (1902 Debussy opera)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pelleas und Melisande (1903 Schoenberg symphonic poem)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pelléas et Mélisande (1905 Sibelius incidental music)','Maurice_Maeterlinck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Narr in Christo Emanuel Quint (1910)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Atlantis (1912)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wanda a.k.a. Der Dämon (1926)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Insel der grossen Mutter (1928)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Um Volk und Geist (1932)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Im Wirbel der Berufung (1936)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Abenteuer meiner Jugend (1937)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bahnwärter Thiel (1888)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Ketzer von Soana (1918)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Phantom (1923)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Meerwunder (1934)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sonnen (1938)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Schuss im Park (1939)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Promethidenlos (1885)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna (1921)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die blaue Blume (1924)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Till Eulenspiegel (1927)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der grosse Traum (1912–42)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Before Sunrise (Vor Sonnenaufgang, 1889)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reconciliation (Das Friedensfest, 1890)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonely People (Einsame Menschen, 1891)&#91;26&#93;','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Weavers (Die Weber, 1892)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colleague Crampton (College Cramption, 1892)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beaver Coat (Der Biberpelz, 1893)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Assumption of Hannele (Hanneles Himmelfahrt, 1893)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Florian Geyer (1896)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elga (1896)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Helios (1896) fragment','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sunken Bell (Die versunkene Glocke, 1896)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pastoral (Das Hirtenlied, 1898) fragment','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drayman Henschel (Fuhrmann Henschel, 1898)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Schluck and Jau (Schluck und Jau, 1900)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Kramer (1900)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Conflagration (Der rote Hahn, 1901)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henry of Auë (Der arme Heinrich, 1902)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rose Bernd (1903)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['And Pippa Dances (Und Pippa Tanzt!, 1906)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Maidens of the Mount (Die Jungfern von Bischofsberg, 1907)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Charlemagne\'s Hostage (Kaiser Karls Geisel, 1908)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Griselda (1909)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rats (play) (Die Ratten, 1911)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gabriel Schilling\'s Flight (Gabriel Schillings Flucht, 1912)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Brauer (1912)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Commemoration Masque (Festspiel in deutschen Reimen, 1913)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bow of Odysseus (Der Bogen des Odysseus, 1914)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Magnus Garbe (1914, second version: 1942)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Indipohdi (1920)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Veland (1925)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herbert Engelmann (1921–26)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spuk (two plays: Die schwarze Maske and Hexenritt, 1928)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die goldene Harfe (1933)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hamlet in Wittenberg (Hamlet im Wittenberg, 1935)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Finsternisse (1937)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ulrich von Lichtenstein (1936–37)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Tochter der Kathedrale (1935–38)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Iphigenie in Aulis (1944)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Agamemnons Tod (1948; written in 1942)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elektra (1948; written in 1944)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Iphigenie in Delphi (1941)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hannele. A Dream Poem (1894)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonely Lives (1898)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sunken Bell (1899).','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Coming of Peace (1900)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['And Pippa Dances (1907)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reconciliation (1910)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fool in Christ, Emanuel Quint (1911)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Atlantis (1912).','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Parsival (1915)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Phantom (1922)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Heretic of Soana (1923)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lineman Thiel and Other Tales (1989)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Social Dramas (1912)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Social Dramas (1913)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Domestic Dramas (1914)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Symbolic and Legendary Dramas (1914)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Symbolic and Legendary Dramas (1915)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Later Dramas in Prose (1915)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miscellaneous Dramas (1917)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heuser, F.W.J. (1938). "Hauptmann\'s Trip to America," Germanic Review, Vol. 13, pp. 3–31.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gerhart Hauptmann and Silesia: a report on the German dramatist\'s last days in his occupied homeland (Gerhard Pohl, University of North Dakota etc., 1962)','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hayman, Ronald. Thomas Mann: A Biography. Scribner, 1995, p. 344.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Garten, H.F. (1954). Gerhart Hauptmann. New Haven: Yale University Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marshall, Alan (1982). The German Naturalists and Gerhart Hauptmann. Frankfurt am Main: Peter Lang.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maurer, Warren R. (1992). Understanding Gerhart Hauptmann. Columbia, S.C.: University of South Carolina Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mellen, Philip A. (1984). Gerhart Hauptmann. Religious Syncretism and Eastern Religions. New York: Peter Lang.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Osborne, John (1998). Gerhart Hauptmann and the Naturalist Drama. Amsterdam: Harwood Academic.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pohl, Gerhart (1962). Gerhart Hauptmann and Silesia. Grand Forks: University of North Dakota Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shaw, Leroy R. (1958). Witness of Deceit. Gerhart Hauptmann as Critic of Society. Berkeley: University of California Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Skrine, Peter N. (1989). Hauptmann, Wedekind, and Schnitzler. New York: St. Martin\'s Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Downs, Brian W. (1926). "Gerhart Hauptmann," The North American Review, Vol. 223, No. 830, pp.&#160;102–115.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dukes, Ashley (1911). Modern Dramatists. London: Frank Palmer.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dussère, Carolyn (1980). "An Interpretation of Gerhart Hauptmann\'s \'Parsival\'," Colloquia Germanica, Vol. 13, No. 3, pp.&#160;233–245.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Campbell, T.M. (1924). "Gerhart Hauptmann—Christian or Pagan?," The Modern Language Journal, Vol. 8, No. 6, pp.&#160;353–361.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Coates, William Ames (1945). "Dostoyevski and Gerhart Hauptmann," The American Slavic and East European Review, Vol. 4, No. 3/4, pp.&#160;107–127.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ewen, David (1935). "Conversations with Gerhart Hauptmann," Books Abroad, Vol. 9, No. 3, pp.&#160;253–254.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hale, Edward Everett (1905). "Hauptmann." In: Dramatists of Today. New York: Henry Holt &amp; Company, pp.&#160;37–61.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heller, Otto (1905). "Gerhart Hauptmann." In: Studies in Modern German Literature. Boston: Ginn &amp; Company, pp.&#160;117–128.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heuser, F.W.J.(1926). "Hauptmann and Novalis," Germanic Review, Vol. 1, pp.&#160;125–131.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Huneker, James (1919). "Gerhart Hauptmann." In: Iconoclasts. New York: Charles Scribner\'s Sons, pp.&#160;182–210.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kobbé, Gustav (1898). "The Dramas of Gerhart Hauptmann," The Forum, Vol. 24, pp.&#160;432–441.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lewisohn, Ludwig (1912). "Introduction." In: The Dramatic Works, Vol. 1. London: Martin Secker, pp. ix–xxxvii.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maurer, Warren R. (1979). "Gerhart Hauptmann\'s Character Names," The German Quarterly, Vol. 52, No. 4, pp.&#160;457–471.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Muller, Siegfried H. (1952). "Gerhart Hauptmann\'s Relation to American Literature and His Concept of America," Monatshefte, Vol. 44, No. 7, pp.&#160;333–339.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reichart, Walter A. (1946). "The Totality of Hauptmann\'s Work," Germanic Review, Vol. 21, pp.&#160;143–149.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reichart, Walter A. (1962). "Hauptmann Study in America: A Continuation Bibliography," Monatshefte, Vol. 54, No. 6, pp.&#160;297–310.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson, John G. (1902). A History of German Literature. New York: G.P. Putnam\'s Sons.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scholz, Karl W.H. (1918). The Art of Translation. Philadelphia: Americana Germanica Press.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thompson, Nesta M. (1920). "Naturalism and the Dream Motive as Observed in the Works of Gerhart Hauptmann," Washington University Studies, Vol. 8, pp.&#160;77–101.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wahr, F.B. (1946). "Hauptmann\'s Hellenism," Journal of English and Germanic Philology, Vol. 33, pp.&#160;421–451.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Witkowski, Georg (1909). The German Drama of the Nineteenth-century. London: George Bell &amp; Sons.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Youngman, Paul A. (2005). "Gerhart Hauptmann." In: Black Devil and Iron Angel. The Railway in Nineteenth-century German Realism. Washington, D.C.: Catholic University of America Press, pp.&#160;109–127.','Gerhart_Hauptmann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Primico, 1977','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Noukadubi (1947 film)– Nitin Bose','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kabuliwala – 1957 (Kabuliwala) – Tapan Sinha','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Noukadubi (2011 film) - 2011 (Noukadubi) - Rituparno Ghosh','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kabuliwala – 1961 (Kabuliwala) – Bimal Roy','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Tagore, Sir Rabindranath", in Webster\'s Biographical Dictionary (1943), Springfield, MA:  G. &amp; C. Merriam.','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ R. Siva Kumar (2011) The Last Harvest: Paintings of Rabindranath Tagore.','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nastanirh (1901)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chokher Bali (1902-1903)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Noukadubi (1906)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gora (1909)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ghare Baire (1916)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chaturanga (1916)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jogajog (1929)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shesher Kabita (1929)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bhanusimha Thakurer Padabali (1884)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gitanjali (1910)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Valmiki-Pratibha (1888)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Raja (1910)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Post Office (1912)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chitra (1913)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Natir Puja (1932 film)','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kabuliwala','Rabindranath_Tagore']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Hugh Rorrison, in Piscator (1929, 55–56).','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ John Cruickshank, "Rolland, Romain", in Anthony Thorlby (ed.), The Penguin Companion to Literature 2: European Literature. Harmondsworth: Penguin, 1969, p. 661.','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ William B. Parsons, The Enigma of the Oceanic Feeling: Revisioning the Psychoanalytic Theory of Mysticism (New York: Oxford University Press, 1999) 23, Questia, 2 Apr. 2007.','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ William B. Parsons, The Enigma of the Oceanic Feeling: Revisioning the Psychoanalytic Theory of Mysticism (New York: Oxford University Press, 1999) 19, Questia, 2 Apr. 2007.','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fisher, David James. Romain Rolland and the Politics of the Intellectual Engagement (2003)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zweig, Stephan.  Romain Rolland: The Man and His Work (1921) (online)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swami Vivekananda (1955)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bireswar Vivekananda (1964)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swami Vivekananda (1998)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swamiji (2012)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light: Swami Vivekananda (2013)','Romain_Rolland']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Från Col di Tenda till Blocksberg , pictures of travel (1888)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vallfart och vandringsår (1888)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Renässans (1889)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Endymion (1889, novel)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hans Alienus (1892)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dikter (1895)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karolinerna (The Charles Men, 1897–98, novel)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sankt Göran och draken (1900)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heliga Birgittas pilgrimsfärd (Saint Bridget\'s Pilgrimage, 1901)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ett folk  (1902)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Skogen susar (The Forest Whispers, 1904)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Folkungaträdet (The Tree of the Folkungs, 2 volumes, 1905–1907)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Svenskarna och deras hövdingar (1910, historical lectures)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nya Dikter (1915).','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A King and his Campaigners (1902)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Soothsayer (1919)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sweden\'s Laureate. Selected Poems of Verner Von Heidenstam (1919) - (trans. by Charles Wharton Stork)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Birth of God (1920)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Charles Men (1920) - (trans. by Charles Wharton Stork)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Swedes and their Chieftains (1925) - (trans. by Charles Wharton Stork)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tree of the Folkungs (1925)','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Stork, Charles Wharton (1916). "Verner von Heidenstam," The Nation, Vol. CIII, No. 2683, p. 509.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Warme, Lars G. (1996). A History of Swedish Literature. University of Nebraska Press, p. 276.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sohrabi, Bahram (2005). "Early Swedish Travelers to Persia," Iranian Studies 38 (4), pp. 631–660.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Facos, Michelle (1998). Nationalism and the Nordic Imagination: Swedish Art of the 1890s. University of California Press, p. 63.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Barton, H. Arnold (2002). "The Silver Age of Swedish National Romanticism, 1905-1920," Scandinavian Studies 74 (4), pp. 505–520.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gustafson, Alrik (1940). "Nationalism Reinterpeted: Verner von Heidenstam." In: Six Scandinavian Novelists. New York: Biblo &amp; Tannen, p. 169.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barton, Hildor Arnold (2003). Sweden and Visions of Norway: Politics and Culture, 1814-1905. SIU Press.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Larsson, Hans Emil (1909). "Swedish Literature," The Journal of English and Germanic Philology 8 (3), pp.&#160;313–329.','Verner_von_Heidenstam']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Georg Nørregård: Karl Gjellerup - en biografi, 1988 (in Danish)','Karl_Adolph_Gjellerup']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olaf C. Nybo: Karl Gjellerup - ein literarischer Grenzgänger des Fin-de-siècle, 2002 (in German)','Karl_Adolph_Gjellerup']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Article in Vilhelm Andersen: Illustreret dansk Litteraturhistorie, 1924-34 (in Danish)','Karl_Adolph_Gjellerup']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Article in Hakon Stangerup: Dansk litteraturhistorie, 1964-66 (in Danish)','Karl_Adolph_Gjellerup']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prometheus und Epimetheus (1881)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Extramundana  (1883, seven cosmic myths)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Schmetterlinge ("Butterflies", 1889)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Parlamentär (1889)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Literarische Gleichnisse ("Literary Parables”, 1892)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gustav (1892)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Balladen (1896)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Conrad der Leutnant (1898)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lachende Wahrheiten (1898, essays)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der olympische Frühling (1900–1905, revised 1910)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Glockenlieder ("Grass and Bell Songs", 1906)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imago (1906, novel)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Mädchenfeinde (Two Little Misogynists, 1907)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meine frühesten Erlebnisse ("My Earliest Experiences", 1914, biographical)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prometheus der Dulder ("Prometheus the Suffering”, 1924)','Carl_Spitteler']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marie Hamsun (1909-death)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1904 Sværmere (Mothwise, 1921), (Dreamers)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Knut Hamsun (1890). "Fra det ubevidste Sjæleliv", Samtiden, September 1890','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hal May, Contemporary Authors, Volum 119, Gale, 1986','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Isaac Bashevis Singer (1967). Introduction to Hunger','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Goebbels Diaries, 1942–1943, translated, edited, and introduced by Louis P. Lochner, 1948, pp. 303–304. Goebbels also claimed that "from childhood on he [Hamsun] has keenly disliked the English".','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Paul Knaplund, "Knut Hamsun: Triumph and Tragedy." Modern Age 9#2 (1965): 165+','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Thorkild Hansen, Prosessen mod Hamsun, 1978','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hunger (1890)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mysteries (1892)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pan (1894)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Victoria (1898)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Wonderland (1903)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreamers (1904)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Autumn Star (1906)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Benoni (1908)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rosa (1908)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Segelfoss Town (1915)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Growth of the Soil (1917)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Women at the Pump (1920)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wayfarers (1927)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['August (1930)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road Leads On (1933)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Ring is Closed (1936)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Overgrown Paths (1949)','Knut_Hamsun']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poèmes dorés (1873)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Noces corinthiennes (The Bride of Corinth) (1876)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jocaste et le chat maigre (Jocasta and the Famished Cat) (1879)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Crime de Sylvestre Bonnard (The Crime of Sylvestre Bonnard) (1881)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Désirs de Jean Servien (The Aspirations of Jean Servien) (1882)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Abeille (Honey-Bee) (1883)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Balthasar (1889)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thaïs (1890)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Étui de nacre (Mother of Pearl) (1892)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Rôtisserie de la reine Pédauque (At the Sign of the Reine Pédauque) (1892)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Opinions de Jérôme Coignard (The Opinions of Jerome Coignard) (1893)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Lys rouge (The Red Lily) (1894)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Puits de Sainte Claire (The Well of Saint Clare) (1895)','Anatole_France']);
     
//     db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Histoire contemporaine (A Chronicle of Our Own Times)
// 1: L\'Orme du mail (The Elm-Tree on the Mall)(1897)
// 2: Le Mannequin d\'osier (The Wicker-Work Woman) (1897)
// 3: L\'Anneau d\'améthyste (The Amethyst Ring) (1899)
// 4: Monsieur Bergeret à Paris (Monsieur Bergeret in Paris) (1901)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Clio (1900)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Histoire comique (A Mummer\'s Tale) (1903)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sur la pierre blanche (The White Stone) (1905)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Affaire Crainquebille (1901)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Île des Pingouins (Penguin Island) (1908)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Contes de Jacques Tournebroche (The Merrie Tales of Jacques Tournebroche) (1908)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Sept Femmes de Barbe bleue et autres contes merveilleux (The Seven Wives of Bluebeard and Other Marvelous Tales) (1909)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les dieux ont soif  (The Gods Are Athirst) (1912)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Révolte des anges (Revolt of the Angels) (1914)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1: L\'Orme du mail (The Elm-Tree on the Mall)(1897)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2: Le Mannequin d\'osier (The Wicker-Work Woman) (1897)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['3: L\'Anneau d\'améthyste (The Amethyst Ring) (1899)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['4: Monsieur Bergeret à Paris (Monsieur Bergeret in Paris) (1901)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Livre de mon ami (My Friend\'s Book) (1885)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pierre Nozière (1899)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Petit Pierre (Little Pierre) (1918)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Vie en fleur (The Bloom of Life) (1922)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Au petit bonheur (1898)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Crainquebille (1903)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Comédie de celui qui épousa une femme muette (The Man Who Married A Dumb Wife) (1908)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Mannequin d\'osier (The Wicker Woman) (1928)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vie de Jeanne d\'Arc (The Life of Joan of Arc) (1908)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alfred de Vigny (1869)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Château de Vaux-le-Vicomte (1888)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Génie Latin (The Latin Genius) (1909)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Jardin d\'Épicure (The Garden of Epicurus) (1895)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Opinions sociales (1902)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Parti noir (1904)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vers les temps meilleurs (1906)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sur la voie glorieuse (1915)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trente ans de vie sociale, in four volumes, (1949, 1953, 1964, 1973)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lahy-Hollebecque, M. (1924). Anatole France et la femme. Baudinière, 1924, 252 p.','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Crime of Sylvestre Bonnard (1881)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thaïs (1890)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['At the Sign of the Reine Pédauque (1892)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Penguin Island (1908)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gods Are Athirst (1912)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thaïs (1917, silent U.S.)','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thaïs (1894)"Méditation"','Anatole_France']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El nido ajeno (Another\'s Nest, 1894), comedy, three acts.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gente conocida (High Society, 1896), satirical scenes of modern life, four acts.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Gobernadora (The Governor\'s Wife, 1901), comedy, three acts.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La noche del sábado (Saturday Night, 1903), stage romance, five divisions; Imperia is a ballerina and later prostitute who falls in love with Prince Miguel, who will take the throne of Swabia.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rosas de otoño (Autumnal Roses, 1905), sentimental comedy, three acts.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Los intereses creados (The Bonds of Interest, 1907), comedy of masks based on the Italian commedia dell\'arte; Benavente\'s most famous and often performed work.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Señora ama (The Lady of the House, 1908), rural drama; a penetrating psychological study of a woman jealous of her husband.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Unloved Woman (La malquerida), 1913), rural psychological drama, three acts; the basis for the 1921 film The Passion Flower, starring Norma Talmadge.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La ciudad alegre y confiada (1916), continuation from Los intereses creados.','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Campo de armiño (1916)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lecciones de buen amor (1924)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La mariposa que voló sobre el mar (1926)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pepa Doncel (1928)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vidas cruzadas (1929)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aves y pájaros (1940)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La honradez de la cerradura (1942)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La infanzona (1945)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Titania (1946)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La infanzona (1947)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Abdicación (1948)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ha llegado Don Juan (1952)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El alfiler en la boca (1954)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hijos, padres de sus padres (Sons, Fathers of Their Parents, 1954)','Jacinto_Benavente']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jeffares, A. Norman. W. B. Yeats, Man and Poet. Palgrave Macmillan, 1996. 1','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Collected Poems (1994), vii','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ W. B. Yeats, Autobiographies (1956), p. 12.  London: Macmillan.','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gordon Bowe, Nicola. "Two Early Twentieth-Century Irish Arts and Crafts Workshops in Context". Journal of Design History, Vol. 2, No. 2/3 (1989). 193–206','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ellmann, Richard (1948). Yeats: The Man and the Masks. (New York) Macmillan. 94','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cullingford, Elizabeth. "How Jacques Molay Got Up the Tower: Yeats and the Irish Civil War". English Literary History, Vol. 50, No. 4, 1983, pp. 763–789','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Uddin Khan, Jalal. "Yeats and Maud Gonne: (Auto)biographical and Artistic Intersection". Alif: Journal of Comparative Poetics, 2002.','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Corcoran, Neil. After Yeats and Joyce: Reading Modern Irish Literature. Oxford University Press, 1997, p. viii','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sternlicht, Sanford V. A Reader\'s Guide to Modern Irish Drama, Syracuse University Press, 1998, p. 48','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gonne MacBride, Maud. A Servant of the Queen. Gollanz, 1938 pp. 287–289','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Foster (2003), p. 294','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Foster (2003), p. 333','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Allen, James Lovic. "\'Imitate Him If You Dare\': Relationships between the Epitaphs of Swift and Yeats". An Irish Quarterly Review, Vol. 70, No. 278/279, 1981, p. 177','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ulanov, Barry. Makers of the Modern Theater. McGraw-Hill, 1961','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gale Research International. Twentieth Century Literary Criticism, No. 116. Gale Cengage Learning, 2002, p. 303','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Finneran, Richard. Yeats: An Annual of Critical and Textual Studies 1995. University of Michigan Press, 1997. 82','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Logenbach, James. Stone Cottage: Pound, Yeats, and Modernism. Oxford University Press, 1988, pp. 13–14','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bell, Vereen. Yeats and the logic of formalism. University of Missouri Press, 2006. 132','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Seiden, Morton. William Butler Yeats. Michigan State University Press, 1962, p. 179','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Howes, Marjorie. Yeats\'s nations: gender, class, and Irishness. Cambridge University Press, 1998, pp. 28–31','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bloom, Harold. Yeats. Oxford University Press, 1972, p. 168 ISBN&#160;0-19-501603-3','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Spanos, William. ″Sacramental Imagery in the Middle and Late Poetry of W. B. Yeats.″ Texas Studies in Literature and Language. (1962) Vol. 4, No. 2. pp. 214-228.','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cleeve, Brian (1972). W. B. Yeats and the Designing of Ireland\'s Coinage. New York: Dolmen Press. ISBN&#160;0-85105-221-5','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hone, Joseph (1943). W. B. Yeats, 1865–1939. New York: Macmillan Publishers. OCLC&#160;35607726','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Igoe, Vivien (1994). A Literary Guide to Dublin. Methuen Publishing. ISBN&#160;0-413-69120-9','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jordan Anthony J. (1997). Willie Yeats &amp; The Gonne-MacBrides. Westport Books ISBN&#160;0-9524447-1-2','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jordan, Anthony J. (2000). The Yeats Gonne MacBride Triangle. Westport Books ISBN&#160;0-9524447-4-7','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jordan, Anthony J. (2003). W. B. Yeats: Vain, Glorious, Lout – A Maker of Modern Ireland. Westport Books. ISBN&#160;0-9524447-2-0','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jordan, Anthony J. (2013). Arthur Griffith with James Joyce &amp; WB Yeats – Liberating Ireland Westport Books. ISBN&#160;978-0-9576229-0-6.','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Longenbach, James (1988). Stone Cottage: Pound, Yeats, and Modernism. Oxford University Press. ISBN&#160;0-19-506662-6','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ryan, Philip B. (1998). The Lost Theatres of Dublin. Wiltshire: The Badger Press. ISBN&#160;0-9526076-1-1','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yeats, W. B. (1994). The Collected Poems of W. B. Yeats. Wordsworth Poetry Library. ISBN&#160;1-85326-454-7','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yeats, W. B. (1900). "The Philosophy of Shelley\'s Poetry", in Essays and Introductions, 1961. New York: Macmillan Publishers. OCLC&#160;362823','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yeats and Irish Politics, BBC Radio 4 discussion with Roy Foster, Fran Brearton &amp; Warwick Gould (In Our Time, Apr. 17, 2008)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wanderings of Oisin and Other Poems (1889)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Countess Kathleen and Various Legends and Lyrics (1892)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Seven Woods (1903)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Responsibilities and Other Poems (1916)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wild Swans at Coole (1919)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Robartes and the Dancer (1921)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tower (1928)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Winding Stair and Other Poems (1933)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mosada (1886)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Land of Heart\'s Desire (1894)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diarmuid and Grania (1901)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cathleen ni Houlihan (1902)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Baile\'s Strand (1903)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Countess Cathleen (1911)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['At the Hawk\'s Well (1916)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Resurrection (1927)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Purgatory (1938)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Vision (1925)','W._B._Yeats']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Komediantka (The Deceiver, 1896)','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fermenty (Ferments, 1897)','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ziemia obiecana (The Promised Land, 1898)','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chłopi (The Peasants, 1904–1909), Nobel Prize for Literature, 1924','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marzyciel (The Dreamer, 1910),','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wampir – powieść grozy (The Vampire, 1911)','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bunt (The Revolt, 1924)','W%C5%82adys%C5%82aw_Reymont']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Nobel Prize Biography on Shaw, From Nobel Lectures, Literature 1901–1967, Editor Horst Frenz, Elsevier Publishing Company, Amsterdam, (1969).','George_Bernard_Shaw']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stella d\'Oriente (1890)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nell\'azzuro (1890)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fior di Sardegna (1891)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Racconti sardi (1894)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tradizioni popolari di Nuoro in Sardegna (1894)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La via del male (1896)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anime oneste (1895)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paesaggi sardi (1897)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La tentazioni (1899)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il tesoro (1897)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'ospite (1897)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La giustizia (1899)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nostra Signora del buon consiglio: leggenda sarda (1899)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le disgrazie che può causare il denaro (1899)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il Vecchio della montagna (1900)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dopo il divorzio (1902; English translation: After the divorce, 1995)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La regina delle tenebre (1902)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elias Portolu (1900)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cenere (1904; English translation: Ashes, 1908)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Odio Vince (1904)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nostalgie (1905)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I giuochi della vita (1905)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'ombra del passato (1907)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Amori moderni (1907)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'edera (1908)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il nonno (1908)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il nostro padrone (1910)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sino al confine (1910)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nel deserto (1911)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'edera: dramma in tre atti (1912)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colombi e sparvieri (1912)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chiaroscuro (1912)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Canne al vento (1913), Reeds in the Wind (1999 English translation by Martha King)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le colpe altrui (1914)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marianna Sirca (1915)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il fanciullo nascosto (1915)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'incendio nell\'oliveto (1918)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il ritorno del figlio (1919)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Naufraghi in porto (1920)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il segreto dell\'uomo solitario (1921)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cattive compagnie: novelle (1921)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La grazia (1921)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il Dio dei viventi (1922)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Silvio Pellico (1923)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il flauto nel bosco (1923)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La danza della collana; A sinistra (1924)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La fuga in Egitto (1925)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il sigillo d\'amore (1926)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Annalena Bilsini (1927)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il vecchio e i fanciulli (1928)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il dono di natale (1930)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La casa del poeta (1930)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eugenia Grandet, Onorato di Balzac (1930)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il libro della terza classe elementare: letture, religione, storia, geografia, aritmetica (1931)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Giaffa: racconti per ragazzi (1931)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il paese del vento (1931)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sole d\'estate (1933)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'argine (1934)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La chiesa della solitudine (1936)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Church of Solitude (University of New York Press, 2002)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cosima (1937) published posthumously, (1999) English translation by Martha King','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il cedro del Libano (1939) published posthumously','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grazia Deledda: premio Nobel per la letteratura 1926 (1966)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Opere scelte (1968)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letter inedite di Grazia Deledda ad Arturo Giordano direttore della rivista letteraria (Alchero: Nemaprress, 2004)','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Attilio Momigliano, Intorno a Grazia Deledda, in Ultimi studi, Firenze, La Nuova Italia, 1954.','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Emilio Cecchi, Grazia Deledda, in Prosatori e narratori, in Storia della letteratura italiana, Il Novecento, Milano, Garzanti, 1967.','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Antonio Piromalli, Grazia Deledda, Firenze, La Nuova Italia, 1968.','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Natalino Sapegno, Prefazione a Romanzi e novelle, Milano, Mondadori, 1972.','Grazia_Deledda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bergson, H.; The Philosophy of Poetry: The Genius of Lucretius (La Philosophie de la Poesie: le Génie de Lucrèce, 1884), Philosophical Library 1959: ISBN&#160;978-1-4976-7566-7','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bergson, H.; Mind-energy (L\'Énergie spirituelle, 1919). McMillan 1920. – a collection of essays and lectures. On Archive.org.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bergson, H.; Duration and Simultaneity: Bergson and the Einsteinian Universe (Durée et simultanéité, 1922). Clinamen Press Ltd 1999. ISBN&#160;1-903083-01-X.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ John Ó Maoilearca, Beth Lord (eds.), The Continuum Companion to Continental Philosophy, Bloomsbury Academic, 2009, p. 204.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ R. William Rauch, Politics and Belief in Contemporary France: Emmanuel Mounier and Christian Democracy, 1932–1950, Springer, 2012, p. 67.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Suzanne Guerlac, Thinking in Time: An Introduction to Henri Bergson, Ithaca, NY: Cornell University Press, 2007, p. 9.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Henri Hude, Bergson, Paris, Editions Universitaires, 1990, 2 volumes, quoted by Anne Fagot-Largeau in her 21 December 2006 course at the College of France','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Henri Bergson: Key Writings, ed. Keith Ansell Pearson and John Mullarkey. London: Continuum, 2002, p. ix.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Seth Benedict Graham A CULTURAL ANALYSIS OF THE RUSSO-SOVIET ANEKDOT, 2003, p. 2','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Canales J., The Physicist and the Philosopher: Einstein, Bergson and the Debate That Changed Our Understanding of Time, Princeton, Princeton Press, 2015.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Suzanne Guerlac, Thinking in Time: An Introduction to Henri Bergson, Ithaca, NY: Cornell University Press, 2006, p. 10','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dermot Moran, Introduction to Phenomenology, 2000, pp. 322 and 393.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Peter Bien, Three Generations of Greek Writers, Published by Efstathiadis Group, Athens, 1983','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wyndham Lewis, Time and Western Man (1927), ed. Paul Edwards, Santa Rosa, CA: Black Sparrow, 1993.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The Irrational Element in Poetry." 1936. Opus Posthumous. 1957. Ed. Milton J. Bates. New York: Random House, 1990.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Suzanne Guerlac, Thinking in Time: An Introduction to Henri Bergson, Ithaca, NY: Cornell University Press, 2006, p. 175.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bachelard, Gaston. The Dialectic of Duration. Trans. Mary Mcallester Jones. Manchester: Clinamen Press, 2000.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bianco, Giuseppe. Après Bergson. Portrait de groupe avec philosophe. Paris, PUF, 2015.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Deleuze, Gilles.  Bergsonism.  Trans. Hugh Tomlinson and Barbara Habberjam.  New York: Zone Books, 1988.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Deleuze, Gilles.  Cinema 1: The Movement-Image.  Trans. Hugh Tomlinson and Barbara Habberjam.  Minneapolis: University of Minnesota Press, 1986.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guerlac, Suzanne.  Thinking in Time: An Introduction to Henri Bergson.  Ithaca, NY: Cornell University Press, 2006.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Horkheimer, Max.  "On Bergson\'s Metaphysics of Time."  Trans. Peter Thomas, revised by Stewart Martin.  Radical Philosophy 131 (2005) 9–19.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James, William.  "Bergson and his Critique of Intellectualism."  In A Pluralistic Universe.  Lincoln, NE: University of Nebraska Press, 1996.  223–74.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mullarkey, John, ed.  The New Bergson.  Manchester and New York: Manchester University Press, 1999.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Russell, Bertrand "The Philosophy of Bergson". The Monist 22 (1912): 321–47.','Henri_Bergson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ken Kesey\'s novel, Sometimes a Great Notion (1964), character Indian Jenny purchases a Thomas Mann novel and tries to find out "... just where was this mountain full of magic..." (p.&#160;578).','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Woody Allen\'s film Annie Hall (1977).','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander McCall Smith\'s novel Portuguese Irregular Verbs (1997) has a final chapter entitled "Death in Venice" and refers to Thomas Mann by name in that chapter.','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Roth\'s novel The Human Stain (2000).','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1947: Essays of Three Decades, translated from the German by H. T. Lowe-Porter. [1st American ed.], New York, A. A. Knopf, 1947. Reprinted as Vintage book, K55, New York, Vintage Books, 1957.','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Robertson, Ritchie (ed.) (2002). The Cambridge Companion to Thomas Mann. Cambridge University Press. p. 5.','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mundt, Hannelore (2004) Understanding Thomas Mann, University of South Caroline Press.','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Mauthner – German Writers in French Exile 1933–1940 (London, 2007).','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Horton – Thomas Mann in English: A Study in Literary Translation (London, New Delhi, New York, Sydney, 2013)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Déjeuner sur l’herbe (1862-63)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olympia (1863)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Sunday Afternoon on the Island of La Grande Jatte (1886)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mont Sainte-Victoir (1887)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Starry Night (1889)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ubu Roi (1896)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Verklärte Nacht (1899)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le bonheur de vivre (1905-1906)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Demoiselles d\'Avignon (1907)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dance (1909-10)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Firebird (1910)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Afternoon of a Faun (1912)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nude Descending a Staircase, No. 2 (1912)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rite of Spring (1913)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Search of Lost Time (1913–1927)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Metamorphosis (1915)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Black Square (1915)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fountain (1917)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cabinet of Dr. Caligari (1920)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Six Characters in Search of an Author (1921)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ulysses (1922)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waste Land (1922)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Mountain (1924)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Battleship Potemkin (1925)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sun Also Rises (1926)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Threepenny Opera (1928)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sound and the Fury (1929)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Un Chien Andalou (1929)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Lotus (1936)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Waiting for Godot (1953)','Thomas_Mann']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['7.2 Short stories 7.2.1 The Short Stories of Sinclair Lewis (1904–1949)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['7.2.1 The Short Stories of Sinclair Lewis (1904–1949)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: Free AirSerialized in The Saturday Evening Post, May 31, June 7, June 14 and 21, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1926: MantrapSerialized in Collier\'s, February 20, March 20 and April 24, 1926','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1911: "The Way to Rome", The Bellman, May 13, 1911','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1915: "Commutation: $9.17", The Saturday Evening Post, October 30, 1915','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1915: "The Other Side of the House", The Saturday Evening Post, November 27, 1915','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1916: "If I Were Boss", The Saturday Evening Post, January 1 and 8, 1916','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "Twenty-Four Hours in June", The Saturday Evening Post, February 17, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "A Story with a Happy Ending", The Saturday Evening Post, March 17, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "Hobohemia", The Saturday Evening Post, April 7, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "The Ghost Patrol", The Red Book Magazine, June 1917Adapted for the silent film The Ghost Patrol (1923)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "A Woman by Candlelight", The Saturday Evening Post, July 28, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "The Whisperer", The Saturday Evening Post, August 11, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1917: "Joy-Joy", The Saturday Evening Post, October 20, 1917','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1918: "An Invitation to Tea", Every Week, June 1, 1918','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1918: "The Shadowy Glass", The Saturday Evening Post, June 22, 1918','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1918: "The Willow Walk", The Saturday Evening Post, August 10, 1918','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1918: "The Swept Hearth", The Saturday Evening Post, September 21, 1918','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1918: "Gladvertising", The Popular Magazine, October 7, 1918','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Moths in the Arc Light", The Saturday Evening Post, January 11, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "The Shrinking Violet", The Saturday Evening Post, February 15, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Things", The Saturday Evening Post, February 22, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "The Cat of the Stars", The Saturday Evening Post, April 19, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "The Watcher Across the Road", The Saturday Evening Post, May 24, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "The Enchanted Hour", The Saturday Evening Post, August 9, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Danger — Run Slow", The Saturday Evening Post, October 18 and 25, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Bronze Bars", The Saturday Evening Post, December 13, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1920: "Habaes Corpus", The Saturday Evening Post, January 24, 1920','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1920: "Way I See It", The Saturday Evening Post, May 29, 1920','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1920: "The Good Sport", The Saturday Evening Post, December 11, 1920','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1923: "The Hack Driver", The Nation, August 29, 1923','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1930: "Little Bear Bongo", Cosmopolitan, September 1930Adapted for the animated feature film Fun and Fancy Free (1947)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1931: "Ring Around a Rosy", The Saturday Evening Post, June 6, 1931','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1931: "Land", The Saturday Evening Post, September 12, 1931','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1931: "Dollar Chasers", The Saturday Evening Post, October 17 and 24, 1931','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1935: "Proper Gander", The Saturday Evening Post, July 13, 1935','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1941: "They Had Magic Then!", Liberty, September 6, 1941','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1915: "Nature, Inc.", The Saturday Evening Post, October 2, 1915','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Adventures in Autobumming: Gasoline Gypsies", The Saturday Evening Post, December 20, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1919: "Adventures in Autobumming: Want a Lift?", The Saturday Evening Post, December 27, 1919','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1920: "Adventures in Autobumming: The Great American Frying Pan", The Saturday Evening Post, January 3, 1920','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1938: Angela Is Twenty-Two (with Fay Wray)Adapted for the feature film This Is the Life (1944)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1952: From Main Street to Stockholm: Letters of Sinclair Lewis, 1919–1930 (edited by Alfred Harcourt and Oliver Harrison)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1953: A Sinclair Lewis Reader: Selected Essays and Other Writings, 1904–1950 (edited by Harry E. Maule and Melville Cane)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2000: Minnesota Diary, 1942–46 (edited by George Killough)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bode, Carl (1969) Mencken. Carbondale, Illinois: Southern Illinois University Press. p. 166.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Acheson, Dean (1962). Morning and Noon, Houghton Mifflin Company, Boston. p. 44.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lewis, Sinclair (September 23, 1929), "Thoughts on Vermont", Vermont Weathervane; talk given to the Rutland, Vt. Rotary.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Dodsworth (1936)", Time, February 12, 2005. Retrieved June 30, 2010.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Miscellania", Sinclair Lewis Manuscripts, Port Washington Public Library. Retrieved June 30, 2010.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Chamberlain, John (October 7, 1943) "Books of the Times". Review of See What I Mean? by Lewis Browne. The New York Times.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b William L. Shirer, 20th Century Journey: A Memoir of a Life and the Times vol. 1: The Start: 1904–1930 (NY: Bantam Books, 1980) 458-9','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lingeman, Richard R. (2002) Sinclair Lewis: Rebel From Main Street. New York: Borealis Books. ISBN&#160;0873515412','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pastore, Stephen R. (1997) Sinclair Lewis: A Descriptive Bibliography. New Haven, YALEbooks. ISBN&#160;0965627500','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Schorer, Mark. (1961) Sinclair Lewis: An American Life.  New York: McGraw-Hill, 1961.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['D. J. Dooley, The Art of Sinclair Lewis, 1967.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Light, The Quixotic Vision of Sinclair Lewis, 1975.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sinclair Lewis at 100: Papers Presented at a Centennial Conference, 1985.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Bucco, Main Street: The Revolt of Carol Kennicott, 1993.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James M. Hutchisson, The Rise of Sinclair Lewis, 1920–1930, 1996.','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Short Stories of Sinclair Lewis (1904–1949)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','Sinclair_Lewis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Salvation of a Forsyte (The Salvation of Swithin Forsyte) (1900)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Forsyte \'Change (1930) (re-published 1986 as "Uncollected Forsyte")','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Danaë (1905-6) in Forsytes, Pendyces, and Others (1935)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man of Property (1906) – first book of The Forsyte Saga (1922)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Indian Summer of a Forsyte" (1918) – first interlude of The Forsyte Saga','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Chancery (1920) – second book of The Forsyte Saga','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Awakening" (1920) – second interlude of The Forsyte Saga','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Let (1921) – third book of The Forsyte Saga','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The White Monkey (1924) – first book of A Modern Comedy (1929)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Silver Spoon (1926) – second book of A Modern Comedy','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"A Silent Wooing" (1927) – first Interlude of A Modern Comedy','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Passers-By" (1927) – second Interlude of A Modern Comedy','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swan Song (1928) – third book of A Modern Comedy','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Four Forsyte Stories (1929) - "A Sad Affair", "Dog at Timothy\'s", "The Hondekoeter" and "Midsummer Madness"','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maid in Waiting (1931) – first book of End of the Chapter (1934)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flowering Wilderness (1932) – second book of End of the Chapter','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One More River (originally Over the River) (1933) – third book of End of the Chapter','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From the Four Winds, 1897 (as John Sinjohn)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jocelyn, 1898 (as John Sinjohn)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Villa Rubein, 1900 (as John Sinjohn)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Man of Devon, 1901 (as John Sinjohn)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Island Pharisees, 1904','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Silver Box, 1906 (his first play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Country House, 1907','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Commentary, 1908','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fraternity, 1909','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Justification for the Censorship of Plays, 1909','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strife, 1909 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joy, 1909 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Justice, 1910 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Motley, 1910','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spirit of Punishment, 1910','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Horses in Mines, 1910','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Patrician, 1911','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Little Dream, 1911','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pigeon, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eldest Son, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quality, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Moods, Songs, and Doggerels, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For Love of Beasts, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Inn of Tranquillity, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Addresses in America, 1912','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dark Flower, 1913','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fugitive, 1913','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mob, 1914','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Freelands, 1915','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Little Man, 1915','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bit o\' Love, 1915','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Sheaf, 1916','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond, 1917','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Five Tales, 1918 (Contents: "The First and Last," "A Stoic," "The Apple Tree," "The Juryman," and "Indian Summer of a Forsyte" (the first interlude of The Forsyte Saga)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saint\'s Progress, 1919','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Foundations, 1920','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Skin Game, 1920 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Family Man, 1922','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loyalties, 1922 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Windows, 1922','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Captures, 1923','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Abracadabra, 1924','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forest, 1924','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old English, 1924','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Show, 1925','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Escape, 1926 (a play)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Verses New and Old, 1926','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Castles in Spain, 1927','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Manaton Edition, 1923–26 (collection, 30 vols.)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Exiled, 1929','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Roof, 1929','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Two Essays on Conrad, 1930','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soames and the Flag, 1930','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Creation of Character in Literature, 1931 (The Romanes Lecture for 1931).','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Forty Poems, 1932','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Autobiographical Letters of Galsworthy: A Correspondence with Frank Harris, 1933','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grove Edition, 1927–34 (collection, 27 Vols.)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems, 1934','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Punch and Go, 1935','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Life and Letters, 1935','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Winter Garden, 1935','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Forsytes, Pendyces and Others, 1935','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Short Stories, 1935','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Glimpses and Reflections, 1937','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Galsworthy\'s Letters to Leon Lion, 1968','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letters from John Galsworthy 1900–1932, 1970','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Oxford University Calendar 1895, Oxford: Clarendon Press, 1895, 262','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forsyte Saga (1906–21, 1922)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Silver Box (1906)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strife (1909)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Justice (1910)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Apple Tree (1916)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First and the Last (1919)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Skin Game (1920)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loyalties (1922)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Escape (1926)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['That Forsyte Woman (1949)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forsyte Saga (1967)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forsyte Saga (2002)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forsyte Saga: To Let (2003)','John_Galsworthy']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Life of Arseniev (Жизнь Арсеньева, 1927–1933, 1939)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Village (Деревня, 1910)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dry Valley (Суходол, 1912)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mitya\'s Love (Митина любовь, 1924)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To the Edge of the World and Other Stories (На край света и другие рассказы, 1897)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flowers of the Field (Цветы полевые, 1901)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bird\'s Shadow (Тень птицы, 1907–1911; Paris, 1931)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ioann the Mourner (Иоанн Рыдалец, 1913)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chalice of Life (Чаша жизни, Petersburg, 1915; Paris, 1922)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gentleman from San Francisco (Господин из Сан-Франциско, 1916)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chang\'s Dreams (Сны Чанга, 1916, 1918)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Temple of the Sun (Храм Солнца, 1917)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Primal Love (Начальная любовь, Prague, 1921)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scream (Крик, Paris, 1921)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rose of Jerico (Роза Иерихона, Berlin, 1924)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mitya\'s Love (Митина любовь, Paris, 1924; New York, 1953)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sunstroke (Солнечный удар, Paris, 1927)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sacred Tree (Божье древо, Paris, 1931)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dark Avenues (Тёмные аллеи, New York, 1943; Paris, 1946)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Judea in Spring (Весной в Иудее, New York, 1953)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loopy Ears and Other Stories (Петлистые уши и другие рассказы, 1954, New York, posthumous)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1887–1891) (1891, originally as a literary supplement to Orlovsky vestnik newspaper)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Open Skies (Под открытым небом, 1898)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Falling Leaves  (Листопад, Moscow, 1901)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1903) (Стихотворения, 1903)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1903–1906) (Стихотворения, 1906)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems of 1907 (Saint Petersburg, 1908)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems (Paris, 1929)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henry Wadsworth Longfellow. The Song of Hiawatha (1898)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Waters Aplenty (Воды многие, 1910, 1926)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cursed Days (Окаянные дни, 1925–1926)&#91;63&#93;','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Stefan Berger &amp; Alexei Miller, Nationalizing Empires, Central European University Press (2015), p. 312','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b The Works by I.A.Bunin. Vol.II. Novellas and short stories, 1892–1909. Khudozhestvennaya Literatura, 1965. Commentaries. p. 479.','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivan Bunin, Cursed Days: A Diary of Revolution, Ivan R. Dee, 1998. Page x.','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Vestnik, Toronto, 1955, 20 July.','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Zhukov, Yuri. The West After the War. Oktyabr magazine, 1947, No. 10, pp. 130–131.','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Tvardovsky, Alexander. The Works by I.I.Bunin. Vol.I. Poems, 1892–1916. Foreword. P.2–59.','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Gaiton Marullo. Ivan Bunin: Russian Requiem, 1885–1920: A Portrait from Letters, Diaries, and Fiction (1993, Vol.1)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Gaiton Marullo. From the Other Shore, 1920–1933: A Portrait from Letters, Diaries, and Fiction. (1995, Vol.2)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Gaiton Marullo. Ivan Bunin: The Twilight of Emigre Russia, 1934–1953: A Portrait from Letters, Diaries, and Memoirs. (2002, Vol.3)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meliton (1901)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In August (1901)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreams (1904)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Village (1910)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dry Valley (1912)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gentleman from San Francisco (1916)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loopy Ears (1917)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mitya\'s Love (1924)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Life of Arseniev (1927–33)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bird\'s Shadow (1931)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dark Avenues (1943)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cursed Days (1925–26)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['About Chekhov (1955)','Ivan_Bunin']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late Mattia Pascal (1904)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Six Characters in Search of an Author (1921)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henry IV (1922)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One, No One and One Hundred Thousand (1926)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1894: Pier Gudrò, 1809–1892','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1895: Elegie renane, 1889–90 (Rheinland Elegies)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il crollo, directed by Mario Gargiulo (Italy, 1920, based on the play Lumie di Sicilia)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il lume dell\'altra casa, directed by Ugo Gracci (Italy, 1920, based on the short story Il lume dell\'altra casa)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Voyage, directed by Gennaro Righelli (Italy, 1921, based on the short story Il viaggio)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Feu Mathias Pascal, directed by Marcel L\'Herbier (France, 1925, based on the novel Il fu Mattia Pascal)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Flight in the Night, directed by Amleto Palermi (Germany, 1926, based on the play Enrico IV)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['As You Desire Me, directed by George Fitzmaurice (1932, based on the play Come tu mi vuoi)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steel, directed by Walter Ruttmann (Italy, 1933, based on the story Giuoca, Pietro!)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['This Love of Ours, directed by William Dieterle (1945, based on the play Come prima, meglio di prima)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Man, Beast and Virtue, directed by Steno (Italy, 1953, based on the play L\'uomo, la bestia e la virtù)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vestire gli ignudi, directed by Marcello Pagliero (Italy, 1954, based on the play Vestire gli ignudi)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Never Say Goodbye, directed by Jerry Hopper (1956, based on the play Come prima, meglio di prima)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Liolà, directed by Alessandro Blasetti (Italy, 1963, based on the play Liolà)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Voyage, directed by Vittorio De Sica (Italy, 1974, based on the short story Il viaggio)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Il turno, directed by Tonino Cervi (Italy, 1981, based on the novel Il turno)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henry IV, directed by Marco Bellocchio (Italy, 1984, based on the play Enrico IV)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kaos, directed by Paolo and Vittorio Taviani (Italy, 1984, based on four short stories)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Two Lives of Mattia Pascal, directed by Mario Monicelli (Italy, 1985, based on the novel Il fu Mattia Pascal)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['You Laugh, directed by Paolo and Vittorio Taviani (Italy, 1998, based on two short stories)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Nanny, directed by Marco Bellocchio (Italy, 1999, based on the short story La balia)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Choice, directed by Michele Placido (Italy, 2015, based on the play L\'innesto)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wait, directed by Piero Messina (Italy, 2015, based on the play La vita che ti diedi)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Dernière berceuse, directed by Gennaro Righelli and Jean Cassagne (France, 1931, based on the short story In silenzio)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Former Mattia Pascal, directed by Pierre Chenal (Italy, 1937, based on the novel Il fu Mattia Pascal)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Chiesa, Adolfo (1990) La satira politica in Italia: con un\'intervista a Tullio Pericoli, p.38','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Luigi Pirandello, Selected Poems of Luigi Pirandello, translated by George Hochfield (New York: Italica Press, 2016).','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Giudice, Gaspare. Luigi Pirandello, UTET, 1963.','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mirella Maugeri Salerno, Pirandello e dintorni, Giuseppe Maimone Editore, Catania, 1987.','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elio Providenti (a cura di), Archeologie pirandelliane, Giuseppe Maimone Editore, Catania, 1990.','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Feu Mathias Pascal (1925)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man from Nowhere (1937 French)/The Former Mattia Pascal (1937 Italian)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Two Lives of Mattia Pascal (1985)','Luigi_Pirandello']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bread and Butter, 1914','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Servitude, 1914','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Personal Equation, 1915','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now I Ask You, 1916','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond the Horizon, 1918 - Pulitzer Prize, 1920','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Straw, 1919','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chris Christophersen, 1919','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gold, 1920','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Christie, 1920 - Pulitzer Prize, 1922','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Emperor Jones, 1920','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diff\'rent, 1921','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Man, 1922','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hairy Ape, 1922','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fountain, 1923','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marco Millions, 1923–25','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All God\'s Chillun Got Wings, 1924','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Welded, 1924','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Desire Under the Elms, 1924','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lazarus Laughed, 1925–26','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Great God Brown, 1926','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strange Interlude, 1928 - Pulitzer Prize','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dynamo, 1929','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mourning Becomes Electra, 1931','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ah, Wilderness!, 1933','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Days Without End, 1933','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bound East for Cardiff, 1914','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Zone, 1917','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Long Voyage Home, 1917','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Moon of the Caribbees, 1918','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Wife for a Life, 1913','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Web, 1913','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thirst, 1913','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Recklessness, 1913','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Warnings, 1913','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fog, 1914','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Abortion, 1914','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Movie Man:  A Comedy, 1914&#91;3&#93;&#91;26&#93;','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sniper, 1915','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Before Breakfast, 1916','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ile, 1917','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rope, 1918','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shell Shock, 1918','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dreamy Kid, 1918','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Where the Cross Is Made, 1918','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Will and Testament of an Extremely Distinguished Dog, 1940. Written to comfort Carlotta as their "child" Blemie was approaching his death in December 1940.&#91;28&#93;','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Harold Bloom (2007). Introduction. In: Bloom (Ed.), Tennessee Williams, updated edition. Infobase Publishing. p. 2.','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The New York Times, August 25, 2003: \'Next year Playwrights Theater will present an unproduced O\'Neill comedy, Now I Ask You, a comic spin on Ibsen\'s Hedda Gabler."','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Haunted by Eugene O\'Neill—Article in BU Today, Sept. 29, 2009','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Zone (1917)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond the Horizon (1918)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Christie (1920)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Emperor Jones (1920)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hairy Ape (1922)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All God\'s Chillun Got Wings (1924)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Desire Under the Elms (1925)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lazarus Laughed (1925–26)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Great God Brown (1926)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strange Interlude (1928)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dynamo (1929)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mourning Becomes Electra (1931)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ah, Wilderness! (1933)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Iceman Cometh (1939)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hughie (1941)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Long Day\'s Journey into Night (1941)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Moon for the Misbegotten (1943)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Touch of the Poet (1942)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Christie (1923 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Christie (1930 English-language film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Christie (1930 German-language film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['New Girl in Town (1957 musical)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Emperor Jones (1933 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Emperor Jones (1933 opera)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Emperor Jones (1955 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mourning Becomes Electra (1947 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mourning Becomes Electra (1967 opera)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ah, Wilderness! (1935 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Summer Holiday (1948 musical film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Take Me Along (1959 musical)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Iceman Cometh (1973 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Long Day\'s Journey into Night (1962 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Long Day\'s Journey into Night (1973 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Long Day\'s Journey into Night (1996 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strange Interlude (1932 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Long Voyage Home (1940 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reds (1981 film)','Eugene_O%27Neill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Devenir ! (1908)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jean Barois (1913)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Thibault (1922–1940) (translated as The Thibaults and Summer 1914)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vieille France (1933) (translated as The Postman)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notes sur André Gide (1951)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Souvenirs du lieutenant-colonel de Maumort (English: Lieutenant-Colonel de Maumort) (1983)','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Claude Sicard, Roger Martin Du Gard. Les années d\'apprentissage littéraire (1881-1910), Champion, 1976.','Roger_Martin_du_Gard']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bridge For Passing (New York: John Day, 1962)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Exile (1936)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fighting Angel (1936)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East Wind:West Wind (1930)&#91;38&#93;','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The House of Earth The Good Earth (1931) Sons (1933) A House Divided (1935)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Young Revolutionist (1932)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mother (1933)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All Men Are Brothers (1933), a translation of the Chinese classical prose epic Water Margin.','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['This Proud Heart (1938)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Patriot (1939)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Other Gods (1940)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['China Sky (1941)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon Seed (1942)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Promise (1943)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['China Flight (1943)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Townsman (1945) – as John Sedges','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Portrait of a Marriage (1945)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pavilion of Women (1946)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Angry Wife (1947) – as John Sedges','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peony (1948)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Wave (1948)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Long Love (1949) – as John Sedges','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bondmaid (1949), first published in Great Britain','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kinfolk (1950)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['God\'s Men (1951)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hidden Flower (1952)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Come, My Beloved (1953)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Voices in the House (1953) – as John Sedges','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beech Tree (1954) A Children\'s story','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imperial Woman (1956)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from Peking (1957)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Command the Morning (1959)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Satan Never Sleeps (1962; see 1962 film Satan Never Sleeps)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Living Reed (1963)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Death in the Castle (1965)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Time Is Noon (1966)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Matthew, Mark, Luke and John (1967)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The New Year (1968)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Three Daughters of Madame Liang (1969)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mandala (1970)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goddess Abides (1972)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All Under Heaven (1973)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rainbow (1974)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth (1931)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sons (1933)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A House Divided (1935)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Is There a Case for Foreign Missions? (New York: John Day, 1932).','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Chinese Novel: Nobel Lecture Delivered before the Swedish Academy at Stockholm, December 12, 1938 (New York: John Day, 1939).','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Men and Women (1941)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Talk about Russia (with Masha Scott) (1945)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['How It Happens: Talk about the German People, 1914–1933, with Erna von Pustau (1947)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['with Eslanda Goode Robeson. American Argument (New York: John Day, 1949).','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Child Who Never Grew (1950)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man Who Changed China: The Story of Sun Yat-sen (1953)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For Spacious Skies (1966)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The People of Japan (1966)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To My Daughters, With Love (1967)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Kennedy Women (1970)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['China as I See It (1970)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story Bible (1971)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pearl S. Buck\'s Oriental Cookbook (1972)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Wife and Other Stories (1933)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Today and Forever: Stories of China (1941)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Twenty-Seven Stories (1943)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Far and Near: Stories of Japan, China, and America (1949)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fourteen Stories (1961)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Portrait of a Marriage (1961)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hearts Come Home and Other Stories (1962)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stories of China (1964)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Escape at Midnight and Other Stories (1964)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Deed  (1969)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Once Upon a Christmas (1972)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East and West Stories (1975)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Secrets of the Heart: Stories (1976)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lovers and Other Stories (1977)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mrs. Stoner and the Sea and Other Stories (1978)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Woman Who Was Changed and Other Stories (1979)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pulitzer Prize for the Novel: The Good Earth (1932)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pearl S. Buck, My Several Worlds: A Personal Record (New York: John Day, 1954)p. 10.','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Buck, Pearl S. The Good Earth. Ed. Peter Conn. New York: Washington Square Press, 1994. Pp. xviii–xix.','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Conn (1996), p.&#160;376.','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Spurling, Burying the Bones: Pearl Buck in China (London: Profile, 2010) ISBN&#160;9781861978288','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nora B. Stirling, Pearl Buck, a Woman in Conflict (Piscataway, NJ: New Century Publishers, 1983)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Xi Lian. The Conversion of Missionaries: Liberalism in American Protestant Missions in China, 1907-1932. (University Park: Pennsylvania State University Press,  1997). ISBN&#160;027101606X','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pearl Buck interviewed by Mike Wallace on The Mike Wallace Interview February 8, 1958','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Presentation by Peter Conn on Pearl S. Buck: A Cultural Biography, March 5, 1997, C-SPAN','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East Wind: West Wind (1930)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth (1931)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sons (1933)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mother (1934)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A House Divided (1935)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['China Sky (1941)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon Seed (1942)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peony (1948)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Wave (1948)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imperial Woman (1956)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from Peking (1957)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Living Reed (1963)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Exile (1936)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fighting Angel (1936)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','Pearl_S._Buck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elämä ja aurinko (1916)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ihmislapsia elämän saatossa (1917)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hurskas kurjuus (translated as Meek Heritage) (1919)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rakas isänmaani (1919)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hiltu ja Ragnar (1923)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Enkelten suojatit (1923)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Omistani ja omilleni (1924)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maan tasalta (1924)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Töllinmäki (1925)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rippi (1928)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kiitos hetkistä, Herra... (1930)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuorena nukkunut (translated as The Maid Silja) (1931)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miehen tie (1932)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Virranpohjalta (1933)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ihmiset suviyössä (translated as People in the Summer Night) (1934)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Viidestoista (1936)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elokuu (1941)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ihmiselon ihanuus ja kurjuus (1945)','Frans_Eemil_Sillanp%C3%A4%C3%A4']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Long Journey, vol 1–3, (Fire and Ice; The Cimbrians; Christopher Columbus) New York, 1924.','Johannes_Vilhelm_Jensen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fall of the King, 1933.','Johannes_Vilhelm_Jensen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Nobel Lectures, Literature 1901–1967, Editor Horst Frenz, Elsevier Publishing Company, Amsterdam, 1969.','Johannes_Vilhelm_Jensen']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1934: Nubes Blancas y Breve Descripción de Chile (1934)','Gabriela_Mistral']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1899) Eine Stunde hinter Mitternacht—novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1900) Hermann Lauscher—collection of poetry and prose','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1904) Peter Camenzind—novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1906) Unterm Rad (Beneath the Wheel; also published as The Prodigy) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1908) Freunde—novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1910) Gertrud—novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1913) Besuch aus Indien (Visitor from India) -- nonfiction/philosophy','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1914) In the Old Sun—novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1914) Roßhalde—novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1915) Knulp (also published as Three Tales from the Life of Knulp) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1916) Schön ist die Jugend—novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1919) Strange News from Another Star (originally published as Märchen) -- collection of short stories written between 1913 and 1918','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1919) Demian (published under the pen name Emil Sinclair) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1919) Klein und Wagner—novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1920) Blick ins Chaos (A Glimpse into Chaos) -- essays','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1920) Klingsors letzter Sommer (Klingsor\'s Last Summer) -- novella','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1920) Wandering—notes and sketches','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1922) Siddhartha—novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1927) Der Steppenwolf—novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1930) Narziß und Goldmund (Narcissus and Goldmund; also published as Death and the Lover) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1932) Die Morgenlandfahrt (Journey to the East) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1943) Das Glasperlenspiel (The Glass Bead Game; also published as Magister Ludi) -- novel','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1970) Poems (21 poems written between 1899 and 1921) -- poetry','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1971) If the War Goes On—essays','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1972) Stories of Five Decades (23 stories written between 1899 and 1948) -- collection of stories','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1972) Autobiographical Writings (including "A Guest at the Spa") -- collection of prose pieces','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1979) Hours in the Garden and Other Poems  (written during the same period as The Glass Bead Game) -- poetry','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1966) El lobo estepario (based on Steppenwolf)','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1971) Zachariah (based on Siddartha)','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1972) Siddhartha','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1974) Steppenwolf','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1981) Kinderseele','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1989) Francesco','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1996) Ansatsu (based on Demian)','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2003) Poem: I Set My Foot Upon the Air and It Carried Me','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2003) Siddhartha','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2012) Die Heimkehr','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Siegfried Greiner Hermann Hesse, Jugend in Calw, Thorbecke (1981), ISBN&#160;3799520090 p. viii','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gustav Emil Müller, Philosophy of Literature, Ayer Publishing, 1976.','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Galbreath (1974) Robert. "Hermann Hesse and the Politics of Detachment", p. 63, Political Theory, vol. 2, No 1 (Feb 1974).','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Galbreath (1974) Robert. "Hermann Hesse and the Politics of Detachment", p. 64, Political Theory, vol. 2, No 1 (Feb 1974)','Hermann_Hesse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wallace Fowlie, André Gide: His Life and Art, Macmillan (1965), p. 11','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pierre de Boisdeffre, Vie d\'André Gide, 1869-1951: André Gide avant la fondation de la Nouvelle revue française (1869-1909), Hachette (1970), p. 29','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jean Delay, La jeunesse d\'André Gide, Gallimard (1956), p. 55','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Return from the U. S. S. R. translated D. Bussy (Alfred Knopf, 1937), pp. 41-42','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Levy, Audrey. Destins de femmes: Ces Poitevines plus ou moins célèbres auront marqué l\'Histoire.  Le Point. Apr 21, 2015. [2]','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ André Gide: A Life in the Present by Alan Sheridan. Harvard University Press, 1999, pages p. xvi.','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quote taken from the article on André Gide in the Encyclopedia of World Biography, Dec. 12, 1998, Gale Pub. Retrieved with library card October 2014.','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Sheridan, André Gide: A Life in the Present. Cambridge, MA: Harvard University Press, 1999.','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Noel I. Garde [Edgar H. Leoni], Jonathan to Gide: The Homosexual in History. New York:Vangard, 1964. OCLC 3149115','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For a chronology of Gide\'s life, see pages 13–15 in Thomas Cordle, André Gide (The Griffin Authors Series). Twayne Publishers, Inc., 1969.','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For a detailed bibliography of Gide\'s writings and works about Gide, see pages 655-678 in Alan Sheridan, André Gide: A Life in the Present. Harvard, 1999.','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Immoralist (1902)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Le retour de l\'enfant prodigue" (1907)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strait Is the Gate (1909)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Isabelle (1911)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Symphonie pastorale (1919)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Corydon (1924)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Si le grain ne meurt (1924)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Counterfeiters (1925)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The God that Failed (1949)','Andr%C3%A9_Gide']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Award for Best Play: The Broadway production of The Cocktail Party (1950)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2 Tony Awards for his poems used in the musical Cats (1983)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waste Land (1922)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hollow Men (1925)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ash Wednesday (1930)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Coriolan (1931)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old Possum\'s Book of Practical Cats (1939)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Marching Song of the Pollicle Dogs and Billy M\'Caw: The Remarkable Parrot (1939) in The Queen\'s Book of the Red Cross','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Four Quartets (1945)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey of the Magi (1927)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Song for Simeon (1928)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Animula (1929)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marina (1930)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Triumphal March (1931)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cultivation of Christmas Trees (1954)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rock (1934)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Murder in the Cathedral (1935)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Family Reunion (1939)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cocktail Party (1949)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confidential Clerk (1953)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Christianity &amp; Culture (1939, 1948)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Second-Order Mind (1920)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tradition and the Individual Talent (1920)','T._S._Eliot']);
     
    // db.run("INSERT INTO booksName VALUES (?,?)", ['The Sacred Wood: Essays on Poetry and Criticism (1920)"Hamlet and His Problems"','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Homage to John Dryden (1924)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shakespeare and the Stoicism of Seneca (1928)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For Lancelot Andrewes (1928)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dante (1929)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Essays, 1917-1932 (1932)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Use of Poetry and the Use of Criticism (1933)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['After Strange Gods (1934)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabethan Essays (1934)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Essays Ancient and Modern (1936)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Idea of a Christian Society (1939)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Choice of Kipling\'s Verse (1941) made by Eliot, with an essay on Rudyard Kipling','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notes Towards the Definition of Culture (1948)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poetry and Drama (1951)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Three Voices of Poetry (1954)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Frontiers of Criticism (1956)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Poetry and Poets (1943)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Criticize the Critic (1965)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waste Land: Facsimile Edition (1974)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Inventions of the March Hare: Poems 1909–1917 (1996)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems, 1909–1962 (1963) excerpt and text search','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old Possum\'s Book of Practical Cats, Illustrated Edition (1982) excerpt and text search','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Prose of T.S. Eliot edited by Frank Kermode (1975) excerpt and text search','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waste Land (Norton Critical Editions) edited by Michael North (2000) excerpt and text search','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Essays (1932); enlarged (1960)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and Hugh Haughton, Volume 1: 1898–1922 (1988, revised 2009)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and Hugh Haughton, Volume 2: 1923–1925 (2009)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and John Haffenden, Volume 3: 1926–1927 (2012)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and John Haffenden, Volume 4: 1928–1929 (2013)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and John Haffenden, Volume 5: 1930–1931 (2014)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and John Haffenden, Volume 6: 1932–1933 (2016)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of T. S. Eliot, edited by Valerie Eliot and John Haffenden, Volume 7: 1934–1935 (2017)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jewel Spears Brooker, Mastery and Escape: T.S. Eliot and the Dialectic of Modernism, University of Massachusetts Press, 1996, p. 172.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bush, Ronald. "T.S. Eliot\'s Life and Career." American National Biography. Ed. John A Garraty and Mark C. Carnes. New York: Oxford University Press, 1999.[1]','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bush, Ronald, T. S. Eliot: The Modernist in History (New York, 1991), p. 72.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Gallup, Donald. T. S. Eliot: A Bibliography (A Revised and Extended Edition), Harcourt, Brace &amp; World, New York, 1969.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T.S. Poems Written in Early Youth, John Davy Hayward, ed. Farrar, Straus and Giroux, New York, 1967','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Narita, Tatsushi, "The Young T. S. Eliot and Alien Cultures: His Philippine Interactions", The Review of English Studies, New Series, vol. 45, no. 180, 1994, pp. 523–525.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Narita, Tatsush, T. S. Eliot, The World Fair of St. Louis and "Autonomy", Nagoya: Kougaku Shuppan (2013), pp. 9–104.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bush, Ronald, "The Presence of the Past: Ethnographic Thinking/ Literary Politics", in Elzar Barkan and Ronald Bush (eds), Prehistories of the Future, Stanford University Press,(1995), pp. 3–5; 25–31.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Marsh, Alex, and Elizabeth Daumer, "Pound and T. S. Eliot", American Literary Scholarship, 2005, p. 182.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Kermode, Frank. "Introduction" to The Waste Land and Other Poems, Penguin Classics, 2003.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. The Letters of T. S. Eliot, Volume 1, 1898–1922. p. 75.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Richardson, John, Sacred Monsters, Sacred Masters. Random House, 2001, p. 20.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Seymour-Jones, Carole. Painted Shadow: A Life of Vivienne Eliot. Knopf Publishing Group, 2001, p. 17.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. The Letters of T. S. Eliot, Volume 1, 1898–1922. London: Faber and Faber. 1988. p. xvii.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. "Letter to J. H. Woods, April 21, 1919." The Letters of T. S. Eliot, vol. I. Valerie Eliot (ed.), New York: Harcourt Brace, 1988, p. 285.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ MacCabe, Colin. T. S. Eliot. Tavistock: Northcote House, 2006.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Grant, Michael (ed.). T. S. Eliot: the Critical Heritage. Routledge &amp; Kegan Paul, 1982.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Untermeyer, Louis. Modern American Poetry. Hartcourt Brace, 1950, pp. 395–396.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. The Use of Poetry and the Use of Criticism, Harvard University Press, 1933 (penultimate paragraph)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ quoted in Roger Kimball, "A Craving for Reality", The New Criterion Vol. 18, 1999','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dirk Weidmann: And I Tiresias have foresuffered all.... In: LITERATURA 51 (3), 2009, pp.98–108.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Burt, Steven and Lewin, Jennifer. "Poetry and the New Criticism". A Companion to Twentieth-Century Poetry, Neil Roberts, ed. Malden, Massachusetts: Blackwell Publishers, 2001. p. 154','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bloom, Harold. The Western Canon: Books and Schools of the Ages. NY: Riverhead, 1995.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eds. Stephen Greenblatt, et al. The Norton Anthology of English Literature, Volume 2. "T.S. Eliot". W.W. Norton &amp; Co.: NY, NY, 2000.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. "Gerontion". Collected Poems. Harcourt, 1963.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eliot, T. S. "Burbank with a Baedeker: Bleistein with a Cigar". Collected Poems. Harcourt, 1963.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ T.S. Eliot, The Rock (London: Faber and Faber, 1934), 44.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The three short stories published in the Smith Academy Record (1905) have never been recollected in any form and have virtually been neglected.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ackroyd, Peter. T. S. Eliot: A Life. (1984)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ali, Ahmed. Mr. Eliot\'s Penny World of Dreams: An Essay in the Interpretation of T.S. Eliot\'s Poetry, Published for the Lucknow University by New Book Co., Bombay, P.S. King &amp; Staples Ltd., Westminster, London, 1942, pages 138.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Asher, Kenneth T. S. Eliot and Ideology (1995)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bush, Ronald. T. S. Eliot: A Study in Character and Style. (1984)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bush, Ronald, \'The Presence of the Past: Ethnographic Thinking/ Literary Politics\'. In Prehistories of the Future, ed. Elzar Barkan and Ronald Bush, Stanford University Press. (1995).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Crawford, Robert. The Savage and the City in the Work of T. S. Eliot. (1987).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['---.  Young Eliot: From St Louis to The Waste Land. (2015)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dawson, J.L., P.D. Holland &amp; D.J. McKitterick, A Concordance to \'The Complete Poems and Plays of T.S. Eliot\'. Ithaca &amp; London: Cornell University Press, 1995.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gardner, Helen. The Art of T. S. Eliot. (1949)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gordon, Lyndall. T. S. Eliot: An Imperfect Life. (1998)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guha, Chinmoy. Where the Dreams Cross: T. S. Eliot and French Poetry. (2000, 2011)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Harding, W. D. T. S. Eliot, 1925–1935, Scrutiny, September 1936: A Review.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hargrove, Nancy Duvall. Landscape as Symbol in the Poetry of T. S. Eliot.  University Press of Mississippi (1978).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['---. T. S. Eliot\'s Parisian Year. University Press of Florida (2009).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Julius, Anthony. T. S. Eliot, Anti-Semitism, and Literary Form. Cambridge University Press (1995)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kenner, Hugh. The Invisible Poet: T. S. Eliot. (1969)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['---, editor, T. S. Eliot: A Collection of Critical Essays, Prentice-Hall. (1962)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kirk, Russell Eliot and His Age: T. S, Eliot\'s Moral Imagination in the Twentieth Century. (Introduction by Benjamin G. Lockerd Jr.). Wilmington: Intercollegiate Studies Institute, Republication of the revised second edition, 2008.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kojecky, Roger. T.S. Eliot\'s Social Criticism, Faber &amp; Faber, Farrar, Strauss, Giroux, 1972, revised Kindle edn. 2014.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lal, P. (Editor), T. S. Eliot: Homage from India: A Commemoration Volume of 55 Essays &amp; Elegies, Writer\'s Workshop Calcutta, 1965.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Levy, William Turner and Victor Scherle. Affectionately, T. S. Eliot: The Story of a Friendship: 1947–1965. (1968).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Matthews, T. S. Great Tom: Notes Towards the Definition of T. S. Eliot. (1973)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maxwell, D. E. S. The Poetry of T. S. Eliot, Routledge and Keagan Paul. (1960).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miller, James E., Jr. T. S. Eliot. The Making of an American Poet, 1888–1922. The Pennsylvania State University Press. 2005.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['North, Michael (ed.) The Waste Land (Norton Critical Editions). New York: W.W. Norton, 2000.','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Raine, Craig. T. S. Eliot. Oxford University Press (2006).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ricks, Christopher.T. S. Eliot and Prejudice. (1988).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Schuchard, Ronald. Eliot\'s Dark Angel: Intersections of Life and Art. (1999).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sencourt, Robert. T. S. Eliot: A Memoir. (1971)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Seymour-Jones, Carole. Painted Shadow: A Life of Vivienne Eliot. (2001).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sinha, Arun Kumar and Vikram, Kumar. T. S. Eliot: An Intensive Study of Selected Poems, Spectrum Books Pvt. Ltd, New Delhi, (2005).','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spender, Stephen. T. S. Eliot. (1975)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spurr, Barry, Anglo-Catholic in Religion: T. S. Eliot and Christianity, The Lutterworth Press (2009)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Text of early poems (1907–1910) printed in The Harvard Advocate','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Essays, 1917-1932','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Choice of Kipling\'s Verse (1941)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['CATS (1981 musical, 1998 film)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tom &amp; Viv (1994 film)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['South Pacific by Oscar Hammerstein II and Joshua Logan (1950)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hello, Dolly! by Michael Stewart (1964)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fiddler on the Roof by Joseph Stein (1965)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Company by George Furth (1971)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Two Gentlemen of Verona by John Guare and Mel Shapiro (1972)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Little Night Music by Hugh Wheeler (1973)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Candide by Hugh Wheeler (1974)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shenandoah by James Lee Barrett, Peter Udell and Philip Rose (1975)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Chorus Line by James Kirkwood Jr. and Nicholas Dante (1976)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Annie by Thomas Meehan (1977)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Twentieth Century by Betty Comden and Adolph Green (1978)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sweeney Todd by Hugh Wheeler (1979)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Evita by Tim Rice (1980)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Woman of the Year by Peter Stone (1981)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreamgirls by Tom Eyen (1982)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cats by T. S. Eliot (1983)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Cage aux Folles by Harvey Fierstein (1984)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big River by William Hauptman (1985)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drood by Rupert Holmes (1986)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Misérables by Alain Boublil and Claude-Michel Schönberg (1987)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Into the Woods by James Lapine (1988)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['City of Angels by Larry Gelbart (1990)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Secret Garden by Marsha Norman (1991)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Falsettos by William Finn and James Lapine (1992)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kiss of the Spider Woman by Terrence McNally (1993)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Passion by James Lapine (1994)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sunset Boulevard by Don Black and Christopher Hampton (1995)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rent by Jonathan Larson (1996)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Titanic by Peter Stone (1997)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ragtime by Terrence McNally (1998)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Parade by Alfred Uhry (1999)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James Joyce\'s The Dead by Richard Nelson (2000)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Producers by Mel Brooks and Thomas Meehan (2001)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Urinetown by Greg Kotis (2002)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hairspray by Thomas Meehan and Mark O\'Donnell (2003)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Avenue Q by Jeff Whitty (2004)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The 25th Annual Putnam County Spelling Bee by Rachel Sheinkin (2005)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Drowsy Chaperone by Bob Martin and Don McKellar (2006)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spring Awakening by Steven Sater (2007)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Passing Strange by Stew (2008)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Billy Elliot the Musical by Lee Hall (2009)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memphis by Joe DiPietro (2010)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Mormon by Trey Parker, Robert Lopez and Matt Stone (2011)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Once by Enda Walsh (2012)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Matilda the Musical by Dennis Kelly (2013)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Gentleman\'s Guide to Love and Murder by Robert L. Freedman (2014)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fun Home by Lisa Kron (2015)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hamilton by Lin-Manuel Miranda (2016)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dear Evan Hansen by Steven Levenson (2017)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Band\'s Visit by Itamar Moses (2018)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Street Scene by Kurt Weill (1947)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kiss Me, Kate by Cole Porter (1949)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['South Pacific by Richard Rodgers (1950)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Call Me Madam by Irving Berlin (1951)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Strings by Richard Rodgers (1962)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oliver! by Lionel Bart (1963)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hello, Dolly! by Jerry Herman (1964)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fiddler on the Roof by Jerry Bock and Sheldon Harnick (1965)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Man of La Mancha by Mitch Leigh and Joe Darion (1966)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cabaret by John Kander and Fred Ebb (1967)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hallelujah, Baby! by Jule Styne, Betty Comden, and Adolph Green (1968)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Company by Stephen Sondheim (1971)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Follies by Stephen Sondheim (1972)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Little Night Music by Stephen Sondheim (1973)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gigi by Frederick Loewe and Alan Jay Lerner (1974)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wiz by Charlie Smalls (1975)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Chorus Line by Marvin Hamlisch and Edward Kleban (1976)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Annie by Charles Strouse and Martin Charnin (1977)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Twentieth Century by Cy Coleman, Betty Comden, and Adolph Green (1978)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sweeney Todd by Stephen Sondheim (1979)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Evita by Andrew Lloyd Webber and Tim Rice (1980)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Woman of the Year by John Kander and Fred Ebb (1981)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nine by Maury Yeston (1982)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cats by Andrew Lloyd Webber and T. S. Eliot (1983)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Cage aux Folles by Jerry Herman (1984)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big River by Roger Miller (1985)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drood by Rupert Holmes (1986)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Misérables by Claude-Michel Schönberg, Herbert Kretzmer, and Alain Boublil (1987)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Into the Woods by Stephen Sondheim (1988)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['City of Angels by Cy Coleman and David Zippel (1990)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Will Rogers Follies by Cy Coleman, Betty Comden, and Adolph Green (1991)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Falsettos by William Finn (1992)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Passion by Stephen Sondheim (1994)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sunset Boulevard by Andrew Lloyd Webber, Don Black, and Christopher Hampton (1995)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rent by Jonathan Larson (1996)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Titanic by Maury Yeston (1997)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ragtime by Stephen Flaherty and Lynn Ahrens (1998)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Parade by Jason Robert Brown (1999)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aida by Elton John and Tim Rice (2000)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Producers by Mel Brooks (2001)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Urinetown by Mark Hollmann and Greg Kotis (2002)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hairspray by Marc Shaiman and Scott Wittman (2003)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Avenue Q by Robert Lopez and Jeff Marx (2004)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light in the Piazza by Adam Guettel (2005)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Drowsy Chaperone by Lisa Lambert and Greg Morrison (2006)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spring Awakening by Duncan Sheik and Steven Sater (2007)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Heights by Lin-Manuel Miranda (2008)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Next to Normal by Tom Kitt and Brian Yorkey (2009)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memphis by David Bryan and Joe DiPietro (2010)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Mormon by Trey Parker, Robert Lopez and Matt Stone (2011)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Newsies by Alan Menken and Jack Feldman (2012)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kinky Boots by Cyndi Lauper (2013)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridges of Madison County by Jason Robert Brown (2014)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fun Home by Jeanine Tesori and Lisa Kron (2015)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hamilton by Lin-Manuel Miranda (2016)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dear Evan Hansen by Benj Pasek and Justin Paul (2017)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Band\'s Visit by David Yazbek (2018)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cats (film)','T._S._Eliot']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['William Faulkner Reads: The Nobel Prize Acceptance Speech, Selections from As I Lay Dying, A Fable, The Old Man. Caedmon/Harper Audio, 1992. Cassette. ISBN&#160;1-55994-572-9','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['William Faulkner Reads from His Work. Arcady Series, MGM E3617 ARC, 1957. Faulkner reads from The Sound and The Fury (side one) and Light in August (side two). Produced by Jean Stein, who also did the liner notes with Edward Cole. Cover photograph by Robert Capa (Magnum).','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Obituary Variety, July 11, 1962.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Coughlan, Robert. The Private World of William Faulkner, New York: Harper &amp; Brothers, 1953.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Blotner, J. and Frederick L. Gwynn, (eds.) (1959) Faulkner in the University: Conferences at the University of Virginia, 1957–1958.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Levinger, Larry. "The Prophet Faulkner." Atlantic Monthly 285 (2000): 76.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ This book shares a title with The Marble Faun (1860), one of the novels of Nathaniel Hawthorne.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hohenberg, John.  John Hohenberg:  The Pursuit of Excellence, University Press of Florida, Gainesville, 1995, pp. 162-163','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['William Faulkner: Novels 1930–1935 (Joseph Blotner and Noel Polk, ed.) (Library of America, 1985) ISBN&#160;978-0-940450-26-4','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Portable Faulkner, ed. Malcolm Cowley ( Viking Press, 1946). ISBN&#160;978-0-14-243728-5','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sensibar, Judith L. The Origins of Faulkner\'s Art. Austin: University of Texas Press, 1984. ISBN&#160;0-292-79020-1','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sensibar, Judith L. Faulkner and Love: The Women Who Shaped His Art, A Biography. New Haven: Yale University Press, 2008. ISBN&#160;978-0-300-16568-5','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sensibar, Judith L. Vision in Spring. Austin: University of Texas Press, 1984. ISBN&#160;0-292-78712-X.','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soldiers\' Pay (1926)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mosquitoes (1927)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sartoris / Flags in the Dust (1929 / 1973)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sound and the Fury (1929)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['As I Lay Dying (1930)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sanctuary (1931)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Light in August (1932)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pylon (1935)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Absalom, Absalom! (1936)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Unvanquished (1938)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['If I Forget Thee, Jerusalem (1939)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hamlet (1940)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Intruder in the Dust (1948)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Requiem for a Nun (1951)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable (1954)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town (1957)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mansion (1959)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers (1962)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['These 13 (1931)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Go Down, Moses (1942)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Knight\'s Gambit (1949)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories (1950)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flesh (1932)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Today We Live (1933)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Submarine Patrol (1938)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Have and Have Not (1944)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Sleep (1945)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wishing Tree (1927)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man with the Golden Arm by Nelson Algren (1950)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories of William Faulkner by William Faulkner (1951)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Here to Eternity by James Jones (1952)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Invisible Man by Ralph Ellison (1953)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Adventures of Augie March by Saul Bellow (1954)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ten North Frederick by John O\'Hara (1956)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Field of Vision by Wright Morris (1957)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wapshot Chronicle by John Cheever (1958)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Barrel by Bernard Malamud (1959)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Goodbye, Columbus by Philip Roth (1960)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waters of Kronos by Conrad Richter (1961)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moviegoer by Walker Percy (1962)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morte d\'Urban by J. F. Powers (1963)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Centaur by John Updike (1964)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herzog by Saul Bellow (1965)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eighth Day by Thornton Wilder (1968)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steps by Jerzy Kosiński (1969)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['them by Joyce Carol Oates (1970)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mr. Sammler\'s Planet by Saul Bellow (1971)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Complete Stories by Flannery O\'Connor (1972)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chimera by John Barth (1973)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Augustus by John Williams (1973)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gravity\'s Rainbow by Thomas Pynchon (1974)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Crown of Feathers and Other Stories by Isaac Bashevis Singer (1974)','William_Faulkner']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1916. The Policy of the Entente, 1904–1914&#160;: a reply to Professor Gilbert Murray. Manchester: The National Labour Press','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1934. Freedom and Organization, 1814–1914. London: George Allen &amp; Unwin.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1965. Legitimacy Versus Industrialism, 1814–1848. London: George Allen &amp; Unwin (first published as Parts I and II of Freedom and Organization, 1814–1914, 1934).','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1951–1969. The Autobiography of Bertrand Russell,&#91;205&#93; 3 vols., London: George Allen &amp; Unwin. Vol. 2, 1956&#91;205&#93;','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Carlo Cellucci, Rethinking Knowledge: The Heuristic View, Springer, 2017, p. 32.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Russell, Bertrand and Perkins, Ray (ed.) Yours faithfully, Bertrand Russell. Open Court Publishing, 2001, p.&#160;4.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Russell, Bertrand (1898) An Essay on the Foundations of Geometry, p.&#160;32, re-issued 1956 by Dover Books','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Russell, Bertrand The Practice and Theory of Bolshevism by Bertrand Russell, 1920','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bertrand Russell Peace Foundation, Bertrand Russell, 1872–1970 [1970], p.&#160;12','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Peter Knight, The Kennedy Assassination, Edinburgh University Press Ltd., 2007, p.&#160;77. Also see "External Links": "Sixteen Questions on the Assassination (of President Kennedy)".','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Collected Papers of Bertrand Russell (Psychology Press, 2005)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Blanshard, in Paul Arthur Schilpp, ed., The Philosophy of Brand Blanshard, Open Court, 1980, p.&#160;88, quoting a private letter from Russell.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Charles Pigden in Bertrand Russell, Russell on Ethics: Selections from the Writings of Bertrand Russell, Routledge (2013), p.&#160;14','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ James C. Klagge, Wittgenstein: Biography and Philosophy, Cambridge University Press (2001), p.&#160;12','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Newsome Crossley. A Note on Cantor\'s Theorem and Russell\'s Paradox, Australian Journal of Philosophy 51, 1973, 70–71.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ivor Grattan-Guinness. The Search for Mathematical Roots 1870–1940. Princeton: Princeton University Press, 2000.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alfred Julius Ayer. Russell, London: Fontana, 1972. ISBN&#160;0-00-632965-9. A lucid summary exposition of Russell\'s thought.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A. C. Grayling. Russell: A Very Short Introduction, Oxford University Press, 2002.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nicholas Griffin. Russell\'s Idealist Apprenticeship, Oxford: Oxford University Press, 1991.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A. D. Irvine (ed.). Bertrand Russell: Critical Assessments, 4 volumes, London: Routledge, 1999. Consists of essays on Russell\'s work by many distinguished philosophers.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael K. Potter. Bertrand Russell\'s Ethics, Bristol: Thoemmes Continuum, 2006. A clear and accessible explanation of Russell\'s moral philosophy.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Ramsden Eames. Bertrand Russell\'s Theory of Knowledge, London: George Allen and Unwin, 1969. A clear description of Russell\'s philosophical development.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['P. A. Schilpp (ed.). The Philosophy of Bertrand Russell, Evanston and Chicago: Northwestern University, 1944.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Slater. Bertrand Russell, Bristol: Thoemmes Press, 1994.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A. J. Ayer. Bertrand Russell, New York: Viking Press, 1972, reprint ed. London: University of Chicago Press, 1988: ISBN&#160;0-226-03343-0','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald W. Clark. The Life of Bertrand Russell, London: Jonathan Cape, 1975 ISBN&#160;0-394-49059-2','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald W. Clark. Bertrand Russell and His World, London: Thames &amp; Hudson, 1981 ISBN&#160;0-500-13070-1','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rupert Crawshay-Williams. Russell Remembered, London: Oxford University Press, 1970. Written by a close friend of Russell\'s&#91;1&#93;','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Lewis. Bertrand Russell: Philosopher and Humanist, London: Lawerence &amp; Wishart, 1968','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ray Monk. Bertrand Russell: Mathematics: Dreams and Nightmares London: Phoenix, 1997 ISBN&#160;0-7538-0190-6','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ray Monk. Bertrand Russell: 1872–1920 The Spirit of Solitude Vol. I, New York: Routledge, 1997 ISBN&#160;0-09-973131-2','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ray Monk. Bertrand Russell: 1921–1970 The Ghost of Madness Vol. II, New York: Routledge, 2001 ISBN&#160;0-09-927275-X','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['George Santayana. \'Bertrand Russell\', in Selected Writings of George Santayana, ed. Norman Henfrey, Cambridge: Cambridge University Press, I, 1968, pp.&#160;326–329','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Katharine Tait. My father Bertrand Russell, New York: Thoemmes Press, 1975','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Wood. Bertrand Russell The Passionate Sceptic London: George Allen &amp; Unwin, 1957.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Stone et al. Bertrand Russell´s Life and Legacy. Wilmington: Vernon Press, 2017.','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['German Social Democracy (1896)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Critical Exposition of the Philosophy of Leibniz (1900)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anti-Suffragist Anxieties (1910)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Principia Mathematica, volume one (1910)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Justice in Wartime (1917)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Why Men Fight: A Method of Abolishing the International Duel (1917)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Philosophy of Logical Atomism (1918–19)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Introduction to Mathematical Philosophy (1919)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Legitimacy Versus Industrialism 1814–1848 (1935)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Outline of Philosophy (1951)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Is There a God? (1952)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Scientific Outlook (1954)','Bertrand_Russell']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Människor (1912)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ordkonst och bildkonst (1913)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Två sagor om livet (1913)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Motiv (1914)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Järn och människor (1915)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ångest (1916)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kaos (1919)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Det eviga leendet, three stories ("The Eternal Smile", 1920)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den lyckliges väg (1921)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Onda Sagor (1924)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gäst hos verkligheten ("Guest of Reality", 1925)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hjärtats sånger (1926)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Det besegrade livet (1927)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kämpande ande (1930)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vid lägereld (1932)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den knutna näven ("The Clenched Fist", 1934)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I den tiden ("In the Terms", 1935)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Genius (1937)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den befriade människan (1939)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sång och strid (1940)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemmet och stjärnan (1942)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dvärgen ("The Dwarf", 1944)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barabbas (1950, filmed in 1953, 1962)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aftonland ("Evening Land", 1953)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sibyllan ("The Sibyl", 1956)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ahasverus död ("The Death of Ahasuerus", 1960)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pilgrim på havet ("Pilgrim at Sea", 1962)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Det heliga landet ("The Holy Land", 1964)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mariamne ("Herod and Mariamne", 1967)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Antecknat (diaries and notes, 1977)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sista människan, play ("The Last Man", 1917)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den svåra stunden, three one-act plays ("The Difficult Hour ", 1918)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Teater (1918)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Himlens hemlighet, play ("The Secret of Heaven", 1919)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den osynlige, play ("The Invisible One", 1923)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Han som fick leva om sitt liv, play ("The Man Who Lived his Life Over", 1928)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Konungen, play ("The King", 1932)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bödeln, play ("The Hangman", 1933)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mannen utan själ, play ("The Man Without a Soul", 1936)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Seger i mörkret, play ("Victory in the Dark", 1939)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Midsommardröm i fattighuset, play ("Midsummer\'s Dream in the Workhouse", 1941)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['De vises sten, play ("The Philosopher\'s Stone", 1947)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Låt människan leva, play ("Let Man Live", 1950)','P%C3%A4r_Lagerkvist']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1925 – Le Désert de l\'amour  («The Desert of Love», tr. 1949) (Awarded the Grand Prix du roman de l\'Académie française, 1926.)','Fran%C3%A7ois_Mauriac']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1929 – Trois Récits A volume of three stories: Coups de couteau, 1926; Un homme de lettres, 1926; Le Démon de la connaissance, 1928','Fran%C3%A7ois_Mauriac']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1938 – Plongées A volume of five stories: Thérèse chez le docteur, 1933 («Thérèse and the Doctor», tr. 1947); Thérèse à l\'hôtel, 1933 («Thérèse at the Hotel», tr. 1947); Le Rang; Insomnie; Conte de Noël.','Fran%C3%A7ois_Mauriac']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['List of people on the cover of Time magazine (1920s); 14 April 1923, 11 May 1925','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ferris, John. "Treasury Control, the Ten Year Rule and British Service Policies, 1919–1924". The Historical Journal, Vol. 30, No. 4. (December 1987), pp. 859–83','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cook, Chris. Sources in British Political History, 1900–1951 (Volume 1); Macmillan Press, 1975 p. 73','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Beaverbrook, Lord; Edited by Taylor, A. J. P. (1966). The Abdication of King Edward VIII. London: Hamish Hamilton.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cooke, Alistair. \'Edward VIII\' in Six Men, Bodley Head (1977).','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Taylor, A. J. P. English History (1914–1945), Hamish Hamilton (1961), p. 404.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Moran, Lord. Winston Churchill: the Struggle for Survival 1940–1965 (Constable, 1966). p 167.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Storr, Anthony. "The Man", in A. J. P. Taylor, et al., Churchill: Four Faces and the Man (Penguin, 1973)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ramsden, John. Man of the Century: Winston Churchill and his Legend since 1945, Harper Collins (2003), p. 531','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lovell, Richard. Churchill\'s Doctor: A Biography of Lord Moran (Royal Society of Medicine Services, 1992)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Attenborough, W. Churchill and the \'Black Dog\' of Depression (Palgrave, 2014), pp. 187–97','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Attenborough, W. Churchill and the \'Black Dog\' of Depression (Palgrave, 2014), pp. 153–58','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Soames, Mary (ed.), Speaking For Themselves: the Personal Letters of Winston and Clementine Churchill (Black Swan, 1999), p. 53','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Attenborough, W. Churchill and the \'Black Dog\' of Depression (Palgrave, 2014), pp. 72–81','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Moran, Lord. Struggle for Survival (Constable, 1966), pp. 99–100','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wheeler-Bennett, J. (ed.) Action This Day (Macmillan, 1968), pp. 70, 146.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Churchill, W. S. Painting as a Pastime (Odhams, 1948), pp. 7–13.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Stafford-Clark, David Psychiatry Today (Penguin, 1952), pp. 94–99.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Churchill, W. S. Hinge of Fate (Cassell, 1951), p. 344','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Danchev, A. &amp; D. Todman (eds.), Lord Alanbrooke: War Diaries 1939–1945 (Phoenix Press, 2002), p. 269.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Beschloss, Michael R. The Conquerors (2002), p. 131','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted after the devastation of Dresden by aerial bombing, and the resulting fire storm (February 1945) in Where the Right Went Wrong (2004) by Buchanan, Patrick J., p. 119','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Fenby, Jonathan. The General: Charles de Gaulle and The France He Saved (2010), pp. 42–47','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kevin Ruane, Churchill and the Bomb in War and Cold War (2016) p. 156','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Poverty, inequality and health in Britain, 1800–2000: a reader edited by George Davey Smith, Daniel Dorling, &amp; Mary Shaw, p. lxxix','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ A. M. Browne, Long Sunset (1995), pp. 302–03','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ W. Attenborough, Churchill and the Black Dog of Depression (2014), pp. 175–86.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Churchill, Winston S. The Hinge of Fate, New York: Houghton Mifflin Company (1950), p. 622','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Churchill, Winston. The World Crisis. Six vols. (1923–31); one-vol. ed. (2005). On the First World War.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Churchill, Winston. The Second World War. Six vols. (1948–53)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Edwards, Ron. Eastcote: From Village to Suburb (1987). Uxbridge: London Borough of Hillingdon. ISBN&#160;0907869092.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James, Robert Rhodes, ed. Winston S. Churchill: His Complete Speeches, 1897–1963. Eight vols. London: Chelsea, 1974.&#91;ISBN&#160;missing&#93;','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Langworth, Richard, ed. Churchill in his own Words, Ebury Press, 2008. ISBN&#160;978-0091933364.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I. Youth, 1874–1900 (2 vols., 1966);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['II. Young Statesman, 1901–1914 (3 vols., 1967);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['III. The Challenge of War, 1914–1916 (3 vols., 1973). ISBN&#160;0395169747,&#32;978-0395169742;','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['IV. The Stricken World, 1916–1922 (2 vols., 1975);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['V. The Prophet of Truth, 1923–1939 (3 vols., 1977);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['VI. Finest Hour, 1939–1941: The Churchill War Papers (2 vols., 1983);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['VII. Road to Victory, 1941–1945 (4 vols., 1986);','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['VIII. Never Despair, 1945–1965 (3 vols., 1988).','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hastings, Max. Finest Years: Churchill as Warlord, 1940–45. London: HarperPress (2009). ISBN&#160;978-0007263677.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hennessy, Peter The Prime Minister: The Office and Its Holders since 1945 (2001).&#91;ISBN&#160;missing&#93;','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Johnson, Boris, The Churchill Factor: How One Man Made History. Hodder &amp; Stoughton (2013). ISBN&#160;978-1444783025.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jordan, Anthony J. Churchill: A Founder of Modern Ireland. Westport Books (1995). ISBN&#160;978-0952444701.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kersaudy, François. Churchill and De Gaulle (1981). ISBN&#160;0002163284.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pelling, Henry. Winston Churchill (1974). ISBN&#160;1840222182. [Comprehensive biography]','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prior, Robin. Churchill\'s "World Crisis" as History Croom Helm (1983). ISBN&#160;0709920113.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Toye, Richard. Churchill\'s Empire: The World that Made Him and the World He Made. Macmillan, 2010. ISBN&#160;978-0230703841.','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trukhanovskiĭ, Vladimir Grigor\'evich. Winston Churchill. Moscow: Progress Publishers (1978; revised edition).&#91;ISBN&#160;missing&#93;','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Weber, Oliver, War Correspondent, Preface of The Malakand War, Belles Lettres (2012).&#91;ISBN&#160;missing&#93;','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of the Malakand Field Force (1898)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Savrola (1899 novel)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The River War (1899)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['London to Ladysmith via Pretoria (1900)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ian Hamilton\'s March (1900)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lord Randolph Churchill (1906)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The World Crisis (1923–1931, five volumes)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Early Life (1930)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marlborough: His Life and Times (1933–1938, four volumes)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Great Contemporaries (1937)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arms and the Covenant (1938)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Second World War (1948–1963, six volumes)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A History of the English-Speaking Peoples (1956–1958, four volumes)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['vacant (1848–1849)','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Operation Masterdom','Winston_Churchill']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Indian Camp (1924)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sun Also Rises (1926)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Farewell to Arms (1929)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For Whom the Bell Tolls (1940)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea (1951)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Garden of Eden was published posthumously in 1986. See Meyers (1985), 436','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The manuscript for The Sea Book was published posthumously as Islands in the Stream in 1970. See Mellow (1992), 552','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Reynolds (2000), 17–18','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Reynolds (2000), 19','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Beegel (2000), 63–71','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 19–23','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Mellow (1992), 57–60','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 45–53','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 56–58','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Kert (1983), 83–90','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Baker (1972), 7','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 70–74','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Reynolds (2000), 28','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Baker (1972), 15–18','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 189','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Baker (1972), 44','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Oliver (1999), 144','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 326','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 356–361','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Kert (1983), 393–398','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Lynn (1987), 518–519','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985) 408–411','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Mellow (1992), 588','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 512','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 533','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Reynolds (1999), 544–547','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meyers (1985), 542–544','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Mellow (1992), 598–601','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Reynolds (1999), 548','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Kert (1983), 504','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The Sun Also Rises". (October 31, 1926). The New York Times. Retrieved November 30, 2011.','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Nagel (1996), 87','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Baker (1972),  117','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Fiedler (1975), 345–365','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Stoltzfus (2005), 215–218','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Baker (1972), 101–121','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hemingway, Ernest. (1929) A Farewell to Arms]. New York: Scribner\'s','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Beegel (1996), 282','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Margaux Hemingway Is Dead; Model and Actress Was 41". (July 3, 1996). The New York Times. Retrieved May 14, 2010','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Coroner Says Death of Actress Was Suicide". (August 21, 1996). The New York Times. Retrieved May 14, 2010.','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baker, Carlos. (1969). Ernest Hemingway: A Life Story. New York: Charles Scribner\'s Sons. ISBN&#160;978-0-02-001690-8','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baker, Carlos. (1972). Hemingway: The Writer as Artist. Princeton: Princeton UP. ISBN&#160;978-0-691-01305-3','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baker, Carlos. (1981). "Introduction" in Ernest Hemingway Selected Letters 1917–1961. New York: Scribner\'s. ISBN&#160;978-0-684-16765-7','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Banks, Russell. (2004). "PEN/Hemingway Prize Speech". The Hemingway Review. Volume 24, issue 1. 53–60','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beegel, Susan. (1996). "Conclusion: The Critical Reputation". in Donaldson, Scott (ed). The Cambridge Companion to Ernest Hemingway. New York: Cambridge UP. ISBN&#160;978-0-521-45574-9','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Benson, Jackson. (1989). "Ernest Hemingway: The Life as Fiction and the Fiction as Life". American Literature. Volume 61, issue 3. 354–358','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Benson, Jackson. (1975). The Short Stories of Ernest Hemingway: Critical Essays. Durham: Duke UP. ISBN&#160;978-0-8223-0320-6','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burwell, Rose Marie. (1996). Hemingway: the Postwar Years and the Posthumous Novels. New York: Cambridge UP. ISBN&#160;978-0-521-48199-1','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fiedler, Leslie. (1975). Love and Death in the American Novel. New York: Stein and Day. ISBN&#160;978-0-8128-1799-7','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Griffin, Peter. (1985). Along with Youth: Hemingway, the Early Years. New York: Oxford UP. ISBN&#160;978-0-19-503680-0','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemingway, Ernest. (1929). A Farewell to Arms. New York: Scribner\'s. ISBN&#160;978-1-4767-6452-8','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemingway, Ernest. (1975). "The Art of the Short Story" in Benson, Jackson (ed). New Critical Approaches to the Short Stories of Ernest Hemingway. Durham: Duke UP. ISBN&#160;978-0-8223-1067-9','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemingway, Leicester. (1996). My Brother, Ernest Hemingway. New York: World Publishing Company. ISBN&#160;978-1-56164-098-0','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hoberek, Andrew. (2005). Twilight of the Middle Class: Post World War II fiction and White Collar Work. New York: Cambridge UP. ISBN&#160;978-0-691-12145-1','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kert, Bernice. (1983). The Hemingway Women. New York: Norton. ISBN&#160;978-0-393-31835-7','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Koch, Stephen. (2005). The Breaking Point: Hemingway, Dos Passos, and the Murder of Jose Robles. New York: Counterpoint. ISBN&#160;978-1-58243-280-9','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Long, Ray – editor. (1932). "Why Editors Go Wrong: \'Fifty Grand\' by Ernest Hemingway", 20 Best Stories in Ray Long\'s 20 Years as an Editor. New York: Crown Publishers. 1–3','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lynn, Kenneth. (1987). Hemingway. Cambridge: Harvard UP. ISBN&#160;978-0-674-38732-4','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['McCormick, John (1971). American Literature 1919–1932. London: Routledge. ISBN&#160;978-0-7100-7052-4','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mellow, James. (1992). Hemingway: A Life Without Consequences. Boston: Houghton Mifflin. ISBN&#160;978-0-395-37777-2','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mellow, James. (1991). Charmed Circle: Gertrude Stein and Company. Boston: Houghton Mifflin. ISBN&#160;978-0-395-47982-7','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meyers, Jeffrey. (1985). Hemingway: A Biography. New York: Macmillan. ISBN&#160;978-0-333-42126-0','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miller, Linda Patterson. (2006). "From the African Book to Under Kilimanjaro". The Hemingway Review, Volume 25, issue 2. 78–81','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Müller, Timo. (2010). "The Uses of Authenticity: Hemingway and the Literary Field, 1926–1936". Journal of Modern Literature. Volume 33, issue 1. 28–42','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oliver, Charles. (1999). Ernest Hemingway A to Z: The Essential Reference to the Life and Work. New York: Checkmark Publishing. ISBN&#160;978-0-8160-3467-3','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pizer, Donald. (1986). "The Hemingway: Dos Passos Relationship". Journal of Modern Literature. Volume 13, issue 1. 111–128','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reynolds, Michael. (1999). Hemingway: The Final Years. New York: Norton. ISBN&#160;978-0-393-32047-3','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reynolds, Michael. (1989). Hemingway: The Paris Years. New York: Norton. ISBN&#160;978-0-393-31879-1','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reynolds, Michael. (1998). The Young Hemingway. New York: Norton. ISBN&#160;978-0-393-31776-3','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Robinson, Daniel. (2005). "My True Occupation is That of a Writer:Hemingway\'s Passport Correspondence". The Hemingway Review. 87–93','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sanderson, Rena. (1996). "Hemingway and Gender History". in Donaldson, Scott (ed). The Cambridge Companion to Ernest Hemingway. New York: Cambridge UP. ISBN&#160;978-0-521-45574-9','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stoltzfus, Ben. (2005). "Sartre, "Nada," and Hemingway\'s African Stories". Comparative Literature Studies. Volume 42, issue 3. 205–228','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Svoboda, Frederic. (2000). "The Great Themes in Hemingway". in Wagner-Martin, Linda (ed). A Historical Guide to Ernest Hemingway. New York: Oxford UP. ISBN&#160;978-0-19-512152-0','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas, Hugh. (2001). The Spanish Civil War. New York: Modern Library. ISBN&#160;978-0-375-75515-6','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trodd, Zoe. (2007). "Hemingway\'s Camera Eye: The Problems of Language and an Interwar Politics of Form". The Hemingway Review. Volume 26, issue 2. 7–21','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Young, Philip. (1964). Ernest Hemingway. St. Paul, MN: University of Minnesota. ISBN&#160;978-0-8166-0191-2','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Torrents of Spring (1926)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sun Also Rises (1926)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Farewell to Arms (1929)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Have and Have Not (1937)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For Whom the Bell Tolls (1940)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Across the River and into the Trees (1950)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea (1952)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Death in the Afternoon (1932)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Green Hills of Africa (1935)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Moveable Feast (1964)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Islands in the Stream (1970)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dangerous Summer (1985)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Garden of Eden (1986)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['True at First Light (1999)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under Kilimanjaro (2005)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Three Stories and Ten Poems (1923)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Our Time (1925)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Men Without Women (1927)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Winner Take Nothing (1933)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fifth Column and the First Forty-Nine Stories (1938)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Snows of Kilimanjaro (1961)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fifth Column and Four Stories of the Spanish Civil War (1969)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Nick Adams Stories (1972)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Complete Short Stories of Ernest Hemingway (1987)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Hemingway: The Collected Stories (1995)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['88 Poems (1979)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Hemingway Selected Letters 1917–1961 (1981)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dateline: Toronto (1985)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cambridge Edition of the Letters of Ernest Hemingway (2011)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Breaking Point (1950)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gun Runners (1958)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Captain Khorshid (1987)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Macomber Affair (1947)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Snows of Kilimanjaro (1952)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemingway\'s Adventures of a Young Man (1962)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Islands in the Stream (1977)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spanish Earth (1937 film)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bacall to Arms (1946 cartoon)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hello Hemingway (1990 film)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Love and War (1996 film)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hemingway &amp; Gellhorn (2012 film)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cooper &amp; Hemingway: The True Gen (2013 documentary)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Papa: Hemingway in Cuba (2015 film)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','Ernest_Hemingway']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1952: Gerpla (The Happy Warriors (1958) / Wayward Heroes (2016))','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Halldór Guðmundsson, The Islander: a Biography of Halldór Laxness. McLehose Press/Quercus, London, translated by Philip Roughton, 2008, pp. 49, 117, 149, 238, 294','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Albertsson, Krístian, Vaka 1.3, 1927','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Einarsson, Stefán, A History of Icelandic Literature, New York: Johns Hopkins for the American Scandinavian Foundation, 1957, p. 317 OCLC 264046441','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Laxness, Halldór,Alþýðubókin, Þriðja útgáfa (3rd edition), (Reykjavík, 1949), p.9','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hallberg, Peter Halldór Laxness, Twayne Publishers, New York, 1971, p.60','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Sveinn Hoskuldsson, "Scandinavica", 1972 supplement, pp. 1–2','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jane Smiley, Independent People, Vintage International, 1997, cover','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Magnus Magnusson, World Light, University of Wisconsin Press, Madison, 1969, p. viii','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Neijmann, Daisy, A History of Icelandic Literature, University of Nebraska Press, 2006, p. 404','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Modern Nordic Plays, Iceland, p. 23, Sigurður Magnússon (ed.), Twayne: New York, 1973','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sontag, Susan, At the Same Time, p.100, Farrar, Strauss and Giroux: New York, 2007','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Reinhard Henning, Phd. paper Umwelt-engagierte Literatur aus Island und Norwegen, University of Bonn, 2014','Halld%C3%B3r_Laxness']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A quotation from Jiménez, "If they give you ruled paper, write the other way," is the epigraph to Ray Bradbury\'s novel Fahrenheit 451 (1953).','Juan_Ram%C3%B3n_Jim%C3%A9nez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quoted in Annie Dillard\'s For the Time Being: "The worst thing about death must be the first night" (1999).','Juan_Ram%C3%B3n_Jim%C3%A9nez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stranger (L\'Étranger, often translated as The Outsider) (1942)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Plague (La Peste) (1947)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fall (La Chute) (1956)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Christian Metaphysics and Neoplatonism (1935)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Betwixt and Between (L\'envers et l\'endroit, also translated as The Wrong Side and the Right Side) (collection, 1937)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuptials (Noces) (1938)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Myth of Sisyphus (Le Mythe de Sisyphe) (1942)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Rebel (L\'Homme révolté) (1951)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notebooks 1935–1942 (Carnets, mai 1935&#160;—fevrier 1942) (1962)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notebooks 1943–1951 (1965)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notebooks 1951–1959 (2008). Published as Carnets Tome III&#160;: Mars 1951 – December 1959 (1989)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Misunderstanding (Le Malentendu) (1944)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The State of Siege (L\'État de Siège) (1948)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Just Assassins (Les Justes) (1949)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Requiem for a Nun (Requiem pour une nonne, adapted from William Faulkner\'s novel by the same name) (1956)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Possessed (Les Possédés, adapted from Fyodor Dostoyevsky\'s novel Demons) (1959)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Neither Victims Nor Executioners (Series of essays in Combat) (1946)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Why Spain? (Essay for the theatrical play L\' Etat de Siège) (1948)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Ancient Greek Tragedy (Parnassos lecture in Greece) (1956)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reflections on the Guillotine (Réflexions sur la guillotine) (Extended essay, 1957)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Create Dangerously (Essay on Realism and Artistic Creation, lecture at the University of Uppsala in Sweden) (1957)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lyrical and Critical Essays (1970)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Youthful Writings (1976)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Between Hell and Reason: Essays from the Resistance Newspaper "Combat", 1944–1947 (1991)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Camus at "Combat": Writing 1944–1947 (2005)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Albert Camus Contre la Peine de Mort (2011)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Alan D. Schrift (2006), Twentieth-Century French Philosophy: Key Themes And Thinkers, Blackwell Publishing, p. 109.','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Actuelles III: Chroniques Algeriennes, 1939–58','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vicente de Paulo Barretto, Camus: vida e obra (1970)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Camus, BBC Radio 4 discussion with Peter Dunwoodie, David Walker &amp; Christina Howells (In Our Time, Jan. 3, 2008)','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stranger','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fate','Albert_Camus']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Twin in the Clouds (1914)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Over the Barriers (1916)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Themes and Variations (1917)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Sister, Life (1922)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Early Trains (1944)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems (1946)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1954)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['When the Weather Clears (1959)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In The Interlude: Poems 1945–1960 (1962)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Safe Conduct (1931)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Second Birth (1932)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Summer (1934)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Childhood (1941)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Writings (1949)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Works (1945)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Goethe\'s Faust (1952)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Essay in Autobiography (1956)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Zhivago (1957)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Pasternak (1959) pp 27–28.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ivinskaya (1978), p xvi.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978) p 395.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Boris Pasternak: Family Correspondence, 1921–1960, p 78.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Ivinskaya (1978) pp 61–63','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978) pp 132–133','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978) pp 72–73.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978), p 86.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Ivinskaya (1978) pp 78–79.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978) p 142.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Doctor Zhivago": Letter to Boris Pasternak from the Editors of Novyi Mir. Daedalus, Vol. 89, No. 3, The Russian Intelligentsia (Summer, 1960), pp.&#160;648–668','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Boris Pasternak: Family Correspondence 1921–1960, Hoover Press, 2010. p 402.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Solomon Volkov, The Magical Chorus: A History of Russian Culture from Tolstoy to Solzhenitsyn, Alfred A. Knopf, 2008. Pages 195–196.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Ivinskaya (1978), pp 323–326','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978), p 332.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978), p 331.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lydia Pasternak Slater, Pasternak: Fifty Poems, Barnes &amp; Noble Books, 1963. p 57.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ivinskaya (1978), p 145.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Ivinskaya (1978) pp 28–29.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Boris Pasternak, I Remember: Sketch for an Autobiography, Pantheon Books, 1959. p 127.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Boris Pasternak, I Remember; Sketches for an Autobiography, Pantheon Books, 1959.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olga Ivinskaya, A Captive of Time; My Years with Pasternak, Doubleday, 1978. Translated by Max Hayward.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['ed. Elliott Mossman, The Correspondence of Boris Pasternak and Olga Freidenberg 1910 - 1954, Harcourt Brace Jovanovich, 1982 ISBN&#160;9780151226306','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paolo Mancosu, Inside the Zhivago Storm: The Editorial Adventures of Pasternak\'s Masterpiece, Milan: Feltrinelli, 2013','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Finn and Petra Couvee, The Zhivago Affair: The Kremlin, the CIA, and the Battle Over a Forbidden Book, New York: Pantheon Books, 2014','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paolo Mancosu, Zhivago\'s Secret Journey: From Typescript to Book, Stanford: Hoover Press, 2016','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Pasternak, Lara: The Untold Love Story and the Inspiration for Doctor Zhivago, Ecco, 2017; ISBN&#160;978-0062439345.','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Zhivago (1965 film)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Zhivago (2002 miniseries)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Zhivago (2011 musical)','Boris_Pasternak']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Éloges (1911, transl. Eugène Jolas in 1928, Louise Varèse in 1944, Eleanor Clark and Roger Little in 1965, King Bosley in 1970)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anabase (1924, transl. T.S. Eliot in 1930, Roger Little in 1970)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Exil (1942, transl. Denis Devlin, 1949)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pluies (1943, transl. Denis Devlin in 1944)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poème à l\'étrangère (1943, transl. Denis Devlin in 1946)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Neiges (1944, transl. Denis Devlin in 1945, Walter J. Strachan in 1947)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vents (1946, transl. Hugh Chisholm in 1953)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Amers (1957, transl. Wallace Fowlie in 1958, extracts by George Huppert in 1956, Samuel E. Morison in 1964)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chronique (1960, transl. Robert Fitzgerald in 1961)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poésie (1961, transl. W. H. Auden in 1961)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oiseaux (1963, transl. Wallace Fowlie in 1963, Robert Fitzgerald in 1966, Roger Little in 1967, Derek Mahon in 2002)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pour Dante (1965, transl. Robert Fitzgerald in 1966)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chanté par celle qui fut là (1969, transl. Richard Howard in 1970)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chant pour un équinoxe (1971)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nocturne (1973)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sécheresse (1974)','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems (1971) Bollingen Series, Princeton University Press.','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Valery Larbaud, préface à Anabasis, translated by Jacques Le Clerq, in Anabasis, New York, Harcourt, Brace and C°, 1949','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Amos Wilder, "Nature and the immaculate world in Saint-John Perse", in Modern Poetry and the Christian tradition, New York, 1952','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Claudel, "A Poem by St.-John Perse", translation by Hugh Chisholm, in Winds, New York, Pantheon Books, Bollingen Series, no. 34, 1953.','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Tribute to Saint-John Perse", The Berkeley Review (Arthur J. Knodel, René Girard, Georges Huppert), vol. I, no. 1, Berkeley, 1956','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Archibald MacLeish, "Saint-John Perse. The Living Spring", in A continuing journey. Essays and Addresses, Boston, 1957','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wallace Fowlie, "Saint-John Perse", in A Guide to Contemporary french Literature, from Valéry to Sartre, New York, 1957','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Conrad Aiken, A Reviewer\'s A.B.C., Collected criticism from 1916, New York, 1958','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Guenther, "Prince among the Prophets", Poetry, Chicago, vol. XCIII, no. 5, 1959','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Henry McMahon, A Bibliography of works by and about Saint-John Perse, Stanford University, 1959','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stanley Burnshaw, "Saint-John Perse", in The Poem Itself, New York, 1960','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bernard Weinberg, The Limits of Symbolism. Studies of Five modern French Poets. Baudelaire, Rimbaud, Mallarmé, Valéry, Saint-John Perse, Manchester, 1961','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Léon-S. Roudiez, "The Epochal Poetry of Saint-John Perse", Columbia University Forum, New York, vol. IV, 1961','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eugenia Maria Arsenault, Color imagery in the Vents of Saint-John Perse, Catholic University of America, Washington, 1963','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eugenia Vassylkivsky, The Main Themes of Saint-John Perse, Columbia University, 1964','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arthur J. Knodel, Saint-John Perse. A Study of his Poetry, Edimburg, 1966','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['R. W. Baldner, "Saint-John Perse as Poet Prophet" in Proceedings of the Pacific Northwest Conference on Foreign Languages, vol. XVII, no. 22, 1966','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roger Little, Word Index of the Complete Poetry and Prose of Saint-John Perse, Durham, 1966 and 1967','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. Owen de Jaham, An Introduction to Saint-John Perse, University of South Western Louisiana, 1967','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kathleen Raine, "Saint-John Perse, Poet of the Marvellous", Encounter, vol. IV, no. 29, October 1967; idem in Defending Ancient Springs, Oxford, 1968','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Delamori, "The Love and aggression of Saint-John Perse\'s Pluies", Yale French Studies, 1970','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richar O. Abel, The Relationship between the Poetry of T. S. Eliot and Saint-John Perse, University of Southern California, 1970','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roger Little, Saint-John Perse. A Bibliography for Students of His Poetry, London, 1971','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth N. Horry, Paul Claudel and Saint-John Perse. Parallels and Contrasts, University of North Carolina Press, Chapel Hill, 1971','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pierre Emmanuel, Praise and Presence, with a Bibliography, Washington, 1971','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Candace Uter De Russy, Saint-John Perse\'s Chronique: a study of Kronos and other themes through imagery, Tulane University, 1971','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marc Goodhart, Poet and Poem in Exile, University of Colorado, 1971','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['René Galand, Saint-John Perse, New York, 1972','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Ruland, America as metaphor in modern French Letters. Celine, Julien Green and Saint-John Perse, New York, 1972','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roger Little, Saint-John Perse, University of London, 1973','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Nolan Rigolot, The Dialectics of Poetry: Saint-John Perse, University of Michigan, 1973','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard-Allen Laden, Saint-John Perse\'s Vents: From Theme to Poetry, Yale University, 1974','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Jackson, Worlds Apart Structural Parallels in the Poetry of Paul Valéry, Saint-John Perse, Benjamin Perret and René Char, The Hague, 1976','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arthur J. Knodel, Saint-John Perse: Lettres, Princeton, 1979','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Edith Jonssen-Devillers, Cosmos and the Sacred in the poetics of Octavio Paz and Saint-John Perse, San Diego, University of California, 1976','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Jennings, "Saint-John Perse: the worldly seer", in Seven Men of Vision: an appreciation, London, 1976','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roger Little, "The World and the Word in Saint-John Perse", in Sensibility and Creation: Essays in XXth Century French Poetry, London and New York, 1977','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roger Little, "Claudel and Saint-John Perse. The Convert and the Unconvertible", Claudel Studies, VI, 1979','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['William Calin, "Saint-John Perse", in A Muse for heroes: Nine Centuries of the Epic in France, University of Toronto Press, 1983','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Winspur, "The Poetic Signifiance of the Thing-in-itself", Sub-stance, no. 41, 1983','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Fell, "A Critical Study of Saint-John Perse\'s Chronique"  . MA dissertation, University of Manchester, 1983','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saint-John Perse: Documentary Exhibition and Works on the Poem Amers, Washington, 1984–1985','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Erika Ostrovsky, Under the Sign of Ambiguity: Saint-John Perse/Alexis Leger, New York, 1985','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Winspur, Saint-John Perse and the Imaginary Reader, Geneva, 1988','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Baker, "Perse on Poetry", The Connecticut Review, Willimantic, XI, no. 1, 1988','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Baker, "Saint-John Perse, Alexis Leger, 1960", The Nobel Prize Winners: Literature, April 1988','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Erika Ostrovsky, "Saint-John Perse", The Twentieth Century, New York, 1990','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Luigi Fiorenzato, Anabasis/Anabase: T. S. Eliot translates Saint-John Perse, Padova, 1991–1992','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Baker, "Metric, Naming and Exile: Perse, Pound, Genet", in The Scope of Words in Honor to Albert S. Cook, New York, 1991','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Baker, Obdurate Brilliance: Exteriority and the Modern Long Poem, University of Florida Press, 1991','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Josef Krause, "The Two Axes of Saint-John Perse\'s Imagery", Studi Francesi, Torino, XXXVI, no. 106, 1992','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Rigolot, "Ancestors, Mentors and \'Grands Aînés\': Saint-John Perse\'s Chronique", Literary Generations, Lexington, 1992','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard L. Sterling, The Prose Works of Saint-John Perse. Towards an Understanding of His Poetry, New York, 1994','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard A. York, "Saint-John Perse, the diplomat", Claudel Studies, XXIII, 1–2, 1996','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Judith Urian, The Biblical context in Saint-John Perse\'s work, Hebrew University of Jerusalem, 1997','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mary Gallagher, "Seminal Praise: The Poetry of Saint-John Perse", in An Introduction to Caribbean Francophone writing, Oxford, 1999','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Rigolot, "Saint-John Perse\'s Oiseaux: from Audubon to Braque and beyond", in Resonant Themes: literature, history and the arts in XIXth – and XXth – century Europe, Chapel Hill, North Carolina, 1999','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Judith Urian, "Delicious abyss: the biblical darkness in the poetry of Saint-John Perse", Comparative literature studies, XXXVI, no. 3, 1999','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jeffrey Mehlman, Émigré New York. French Intellectuals in Wartime, Manhattan, 1940&#8211;1944, Baltimore and London, 2000','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zeyma Kamalick, In Defense of Poetry: T. S. Eliot\'s translation ofAnabase by Saint-John Perse, Princeton, 2000','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Emmanuelle Hériard Dubreuil, Une certaine idée de la France: Alexis Leger\'s views during the occupation of France June 1940 – August 1944, London School of Economics, 2001','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pierre Lastenet, Saint-John Perse and the Sacred, University of London, 2001','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marie-Noëlle Little, The Poet and the Diplomat [Correspondence Saint-John Perse/Dag Hammarskjöld], Syracuse University Press, 2001','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marie-Noëlle Little, "Travellers in two Worlds: Dag Hammarskjöld and Alexis Leger", in Development Dialogue, Uppsala, 2001','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Rigolot, Forged Genealogies: Saint-John Perse\'s Conversations with Culture, The University of North Carolina Press, 2002','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mary Gallagher, "Re-membering Caribbean childhoods, Saint-John Perse\'s Éloges and Patrick Chamoiseau\'s Antan d\'enfance", in The Francophone Caribbean today-literature, language, culture, The University of West Indies Press, 2003','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colette Camelin, "Hermes and Aphrodite in Saint-John Perse\'s Winds and Seemarks", in Hermes and Aphrodite Encounters, Birmingham, 2004','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henriette Levillain, Saint-John Perse, Ministère des Affaires étrangères, Paris, 2005','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Acquisto, "The Lyric of Narrative: Exile, Poetry and Story in Saint-John Perse and Elisabeth Bishop", Orbis Litterarum, no. 5, 2005','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Xue Die, "Saint-John Perse\'s Palm Trees", American Letters and Commentary, no. 17, 2005','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Valérie Loichot, "Saint-John Perse\'s Imagined Shelter: J\'habiterai mon nom, in Discursive Geographies, Writing Space and Place in French, Amsterdam, 2005','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Rigolot, "Saint-John Perse", in Transatlantic relations, France and the Americas, Culture, Politics, History, Oxford and Santa Barbara, 2005','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Valérie Loichot, Orphan Narratives: The Postplantation Literature of Faulkner, Glissant, Morrison and Saint-John Perse, University of Virginia Press, 2007','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Harris Feinsod, "Reconsidering the \'Spiritual Economy\': Saint-John Perse, his translators and the limits of internationalism", "Benjamin, Poetry and Criticism", Telos, New York, no. 38, 2007','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Poiana, "The order of Nemesis in Saint-John Perse\'s Vents", Neophilologus, vol. 91, no. 1, 2007','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jeffrey Meyers, "The Literary Politics of the Nobel Prize", Antioch Review, vol. 65, no. 2, 2007','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ May, Ernest Strange Victory, New York: Hill &amp; Wang, 2000, p. 150.','Saint-John_Perse']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2000 Pisma (1912–1973): Privatna pošta. Matica srpska, Novi Sad (private correspondence; posthumous)','Ivo_Andri%C4%87']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1939—Of Mice and Men—directed by Lewis Milestone, featuring Burgess Meredith, Lon Chaney, Jr., and Betty Field','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1949—The Red Pony—directed by Lewis Milestone, featuring Myrna Loy, Robert Mitchum, and Louis Calhern','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1992—Of Mice and Men—directed by Gary Sinise and starring John Malkovich and Gary Sinise','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "1939 Book Awards Given by Critics: Elgin Groseclose\'s \'Ararat\' is Picked as Work Which Failed to Get Due Recognition", The New York Times, February 14, 1940, p. 25. ProQuest Historical Newspapers The New York Times (1851–2007).','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['DeMott, Robert, ed. John Steinbeck, Novels 1942–1952 (Library of America, 2002) ISBN&#160;978-1-931082-07-5','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Davis, Robert C. The Grapes of Wrath: A Collection of Critical Essays. Englewood Cliffs, NJ: Prentice-Hall, 1982. PS3537 .T3234 G734','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['French, Warren. John Steinbeck\'s Fiction Revisited. NY: Twayne, 1994 ISBN&#160;0-8057-4017-1.','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hughes, R. S. John Steinbeck: A Study of the Short Fiction. R.S. Hughes. Boston&#160;: Twayne, 1989. ISBN&#160;0-8057-8302-4.','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meyer, Michael J. The Hayashi Steinbeck Bibliography, 1982–1996. Lanham, MD: Scarecrow, 1998 ISBN&#160;0-8108-3482-0.','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heavilin, Barbara A. John Steinbeck\'s The Grapes of Wrath: A Reference Guide. Westport, CT: Greenwood, 2002 ISBN&#160;0-313-31837-9.','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Li, Luchen. ed. John Steinbeck: A Documentary Volume. Detroit: Gale, 2005 ISBN&#160;0-7876-8127-X.','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steinbeck, John Steinbeck IV and Nancy (2001). The Other Side of Eden: Life with John Steinbeck. Prometheus Books. ISBN&#160;1-57392-858-5','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cup of Gold (1929)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Pony (1933)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To a God Unknown (1933)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tortilla Flat (1935)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Dubious Battle (1936)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1937)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (1939)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moon Is Down (1942)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cannery Row (1945)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wayward Bus (1947)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pearl (1947)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burning Bright (1950)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East of Eden (1952)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Thursday (1954)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Short Reign of Pippin IV: A Fabrication (1957)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Winter of Our Discontent (1961)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Acts of King Arthur and His Noble Knights (1976)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pastures of Heaven (1932)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Long Valley (1938)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forgotten Village (1941)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pearl (1947)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Pony (1949)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Viva Zapata! (1952)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1937 play)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1939 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1969 opera)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1992 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Best Laid Plans (2012 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (1940 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (1988 play)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (2007 opera)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Pony (1949 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Pony (1949 film score)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Pony (1973 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tortilla Flat (1942 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moon Is Down (1943 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La perla (The Pearl) (1947 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East of Eden (1955 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wayward Bus (1957 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['East of Eden (1981 miniseries)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cannery Row (1982 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Winter of Our Discontent (1983 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Dubious Battle (2016 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sea of Cortez: A Leisurely Journal of Travel and Research (1941)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bombs Away: The Story of a Bomber Team (1942)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Russian Journal (1948)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Log from the Sea of Cortez (1951)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Once There Was a War (1958)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Travels with Charley (1962)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['America and Americans (1966)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journal of a Novel: The East of Eden Letters (1969)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (1940 film)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (1988 play)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath (2007 opera)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1939)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1992)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Best Laid Plans (2012)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1937 play)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Mice and Men (1969 opera)','John_Steinbeck']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strofi Στροφή (Strophe, 1931)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sterna Στέρνα (The Cistern, 1932)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mythistorima Μυθιστόρημα (Mythical narrative, 1935)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tetradio Gymnasmaton Τετράδιο Γυμνασμάτων (Book of Exercises, 1940)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imerologio Katastromatos I Ημερολόγιο Καταστρώματος Ι ([Ship\'s] Log Book I, 1940)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imerologio Katastromatos II Ημερολόγιο Καταστρώματος ΙΙ (Log Book II, 1944)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kichli Κίχλη (The Thrush, 1947)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imerologio Katastromatos III Ημερολόγιο Καταστρώματος ΙΙΙ (Log Book III, 1955)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tria Kryfa Poiimata Τρία Κρυφά Ποιήματα (Three Secret Poems, 1966)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tetradio Gymnasmaton II Τετράδιο Γυμνασμάτων II (Book of Exercises ΙΙ, 1976)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Antigrafes (Translations) (1965)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meres (Days–diaries) (7 vols., published posthumously, 1975–1990)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Exi nyxtes stin Akropoli (Six Nights on the Acropolis) (published posthumously, 1974)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Varnavas Kalostefanos. Ta sxediasmata (Varnavas Kalostefanos. The drafts.) (published posthumously, 2007)','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Six Nights on the Acropolis, translated by Susan Matthias (2007).','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Complete Poems trans. Edmund Keeley and Philip Sherrard. (1995) London: Anvil Press Poetry. ISBN [English only]','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems, tr. E. Keeley, P. Sherrard (1981) [Greek and English texts]','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Poet\'s Journal: Days of 1945–1951 trans. Athan Anagnostopoulos. (1975) London: Harvard University Press. ISBN','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems trans. Rex Warner. (1960) London: Bodley Head; Boston and Toronto: Little, Brown and Company.','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems trans. Manolis (Emmanuel Aligizakis). (2012) Surrey: Libros Libertad. ISBN&#160;978-1926763-23-1','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['This Dialectic of Blood and Light, George Seferis - Philip Sherrard, An Exchange: 1946-1971, 2015 Limni (Greece): Denise Harvey (Publisher) ISBN&#160;978-960-7120-37-3','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eleni Kefala, Peripheral (Post) Modernity, Peter Lang, 2007, p. 160.','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beaton, Roderick (2003). George Seferis: Waiting for the Angel – A Biography. New Haven: Yale University Press. ISBN&#160;0-300-10135-X.','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loulakaki-Moore, Irene (2010). Seferis and Elytis as Translators. Oxford: Peter Lang. ISBN&#160;3039119184.','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tsatsos, Ioanna, Demos Jean (trans.) (1982). My Brother George Seferis. Minneapolis, Minn.: North Central Publishing.','Giorgos_Seferis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nausea / La nausée (1938)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wall / Le mur (1939)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bariona / Bariona, ou le fils du tonnerre (1940)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Flies / Les mouches (1943)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Exit / Huis clos (1944)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Reason / L\'âge de raison (1945)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reprieve / Le sursis (1945)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Respectful Prostitute / La putain respectueuse (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Victors / Morts sans sépulture (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Chips Are Down / Les jeux sont faits (1947)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Mesh / L\'engrénage (1948)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dirty Hands / Les mains sales (1948)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Troubled Sleep (London ed. (Hamilton) has title: Iron in the soul) / La mort dans l\'âme (1949)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Intimacy (1949)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil and the Good Lord / Le diable et le bon dieu (1951)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kean (1953)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nekrassov (1955)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Condemned of Altona / Les séquestrés d\'Altona (1959)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hurricane over Cuba / written and printed in 1961 in Brazil, along with Rubem Braga and Fernando Sabino (1961)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Trojan Women / Les Troyennes (1965)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Freud Scenario / Le scénario Freud (1984)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Imagination: A Psychological Critique / L\'imagination (1936)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Transcendence of the Ego / La transcendance de l\'égo (1937)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sketch for a Theory of the Emotions / Esquisse d\'une théorie des émotions (1939)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Imaginary / L\'imaginaire (1940)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Being and Nothingness / L\'être et le néant (1943)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Existentialism is a Humanism / L\'existentialisme est un humanisme (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Existentialism and Human Emotions / Existentialisme et émotions humaines (1957)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Search for a Method / Question de méthode (1957)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Critique of Dialectical Reason / Critique de la raison dialectique (1960, 1985)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notebooks for an Ethics / Cahiers pour une morale (1983)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Truth and Existence / Vérité et existence (1989)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baudelaire (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations I: Literary Critiques / Critiques littéraires (1947)&#91;124&#93;','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations II: What Is Literature? / Qu\'est-ce que la littérature&#160;? (1947)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations III (1949)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saint Genet, Actor and Martyr / S.G., comédien et martyr (1952)&#91;125&#93;','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Henri Martin Affair / L\'affaire Henri Martin (1953)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations IV: Portraits (1964)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations V: Colonialism and Neocolonialism (1964)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations VI: Problems of Marxism, Part 1 (1966)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations VII: Problems of Marxism, Part 2 (1967)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Family Idiot / L\'idiot de la famille (1971–72)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations VIII: Autour de 1968 (1972)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations IX: Mélanges (1972)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Situations X: Life/Situations: Essays Written and Spoken / Politique et Autobiographie (1976)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sartre By Himself / Sartre par lui-mème (1959)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Words / Les Mots (1964)&#91;125&#93;','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Witness to My Life &amp; Quiet Moments in a War / Lettres au Castor et à quelques autres (1983)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['War Diaries: Notebooks from a Phony War / Les carnets de la drole de guerre (1984)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ian H. Birchall, Sartre against Stalinism, Berghahn Books, 2004, p. 176: "Sartre praised highly [Lefebvre\'s] work on sociological methodology, saying of it: \'It remains regrettable that Lefebvre has not found imitators among other Marxist intellectuals\'."','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Memoirs: fifty years of political reflection, By Raymond Aron (1990)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jean-Pierre Boulé (2005), Sartre, self-formation, and masculinities, p.,53','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Godo, Emmanuel (2005), Sartre en diable, p. 41','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hayman, Ronald (1987), Sartre: a life, pp.69, 318','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sartre by David Drake, 2005, p. 6','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wilfred Desan, The Tragic Finale: An Essay on the Philosophy of Jean-Paul Sartre (New York: Harper Torchbooks, 1960) xiv.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Deirdre Bair, Simone de Beauvoir: A Biography (New York: Touchstone Book, 1990), pp. 145–146.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ann Fulton, Apostles of Sartre: Existentialism in America, 1945–1963 (Evanston, IL: Northwestern University Press, 1999) 7.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Harold Bloom (ed.), Jean-Paul Sartre, Infobase Publishing, 2009, p. 200.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Simone de Beauvoir, La Force de l’âge, Gallimard, 1960, p. 158.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jean-Paul Sartre, "Merleau-Ponty vivant", in Situations, IV: portraits, Gallimard, 1964, p. 192.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ István Mészáros, The Work of Sartre: Search for Freedom and the Challenge of History, rev. ed. (New York: Monthly Review, 2012), p. 16.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ronald Hayman. Sartre: A Biography. Carroll &amp; Graf, 1992, p. 464.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cohen-Solal, Annie. Sartre: A Life. Random House, Inc., 1987, p. 523.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Farina, Gabriella (2014). Some reflections on the phenomenological method. Dialogues in Philosophy, Mental and Neuro Sciences, 7(2):50–62.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Roudinesco, Elisabeth. Jacques Lacan &amp; Co: A History of Psychoanalysis in France, 1925–1985. Chicago: University of Chicago Press, 1990, p. 166','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Marcuse, Herbert. "Sartre\'s Existentialism". Printed in Studies in Critical Philosophy. Translated by Joris De Bres. London: NLB, 1972. p. 161','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aronson, Ronald (1980) Jean-Paul Sartre – Philosophy in the World. London: NLB','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baert, Patrick (2015)  The Existentialist Moment; The Rise of Sartre as a Public Intellectual. Cambridge: Polity Press.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bondy, Francois (1967) "Jean-Paul Sartre and Politics" pages 25–48 from The Journal of Contemporary History, Volume 2, No. 2, April 1967.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gerassi, John (1989) Jean-Paul Sartre: Hated Conscience of His Century. Volume 1: Protestant or Protester? Chicago: University of Chicago Press','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Judaken, Jonathan (2006) Jean-Paul Sartre and the Jewish Question: Anti-antisemitism and the Politics of the French Intellectual. Lincoln: University of Nebraska Press','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kirsner, Douglas (2003) The Schizoid World of Jean-Paul Sartre and R.D. Laing. New York: Karnac','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ousby, Ian (2000) Occupation The Ordeal of France, 1940-1944, New York: Cooper Square Press.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scriven, Michael (1993) Sartre and The Media. London: MacMillan Press Ltd','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scriven, Michael (1999) Jean-Paul Sartre: Politics and Culture in Postwar France. London: MacMillan Press Ltd','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thody, Philip (1964) Jean-Paul Sartre. London: Hamish Hamilton','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Annie Cohen-Solal, Sartre: A Life. Translated by Anna Cancogni. New York: Pantheon Books, 1987.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Hayman, Sartre: A Biography. New York: Carroll &amp; Graf Publishers, 1987. (Detailed chronology of Sartre\'s life on pages 485–510.)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Simone de Beauvoir, Adieux: A Farewell to Sartre, New York: Pantheon Books, 1984.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Allen, James Sloan, "Condemned to Be Free," Worldly Wisdom: Great Books and the Meanings of Life, Savannah: Frederic C. Beil, 2008. ISBN&#160;978-1929490-35-6.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Churchill and Jack Reynolds (eds.)  Jean-Paul Sartre: Key Concepts, London/NewYork: Routledge, 2014.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gianluca Vagnarelli, La democrazia tumultuaria. Sulla filosofia politica di Jean-Paul Sartre, Macerata, EUM, 2010.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Doran, "Sartre’s Critique of Dialectical Reason and the Debate with Lévi-Strauss," Yale French Studies 123 (2013): 41–62.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Flynn, Sartre and Marxist Existentialism: The Test Case of Collective Responsibility, Chicago: University of Chicago Press, 1984.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Gerassi, Jean-Paul Sartre: Hated Conscience of His Century, Volume 1: Protestant or Protester?, University of Chicago Press, 1989. ISBN&#160;0-226-28797-1.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['R. D. Laing and D. G. Cooper, Reason and Violence: A Decade of Sartre\'s Philosophy, 1950–1960, New York: Pantheon, 1971.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Suzanne Lilar, A propos de Sartre et de l\'amour, Paris: Grasset, 1967.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Axel Madsen, Hearts and Minds: The Common Journey of Simone de Beauvoir and Jean-Paul Sartre, William Morrow &amp; Co, 1977.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jean-Paul Sartre and Benny Levy, Hope Now: The 1980 Interviews, translated by Adrian van den Hoven, Chicago: University of Chicago Press, 1996.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jonathan Webber The existentialism of Jean-Paul Sartre, London: Routledge, 2009','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['H. Wittmann, Sartre und die Kunst. Die Porträtstudien von Tintoretto bis Flaubert, Tübingen: Gunter Narr Verlag, 1996.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wilfrid Desan, The Tragic Finale: An Essay on the philosophy of Jean-Paul Sartre (1954)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph S. Catalano, A Commentary on Jean-Paul Satre\'s Critique of Dialectical Reason, 9780226097015, 0226097013	University of Chicago Press	1987','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alfredo Gomez-Muller: Sartre, de la nausée à l\'engagement. Paris, éditions du Félin, 2014.','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nausea (1938)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wall (1939)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Reason (1945)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reprieve (1945)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Troubled Sleep (1949)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Mesh (1948)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Intimacy (1949)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hurricane over Cuba (1961)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bariona (1940)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Flies (1943)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Exit (1944)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morts sans sépulture (1945)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Respectful Prostitute (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Chips Are Down  (1947)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dirty Hands (1948)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil and the Good Lord (1951)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kean (1953)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nekrassov (1955)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Condemned of Altona (1959)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Trojan Woman (1965)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Freud Scenario (1984)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Being and Nothingness (1943)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Existentialism and Humanism (1946)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sartre by Himself (1959)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Words (1964)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Witness to My Life &amp; Quiet Moments in a War (1983)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['War Diaries: Notebooks from a Phony War (1984)','Jean-Paul_Sartre']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Donskie Rasskazy, 1925 – Tales of the Don.','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Podnyataya Tselina, 1932–1960 – Virgin Soil Upturned (1935); Harvest on the Don (1960).','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oni Srazhalis Za Rodinu, 1942 – They Fought for Their Country.','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nauka Nenavisti, 1942 – Hate / The Science of Hatred.','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oni Srazhalis Za Rodinu, 1959 – They Fought for their Country','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One Man\'s Destiny, and Other Stories, Articles, and Sketches, 1923–1963, 1967','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fierce and Gentle Warriors, 1967.','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Po Veleniju Duši, 1970 – At the Bidding of the Heart','Mikhail_Sholokhov']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridal Canopy (1931), translated from Hakhnāsat kallāh. An epic describing Galician Judaism at the start of the 19th century. The story of a poor but devout Galician Jew, Reb Yudel, who wanders the countryside with his companion, Nuta, during the early 19th century, in search of bridegrooms for his three daughters.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Heart of the Seas, a story of a journey to the land of Israel (1933), translated from Bi-levav yamim. A short novel about a group of ten men who travel from Eastern Europe to Jerusalem.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Simple Story (1935), translated from Sipur pashut. A short novel about a young man, his search for a bride, and the lessons of marriage.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Guest for the Night (1938), translated from Ore\'ah Noteh Lalun. A novel about the decline of eastern European Jewry. The narrator visits his old hometown and discovers that great changes have occurred since World War I.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Betrothed (1943), translated from Shevuat Emunim. A short novel.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Edo and Enam (1950). A short novel.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To This Day (1952), translated from ʿAd henah. A tale of a young writer stranded in Berlin during World War I.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['At the Handles of the Lock (1923), a collection of love stories, including "Bidmay Yameha" ("In the Prime of Her Life"), "A Simple Story", and "The Dune".','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Simple Story", revised edition, translated by Hillel Halkin, The Toby Press, 2014.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shira", revised edition of SY Agnon\'s final novel, The Toby Press, 2014','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Israeli Stories, ed. Joel Blocker. Contains the stories "Tehilah" (1950) and "Forevermore" (1954).','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Dwelling Place of My People, contains 16 short stories about the Hassidim  of Poland, from the Hebrew Volume "These and Those" (1932).','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tehilah, Israel Argosy, trans. by Walter Lever, Jerusalem Post Press, Jerusalem, 1956','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Days of Awe (1938), a book of customs, interpretations, and legends for the Jewish days of mercy and forgiveness: Rosh Hashanah, Yom Kippur, and the days between.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Present at Sinai: The Giving of the Law (1959), an anthology for the festival of Shavuot.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ir Umeloah ("A City and the Fullness Thereof") (1973), a collection of stories and legends about Buczacz, Agnon\'s hometown.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Mr. Lublin\'s Shop (1974), set in Germany of the First World War.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Within the Wall (1975), a collection of four stories.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Myself to Myself (1976), a collection of essays and speeches.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Introductions (1977), stories.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Book, Writer and Story (1978), stories about writers and books from the Jewish sources.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beams of Our House (1979), two stories, the first about a Jewish family in Galicia, the second about the history of Agnon\'s family.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Esterlein Yakirati ("Dear Esther: Letters 1924–1931" (1983), letters from Agnon to his wife.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Shroud of Stories (1985).','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Correspondence between S.Y. Agnon and S. Schocken (1991), letters between Agnon and his publisher.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Agnon\'s Alef Bet Poems (1998), a children\'s guide to the Hebrew Alphabet.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Book That Was Lost: Thirty Five Stories (2008)','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Horst Frenz, ed. Nobel Lectures, Literature 1901–1967. Amsterdam: Elsevier Publishing Company, 1969. Nobel Prize acceptance speech','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arnold J. Band, Nostalgia and nightmare&#160;: a study in the fiction of S.Y. Agnon, Berkeley and Los Angeles&#160;: University of California Press, 1968.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gershon Shaked, Shmuel Yosef Agnon: A Revolutionary Traditionalist. New York University Press, 1989.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Golomb Hoffman, Between Exile and Return: S.Y. Agnon and the Drama of Writing, New York: SUNY, 1991. ISBN&#160;0-7914-0541-9.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Amos Oz, The Silence of Heaven: Agnon\'s Fear of God, Princeton University Press, 2000.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roman Katsman, Literature, History, Choice: The Principle of Alternative History in Literature (S.Y. Agnon, The City with All That is Therein). Newcastle: Cambridge Scholars Publishing, 2013.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yaniv Hagbi, Language, Absence, Play: Judaism and Superstructuralism in the Poetics of S. Y. Agnon, Syracuse: Syracuse University Press, 2009.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ilana Pardes, Agnon\'s Moonstruck Lovers: The Song of Songs in Israeli Culture, Seattle: University of Washington Press, 2013.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ahuva Feldman, "Consciousness of time and mission in S. Y. Agnon\'s Shira. Hebrew Studies 50 (2009) 339-381.','Shmuel_Yosef_Agnon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Fahlbusch, Erwin and Bromiley, Geoffrey William. The Encyclopedia of Christianity. Grand Rapids, MI: Leiden, Netherlands: Wm. B. Eerdmans; Brill, 1999–2003, 1:244.','German_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Adolf Reinecke, Die deutsche Buchstabenschrift: ihre Entstehung und Entwicklung, ihre Zweckmäßigkeit und völkische Bedeutung, Leipzig, Hasert, 1910','German_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El Señor Presidente. – Mexico City&#160;: Costa-Amic, 1946 (translated by Frances Partridge. New York: Macmillan, 1963)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hombres de maíz. – Buenos Aires&#160;: Losada, 1949 (Men of Maize / translated by Gerald Martin. – New York&#160;: Delacorte/Seymour Lawrence, 1975)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Viento fuerte. – Buenos Aires&#160;: Ministerio de Educación Pública, 1950 (Strong Wind / translated by Gregory Rabassa. – New York&#160;: Delacorte, 1968; Cyclone / translated by Darwin Flakoll and Claribel Alegría. – London&#160;: Owen, 1967)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El papa verde. – Buenos Aires&#160;: Losada, 1954 (The Green Pope / translated by Gregory Rabassa. – New York&#160;: Delacorte, 1971)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Los ojos de los enterrados. – Buenos Aires&#160;: Losada, 1960 (The Eyes of the Interred / translated by Gregory Rabassa. – New York&#160;: Delacorte, 1973)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El alhajadito. – Buenos Aires&#160;: Goyanarte, 1961 (The Bejeweled Boy / translated by Martin Shuttleworth. – Garden City, N.Y.: Doubleday, 1971)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mulata de tal. – Buenos Aires&#160;: Losada, 1963 (The Mulatta and Mr. Fly / translated by Gregory Rabassa. – London&#160;: Owen, 1963)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maladrón. – Buenos Aires, Losada, 1969','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Viernes de Dolores. – Buenos Aires&#160;: Losada, 1972','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rayito de estrella. – Paris&#160;: Imprimerie Française de l\'Edition, 1925','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leyendas de Guatemala. – Madrid&#160;: Oriente, 1930','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Week-end en Guatemala. – Buenos Aires&#160;: Losada, 1956','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El espejo de Lida Sal. – Mexico City&#160;: Siglo Veintiuno, 1967 (The Mirror of Lida Sal&#160;: Tales Based on Mayan Myths and Guatemalan Legends / translated by Gilbert Alter-Gilbert. – Pittsburgh&#160;: Latin American Literary Review, 1997)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tres de cuatro soles. – Madrid&#160;: Closas-Orcoyen, 1971','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Maquinita de hablar. – 1971 (The Talking Machine / translated by Beverly Koch. – Garden City, N.Y.&#160;: Doubleday, 1971)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Torotumbo; La audiencia de los confines; Mensajes indios. – Barcelona&#160;: Plaza &amp; Janés, 1967','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Antología de Miguel Ángel Asturias . – México, Costa-Amic, 1968','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Viajes, ensayos y fantasías / Compilación y prólogo Richard J. Callan . – Buenos Aires&#160;: Losada, 1981','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El hombre que lo tenía todo, todo, todo; La leyenda del Sombrerón; La leyenda del tesoro del Lugar Florido. – Barcelona&#160;: Bruguera, 1981','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El árbol de la cruz. – Nanterre&#160;: ALLCA XX/Université Paris X, Centre de Recherches Latino-Américanes, 1993','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cuentos y leyendas. – Madrid, Allca XX, 2000 (Mario Roberto Morales Compilation)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rayito de estrella; fantomima. –  Imprimerie Française de l\'Edition, 1929','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Emulo Lipolidón: fantomima. – Guatemala City&#160;: Américana, 1935','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sonetos. – Guatemala City&#160;: Américana, 1936','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alclasán; fantomima. – Guatemala City&#160;: Américana, 1940','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Con el rehén en los dientes: Canto a Francia. – Guatemala City&#160;: Zadik, 1942','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anoche, 10 de marzo de 1543. – Guatemala City&#160;: Talleres tipográficos de Cordón, 1943','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poesía&#160;: Sien de alondra. – Buenos Aires&#160;: Argos, 1949','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ejercicios poéticos en forma de sonetos sobre temas de Horacio. – Buenos Aires&#160;: Botella al Mar, 1951','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alto es el Sur&#160;: Canto a la Argentina. – La Plata, Argentina&#160;: Talleres gráficos Moreno, 1952','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bolívar&#160;: Canto al Libertador. – San Salvador&#160;: Ministerio de Cultura, 1955','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nombre custodio e imagen pasajera. – La Habana, Talleres de Ocar, García, S.A., 1959','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Clarivigilia primaveral. – Buenos Aires&#160;: Losada, 1965.','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sonetos de Italia. – Varese-Milán, Instituto Editoriale Cisalpino, 1965.','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miguel Ángel Asturias, raíz y destino: Poesía inédita, 1917-1924. – Guatemala City&#160;: Artemis Edinter, 1999','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soluna&#160;: Comedia prodigiosa en dos jornadas y un final. – Buenos Aires&#160;: Losange, 1955','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La audiencia de los confines. – Buenos Aires&#160;: Ariadna, 1957','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Teatro&#160;: Chantaje, Dique seco, Soluna, La audiencia de los confines. – Buenos Aires&#160;: Losada, 1964','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Emulo Lipolidón: fantomima. – Guatemala City&#160;: Américana, 1935.','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sociología guatemalteca: El problema social del indio. – Guatemala City Sánchez y de Guise, 1923 (Guatemalan Sociology&#160;: The Social Problem of the Indian / translated by Maureen Ahern. – Tempe&#160;: Arizona State University Center for Latin American Studies, 1977)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La arquitectura de la vida nueva. – Guatemala City&#160;: Goubaud, 1928','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carta aérea a mis amigos de América. – Buenos Aires&#160;: Casa impresora Francisco A. Colombo, 1952','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rumania; su nueva imagen. – Xalapa&#160;: Universidad Veracruzana, 1964','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Latinoamérica y otros ensayos. – Madrid&#160;: Guadiana, 1968','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Comiendo en Hungría. – Barcelona&#160;: Lumen, 1969','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['América, fábula de fábulas y otros ensayos. – Caracas&#160;: Monte Avila Editores, 1972','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Asturias, Torotumbo, 1971.','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "A Tendency of Commitment". Time (October 27, 1967).','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leyendas de Guatemala (1930)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El Señor Presidente (1946)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Men of Maize (1949)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mulata de tal (1963)','Miguel_%C3%81ngel_Asturias']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Okubo Takaki (2004), Kawabata Yasunari—Utsukushi Nihon no Watashi. Minerva Shobo','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Keene, Donald (1984). Dawn to the West: Japanese Literature of the Modern Era; Vol. 1: Fiction, "Kawabata Yasunari" pp.&#160;786–845','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Starrs, Roy (1998) Soundings in Time: The Fictive Art of Kawabata Yasunari, University of Hawai\'i Press/RoutledgeCurzon','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Scarlet Gang of Asakusa (1930)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Snow Country (1935–1937), (1947)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Master of Go (1951–1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thousand Cranes (1949–1952)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sound of the Mountain (1949–1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lake (1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The House of the Sleeping Beauties (1961)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Capital (1962)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beauty and Sadness (1964)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dandelion (1964, 1972)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sound of the Mountain (1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dancing Girl of Izu (1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Snow Country (1957)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Twin Sisters of Kyoto (1963)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['With Beauty and Sorrow (1965)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Woman of the Lake (1966)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dancing Girl of Izu (1974)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Koto (1980)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sleeping Beauty (2011)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Izu no odoriko (1954)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Izu no Odoriko (1974)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Travellers and Magicians (2003)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Izu no odoriko (1993)','Yasunari_Kawabata']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Acte sans Paroles I (1956); Act Without Words I (1957)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Acte sans Paroles II (1956); Act Without Words II (1957)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Play (performed in German, as Spiel, 1963; English version 1964)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Come and Go (first performed in German, then English, 1966)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Neither (1977) (An "opera", music by Morton Feldman)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beginning To End  with Jack MacGowran (1965)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beckett Directs Beckett (1988/92)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Film (1965)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Murphy (1938); 1947 Beckett\'s French version','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Watt (1953); 1968, Beckett\'s French version','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Molloy (1951); English version (1955)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Malone meurt (1951); Malone Dies (1956)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'innommable (1953); The Unnamable (1958)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Comment c\'est (1961); How It Is (1964)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mercier and Camier (written 1946, published 1970); English translation (1974)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['More Pricks Than Kicks (1934)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"L\'Expulsé", written 1946, in Nouvelles et Textes pour rien (1955); "The Expelled" Stories and Texts for Nothing (1967)&#91;79&#93;','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Le Calmant", written 1946, in Nouvelles et Textes pour rien (1955); "The Calmative", Stories and Texts for Nothing (1967)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"La Fin", written 1946, partially published in Les Temps Modernes in 1946 as "Suite"; in Nouvelles et Textes pour rien (1955); "The End", Stories and Texts for Nothing (1967)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Texts for Nothing", translated into French for Nouvelles et Textes pour rien (1955); Stories and Texts for Nothing (1967)&#91;80&#93;','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"L\'Image" (1959) a fragment from Comment c\'est &#91;81&#93;','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Dépeupleur (1970); The Lost Ones (1971)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pour finir encore et autres foirades (1976); For to End Yet Again and Other Fizzles (1976)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Company (1980)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mal vu mal dit (1981); Ill Seen Ill Said (1982)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Worstward Ho (1983)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Complete Short Prose: 1929-1989, ed S. E. Gontarski. New York: Grove Press, 1995','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Dante...Bruno. Vico..Joyce" (1929; Beckett\'s contribution to the collection Our Exagmination Round His Factification for Incamination of Work in Progress)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Proust (1931)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Three Dialogues (with Georges Duthuit and Jacques Putnam) (1949)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Disjecta: Miscellaneous Writings and a Dramatic Fragment (1929–1967)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Whoroscope (1930)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Echo\'s Bones and other Precipitates (1935)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poèmes (1968, expanded 1976, 1979, 1992) [1]','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems in English (1961)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems in English and French (1977)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What is the Word (1989)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems 1930–1989 (2009)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Poems of Samuel Beckett, edited, annotated by Seán Lawlor, John Pilling (2012, Faber and Faber, 2014, Grove Press)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Livia Plurabelle (James Joyce, French translation by Beckett and others) (1931)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Negro: an Anthology (Nancy Cunard, editor) (1934)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anthology of Mexican Poems (Octavio Paz, editor) (1958)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Tune (Robert Pinget) (1963)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ C. J. Ackerley and S. E. Gontarski, The Grove Companion to Samuel Beckett (New York: Grove Press, 2004), 108.','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ See Samuel Beckett, Lettres, I, 1929-1940, Gallimard, Paris, 2014.','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Knowlson (1997) p352–353.','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ These three writers and the artist Arikha cited in Beckett Remembering, Remembering Beckett (ed. James and Elizabeth Knowlson, New York: Arcade, 2006)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cited in No Author Better Served: The Correspondence of Samuel Beckett and Alan Schneider (ed. Maurice Harmon, Cambridge: Harvard University Press, 1998), 442-443.','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ A German version He Joe was broadcast first in 1966. Knowlson, J., Damned to Fame: The Life of Samuel Beckett (London: Bloomsbury, 1996), p 535','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Introduction" to The Complete Short Prose: 1929-1989, ed S. E. Gontarski. New York: Grove Press, 1995, p. xiii.','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Notfilm (2015 documentary)','Samuel_Beckett']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Solzhenitsyn Reader: New and Essential Writings 1947–2005, (2008), ISI Books. pp. 602–05.','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prose Poems (1958–1960)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prussian Nights (1974)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Love-Girl and the Innocent (1969)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Candle in the Wind (1960)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Circle (1968)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cancer Ward (1968)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['August 1914 (1971)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['November 1916 (1985)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March 1917 (1989)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One Day in the Life of Ivan Denisovich (1962)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Incident at Krechetovka Station (1963)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Matryona\'s Place (1963)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For the Good of the Cause (1963)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gulag Archipelago (1973–78)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Oak and the Calf (1975)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Two Hundred Years Together (2003)','Aleksandr_Solzhenitsyn']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alternative rock musician Lynda Thomas released as a single the flamenco song Ay, Ay, Ay (2001), which is based on the book "Twenty Love Poems and a Song of Despair".','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mexican composer Daniel Catán wrote an opera Il Postino (2010), whose premiere production featured Spanish tenor Plácido Domingo portraying Pablo Neruda.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dutch composer Peter Schat used twelve poems from the Canto General for his cantata Canto General for mezzo-soprano, violin and piano (1974), which he dedicated to the memory of the late president Salvador Allende.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chilean composer Sergio Ortega worked closely with the poet in the musical play Fulgor y muerte de Joaquín Murieta (1967). Three decades later, Ortega expanded the piece into an opera, leaving Neruda\'s text intact.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Lieberson composed Neruda Songs (2005) and Songs of Love and Sorrow (2010) based on Cien Sonetos de Amor.&#91;64&#93;','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['With permission from the Fundación Neruda, Marco Katz composed a song cycle based on the volume Piedras del cielo for voice and piano.&#91;65&#93;Centaur Records CRC 3232, 2012.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Crepusculario. Santiago, Ediciones Claridad, 1923.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Veinte poemas de amor y una canción desesperada. Santiago, Editorial Nascimento, 1924.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tentativa del hombre infinito. Santiago, Editorial Nascimento, 1926.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anillos. Santiago, Editorial Nascimento, 1926. (Prosa poética de Pablo Neruda y Tomás Lago.)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El hondero entusiasta. Santiago, Empresa Letras, 1933.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['El habitante y su esperanza. Novela. Santiago, Editorial Nascimento, 1926.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Residencia en la tierra (1925–1931). Madrid, Ediciones del Árbol, 1935.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['España en el corazón. Himno a las glorias del pueblo en la guerra: (1936–1937). Santiago, Ediciones Ercilla, 1937.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuevo canto de amor a Stalingrado. México, 1943.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tercera residencia (1935–1945). Buenos Aires, Losada, 1947.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alturas de Macchu Picchu. Ediciones de Libreria Neira, Santiago de Chile, 1948.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Canto general. México, Talleres Gráficos de la Nación, 1950.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Todo el amor. Santiago, Editorial Nascimento, 1953.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Las uvas y el viento. Santiago, Editorial Nascimento, 1954.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Odas elementales. Buenos Aires, Editorial Losada, 1954.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuevas odas elementales. Buenos Aires, Editorial Losada, 1955.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tercer libro de las odas. Buenos Aires, Losada, 1957.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Estravagario. Buenos Aires, Editorial Losada, 1958.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Navegaciones y regresos. Buenos Aires, Editorial Losada, 1959.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cien sonetos de amor. Santiago, Editorial Universitaria, 1959.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Canción de gesta. La Habana, Imprenta Nacional de Cuba, 1960.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poesías: Las piedras de Chile. Buenos Aires, Editorial Losada, 1960. Las Piedras de Pablo Neruda','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cantos ceremoniales. Buenos Aires, Losada, 1961.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memorial de Isla Negra. Buenos Aires, Losada, 1964. 5 volúmenes.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arte de pájaros. Santiago, Ediciones Sociedad de Amigos del Arte Contemporáneo, 1966.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fulgor y muerte de Joaquín Murieta. Santiago, Zig-Zag, 1967. La obra fue escrita con la intención de servir de libreto para una ópera de Sergio Ortega.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Barcarola. Buenos Aires, Losada, 1967.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Las manos del día. Buenos Aires, Losada, 1968.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Comiendo en Hungría. Editorial Lumen, Barcelona, 1969. (En co-autoría con Miguel Ángel Asturias)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fin del mundo. Santiago, Edición de la Sociedad de Arte Contemporáneo, 1969. Con Ilustraciones de Mario Carreño, Nemesio Antúnez, Pedro Millar, María Martner, Julio Escámez y Oswaldo Guayasamín.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aún. Editorial Nascimento, Santiago, 1969.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maremoto. Santiago, Sociedad de Arte Contemporáneo, 1970. Con Xilografías a color de Carin Oldfelt Hjertonsson.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La espada encendida. Buenos Aires, Losada, 1970.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Las piedras del cielo. Editorial Losada, Buenos Aires, 1970.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Discurso de Estocolmo. Alpignano, Italia, A. Tallone, 1972.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Geografía infructuosa. Buenos Aires, Editorial Losada, 1972.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La rosa separada. Éditions du Dragon, París, 1972 con grabados de Enrique Zañartu.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Incitación al Nixonicidio y alabanza de la revolución chilena. Santiago, Empresa Editora Nacional Quimantú, Santiago, 1973.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Canto General (University of California Press, 1991) (translated by Jack Schmitt)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Odes of Pablo Neruda (University of California Press, 1990) (translated by Margaret Sayers Peden)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All The Odes (Farrar, Straus, Giroux, 2013) (various translators, prominently Margaret Sayers Peden)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['100 Love Sonnets (bilingual edition) (Exile Editions, 2004, new edition 2016) (translated and with an afterword by Gustavo Escobedo; Introduction by Rosemary Sullivan; Reflections on reading Neruda by George Elliott Clarke, Beatriz Hausner and A.F. Moritz)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Twenty Love Poems and a Song of Despair (bilingual edition) (London: Jonathan Cape Ltd London; Penguin Books, 1976 translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hands of the Day (Copper Canyon Press, 2008) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Questions (Copper Canyon Press, 1991, 2001) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yellow Heart (Copper Canyon Press, 1990, 2002) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stones of the Sky (Copper Canyon Press, 1990, 2002) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea and the Bells (Copper Canyon Press, 1988, 2002) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Winter Garden (Copper Canyon Press, 1987, 2002) (translated by James Nolan)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Separate Rose (Copper Canyon Press, 1985) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Still Another Day (Copper Canyon Press, 1984, 2005) (translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Blue Shore of Silence: Poems of the Sea (Rayo Harper Collins, 2004) (translated by Alastair Reid, epilogue Antonio Skármeta)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Captain\'s Verses (bilingual edition) (New Directions, 1972) (translated by Donald D. Walsh)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Residence on Earth (bilingual edition) (New Directions, 1973) (translated by Donald D. Walsh)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['100 Love Sonnets (bilingual edition) (University of Texas Press, 1986) (translated by Stephen Tapscott)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Extravagaria (bilingual edition) (Farrar, Straus and Giroux, 1974) (translated by Alastair Reid)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Then Come Back: The Lost Neruda (Copper Canyon Press, 2016) (translated by Forrest Gander)&#91;74&#93;','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Venture of the Infinite Man (City Lights, 2017) (translated by Jessica Powell; introduction by Mark Eisner)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Book of Twilight (Copper Canyon Press, 2018)(translated by William O\'Daly)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Tarn (1975) p. 15','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Tarn (1975) p. 16','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Feinstein (2005) pp. 312–313','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Roman, Joe. (1993)  Octavio Paz Chelsea House Publishers  ISBN&#160;0-7910-1249-2','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Paz, Octavio  (1991)  On Poets and Others. Arcade. ISBN&#160;1-55970-139-0  p.&#160;127','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Feinstein (2005) pp. 236–7','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Feinstein (2005) p. 290','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pablo Neruda (1994). Late and posthumous poems, 1968–1974. Grove Press.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Pablo Neruda, Nobel Poet, Dies in a Chilean Hospital", The New York Times, September 24, 1973.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Neruda and Vallejo: Selected Poems, Robert Bly, ed.; Beacon Press, Boston, 1993, p. xii.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Earth-Shattering Poems, Liz Rosenberg, ed.; Henry Holt, New York, 1998, p. 105.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Amazon description of The Dreamer (2010)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Feinstein, Adam  Pablo Neruda: A Passion for Life, Bloomsbury, 2004. ISBN&#160;1-58234-410-8','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Neruda, Pablo. Memoirs (translation of Confieso que he vivido: Memorias), translated by Hardie St. Martin, Farrar, Straus, and Giroux, 1977. (1991 edition is ISBN&#160;0-374-20660-0)','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tarn, Nathaniel, Ed (1975) Pablo Neruda: Selected Poems Penguin.','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burgin, Richard (1968) Conversations with Jorge Luis Borges, Holt, Rhinehart, &amp; Winston','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The poetry of Pablo Neruda. Costa, René de., 1979','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pablo Neruda: Memoirs (Confieso que he vivido: Memorias) / tr. St. Martin, Hardie, 1977','Pablo_Neruda']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1949) Der Zug war pünktlich (The Train Was on Time) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1950) Wanderer, kommst du nach Spa…—short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1951) Die schwarzen Schafe (Black Sheep) – short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1951) Nicht nur zur Weihnachtszeit (Christmas Not Just Once a Year) – short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1951) Wo warst du, Adam? (And where were you, Adam?) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1952) Die Waage der Baleks (The Balek Scales) – short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1953) Und sagte kein einziges Wort (And Never Said a Word) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1954) Haus ohne Hüter (House without Guardians&#160;; Tomorrow and Yesterday) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1955) Das Brot der frühen Jahre (The Bread of Those Early Years) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1957) Irisches Tagebuch (Irish Journal) – travel writing','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1957) Die Spurlosen (Missing Persons) – essays','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1958) Doktor Murkes gesammeltes Schweigen (Murke\'s Collected Silences, 1963) – short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1959) Billard um halb zehn (Billiards at Half-past Nine) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1962) Ein Schluck Erde (A Mouthful of Earth) – play','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1963) Ansichten eines Clowns (The Clown) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1963) Anekdote zur Senkung der Arbeitsmoral (Anecdote Concerning the Lowering of Productivity) – short story','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1964) Entfernung von der Truppe (Absent Without Leave) – two novellas','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1966) Ende einer Dienstfahrt (End of a Mission) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1971) Gruppenbild mit Dame (Group Portrait with Lady) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1974) Die verlorene Ehre der Katharina Blum (The Lost Honour of Katharina Blum) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1979) Du fährst zu oft nach Heidelberg und andere Erzählungen (You Go to Heidelberg Too Often) – short stories','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1979) Fürsorgliche Belagerung (The Safety Net) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1981) Was soll aus dem Jungen bloß werden? Oder: Irgendwas mit Büchern (What\'s to Become of the Boy?) – autobiography of Böll\'s school years 1933–1937','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1982) Vermintes Gelände','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1982, written 1948) Das Vermächtnis (A Soldier\'s Legacy) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1983) Die Verwundung und andere frühe Erzählungen (The Casualty) – unpublished stories from 1947–1952','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1985) Frauen vor Flusslandschaft (Women in a River Landscape)','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1986) The Stories of Heinrich Böll – U.S. release','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1992, written 1949/50) Der Engel schwieg (The Silent Angel) – novel','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1995) Der blasse Hund – unpublished stories from 1937 &amp; 1946–1952','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2002, written 1946–1947) Kreuz ohne Liebe','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2004, written 1938) Am Rande der Kirche','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2011) The Collected Stories  – reissues of translations, U.S. release','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Frank Finlay (1996) On the Rationality of Poetry: Heinrich Böll\'s Aesthetic Thinking, p.8','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heinz Ludwig Arnold, ed. (1982). Heinrich Böll. Munich.&#160;','Heinrich_B%C3%B6ll']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Happy Valley (1939)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Living and the Dead (1941)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Aunt\'s Story (1948)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tree of Man (1955)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Voss (1957)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Riders in the Chariot (1961)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Solid Mandala (1966)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Vivisector (1970)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye of the Storm (1973)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fringe of Leaves (1976)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Twyborn Affair (1979)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memoirs of Many in One (1986)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hanging Garden (2012) (Unfinished, posthumous)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Burnt Ones (1964)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cockatoos (1974)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Three Uneasy Pieces (1987)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bread and Butter Women (1935) Unpublished.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The School for Friends (1935) Unpublished.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Return to Abyssinia (1948) Unpublished.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Ham Funeral (1947) prem. Union Theatre, Adelaide, 1961.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Season at Sarsaparilla (1962)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Cheery Soul (1963)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Night on Bald Mountain (1964)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big Toys (1977)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Signal Driver: a Morality Play for the Times (1982)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Netherwood (1983)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shepherd on the Rocks (1987)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Night the Prowler (1978)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flaws in the Glass (1981)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barry Argyle, Patrick White, Writers and Critics Series, Oliver and Boyd, London, 1967','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Beatson, The Eye in the Mandala, Patrick White: A Vision of Man and God, Barnes &amp; Noble, London, 1976','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Docker, Patrick White and Romanticism: The Vivisector, Southerly, No.1, 1973','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Simon During, Patrick White, Oxford University Press, Melbourne, VIC, 1996.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ian Henderson and Anouk Lang (eds.) Patrick White Beyond the Grave, Anthem Press, 2015','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Helen Verity Hewitt, Patrick White and the Influence of the Visual Arts in his Work, Doctoral Thesis, Dept. of English, University of Melbourne, 1995.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Clayton Joyce (ed.) Patrick White: A Tribute, Angus &amp; Robertson, Harper Collins, North Ryde, 1991.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Kiernan, Patrick White, Macmillan Commonwealth Writers Series, The Macmillan Press, London, 1980.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Lawson (ed.) Patrick White: Selected Writings, University of Queensland Press, St. Lucia, 1994','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Marr, Patrick White – A Life, Random House Australia, Sydney, 1991.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Marr (ed.), Patrick White Letters, Random House Australia, Sydney, 1994.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laurence Steven, Dissociation and Wholeness in Patrick White\'s Fiction, Wilfrid Laurier University Press, Ontario, 1989.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth McMahon, Brigitta Olubas. Remembering Patrick White&#160;: contemporary critical essays, Rodopi, Amsterdam, New York, 2010.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White, Patrick White Speaks, Primavera Press, Sydney, Publisher Paul Brennan, 1989.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Michael Sasse, Companion notes to the Aunt\'s story by Patrick White, WriteLight, 2012.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cynthia Vanden Drissen, Writing the nation&#160;: Patrick White and the indigene, Rodopi, Amsterdam, New York, 2009.','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['William Yang, Patrick White: The Late Years, PanMacmillan Australia, 1995','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Happy Valley (1939)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Living and the Dead (1941)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Aunt\'s Story (1948)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tree of Man (1955)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Voss (1957)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Riders in the Chariot (1961)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Solid Mandala (1966)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Vivisector (1970)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye of the Storm (1973)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fringe of Leaves (1976)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Twyborn Affair (1979)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memoirs of Many in One (1986)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hanging Garden (2012)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Burnt Ones (1964)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cockatoos (1974)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Three Uneasy Pieces (1987)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flaws in the Glass (1981)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Night the Prowler (1978)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Ham Funeral (1947)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Season at Sarsaparilla (1962)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Cheery Soul (1963)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Night on Bald Mountain (1964)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big Toys (1977)','Patrick_White']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['De fyra främlingarna (short story collection, 1924)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Timans och rättfärdigheten (novel, 1925)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stad i mörker (novel, 1927)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stad i ljus (novel, 1928)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Minnas (novel, 1928)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kommentar till ett stjärnfall (novel, 1929)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Avsked till Hamlet (novel, 1930)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Natten är här (short story collection, 1932)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bobinack (novel, 1932)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Regn i gryningen (novel, 1933)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nu var det 1914 (novel, 1934)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Än en gång, kapten!  (short story collection, 1934)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Here\'s Your Life (Swedish: Här har du ditt liv!, novel, 1935)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Se dig inte om! (novel, 1936)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Slutspel i ungdomen (novel, 1937)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nattövning (novel, 1938)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Den trygga världen (short story collection, 1940)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soldatens återkomst (novel, 1940)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grupp Krilon (novel, 1941)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Krilons resa (novel, 1942)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Krilon själv (novel, 1943)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sju liv (short story compilation, 1944)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Return to Ithaca (Swedish: Strändernas svall, novel, 1946; drama, 1948)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pan mot Sparta (short story collection, 1946)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dagbok från Schweiz (1949)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drömmar om rosor och eld (novel, 1949)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lägg undan solen (novel, 1951)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Romantisk berättelse (novel, 1953)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tidens gång (novel, 1955)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vinterresa i Norrbotten (1955)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Molnen över Metapontion (novel, 1957)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vägar över Metaponto – en resedagbok (1959)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Days of His Grace (Swedish: Hans nådes tid, novel, 1960)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spår förbi Kolonos – en berättelse (1961)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Livsdagen lång (novel, 1964)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stunder, vågor – anteckningar, berättelser (1965)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Favel ensam (novel, 1968)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Resa i hösten 1921 (1973)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Några steg mot tystnaden (novel, 1973)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olibrius och gestalterna (youth short story collection, 1986)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herr Clerk vår mästare (original version of Minnas, novel, 1998)','Eyvind_Johnson']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swedish Essentials of Grammar Viberg, Åke; et al. (1991) Chicago: Passport Books. ISBN&#160;0-8442-8539-0','Swedish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swedish: An Essential Grammar. Holmes, Philip; Hinchliffe, Ian; (2000). London; New York: Routledge. ISBN&#160;0-415-16048-0.','Swedish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Swedish: A Comprehensive Grammar Second Edition. Holmes, Philip; Hinchliffe, Ian; (2003). London; New York: Routledge. ISBN&#160;0-415-27884-8.','Swedish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Svenska utifrån. Schematic grammar-Swedish structures and everyday phrases Byrman, Gunilla; Holm, Britta; (1998) ISBN&#160;91-520-0519-4.','Swedish_language']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1943: Finisterre, a chapbook of poetry, smuggled into Switzerland by Gianfranco Contini; Lugano: the Collana di Lugano (June 24); second edition, 1945, Florence: Barbèra&#91;4&#93;','Eugenio_Montale']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1971: Satura (1962–1970) (January)&#91;4&#93;','Eugenio_Montale']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dangling Man (1944)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Victim (1947)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Adventures of Augie March (1953), National Book Award for Fiction&#91;63&#93;','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Seize the Day (1956)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henderson the Rain King (1959)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herzog (1964), National Book Award&#91;64&#93;','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mr. Sammler\'s Planet (1970), National Book Award&#91;65&#93;','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift (1975), winner of the 1976 Pulitzer Prize for Fiction&#91;66&#93;','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dean\'s December (1982)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['More Die of Heartbreak (1987)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Theft (1989)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bellarosa Connection (1989)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Actual (1997)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ravelstein (2000)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mosby\'s Memoirs (1968)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Him with His Foot in His Mouth (1984)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Something to Remember Me By: Three Tales (1991)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories (2001)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Analysis (1965)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Novels 1944–1953: Dangling Man, The Victim, The Adventures of Augie March (2003)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Novels 1956–1964: Seize the Day, Henderson the Rain King, Herzog (2007)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Novels 1970–1982: Mr. Sammler’s Planet, Humboldt’s Gift, The Dean’s December (2010)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Novels 1984–2000: What Kind of Day Did You Have?, More Die of Heartbreak, A Theft, The Bellarosa Connection, The Actual, Ravelstein (2014)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Jerusalem and Back (1976), memoir','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['It All Adds Up (1994), essay collection','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow: Letters, edited by Benjamin Taylor (2010), correspondence','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['There Is Simply Too Much To Think About (Viking, 2015), collection of shorter non-fiction pieces','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow\'s Heart: A Son\'s Memoir, Greg Bellow, 2013 ISBN&#160;978-1608199952','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow, Tony Tanner (1965) (see also his City of Words [1971])','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow, Malcolm Bradbury (1982)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow Drumlin Woodchuck, Mark Harris, University of Georgia Press. (1982)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow: Modern Critical Views, Harold Bloom (Ed.) (1986)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Handsome Is: Adventures with Saul Bellow, Harriet Wasserman (1997)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow and the Decline of Humanism, Michael K Glenday (1990)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow: A Biography of the Imagination, Ruth Miller, St. Martins Pr. (1991)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bellow: A Biography, James Atlas (2000)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saul Bellow and American Transcendentalism, M.A. Quayum (2004)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Even Later" and "The American Eagle" in Martin Amis, The War Against Cliché (2001) are celebratory. The latter essay is also found in the Everyman\'s Library edition of Augie March.','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['\'Saul Bellow\'s comic style\': James Wood in The Irresponsible Self: On Laughter and the Novel, 2004. ISBN&#160;0-224-06450-9.','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hero in Contemporary American Fiction: The Works of Saul Bellow and Don DeLillo , Stephanie Halldorson (2007)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Life of Saul Bellow: To Fame and Fortune, 1915–1964, Zachary Leader (2015)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Drew, Bettina. Nelson Algren, A Life on the Wild Side. Austin: University of Texas Press, 1991','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wood, James, \'Gratitude\', New Republic, 00286583, 25 April 2005, Vol. 232, Issue 15','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Malin, Irving. Saul Bellow\'s Fiction. Carbondale: Southern Illinois University Press, 1969','Saul_Bellow']);
     
//     db.run("INSERT INTO booksName VALUES (?,?)", ['^ Martin Amis
// Author of Yellow Dog talks with Robert Birnbaum, Identity Theory, December 8, 2003, by Robert Birnbaum','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Tanenhaus, Sam (February 4, 2007) "Beyond Criticism." New York Times Book Review.','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Review: The Joan Peters Case, Edward W. Said, Journal of Palestine Studies, 15:2 (Winter, 1986), pp. 144–150. Retrieved 27 March 2008.','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ahmed, Azam and Ron Grossman (October 5, 2007) "Bellow\'s remarks on race haunt legacy in Hyde Park." Chicago Tribune.','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man with the Golden Arm by Nelson Algren (1950)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories of William Faulkner by William Faulkner (1951)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Here to Eternity by James Jones (1952)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Invisible Man by Ralph Ellison (1953)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Adventures of Augie March by Saul Bellow (1954)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ten North Frederick by John O\'Hara (1956)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Field of Vision by Wright Morris (1957)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wapshot Chronicle by John Cheever (1958)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Barrel by Bernard Malamud (1959)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Goodbye, Columbus by Philip Roth (1960)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waters of Kronos by Conrad Richter (1961)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moviegoer by Walker Percy (1962)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morte d\'Urban by J. F. Powers (1963)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Centaur by John Updike (1964)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herzog by Saul Bellow (1965)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eighth Day by Thornton Wilder (1968)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steps by Jerzy Kosiński (1969)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['them by Joyce Carol Oates (1970)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mr. Sammler\'s Planet by Saul Bellow (1971)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Complete Stories by Flannery O\'Connor (1972)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chimera by John Barth (1973)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Augustus by John Williams (1973)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gravity\'s Rainbow by Thomas Pynchon (1974)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Crown of Feathers and Other Stories by Isaac Bashevis Singer (1974)','Saul_Bellow']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Satan in Goray (1935)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Family Moskat (1950)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magician of Lublin (1960)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Slave (1962)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Manor (1967)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Estate (1969)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Enemies, a Love Story (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wicked City (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shosha (1978)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old Love (1979)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reaches of Heaven: A Story of the Baal Shem Tov (1980)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Penitent (1983)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Teibele and Her Demon (1983) (play)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The King of the Fields (1988)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scum (1991)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Certificate (1992) &#91;38&#93;','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meshugah (1994)&#91;38&#93;','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shadows on the Hudson (1997)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gimpel the Fool and Other Stories (1957)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spinoza of Market Street (1963)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Short Friday and Other Stories (1963)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Séance and Other Stories (1968)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Friend of Kafka and Other Stories (1970)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fools of Chelm and Their History (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Passions and Other Stories (1975)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old Love (1979)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories (1982)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Image and Other Stories (1985)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Death of Methuselah and Other Stories (1988)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mazel and Shlimazel, illus. Margot Zemach (1967)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fearsome Inn, illus. Nonny Hogrogian (1967) — Newbery Honor Book&#91;39&#93;','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['When Shlemiel Went to Warsaw and Other Stories, illus. Margot Zemach (1968) — Newbery Honor Book&#91;39&#93;','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Golem, illus. Uri Shulevitz (1969)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elijah the Slave: A Hebrew Legend Retold, illus. Antonio Frasconi (1970)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph and Koza: or the Sacrifice to the Vistula, illus. Symeon Shimin (1970)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alone in the Wild Forest, illus. Margot Zemach (1971)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Topsy-Turvy Emperor of China, illus. William Pène du Bois (1971)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wicked City, illus. Leonard Everett Fisher (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fools of Chelm and Their History, illus. Uri Shulevitz (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Why Noah Chose the Dove, illus. Eric Carle (1974)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Tale of Three Wishes, illus. Irene Lieblich (1975)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Naftali and the Storyteller and His Horse, Sus, illus. Margot Zemach (1976)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Power of Light - Eight Stories for Hanukkah, illus. Irene Lieblich (1980)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yentl the Yeshiva Boy, illus. Uri Shulevitz (1983)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stories for Children (1984) – collection','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shrew Todie and Lyzer the Miser and Other Children\'s Stories (1994)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Parakeet Named Dreidel (2015)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hasidim (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Enemies, A Love Story (1989)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love Comes Lately (2007)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magician of Lublin (1979)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yentl (1983)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Grace Farrell, Isaac Bashevis Singer: Conversations, p. 236, University Press of Mississippi, 1992.','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Burgin. Conversations with Isaac Bashevis Singer. NY: Doubleday, 1985.','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lester Goran. The Bright Streets of Surfside: The Memoir of a Friendship with Isaac Bashevis Singer. Kent, OH: Kent State University Press, 1994.','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roberta Saltzman. Isaac Bashevis Singer: a bibliography of his works in Yiddish and English, 1960–1991. Lanham, MD: Scarecrow Press, 2002. ISBN&#160;0-8108-4315-3','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dorothea Straus. Under the Canopy. New York: George Braziller, 1982. ISBN&#160;0-8076-1028-3','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Florence Noiville. Isaac B. Singer, A Life, Farrar, Straus and Giroux, 2006','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dvorah Telushkin. Master of Dreams: A Memoir of Isaac Bashevis Singer. New York: Morrow, 1997.','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Family Moskat (1950)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Satan in Goray (1955)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magician of Lublin (1960)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Slave (1962)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Manor (1967)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Estate (1969)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Golem (1969)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wicked City (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Enemies, A Love Story (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shosha (1978)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Penitent (1983)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Certificate (1992)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meshugah (1994)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shadows on the Hudson (1997)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zlateh the Goat and Other Stories (1966)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Crown of Feathers and Other Stories (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rencontre au Sommet (1998)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yentl (1975)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magician of Lublin (1979)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yentl (1983)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Enemies, A Love Story (1989)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love Comes Lately (2007)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fool\'s Paradise (1994)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man with the Golden Arm by Nelson Algren (1950)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories of William Faulkner by William Faulkner (1951)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Here to Eternity by James Jones (1952)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Invisible Man by Ralph Ellison (1953)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Adventures of Augie March by Saul Bellow (1954)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ten North Frederick by John O\'Hara (1956)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Field of Vision by Wright Morris (1957)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wapshot Chronicle by John Cheever (1958)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Barrel by Bernard Malamud (1959)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Goodbye, Columbus by Philip Roth (1960)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Waters of Kronos by Conrad Richter (1961)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moviegoer by Walker Percy (1962)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morte d\'Urban by J. F. Powers (1963)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Centaur by John Updike (1964)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herzog by Saul Bellow (1965)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Eighth Day by Thornton Wilder (1968)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steps by Jerzy Kosiński (1969)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['them by Joyce Carol Oates (1970)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mr. Sammler\'s Planet by Saul Bellow (1971)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Complete Stories by Flannery O\'Connor (1972)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chimera by John Barth (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Augustus by John Williams (1973)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gravity\'s Rainbow by Thomas Pynchon (1974)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Crown of Feathers and Other Stories by Isaac Bashevis Singer (1974)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thirty-nine Reasons Why I Am a Vegetarian (1903)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Benefits of Vegetarianism (1927)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diet for a Small Planet (1971)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Moosewood Cookbook (1977)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fit for Life (1985)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diet for a New America (1987)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The China Study (2004)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Raw Food Made Easy for 1 or 2 People (2005)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Skinny Bitch (2005)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Livestock\'s Long Shadow (2006)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eating Animals (2009)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Kind Diet (2009)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Why We Love Dogs, Eat Pigs, and Wear Cows (2009)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eat &amp; Run (2012)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meet Your Meat (2002)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peaceable Kingdom (2004)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Earthlings (2005)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Sacred Duty (2007)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fat, Sick and Nearly Dead (2010)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Planeat (2010)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Forks Over Knives (2011)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vegucated (2011)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Live and Let Live (2013)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cowspiracy (2014)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What the Health (2017)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carnage (2017)','Isaac_Bashevis_Singer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Orientations (Προσανατολισμοί, 1939)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sun The First Together With Variations on A Sunbeam (Ηλιος ο πρώτος, παραλλαγές πάνω σε μιαν αχτίδα, 1943)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Heroic And Funeral Chant For The Lieutenant Lost In Albania (Άσμα ηρωικό και πένθιμο για τον χαμένο ανθυπολοχαγό της Αλβανίας, 1946)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Axion Esti—It Is Worthy (Το Άξιον Εστί, 1959)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Six Plus One Remorses For The Sky (Έξη και μια τύψεις για τον ουρανό, 1960)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Light Tree And The Fourteenth Beauty (Το φωτόδεντρο και η δέκατη τέταρτη ομορφιά, 1972)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sovereign Sun (Ο ήλιος ο ηλιάτορας, 1971)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Trills of Love (Τα Ρω του Έρωτα, 1973)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Monogram (Το Μονόγραμμα, 1972)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Step-Poems (Τα Ετεροθαλή, 1974)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Signalbook (Σηματολόγιον, 1977)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maria Nefeli (Μαρία Νεφέλη, 1978)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diary of an Invisible April (Ημερολόγιο ενός αθέατου Απριλίου, 1984)* Krinagoras (Κριναγόρας, 1987)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Little Mariner (Ο Μικρός Ναυτίλος, 1988)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Elegies of Oxopetra (Τα Ελεγεία της Οξώπετρας, 1991)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['West of Sadness (Δυτικά της λύπης, 1995)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The True Face and Lyrical Bravery of Andreas Kalvos (Η Αληθινή φυσιογνωμία και η λυρική τόλμη του Ανδρέα Κάλβου, 1942)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(Offering) My Cards To Sight (Ανοιχτά χαρτιά (συλλογή κειμένων), 1973)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Painter Theophilos (Ο ζωγράφος Θεόφιλος, 1973)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Of Papadiamantis (Η μαγεία του Παπαδιαμάντη, 1975)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Report to Andreas Empeirikos (Αναφορά στον Ανδρέα Εμπειρίκο, 1977)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Things Public and Private (Τα Δημόσια και τα Ιδιωτικά, 1990)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Private Way (Ιδιωτική Οδός, 1990)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carte Blanche («Εν λευκώ» (συλλογή κειμένων), 1992)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Garden with the Illusions (Ο κήπος με τις αυταπάτες, 1995)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Room with the Pictures (Το δωμάτιο με τις εικόνες, 1986) – collages by Odysseus Elytis, text by Evgenios Aranitsis','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Second Writing (Δεύτερη γραφή, 1976)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Apocalypse (by John) (Η αποκάλυψη, 1985)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poèmes. Trad. Robert Levesque (1945)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Axion Esti. Tr. E. Keeley and G. Savidis (Pittsburgh 1974 – Greek &amp; English)(repr. London: Anvil Press, 1980 – English only)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sovereign Sun: selected poems. Tr. K. Friar (1974; repr. 1990)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected poems. Ed. E. Keeley and Ph. Sherrard (1981; repr. 1982, 1991)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maria Nephele, tr. A. Anagnostopoulos (1981)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What I love: selected poems, tr. O. Broumas (1986) [Greek &amp; English texts]','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Nelly Ismailidou, "The path to being a successful person doesn\'t always go through college", To Vima, August 29, 2010.','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Nobel Lectures, Literature 1968–1980, Editor-in-Charge: Tore Frängsmyr, Editor: Sture Allén, World Scientific Publishing Co., Singapore, 1993.','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tasos Lignadis: Elytis\' Axion Esti (1972)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lili Zografos: Elytis – The Sun Drinker (1972); as well as the special issue of the American magazine Books Abroad dedicated to the work of Elytis (Autumn 1975. Norman, Oklahoma, U.S.A.)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Odysseus Elytis: Analogies of Light. Ed. I. Ivask (1981)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A. Decavalles: Maria Nefeli and the Changeful Sameness of Elytis\' Variations on a theme (1982)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['E. Keeley: Elytis and the Greek Tradition (1983)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ph. Sherrard: \'Odysseus Elytis and the Discovery of Greece\', in Journal of Modern Greek Studies, 1(2), 1983','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['K. Malkoff: \'Eliot and Elytis: Poet of Time, Poet of Space\', in Comparative Literature, 36(3), 1984','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A. Decavalles: \'Odysseus Elytis in the 1980s\', in World Literature Today, 62(l), 1988','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I. Loulakaki-Moore: Seferis and Elytis as Translators. (Oxford: Peter Lang, 2010)','Odysseas_Elytis']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Haven, Cynthia L., "\'A Sacred Vision\': An Interview with Czesław Miłosz", in Haven, Cynthia L. (ed.), Czesław Miłosz: Conversations. University Press of Mississippi, 2006, p. 145.','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Between Anxiety and Hope: The Poetry and Writing of Czeslaw Milosz by Edward Możejko. University of Alberta Press, 1988. pp 2f.','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zagajewski, Adam, editor (2007) Polish Writers on Writing featuring Czeslaw Milosz. Trinity University Press','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Faggen, Robert, editor (1996) Striving Towards Being: The Letters of Thomas Merton and Czesław Miłosz.  Farrar Straus &amp; Giroux','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Haven, Cynthia L., editor (2006) Czeslaw Milosz: Conversations. University Press of Mississippi ISBN&#160;1-57806-829-0','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Haven, Cynthia L., editor (2011) An Invisible Rope: Portraits of Czesław Miłosz. Ohio University Press. ISBN-10: 0804011338 ISBN-13: 978-0804011334','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miłosz, Czesław (2006) New and Collected Poems 1931–2001. Penguin Modern Classics Poetry ISBN&#160;0-14-118641-0 (posthumous collection)','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miłosz, Czesław (2010) Proud To Be A Mammal: Essays on War, Faith and Memory. Penguin Translated Texts ISBN&#160;0-14-119319-0 (posthumous collection)','Czes%C5%82aw_Mi%C5%82osz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Befristeten 1956 (1956 premiere of the play in Oxford) (Their Days are Numbered)','Elias_Canetti']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aufzeichnungen 1942 – 1948 (1965) (Sketches)','Elias_Canetti']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Fliegenpein (The Agony of Flies, 1992)','Elias_Canetti']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nachträge aus Hampstead (Notes from Hampstead, 1994)','Elias_Canetti']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aufzeichnungen für Marie-Louise (written 1942, compiled and published posthumously, 2005)','Elias_Canetti']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Evil Hour (1962)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One Hundred Years of Solitude (1967)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Autumn of the Patriarch (1975)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love in the Time of Cholera (1985)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The General in His Labyrinth (1989)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Love and Other Demons (1994)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leaf Storm (1955)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No One Writes to the Colonel (1961)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Incredible and Sad Tale of Innocent Eréndira and Her Heartless Grandmother (1972)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chronicle of a Death Foretold (1981)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memories of My Melancholy Whores (2004)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big Mama\'s Funeral (1962)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Incredible and Sad Tale of Innocent Eréndira and Her Heartless Grandmother (1972)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eyes of a Blue Dog (1974)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories (1984)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Strange Pilgrims (1993)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of a Shipwrecked Sailor (1970)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Solitude of Latin America (1982)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fragrance of Guava (1982, with Plinio Apuleyo Mendoza)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Clandestine in Chile (1986)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Changing the History of Africa: Angola and Namibia (1991, with David Deutschmann)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['News of a Kidnapping (1996)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Country for Children (1998)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Living to Tell the Tale (2002)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['There Are No Thieves in This Village (1965, Alberto Isaac)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Patsy, My Love (1969, Manuel Michel, based on a non-published story)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Widow of Montiel (1979, Miguel Littín)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea of Lost Time (1980, Solveig Hoogesteijn)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One Hundred Years of Solitude (1981, Shūji Terayama)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Farewell to the Ark (1984, Shūji Terayama)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Time to Die (1984, Jorge Alí Triana)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chronicle of a Death Foretold (1987, Francesco Rosi)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Summer of Miss Forbes (1989, Jaime Humberto Hermosillo)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I\'m the One You\'re Looking For (1989, Jaime Chávarri)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Only Death Is Bound to Come (1992, Marina Tsurtsumia)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bloody Morning (1993, Shaohong Li)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No One Writes to the Colonel (1999, Arturo Ripstein)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Evil Hour (2005, Ruy Guerra)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love in the Time of Cholera (2007, Mike Newell)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Love and Other Demons (2009, Hilda Hidalgo)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memories of My Melancholy Whores (2011, Henning Carlsen)','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gabo – The Creation of Gabriel García Márquez. Documentary, Germany, 2015, 90 min.','Gabriel_Garc%C3%ADa_M%C3%A1rquez']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1934)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brass Butterfly  (1958)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1954)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Inheritors (1955)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pincher Martin (1956)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Free Fall (1959)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spire (1964)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pyramid (1967)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Scorpion God   (1971)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Darkness Visible (1979)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Paper Men (1984)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rites of Passage (1980)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Close Quarters (1987)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fire Down Below (1989)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hot Gates  (1965)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Moving Target  (1982)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Egyptian Journal (1985)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ F. Regard (ed.), Fingering Netsukes: Selected Papers from the First International William Golding Conference, Saint-Etienne, PUSE, 1995.','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L. L. Dickson, The Modern Allegories of William Golding (University of South Florida Press, 1990). ISBN&#160;0-8130-0971-5.','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['R. A. Gekoski and P. A. Grogan, William Golding: A Bibliography, London, André Deutsch, 1994. ISBN&#160;978-0-233-98611-1.','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Boys Armed with Sticks: William Golding\'s Lord of the Flies". Chapter in B. Schoene-Harwood. Writing Men. Edinburgh University Press, 2000.','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poems (1934)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1954)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Inheritors (1955)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pincher Martin (1956)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brass Butterfly : a Play in Three Acts (1958)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Free Fall (1959)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spire (1964)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hot Gates, and Other Occasional Pieces (1965)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pyramid (1967)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Scorpion God : Three Short Novels (1971)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Darkness Visible (1979)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rites of Passage (1980)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Moving Target (1982)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nobel Lecture, 7 December 1983 (1984)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Paper Men (1984)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Egyptian Journal (1985)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Close Quarters (1987)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fire Down Below (1989)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Double Tongue (1995)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1963)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alkitrang Dugo (1975)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1990)','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Exile','William_Golding']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Město v slzách (1921)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Samá láska (1923)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Na vlnách TSF (1925)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Slavík zpívá špatně (1926)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Básně (1929)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poštovní holub (1929)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hvězdy nad Rajskou zahradou (1929)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jablko z klína (1933)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ruce Venušiny (1936)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jaro, sbohem (1937)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zhasněte světla (1938)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vějíř Boženy Němcové (1940)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Světlem oděná (1940)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kamenný most (1944)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Přilba z hlíny (1945)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ruka a plamen (1948)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Šel malíř chudě do světa (1949)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Píseň o Viktorce (1950)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maminka (1954)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chlapec a hvězdy (1956)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Praha a Věnec sonetů (1956). English translation "A Wreath of Sonnets," translated by Jan Křesadlo.','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zrnka révy (1965)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Koncert na ostrově (1965)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Odlévání zvonů (1967)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Halleyova kometa (1967)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kniha o Praze (1968)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morový sloup (1968–1970)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Deštník z Picadilly (1979)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Všecky krásy světa (1979)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Býti básníkem (1983)','Jaroslav_Seifert']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nouveau roman&#160;: hier, aujourd\'hui, Cerisy (France), 1971.&#91;2&#93;','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Claude Simon&#160;: analyse, théorie, Cerisy (France), 1974.&#91;3&#93;','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pour une théorie matérialiste du texte, Cerisy (France), 1980.&#91;4&#93;','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tome I (Gallimard, 2006), including Le Vent: Tentative de restitution d\'un retable baroque, La Route des Flandres, Le Palace, La Bataille de Pharsale, La Chevelure de Bérénice (Reprise du texte Femmes), Triptyque, Le Jardin des Plantes, and other writings.','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tome II (Gallimard, 2013), including L\'Herbe, Histoire, Les Corps conducteurs, Leçon de choses, Les Géorgiques, L\'Invitation, L\'Acacia, Le Tramway, and other writings.','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bernard Luscans, La représentation dans le nouveau nouveau roman, Chapel Hill, Université de Caroline du Nord, 2008.[1]','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mireille Calle-Gruber, Claude Simon, une vie à écrire, Paris, Ed. du Seuil, 2011.','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karen L. Gould, Claude Simon\'s Mythic Muse, French Literature Publications, 1979. ISBN&#160;978-99967-795-6-5','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karen L. Gould and  R. Birn (Editors), Orion Blinded: Essays on Claude Simon, Bucknell University Press, 1981.','Claude_Simon']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Keffi\'s Birthday Treat (1954)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Invention (1957)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Swamp Dwellers (1958)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Quality of Violence (1959)&#91;64&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lion and the Jewel (1959)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Dance of the Forests (1960)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Father\'s Burden (1960)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Strong Breed (1964)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Before the Blackout (1964)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kongi\'s Harvest (1964)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road (1965)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madmen and Specialists (1970)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bacchae of Euripides (1973)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Camwood on the Leaves (1973)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jero\'s Metamorphosis (1973)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Death and the King\'s Horseman (1975)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Opera Wonyosi (1977)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Requiem for a Futurologist (1983)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sixty-Six (short piece) (1984)&#91;65&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Play of Giants (1984)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Childe Internationale (1987)&#91;66&#93;&#91;67&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Zia with Love (1992)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beatification of Area Boy (1996)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Document of Identity (radio play, 1999)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['King Baabu (2001)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alapata Apata (2011)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Interpreters (1964)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Season of Anomy (1972)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Tale of Two (1958)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Egbe\'s Sworn Enemy (1960)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madame Etienne\'s Establishment (1960)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Man Died: Prison Notes (1971)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aké: The Years of Childhood (1981)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ibadan: The Penkelemes Years: a memoir 1946-65 (1989)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Isara: A Voyage around Essay (1990)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['You Must Set Forth at Dawn (2006)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Telephone Conversation (1963) (appeared in Modern Poetry in Africa)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Idanre and other poems (1967)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Big Airplane Crashed Into The Earth (original title Poems from Prison) (1969)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Shuttle in the Crypt (1971)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ogun Abibiman (1976)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mandela\'s Earth and other poems (1988)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Poems (1997)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Samarkand and Other Markets I Have Known (2002)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Towards a True Theater  (1962)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Culture in Transition (1963)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Art, Dialogue, and Outrage: Essays on Literature and Culture (1988)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['From Drama and the African World View (1976)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Myth, Literature, and the African World (1976)&#91;68&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Blackman and the Veil (1990)&#91;69&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Credo of Being and Nothingness (1991)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Burden of Memory – The Muse of Forgiveness (1999)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['New Imperialism (2009)&#91;70&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Of Africa (2012)&#91;71&#93;&#91;72&#93;','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Forest of a Thousand Demons: A Hunter’s Saga (1968; a translation of D. O. Fagunwa\'s Ògbójú Ọdẹ nínú Igbó Irúnmalẹ̀)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Forest of Olodumare (2010; a translation of D. O. Fagunwa\'s Igbo Olodumare)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Douglas Killam and Ruth Rowe (eds), The Companion to African Literature, Oxford: James Currey/Bloomington: Indiana University Press, 2000, p. 275.','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bankole Olayebi (2004), WS: A Life In Full, Bookcraft; biography of Soyinka.','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ilori, Oluwakemi Atanda (2016) The theatre of Wole Soyinka: Inside the Liminal World of Myth, Ritual and Postcoloniality. PhD thesis, University of Leeds.','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mpalive-Hangson Msiska (2007), Postcolonial Identity in Wole Soyinka (Cross/Cultures 93). Amsterdam-New York, NY: Editions Rodopi B.V. ISBN&#160;978-9042022584','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yemi D. Ogunyemi (2009), The Literary/Political Philosophy of Wole Soyinka. ISBN&#160;1-60836-463-1','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yemi D. Ogunyemi (2017), The Aesthetic and Moral Art of Wole Soyinka(Academica Press, London-Washington) ISBN&#160;978-1-68053-034-6','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Interpreters (1965)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Season of Anomy  (1973)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Stoppard for Rosencrantz and Guildenstern Are Dead and Wole Soyinka for The Interpreters (shared) (1967)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Nichols for A Day in the Death of Joe Egg (1967)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Brenton for Christie in Love (1969)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Freehold Company and Peter Hulton (joint) for Freehold on Antigone (1970)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mustapha Matura for As Time Goes By (1971)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heathcote Williams for AC/DC (1972)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Edgar for Destiny (1975)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Lan for The Winter Dancers (1976)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Halliwell and Snoo Wilson for The Glad Hand (shared) (1978)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Pownall for Beef (1981)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karim Alrawi for Migrations (1982)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Flannery for Our Friends in the North (1983)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ron Hutchinson for The Rat in the Skull (1984)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Hibbert for On the Edge and Heidi Thomas for Shamrocks &amp; Crocodiles (shared) (1985)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nick Dear for The Art of Success (1986)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Iain Heggie for American Bagpipes (1988)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Billy Roche for A Handful of Stars (1989)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lucy Gannon for Keeping Tom Nice (1990)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Terry Johnson for Imagine Drowning (1991)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rod Wooden for Your Home in the West (1992)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Crimp for The Treatment and Helen Edmundson for The Clearing (shared) (1993)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jonathan Harvey for Beautiful Thing (1994)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joe Penhall for Some Voices (1995)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ayub Khan-Din for East is East (1996)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ann Coburn for Get Up and Tie Your Fingers (1997)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Roy Williams for Starstruck (1998/9)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Greig for The Cosmonaut\'s Last Message ... and Tanika Gupta for The Waiting Room (shared) (2000)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zinnie Harris for Further than the Furthest Thing (2001)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Rumney for Jumping on my Shadow (2002)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rona Munro for Iron (2003)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Owen McCafferty for Scenes from the Big Picture (2004)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fin Kennedy for How to Disappear Completely and Never Be Found (2005)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James Philips for The Rubenstein Kiss and Fraser Grace for Breakfast with Mugabe (shared) (2006)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dennis Kelly for Taking Care of Baby (2007)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bryony Lavery for Stockholm (2008)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alexi Kaye Campbell for The Pride (2009)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Crouch for The Author and Lucy Kirkwood for It Felt Empty When the Heart Went at First but It Is Alright Now (shared) (2010)','Wole_Soyinka']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1988: To Urania&#160;: Selected Poems, 1965–1985, New York: Farrar, Straus &amp; Giroux','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2000: Collected Poems in English, 1972–1999, edited by Ann Kjellberg, New York: Farrar, Straus &amp; Giroux','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1970: Ostanovka v pustyne, New York: Izdatel\'stvo imeni Chekhova (Rev. ed. Ann Arbor, Mich.: Ardis, 1989)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1983: Novye stansy k Avguste&#160;: stikhi k M.B., 1962–1982, Ann Arbor, Mich.: Ardis','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1989: Ostanovka v pustyne, revised edition, Ann Arbor, Mich.: Ardis, 1989 (original edition: New York: Izdatel\'stvo imeni Chekhova, 1970)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1992–1995: Sochineniia, Saint Petersburg: Pushkinskii fond, 1992–1995, four volumes','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Russian writers since 1980, Volume 285 of Dictionary of literary biography. Editors Marina Balina, Mark Naumovich Lipovet︠s︡kiĭ. Gale publishers (2004), p. 28','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Haven (2006) p84','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Loseff, Lev (2010) Joseph Brodsky: A Literary Life, Yale University Press (New Haven, CT)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bethea, David (1994) Joseph Brodsky and the Creation of Exile, Princeton University Press (Princeton, NJ)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Berlina, Alexandra (2014). Brodsky Translating Brodsky. Bloomsbury (New York; Anna Balakian Prize 2013-2016)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loseff, Lev  (2010) Joseph Brodsky: a Literary Life, Yale University Press (New Haven, CT)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Speh, Alice J (1996) The Poet as Traveler: Joseph Brodsky in Mexico and Rome, Peter Lang (New York, NY)','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shtern, Ludmila  (2004)  Brodsky: A Personal Memoir, Baskerville Publishers ISBN&#160;978-1-880909-70-6','Joseph_Brodsky']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A translation into Arabic of James Baikie\'s Ancient Egypt (1932) مصر القديمة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Whisper of Madness (1938) همس الجنون','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mockery of the Fates (1939) عبث الأقدار. His first full-length novel, translated title in English Khufu\'s Wisdom.','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rhadopis of Nubia (1943) رادوبيس','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Struggle of Thebes (1944) كفاح طيبة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cairo Modern (1945) القاهرة الجديدة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Khan al-Khalili (1945) خان الخليلي','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Midaq Alley (1947) زقاق المدق','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mirage (1948) السراب','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beginning and the End (1950) بداية ونهاية','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Palace Walk (1956) بين القصرين (Cairo Trilogy, Part 1)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Palace of Desire (1957) قصر الشوق (Cairo Trilogy, Part 2)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sugar Street (1957) السكرية (Cairo Trilogy, Part 3)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Children of Gebelawi (1959) أولاد حارتنا','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Thief and the Dogs (1961) اللص والكلاب','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Autumn Quail (1962) السمان والخريف','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['God\'s World (1962) دنيا الله','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zaabalawi (1963)زعبلاوي','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Search (1964) الطريق','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Beggar (1965) الشحاذ','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Adrift on the Nile (1966) ثرثرة فوق النيل','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miramar (1967) ميرامار','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pub of the Black Cat (1969) خمارة القط الأسود','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Story Without a Beginning or an Ending (1971) حكاية بلا بداية ولا نهاية','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Honeymoon (1971) شهر العسل','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mirrors (1972) المرايا','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love in the Rain (1973) الحب تحت المطر','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Crime (1973) الجريمة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karnak Café (1974) الكرنك','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stories from Our Neighbourhood (حكايات حارتنا (1975','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Respected Sir (1975) حضرة المحترم','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Harafish (1977) ملحمة الحرافيش','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love above the Pyramid Plateau  (1979) الحب فوق هضبة الهرم','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil Preaches (1979) الشيطان يعظ','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love and the Veil (1980) عصر الحب','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arabian Nights and Days (1981) ليالي ألف ليلة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wedding Song (also known as Joys of the Dome) (1981) أفراح القبة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One Hour Remains (1982; also published in translation as The Final Hour) الباقي من الزمن ساعة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Journey of Ibn Fattouma (1983) رحلة ابن فطومة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Akhenaten, Dweller in Truth (1985) العائش فى الحقيقة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Day the Leader was Killed (1985) يوم مقتل الزعيم','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hunger (Al-Go\'a) (1986) الجوع','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morning and Evening Talk (1987) حديث الصباح والمساء','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fountain and Tomb (1988)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Echoes of an Autobiography (1994)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreams of the Rehabilitation Period (2004) أحلام فترة النقاهة','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Seventh Heaven (2005)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreams of Departure (2007; posthumous translation)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Before the Throne (2009; posthumous translation) أمام العرش','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Time of Love (2010; posthumous translation)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heart of the Night (2011; posthumous translation)','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Rasheed El-Enany, Naguib Mahfouz: The Pursuit of Meaning, Routledge, 1992, p. 23.','Naguib_Mahfouz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1962: Salamandra (1958–1961)','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1969: Ladera Este (1962–1968)','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1969: La centena (1935–1968)','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1979: Poemas (1935–1975)','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1987:  Árbol adentro (1976–1987)','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Xirau, Ramón (2004) Entre La Poesia y El Conocimiento: Antologia de Ensayos Criticos Sobre Poetas y Poesia Iberoamericanos. Mexico City: Fondo de Cultura Económica p. 219.','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Yvon Grenier, From Art to Politics: Octavio Paz and the Pursuit of Freedom (Rowman and Littlefield, 1991); Spanish trans. Del arte a la política, Octavio Paz y la busquedad de la libertad (Fondo de Cultura Económica, 1994).','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Review of Octavio Paz: El poeta y la revolución, Enrique Krauze, Mexican Studies/Estudios mexicanos (2015), 31 (1): 196—200.','Octavio_Paz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Smith Commonwealth Literary Award for Friday\'s Footprint (1961)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['James Tait Black Memorial Prize for A Guest of Honour (1972)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize for The Conservationist (1974)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for The Conservationist (1974)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for Burger\'s Daughter (1979)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for July\'s People (1981)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Anisfield-Wolf Book Award for A Sport of Nature (1988)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for My Son\'s Story (1990)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Commonwealth Writers\' Prize for the Best Book from Africa for The Pickup (2002)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize longlist for The Pickup (2001)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lying Days (1953)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A World of Strangers (1958)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Occasion for Loving (1963)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late Bourgeois World (1966)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Guest of Honour (1970)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Conservationist (1974) – joint winner of the Booker prize in 1974','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burger\'s Daughter (1979)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['July\'s People (1981)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Sport of Nature (1987)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Son\'s Story (1990)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['None to Accompany Me (1994)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The House Gun (1998)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pickup (2001)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Get a Life (2005)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Time Like the Present (2012)&#91;47&#93;','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Circle (1949), in Six One-Act Plays','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Face to Face (1949)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Soft Voice of the Serpent (1952)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Six Feet of the Country (1956)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Which New Era Would That Be? (1956)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Friday\'s Footprint (1960)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Not for Publication (1965)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Livingstone\'s Companions (1970)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Stories (1975)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Place Like: Selected Stories (1978)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Soldier\'s Embrace (1980)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Town and Country Lovers (1982), published by Sylvester &amp; Orphanos','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Something Out There (1984)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Correspondence Course and other Stories (1984)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moment Before the Gun Went Off (1988)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Once Upon a Time (1989)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jump: And Other Stories (1991)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Why Haven\'t You Written: Selected Stories 1950-1972 (1992)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Something for the Time Being 1950-1972 (1992)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loot and Other Stories (2003)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beethoven Was One-Sixteenth Black (2007)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Life Times: Stories (2011)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What Happened to Burger\'s Daughter or How South African Censorship Works (1980)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Essential Gesture: Writing, Politics and Places (1988)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Interpreters (1973)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Writing and Being: The Charles Eliot Norton Lectures (1995)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Living in Hope and History (1999)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Telling Tales (2004)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Telling Times: Writing and Living, 1950–2008 (2010)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On the Mines (1973)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lifetimes Under Apartheid (1986)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Clingman, The Novels of Nadine Gordimer: History from the Inside (1986)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew Vogel Ettin, Betrayals of the Body Politic: The Literary Commitments of Nadine Gordimer (1993)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dominic Head, Nadine Gordimer (1994)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Heywood, Nadine Gordimer (1983)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rowland Smith, editor, Critical Essays on Nadine Gordimer (1990)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barbara Temple-Thurston, Nadine Gordimer Revisited (1999) ISBN&#160;0-8057-4608-0','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kathrin Wagner, Rereading Nadine Gordimer (1994)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Louise Yelin, From the Margins of Empire: Christina Stead, Doris Lessing, Nadine Gordimer (1998)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer, Nancy Topping Bazin, and Marilyn Dallman Seymour, Conversations with Nadine Gordimer (1990)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Suresh Roberts, No Cold Kitchen: A Biography of Nadine Gordimer (2005)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lying Days (1953)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A World of Strangers (1958)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Occasion for Loving (1963)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late Bourgeois World (1966)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Guest of Honour (1970)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Conservationist (1974)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burger\'s Daughter (1979)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['July\'s People (1981)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Sport of Nature (1987)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Son\'s Story (1990)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['None to Accompany Me (1994)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The House Gun (1998)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pickup (2001)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Get a Life (2005)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Time Like the Present (2012)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Soft Voice of the Serpent (1952)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Loot and Other Stories (2003)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beethoven Was One-Sixteenth Black (2007)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What Happened to Burger\'s Daughter or How South African Censorship Works (1980)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Telling Tales (2004)','Nadine_Gordimer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1986 Collected Poems, 1948–1984, featuring "Love After Love"','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1950) Henri Christophe: A Chronicle in Seven Scenes','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1952) Harry Dernier: A Play for Radio Production','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1953) Wine of the Country','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1954) The Sea at Dauphin: A Play in One Act','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1957) Ione','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1958) Drums and Colours: An Epic Drama','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1958) Ti-Jean and His Brothers','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1966) Malcochon: or, Six in the Rain','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1967) Dream on Monkey Mountain','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1970) In a Fine Castle','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1974) The Joker of Seville','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1974) The Charlatan','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1976) O Babylon!','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1977) Remembrance','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1978) Pantomime','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1980) The Joker of Seville and O Babylon!: Two Plays','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1982) The Isle Is Full of Noises','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1984) The Haitian Earth','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1986) Three Plays: The Last Carnival, Beef, No Chicken, and A Branch of the Blue Nile','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1991) Steel','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1993) Odyssey: A Stage Version','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1997) The Capeman (book and lyrics, both in collaboration with Paul Simon)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2002) Walker and The Ghost Dance','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2011) Moon-Child','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) O Starry Starry Night','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1990) The Poet in the Theatre, Poetry Book Society (London)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1993) The Antilles: Fragments of Epic Memory Farrar, Straus (New York)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1996) Conversations with Derek Walcott, University of Mississippi (Jackson, MS)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1996) (With Joseph Brodsky and Seamus Heaney) Homage to Robert Frost, Farrar, Straus (New York)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1998) What the Twilight Says (essays), Farrar, Straus (New York, NY)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2002) Walker and Ghost Dance, Farrar, Straus (New York, NY)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2004) Another Life: Fully Annotated, Lynne Rienner Publishers (Boulder, CO)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2016) Morning, Paramin Derek Walcott; illustrated by Peter Doig, Farrar, Straus (New York, NY)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baer, William, ed. Conversations with Derek Walcott. Jackson: University Press of Mississippi, 1996.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baugh, Edward, Derek Walcott. Cambridge: Cambridge University Press, 2006.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breslin, Paul, Nobody\'s Nation: Reading Derek Walcott. Chicago: University of Chicago Press, 2001. ISBN&#160;0-226-07426-9','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brown, Stewart, ed., The Art of Derek Walcott. Chester Springs, PA.: Dufour, 1991; Bridgend: Seren Books, 1992.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burnett, Paula, Derek Walcott: Politics and Poetics. Gainesville: University Press of Florida, 2001.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fumagalli, Maria Cristina, The Flight of the Vernacular: Seamus Heaney, Derek Walcott and the Impress of Dante. Amsterdam-New York: Rodopi, 2001.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fumagalli, Maria Cristina, Agenda 39:1–3 (2002–03), Special Issue on Derek Walcott. Includes Derek Walcott\'s "Epitaph for the Young" (1949), republished here in its entirety.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hamner, Robert D., Derek Walcott. Updated Edition. Twayne\'s World Authors Series. TWAS 600. New York: Twayne, 1993.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['King, Bruce, Derek Walcott and West Indian Drama: "Not Only a Playwright But a Company": The Trinidad Theatre Workshop 1959–1993. Oxford: Clarendon Press, 1995.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['King, Bruce, Derek Walcott, A Caribbean Life. Oxford: Oxford University Press, 2000.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Müller, Timo, "Forms of Exile: Experimental Self-Positioning in Postcolonial Caribbean Poetry." Atlantic Studies 13.4 (2016): 457–71.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sarkar, Nirjhar, "Existence as self-making in Derek Walcott\'s The Sea at Dauphin". Anthurium (ISSN 1547-7150) 14.2 (2018): 1–15 [1]','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Terada, Rei, Derek Walcott\'s Poetry: American Mimicry. Boston: Northeastern University Press, 1992.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thieme, John, Derek Walcott. Manchester: Manchester University Press, 1999.','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Henri Christophe (1950)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Harry Dernier (1951)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wine of the Country (1953)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea at Dauphin (1954)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ione (1957)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drums and Colours (1958)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ti-Jean and His Brothers (1958)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Malcochon: or, Six in the Rain (1966)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dream on Monkey Mountain (1967)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In a Fine Castle (1970)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Joker of Seville (1974)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Charlatan (1974)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['O Babylon! (1976)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Remembrance (1977)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pantomime (1978)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Isle Is Full of Noises (1982)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Carnival (1986)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beef, No Chicken (1986)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Branch of the Blue Nile (1986)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steel (1991)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Odyssey: A Stage Version (1993)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Capeman (1997)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Walker and The Ghost Dance (2002)','Derek_Walcott']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Box (1999)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Mean People (2002)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Who\'s Got Game? The Ant or the Grasshopper?, The Lion or the Mouse?, Poppy or the Snake? (2007)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peeny Butter Fudge (2009)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Please, Louise (2014)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Book (1974)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Playing in the Dark: Whiteness and the Literary Imagination (1992)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Race-ing Justice, En-gendering Power: Essays on Anita Hill, Clarence Thomas, and the Construction of Social Reality (editor) (1992)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Birth of a Nation\'hood: Gaze, Script, and Spectacle in the O.J. Simpson Case (co-editor) (1997)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burn This Book: PEN Writers Speak Out on the Power of the Word, editor (2009)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Origin of Others (2017)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Introduction." Mark Twain, Adventures of Huckleberry Finn. [1885] The Oxford Mark Twain, edited by Shelley Fisher Fishkin. New York: Oxford University Press, 1996, pp. xxxii–xli.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grammy Award for Best Spoken Word Album for Children (2008) – Who\'s Got Game? The Ant or the Grasshopper? The Lion or the Mouse? Poppy or the Snake?','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Tony Morrison". Contemporary Popular Writers. Ed. Dave Mote. Detroit: St. James Press, 1997.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jaggi, Maya, "Solving the riddle", The Guardian, November 15, 2003.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rothstein, Mervyn, "Toni Morrison, In Her New Novel, Defends Women", The New York Times, p. C-17, August 26, 1987. Retrieved June 20, 2016.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ McDowell, Edwin, "48 Black Writers Protest By Praising Morrison", The New York Times, January 19, 1988.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Black Writers In Praise of Toni Morrison", The New York Times, January 21, 1988, Section 7, p. 36.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mitra, Ipshita, "Toni Morrison builds a \'Home\' we never knew", The Times of India, May 14, 2014.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Morrison, Toni (October 5, 1998). "Talk of the Town: Comment". The New Yorker.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sachs, Andrea."10 Questions for Toni Morrison", Time, May 7, 2008.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Chris Branch, Do Toni Morrison\'s Papers Belong At Princeton or Howard?, The Huffington Post (October 23, 2014).','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lucy Mangan, "Imagine: Toni Morrison Remembers review – proof of a divine being", The Guardian, July 15, 2015.','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rita Dove, "Sandrof Award: Rita Dove\'s Homage to Toni Morrison", Critical Mass, March 15, 2015.','Toni_Morrison']);
     
//     db.run("INSERT INTO booksName VALUES (?,?)", ['Appearances on C-SPAN
// In Depth interview with Morrison, February 4, 2001','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Depth interview with Morrison, February 4, 2001','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bluest Eye (1970)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sula (1973)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Song of Solomon (1977)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tar Baby (1981)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved (1987)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jazz (1992)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paradise (1997)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love (2003)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Mercy (2008)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Home (2012)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['God Help the Child (2015)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dreaming Emmett (1986)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Desdemona (2011)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Book (1974)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Playing in the Dark (1993)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Remember: The Journey to School Integration (2004)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Garner (2005 libretto)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['His Family  by Ernest Poole (1918)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Magnificent Ambersons by Booth Tarkington (1919)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Innocence by Edith Wharton (1921)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Adams by Booth Tarkington (1922)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One of Ours by Willa Cather (1923)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Able McLaughlins by Margaret Wilson (1924)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['So Big by Edna Ferber (1925)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Arrowsmith by Sinclair Lewis (declined) (1926)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Early Autumn by Louis Bromfield (1927)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bridge of San Luis Rey by Thornton Wilder (1928)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scarlet Sister Mary by Julia Peterkin (1929)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laughing Boy by Oliver La Farge (1930)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Years of Grace by Margaret Ayer Barnes (1931)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Earth by Pearl S. Buck (1932)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Store by Thomas Sigismund Stribling (1933)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lamb in His Bosom by Caroline Pafford Miller (1934)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Now in November by Josephine Winslow Johnson (1935)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Honey in the Horn by Harold L. Davis (1936)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gone with the Wind by Margaret Mitchell (1937)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Late George Apley by John Phillips Marquand (1938)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Yearling by Marjorie Kinnan Rawlings (1939)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grapes of Wrath by John Steinbeck (1940)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In This Our Life by Ellen Glasgow (1942)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon\'s Teeth by Upton Sinclair (1943)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Journey in the Dark by Martin Flavin (1944)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bell for Adano by John Hersey (1945)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the King\'s Men by Robert Penn Warren (1947)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of the South Pacific by James A. Michener (1948)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guard of Honor by James Gould Cozzens (1949)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way West by A. B. Guthrie Jr. (1950)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Town by Conrad Richter (1951)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caine Mutiny by Herman Wouk (1952)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Man and the Sea by Ernest Hemingway (1953)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fable by William Faulkner (1955)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Andersonville by MacKinlay Kantor (1956)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in the Family by James Agee (1958)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Travels of Jaimie McPheeters by Robert Lewis Taylor (1959)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Advise and Consent by Allen Drury (1960)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Kill a Mockingbird by Harper Lee (1961)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Edge of Sadness by Edwin O\'Connor (1962)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Reivers by William Faulkner (1963)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Keepers of the House by Shirley Ann Grau (1965)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Katherine Anne Porter by Katherine Anne Porter (1966)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fixer by Bernard Malamud (1967)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Confessions of Nat Turner by William Styron (1968)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['House Made of Dawn by N. Scott Momaday (1969)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Stories of Jean Stafford by Jean Stafford (1970)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angle of Repose by Wallace Stegner (1972)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Optimist\'s Daughter by Eudora Welty (1973)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Killer Angels by Michael Shaara (1975)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Humboldt\'s Gift by Saul Bellow (1976)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elbow Room by James Alan McPherson (1978)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stories of John Cheever by John Cheever (1979)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Executioner\'s Song by Norman Mailer (1980)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Confederacy of Dunces by John Kennedy Toole (1981)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit Is Rich by John Updike (1982)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Color Purple by Alice Walker (1983)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ironweed by William Kennedy (1984)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Affairs by Alison Lurie (1985)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lonesome Dove by Larry McMurtry (1986)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Summons to Memphis by Peter Taylor (1987)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beloved by Toni Morrison (1988)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Breathing Lessons by Anne Tyler (1989)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mambo Kings Play Songs of Love by Oscar Hijuelos (1990)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rabbit at Rest by John Updike (1991)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Thousand Acres by Jane Smiley (1992)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Scent from a Strange Mountain by Robert Olen Butler (1993)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Shipping News by E. Annie Proulx (1994)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Stone Diaries by Carol Shields (1995)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Independence Day by Richard Ford (1996)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin Dressler: The Tale of an American Dreamer by Steven Millhauser (1997)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['American Pastoral by Philip Roth (1998)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hours by Michael Cunningham (1999)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interpreter of Maladies by Jhumpa Lahiri (2000)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Amazing Adventures of Kavalier &amp; Clay by Michael Chabon (2001)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Falls by Richard Russo (2002)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Middlesex by Jeffrey Eugenides (2003)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Known World  by Edward P. Jones (2004)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gilead by Marilynne Robinson (2005)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['March by Geraldine Brooks (2006)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Road by Cormac McCarthy (2007)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief Wondrous Life of Oscar Wao by Junot Díaz (2008)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Kitteridge by Elizabeth Strout (2009)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tinkers by Paul Harding (2010)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Visit from the Goon Squad by Jennifer Egan (2011)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Orphan Master\'s Son by Adam Johnson (2013)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Goldfinch by Donna Tartt (2014)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All the Light We Cannot See by Anthony Doerr (2015)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sympathizer by Viet Thanh Nguyen (2016)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Underground Railroad by Colson Whitehead (2017)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Less by Andrew Sean Greer (2018)','Toni_Morrison']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jiro Osaragi Prize (Asahi Shimbun), 1983.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Warera no kyōki wo ikinobiru michi wo oshieyo, 1969 – Teach Us to Outgrow Our Madness (1977)','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mizukara waga namida wo nuguitamau hi, 1972 – The Day He Himself Shall Wipe My Tears Away in Teach Us to Outgrow Our Madness (1977)','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Suishi, 2009 – Death by Water (translated by Deborah Boehm).','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Oe, Pamuk: World needs imagination", Yomiuri.co.jp; May 18, 2008.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Onishi, Norimitsu. "Japanese Court Rejects Defamation Lawsuit Against Nobel Laureate," New York Times. March 29, 2008.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ōe, Kenzaburō. (1968). Ōe Kenzaburō Zensakuhin (Complete Works of Oe Kenzaburo).Tokyo: Shinchosha.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['_____________. (1978). Shosetsu no hoho (The Method of a Novel). Tokyo: Iwanami.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kimura, Akio. (2007) Faulkner and Oe: The Self-Critical Imagination. Lanham, Maryland: University Press of America.','Kenzabur%C5%8D_%C5%8Ce']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Death of a Naturalist (1966)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['North (1975)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Field Work (1979)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Spirit Level (1996)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beowulf (translation, 1999)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['District and Circle (2006)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Human Chain (2011)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2011: "Seamus Heaney and Beowulf," by M.J. Toswell, in: Cahier Calin: Makers of the Middle Ages. Essays in Honor of William Calin, ed. by Richard Utz and Elizabeth Emery (Kalamazoo, MI: Studies in Medievalism, 2011), pp.&#160;18–22.','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sophia Hillan, New Hibernia Review / Iris Éireannach Nua, Vol. 9, No. 3 (Autumn, 2005), pp. 86–106. "Wintered into Wisdom: Michael McLaverty, Seamus Heaney, and the Northern Word-Hoard". University of St. Thomas (Center for Irish Studies)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beowulf (1999)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beowulf (2007)','Seamus_Heaney']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Polish Writers on Writing featuring Wislawa Szymborska. Edited by Adam Zagajewski (Trinity University Press, 2007).','Wis%C5%82awa_Szymborska']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Michał St. de Zieleśkiewicz, "Szymborska: zabić księży Kurii Krakowskiej." Bibula – pismo niezalezne, 2011-01-21. (in Polish)','Wis%C5%82awa_Szymborska']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1985 – Manuale minimo dell\'attore (The Tricks of the Trade, 1991)&#91;117&#93;','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1986 – Abducting Francesca (adapted in English as Abducting Diana by Stephen Stenning, 1994)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A number of Fo\'s plays have been translated into the English language, including Abducting Diana,  and Francis the Holy Jester (Beautiful Books Limited, UK, 2009) by Mario Pirovano.','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['d\'Arcangeli, Luciana, Pagliaro, Annamaria, (eds.) “Dario Fo &amp; Franca Rame. Beyond the Rules”, Spunti e Ricerche, Volume 31, 2016, published in 2017.','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Emery, Ed, (ed.), Research Papers on the Theatre of Dario Fo and Franca Rame: Proceedings of the International Conference on the Theatre of Dario Fo and Franca Rame, Cambridge, 28-30 April 2000, London and Sydney, Red Notes, 2002.','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dario Fo, Il paese dei mezaràt, Feltrinelli, Milano, 2004','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Corpse for Sale (1958)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Virtuous Burglar (1958)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Archangels Don\'t Play Pinball (1959)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['He Had Two Pistols with White and Black Eyes (1960)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['He Who Steals a Foot is Lucky in Love (1961)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Isabella, Three Sailing Ships and a Con Man (1963)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Throw the Lady Out (1967)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grand Pantomime with Flags and Small and Middle-sized Puppets (1968)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mistero Buffo (1969)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Worker Knows 300 Words, the Boss Knows 1000, That\'s Why He\'s the Boss (1969)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chain Me Up and I\'ll Still Smash Everything (1969)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['I\'d Rather Die Tonight If I Had To Think It Had All Been In Vain (1970)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Accidental Death of an Anarchist (1970)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['United We Stand! All Together Now! Oops, Isn\'t That the Boss? (1971)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fedayn (1972)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mamma Togni (1973)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The People\'s War in Chile (1973)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Porta and Belli Against the Authorities (1974)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Can\'t Pay? Won\'t Pay! (1974)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fanfani Kidnapped (1975)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mother\'s Marijuana is the Best (1976)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Let\'s Talk About Women (1977)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['All House, Bed and Church (1977)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tale of a Tiger (1978)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trumpets and Raspberries (1981)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Open Couple (1983)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth: Almost by Chance a Woman (1984)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tricks of the Trade (TV, 1985)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hellequin, Harlekin, Arlecchino (1985)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Abducting Francesca (1986)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Miracle of the Infant Jesus (TV, 1987)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from China (1989)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of Qu (1989)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wanted Man (1989)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pope and the Witch (1989)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hush! We\'re Falling! (1990)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Johan Padan and the Discovery of the Americas (1992)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Seventh Commandment: Steal a Bit Less No. 2 (1992)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mummy! The Sans-culottes! (1993)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sex? Thanks, Don\'t Mind If I Do! (1994)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leonardo: The Flight, the Count and the Amours (1995)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil with Boobs (1997)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Two-Headed Anomaly (2003)','Dario_Fo']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baptista Bastos, José Saramago: Aproximação a um retrato, Dom Quixote, 1996','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['T.C. Cerdeira da Silva, Entre a história e aficção: Uma saga de portugueses, Dom Quixote, 1989','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maria da Conceição Madruga, A paixão segundo José Saramago: a paixão do verbo e o verbo da paixão, Campos das Letras, Porto, 1998','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Horácio Costa, José Saramago: O Período Formativo, Ed. Caminho, 1998','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Helena I. Kaufman, Ficção histórica portuguesa da pós-revolução, Madison, 1991','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['O. Lopes, Os sinais e os sentidos: Literatura portuguesa do século&#160;XX, Lisboa, 1986','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['B. Losada, Eine iberische Stimme, Liber, 2, 1, 1990, 3','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carlos Reis, Diálogos com José Saramago, Ed. Caminho, Lisboa, 1998','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. Maria Seixo, O essential sobre José Saramago, Imprensa Nacional, 1987','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Saramago, José (1922–2010)." Encyclopedia of World Biography. Ed. Tracie Ratiner. Vol. 25. 2nd ed. Detroit: Thomson Gale, 2005. Discovering Collection. Thomson Gale. University of Guelph. 25 Sep. 2007.','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Quasi Object (1978)','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poética dos Cinco Sentidos - O Ouvido (1979)','Jos%C3%A9_Saramago']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tin Drum (1959)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cat and Mouse (1961)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dog Years (1963)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Crabwalk (2002)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['What Must Be Said (2012)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Vorzüge der Windhühner (poems, 1956); Steidl, 2007, ISBN&#160;9783865215697','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die bösen Köche. Ein Drama (play, 1956) ISSN 0722-8511 translated as The Wicked Cooks in Four Plays (1967)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hochwasser. Ein Stück in zwei Akten (play, 1957) The Flood','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Onkel, Onkel. Ein Spiel in vier Akten (play, 1958) Mister, Mister','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gleisdreieck (poems, 1960)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Plebejer proben den Aufstand (play, 1966) trans. The Plebeians Rehearse the Uprising (1966)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ausgefragt (poems, 1967)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Über das Selbstverständliche. Reden – Aufsätze – Offene Briefe – Kommentare (speeches, essays, 1968) trans. Speak out! Speeches, Open Letters, Commentaries (1969) with 3 additional pieces','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Örtlich betäubt (novel, 1969) trans. Local Anaesthetic (1970) ISBN&#160;9780449242575','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Davor (play, 1970) trans. Max (1972) on a plot from Local Anaesthetic','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Bürger und seine Stimme. Reden Aufsätze Kommentare (speeches, essays, 1974)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Denkzettel. Politische Reden und Aufsätze 1965–1976 (political essays and speeches, 1978)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Butt (novel, 1977) trans. The Flounder (1978) ISBN&#160;9780156319355','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Treffen in Telgte (novel, 1979) trans. The Meeting at Telgte (1981)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kopfgeburten oder Die Deutschen sterben aus (novel, 1980) trans. Headbirths, or, the Germans are Dying Out (1982)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Widerstand lernen. Politische Gegenreden 1980–1983 (political speeches, 1984)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Rättin (novel, 1986) trans. The Rat (1987) ISBN&#160;9780156758307','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Zunge zeigen. Ein Tagebuch in Zeichnungen (political diary, 1988) trans. Show Your Tongue (1989)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Unkenrufe (novel, 1992) trans. The Call of the Toad (1992) ISBN&#160;9780156153409','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mein Jahrhundert (novel, 1999) trans. My Century (1999) ISBN&#160;9780156011419','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Im Krebsgang (novel, 2002) trans. Crabwalk (2002) ISBN&#160;9780156029704','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letzte Tänze (poems, 2003)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beim Häuten der Zwiebel (memoir, 2006) trans. Peeling the Onion (2007) ISBN&#160;9780156035347 – first volume of memoir','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dummer August (poems, 2007)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Box (memoir, 2008) trans. The Box (2010) ISBN&#160;9780099539759 – second volume of memoir','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Unterwegs von Deutschland nach Deutschland. Tagebuch 1990. (political diary, 2009) trans. From Germany to Germany: Diary 1990 (2012) ISBN&#160;9780547364605','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grimms Wörter (memoir, 2010) Third volume of memoir.&#91;77&#93;','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vonne Endlichkait (collection of prose, poetry, and drawings, 2015) ISBN&#160;9783958290426','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die Blechtrommel (novel, 1959) trans. The Tin Drum (1959) ISBN&#160;978-0-679-72575-6.','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Katz und Maus (novella, 1961) trans. Cat and Mouse (1963) ISBN&#160;9780156155519','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hundejahre (novel, 1963) trans. Dog Years (1965) ISBN&#160;9780749394509','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Four Plays (1967) including Ten Minutes to Buffalo','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Egg and Other Poems (1977)','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Two States One Nation? (1990)&#91;77&#93;','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ International Law Reports (1948) by Elihu Lauterpacht, p. 207','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Thomas Mann Handbook (2013) by Emily Smith, page 168','G%C3%BCnter_Grass']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《絕對信號》 (Signal Alarm, 1982)1982, in Beijing People\'s Art Theatre1992, in Taiwan','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《野人》 (Wild Men, "Savages", 1985)1985, in Beijing People\'s Art Theatre1988, in Hamburg, Germany1990, in Hong Kong','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《對話與反詰》 (Dialogue &amp; Rhetorical / Dialogue and Rebuttal)1992, published in magazine Today (《今天》)1992, in Vienna1995, 1999, in Paris','Gao_Xingjian']);
    
    db.run("INSERT INTO booksName VALUES (?,?)", ['《八月雪》 (Snow in August)2000, published by Taiwan Lianjing Press (台湾联经出版社)Dec 19, 2002, in Taipei','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《給我老爺買魚竿》 (Buying a Fishing Rod for My Grandfather, 1986–1990) – a short story collection','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《靈山》 (Soul Mountain, 1989)','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《一個人的聖經》 (One Man\'s Bible, 1999)','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《巴金在巴黎》 (Ba Jin in Paris, 1979, essay)','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《沒有主義》 (Without -isms, translated by W. Lau, D. Sauviat &amp; M. Williams // Journal of the Oriental Society of Australia. Vols 27 &amp; 28, 1995–96','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The End of the World, Germany, Mar 29, – May 27, 2007','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Buying a Fishing Rod for my Grandfather, short stories, trans. Mabel Lee, Flamingo, London, 2004, ISBN&#160;0-00-717038-6','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Soul Mountain, novel, trans. Mabel Lee, Flamingo, London, 2001, ISBN&#160;0-00-711923-2','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Other Side, play, trans. Jo Riley, in An Oxford Anthology of Contemporary Chinese Drama, 1997, ISBN&#160;0-19-586880-3','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gao Xingjian: Aesthetics and Creation, essays, trans. Mabel Lee, Cambria Press, Amherst, New York, 2012, ISBN&#160;978-160-49-7836-0','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mabel Lee, \'Nobel Laureate 2000 Gao Xingjian and his Novel Soul Mountain\' in CLCWeb: Comparative Literature and Culture: A WWWeb Journal, September, 2000','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"The Challenge to the \'Official Discourse\' in Gao Xingjian\'s Early Fiction" by Deborah Sauviat. First-class Honours thesis. University of Sydney, 1996.','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gao Xingjian and "Soul Mountain: Ambivalent Storytelling, Robert Nagle, Houston, Texas, 2002.','Gao_Xingjian']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mystic Masseur&#160; (1957)&#91;87&#93; – film version: The Mystic Masseur (2001)','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Suffrage of Elvira&#160; (1958)&#91;88&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miguel Street&#160; (1959)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A House for Mr Biswas&#160; (1961)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mr Stone and the Knights Companion&#160; (1963)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Mimic Men&#160; (1967)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Flag on the Island&#160; (1967)','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In a Free State&#160; (1971)&#91;87&#93; – Booker Prize Winner','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guerrillas&#160; (1975)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Bend in the River&#160; (1979)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Enigma of Arrival&#160; (1987)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Way in the World&#160; (1994)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Half a Life&#160; (2001)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Nightwatchman\'s Occurrence Book: And Other Comic Inventions (Stories) (2002: collection comprising The Suffrage of Elvira, Mr Stone and the Knights Companion and A Flag on the Island)&#91;89&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Magic Seeds&#160; (2004)&#91;89&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Middle Passage: Impressions of Five Societies&#160;– British, French and Dutch in the West Indies and South America (1962)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Area of Darkness (1964)&#91;90&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Loss of El Dorado&#160; (1969)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Overcrowded Barracoon and Other Articles (1972)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['India: A Wounded Civilization (1977)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Congo Diary (1980), published by Sylvester &amp; Orphanos&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Return of Eva Perón and the Killings in Trinidad (1980)&#91;91&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Among the Believers: An Islamic Journey (1981)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Finding the Centre: Two Narratives&#160; (1984)&#91;92&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Turn in the South (1989)&#91;89&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['India: A Million Mutinies Now (1990)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond Belief: Islamic Excursions among the Converted Peoples (1998)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Between Father and Son: Family Letters (1999, edited by Gillon Aitken)&#91;89&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Writer and the World: Essays (2002)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Writer\'s People: Ways of Looking and Feeling (2007)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Masque of Africa: Glimpses of African Belief (2010)&#91;87&#93;','V._S._Naipaul']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gályanapló (1992)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A holocaust mint kultúra: Három előadás (1993)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jegyzőkönyv (1993)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Valaki más: A változás krónikája (1997)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A gondolatnyi csend, amíg a kivégzőosztag újratölt (1998)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A száműzött nyelv (2001)&#91;19&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Európa nyomasztó öröksége (2008)&#91;20&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mentés másként (2011)&#91;21&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A végső kocsma (2014)&#91;2&#93;','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fatelessness, translated by Tim Wilkinson (2004). New York: Vintage International. ISBN&#160;1-4000-7863-6','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Detective Story, translated by Tim Wilkinson (2008). London: Harvill Secker. ISBN&#160;1-84655-183-8','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kaddish for a Child Not Born, translated by Christopher C. Wilson and Katharina M. Wilson (1997). Evanston, Illinois: Hydra Books. ISBN&#160;0-8101-1161-6','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kaddish for an Unborn Child, translated by Tim Wilkinson (2004), New York: Vintage International. ISBN&#160;1-4000-7862-8','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Liquidation, translated by Tim Wilkinson (2004). New York: Knopf. ISBN&#160;1-4000-4153-8','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Molnár, Sára. "Nobel in Literature 2002 Imre Kertész\'s Aesthetics of the Holocaust" CLCWeb: Comparative Literature and Culture 5.1 (2003)','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tötösy de Zepetnek, Steven. "And the 2002 Nobel Prize for Literature Goes to Imre Kertész, Jew and Hungarian" CLCWeb: Comparative Literature and Culture 5.1 (2003)','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tötösy de Zepetnek, Steven. "Imre Kertész\'s Nobel Prize, Public Discourse, and the Media" CLCWeb: Comparative Literature and Culture 7.4 (2005)','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vasvári, Louise O., and Tötösy de Zepetnek, Steven, eds. Imre Kertész and Holocaust Literature. West Lafayette: Purdue UP, 2005. ISBN&#160;978-1-55753-396-8','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vasvári, Louise O., and Tötösy de Zepetnek, Steven, eds. Comparative Central European Holocaust Studies. West Lafayette: Purdue UP, 2009. ISBN&#160;978-1-55753-526-9','Imre_Kert%C3%A9sz']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted in J.C. Kannemeyer (2012), J.M. Coetzee: A Life in Writing, Scribe, p. 583.','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dusklands (1974)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In the Heart of the Country (1977)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Waiting for the Barbarians (1980)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Life &amp; Times of Michael K (1983)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Foe (1986)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Age of Iron (1990)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Master of Petersburg (1994)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lives of Animals (1999)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Disgrace (1999)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Costello (2003)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Nobel Lecture in Literature, 2003: "He and His Man" (2004)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Slow Man (2005)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diary of a Bad Year (2007)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Childhood of Jesus (2013)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Schooldays of Jesus (2016)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Boyhood: Scenes from Provincial Life (1997)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Youth: Scenes from Provincial Life II (2002)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Summertime (2009)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Truth in Autobiography (1984)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['White Writing: On the Culture of Letters in South Africa (1988)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Doubling the Point: Essays and Interviews (1992)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Giving Offense: Essays on Censorship (1996)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stranger Shores: Literary Essays, 1986–1999 (2001)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Inner Workings: Literary Essays, 2000–2005 (2007)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Here and Now: Letters, 2008–2011 (2013)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dust (film, 1985)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lives of Animals (TV film, 2002)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Waiting for the Barbarians (opera, 2006)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Disgrace (film, 2008)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Slow Man (opera, 2014)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Animals\' Rights: Considered in Relation to Social Progress (1894)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Animals, Men and Morals (1971)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Animal Liberation (1975)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Case for Animal Rights (1983)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lives of Animals (1999)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Striking at the Roots (2008)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An American Trilogy (2009)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Animals Film (1981)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Cow at My Table (1998)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Meet Your Meat (2002)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peaceable Kingdom (2004)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Earthlings (2005)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Behind the Mask (2006)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cove (2009)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Forks Over Knives (2011)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vegucated (2011)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Speciesism: The Movie (2013)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Ghosts in Our Machine (2013)','J._M._Coetzee']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Clara S, musikalische Tragödie (Clara S, a Musical Tragedy) Premiered at Bonn (1982) OCLC&#160;41445178','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Burgtheater. Posse mit Gesang (Burgtheater. Farce with Songs) Premiered at Bonn (1985)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Begierde und Fahrererlaubnis (eine Pornographie) (Desire and Permission To Drive – Pornography) Premiered at the Styrian Autumn, Graz (1986)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Präsident Abendwind. Ein Dramolett, sehr frei nach Johann Nestroy (President Abendwind. A dramolet, very freely after Johann Nestroy) Premiered at the Tyrol Landestheater, Innsbruck (1992)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wolken. Heim (Clouds. Home) Premiered at Bonn (1988) ISBN&#160;978-3-88243-147-6','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Totenauberg Premiered at the Vienna Burgtheater (Akademietheater) (1992) ISBN&#160;978-3-498-03326-2','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rastätte oder Sie machens alle. Eine Komödie (Service Area or They\'re All Doing It. A Comedy) Premiered at the Burgtheater, Vienna (1994)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stecken, Stab und Stangl. Eine Handarbeit (Rod, Staff, and Crook – Handmade) Premiered at the Deutsches Schauspielhaus, Hamburg (1996)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ein Sportstück (A Sport Play) Premiered at the Burgtheater, Vienna (1998), the English language premiere as Sports Play was premiered on 11 July 2012 at Live at LICA (Nuffield Theatre), Lancaster, UK, translated by Penny Black and produced by Just a Must theatre company','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['er nicht als er (zu, mit Robert Walser) (him not himself – about/with Robert Walser) Premiered at the Salzburg Festival in conjunction with the Deutsches Schauspielhaus, Hamburg (1998)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Lebewohl (Les Adieux) Premiered at the Berliner Ensemble (2000)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Schweigen (Silence) Premiered at the Deutsches Schauspielhaus, Hamburg (2000)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['MACHT NICHTS – Eine Kleine Trilogie des Todes (NO PROBLEM – A Little Trilogy of Death) Premiered at the Zürich Schauspielhaus (2001) ISBN&#160;978-3-499-22683-0','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prinzessinnendramen: Der Tod und das Mädchen I-III und IV-V (Princess Dramas: Death and the Maiden I-III and IV-V) Parts I-III premiered at the Deutsches Schauspielhaus, Hamburg (2002) Parts IV-V premiered at the Deutsches Theater, Berlin (2002)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Das Werk. (The Works) Premiered at the Vienna Burgtheater (Akademietheater) (2003)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bambiland Premiered at the Burgtheater, Vienna (2003) ISBN&#160;978-3-498-03225-8','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Irm und Margit A part of "Attabambi Pornoland" Premiered at the Zürich Schauspielhaus (2004)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ulrike Maria Stuart Premiered at Thalia Theater Hamburg (2006)','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lost Highway (2003), adapted from the film by David Lynch, with music by Olga Neuwirth','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bethman, Brenda. \'Obscene Fantasies\': Elfriede Jelinek\'s Generic Perversions. New York, NY: Peter Lang, 2011; ISBN&#160;978-1-4331-1060-3','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fiddler, Allyson. Rewriting Reality: An Introduction To Elfriede Jelinek. Oxford: Berg, 1994; ISBN&#160;978-0-8549-6776-6','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gérard Thiériot (dir.). Elfriede Jelinek et le devenir du drame, Toulouse, Presses universitaires du Mirail, 2006; ISBN&#160;978-2-85816-869-9','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Konzett, Matthias. The Rhetoric Of National Dissent In Thomas Bernhard, Peter Handke, And Elfriede Jelinek. Rochester, NY: Camden House, 2000; ISBN&#160;978-1571132048','Elfriede_Jelinek']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Room (1957)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Birthday Party (1957)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dumb Waiter (1957)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Slight Ache (1958)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hothouse (1958)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caretaker (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Night Out (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Night School (1960)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dwarfs (1960)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Collection (1961)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Lover (1962)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tea Party (1964)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Homecoming (1964)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Basement (1966)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Landscape (1967)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Silence (1968)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Old Times (1970)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Monologue (1972)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Man\'s Land (1974)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Betrayal (1978)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Family Voices (1980)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Kind of Alaska (1982)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Victoria Station (1982)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['One for the Road (1984)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mountain Language (1988)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The New World Order (1991)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Party Time (1991)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Moonlight (1993)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ashes to Ashes (1996)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Celebration (1999)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Remembrance of Things Past (2000)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black and White (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trouble in the Works (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Last to Go (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Request Stop (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Special Offer (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['That\'s Your Trouble (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['That\'s All (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Interview (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Applicant (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dialogue for Three (1959)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Umbrellas (1960)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Night (1969)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Precisely (1983)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Press Conference (2002)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Apart From That (2006)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Caretaker (1963)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Servant (1963)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pumpkin Eater (1963)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Quiller Memorandum (1965)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Accident (1966)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Birthday Party (1968)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Go-Between (1970)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Homecoming (1969)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Langrishe, Go Down (1970)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Proust Screenplay (1972)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Tycoon (1974)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The French Lieutenant\'s Woman (1981)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Betrayal (1982, 1983)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Victory (1982)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Turtle Diary (1984)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Heat of the Day (1988)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Reunion (1989)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Comfort of Strangers (1989)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Handmaid\'s Tale (1990)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Party Time (1992)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Trial (1993)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dreaming Child (1997)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Tragedy of King Lear (2000)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sleuth (2007)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','Harold_Pinter']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The White Castle, translated by Victoria Holbrook, Manchester (UK): Carcanet Press Limited, 1990;, 1991; New York: George Braziller, 1991 [original title: Beyaz Kale]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The New Life, translated by Güneli Gün, New York: Farrar, Straus &amp; Giroux, 1997 [original title: Yeni Hayat]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Name Is Red, translated by Erdağ M. Göknar, New York: Alfred A. Knopf, 2001 [original title: Benim Adım Kırmızı].','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Snow, translated by Maureen Freely, New York: Alfred A. Knopf, 2004 [original title: Kar]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Museum of Innocence, translated by Maureen Freely, New York: Alfred A. Knopf, was released on Oct 20, 2009 [original title: Masumiyet Müzesi]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Silent House, translated by Robert Finn, New York:  Alfred A. Knopf, 2012  [original title: Sessiz Ev]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Strangeness in My Mind, translated by Ekin Oklap, New York:  Alfred A. Knopf, 2015 [original title: Kafamda Bir Tuhaflık]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Haired Woman, translated by Ekin Oklap, New York:  Alfred A. Knopf, 2017 [original title: Kırmızı saçlı kadın]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Istanbul: Memories and the City, translated by Maureen Freely, New York: Alfred A. Knopf, 2005 [original title: İstanbul: Hatıralar ve Şehir]','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Other Colors: Essays and a Story, translated by Maureen Freely, New York: Alfred A. Knopf, 2007 [original title: Öteki Renkler]&#91;81&#93;','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Naive and Sentimental Novelist, Harvard University Press, 2010','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cevdet Bey ve Oğulları (Cevdet Bey and His Sons), novel, Istanbul: Karacan Yayınları, 1982','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sessiz Ev (Silent House), novel, Istanbul: Can Yayınları, 1983','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Beyaz Kale (The White Castle), novel, Istanbul: Can Yayınları, 1985','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kara Kitap (The Black Book), novel, Istanbul: Can Yayınları, 1990','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gizli Yüz (Secret Face), screenplay, Istanbul: Can Yayınları, 1992','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Yeni Hayat (The New Life), novel, Istanbul: İletişim Yayınları, 1994','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Benim Adım Kırmızı (My Name is Red), novel, Istanbul: İletişim Yayınları, 1998','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Öteki Renkler (Other Colors), essays, Istanbul: İletişim Yayınları, 1999','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kar (Snow), novel, Istanbul: İletişim Yayınları, 2002','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['İstanbul: Hatıralar ve Şehir (Istanbul: Memories and the City), memoirs, Istanbul: Yapı Kredi Yayınları, 2003','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Babamın Bavulu (My Father\'s Suitcase), Nobel Söylevi, İstanbul, İletişim Yayınları, 2007','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Masumiyet Müzesi (The Museum of Innocence), novel, Istanbul: İletişim Yayınları, 2008','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Manzaradan Parçalar: Hayat, Sokaklar, Edebiyat (Pieces from the View: Life, Streets, Literature), essays, Istanbul: İletişim Yayınları, 2010','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saf ve Düşünceli Romancı ("Naive and Sentimental Novelist") literary criticism, İstanbul: İletişim Yayınları, 2011','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kafamda Bir Tuhaflık (A Strangeness in My Mind), novel, Istanbul:  Yapı Kredi Publications, 2014','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kırmızı Saçlı Kadın, novel, Yapı Kredi Yayınları, 2016','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hatıraların Masumiyeti, scripts and essays, Yapı Kredi Yayınları, 2016','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pamuk, Orhan (2005). Istanbul: Memories and the City, translated by Maureen Freely. Faber &amp; Faber p. 15 -- "My paternal grandmother was Circassian (Circassian girls, famous for being tall and beautiful, were very popular in Ottoman harems)."','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hurriyet, 2002-05-26','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Orhan Pamuk\'a Legion D\'honneur nişanı", Hurriyet, 2012.','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Husseyin, Hazim M. (2009). Nobel Ödülünün Orhan Pamuk ve Eserleri Üzerindeki Etkileri. University of Baghdad. p. 94.','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pamuk, Orhan (2005). Istanbul: Memories and the City, translated by Maureen Freely. Faber &amp; Faber p. 15 -- "My paternal grandmother was Circassian (Circassian girls, famous for being tall and beautiful, were very popular in Ottoman harems)."','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Karpat, Kemal H. (2001) The Politicization of Islam: Reconstructing Identity, State, Faith, and Community in the Late Ottoman State. Oxford University Press. p. 345 -- (...) such as the novelist Orhan Pamuk, who is of Circassian origin.','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cevdet Bey and His Sons (1982)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Silent House (1983)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The White Castle (1985)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Book (1990)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The New Life (1995)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Name Is Red (1998)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Snow (2002)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Museum of Innocence (2008)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Strangeness in My Mind (2014)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Secret Face (1992)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Other Colors: Essays and a Story (1999)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Istanbul: Memories and the City (2003)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['My Father\'s Suitcase (2007)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Manzaradan Parçalar (2010)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Naive and the Sentimental Novelist (2011)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Innocence of Objects (2012)','Orhan_Pamuk']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grass Is Singing (1950) (filmed as Killing Heat (1981))','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Retreat to Innocence (1956)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden Notebook (1962)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Briefing for a Descent into Hell (1971)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Summer Before the Dark (1973)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memoirs of a Survivor (1974)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Diary of a Good Neighbour (as Jane Somers, 1983)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['If the Old Could... (as Jane Somers, 1984)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Terrorist (1985)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Fifth Child (1988)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love, Again (1996)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mara and Dann (1999)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ben, in the World (2000)&#160;– sequel to The Fifth Child','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sweetest Dream (2001)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of General Dann and Mara\'s Daughter, Griot and the Snow Dog (2005)&#160;– sequel to Mara and Dann','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cleft (2007)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martha Quest (1952)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Proper Marriage (1954)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Ripple from the Storm (1958)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Landlocked (1965)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Four-Gated City (1969)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shikasta (1979)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Marriages Between Zones Three, Four and Five (1980)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sirian Experiments (1980)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Making of the Representative for Planet 8 (1982)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sentimental Agents in the Volyen Empire (1983)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Making of the Representative for Planet 8 (music by Philip Glass, 1986)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Marriages Between Zones Three, Four and Five (music by Philip Glass, 1997)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Playing the Game (graphic novel illustrated by Charlie Adlard, 1995)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Each His Own Wilderness (three plays, 1959)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Play with a Tiger (1962)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fourteen Poems (1959)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wolf People&#160;– INPOPA Anthology 2002 (poems by Lessing, Robert Twigger and T.H. Benson, 2002)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['This Was the Old Chief\'s Country (1951)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Five Short Novels (1953)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Habit of Loving (1957)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Man and Two Women (1963)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['African Stories (1964)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Winter in July (1966)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Madonna (1966)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Story of a Non-Marrying Man (1972)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['This Was the Old Chief\'s Country: Collected African Stories, Vol. 1 (1973)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sun Between Their Feet: Collected African Stories, Vol. 2 (1973)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['To Room Nineteen: Collected Stories, Vol. 1 (1978)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Temptation of Jack Orkney: Collected Stories, Vol. 2 (1978)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Stories (1978)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Through the Tunnel (1990)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['London Observed: Stories and Sketches (1992)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Real Thing: Stories and Sketches (1992)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Spies I Have Known (1995)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Pit (1996)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Grandmothers: Four Short Novels (2003) (filmed as Two Mothers)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Particularly Cats (stories and nonfiction, 1967)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Particularly Cats and Rufus the Survivor (stories and nonfiction, 1993)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Age of El Magnifico (stories and nonfiction, 2000)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Cats (2002)&#160;– omnibus edition containing the above three books','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Going Home (memoir, 1957)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['African Laughter: Four Visits to Zimbabwe (memoir, 1992)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under My Skin: Volume One of My Autobiography, to 1949 (1994)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Walking in the Shade: Volume Two of My Autobiography, 1949 to 1962 (1997)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alfred and Emily (memoir/fiction hybrid, 2008)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Pursuit of the English (1960)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prisons We Choose to Live Inside (essays, 1987)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wind Blows Away Our Words (1987)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Small Personal Voice (essays, 1994)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Conversations (interviews, edited by Earl G. Ingersoll, 1994)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Putting the Questions Differently (interviews, edited by Earl G. Ingersoll, 1996)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Time Bites: Views and Reviews (essays, 2004)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['On Not Winning the Nobel Prize (Nobel Lecture, 2007, published 2008)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Guest of Honor Speech", in Worldcon Guest of Honor Speeches, edited by Mike Resnick and Joe Siclari (Deerfield, IL: ISFIC Press, 2006), p. 192.','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','Doris_Lessing']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Procès-Verbal (The Interrogation) (1963)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Jour où Beaumont fit connaissance avec sa douleur (The Day Beaumont Became Acquainted with His Pain) (1964)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le déluge (The Flood) (1966)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Terra Amata\' (1967)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Livre des fuites (The Book of Flights) (1969)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Guerre (War) (1970)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Les Géants (The Giants) (1973)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Voyages de l\'autre côté (Journeys to the Other Side) (1975)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Désert (Desert) (1980)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Chercheur d\'or (The Prospector) (1985)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Onitsha (Onitsha) (1991)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Étoile errante (Wandering Star) (1992)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La Quarantaine (The Qurantine) (1995)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Poisson d\'or (Fish of Gold) (1997)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hasard suivi de Angoli Mala (1999)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fantômes dans la rue (Ghosts in the Street) (2000)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Révolutions (2003)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ourania (2006)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ritournelle de la faim (The Refrain of Hunger) (2008)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alma (2017)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Rêve mexicain ou la pensée interrompue (The Mexican Dream, Or, The Interrupted Thought of Amerindian Civilizations) (1965)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['L\'Extase matérielle (Material Ecstasy) (1967)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['La ronde et autres faits divers (The Round &amp; Other Cold Hard Facts) (1982)','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lullaby','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jennifer R. Waelti-Walters, J.M.G. Le Clézio, Boston, Twayne, " Twayne\'s World Authors Series " 426, 1977.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jennifer R. Waelti-Walters, Icare ou l\'évasion impossible, éditions Naaman, Sherbrooke, Canada, 1981.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, Sophie Jollin-Bertocchi, J.M.G. Le Clézio: Intertextualité et interculturalité, Nantes, Editions du Temps, 2004.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, Bénédicte Mauguière,  J.M.G. Le Clézio, la francophonie et la question coloniale, Nouvelles Etudes Francophones, numéro 20, 2005.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Keith Moser, "Privileged moments" in the novels and short stories of J.M.G. Le Clézio, Edwin Mellen Press, 2008.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, Claude Cavallero (eds), Contes, nouvelles &amp; Romances, Les Cahiers Le Clézio, vol. 2, Paris, 2009.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, J.M.G. Le Clézio et la métaphore exotique, Amsterdam/New York, Rodopi, 2009.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Isabelle Roussel-Gillet, J.M.G. Le Clézio, écrivain de l\'incertitude, Ellipses, 2011.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, Isabelle Roussel-Gillet (eds), Migrations et métissages, Les Cahiers Le Clézio, vol. 3–4, 2011.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Keith Moser, JMG Le Clézio, A Concerned Citizen of the Global Village, Lexington Books, 2012.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno Thibault, Keith Moser, J.M.G. Le Clézio dans la forêt des paradoxes, Paris, Editions de l\'Harmattan, 2012.','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lullaby','J._M._G._Le_Cl%C3%A9zio']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drückender Tango ("Oppressive Tango"), stories, Bucharest, 1984','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Mensch ist ein großer Fasan auf der Welt, Berlin, 1986. (Published in English as The Passport, Serpent\'s Tail, 1989)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barfüßiger Februar ("Barefoot February"), Berlin, 1987','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wie Wahrnehmung sich erfindet ("How Perception Invents Itself"), Paderborn, 1990','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Teufel sitzt im Spiegel ("The Devil is Sitting in the Mirror"), Berlin, 1991','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Fuchs war damals schon der Jäger (published as "The Fox Was Ever the Hunter" in English), Reinbek bei Hamburg, 1992','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eine warme Kartoffel ist ein warmes Bett ("A Warm Potato Is a Warm Bed"), Hamburg, 1992','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Wächter nimmt seinen Kamm ("The Guard Takes His Comb"), Reinbek bei Hamburg, 1993','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angekommen wie nicht da ("Arrived As If Not There"), Lichtenfels, 1994','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hunger und Seide ("Hunger and Silk"), essays, Reinbek bei Hamburg, 1995','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der fremde Blick oder Das Leben ist ein Furz in der Laterne ("The Foreign View, or Life Is a Fart in a Lantern"), Göttingen, 1999','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heimat ist das, was gesprochen wird ("Home Is What Is Spoken There"), Blieskastel, 2001','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Good Person Is Worth as Much as a Piece of Bread, foreword to Kent Klich\'s Children of Ceausescu, published by Journal, 2001 and Umbrage Editions, 2001.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der König verneigt sich und tötet ("The King Bows and Kills"), essays, Munich (and elsewhere), 2003','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Atemschaukel, Munich, 2009 (The Hunger Angel, Metropolitan Books, 2012)&#91;32&#93;','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Immer derselbe Schnee und immer derselbe Onkel, 2011','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Im Haarknoten wohnt eine Dame ("A Lady Lives in the Hair Knot"), Rowohlt, Reinbek bei Hamburg, 2000','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die blassen Herren mit den Mokkatassen ("The Pale Gentlemen with their Espresso Cups"), Carl Hanser Verlag, Munich, 2005','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Este sau nu este Ion ("Is He or Isn\'t He Ion"), collage-poetry written and published in Romanian, Iași, Polirom, 2005','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vater telefoniert mit den Fliegen ("Father is calling the Flies"), Carl Hanser Verlag, Munich, 2012','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maria S. Grewe, "Imagining the East: Some Thoughts on Contemporary Minority Literature in Germany and Exoticist Discourse in Literary Criticism." Germany and the Imagined East. Ed. Lee Roberts. Cambridge, 2005.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Maria S. Grewe, Estranging Poetic: On the Poetic of the Foreign in Select Works by Herta Müller and Yoko Tawada, New York: Columbia UP, 2009.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brigid Haines, \'"The Unforgettable Forgotten": The Traces of Trauma in Herta Müller\'s Reisende auf einem Bein, German Life and Letters, 55.3 (2002), 266–81.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brigid Haines and Margaret Littler, Contemporary German Women\'s Writing: Changing the Subject, Oxford: Oxford UP, 2004.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herta Haupt-Cucuiu: Eine Poesie der Sinne ("A Poetry of the Senses"), Paderborn, 1996.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herta Müller, Berlin, 1992.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Herta Müller, Munich, 2002.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lyn Marven, Body and Narrative in Contemporary Literatures in German: Herta Müller, Libuse Moníková, Kerstin Hensel. Oxford: Oxford University Press, 2005.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Grazziella Predoiu, Faszination und Provokation bei Herta Müller, Frankfurt am Main, 2000.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diana Schuster, Die Banater Autorengruppe: Selbstdarstellung und Rezeption in Rumänien und Deutschland. Konstanz: Hartung-Gorre-Verlag, 2004.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carmen Wagner, Sprache und Identität. Oldenburg, 2002.','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Passport (1986)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Barfüßiger Februar (1987)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Traveling on One Leg (1989)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Wie Wahrnehmung sich erfindet (1990)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Teufel sitzt im Spiegel (1991)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Fuchs war damals schon der Jäger (1992)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eine warme Kartoffel ist ein warmes Bett (1992)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der Wächter nimmt seinen Kamm (1993)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Angekommen wie nicht da (1994)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Land of Green Plums (1994)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In der Falle (1996)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Appointment (1997)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der fremde Blick oder Das Leben ist ein Furz in der Laterne (1999)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heimat ist das, was gesprochen wird (2001)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Hunger Angel (2009)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nadirs (1982)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Drückender Tango (1984)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hunger und Seide (1995)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In der Falle (1996)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Der König verneigt sich und tötet (2003)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Immer derselbe Schnee und immer derselbe Onkel (2011)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Im Haarknoten wohnt eine Dame (2000)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Este sau nu este Ion (Collage-poetry in Romanian, 2005)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Die blassen Herren mit den Mokkatassen (2005)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vater telefoniert mit den Fliegen (2012)','Herta_M%C3%BCller']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1959 – Los jefes (The Cubs and Other Stories, 1979)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1963 – La ciudad y los perros (The Time of the Hero, 1966)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1966 – La casa verde (The Green House, 1968)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1969 – Conversación en la catedral (Conversation in the Cathedral, 1975)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1973 – Pantaleón y las visitadoras (Captain Pantoja and the Special Service, 1978)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1977 – La tía Julia y el escribidor (Aunt Julia and the Scriptwriter, 1982)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1981 – La guerra del fin del mundo (The War of the End of the World, 1984)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1984 – Historia de Mayta (The Real Life of Alejandro Mayta, 1985)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1986 – ¿Quién mató a Palomino Molero? (Who Killed Palomino Molero?, 1987)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1987 – El hablador (The Storyteller, 1989)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1988 – Elogio de la madrastra (In Praise of the Stepmother, 1990)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1993 – Lituma en los Andes (Death in the Andes, 1996)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1997 – Los cuadernos de don Rigoberto (The Notebooks of Don Rigoberto, 1998)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2000 – La fiesta del chivo (The Feast of the Goat, 2001)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2003 – El paraíso en la otra esquina (The Way to Paradise, 2003)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2006 – Travesuras de la niña mala (The Bad Girl, 2007)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2010 – El sueño del celta (The Dream of the Celt, 2010)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2013 – El héroe discreto (The Discreet Hero, 2015)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['2016 – Cinco esquinas (The Neighborhood, 2018)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martí-Peña, Guadalupe."Presencia/Ausencia y Différance en Elogio de la madrastra y Los cuadernos de don Rigoberto de Mario Vargas Llosa." In Mario Vargas Llosa: Perspectivas Críticas: Ensayos Inéditos. Ed. Pol Popovic. U. Tecnológico de Monterrey Press, 2009. pp.&#160;365–402.','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martí-Peña, Guadalupe. "El teatro del ser: dualidad y desdoblamiento en la escenificación narrativa de Los cuadernos de don Rigoberto de Mario Vargas Llosa." Revista Canadiense de Estudios Hispánicos 28.2 (2004): 355–75.','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Time of the Hero (1963)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Green House (1966)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Conversation in the Cathedral (1969)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Captain Pantoja and the Special Service (1973)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Aunt Julia and the Scriptwriter (1977)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The War of the End of the World (1981)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Real Life of Alejandro Mayta (1984)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Who Killed Palomino Molero? (1986)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Storyteller (1987)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['In Praise of the Stepmother (1988)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Death in the Andes (1993)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Notebooks of Don Rigoberto (1997)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Feast of the Goat (2000)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Way to Paradise (2003)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bad Girl (2006)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Dream of the Celt (2010)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Discreet Hero (2013)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Neighborhood (2016)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Cubs and Other Stories (1959)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Basis for Interpretation of Rubén Darío (1958)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Perpetual Orgy (1975)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Temptation of the Impossible (2004)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Writer\'s Reality (1991)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Fish in the Water (1993)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Milestones and the Stories of Greatest Literary Works (1995)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Making Waves (1997)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Letters to a Young Novelist (1997)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Language of Passion (2001)','Mario_Vargas_Llosa']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['17 Poems (17 dikter), Bonniers, 1954','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Secrets on the Way (Hemligheter på vägen), Bonnier, 1958','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Half-Finished Heaven (Den halvfärdiga himlen), Bonnier, 1962','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bells and Tracks (Klanger och spår),  Bonnier, 1966','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Seeing in the Dark (Mörkerseende), Författarförlaget, 1970','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paths (Stigar), Författarförlaget, 1973, ISBN&#160;978-91-7054-110-0','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baltics (Östersjöar), Bonnier, 1974','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Truthbarrier (Sanningsbarriären), Bonnier, 1978, ISBN&#160;978-91-0-043684-1','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wild Market Square (Det vilda torget) Bonnier, 1983, ISBN&#160;978-91-0-046048-8','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For the Living and the Dead (För levande och döda), Bonnier, 1989','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sorrow Gondola (Sorgegondolen), Bonnier, 1996, ISBN&#160;978-91-0-056232-8','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Prison (Fängelse), Edition Edda, 2001 (from 1959), ISBN&#160;978-91-89352-10-0','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Great Enigma (Den stora gåtan), Bonnier, 2004, ISBN&#160;978-91-0-010310-1','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Memories Look at Me (Minnena ser mig), Bonnier, 1993, prose memoir ISBN&#160;978-91-0-055716-4','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Air Mail: Brev 1964-1990, Bonnier, 2001, correspondence with Robert Bly ISBN&#160;978-91-0-057384-3','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Galleriet: Reflected in Vecka nr.II (2007), an artist book by Modhir Ahmed','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Twenty Poems tr. Robert Bly, Seventies Press, 1970&#91;17&#93;','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Night Vision: Mörkerseende tr. Robert Bly, London Magazine Editions, 1972, SBN 900626 74 7','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Windows and Stones tr. May Swenson &amp; Leif Sjoberg, University of Pittsburgh Press, 1972; ISBN&#160;978-0-8229-3241-3','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems, Tomas Tranströmer, tr. Robin Fulton, (included with Paavo Haavikko), Penguin Modern European Poets, 1974; ISBN&#160;978-0140421576','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Baltics: Östersjöar, tr. Robin Fulton, Oasis Books, London, 1980; ISBN&#160;0-903375-51-6','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems, translator Robin Fulton, Ardis Publishers, 1981, ISBN&#160;978-0-88233-462-2','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Wild Market Square: Det vilda torget tr. John F. Deane, Dedalus Press, Dublin, 1985; ISBN&#160;0-948268-05-0','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems, Translator Robin Fulton, Bloodaxe Books, 1987, ISBN&#160;978-1-85224-023-3','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tomas Tranströmer: Selected Poems, 1954–1986, Editor Robert Hass, Publisher Ecco Press, 1987 ISBN&#160;978-0-88001-113-6','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['For the Living and the Dead: För levande och döda,  tr. John F. Deane; The Dedalus Press, Dublin, 1994; ISBN&#160;1-873790-48-1','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['New Collected Poems tr. Robin Fulton, Bloodaxe Books, 1997, ISBN&#160;978-1-85224-413-2','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems Transtromer, Translator May Swenson, Eric Sellin, HarperCollins, 1999, ISBN&#160;978-0-88001-403-8','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Half-Finished Heaven tr. Robert Bly, Graywolf Press, 2001, ISBN&#160;978-1-55597-351-3','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sorrow Gondola tr. Michael McGriff and Mikaela Grassl, Green Integer, 2010, ISBN&#160;978-1-933382-44-9','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['New Collected Poems tr. Robin Fulton, expanded edition Bloodaxe Books, 2011, ISBN&#160;978-1-85224-413-2','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Inspired Notes, tr. John F. Deane, Dedalus Press, Dublin, 2011 (combining his 1985 and 1994 translations above); ISBN&#160;978-1906614539','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bright Scythe: Selected Poems by Tomas Tranströmer, tr. Patty Crane, Bilingual edition, Sarabande Books, 2015; ISBN&#160;978-1941411216','Tomas_Transtr%C3%B6mer']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《红高粱家族》 Red Sorghum (1986)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《天堂蒜薹之歌》 The Garlic Ballads (1988)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《十三步》 Thirteen Steps (1988)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《食草家族》 The Herbivorous Family (1993)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《酒国》 The Republic of Wine: A Novel (1993)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《丰乳肥臀》 Big Breasts &amp; Wide Hips (1995)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《红树林》 Red Forest (1999)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《檀香刑》 Sandalwood Death (2001)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《四十一炮》 Pow! (2003)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《生死疲劳》 Life and Death Are Wearing Me Out (2006)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《蛙》 Frog (2009)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《白狗秋千架》 White Dog and the Swing (30 short stories, 1981–1989)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《与大师约会》 Meeting the Masters (45 short stories, 1990–2005)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['《会唱歌的墙》 The Wall Can Sing (60 essays, 1981–2011)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Red Sorghum (1987) (directed by Zhang Yimou)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Happy Times (2000) (directed by Zhang Yimou, adaptation of Shifu: You\'ll Do Anything for a Laugh)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuan (2003) (directed by Huo Jianqi, adaptation of White Dog Swing)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Sun Has Ears (1995) (directed by Yim Ho, adaptation of Grandma Wearing Red Silk)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Chinese Writers on Writing featuring Mo Yan. Ed. Arthur Sze. (Trinity University Press, 2010).','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Red Sorghum (1986)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Republic of Wine (1993)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Big Breasts and Wide Hips (1995)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pow! (2003)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Life and Death Are Wearing Me Out (2006)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Frog (2009)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Red Sorghum (1988)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Happy Times (2000)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nuan (2003)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Red Sorghum (2014)','Mo_Yan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Stories (later retitled Selected Stories 1968-1994 and A Wilderness Station: Selected Stories, 1968–1994) – 1996','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Canadian Booksellers Award for Lives of Girls and women (1971)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shortlisted for the annual (UK) Booker Prize for Fiction (now the Man Booker Prize) (1980) for The Beggar Maid','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rogers Writers\' Trust Fiction Prize (2004) for Runaway &#91;43&#93;','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Trillium Book Award for Friend of My Youth (1991), The Love of a Good Woman (1999) and Dear Life (2013)&#91;44&#93;','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['WH Smith Literary Award (1995, UK) for Open Secrets','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['National Book Critics Circle Award (1998, U.S.) For The Love of a Good Woman','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gaunce, Julia, Suzette Mayr, Don LePan, Marjorie Mather, and Bryanne Miller, eds. "Alice Munro." The Broadview Anthology of Short Fiction. 2nd ed. Buffalo, NY: Broadview Press, 2012.','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Susanne Becker, Gothic Forms of Feminine Fictions. Manchester University Press, 1999.','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Besner, Neil K., "Introducing Alice Munro\'s Lives of Girls and Women: A Reader\'s Guide" (Toronto: ECW Press), 1990','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Besner, Neil Kalman. Introducing Alice Munro\'s Lives of Girls and Women: a reader\'s guide. (Toronto: ECW Press, 1990)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Blodgett, E. D. Alice Munro. (Boston: Twayne Publishers, 1988)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Buchholtz, Miroslawa (ed.). Alice Munro. Understanding, Adapting, Teaching (Springer International Publishing, 2016)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carrington, Ildikó de Papp. Controlling the Uncontrollable: the fiction of Alice Munro. (DeKalb: Northern Illinois University Press, 1989)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carscallen, James. The Other Country: patterns in the writing of Alice Munro. (Toronto: ECW Press, 1993)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cox, Alisa. Alice Munro. (Tavistock: Northcote House, 2004)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dahlie, Hallvard. Alice Munro and Her Works. (Toronto: ECW Press, 1984)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hebel, Ajay. The Tumble of Reason: Alice Munro\'s discourse of absence. (Toronto: University of Toronto Press, 1994)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hiscock, Andrew. "Longing for a Human Climate: Alice Munro\'s \'Friend of My Youth\' and the culture of loss." Journal of Commonwealth Literature 32.2 (1997): 18.','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hooper, Brad The Fiction of Alice Munro: An Appreciation (Westport, Conn.: Praeger, 2008), ISBN&#160;978-0-275-99121-0','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Howells, Coral Ann. Alice Munro. (New York: Manchester University Press, 1998), ISBN&#160;978-0-7190-4558-5','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hoy, H. "\'Dull, Simple, Amazing and Unfathomable\': Paradox and Double Vision In Alice Munro\'s Fiction." Studies in Canadian Literature/Études en littérature canadienne (SCL/ÉLC), Volume 5.1. (1980).','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['MacKendrick, Louis King. Some Other Reality: Alice Munro\'s Something I\'ve Been Meaning to Tell You. (Toronto: ECW Press, 1993)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martin, W.R. Alice Munro: paradox and parallel. (Edmonton: University of Alberta Press, 1987)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mazur, Carol and Moulder, Cathy. Alice Munro: An Annotated Bibliography of Works and Criticism. (Toronto: Scarecrow Press, 2007) ISBN&#160;978-0810859241','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['McCaig, JoAnn. Reading In: Alice Munro\'s archives. (Waterloo: Wilfrid Laurier University Press, 2002)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miller, Judith, ed. The Art of Alice Munro: saying the unsayable: papers from the Waterloo conference. (Waterloo: Waterloo Press, 1984)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Munro, Sheila. Lives of Mother and Daughters: growing up with Alice Munro. (Toronto: McClelland &amp; Stewart, 2001)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Murray, Jennifer. Reading Alice Munro with Jacques Lacan. (Montreal: McGill-Queen\'s University Press, 2016)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pfaus, B. Alice Munro. (Ottawa: Golden Dog Press, 1984.)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rasporich, Beverly Jean. Dance of the Sexes: art and gender in the fiction of Alice Munro. (Edmonton: University of Alberta Press, 1990)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Redekop, Magdalene. Mothers and Other Clowns: the stories of Alice Munro. (New York: Routledge, 1992)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ross, Catherine Sheldrick. Alice Munro: a double life. (Toronto: ECW Press, 1992.)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Smythe, Karen E. Figuring Grief: Gallant, Munro and the poetics of elegy. (Montreal: McGill-Queen\'s University Press, 1992)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Steele, Apollonia and Tener, Jean F., editors. The Alice Munro Papers: Second Accession. (Calgary: University of Calgary Press, 1987)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tausky, Thomas E. Biocritical Essay. The University of Calgary Library Special Collections (1986)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thacker, Robert. Alice Munro: writing her lives: a biography. (Toronto: McClelland &amp; Stewart, 2005)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ventura, Héliane, and Mary Condé, eds. Alice Munro. Open Letter 11:9 (Fall-Winter 2003-4). ISSN 0048-1939. Proceedings of the Alice Munro conference L\'écriture du secret/Writing Secrets, Université d\'Orléans, 2003.','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dance of the Happy Shades (1968)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lives of Girls and Women (1971)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Something I\'ve Been Meaning to Tell You (1974)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Who Do You Think You Are? (1978)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Moons of Jupiter (1982)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Progress of Love (1986)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Friend of My Youth (1990)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Open Secrets (1994)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Love of a Good Woman (1998)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hateship, Friendship, Courtship, Loveship, Marriage (2001)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Runaway (2004)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The View from Castle Rock (2006)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Too Much Happiness (2009)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dear Life (2012)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Stories (1996: 1968-1994)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Love Lost (2003: 1978–1999)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vintage Munro (2004: 1982–2001)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carried Away: A Personal Selection Of Stories (2006: 1978–2004)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Martha, Ruth &amp; Edie (1988, segment "How I Met My Husband")','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Edge of Madness (2002 film)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Away from Her (2006 film)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hateship, Loveship (2013 film)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Julieta (2016 film)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The Book of Secrets (1994)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, A Fine Balance (1995)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, Alias Grace (1996)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, Barney\'s Version (1997)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Love of a Good Woman (1998)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bonnie Burnard, A Good House (1999)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost / David Adams Richards, Mercy among the Children (2000)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke, The Polished Hoe (2002)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The In-Between World of Vikram Lall (2003)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Runaway (2004)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Bergen, The Time in Between (2005)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vincent Lam, Bloodletting &amp; Miraculous Cures (2006)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Hay, Late Nights on Air (2007)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Boyden, Through Black Spruce (2008)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Linden MacIntyre, The Bishop\'s Man (2009)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Johanna Skibsrud, The Sentimentalists (2010)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Esi Edugyan, Half-Blood Blues (2011)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Will Ferguson, 419 (2012)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lynn Coady, Hellgoing (2013)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sean Michaels, Us Conductors (2014)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['André Alexis, Fifteen Dogs (2015)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Redhill, Bellevue Square (2017)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bertram Brooker, Think of the Earth (1936)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Laura Salverson, The Dark Weaver (1937)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Swiss Sonata (1938)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Franklin D. McDowell, The Champlain Road (1939)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Ringuet, Thirty Acres (1940)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Sullivan, Three Came to Ville Marie (1941)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['G. Herbert Sallans, Little Man (1942)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Head Raddall, The Pied Piper of Dipper Creek (1943)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Earth and High Heaven (1944)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, Two Solitudes (1945)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Winifred Bambrick, Continental Revue (1946)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, The Tin Flute (1947)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Precipice (1948)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Child, Mr. Ames Against Time (1949)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Germaine Guèvremont, The Outlander (1950)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morley Callaghan, The Loved and the Lost (1951)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, The Pillar (1952)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, Digby (1953)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Igor Gouzenko, The Fall of a Titan (1954)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Shapiro, The Sixth of June (1955)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Adele Wiseman, The Sacrifice (1956)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, Street of Riches (1957)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Colin McDougall, Execution (1958)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Watch That Ends the Night (1959)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Luck of Ginger Coffey (1960)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Malcolm Lowry, Hear Us O Lord from Heaven Thy Dwelling Place (1961)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kildare Dobbs, Running to Paradise (1962)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh Garner, Hugh Garner\'s Best Stories (1963)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas LePan, The Deserter (1964)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, A Jest of God (1966)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Dance of the Happy Shades (1968)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Kroetsch, The Studhorse Man (1969)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dave Godfrey, The New Ancestors (1970)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, St. Urbain\'s Horseman (1971)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson Davies, The Manticore (1972)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, The Temptations of Big Bear (1973)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, The Diviners (1974)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Great Victorian Collection (1975)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Marian Engel, Bear (1976)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Timothy Findley, The Wars (1977)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Who Do You Think You Are? (1978)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Hodgins, The Resurrection of Joseph Bourne (1979)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['George Bowering, Burning Water (1980)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Mavis Gallant, Home Truths: Selected Canadian Stories (1981)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Man Descending (1982)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Leon Rooke, Shakespeare\'s Dog (1983)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Josef Skvorecky, The Engineer of Human Souls (1984)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, The Handmaid\'s Tale (1985)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Progress of Love (1986)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Kelly, A Dream Like Mine (1987)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Adams Richards, Nights Below Station Street (1988)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Quarrington, Whale Music (1989)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, Lives of the Saints (1990)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, Such a Long Journey (1991)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, The English Patient (1992)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Shields, The Stone Diaries (1993)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, A Discovery of Strangers (1994)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Greg Hollingshead, The Roaring Girl (1995)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, The Englishman\'s Boy (1996)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Urquhart, The Underpainter (1997)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Diane Schoemperlen, Forms of Devotion (1998)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Matt Cohen, Elizabeth and After (1999)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost (2000)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Gloria Sawai, A Song for Nettie Johnson (2002)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas Glover, Elle (2003)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Miriam Toews, A Complicated Kindness (2004)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['David Gilmour, A Perfect Night to Go to China (2005)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Behrens, The Law of Dreams (2006)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Divisadero (2007)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, The Origin of Species (2008)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Pullinger, The Mistress of Nothing (2009)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dianne Warren, Cool Water (2010)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick deWitt, The Sisters Brothers (2011)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Linda Spalding, The Purchase (2012)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton, The Luminaries (2013)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas King, The Back of the Turtle (2014)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Daddy Lenin and Other Stories (2015)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Thomas Hynes, We\'ll All Be Burnt in Our Beds Some Night (2017)','Alice_Munro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1969) La Ronde de nuit; English translation: Night Rounds (New York: Alfred A. Knopf, 1971); The Night Watch (London: Bloomsbury, 2015)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1972) Les Boulevards de ceinture; English translation: Ring Roads (London: Gollancz, 1974; London: Bloomsbury, 2015)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1974) Lacombe, Lucien; screenplay co-written with Louis Malle; English translation: Lacombe, Lucien: The Complete Scenario of the Film (New York: Viking, 1975)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1975) Villa Triste; English translation: Villa Triste, trans. John Cullen (Other Press, 2016)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1977) Livret de famille','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1978) Rue des Boutiques obscures; English translation: Missing Person (London: Jonathan Cape, 1980)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1981) Une jeunesse; English translation: Young Once (New York: New York Review Books Classics, 2016)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1981) Memory Lane (drawings by Pierre Le-Tan)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1982) De si braves garçons English translation: "Such Fine Boys" trans. Mark Polizzotti (New Haven &amp; London: Yale University Press, 2017)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1984) Quartier Perdu; English translation: A Trace of Malice (Henley-on-Thames: Aidan Ellis, 1988)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1986) Dimanches d\'août','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1988) Catherine Certitude (illustrated by Sempé); English translation: Catherine Certitude (Boston: David R. Godine, 2000)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1988) Remise de peine; English translation: "Suspended Sentences," in Suspended Sentences: Three Novellas, trans. by Mark Polizzotti (New Haven: Yale Univ. Press, 2014)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1989) Vestiaire de l\'enfance','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1990) Voyage de noces; English translation: Honeymoon (London: Harvill / HarperCollins, 1992)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1991) Fleurs de ruine; English translation: "Flowers of Ruin," in Suspended Sentences: Three Novellas, trans. by Mark Polizzotti (New Haven: Yale Univ. Press, 2014)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1992) Un cirque passe; English translation: After the Circus trans. by Mark Polizzotti (New Haven: Yale Univ. Press, 2015)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1993) Chien de printemps; English translation: "Afterimage," in Suspended Sentences: Three Novellas, trans. by Mark Polizzotti (New Haven: Yale Univ. Press, 2014)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1995) Du plus loin de l\'oubli; English translation: Out of the Dark (Lincoln: Bison Books / University of Nebraska Press, 1998)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1997) Dora Bruder; English translations: Dora Bruder (Berkeley: University of California Press, 1999), The Search Warrant (London: Random House / Boston: Harvill Press, 2000)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(1999) Des inconnues','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2001) La Petite Bijou; English translation: Little Jewel (Yale University Press, 2016)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2003) Accident nocturne; English translation: Paris Nocturne trans. by Phoebe Weston-Evans','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2004) Un pedigree; English translation: Pedigree trans. by Mark Polizzotti','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2007) Dans le café de la jeunesse perdue; U.K. English translation In the Café of Lost Youth trans. by Euan Cameron; U.S. English trans. by Chris Clarke','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2010) L\'Horizon','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2012) L\'Herbe des nuits; English translation: The Black Notebook (Mariner Books, 2016)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) Pour que tu ne te perdes pas dans le quartier;  English translation: So You Don\'t Get Lost in the Neighborhood, trans. by Euan Cameron (Houghton Mifflin Harcourt, 2015)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(2017) Souvenirs dormants (Gallimard)(not yet available in English)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Lacombe, Lucien (with Louis Malle), 1973','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Fils de Gascogne, directed by Pascal Aubier (1995)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bon Voyage (with Jean-Paul Rappeneau), 2003','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Une jeunesse (from the novel of same title), directed by Moshé Mizrahi, 1983','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Le Parfum d\'Yvonne (from the novel Villa Triste), directed by Patrice Leconte, 1994','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Te quiero, directed by Manuel Poirier (from the novel Dimanches d\'août), 2001','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Charell, directed by Mikhaël Hers, moyen-métrage (from the novel De si braves garçons), 2006','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Henri Astier: "Patrick Modiano – Dans le Cafe de la jeunesse perdue", in: The Times Literary Supplement, No. 5492 (2008):32, 4 July 2008','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Avni, Ora. "Patrick Modiano: A French Jew?" Yale French Studies, vol. 85 (1994): 227-247.','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Cook, Dervila. Patrick Modiano\'s (Auto)Biographical Fictions. Amsterdam &amp; New York: Rodopi, 2005. ISBN&#160;90-420-1884-4','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Flower, John E. (ed.). Patrick Modiano. Amsterdam &amp; New York: Rodopi, 2007. ISBN&#160;90-420-2316-3','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Guyot-Bender, Martine &amp; William VanderWolk. Paradigms of Memory: The Occupation and Other Hi-Stories in the Novels of Patrick Modiano. Frankfurt: Peter Lang, 1998. ISBN&#160;0-8204-3864-2','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Heck, Maryline and Raphaëlle Guidée (ed.) Modiano. Cahiers de L\'Herne, L\'Herne, 2010. ISBN&#160;978-2-85197-1678','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Scherman, Timothy H. "Translating from Memory: Patrick Modiano in Postmodern Context", Studies in 20th Century Literature, vol. 16, no. 2 (1992): 289-303.','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['VanderWolk, William. Rewriting the Past. Memory, History and Narration in the Novels of Patrick Modiano. Amsterdam: Rodopi, 1997. ISBN&#160;90-420-0179-8','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','Patrick_Modiano']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Премия имени Андрея Синявского of Novaya Gazeta — «За творческое поведение и благородство в литературе» (1997)&#91;33&#93;','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(English) The Unwomanly Face of War, (extracts), from Always a Woman: Stories by Soviet Women Writers, Raduga Publishers, 1987.','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(English) War’s Unwomanly Face, Moscow&#160;: Progress Publishers, 1988, ISBN&#160;5-01-000494-1.','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(English) The Unwomanly Face of War: An Oral History of Women in World War II, Random House, 2017, ISBN&#160;978-0399588723','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(Russian) Последние свидетели: сто недетских колыбельных. Moscow, Palmira, 2004, ISBN&#160;5-94957-040-5','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['(German) Im Banne des Todes. Geschichten russischer Selbstmörder. Fischer, Frankfurt am Main, 1994, ISBN&#160;3-10-000818-9).','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ С. Алексиевич. У войны — не женское лицо. Октябрь, 1984(2). (S. Alexievich. War\'s Unwomanly Face. Oktyabr, 1984(2).)','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A conspiracy of ignorance and obedience, The Telegraph, 2015','Svetlana_Alexievich']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bob Dylan (1962)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Freewheelin\' Bob Dylan (1963)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Times They Are a-Changin\' (1964)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Another Side of Bob Dylan (1964)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bringing It All Back Home (1965)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Highway 61 Revisited (1965)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Blonde on Blonde (1966)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['John Wesley Harding (1967)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nashville Skyline (1969)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Self Portrait (1970)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['New Morning (1970)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Garrett &amp; Billy the Kid (1973)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dylan (1973)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Planet Waves (1974)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Blood on the Tracks (1975)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Basement Tapes (1975)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Desire (1976)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Street Legal (1978)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Slow Train Coming (1979)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saved (1980)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shot of Love (1981)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Infidels (1983)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Empire Burlesque (1985)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Knocked Out Loaded (1986)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Down in the Groove (1988)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Oh Mercy (1989)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Red Sky (1990)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Good as I Been to You (1992)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['World Gone Wrong (1993)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Time Out of Mind (1997)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Love and Theft (2001)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Modern Times (2006)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Together Through Life (2009)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Christmas in the Heart (2009)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tempest (2012)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Shadows in the Night (2015)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fallen Angels (2016)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Triplicate (2017)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heylin, 1996, Bob Dylan: A Life In Stolen Moments, p. 6.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ LIFE Books, "Bob Dylan, Forever Young, 50 Years of Song", Time Home Entertainment, Vol. 2, No 2, February 10, 2012, p. 15.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heylin, 1996, Bob Dylan: A Life In Stolen Moments, p. 35.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Shelton (2011), No Direction Home, p. 87','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ A photo of Dylan with Spivey at this session was on the cover of his 1970 album, New Morning. See Gray (2006), pp. 630–631.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Heylin (1996), pp. 35–39.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Maslin in Miller (ed.) Miller, (1981), The Rolling Stone History of Rock &amp; Roll, 1981, p. 220','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rolling Stone, November 29, 1969. Reprinted in Cott (ed.), Dylan on Dylan: The Essential Interviews, p. 140.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heylin, 2009, Revolution In The Air, The Songs of Bob Dylan: Volume One, pp. 414–415.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Heylin (2000), p. 383.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dylan Interview with Karen Hughes, The Dominion, Wellington, New Zealand, May 21, 1980; reprinted in Cott (ed.), Dylan on Dylan: The Essential Interviews, pp. 275–278','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Gray (2000), p. 13.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bell, 2012, Once Upon a Time: The Lives of Bob Dylan., p. 101.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dylan co-wrote Masked &amp; Anonymous under the pseudonym Seregei Petrov, taken from an actor in the silent movie era; Larry Charles used the alias Rene Fontaine. Gray (2006), p. 453.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bell, 2012, Once Upon a Time: The Lives of Bob Dylan. p. 524.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dylan, Chronicles, 2004, p. 264.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gray, The Bob Dylan Encyclopedia, 2006, pp. 592–594.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hajdu, Positively 4th Street, 2001, p.76','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Gray, The Bob Dylan Encyclopedia, 2006, pp. 28–31.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Gray (2006), pp. 198–200.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heylin (2000), Bob Dylan: Behind the Shades Revisited, p. 494.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gray, 2006, The Bob Dylan Encyclopedia, pp. 76–80.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Heylin, 1996, Bob Dylan: A Life In Stolen Moments, p. 206.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rolling Stone, June 21, 1984, reprinted in Cott (ed.), Dylan on Dylan: The Essential Interviews, p. 288.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Amanda Petrusich, "A Transcendent Patti Smith Accepts Bob Dylan\'s Nobel Prize", New Yorker, December 10, 2016','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Bob Dylan Sends Warm Words but Skips Nobel Prize Ceremonies", The New York Times, Dec. 10, 2016','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wenner, Jann S. Lennon Remembers, Rolling Stone Press (2000) p. 148','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "I don\'t have to tell you who Bob Dylan is—the greatest writer of our time." Johnny Cash from the intro to "Wanted Man", At San Quentin, recorded February 24, 1969.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ "They asked me what effect Bob Dylan had on me," Townshend said. "That\'s like asking how I was influenced by being born." Flanagan, (1990), Written In My Soul, p. 88.','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['^ Song for Bob Dylan on the album Hunky Dory, David Bowie, 1971','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dylan','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dylan','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Best of Bob Dylan (1997)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Best of Bob Dylan (2005)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Dylan','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Vol. 10: Another Self Portrait (1969–1971)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['List of Basement Tapes songs (1967,1975)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Festival','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Waltz (1978 album)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Waltz (2002 album)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['List of Basement Tapes songs (1975)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Theme from Shaft"Music and lyrics: Isaac Hayes (1971)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Music from Peter Gunn – Henry Mancini (1959)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Come Dance with Me! – Frank Sinatra (1960)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Button-Down Mind of Bob Newhart – Bob Newhart (1961)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Judy at Carnegie Hall – Judy Garland (1962)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The First Family – Vaughn Meader (1963)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Barbra Streisand Album – Barbra Streisand (1964)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Getz/Gilberto – Stan Getz, João Gilberto (1965)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['September of My Years – Frank Sinatra (1966)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Man and His Music – Frank Sinatra (1967)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Sgt. Pepper\'s Lonely Hearts Club Band – The Beatles (1968)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['By the Time I Get to Phoenix – Glen Campbell (1969)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Blood, Sweat &amp; Tears – Blood, Sweat &amp; Tears (1970)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Bridge over Troubled Water – Simon &amp; Garfunkel (1971)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Tapestry – Carole King (1972)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Concert for Bangladesh – Various (1973)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Innervisions – Stevie Wonder (1974)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fulfillingness\' First Finale – Stevie Wonder (1975)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Still Crazy After All These Years – Paul Simon (1976)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Songs in the Key of Life – Stevie Wonder (1977)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Rumours – Fleetwood Mac (1978)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Saturday Night Fever – Bee Gees/Various (1979)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['52nd Street – Billy Joel (1980)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Cross – Christopher Cross (1981)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Double Fantasy – John Lennon and Yoko Ono (1982)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Toto IV – Toto (1983)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Thriller – Michael Jackson (1984)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Can\'t Slow Down – Lionel Richie (1985)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['No Jacket Required – Phil Collins (1986)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Graceland – Paul Simon (1987)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Joshua Tree – U2 (1988)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Faith – George Michael  (1989)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nick of Time – Bonnie Raitt (1990)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Back on the Block – Quincy Jones and various artists (1991)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Unforgettable... with Love – Natalie Cole (1992)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Unplugged  – Eric Clapton (1993)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Bodyguard – Whitney Houston (1994)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['MTV Unplugged – Tony Bennett (1995)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Jagged Little Pill – Alanis Morissette (1996)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Falling into You – Celine Dion (1997)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Time Out of Mind – Bob Dylan (1998)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Miseducation of Lauryn Hill – Lauryn Hill (1999)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Supernatural – Santana (2000)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Two Against Nature – Steely Dan (2001)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['O Brother, Where Art Thou? Soundtrack (2002)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Come Away with Me – Norah Jones (2003)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Speakerboxxx/The Love Below – Outkast (2004)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Genius Loves Company – Ray Charles and various artists (2005)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['How to Dismantle an Atomic Bomb – U2 (2006)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Taking the Long Way – Dixie Chicks (2007)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['River: The Joni Letters – Herbie Hancock (2008)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Raising Sand – Robert Plant &amp; Alison Krauss (2009)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Fearless – Taylor Swift (2010)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Suburbs – Arcade Fire (2011)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['21 – Adele (2012)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Babel – Mumford &amp; Sons (2013)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Random Access Memories – Daft Punk (2014)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Morning Phase – Beck (2015)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['1989 – Taylor Swift (2016)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['25 – Adele (2017)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['24K Magic – Bruno Mars (2018)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Rodgers and Oscar Hammerstein II for Oklahoma! (1944)','Bob_Dylan']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Pale View of Hills (1982)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Artist of the Floating World (1986)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Remains of the Day (1989)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Unconsoled (1995)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['When We Were Orphans (2000)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Never Let Me Go (2005)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Buried Giant (2015)&#91;32&#93;&#91;33&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nocturnes: Five Stories of Music and Nightfall (2009)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Profile of Arthur J. Mason (television film for Channel 4)&#91;23&#93; (1984)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Gourmet (television film for Channel 4) (1987)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Saddest Music in the World (2003)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The White Countess (2005)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"A Strange and Sometimes Sadness", "Waiting for J" and "Getting Poisoned" (in Introduction 7: Stories by New Writers, 1981)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"A Family Supper" (in Firebird 2: Writing Today, 1983)&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Summer After the War" (in Granta 7, 1983)&#91;34&#93;&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"October 1948" (in Granta 17, 1985)&#91;35&#93;&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"A Village After Dark" (in The New Yorker, May 21, 2001)&#91;36&#93;&#91;32&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Postcard Lovers"; Tomlinson / Ishiguro, on Kent\'s album Dreamer in Concert (2011).','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"The Summer We Crossed Europe in the Rain"; "Waiter, Oh Waiter", and "The Changing Lights"; Tomlinson / Ishiguro, on Kent\'s album The Changing Lights (2013).&#91;19&#93;','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"Bullet Train"; "The Changing Lights", and "The Ice Hotel"; Tomlinson / Ishiguro, on Kent\'s album I Know I Dream: The Orchestral Sessions (2017).','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['"The Ice Hotel"; Tomlinson / Ishiguro – Quatuor Ébène, featuring Stacey Kent, on the album Brazil (2013).','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['A Pale View of Hills (1982)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['An Artist of the Floating World (1986)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Remains of the Day (1989)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Unconsoled (1995)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['When We Were Orphans (2000)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Never Let Me Go (2005)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Buried Giant (2015)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Nocturnes (2009)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Saddest Music in the World (2003)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The White Countess (2005)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['The Remains of the Day (1993)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Never Let Me Go (2010)','Kazuo_Ishiguro']);
     
    db.run("INSERT INTO booksName VALUES (?,?)", ['Typhoon Mangkhut (pictured) impacts the Philippines, Taiwan, Hong Kong and China, resulting in more than 60 fatalities.','en.wikipedia.org']);
    
        //#endregion
  }
}
