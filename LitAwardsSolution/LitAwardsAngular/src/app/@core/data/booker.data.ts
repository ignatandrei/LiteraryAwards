export class BookerData {
  public RunSqlBooker(db: any) {
    try {
      this.CreateTables(db);
      this.RunLaureates(db);
      this.RunBooks(db);
    } catch (e) {
      console.log("error");
    }
  }
  private CreateTables(db: any) {
    
    db.run("CREATE TABLE tableAuthors (Year,Author,Title,Genres,Country,AuthorWiki,AuthorFullWiki);");
    db.run("CREATE TABLE booksName (bookName,name);");
  }
  private RunLaureates(db: any) {
      


 
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1969','P. H. Newby&#91;32&#93;','Something to Answer For','Novel','United Kingdom','/wiki/P._H._Newby','https://en.wikipedia.org/wiki/P._H._Newby']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1970','Bernice Rubens&#91;33&#93;','The Elected Member','Novel','United Kingdom','/wiki/Bernice_Rubens','https://en.wikipedia.org/wiki/Bernice_Rubens']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1970 (retrospective award&#91;a&#93;)','J. G. Farrell','Troubles','Novel','United KingdomIreland','/wiki/J._G._Farrell','https://en.wikipedia.org/wiki/J._G._Farrell']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1971','V. S. Naipaul&#91;34&#93;','In a Free State','Short story','United KingdomTrinidad and Tobago','/wiki/V._S._Naipaul','https://en.wikipedia.org/wiki/V._S._Naipaul']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1972','John Berger&#91;35&#93;','G.','Experimental novel','United Kingdom','/wiki/John_Berger','https://en.wikipedia.org/wiki/John_Berger']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1973','J. G. Farrell&#91;36&#93;','The Siege of Krishnapur','Novel','United KingdomIreland','/wiki/J._G._Farrell','https://en.wikipedia.org/wiki/J._G._Farrell']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1974','Nadine Gordimer&#91;37&#93;','The Conservationist','Novel','South Africa','/wiki/Nadine_Gordimer','https://en.wikipedia.org/wiki/Nadine_Gordimer']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['Stanley Middleton&#91;38&#93;','Holiday','Novel','United Kingdom','<a href="/wiki/Stanley_Middleton" title="Stanley Middleton">Stanley Middleton</a><sup id="cite_ref-Middleton_39-0" class="reference"><a href="#cite_note-Middleton-39">&#91;38&#93;</a></sup>','Novel','https://en.wikipedia.orgNovel']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1975','Ruth Prawer Jhabvala','Heat and Dust','Historical novel','United KingdomGermany','/wiki/Ruth_Prawer_Jhabvala','https://en.wikipedia.org/wiki/Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1976','David Storey&#91;39&#93;','Saville','Novel','United Kingdom','/wiki/David_Storey','https://en.wikipedia.org/wiki/David_Storey']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1977','Paul Scott&#91;40&#93;','Staying On','Novel','United Kingdom','/wiki/Paul_Mark_Scott','https://en.wikipedia.org/wiki/Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1978','Iris Murdoch&#91;41&#93;','The Sea, the Sea','Philosophical novel','IrelandUnited Kingdom','/wiki/Iris_Murdoch','https://en.wikipedia.org/wiki/Iris_Murdoch']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1979','Penelope Fitzgerald&#91;42&#93;','Offshore','Novel','United Kingdom','/wiki/Penelope_Fitzgerald','https://en.wikipedia.org/wiki/Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1980','William Golding&#91;43&#93;','Rites of Passage','Novel','United Kingdom','/wiki/William_Golding','https://en.wikipedia.org/wiki/William_Golding']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1981','Salman Rushdie&#91;44&#93;','Midnight\'s Children','Magic realism','India then United Kingdom','/wiki/Salman_Rushdie','https://en.wikipedia.org/wiki/Salman_Rushdie']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1982','Thomas Keneally&#91;45&#93;','Schindler\'s Ark','Biographical novel','Australia','/wiki/Thomas_Keneally','https://en.wikipedia.org/wiki/Thomas_Keneally']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1983','J. M. Coetzee&#91;46&#93;','Life &amp; Times of Michael K','Novel','South Africa','/wiki/J._M._Coetzee','https://en.wikipedia.org/wiki/J._M._Coetzee']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1984','Anita Brookner&#91;47&#93;','Hotel du Lac','Novel','United Kingdom','/wiki/Anita_Brookner','https://en.wikipedia.org/wiki/Anita_Brookner']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1985','Keri Hulme&#91;48&#93;','The Bone People','Mystery novel','New Zealand','/wiki/Keri_Hulme','https://en.wikipedia.org/wiki/Keri_Hulme']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1986','Kingsley Amis&#91;49&#93;','The Old Devils','Comic novel','United Kingdom','/wiki/Kingsley_Amis','https://en.wikipedia.org/wiki/Kingsley_Amis']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1987','Penelope Lively&#91;50&#93;','Moon Tiger','Novel','United Kingdom','/wiki/Penelope_Lively','https://en.wikipedia.org/wiki/Penelope_Lively']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1988','Peter Carey&#91;51&#93;','Oscar and Lucinda','Historical novel','Australia','/wiki/Peter_Carey_(novelist)','https://en.wikipedia.org/wiki/Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1989','Kazuo Ishiguro&#91;52&#93;','The Remains of the Day','Historical novel','United Kingdom','/wiki/Kazuo_Ishiguro','https://en.wikipedia.org/wiki/Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1990','A. S. Byatt','Possession','Historical novel','United Kingdom','/wiki/A._S._Byatt','https://en.wikipedia.org/wiki/A._S._Byatt']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1991','Ben Okri&#91;53&#93;','The Famished Road','Magic realism','Nigeria','/wiki/Ben_Okri','https://en.wikipedia.org/wiki/Ben_Okri']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1992','Michael Ondaatje&#91;54&#93;','The English Patient','Historiographic metafiction','Canada','/wiki/Michael_Ondaatje','https://en.wikipedia.org/wiki/Michael_Ondaatje']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['Barry Unsworth&#91;55&#93;','Sacred Hunger','Historical novel','United Kingdom','<a href="/wiki/Barry_Unsworth" title="Barry Unsworth">Barry Unsworth</a><sup id="cite_ref-Hunger_56-0" class="reference"><a href="#cite_note-Hunger-56">&#91;55&#93;</a></sup>','Historical novel','https://en.wikipedia.orgHistorical novel']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1993','Roddy Doyle','Paddy Clarke Ha Ha Ha','Novel','Ireland','/wiki/Roddy_Doyle','https://en.wikipedia.org/wiki/Roddy_Doyle']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1994','James Kelman&#91;56&#93;','How Late It Was, How Late','Stream of consciousness','United Kingdom','/wiki/James_Kelman','https://en.wikipedia.org/wiki/James_Kelman']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1995','Pat Barker&#91;57&#93;','The Ghost Road','War novel','United Kingdom','/wiki/Pat_Barker','https://en.wikipedia.org/wiki/Pat_Barker']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1996','Graham Swift&#91;58&#93;','Last Orders','Novel','United Kingdom','/wiki/Graham_Swift','https://en.wikipedia.org/wiki/Graham_Swift']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1997','Arundhati Roy','The God of Small Things','Novel','India','/wiki/Arundhati_Roy','https://en.wikipedia.org/wiki/Arundhati_Roy']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1998','Ian McEwan&#91;59&#93;','Amsterdam','Novel','United Kingdom','/wiki/Ian_McEwan','https://en.wikipedia.org/wiki/Ian_McEwan']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['1999','J. M. Coetzee&#91;60&#93;','Disgrace','Novel','South Africa','/wiki/J._M._Coetzee','https://en.wikipedia.org/wiki/J._M._Coetzee']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2000','Margaret Atwood','The Blind Assassin','Historical novel','Canada','/wiki/Margaret_Atwood','https://en.wikipedia.org/wiki/Margaret_Atwood']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2001','Peter Carey','True History of the Kelly Gang','Historical novel','Australia','/wiki/Peter_Carey_(novelist)','https://en.wikipedia.org/wiki/Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2002','Yann Martel','Life of Pi','Fantasy and adventure novel','Canada','/wiki/Yann_Martel','https://en.wikipedia.org/wiki/Yann_Martel']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2003','DBC Pierre','Vernon God Little','Black comedy','Australia','/wiki/DBC_Pierre','https://en.wikipedia.org/wiki/DBC_Pierre']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2004','Alan Hollinghurst','The Line of Beauty','Historical novel','United Kingdom','/wiki/Alan_Hollinghurst','https://en.wikipedia.org/wiki/Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2005','John Banville','The Sea','Novel','Ireland','/wiki/John_Banville','https://en.wikipedia.org/wiki/John_Banville']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2006','Kiran Desai','The Inheritance of Loss','Novel','India','/wiki/Kiran_Desai','https://en.wikipedia.org/wiki/Kiran_Desai']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2007','Anne Enright','The Gathering','Novel','Ireland','/wiki/Anne_Enright','https://en.wikipedia.org/wiki/Anne_Enright']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2008','Aravind Adiga&#91;61&#93;','The White Tiger','Novel','India','/wiki/Aravind_Adiga','https://en.wikipedia.org/wiki/Aravind_Adiga']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2009','Hilary Mantel','Wolf Hall','Historical novel','United Kingdom','/wiki/Hilary_Mantel','https://en.wikipedia.org/wiki/Hilary_Mantel']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2010','Howard Jacobson','The Finkler Question','Comic novel','United Kingdom','/wiki/Howard_Jacobson','https://en.wikipedia.org/wiki/Howard_Jacobson']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2011','Julian Barnes','The Sense of an Ending','Novel','United Kingdom','/wiki/Julian_Barnes','https://en.wikipedia.org/wiki/Julian_Barnes']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2012','Hilary Mantel','Bring Up the Bodies','Historical novel','United Kingdom','/wiki/Hilary_Mantel','https://en.wikipedia.org/wiki/Hilary_Mantel']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2013','Eleanor Catton','The Luminaries','Historical novel','New Zealand','/wiki/Eleanor_Catton','https://en.wikipedia.org/wiki/Eleanor_Catton']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2014','Richard Flanagan','The Narrow Road to the Deep North','Historical novel','Australia','/wiki/Richard_Flanagan','https://en.wikipedia.org/wiki/Richard_Flanagan']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2015','Marlon James','A Brief History of Seven Killings','Historical/experimental novel','Jamaica','/wiki/Marlon_James_(novelist)','https://en.wikipedia.org/wiki/Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2016','Paul Beatty','The Sellout','Satirical novel','United States of America','/wiki/Paul_Beatty','https://en.wikipedia.org/wiki/Paul_Beatty']);
		  
		 db.run("INSERT INTO tableAuthors VALUES (?,?,?,?,?,?,?)", ['2017','George Saunders','Lincoln in the Bardo','Historical/experimental novel','United States of America','/wiki/George_Saunders','https://en.wikipedia.org/wiki/George_Saunders']);
		 
  }
  private RunBooks(db:any){
    
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Journey to the Interior (1945)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Spirit of Jem (1947)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Agents and Witnesses (1947)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mariner Dances (1948)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Loot Runners (1949)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Snow Pasture (1949)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Young May Moon (1950)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Season in England (1951)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Step to Silence (1952)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Retreat (1953)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Picnic at Sakkara (1955)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Revolution and Roses (1957)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ten Miles From Anywhere (1958)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Guest and His Going (1960)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Barbary Light (1962)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['One of the Founders (1965)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Something to Answer For (1968)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Lot to Ask (1973)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kith (1977)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Feelings Have Changed (1981)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leaning in the Wind (1986)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Coming in with the Tide (1991)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Something About Women (1995)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Maria Edgeworth (1950)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Novel, 1945-1950 (1951)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Uses of Broadcasting (1978)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Egypt Story (1979)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Warrior Pharaohs (1980)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saladin in His Time (1983)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','P._H._Newby']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Man from Elsewhere (1963)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lung (1965)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Girl in the Head (1967)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Troubles (1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Siege of Krishnapur (1973)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Singapore Grip (1978)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2003 Elisabeth Delattre: "Intégrer, exclure ou la genèse d\'une œuvre&#160;: Troubles de J. G. Farrell", in Irlande&#160;: Inclusion, exclusion, publié sous la direction de Françoise Canon-Roger, Presses Universitaires de Reims, 2003, pp.&#160;65–80.','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2007 John McLeod, "J. G. Farrel", Tavistock: Northcote House, 2007.  ISBN&#160;0-7463-0986-4','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h i j k l m Prusse, Michael C. (2003). British and Irish Novelists Since 1960. Detroit, Michigan: Gale. ISBN&#160;978-0-7876-6015-4.&#160;','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lavinia Greacen (1999). J. G. Farrell: The Making of a Writer. pp.&#160;222–225.&#160; London: Bloomsbury Publishing. ISBN&#160;0-7475-4463-8 / 0-7475-4463-8','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Troubles (1988)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Binns, Ronald. "J. G. Farrell", Methuen, London, 1986. ISBN&#160;0-416-40320-4','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Set on Edge (1960)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madame Sousatzka (1962)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mate in Three (1966)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chosen People (1969)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Elected Member (1969) (Booker Prize for Fiction 1970)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sunday Best (1971)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Go Tell the Lemming (1973)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['I Sent a Letter To My Love (1975)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ponsonby Post (1977)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Five-Year Sentence (1978)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Spring Sonata (1979)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Birds of Passage (1981)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brothers (1983)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mr Wakefield\'s Crusade (1985)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Our Father (1987)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingdom Come (1990)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Solitary Grief (1991)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mother Russia (1992)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Autobiopsy (1993)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hijack (1993)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yesterday in the Back Lane (1995)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Waiting Game (1997)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['I, Dreyfus (1999)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Milwaukee (2001)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nine Lives (2002)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sergeants\' Tale (2003)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When I Grow Up (2005)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cunningham, Valentine (2008). "Rubens, Bernice (1923-2004)". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/94398.&#160; (Subscription or UK public library membership required.)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ James Kidd (2014-01-24). "A Brief History of The Man Booker Prize &#124; South China Morning Post". Scmp.com. Retrieved 2014-02-09.&#160;','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Bernice_Rubens']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Bernice_Rubens']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Meaning:  vidiādhar (Hindi "possessed of learning," (p. 921) from  vidyā (Sanskrit "knowledge, learning," p. 921) + dhar (Sanskrit "holding, supporting," p. 524)); sūrajprasād (from sūraj (Hindi "sun," p. 1036) + prasād (Sanskrit "gift, boon, blessing," p. 666)) from McGregor, R. S. (1993). The Oxford Hindi-English Dictionary. Oxford University Press.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dooley, Gillian (2006). V.S. Naipaul, Man and Writer. University of South Carolina Press. ISBN&#160;978-1-57003-587-6. Retrieved 30 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['French, Patrick (2008). The World Is What It Is: The Authorized Biography of V. S. Naipaul. New York: Alfred Knopf. ISBN&#160;978-0-307-27035-1. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hayward, Helen (2002). The Enigma of V. S. Naipaul. (Warwick University Caribbean Studies). Palgrave Macmillan. ISBN&#160;978-1-4039-0254-2.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jussawalla, Feroza F. (editor) (1997). Conversations with V. S. Naipaul. Univ. Press of Mississippi. ISBN&#160;978-0-87805-945-4.&#160;CS1 maint: Extra text: authors list (link)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['King, Bruce (2003). V.S. Naipaul (2nd ed.). Palgrave Macmillan. ISBN&#160;978-1-4039-0456-0.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, V. S. (1964). An Area of Darkness.&#160;','V._S._Naipaul']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, V. S. (1983a). "Foreword". A House for Mr. Biswas with a new foreword by the author. New York: Alfred Knopf Inc. ISBN&#160;978-0-679-44458-9.&#160;
// Also: Naipaul, V. S. (24 November 1983). "Writing A House for Mr. Biswas". The New York Review of Books.&#160;CS1 maint: Date and year (link) 
// Also: Naipaul, V. S. (2012). "Foreword to A House of Mr. Biswas". Literary Occasions. Knopf Canada. p.&#160;186. ISBN&#160;978-03-0-737065-5.&#160;
// Also: Naipaul, V. S. (1983c). "A prologue to an autobiography". Vanity Fair.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, V.S. (1987). The Enigma of Arrival. New York: Alfred A. Knopf. ISBN&#160;978-0-307-74403-6. Retrieved 28 September 2013.&#160;','V._S._Naipaul']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, V.S. (2007) [2000].  Gillon Aitken, ed. Between Father and Son: Family Letters. New York: Alfred A. Knopf Inc. ISBN&#160;978-0-307-42497-6. Retrieved 19 September 2013.&#160;
// Also: Aitken, Gillon (2007) [2000]. "Introduction".  In Gillon Aitken (ed). Between Father and Son: Family Letters. New York: Alfred A. Knopf Inc. ISBN&#160;978-0-307-42497-6. Retrieved 19 September 2013.&#160;CS1 maint: Extra text: editors list (link)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nixon, Rob (1992). London Calling: V. S. Naipaul, Postcolonial Mandarin. Oxford University Press. ISBN&#160;978-0-19-536196-4. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson, Jean; Connell, P. J. (rev) (2004). "Wilson, Frank Percy (1889–1963)". Oxford Dictionary of National Biography. Oxford University Press. Retrieved 27 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Said, Edward W. (2000). "Bitter Dispatches from the Third World". Reflections on Exile and Other Essays. Harvard University Press. p.&#160;98. ISBN&#160;978-0-674-00302-6. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Also: Naipaul, V. S. (2012). "Foreword to A House of Mr. Biswas". Literary Occasions. Knopf Canada. p.&#160;186. ISBN&#160;978-03-0-737065-5.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Also: Naipaul, V. S. (1983c). "A prologue to an autobiography". Vanity Fair.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Also: Aitken, Gillon (2007) [2000]. "Introduction".  In Gillon Aitken (ed). Between Father and Son: Family Letters. New York: Alfred A. Knopf Inc. ISBN&#160;978-0-307-42497-6. Retrieved 19 September 2013.&#160;CS1 maint: Extra text: editors list (link)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Boxill, Anthony (1976). "The Little Bastard Worlds of VS Naipaul\'s The Mimic Men and A Flag on the Island". International Fiction Review. 3 (1).&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chaubey, Ajay Kumar, ed. (2015). V. S. Naipaul: An Anthology of 21st Century Criticism. New Delhi: Atlantic Publishers &amp; Distributors.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fraser, Peter D. (2010). "Review of V.S. Naipaul: Man and Writer by Gillian Dooley". Caribbean Studies. Institute of Caribbean Studies, UPR, Rio Piedras Campus. 38 (1): 212–215. doi:10.1353/crb.2010.0027. JSTOR&#160;27944592.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gorra, Michael (2008). After Empire: Scott, Naipaul, Rushdie. University of Chicago Press. ISBN&#160;978-0-226-30476-2. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mustafa, Fawzia (1995). V. S. Naipaul: Cambridge Studies in African and Caribbean Literature. Cambridge University Press. ISBN&#160;978-0-521-48359-9. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, Shiva (1986). "Brothers". An Unfinished Journey. London: Hamish Hamilton. ISBN&#160;978-0-241-11943-3.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naipaul, V. S. (1986). "A prologue to an autobiography". Finding the Center: Two Narratives. Vintage Books. ISBN&#160;978-0-394-74090-4. Retrieved 19 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pritchard, William H. (2008). Naipaul Unveiled: Review of The World Is What It Is, The authorized biography of V. S. Naipaul by Patrick French. The Hudson Review. 61. pp.&#160;431–440. JSTOR&#160;20464886.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson, Jean; Connell, P. J. (rev) (2004). "Wilson, Frank Percy (1889–1963)". Oxford Dictionary of National Biography. Oxford University Press. Retrieved 27 September 2013.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rosen, Jonathan (editor); Tejpal, Tarun (editor) (1998). "V. S. Naipaul, The Art of Fiction No. 154". The Paris Review.&#160;CS1 maint: Extra text: authors list (link)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Singh, Bijender, ed. (2018). V.S. Naipaul: A Critical Evaluation. New Delhi: Pacific Books International.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Visaria, Pravin; Visaria, Leela (1983). "Population (1757–1947)".  In Dharma Kumar, Meghnad Desai. The Cambridge Economic History of India, Volume 2, c.1757–c.1970. Cambridge University Press. ISBN&#160;978-0-521-22802-2.&#160;','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1993)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1995)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Muriel Spark (1997)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Trevor (1999)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (2001)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beryl Bainbridge and Thom Gunn (2003)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Holroyd (2005)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Derek Mahon (2007)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seamus Heaney (2009)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2013)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Harrison (2015)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Stoppard (2017)','V._S._Naipaul']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Painter of Our Time (1958)&#91;9&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Foot of Clive (1962)&#91;2&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Corker\'s Freedom (1964)&#91;2&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G. (1972)&#91;27&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Into Their Labours trilogy (1991): Pig Earth (1979), Once in Europa (1987), Lilac and Flag (1990)&#91;4&#93;&#91;27&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['To the Wedding (1995)&#91;9&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['King: A Street Story (1999)&#91;4&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['From A to X (2008)&#91;45&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Question of Geography (with Nella Bielski) (1987)&#91;46&#93;&#91;47&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Les Trois Chaleurs (1985)&#91;48&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Boris (1983)&#91;49&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Goya\'s Last Portrait (with Nella Bielski) (1989)&#91;50&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jonah Who Will Be 25 in the Year 2000 (with Alain Tanner) (1976)&#91;27&#93;&#91;12&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['La Salamandre (The Salamander) (with Alain Tanner) (1971)&#91;51&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Le Milieu du monde (The Middle of the World) (with Alain Tanner) (1974)&#91;51&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Play Me Something (with Timothy Neat) (1989)&#91;52&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Une ville à Chandigarh (A City at Chandigarh) (1966)&#91;53&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pages of the Wound (1994)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems (2014)&#91;55&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marcel Frishman (with George Besson) (1958)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Permanent Red (1960)&#91;54&#93; (Published in the United States in altered form in 1962 as Toward Reality: Essays in Seeing)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Success and Failure of Picasso (1965)&#91;27&#93;&#91;12&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Fortunate Man (with Jean Mohr) (1967)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Art and Revolution: Ernst Neizvestny And the Role of the Artist in the U.S.S.R (1969)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Moment of Cubism and Other Essays (1969)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Look of Things: Selected Essays and Articles (1972)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ways of Seeing&#91;27&#93; (with Mike Dibb, Sven Blomberg, Chris Fox and Richard Hollis) (1972)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Seventh Man (with Jean Mohr) (1975)&#91;12&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['About Looking (1980)&#91;12&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Another Way of Telling (with Jean Mohr) (1982)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['And Our Faces, My Heart, Brief as Photos (1984)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The White Bird (U.S. title: The Sense of Sight) (1985)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keeping a Rendezvous (1992)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sense of Sight (1993)&#91;56&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Albrecht Dürer: Watercolours and Drawings (1994)&#91;57&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Titian: Nymph and Shepherd (with Katya Berger) (1996)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Photocopies (1996)&#91;2&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Isabelle: A Story in Shorts (with Nella Bielski) (1998)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['At the Edge of the World (with Jean Mohr) (1999)&#91;58&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Essays (Geoff Dyer, ed.) (2001)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Shape of a Pocket (2001)&#91;54&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['I Send You This Cadmium Red: A Correspondence between John Berger and John Christie (with John Christie) (2001)&#91;59&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Beautiful (with Marc Trivier) (2004)&#91;60&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Berger on Drawing (2005)&#91;61&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Here is Where We Meet (2005)&#91;9&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hold Everything Dear: Dispatches on Survival and Resistance (2007; 2nd ed. 2016)&#91;62&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Red Tenda of Bologna (2007)&#91;63&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War with No End (with Naomi Klein, Hanif Kureishi, Arundhati Roy, Ahdaf Soueif, Joe Sacco and Haifa Zangana) (2007)&#91;64&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Meanwhile (2008)&#91;7&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Why Look at Animals? (2009)&#91;65&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['From I to J (with Isabel Coixet) (2009)&#91;66&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lying Down to Sleep (with Katya Berger) (2010)&#91;67&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Railtracks (with Anne Michaels) (2011)&#91;68&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bento\'s Sketchbook (2011)&#91;69&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cataract (with Selçuk Demirel) (2012)&#91;70&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Understanding a Photograph (Geoff Dyer, ed.) (2013)&#91;71&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Daumier: The Heroism of Modern Life (2013)&#91;72&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flying Skirts: An Elegy (with Yves Berger) (2014)&#91;73&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Portraits: John Berger on Artists (Tom Overton, ed.) (2015)&#91;50&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cuatro horizontes (Four Horizons) (with Sister Lucia Kuppens, Sister Telchilde Hinkley and John Christie) (2015)&#91;74&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lapwing &amp; Fox (Conversations between John Berger and John Christie) (2016)&#91;75&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Confabulations (Essays) (2016)&#91;12&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Landscapes: John Berger on Art (Tom Overton, ed.) (2016)&#91;76&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John by Jean: Fifty Years of Friendship (Jean Mohr, ed.) (2016)&#91;77&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Sparrow\'s Journey: John Berger Reads Andrey Platonov (CD: 44:34 &amp; 81-page book with Robert Chandler and Gareth Evans), London: House Sparrow Press in association with the London Review Bookshop (2016)&#91;78&#93;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Smoke (with Selçuk Demirel) (2017)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seeing Through Drawing  (with John Christie) (2017). The book, published by OBJECTIF, features new texts by and about John Berger plus a catalogue section of images, information and stories from the invited artists in the main exhibition held on 8 July – 26 August 2017 at Mandell’s Gallery, Norwich. It contains two previously unpublished sequences of correspondence on art and communications between John Berger and his daughter Katya Berger Andreadakis along with tributes and stories from: Anne Michaels, Yves Berger, Eulàlia Bosch, Geoff Dyer, Gareth Evans, Paul Gordon and Tom Overton. The book also features a compilation of writings on the art and practice of drawing collected together by John Christie, from across John Berger’s art criticism, fiction, essays and letters.','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Andy Merrifield, John Berger, Reaktion Books (2013), p. 29','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Ray, Ed. Mohit K. (2007). The Atlantic Companion to Literature in English. Atlantic Publishers. p.&#160;48. ISBN&#160;9788126908325.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Berger, John; Mohr, Jean; Blomberg, Sven (2010). A Seventh Man: A Book of Images and Words about the Experience of Migrant Workers in Europe. Verso. ISBN&#160;9781844676491.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Christian Dimitriu, Alain Tanner, Paris: Henri Veyrier, 1985, pp. 125–134.','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Hertel, Ralf (2005). Making Sense: Sense Perception in the British Novel of the 1980s and 1990s. Rodopi. p.&#160;74. ISBN&#160;9789042018648.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b McCance, Dawne (2013). Critical Animal Studies: An Introduction. SUNY Press. p.&#160;45. ISBN&#160;9781438445342.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bürkle, Christoph (2006). Johann Sebastian Bach: der geometrische Komponist, Issues 764–766. Niggli. p.&#160;83.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Soja, Edward W. (1989). Postmodern Geographies: The Reassertion of Space in Critical Social Theory (illustrated, reprint ed.). Verso. p.&#160;21. ISBN&#160;9780860919360.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Merrifield, Andy (2013). John Berger (illustrated ed.). Reaktion Books. p.&#160;159. ISBN&#160;9781861899422.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Talbot, Toby (2010). The New Yorker Theater and Other Scenes from a Life at the Movies (illustrated ed.). Columbia University Press. p.&#160;110. ISBN&#160;9780231519823.&#160;','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fuller, Peter (1980) Seeing Berger. A Revaluation of ways of Seeing, Writers and Readers. ISBN&#160;0-906495-48-2.','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hertel, Ralf and David Malcolm (eds.), On John Berger: Telling Stories. Leiden: Brill, 2015. ISBN&#160;9789004306127.','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hochschild, Adam Finding the Trapdoor: Essays, Portraits, Travels (Syracuse University Press, 1997), "Broad Jumper in the Alps," pp.&#160;50–64.','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Merrifield, Andy John Berger, London: Reaktion Books, 2012. ISBN&#160;978-1-86189-904-0','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Papastergiadis, Nikos Modernity as exile: The stranger in John Berger\'s writing (Manchester University Press, 1993) ISBN&#160;0-7190-3876-6','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chandan, Amarjit; Evans, Gareth; Gunaratnam, Yasmin (Eds.) The Long White Thread of Words: Poems for John Berger, Ripon: Smokestack Books, 2016. ISBN&#160;978-0-9934547-4-5','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chandan, Amarjit; Gunaratnam, Yasmin (Eds.) A Jar of Wild Flowers: Essays in Celebration of John Berger, London: Zed Books, 2016. ISBN&#160;978-1-78360-879-9','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['\'Introduction to John Berger on Picasso\' Mike Gonzalez in International Socialism 40 (1988).','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Defending Picasso\'s late work by John Berger, International Socialism 40 (1988).','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Newman and Robert Benton (1967)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Cassavetes (1968)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Mazursky and Larry Tucker (1969)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Éric Rohmer (1970)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Gilliatt (1971)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ingmar Bergman (1972)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Lucas, Gloria Katz and Willard Huyck (1973)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ingmar Bergman (1974)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Towne and Warren Beatty (1975)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alain Tanner and John Berger (1976)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Woody Allen and Marshall Brickman (1977)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Mazursky (1978)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steve Tesich (1979)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bo Goldman (1980)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Guare (1981)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Schisgal and Larry Gelbart (1982)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bill Forsyth (1983)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lowell Ganz, Babaloo Mandel and Bruce Jay Friedman (1984)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Albert Brooks and Monica Johnson (1985)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hanif Kureishi (1986)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Boorman (1987)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ron Shelton (1988)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gus Van Sant and Daniel Yost (1989)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Burnett (1990)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Cronenberg (1991)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Webb Peoples (1992)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Campion (1993)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Quentin Tarantino and Roger Avary (1994)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amy Heckerling (1995)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Albert Brooks and Monica Johnson (1996)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Curtis Hanson and Brian Helgeland (1997)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scott Frank (1998)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlie Kaufman (1999)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kenneth Lonergan (2000)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Fellowes (2001)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Harwood (2002)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shari Springer Berman and Robert Pulcini (2003)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (2004)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Noah Baumbach (2005)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Morgan (2006)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tamara Jenkins (2007)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mike Leigh (2008)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (2009)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Asghar Farhadi (2011)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Kushner (2012)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Linklater, Ethan Hawke, and Julie Delpy (2013)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wes Anderson (2014)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom McCarthy and Josh Singer (2015)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kenneth Lonergan (2016)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greta Gerwig (2017)','John_Berger']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Man from Elsewhere (1963)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lung (1965)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Girl in the Head (1967)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Troubles (1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Siege of Krishnapur (1973)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Singapore Grip (1978)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2003 Elisabeth Delattre: "Intégrer, exclure ou la genèse d\'une œuvre&#160;: Troubles de J. G. Farrell", in Irlande&#160;: Inclusion, exclusion, publié sous la direction de Françoise Canon-Roger, Presses Universitaires de Reims, 2003, pp.&#160;65–80.','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2007 John McLeod, "J. G. Farrel", Tavistock: Northcote House, 2007.  ISBN&#160;0-7463-0986-4','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h i j k l m Prusse, Michael C. (2003). British and Irish Novelists Since 1960. Detroit, Michigan: Gale. ISBN&#160;978-0-7876-6015-4.&#160;','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lavinia Greacen (1999). J. G. Farrell: The Making of a Writer. pp.&#160;222–225.&#160; London: Bloomsbury Publishing. ISBN&#160;0-7475-4463-8 / 0-7475-4463-8','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Troubles (1988)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Binns, Ronald. "J. G. Farrell", Methuen, London, 1986. ISBN&#160;0-416-40320-4','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','J._G._Farrell']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Smith Commonwealth Literary Award for Friday\'s Footprint (1961)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Tait Black Memorial Prize for A Guest of Honour (1972)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize for The Conservationist (1974)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for The Conservationist (1974)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Grand Aigle d\'Or (France) (1975)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for Burger\'s Daughter (1979)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for July\'s People (1981)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scottish Arts Council Neil M. Gunn Fellowship (1981)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Modern Language Association Honorary Fellow (1984)&#91;42&#93;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rome Prize (1984)&#91;43&#93;&#91;44&#93;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Premio Malaparte (Italy) (1985)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nelly Sachs Prize (Germany) (1985)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bennett Award (United States) (1987)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anisfield-Wolf Book Award for A Sport of Nature (1988)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Inducted as an honorary member into Phi Beta Kappa (1988)&#91;45&#93;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Central News Agency Literary Award for My Son\'s Story (1990)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nobel Prize for Literature (1991)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['International Botev Prize Laureate (1996)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Commonwealth Writers\' Prize for the Best Book from Africa for The Pickup (2002)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize longlist for The Pickup (2001)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Officier of the Legion of Honour (2007)&#91;46&#93;','Nadine_Gordimer']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gordimer, Nadine (December 16, 2013). "Nelson Mandela". The Talk of the Town. Postscript. The New Yorker. 89 (41): 24, 26.&#160;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Telling Tales (2004)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Telling Times: Writing and Living, 1950–2008 (2010)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Gordimer Stories" (1981–82) – adaptations of seven short stories; she wrote screenplays for four of them','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On the Mines (1973)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lifetimes Under Apartheid (1986)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Choosing for Justice: Allan Boesak" (1983) (documentary with Hugo Cassirer)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ettin, Andrew Vogel (1993). Betrayals of the Body Politic: The Literary Commitments of Nadine Gordimer. Charlottesville: University Press of Virginia. pp.&#160;29, 30. ISBN&#160;9780813914305. although she had always referred to her father as Lithuanian, in recent years she has noted that his parents lived and worked in Riga, and now she identifies him as Latvian.&#160;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Newman, Judie, ed. (2003). Nadine Gordimer\'s \'Burger\'s daughter\': A Casebook. New York: Oxford University Press. p.&#160;4. ISBN&#160;9780195147179. She believed for many years that he was Lithuanian (like many South African Jewish immigrants) and only discovered later in life that he was Latvian.&#160;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gordimer, Nadine (1990).  Bazin, Nancy Topping; Seymour, Marilyn Dallman, eds. Conversations with Nadine Gordimer. Jackson: University Press of Mississippi. p.&#160;xix. ISBN&#160;9780878054459. 1923 – Born, 20 November in Springs, a small mining town in the Transvaal, South Africa. Second daughter of Isidore Gordimer, Jewish watchmaker and jeweler who had emigrated from Latvia at age 13, and Nan Myers Gordimer, a native of England.&#160;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Donald Morrison, "Nadine Gordimer", Time Magazine, 60 Years of Heroes (2006).','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ J. R. Ramakrishnan (June 19, 2015). "\'In the Country,\' by Mia Alvar". The New York Times. Retrieved April 6, 2016. ... Alvar’s elegant examination of the political wife is reminiscent of the long-suffering spouses and familial enablers of political men in Nadine Gordimer’s fiction...&#160;','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['LitWeb.net: Nadine Gordimer Biography (2003)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Clingman, The Novels of Nadine Gordimer: History from the Inside (1986)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew Vogel Ettin, Betrayals of the Body Politic: The Literary Commitments of Nadine Gordimer (1993)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dominic Head, Nadine Gordimer (1994)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Heywood, Nadine Gordimer (1983)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rowland Smith, editor, Critical Essays on Nadine Gordimer (1990)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Barbara Temple-Thurston, Nadine Gordimer Revisited (1999) ISBN&#160;0-8057-4608-0','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kathrin Wagner, Rereading Nadine Gordimer (1994)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louise Yelin, From the Margins of Empire: Christina Stead, Doris Lessing, Nadine Gordimer (1998)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer, Nancy Topping Bazin, and Marilyn Dallman Seymour, Conversations with Nadine Gordimer (1990)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer, Nobel Prize for Literature acceptance speech (1991)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Conversation with Nadine Gordimer at The Arthur Miller Freedom to Write Lecture, 2007 from PEN American Center','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Suresh Roberts, No Cold Kitchen: A Biography of Nadine Gordimer (2005)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Collection Index for Nadine Gordimer Short Stories and Novel Manuscript collection, 1958–1965 (Harry Ransom Humanities Research Center, University of Texas, Austin, Texas)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guide to the Gordimer manuscripts, 1934–1991 (Lilly Library, Indiana University, Bloomington, Indiana)','Nadine_Gordimer']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Nadine_Gordimer']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['To Whom She Will: a Novel (1955; published in the United States as Amrita).','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Nature of Passion (1956).','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Esmond in India (1958)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Householder (1960)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Get Ready for Battle (1962)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Like Birds, Like Fishes (1963)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Backward Place (1965)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Stronger Climate (1968)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Experience of India (1971)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A New Dominion (1972; published in the United States as Travelers)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heat and Dust (1975)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['How I Became a Holy Mother and other stories (1976)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Search of Love and Beauty (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Out of India (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Three Continents (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poet and Dancer (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shards of Memory (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['East Into Upper East: Plain Tales from New York and New Delhi (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Nine Lives (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Lovesong for India: Tales from East and West (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prawer Jhabvala, Ruth (2000). "Passion".  In Bausch, Richard; Cassill, R. V. Norton Anthology of Short Fiction (6th ed.). New York: W. W. Norton. pp.&#160;801–813. ISBN&#160;978-0-39397-508-6.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prawer Jhabvala, Ruth (2005). "Two more under the Indian sun".  In Mishra, Pankaj. India in Mind: An Anthology. New York: Vintage Books. pp.&#160;108–130. ISBN&#160;978-0-37572-745-0.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prawer Jhabvala, Ruth (1999). "An experience of India".  In Ross, Robert. Colonial and Postcolonial Fiction in English: An Anthology. New York: Garland. pp.&#160;189–209. ISBN&#160;978-0-81531-431-8.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Serafin, Steven, ed. (1999). "Ruth Prawer Jhabvala". Encyclopedia of World Literature in the 20th Century. Vol. 4 (L-Z) (3rd ed.). Farmington Hills, Michigan: St. James Press. ISBN&#160;978-1-55862-377-4.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bailur, Jayanti (1992). Ruth Prawer Jhabvala: Fiction and Film. New Delhi: Arnold Publishers.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Katz, Susan Bullington, ed. (2000). "Ruth Prawer Jhabvala". Conversations with Screenwriters. Portsmouth, New Hampshire: Heinemann. pp.&#160;1–8. ISBN&#160;978-0-32500-295-8.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crane, Ralph J. (1992). Ruth Prawer Jhabvala. New York: Twayne. ISBN&#160;978-0-80577-030-8.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crane, Ralph J. (1991). Passages to Ruth Prawer Jhabvala. New Delhi: Sterling Publishers. ISBN&#160;978-8-12071-355-0.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rai, Sudha (1992). Homeless by Choice: Naipaul, Jhabvala, Rushdie and India. Jaipur: Printwell. ISBN&#160;978-8-17044-241-7.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shepherd, Ronald (1994). Ruth Prawer Jhabvala in India: The Jewish Connection. Delhi: Chanakya Publications. ISBN&#160;978-8-17001-096-8.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sucher, Laurie (1989). The Fiction of Ruth Prawer Jhabvala: The Politics of Passion. Basingstoke: Macmillan. ISBN&#160;978-0-33342-196-3.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Ruth Prawer Jhabvala (1927–2013)". Outlook. 3 April 2013. Archived from the original on 9 April 2013. Retrieved 6 April 2013.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e Raw, Laurence (2012). Merchant-Ivory: Interviews. University of Mississippi. pp.&#160;xix–xxii. ISBN&#160;978-1-61703-237-0.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Between The Lines: Love and loathing in India". Mint. April 5, 2013. Retrieved 6 April 2013.&#160;','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Journal of the Indian Institute of Architects vol. 29 and 30, ed. S. Kumar, 1963, pg 41','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Benjamin Glazer (1928)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hanns Kräly (1929)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frances Marion (1930)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Estabrook (1931)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edwin J. Burke (1932)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Victor Heerman and Sarah Y. Mason (1933)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Riskin (1934)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dudley Nichols (1935)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pierre Collings and Sheridan Gibney (1936)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heinz Herald, Geza Herczeg, and Norman Reilly Raine (1937)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian Dalrymple, Cecil Arthur Lewis, W. P. Lipscomb, and George Bernard Shaw (1938)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sidney Howard (1939)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Donald Ogden Stewart (1940)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sidney Buchman and Seton I. Miller (1941)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Froeschel, James Hilton, Claudine West, and Arthur Wimperis (1942)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip G. Epstein, Julius J. Epstein, and Howard Koch (1943)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frank Butler, and Frank Cavett (1944)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Brackett and Billy Wilder (1945)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Sherwood (1946)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Seaton (1947)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Huston (1948)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph L. Mankiewicz (1949)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph L. Mankiewicz (1950)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harry Brown and Michael Wilson (1951)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Schnee (1952)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Daniel Taradash (1953)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Seaton (1954)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paddy Chayefsky (1955)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Farrow, S. J. Perelman, and James Poe (1956)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carl Foreman and Michael Wilson (1957)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Jay Lerner (1958)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neil Paterson (1959)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Brooks (1960)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Abby Mann (1961)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Horton Foote (1962)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Osborne (1963)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edward Anhalt (1964)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Bolt (1965)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Bolt (1966)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stirling Silliphant (1967)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Goldman (1968)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waldo Salt (1969)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ring Lardner Jr. (1970)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Tidyman (1971)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Francis Ford Coppola and Mario Puzo (1972)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Peter Blatty (1973)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Francis Ford Coppola and Mario Puzo (1974)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bo Goldman and Lawrence Hauben (1975)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Goldman (1976)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alvin Sargent (1977)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oliver Stone (1978)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Benton (1979)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alvin Sargent (1980)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Thompson (1981)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Costa-Gavras and Donald E. Stewart (1982)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James L. Brooks (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Shaffer (1984)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kurt Luedtke (1985)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernardo Bertolucci and Mark Peploe (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Hampton (1988)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alfred Uhry (1989)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Blake (1990)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ted Tally (1991)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1992)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Zaillian (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eric Roth (1994)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Emma Thompson (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Billy Bob Thornton (1996)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Curtis Hanson and Brian Helgeland (1997)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bill Condon (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Irving (1999)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Gaghan (2000)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Akiva Goldsman (2001)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Harwood (2002)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philippa Boyens, Peter Jackson, and Fran Walsh (2003)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Larry McMurtry and Diana Ossana (2005)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Monahan (2006)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (2007)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Beaufoy (2008)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Geoffrey S. Fletcher (2009)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne, Jim Rash, and Nat Faxon (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chris Terrio (2012)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Ridley (2013)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Moore (2014)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adam McKay and Charles Randolph (2015)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Barry Jenkins and Tarell Alvin McCraney (2016)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Ivory (2017)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruce Robinson (1984)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Condon and Janet Roach (1985)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kurt Luedtke (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claude Berri and Gérard Brach (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jean-Claude Carrière and Philip Kaufman (1988)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Hampton (1989)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nicholas Pileggi and Martin Scorsese (1990)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dick Clement, Roddy Doyle and Ian La Frenais (1991)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Tolkin (1992)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Zaillian (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Attanasio (1994)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Hodge (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anthony Minghella (1996)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Baz Luhrmann and Craig Pearce (1997)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elaine May (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neil Jordan (1999)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Gaghan (2000)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ted Elliott, Terry Rossio, Roger S. H. Schulman and Joe Stillman (2001)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlie Kaufman and Donald Kaufman (2002)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philippa Boyens, Peter Jackson and Fran Walsh (2003)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Larry McMurtry and Diana Ossana (2005)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jeremy Brock and Peter Morgan (2006)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Harwood (2007)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Beaufoy (2008)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jason Reitman and Sheldon Turner (2009)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bridget O\'Connor and Peter Straughan (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David O. Russell (2012)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steve Coogan and Jeff Pope (2013)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anthony McCarten (2014)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adam McKay and Charles Randolph (2015)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Luke Davies (2016)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Ivory (2017)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steve Tesich (1980)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colin Welland (1981)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Costa-Gavras and Donald E. Stewart (1982)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Kaufman (1984)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Bennett (1985)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Woody Allen (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Bennett (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Mamet (1988)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Hampton (1989)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Woody Allen (1990)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Mamet (1991)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Tolkin (1992)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Ramis and Danny Rubin (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Quentin Tarantino (1994)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Attanasio (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (1996)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Curtis Hanson and Brian Helgeland (1997)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew Niccol (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Ball (1999)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlie Kaufman (2000)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (2001)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew Bovell (2002)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Collee and Peter Weir (2003)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlie Kaufman (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Haggis and Bobby Moresco (2005)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Morgan (2006)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Florian Henckel von Donnersmarck (2007)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Beaufoy (2008)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jesse Armstrong, Simon Blackwell, Armando Iannucci, and Tony Roche (2009)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Asghar Farhadi (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Haneke (2012)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (2013)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wes Anderson (2014)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom McCarthy and Josh Singer (2015)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kenneth Lonergan (2016)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Martin McDonagh (2017)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waldo Salt (1969)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Anderson (1970)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Tidyman (1971)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Francis Ford Coppola and Mario Puzo (1972)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waldo Salt and Norman Wexler (1973)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Francis Ford Coppola and Mario Puzo (1974)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bo Goldman and Lawrence Hauben (1975)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Goldman (1976)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Denne Bart Petitclerc (1977)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oliver Stone (1978)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Benton (1979)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alvin Sargent (1980)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ernest Thompson (1981)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Costa-Gavras and Donald E. Stewart (1982)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julius J. Epstein (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arnold Schulman (1969)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ring Lardner Jr. (1970)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Paxton (1971)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jay Presson Allen (1972)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alvin Sargent (1973)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Chetwynd and Mordecai Richler (1974)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neil Simon (1975)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blake Edwards and Frank Waldman (1976)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Larry Gelbart (1977)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elaine May and Warren Beatty / Bernard Slade (1978)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jerzy Kosiński (1979)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jim Abrahams, David Zucker, and Jerry Zucker (1980)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gerard Ayres (1981)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blake Edwards (1982)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James L. Brooks (1983)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruce Robinson (1984)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Condon and Janet Roach (1985)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1986)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steve Martin (1987)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Hampton (1988)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alfred Uhry (1989)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Blake (1990)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ted Tally (1991)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Tolkin (1992)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Zaillian (1993)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eric Roth (1994)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Emma Thompson (1995)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Billy Bob Thornton (1996)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Curtis Hanson and Brian Helgeland (1997)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scott Frank (1998)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (1999)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Gaghan (2000)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Akiva Goldsman (2001)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Hare (2002)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shari Springer Berman and Robert Pulcini (2003)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (2004)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Larry McMurtry and Diana Ossana (2005)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Monahan (2006)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Coen and Ethan Coen (2007)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Beaufoy (2008)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jason Reitman and Sheldon Turner (2009)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne, Jim Rash, and Nat Faxon (2011)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chris Terrio (2012)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Billy Ray (2013)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Moore (2014)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adam McKay and Charles Randolph (2015)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eric Heisserer (2016)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Ivory (2017)','Ruth_Prawer_Jhabvala']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['This Sporting Life (1960) (made into the 1963 film This Sporting Life)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flight into Camden (1961)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Radcliffe (1963)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Restoration of Arnold Middleton (1967)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Celebration (1969)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Contractor (1970)&#91;10&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Home (1970)&#91;10&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Changing Room (1973)&#91;10&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pasmore (1972)&#91;1&#93; – winner of the 1973 Geoffrey Faber Memorial Prize','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Farm (1973)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cromwell (1973) (ISBN&#160;978-0224008716)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Temporary Life (1973) (ISBN&#160;978-0140048612)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edward (1973) (ISBN&#160;978-0713906806)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life Class (1974)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saville (1976) – winner of the 1976 Booker Prize&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mother\'s Day (1977)&#91;13&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Early Days (1980)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sisters (1980)&#91;14&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Prodigal Child (1982)&#91;13&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Present Times (1984)&#91;13&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The March on Russia (1989)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Storey\'s Lives: 1951–1991 (1992) (ISBN&#160;978-0224033084)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Serious Man (1998)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['As it Happened (2002)&#91;15&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thin-Ice Skater (2004)&#91;1&#93;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Stade, George; Karbiener, Karen (2010). Encyclopedia of British Writers, 1800 to the Present. 2. Infobase Publishing. p.&#160;469. ISBN&#160;9781438116891.&#160;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hutchings, William (1988). The Plays of David Storey: A Thematic Study. SIU Press. p.&#160;8. ISBN&#160;9780809314614.&#160;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ National Life Stories, Storey, David  (1 of 12). National Life Story Collection: General, The British Library Board, 2009.  Retrieved 1 February 2018','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sternlicht, Sanford V. (2004). A Reader\'s Guide To Modern British Drama. Syracuse University Press. p.&#160;167. ISBN&#160;9780815630760.&#160;','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hutchings, William, ed. David Storey:  A Casebook.  NY:  Garland, 1992.','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hutchings, William.  The Plays of David Storey:  A Thematic Study.  Carbondale:  Southern Illinois UP, 1988.','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','David_Storey']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Spurling, Hilary, Paul Scott: A Life (London, Hutchinson, 1990).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['BADIGER, V.R., Paul Scott: His Art and Vision (New Delhi: Atlantic Publishers and Distributors, 1994).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['BANERJEE, Jacqueline, Paul Scott (Plymouth: Northcote House/British Council, 1999 [Writers and their Work]).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['BANETH-NOUAILHETAS, Emilienne L., Le Roman Anglo-Indien: de Kipling à Paul Scott (Paris: Presses de la Sorbonne nouvelle, 1999).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['BONHEIM, Jill, Paul Scott: Humanismus und Individualismus in seinem Werk (Frankfurt am Main: Lang, 1982).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['BOSE, Sujit, Attitudes to Imperialism: Kipling, Forster, and Paul Scott (Delhi: Amar Prakashan, 1990).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['CHILDS, Peter, Paul Scott’s Raj Quartet: History and Division (Victoria: English Literary Studies, 1998 [ELS Monograph Series 77]).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['GORRA, Michael, After Empire: Scott, Naipaul, Rushdie (Chicago &amp; London: University of Chicago Press, 1997).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['GRANADA TELEVISION, The Making of The Jewel in the Crown (New York: St Martin’s Press, 1983).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['HASWELL, Janis E., Behind Paul Scott\'s Raj Quartet: A Life in Letters. The Early Years (1940–1965) (Amherst: Cambria Press, 2011).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['HASWELL, Janis E., Behind Paul Scott\'s Raj Quartet: A Life in letters. The Quartet and Beyond (1966–1978)  (Amherst: Cambria Press, 2011).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['HASWELL, Janis E., Paul Scott’s Philosophy of Place(s): The Fiction of Relationality (New York, Frankfurt, &amp; Oxford: Peter Lang, 2002 [Studies in Twentieth-Century British Literature]).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['HOFFMAN, Barbara, Paul Scott’s Raj Quartet: Fiktion und geschichtsschreibung (Frankfurt am Main: Lang, 1982 [Europäische Hochschulschriften, Reihe 14, Angelsächsische Sprache und Literatur]).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['KOHLI, Indira, Paul Scott: His Art and Ideas (Ghaziabad: Vimal Prakashan, 1987).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['LENNARD, John, ‘Paul Scott’, in Jay Parini, ed., World Writers in English (2 vols, New York &amp; London: Charles Scribner’s Sons, 2004), II.645–64.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MAHAJAN, Chhaya, Women in Paul Scott’s Novels (Bangalore: Ultra Publications, 1997).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MISRA, Pankaj, ed., "Paul Scott", in India in Mind: An Anthology (New York: Vintage Books, 2005), pp.&#160;275–289.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MOORE, Robin, Paul Scott’s Raj (London: Heinemann, 1990).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['RAO, K. Bhaskara, Paul Scott (Boston: Twayne Publishers, 1980).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SPURLING, Hilary, Paul Scott: A Life (London, Sydney, Auckland, &amp; Johannesburg: Hutchinson, 1990).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SPURLING, Hilary, Paul Scott: Novelist and Historian, or The end of the party and the beginning of the washing up (Austin: College of Liberal Arts, Harry Ransom research Center, 1990).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SPURLING, Hilary, ‘Introduction’ to the Raj Quartet (New Work: Knopf, 2007).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['STROBL, Gerwin, The Challenge of Cross-cultural Interpretation in the Anglo-Indian Novel: the Raj Revisited (Lewiston, NY, &amp; Lampeter: Mellen, 1995 [Salzburg English and American Srudies, 3]).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SWINDEN, Patrick, Paul Scott: Images of India (London: Macmillan, 1980).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SWINDEN, Patrick, Paul Scott (Windsor: Profile Books, 1982).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['TEDESCO [HASWELL], Janis, &amp; POPHAM, Janet, An Introduction to The Raj Quartet (Lanham, MD: UP of America, 1985).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['VERMA, Anil Kumar, Paul Scott: A Critical Study of His Novels (New Delhi: Radha Publications, 1999).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['WEINBAUM, Francine S. "Aspiration and Betrayal in Paul Scott\'s Raj Quartet,"  A doctoral dissertation, Urbana, Illinois, 1976.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['WEINBAUM, Francine S., Paul Scott: A Critical Study (Austin: University of Texas Press, 1992).','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['WEINBAUM, Francine S., "Paul Scott\' India: The Raj Quartet." Critique 20 (1978): 100-110.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['WEINBAUM, Francine S. "Psychological Defenses and Thwarted Union." Literature and Psychology 31 (1981): 75-87.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['WEINBAUM. Francine S. "Staying On After the Raj." Journal of South Asian Literature 17 (1982): 225-229.','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Jewel in the Crown (1966)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Day of the Scorpion (1968)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Towers of Silence (1971)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Division of the Spoils (1975)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Staying On (1977)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Jewel in the Crown (1984)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Paul_Mark_Scott']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Net (1954)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Flight from the Enchanter (1956)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sandcastle (1957)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bell (1958)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Severed Head (1961)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Unofficial Rose (1962)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unicorn (1963)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Italian Girl (1964)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Red and the Green (1965)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Time of the Angels (1966)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Nice and the Good (1968)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno\'s Dream (1969)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Fairly Honourable Defeat (1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Accidental Man (1971)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Prince (1973), winner of the James Tait Black Memorial Prize','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sacred and Profane Love Machine (1974), winner of the Whitbread literary award for Fiction','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Word Child (1975)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Henry and Cato (1976)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea, the Sea (1978), winner of the Booker Prize','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nuns and Soldiers (1980)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Philosopher\'s Pupil (1983)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Apprentice (1985)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book and the Brotherhood (1987)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Message to the Planet (1989)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Green Knight (1993)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jackson\'s Dilemma (1995)&#32;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Something Special (1957)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sartre: Romantic Rationalist (1953)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sovereignty of Good (1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fire and the Sun (1977)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Metaphysics as a Guide to Morals (1992)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Existentialists and Mystics: Writings on Philosophy and Literature  (1997)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Severed Head (with J.B. Priestley, 1964)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Italian Girl (with James Saunders, 1969)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Three Arrows; The Servants and the Snow (1972)&#91;30&#93;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Servants (1980)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Acastos: Two Platonic Dialogues (1986)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Prince (1987)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Year of Birds (1978; revised edition, 1984)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poems by Iris Murdoch (1997)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Meyers, Jeffrey (2013). Remembering Iris Murdoch: Letters and Interviews. New York: Palgrave Macmillan. ISBN&#160;9781137352415. Archived from the original on 7 February 2018. Retrieved 1 June 2015.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h i j k l Conradi, Peter J. (2001). Iris Murdoch&#160;: A Life. New York: Norton. ISBN&#160;0393048756.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Wilson, A. N. (2003). Iris Murdoch as I knew her. London: Hutchinson. ISBN&#160;9780091742461.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Conradi, Peter J. (2004). "Murdoch, Dame (Jean) Iris (1919–1999)" ((subscription or UK public library membership required))&#124;chapter-format= requires &#124;chapter-url= (help). Oxford Dictionary of National Biography. Oxford: Oxford University Press. doi:10.1093/ref:odnb/71228.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Book of Members, 1780–2010: Chapter M" (PDF). American Academy of Arts and Sciences. Archived (PDF) from the original on 9 November 2013. Retrieved 25 July 2014.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Broackes, Justin. (2012). "Introduction". Iris Murdoch, philosopher: a collection of essays. Oxford, England: Oxford University Press. ISBN&#160;978-0-19-928990-5. Archived from the original on 26 November 2015.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Broackes, Justin (2011). "Introduction," Iris Murdoch, Philosopher. Oxford: Oxford University Press. ISBN&#160;9780199289905.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Murdoch, Iris (2001). The Sovereignty of Good. London New York: Routledge. ISBN&#160;9780415253994.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Murdoch, Iris (1997). "The Idea of Perfection".  In Peter Conradi (Ed). Existentialists and Mystics: Writings on Philosophy and Literature. London: Chatto &amp; Windus. ISBN&#160;0701166290.&#160;CS1 maint: Uses editors parameter (link)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Todd, Richard (1984). Iris Murdoch. London: Methuen. ISBN&#160;0416354203. Here, like many other intellectuals in the 1930s, she became a member of the Communist Party; she later resigned in disillusion, but remained for a long time close to the Left.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Murdoch, Iris (1989). The servants and the snow&#160;; The three arrows&#160;; The black prince&#160;: three plays. London: Chatto &amp; Windus. p.&#160;302. ISBN&#160;9780701135904.&#160;','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Antonaccio, Maria (2000) Picturing the human: the moral thought of Iris Murdoch OUP. ISBN&#160;0-19-516660-4','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bayley, John (1999) Elegy for Iris. Picador. ISBN&#160;0-312-25382-6','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bayley, John (1998 ) Iris: A Memoir of Iris Murdoch. Gerald Duckworth &amp; Co. Ltd. ISBN&#160;0-7156-2848-8','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bayley, John (1999) Iris and Her Friends: A Memoir of Memory and Desire. W. W. Norton &amp; Company  ISBN&#160;0-393-32079-0','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bove, Cheryl (1993) Understanding Iris Murdoch. Columbia, University of South Carolina Press. ISBN&#160;087249876X.','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byatt. A.S. (1965) Degrees of Freedom: The Early Novels of Iris Murdoch. Chatto &amp; Windus','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Conradi, P.J. (2001) Iris Murdoch: A Life.   W. W. Norton &amp; Company ISBN&#160;0-393-04875-6','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['de Melo Araújo, Sofia &amp; Vieira, Fátima (ed.) (2011) Iris Murdoch, Philosopher Meets Novelist. Cambridge Scholars Publishing. ISBN&#160;1-4438-2883-1','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dooley, Gillian (ed.) (2003) From a Tiny Corner in the House of Fiction: Conversations With Iris Murdoch. Columbia, University of South Carolina Press ISBN&#160;1-57003-499-0','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Laverty, Megan (2007) Iris Murdoch\'s Ethics: A Consideration of Her Romantic Vision. Continuum Press ISBN&#160;0-8264-8535-9','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Martens, Paul. (2012) "Iris Murdoch: Kierkegaard as Existentialist, Romantic, Hegelian, and Problematically Religious" in Kierkegaard\'s Influence on Philosophy. Ashgate Publishing. ISBN&#160;978-140-944055-0.','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mauri, Margarita (ed.) (2014). Ética y literatura. Cinco novelas de Iris Murdoch. Kit-book. ISBN&#160;978-84-942067-2-6.','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Monteleone, Ester (2012) Il Bene, l\'individuo, la virtù. La filosofia morale di Iris Murdoch. Rome, Armando Editore. ISBN&#160;978-88-6677-087-9','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morgan, David (2010) With Love and Rage: A Friendship with Iris Murdoch. Kingston University Press. ISBN&#160;9781899999422','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Widdows, Heather (2005) The Moral Vision of Iris Murdoch.  Ashgate Press ISBN&#160;0-7546-3625-9','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wilson, A.N. (2003) Iris Murdoch as I Knew Her. London, Hutchinson. ISBN&#160;9780091742461','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zuba, Sonja (2009) Iris Murdoch\'s Contemporary Retrieval of Plato: The Influence of an Ancient Philosopher on a Modern Novelist. New York, Edwin Mellen Press. ISBN&#160;9780773438248','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Under the Net (1954)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Flight from the Enchanter (1956)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sandcastle (1957)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bell (1958)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Severed Head (1961)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Unofficial Rose (1962)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unicorn (1963)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Italian Girl (1964)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Red and the Green (1965)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Time of the Angels (1966)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Nice and the Good (1968)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruno\'s Dream (1969)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Fairly Honourable Defeat (1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Accidental Man (1971)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Prince (1973)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sacred and Profane Love Machine (1974)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Word Child (1975)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Henry and Cato (1976)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea, the Sea (1978)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nuns and Soldiers (1980)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Philosopher\'s Pupil (1983)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Apprentice (1985)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book and the Brotherhood (1987)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Message to the Planet (1989)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Green Knight (1993)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jackson\'s Dilemma (1995)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Something Special" (1957)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Severed Head (with J. B. Priestley, 1964)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Italian Girl (with James Saunders, 1969)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Three Arrows &amp; the Servants and the Snow (1973)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Servants (1980)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Acastos: Two Platonic Dialogues (1986)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Prince (1987)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Year of Birds (1978, rev. 1984)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poems by Iris Murdoch (1997)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sartre: Romantic Rationalist (1953)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sovereignty of Good (1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fire and the Sun (1977)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Metaphysics as a Guide to Morals (1992)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Existentialists and Mystics (1997)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Iris_Murdoch']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edward Burne-Jones (1975)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Knox Brothers (1977)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlotte Mew and Her Friends: With a Selection of Her Poems (1984)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden Child (1977)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bookshop (1978)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Offshore (1979)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Human Voices (1980)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['At Freddie\'s (1982)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Innocence (1986)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Beginning of Spring (1988)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Gate of Angels (1990)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Flower (1995, UK, 1997, US)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Means of Escape (2000) Paperback edition (2001) has 2 additional stories','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paperback edition (2001) has 2 additional stories','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A House of Air (US title: The Afterlife) edited by Terence Dooley, with an introduction by Hermione Lee (2005)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['So I Have Thought of You. The Letters of Penelope Fitzgerald edited by Terence Dooley, with a preface by A. S. Byatt (2008)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hartley, Cathy (2003). A Historical Dictionary of British Women. Psychology Press. p.&#160;349.&#160;','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Obituary, The New York Times, May 3, 2000','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden Child (1977)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bookshop (1978)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Offshore (1979)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Human Voices (1980)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['At Freddie\'s (1982)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Innocence (1986)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Beginning of Spring (1988)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Gate of Angels (1990)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Flower (1995)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Means of Escape (2000)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edward Burne-Jones (1975)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Knox Brothers (1977)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlotte Mew and Her Friends (1984)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A House of Air/The Afterlife (2005)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Penelope_Fitzgerald']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Penelope_Fitzgerald']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['To the Ends of the Earth (trilogy) Rites of Passage (1980) Close Quarters (1987) Fire Down Below (1989)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rites of Passage (1980)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Close Quarters (1987)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fire Down Below (1989)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Hot Gates  (1965)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Moving Target  (1982)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Egyptian Journal (1985)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Kevin McCarron, ‘Golding, Sir William Gerald (1911–1993)’, Oxford Dictionary of National Biography, Oxford University Press, September 2004; online edn, May 2006 accessed 13 November 2007','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Raychel Haugrud Reiff, William Golding: Lord of the Flies, Marshall Cavendish, 2009','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Harold Bloom (2008). William Golding\'s Lord of the Flies; Bloom\'s modern critical interpretations. Infobase Publishing. pp.&#160;161–165. ISBN&#160;0-7910-9826-5.&#160;','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Raychel Haugrud Reiff, William Golding: Lord of the Flies, page 58 (Marshall Cavendish, 2010). ISBN&#160;978-0-7614-4276-9','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mortimer, John (1986). Character Parts. London: Penguin. ISBN&#160;0-14-008959-4.&#160;','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Golding, William (1996). The Double Tongue. London: Faber. ISBN&#160;978-0-571-17803-2.&#160;','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ F. Regard (ed.), Fingering Netsukes: Selected Papers from the First International William Golding Conference, Saint-Etienne, PUSE, 1995.','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carey, John (2009). William Golding: The Man Who Wrote Lord of the Flies. New York: Simon &amp; Schuster. ISBN&#160;978-1-4391-8732-6.&#160;','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['L. L. Dickson, The Modern Allegories of William Golding (University of South Florida Press, 1990). ISBN&#160;0-8130-0971-5.','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['R. A. Gekoski and P. A. Grogan, William Golding: A Bibliography, London, André Deutsch, 1994. ISBN&#160;978-0-233-98611-1.','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Boys Armed with Sticks: William Golding\'s Lord of the Flies". Chapter in B. Schoene-Harwood. Writing Men. Edinburgh University Press, 2000.','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ladenthin, Volker: Golding, Herr der Fliegen; Verne, 2 Jahre Ferien; Schlüter, Level 4 - Stadt der Kinder. In: engagement (1998) H. 4  S. 271-274.','William_Golding']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1963)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alkitrang Dugo (1975)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lord of the Flies (1990)','William_Golding']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Grimus (1975)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Midnight\'s Children (1981)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shame (1983)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Satanic Verses (1988)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Moor\'s Last Sigh (1995)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ground Beneath Her Feet (1999)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fury (2001)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shalimar the Clown (2005)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Enchantress of Florence (2008)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two Years Eight Months and Twenty-Eight Nights (2015)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden House (2017)&#91;115&#93;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['East, West (1994)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mirrorwork: 50 Years of Indian Writing 1947–1997 (1997, Editor, with Elizabeth West)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Best American Short Stories (2008, Guest Editor)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Haroun and the Sea of Stories (1990)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Luka and the Fire of Life (2010)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Jaguar Smile: A Nicaraguan Journey (1987)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"In Good Faith", Granta, (1990)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Imaginary Homelands: Essays and Criticism, 1981–1991 (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Wizard of Oz: BFI Film Classics", BFI, (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Step Across This Line: Collected Nonfiction 1992–2002 (2002)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The East is Blue" (2004)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Anton: A Memoir (2012)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hans Christian Andersen Literature Award (2014)&#91;117&#93;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cristina Emanuela Dascalu (2007) Imaginary homelands of writers in exile: Salman Rushdie, Bharati Mukherjee, and V.S. Naipaul p.131','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pointon, Graham (ed.): BBC Pronouncing Dictionary of British Names, 2nd edition. Oxford Paperbacks, 1990.','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Salman Rushdie biography Archived 1 May 2007 at the Wayback Machine.", 2004, British Counsel. Retrieved 20 January 2008.','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Meer, Ameena (1989). "Interview: Salman Rushdie". Bomb. 27 (Spring). Archived from the original on 2 April 2015. Retrieved 22 March 2015.&#160;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Buchta, Wilfried (2000). Who rules Iran? (PDF). The Washington Institute and The Konrad Adenauer. p.&#160;6.&#160;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Joseph Bernard Tamney (2002). The Resilience of Conservative Religion: The Case of Popular, Conservative Protestant Congregations. Cambridge, UK: The Press Syndicate of the University of Cambridge.&#160;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Bill Moyers on Faith &amp; Reason . Bill Moyers and Salman Rushdie . June 23, 2006 - PBS".&#160;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Michael Mandel, How America Gets Away With Murder, Pluto Press, 2004, p. 60','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anant Kumar &amp; Hans Dembowski (2010). "Polyphony and Contradictions Are Considered Indispensable in India". Qantara.de.&#160;','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['New York Times special feature on Rushdie, 1999','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Grimus (1975)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Midnight\'s Children (1981)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shame (1983)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Satanic Verses (1988)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Moor\'s Last Sigh (1995)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ground Beneath Her Feet (1999)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fury (2001)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shalimar the Clown (2005)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Enchantress of Florence (2008)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two Years Eight Months and Twenty-Eight Nights (2015)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden House (2017)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['East, West (1994)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Jaguar Smile: A Nicaraguan Journey (1987)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Imaginary Homelands: Essays and Criticism 1981–1991 (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Homeless by Choice (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Step Across This Line: Collected Nonfiction 1992–2002 (2002)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Anton: A Memoir (2012)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Haroun and the Sea of Stories (1990)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Luka and the Fire of Life (2010)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zbigniew Herbert (1965)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Auden (1966)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vasko Popa (1967)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Václav Havel (1968)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugène Ionesco (1970)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Huchel (1971)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sławomir Mrożek (1972)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1973)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sándor Weöres (1974)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miroslav Krleža (1975)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Italo Calvino (1976)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pavel Kohout (1977)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1977)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simone de Beauvoir (1978)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1979)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sarah Kirsch (1980)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (1981)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tadeusz Różewicz (1982)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friedrich Dürrenmatt (1983)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christa Wolf (1984)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stanisław Lem (1985)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giorgio Manganelli (1986)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Milan Kundera (1987)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Szczypiorski (1988)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marguerite Duras (1989)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helmut Heissenbüttel (1990)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Nádas (1991)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1992)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chinghiz Aitmatov (1993)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Inger Christensen (1994)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aleksandar Tišma (1995)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jürg Laederach (1996)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Antonio Tabucchi (1997)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dubravka Ugrešić (1998)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Esterházy (1999)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['António Lobo Antunes (2000)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Umberto Eco (2001)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christoph Hein (2002)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cees Nooteboom (2003)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2004)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claudio Magris (2005)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jorge Semprún (2006)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. L. Kennedy (2007)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Agota Kristof (2008)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Per Olov Enquist (2009)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Nizon (2010)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Javier Marías (2011)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick Modiano (2012)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2013)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lyudmila Ulitskaya (2014)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mircea Cărtărescu (2015)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Stasiuk (2016)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Karl Ove Knausgård (2017)','Salman_Rushdie']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Place at Whitton (1964)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fear (1965), rewritten in (1989) as By the Line','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bring Larks and Heroes (1967), winner of the Miles Franklin Award, set in an unidentified British penal colony','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Three Cheers for the Paraclete (1968), winner of the Miles Franklin Award, comic novel of a doubting priest','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Survivor (1969), a survivor looks back on a disastrous Arctic expedition','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Dutiful Daughter (1971), Keneally\'s personal favourite','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Chant of Jimmie Blacksmith (1972), also filmed. Written through the eyes of an exploited Aborigine who explodes in rage. Based on an actual incident. Keneally has said he would not now presume to write in the voice of an Aborigine, but would have written the story as seen by a white character.','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blood Red, Sister Rose (1974), a novel based loosely on the life of Joan of Arc','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moses the Lawgiver (1975)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gossip from the Forest (1975), tells of the negotiation of the armistice that ended World War I','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Season in Purgatory (1976), love among Tito\'s partisans in World War II','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ned Kelly and the City of the Bees (1978), a book for children','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Victim of the Aurora (1978), a detective story set on an Antarctic expedition','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Passenger (1979)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Confederates (1979), based on Stonewall Jackson\'s army','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cut-Rate Kingdom (1980), Australia at war in 1942','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Schindler\'s Ark (1982), winner of the Booker Prize, later released and filmed as Schindler\'s List','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Family Madness (1985)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Playmaker (1987), prisoners perform a play in Australia in the 18th Century','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Act of Grace (1985), (under the pseudonym William Coyle) Published as Firestorm in the US','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['By the Line (1989), working-class families face World War II in Sydney','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Towards Asmara (1989), the conflict in Eritrea','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flying Hero Class (1991), Palestinians hijack an aeroplane carrying an Aboriginal folk dance troupe','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chief of Staff (1991), (under the pseudonym William Coyle)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Woman of the Inner Sea (1993), Keneally retells a story once told him by a young woman that haunted his imagination','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jacko: The Great Intruder (1993), madness and television','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A River Town (1995)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bettany\'s Book (2000)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Angel in Australia (2000), also published as Office of Innocence','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tyrant\'s Novel (2003), an Australian immigration detainee tells his story','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Widow and Her Hero (2007), the effect of war on those left behind','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The People\'s Train (2009), a dissident escapes from Russia to Australia in 1911, only to return to fight in the revolution','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Daughters of Mars (2012), two Australian sisters struggle to nurse soldiers horrifically wounded in World War I','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shame and the Captives (2014), ISBN&#160;147673464X, recounts the escape of Japanese prisoners of war in New South Wales during WWII','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Napoleon\'s Last Island (2015)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crimes of the Father (2016)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Soldier’s Curse (2016)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unmourned (2017)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Power Game (2018)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Outback (1983)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Australia: Beyond the Dreamtime (1987)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Place Where Souls are Born: A Journey to the Southwest (1992)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Now and in Time to Be: Ireland and the Irish (1992)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Memoirs from a Young Republic (1993)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Utility Player: The Des Hasler Story (1993) Rugby league footballer Des Hasler','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Our Republic (1995)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Homebush Boy: A Memoir (1995), autobiography','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Great Shame (1998)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['American Scoundrel: The Life of the Notorious Civil War General Dan Sickles (2002), biography of Daniel Sickles','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lincoln (2003), biography of Abraham Lincoln','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Commonwealth of Thieves: The Story of the Founding of Australia (2005)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Searching for Schindler: A Memoir (2007)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Australians: Origins to Eureka (2009)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Three Famines: Starvation and Politics (2011)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Australians: Eureka to the Diggers (2011)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Australians: Flappers to Vietnam (2014)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Australians: A Short History (2016)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Halloran\'s Little Boat (1968)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Childermas (1968)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Awful Rose (1972)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bullie\'s House (1981)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Either Or (2007)&#91;19&#93;','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f Peter Pierce, ed. (2006). "Thomas Kenneally, A Celebration" (PDF). Canberra, Australa: Friends of the National Library of Australia. Retrieved 10 June 2017.&#160;','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Toby Creswell; Samantha Trenoweth (2006). 1001 Australians You Should Know. Australia: Pluto Press. p.&#160;136. ISBN&#160;1-86403-361-4.&#160;','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1983, 1989, 1991, 1993 RealAudio interviews with Thomas Keneally at Wired for Books.org by Don Swaim','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1957)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Randolph Stow (1958)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vance Palmer (1959)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth O\'Conner (1960)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1961)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / George Turner (1962)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sumner Locke Elliott (1963)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1964)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1965)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Mathers (1966)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1967)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1968)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1969)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dal Stivens (1970)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1971)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1972)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1973)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald McKie (1974)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Xavier Herbert (1975)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1976)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Park (1977)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1978)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1979)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1980)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1981)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1982)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1983)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1984)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1985)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Jolley (1986)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Glenda Adams (1987)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1988)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1989)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Flood (1990)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1992)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1994)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helen Demidenko (1995)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1996)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Foster (1997)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / Kim Scott (2000)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frank Moorhouse (2001)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2002)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (2003)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shirley Hazzard (2004)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew McGahan (2005)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roger McDonald (2006)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexis Wright (2007)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Carroll (2008)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2009)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Temple (2010)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kim Scott (2011)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Funder (2012)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michelle de Kretser (2013)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Evie Wyld (2014)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sofie Laguna (2015)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Patrić (2016)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josephine Wilson (2017)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nabanna (1944)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Distant Thunder (1973)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Akaler Shandhaney (1980)','Thomas_Keneally']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Churchill\'s Secret War (2010)','Thomas_Keneally']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['2 Awards and recognition

// 2.1 Booker Prizes, 1983 and 1999
// 2.2 Nobel Prize in Literature, 2003
// 2.3 Other awards and recognition','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.1 Booker Prizes, 1983 and 1999','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.2 Nobel Prize in Literature, 2003','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Attridge, Derek (2004). J. M. Coetzee and the Ethics of Reading: Literature in the Event. Chicago: University of Chicago Press. p.&#160;94. ISBN&#160;978-0-226-03117-0.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h Head, Dominic (2009). The Cambridge Introduction to J. M. Coetzee. Cambridge: Cambridge University Press. pp.&#160;1–2. ISBN&#160;0-521-68709-8.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Richmond, Chris (2007). "John M. Coetzee".  In Badge, Peter. Nobel Faces: A Gallery of Nobel Prize Winners. Weinheim: Wiley-VCH. pp.&#160;428–429. ISBN&#160;3-527-40678-6. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b O\'Neil, Patrick M. (2004). Great World Writers: Twentieth Century. London: Marshall Cavendish. pp.&#160;225–244. ISBN&#160;0-7614-7468-4. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Killam, Douglas; Kerfoot, Alicia L. (2007). "Coetzee, J(ohn) M(axwell)". Student Encyclopedia of African Literature. Westport, CT: Greenwood. pp.&#160;92–93. ISBN&#160;0-313-33580-X. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted in J.C. Kannemeyer (2012), J.M. Coetzee: A Life in Writing, Scribe, p. 583.','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gallagher, Susan (1991). A Story of South Africa: J. M. Coetzee\'s Fiction in Context. Cambridge, MA: Harvard University Press. p.&#160;194. ISBN&#160;0-674-83972-2.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Scanlan, Margaret (1997). "Incriminating documents: Nechaev and Dostoevsky in J. M. Coetzee\'s The Master of St Petersburg". Philological Quarterly. 76 (4): 463–477.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Diala, Isidore (2002). "Nadine Gordimer, J. M. Coetzee, and André Brink: Guilt, expiation, and the reconciliation process in post-apartheid South Africa". Journal of Modern Literature. 25 (2): 50–68 [51]. doi:10.1353/jml.2003.0004.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Poyner, Jane (2000). "Truth and Reconciliation in JM Coetzee\'s Disgrace (novel)". Scrutiny2: Issues in English Studies in Southern Africa. 5 (2): 67–77. doi:10.1080/18125440008565972.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Poyner, Jane, ed. (2006). "J. M. Coetzee in Conversation with Jane Poyner". J. M. Coetzee and the Idea of the Public Intellectual. Athens: Ohio University Press. p.&#160;22. ISBN&#160;0-8214-1687-1. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jolly, Rosemary (2006). "Going to the dogs: Humanity in J. M. Coetzee\'s Disgrace, The Lives of Animals, and South Africa\'s Truth and Reconciliation Commission".  In Poyner, Jane. J. M. Coetzee and the Idea of the Public Intellectual. Athens, OH: Ohio University Press. p.&#160;149. ISBN&#160;0-8214-1687-1. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Coetzee, J. M. (1992).  Attwell, David, ed. Doubling the Point: Essays and Interviews. Harvard University Press: Cambridge, MA. p.&#160;394. ISBN&#160;0-674-21518-4. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Halford, James, "Southern Conversations: J.M. Coetzee in Buenos Aires", Sydney Review of Books, February 28, 2017.','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lives of Animals, delivered for The Tanner Lectures on Human Values, Princeton, 1997','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"A Word from J. M. Coetzee", address read by Hugo Weaving at the opening of the exhibition "Voiceless: I Feel Therefore I Am" by Voiceless: The Animal Protection Institute, February 22, 2007, Sherman Galleries, Sydney, Australia','J._M._Coetzee']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Senior (1987)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Festus Iyayi (1988)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Janet Frame (1989)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler (1990)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1992)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vikram Seth (1994)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louis de Bernières (1995)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1996)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Earl Lovelace (1997)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (2000)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2002)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke (2003)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caryl Phillips (2004)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrea Levy (2005)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Grenville (2006)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lloyd Jones (2007)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lawrence Hill (2008)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christos Tsiolkas (2009)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rana Dasgupta (2010)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aminatta Forna (2011)','J._M._Coetzee']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greuze: 1725–1805: The Rise and Fall of an Eighteenth-century Phenomenon (1972) ISBN&#160;9780236176786 (on Jean-Baptiste Greuze)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jacques-Louis David (1980) ISBN&#160;9780064305075 (on the history painter Jacques-Louis David)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Start In Life (1981, US title The Debut) ISBN&#160;9780241976500','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Providence (1982) ISBN&#160;9780307826213','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Look at Me (1983) ISBN&#160;9780307826206','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hotel du Lac (1984) ISBN&#160;9780307826220 (Booker Prize winner)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Family and Friends (1985) ISBN&#160;9780307826237','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Misalliance (1986) ISBN&#160;9780307826343','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Friend from England (1987) ISBN&#160;9780307826336','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Latecomers (1988) ISBN&#160;9780307826183','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lewis Percy (1989) ISBN&#160;9780307826190','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brief Lives (1990) ISBN&#160;9780307826251','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Closed Eye (1991) ISBN&#160;9780307826275','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fraud (1992) ISBN&#160;9780307826268','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Family Romance (1993, US title Dolly) ISBN&#160;9780140234060','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Private View (1994) ISBN&#160;9780307826299','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Incidents in the Rue Laugier (1995) ISBN&#160;9780307826305','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Altered States (1996) ISBN&#160;9780307826312','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Visitors (1997) ISBN&#160;9780307826329','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Falling Slowly (1998) ISBN&#160;9780307826244','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Undue Influence (1999) ISBN&#160;9780307492364','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bay of Angels (2001) ISBN&#160;9781400033010','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Next Big Thing (2002, US title Making Things Better) (longlisted for the Booker Prize)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Rules of Engagement (2003) ISBN&#160;9780141910222','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leaving Home (2005) ISBN&#160;9781400095650','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Strangers (2009) (shortlisted for James Tait Black Memorial Prize) ISBN&#160;9780307477583','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"At The Hairdressers" (2011) (novella, available only as an e-book)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Anita Brookner, 1928– Notebooks, ca. 1986–1994". Harry Ransom Center. The University of Texas at Austin. Archived from the original on 10 March 2009.&#160;','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cowell, Alan (2016-03-15). "Anita Brookner, Whose Bleak Fiction Won the Booker Prize, Dies at 87". The New York Times. ISSN&#160;0362-4331. Retrieved 2016-03-17.&#160;','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Olivier Berggruen. "Olivier Berggruen on Anita Brookner (1928–2016) - artforum.com / passages". Artforum.com. Retrieved 2016-06-21.&#160;','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Anita_Brookner']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Katherine Mansfield Memorial Award, 1975','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['New Zealand Literary Fund grant, 1975, 1977, 1979','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Maori Trust Fund Prize, 1978','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['East-West Centre Award, 1979','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Book of the Year Award, 1984','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mobil Pegasus Prize, 1985','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize, 1985','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scholarship in Letters, 1990','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bone People (Spiral Press, 1984)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Silences Between (Moeraki Conversations) (Auckland University Press, 1982)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lost Possessions (Victoria University Press, 1985)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Strands (Auckland University Press, 1992)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Te Kaihau: The Windeater (George Braziller, 1986), short story collection','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Te Whenua, Te Iwi/The Land and The People ed. Jock Philips (Allen &amp; Unwin/Port Nicholson Press, 1987) includes Hulme\'s short autobiographical piece "Okatiro and Moeraki"','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Homeplaces: Three Coasts of the South Island of New Zealand (Hodder &amp; Stoughton, 1989), autobiography with photographs by Robin Morrison','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stonefish (Huia Publishers, 2004) short stories and poems','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Contemporary Authors Online (2012). "Keri Hulme". GALE Literature Resource Center. Retrieved 3 March 2018.&#160;','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Keri Hulme." Contemporary Women Poets. St. James Press, 1998','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Keri Hulme." Contemporary Poets, 7th ed. St. James Press, 2001','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Keri_Hulme']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['6 Poets in The Amis Anthology: A Personal Choice of English Verse (1988)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1968 A Look Round the Estate: Poems, 1957–1967','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leader (2006), p.108','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Martin Amis (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leader, 2006, p. 452.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Sir Kingsley Amis Dies; British Novelist and Poet," Washington Post, 23 October 1995; Leader, 2006, p.1.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bradbury, Malcolm, 1989, p. 205; Ritchie 1988, p. 64.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jacobs, 1995, p.162','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ See Martin Amis, Koba the Dread (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ See Amis\'s Socialism and the Intellectuals, cited by Leader, 2006, p. 366.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leader, 2006, p. 366','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ John Wakeman, World Authors 1950–1970: A Companion Volume to Twentieth Century Authors. New York&#160;: H.W. Wilson Company, 1975. ISBN&#160;0824204190. (pp. 444–48).','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Madsen Pirie, Think Tank: The Story of the Adam Smith Institute, Biteback Publishing, 2012, p. 140','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jacobs, 1995, p. 17','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jacobs, 1995, p. 6.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kingsley Amis, Everyday Drinking, Bloomsbury USA, NY, 2008, editor\'s introduction.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Anthony Julius, Trials of the Diaspora, A History of Anti-Semitism in England, Oxford Univ. Press, 2010, pp. 357–358','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amis, Kingsley (1992). Kingsley Amis: Memoirs. Penguin.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amis, Kingsley (2000).  Leader, Zachary, ed. The Letters of Kingsley Amis. HarperCollins. ISBN&#160;0-00-257095-5.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bradbury, Malcolm (1989). No, Not Bloomsbury. Arena. ISBN&#160;0-09-954410-5.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bradford, Richard (2001). Lucky Him: The Life of Kingsley Amis. Peter Owen. ISBN&#160;0-7206-1117-2.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fussell, Paul (1994). The Anti-Egotist: Kingsley Amis, Man of Letters. Oxford UP.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jacobs, Eric (1995). Kingsley Amis, a Biography. Hodder &amp; Stoughton. ISBN&#160;0-340-59072-6.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leader, Zachary (2006). The Life of Kingsley Amis. Jonathan Cape. ISBN&#160;0-224-06227-1.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Powell, Neil (2008). Amis &amp; Son – Two literary generations. Pan Macmillan.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ritchie, Harry (1988). Success Stories: Literature and the Media in England, 1950–1959. Faber &amp; Faber. ISBN&#160;0-571-14764-X.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amis, Martin (2002). Koba the Dread: Laughter and the Twenty Million. Talk Miramax Books. ISBN&#160;978-1400032204.&#160;','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Kingsley Amis in the Great Tradition and in Our Time," by Robert H. Bell, Williams College. Introduction to Critical Essays on Kingsley Amis, ed. Robert H. Bell, New York: G.K. Hall, 1998.','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lucky Jim (1954)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['That Uncertain Feeling (1955)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['I Like It Here (1958)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Take a Girl Like You (1960)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Anti-Death League (1966)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colonel Sun (1968)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Green Man (1969)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Alteration (1976)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jake\'s Thing (1978)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stanley and the Women (1984)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Devils (1986)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The James Bond Dossier (1965)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Bond, or Every Man His Own 007 (1965)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Letters of Kingsley Amis (2001)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lucky Jim (1957)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Only Two Can Play (1962)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Take a Girl Like You (1970)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Green Man (1990)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stanley and the Women (1991)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Old Devils (1992)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Take a Girl Like You (2000)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Casino Royale (1953)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Live and Let Die (1954)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moonraker (1955)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Diamonds Are Forever (1956)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['From Russia, with Love (1957)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dr. No (1958)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Goldfinger (1959)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['For Your Eyes Only (1960)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thunderball (1961)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Spy Who Loved Me (1962)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Her Majesty\'s Secret Service (1963)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['You Only Live Twice (1964)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Man with the Golden Gun (1965)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Octopussy and The Living Daylights (1966)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colonel Sun (1968)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Licence Renewed (1981)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['For Special Services (1982)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Icebreaker (1983)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Role of Honour (1984)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nobody Lives for Ever (1986)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No Deals, Mr. Bond (1987)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scorpius (1988)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Win, Lose or Die (1989)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brokenclaw (1990)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Man from Barbarossa (1991)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Death is Forever (1992)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Never Send Flowers (1993)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SeaFire (1994)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cold (1996)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zero Minus Ten (1997)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Facts of Death (1998)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['High Time to Kill (1999)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DoubleShot (2000)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Never Dream of Dying (2001)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Man with the Red Tattoo (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Devil May Care (2008)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carte Blanche (2011)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Solo (2013)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trigger Mortis (2015)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Forever and a Day (2018)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Bond, The Spy Who Loved Me (1977)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Bond and Moonraker (1979)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The World Is Not Enough (1999)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Adventures of James Bond Junior 003½ (1967)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Bond: The Authorized Biography of 007 (1973)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['SilverFin (2005)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blood Fever (2006)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Double or Die (2007)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hurricane Gold (2007)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['By Royal Command (2008)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shoot to Kill (2014)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heads You Die (2016)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guardian Angel (2005)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Secret Servant (2006)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Final Fling (2008)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Take Over (1970)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Killing Zone (1985)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Per Fine Ounce (1966)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Heart of Erzulie" (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Double O Seven, James Bond, A Report (1964)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The James Bond Dossier (1965)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Bond (1965)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The James Bond Films: A Behind the Scenes History (1983)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The James Bond Bedside Companion (1984)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Battle for Bond (2007)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Danger Society: The Young Bond Dossier (2009)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Rachel Papers (1973)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dead Babies (1975)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Success (1978)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Other People: A Mystery Story (1981)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Money: A Suicide Note (1984)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['London Fields (1989)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Time\'s Arrow: or The Nature of the Offence (1991)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Information (1995)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Night Train (1997)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yellow Dog (2003)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['House of Meetings (2006)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Pregnant Widow (2010)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Asbo: State of England (2012)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Zone of Interest (2014)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Einstein\'s Monsters (1987)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two Stories (1994)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heavy Water and Other Stories (1998)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saturn 3 (1980)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Moronic Inferno: And Other Visits to America (1986)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Visiting Mrs Nabokov: And Other Excursions (1993)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Experience (2000)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The War Against Cliché (2001)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Koba the Dread: Laughter and the Twenty Million (2002)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Second Plane (2008)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Rub of Time: Bellow, Nabokov, Hitchens, Travolta, Trump. Essays and Reportage, 1986-2016 (2017)','Kingsley_Amis']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Astercote (1970)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Whispering Knights (1971)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Wild Hunt of Hagworthy (1971)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Driftway (1972)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ghost of Thomas Kempe (1973) – Carnegie Medal','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The House in Norham Gardens (1974)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Going Back (1975)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Boy Without a Name (1975)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Stitch in Time (1976) – Whitbread Children\'s Book Award','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Stained Glass Window (1976), illustrated by Michael Pollard','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fanny\'s Sister (1976)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Voyage of QV66 (1978)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fanny and the Monsters (1978)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fanny and the Battle of Potter\'s Piece (1980)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Revenge of Samuel Stokes (1981)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Uninvited Ghosts and other stories (1984), collection','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon Trouble (1984), illus. Valerie Littlewood','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Debbie and the Little Devil (1987)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A House Inside Out (1987)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Princess by Mistake (1993)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Judy and the Martian (1993)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cat, the Crow and the Banyan Tree (1994), illus. Terry Milne','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Good Night, Sleep Tight (1995), illus. Adriano Gon','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two Bears and Joe (1995), illus. Jan Ormerod','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Staying with Grandpa (1995)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Martian Comes to Stay (1995)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Disastrous Dog (1995), illus. Robert Bartlett','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ghostly Guests (1997)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['One, Two, Three&#160;... Jump! (1998), illus. Jan Ormerod','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dragon Trouble (1999), new edition illus. Andrew Rowland','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Search of a Homeland; The Story of The Aeneid (2001), illus. Ian Andrew','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Road to Lichfield (1977) – Booker Prize finalist','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nothing Missing but the Samovar, and other stories (1978), collection – Southern Arts Literature Prize','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Treasures of Time (1979) – Arts Council National Book Award','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Judgment Day (1980)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Next to Nature, Art (1982)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Perfect Happiness (1983)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Corruption, and other stories (1984), collection','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['According to Mark (1984) – Booker Prize finalist','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pack of Cards, collected short stories 1978–1986 (1986), collection','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moon Tiger (1987) – Booker Prize; Whitbread finalist','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Passing On (1989)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['City of the Mind (1991)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cleopatra\'s Sister (1993)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heat Wave (1996)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond the Blue Mountains (1997), collection (U.S. title: The Five Thousand and One Nights)&#91;11&#93;','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Spiderweb (1998)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Photograph (2003)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Making it up (2005)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Consequences (2007)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Family Album (2009) – Costa finalist','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Presence of the Past: An introduction to landscape history (1976)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oleander, Jacaranda: a Childhood Perceived (1994), autobiographical','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A House Unlocked (2001), autobiographical','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ammonites and Leaping Fish (2013), memoir&#91;12&#93; (subsequently Dancing Fish and Ammonites: A Memoir)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life in the Garden (2018), memoir','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Man Booker Prize -fiction, 1977: The Shortlist: \'...Peter Smart’s Confessions/ Great Granny Webster/ Shadows on our Skin/ The Road to Lichfield/ Quartet in Autumn\' at themanbookerprize.com, Accessed 15 April 2018','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Beyond the Blue Mountains (1997) London: Viking ISBN&#160;9780670869053','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Penelope_Lively']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illywhacker (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oscar and Lucinda (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tax Inspector (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unusual Life of Tristan Smith (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Maggs (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True History of the Kelly Gang (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Life as a Fake (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Theft: A Love Story (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['His Illegal Self (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Parrot and Olivier in America (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Chemistry of Tears (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amnesia (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Long Way From Home (2017)','Peter_Carey_(novelist)']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History (1974)
// "Crabs"
// "Peeling"
// "She Wakes"
// "Life and Death in the Southside Pavilion"
// "Room No. 5 (Escribo)"
// "Happy Story"
// "A Windmill in the West"
// "Withdrawal"
// "Report on the Shadow Industry"
// "Conversations with Unicorns"
// "American Dreams"
// "The Fat Man in History"','Peter_Carey_(novelist)']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['"War Crimes" (1979)
// "The Journey of a Lifetime"
// "Do You Love Me?"
// "The Uses of Williamson Wood"
// "The Last Days of a Famous Mime"
// "A Schoolboy Prank"
// "The Chance"
// "Fragrance of Roses"
// "The Puzzling Nature of Blue"
// "Ultra-Violet Light"
// "Kristu-Du"
// "He Found Her in Late Summer"
// "Exotic Pleasures"
// "War Crimes"','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Contacts" (Under Twenty-Five: An Anthology, 1966)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Eight Parts of a Whole" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Interview with Yourself" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Structure" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"I Know You Can Talk" (Stand Magazine, 1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Mad Puzzle King" (Living Daylights, 1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Rose" (Nation Review, 1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Cosmic Pragmatist" (Nation Review, 1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Pleasure Bird" (Australian Playboy, 1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"An Abandoned Chapter" (Overland, 1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Bazoohley: A Story for Children (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Letter to Our Son (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['30 Days in Sydney: A Wildly Distorted Account (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from New York (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wrong about Japan (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1985, with Ray Lawrence)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Until the End of the World (1991, with Wim Wenders)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illusion (1986, with Mike Mullins and Martin Armiger)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mary Ellen Snodgrass, Peter Carey: A Literary Companion (Jefferson, North Carolina: McFarland, 2010), pp. 6-8.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Candida Baker, Yacker: Australian Writers Talk about Their Work (Sydney: Picador, 1986), pp. 54-77.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ See also the bibliography in Andreas Gaile (ed.) Fabulating Beauty: Perspectives on the Fiction of Peter Carey (Amsterdam and New York: Rodopi, 2005). Retrieved 30 March 2012.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sonia Harford, Leaving Paradise: My Expat Adventure and Other Stories (Melbourne: Melbourne University Publishing, 2006), p. 111.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted in Sue Gillett, "Oscar and Lucinda: Shattering History’s Self-reflection", in Patrick Fuery (ed.), Representation, Discourse and Desire: Contemporary Australian Culture and Critical Theory (Melbourne: Longman Cheshire, 1994), p. 195.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gamerman, Ellen (2015-01-08). "Peter Carey on His Cyber Thriller \'Amnesia\'". Wall Street Journal. ISSN&#160;0099-9660. Retrieved 2016-09-06.&#160;','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illywhacker (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oscar and Lucinda (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tax Inspector (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unusual Life of Tristan Smith (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Maggs (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True History of the Kelly Gang (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Life as a Fake (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Theft: A Love Story (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['His Illegal Self (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Parrot and Olivier in America (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Chemistry of Tears (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amnesia (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Long Way From Home (2017)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War Crimes (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History and Other Stories (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Exotic Pleasures (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Bazoohley (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Letter to Our Son (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['30 Days in Sydney (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from New York (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wrong about Japan (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Until the End of the World (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Senior (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Festus Iyayi (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Janet Frame (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vikram Seth (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louis de Bernières (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Earl Lovelace (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caryl Phillips (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrea Levy (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Grenville (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lloyd Jones (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lawrence Hill (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christos Tsiolkas (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rana Dasgupta (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aminatta Forna (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1957)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Randolph Stow (1958)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vance Palmer (1959)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth O\'Conner (1960)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1961)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / George Turner (1962)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sumner Locke Elliott (1963)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1964)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1965)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Mathers (1966)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1967)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1968)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1969)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dal Stivens (1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1971)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1972)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1973)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald McKie (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Xavier Herbert (1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Park (1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1978)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1982)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1983)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1984)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Jolley (1986)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Glenda Adams (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Flood (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helen Demidenko (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Foster (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / Kim Scott (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frank Moorhouse (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shirley Hazzard (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew McGahan (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roger McDonald (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexis Wright (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Carroll (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Temple (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kim Scott (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Funder (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michelle de Kretser (2013)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Evie Wyld (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sofie Laguna (2015)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Patrić (2016)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josephine Wilson (2017)','Peter_Carey_(novelist)']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f Lewis, Barry (2000). Kazuo Ishiguro. Manchester University Press.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Oe, Kenzaburo (1991). "The Novelist in Today\'s World: A Conversation". boundary 2. 18 (3): 110.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Vorda, Allan; Herzinger, Kim (1994). "Stuck on the Margins: An Interview with Kazuo Ishiguro". Face to Face: Interviews with Contemporary Novelists. Rice University Press. p.&#160;25. ISBN&#160;0-8926-3323-9.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mason, Gregory (1989). "An Interview with Kazuo Ishiguro". Contemporary Literature. 30 (3): 336.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "My friend Kazuo Ishiguro: \'an artist without ego, with deeply held beliefs\'". The Guardian. October 8, 2017.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ishiguro, Kazuo (1983-03-01). "Summer after the War". Granta Magazine. Retrieved 2018-05-01.&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ishiguro, Kazuo (1985-09-01). "October, 1948". Granta Magazine. Retrieved 2018-05-01. (Subscription required (help)).&#160;','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ishiguro, Kazuo (2001-05-14). "A Village After Dark". The New Yorker. ISSN&#160;0028-792X. Retrieved 2018-05-01.&#160;','Kazuo_Ishiguro']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Kazuo_Ishiguro']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1984–88 Management Committee, Society of Authors,  (Deputy chairman, 1986, Chairman, 1986–88)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1993–98 Board, British Council,  (Member of Literature Advisory Panel, 1990–98)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Desert Island Discs, BBC Radio 4, 1991-06-16','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Elections to the British Academy celebrate the diversity of UK research". July 21, 2017.&#160;','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "A.S. Byatt to be awarded 2017 Park Kyong-ni Literature Prize". donga.com. September 28, 2017. Retrieved September 28, 2017.&#160;','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Stephen Gadd (September 11, 2017). "AS Byatt scoops prestigious Danish literary prize". CPH Post. Retrieved September 12, 2017.&#160;','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mundler, Helen E. (2003). Intertextualité dans l’œuvre d’A. S. Byatt (Intertextuality in the work of A. S. Byatt). Paris, Harmattan, 2003.  ISBN&#160;2-7475-4084-7','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hicks, Elizabeth (2010). The Still Life in the Fiction of A. S. Byatt. Newcastle upon Tyne: Cambridge Scholars Publishing. ISBN&#160;978-1-4438-2385-2','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mundler, Helen E. “Time to murder and create? The Bible as intertext in A. S. Byatt’s Elementals: Stories of Fire and Ice”. FAAAM, no. 4, 2010: 65–77.','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cerles Review Interview (2003). Accessed 2010-09-11','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','A._S._Byatt']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flowers and Shadows (Harlow: Longman, 1980)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Landscapes Within (Harlow: Longman, 1981)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Famished Road (London: Jonathan Cape, 1991)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Songs of Enchantment (London: Jonathan Cape, 1993)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Astonishing the Gods (London: Weidenfeld &amp; Nicolson, 1995)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Infinite Riches (London: Weidenfeld &amp; Nicolson, 1998)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Arcadia (Weidenfeld &amp; Nicolson, 2002)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Starbook (London: Rider Books, 2007)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Age of Magic (London: Head of Zeus, 2014)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Incidents at the Shrine (short stories; London: Heinemann, 1986)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stars of the New Curfew (short stories; London: Secker &amp; Warburg, 1988)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An African Elegy (poetry; London: Jonathan Cape, 1992)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Birds of Heaven (essays; London: Phoenix House, 1996)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Way of Being Free (essays; London: Weidenfeld &amp; Nicolson: 1997; London: Phoenix House, 1997)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mental Fight (poetry: London: Weidenfeld &amp; Nicolson, 1999; London: Phoenix House, 1999)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tales of Freedom (short stories; London: Rider &amp; Co., 2009)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Time for New Dreams (essays; London: Rider &amp; Co., 2011)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wild (poetry; London: Rider &amp; Co., 2012)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Magic Lamp: Dreams of Our Age, with paintings by Rosemary Clunie (Apollo/Head of Zeus, 2017)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rise Like Lions: Poetry for the many (as editor; London: Hodder &amp; Stoughton, 2018)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['N - The Madness of Reason (feature film, directed by Peter Krüger, 2014)&#91;26&#93;','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Robert Dorsman, "Ben Okri Archived 16 January 2013 at the Wayback Machine.," Poetry International Web, 2000.','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Douglas McCabe. "\'Higher Realities\': New Age Spirituality in Ben Okri\'s The Famished Road." Research in African Literatures, vol. 36, no. 4 (2005), 1–21.','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ato Quayson, Transformations in Nigerian Writing (Oxford: James Currey, 1997).','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Matthew J. A. Green, "Dreams of Freedom: Magical Realism and Visionary Materialism in Okri and Blake", Romanticism, vol. 15, no. 1 (2009), 18–32.','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ben Obumselu, "Ben Okri\'s The Famished Road: A Re-Evaluation." Tydskrif vir Letterkunde, vol. 48, no. 1 (2011), 26–38.','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ben Okri, Mental Fight: An Anti-Spell for the 21st Century (London: Phoenix House, 1999), 1.','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Famished Road (1991)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dangerous Love (1996)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Starbook (2007)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Ben_Okri']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1976: Coming Through Slaughter (also see "Other" section, 1980, below), Toronto: Anansi ISBN&#160;0-393-08765-4&#160;; New York: W. W. Norton, 1977&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1970: The Collected Works of Billy the Kid: Left-Handed Poems (also see "Other" section, 1973, below), Toronto: Anansi&#91;19&#93; ISBN&#160;0-88784-018-3&#160;; New York: Berkeley, 1975','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1978: Elimination Dance/La danse eliminatoire, Ilderton: Nairn Coldstream; revised edition, Brick, 1980&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1979: There\'s a Trick with a Knife I\'m Learning to Do: Poems, 1963-1978, New York: W. W. Norton (New York, NY), 1979&#91;18&#93; ISBN&#160;0-393-01191-7, ISBN&#160;0-393-01200-Xpublished as Rat Jelly, and Other Poems, 1963-1978, London, United Kingdom: Marion Boyars, 1980&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1984: Secular Love, Toronto: Coach House Press, ISBN&#160;0-88910-288-0, ISBN&#160;0-393-01991-8&#160;; New York: W. W. Norton, 1985&#91;20&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1989: The Cinnamon Peeler: Selected Poems, London, United Kingdom: Pan; New York: Knopf, 1991&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1998: Handwriting, Toronto: McClelland &amp; Stewart; New York: Knopf, 1999&#91;18&#93; ISBN&#160;0-375-40559-3','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['published as Rat Jelly, and Other Poems, 1963-1978, London, United Kingdom: Marion Boyars, 1980&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1971: The Broken Ark, animal verse; Ottawa: Oberon; revised as A Book of Beasts, 1979&#91;18&#93; ISBN&#160;0-88750-050-1','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1979: A Book of Beasts, animal verse; Ottawa: Oberon; revision of The Broken Ark, 1971&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1989: With Russell Banks and David Young, Brushes with Greatness: An Anthology of Chance Encounters with Greatness, Toronto: Coach House, 1989&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2000: Edited with Michael Redhill, Esta Spalding and Linda Spalding, Lost Classics, Toronto: Knopf Canada ISBN&#160;0-676-97299-3&#160;; New York: Anchor, 2001','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1973: The Collected Works of Billy the Kid (play; based on his poetry; see "Poetry" section, 1970, above), produced in Stratford, Ontario; produced in New York, 1974; produced in London, England, 1984&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['1980: Coming through Slaughter (play based on his novel; see "Novels" section, 1976, above), first produced in Toronto&#91;18&#93;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Aaron, Jane (2016). The compact reader. Macmillan Education. p.&#160;63.&#160;','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h "Michael Ondaatje." In An Anthology of Canadian Literature in English, edited by Donna Bennett and Russell Brown, 928-30. 3rd ed. Toronto, ON: Oxford University Press, 2010.','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d "(Philip) Michael Ondaatje." In Gale Online Encyclopedia. Detroit: Gale, 2016. Literature Resource Center (accessed November 30, 2016)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c "Michael Ondaatje’s Passage From Ceylon". New York Times, By LIESL SCHILLINGER OCT. 14, 2011','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "How Michael Ondaatje and Daniel Brooks made \'Divisadero\' into a play". Kate Taylor, Toronto — The Globe and Mail, Feb. 04, 2011','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "New spider species named for Michael Ondaatje".  Shyam Selvadurai CBC Books. August 10, 2016','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "C$80,000 Griffin Poetry Prize Launched by Renowned Literary Figures: Margaret Atwood, Robert Hass, Michael Ondaatje, Robin Robertson and David Young", griffinpoetryprize.com, September 6, 2000.','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h i j k l m n o p q r s t u v w x y z aa ab ac ad Web page titled "Archive: Michael Ondaatje (1943- )" at the Poetry Foundation website, accessed 7 May 2008','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Comparative Cultural Studies and Michael Ondaatje\'s Writing. Ed. Steven Tötösy de Zepetnek. West Lafayette: Purdue University Press, 2005. ISBN&#160;1-55753-378-4','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Barbour, Douglas. Michael Ondaatje. New York: Twayne, 1993. ISBN&#160;0-8057-8290-7','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jewinski, Ed. Michael Ondaatje: Express Yourself Beautifully. Toronto: ECW, 1994. ISBN&#160;1-55022-189-2','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tötösy de Zepetnek, Steven (斯蒂文·托托西演). 文学研究的合法化: 一种新实用主义 ·整体化和经主 义文学与文化研究方法 (Legitimizing the Study of Literature: A New Pragmatism and the Systemic Approach to Literature and Culture). Trans. Ma Jui-ch\'i (马瑞琪翻). Beijing: Peking University Press, 1997. 111-34. ISBN&#160;7-301-03482-2','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tötösy de Zepetnek, Steven. "Cultures, Peripheralities, and Comparative Literature." Comparative Literature: Theory, Method, Application. By Steven Tötösy de Zepetnek. Amsterdam: Rodopi, 1998. 150-65. ISBN&#160;90-420-0534-3','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Henderson (May 2, 2016). "Ondaatje wins St. Louis Literary Award". St. Louis Post-Dispatch. Retrieved July 22, 2016.','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The Book of Secrets (1994)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, A Fine Balance (1995)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, Alias Grace (1996)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, Barney\'s Version (1997)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Love of a Good Woman (1998)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bonnie Burnard, A Good House (1999)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost / David Adams Richards, Mercy among the Children (2000)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke, The Polished Hoe (2002)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The In-Between World of Vikram Lall (2003)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Runaway (2004)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Bergen, The Time in Between (2005)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vincent Lam, Bloodletting &amp; Miraculous Cures (2006)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Hay, Late Nights on Air (2007)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Boyden, Through Black Spruce (2008)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Linden MacIntyre, The Bishop\'s Man (2009)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Johanna Skibsrud, The Sentimentalists (2010)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Esi Edugyan, Half-Blood Blues (2011)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Will Ferguson, 419 (2012)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lynn Coady, Hellgoing (2013)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sean Michaels, Us Conductors (2014)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['André Alexis, Fifteen Dogs (2015)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Redhill, Bellevue Square (2017)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bertram Brooker, Think of the Earth (1936)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Laura Salverson, The Dark Weaver (1937)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Swiss Sonata (1938)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Franklin D. McDowell, The Champlain Road (1939)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ringuet, Thirty Acres (1940)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Sullivan, Three Came to Ville Marie (1941)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G. Herbert Sallans, Little Man (1942)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Head Raddall, The Pied Piper of Dipper Creek (1943)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Earth and High Heaven (1944)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, Two Solitudes (1945)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winifred Bambrick, Continental Revue (1946)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, The Tin Flute (1947)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Precipice (1948)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Child, Mr. Ames Against Time (1949)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Germaine Guèvremont, The Outlander (1950)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morley Callaghan, The Loved and the Lost (1951)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, The Pillar (1952)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, Digby (1953)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Igor Gouzenko, The Fall of a Titan (1954)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Shapiro, The Sixth of June (1955)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adele Wiseman, The Sacrifice (1956)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, Street of Riches (1957)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colin McDougall, Execution (1958)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Watch That Ends the Night (1959)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Luck of Ginger Coffey (1960)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Malcolm Lowry, Hear Us O Lord from Heaven Thy Dwelling Place (1961)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kildare Dobbs, Running to Paradise (1962)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh Garner, Hugh Garner\'s Best Stories (1963)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas LePan, The Deserter (1964)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1965)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, A Jest of God (1966)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1967)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Dance of the Happy Shades (1968)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Kroetsch, The Studhorse Man (1969)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dave Godfrey, The New Ancestors (1970)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, St. Urbain\'s Horseman (1971)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson Davies, The Manticore (1972)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, The Temptations of Big Bear (1973)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, The Diviners (1974)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Great Victorian Collection (1975)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marian Engel, Bear (1976)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Timothy Findley, The Wars (1977)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Who Do You Think You Are? (1978)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Hodgins, The Resurrection of Joseph Bourne (1979)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Bowering, Burning Water (1980)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mavis Gallant, Home Truths: Selected Canadian Stories (1981)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Man Descending (1982)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leon Rooke, Shakespeare\'s Dog (1983)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josef Skvorecky, The Engineer of Human Souls (1984)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, The Handmaid\'s Tale (1985)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Progress of Love (1986)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Kelly, A Dream Like Mine (1987)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Adams Richards, Nights Below Station Street (1988)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Quarrington, Whale Music (1989)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, Lives of the Saints (1990)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, Such a Long Journey (1991)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, The English Patient (1992)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Shields, The Stone Diaries (1993)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, A Discovery of Strangers (1994)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greg Hollingshead, The Roaring Girl (1995)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, The Englishman\'s Boy (1996)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Urquhart, The Underpainter (1997)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Diane Schoemperlen, Forms of Devotion (1998)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Matt Cohen, Elizabeth and After (1999)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost (2000)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gloria Sawai, A Song for Nettie Johnson (2002)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas Glover, Elle (2003)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miriam Toews, A Complicated Kindness (2004)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Gilmour, A Perfect Night to Go to China (2005)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Behrens, The Law of Dreams (2006)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Divisadero (2007)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, The Origin of Species (2008)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Pullinger, The Mistress of Nothing (2009)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dianne Warren, Cool Water (2010)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick deWitt, The Sisters Brothers (2011)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Linda Spalding, The Purchase (2012)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton, The Luminaries (2013)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas King, The Back of the Turtle (2014)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Daddy Lenin and Other Stories (2015)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Thomas Hynes, We\'ll All Be Burnt in Our Beds Some Night (2017)','Michael_Ondaatje']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Smile (2017)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Commitments (1987, 1991 film)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Snapper (1990, 1993 film)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Van (1991)&#160;; 1996 film)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paddy Clarke Ha Ha Ha (1993)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Guts (2013)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Woman Who Walked into Doors (1996)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paula Spencer (2006)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Star Called Henry (1999)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oh, Play That Thing! (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Dead Republic (2010)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Recuperation" (2003)&#91;24&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Teaching"  (2007)&#91;26&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Dog" (2007)&#91;27&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Bullfighting" (2008)&#91;28&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Child" (2004)&#91;29&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Sleep" (2008).&#91;30&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Bandstand" (2009)&#91;31&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Ash" (2010)&#91;32&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Brilliant" (2011)&#91;33&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not Just for Christmas (1999) (part of the Open Door Series of novellas for adult literacy)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mad Weekend (2006) (part of the Open Door Series)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two Pints (2012)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two More Pints (2014)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dead Man Talking (2015) (part of the Quick Reads Initiative)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brownbread (1987)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War (1989)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Woman Who Walked into Doors (2003)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rewrite of The Playboy of the Western World (2007) with Bisi Adigun','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When Brendan Met Trudy (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['New Boy (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Family (1994)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wilderness (2007)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Her Mother\'s Face (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Greyhound of a Girl (2011)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giggler Treatment (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rover Saves Christmas (2001)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Meanwhile Adventures (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rover and the Big Fat Baby (2016)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rory and Ita (2002) — About Doyle\'s parents.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Second Half (2014) - memoirs of Roy Keane&#91;34&#93;','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Angela Bourke, Maeve Brennan: Homesick at the New Yorker, 2004, Counterpoint Books, New York.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Roddy Doyle. (2012). In Contemporary Authors Online. Detroit: Gale. Retrieved from  http://go.galegroup.com/ps/i.do?id=GALE%7CH1000114801&amp;v=2.1&amp;u=ucdavis&amp;it=r&amp;p=LitRC&amp;sw=w','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Roddy Doyle’s ‘The Guts’ named novel of the year Irish Times, 2013-11-27.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ An insomniac is constantly plagued by intrusive visions of a boy. McSweeney\'s Enchanted Chamber of Astonishing Stories, 2004.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Roddy Doyle." Contemporary Authors Online. Detroit: Gale, 2012. [1]','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Abel, Marco. "Roddy Doyle." British Novelists Since 1960: Second Series. Ed. Merritt Moseley. Detroit: Gale Research, 1998. Dictionary of Literary Biography Vol. 194. [2]','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Allen Randolph, Jody. "Roddy Doyle, August 2009." Close to the Next Moment: Interviews from a Changing Ireland. Manchester: Carcanet, 2010.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Boland, Eavan. "Roddy Doyle." Irish Writers on Writing. San Antonio: Trinity University Press, 2007.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['McArdle, Niall. An Indecency Decently Put: Roddy Doyle and Contemporary Irish Fiction. (M.A. thesis, 1994, University College, Dublin)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['McCarthy, Dermot. Roddy Doyle: Raining on the Parade. Dublin: Liffey Press, 2003.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mouchel-Vallon, Alain. La réécriture de l\'histoire dans les Romans de Roddy Doyle, Dermot Bolger et Patrick McCabe  (PhD thesis, 2005, Reims University, France). [3]','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reynolds, Margaret and Jonathan Noakes. Roddy Doyle: The Essential Guide. London: Random House, 2004.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['White, Caramine. Reading Roddy Doyle. Syracuse: Syracuse UP, 2001.','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reviews of Paula Spencer (2006)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Commitments (1987)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Snapper (1990)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Van (1991)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Family (TV, 1994)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Woman Who Walked into Doors (1996)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paula Spencer (2006)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Star Called Henry (1999)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oh, Play That Thing! (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Dead Republic (2010)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not Just for Christmas (1999)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giggler Treatment (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rover Saves Christmas (2001)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Meanwhile Adventures (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wilderness (2007)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Her Mother\'s Face (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paddy Clarke Ha Ha Ha (1993)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Guts (2013)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Smile (2017)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Deportees (2008) Bullfighting (2011)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Commitments (1991)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Snapper (1993)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Van (1996)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When Brendan Met Trudy (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['New Boy (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brownbread (1987)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War (1989)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Woman Who Walked into Doors (2003)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Playboy of the Western World (2007)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Commitments (2013)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1983)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruce Robinson (1984)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Condon and Janet Roach (1985)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kurt Luedtke (1986)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claude Berri and Gérard Brach (1987)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jean-Claude Carrière and Philip Kaufman (1988)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Hampton (1989)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nicholas Pileggi and Martin Scorsese (1990)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dick Clement, Roddy Doyle and Ian La Frenais (1991)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Tolkin (1992)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Zaillian (1993)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Attanasio (1994)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Hodge (1995)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anthony Minghella (1996)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Baz Luhrmann and Craig Pearce (1997)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elaine May (1998)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neil Jordan (1999)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stephen Gaghan (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ted Elliott, Terry Rossio, Roger S. H. Schulman and Joe Stillman (2001)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charlie Kaufman and Donald Kaufman (2002)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philippa Boyens, Peter Jackson and Fran Walsh (2003)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexander Payne and Jim Taylor (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Larry McMurtry and Diana Ossana (2005)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jeremy Brock and Peter Morgan (2006)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald Harwood (2007)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Beaufoy (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jason Reitman and Sheldon Turner (2009)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Sorkin (2010)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bridget O\'Connor and Peter Straughan (2011)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David O. Russell (2012)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steve Coogan and Jeff Pope (2013)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anthony McCarten (2014)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adam McKay and Charles Randolph (2015)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Luke Davies (2016)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Ivory (2017)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Roddy_Doyle']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Old Pub Near The Angel (1973)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Three Glasgow Writers (1976, with Alex Hamilton and Tom Leonard)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Short Tales from the Night Shift (1978)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not Not While The Giro (1983)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lean Tales (1985, with Alasdair Gray and Agnes Owens)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greyhound for Breakfast (1987) (winner of the Cheltenham Prize for Literature)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Burn (1991)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seven Stories (CD audio recording read by Kelman, AK Press, 1996)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Times (1998)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Where I Was  (Selection of stories from Lean Tales; Penguin, 2005).','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['If It Is Your Life (2010)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Lean Third (2014)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['That Was a Shiver (2017)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Busconductor Hines (1984)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Chancer (1985)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Disaffection (1989)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['How Late It Was, How Late (1994) (winner of the Booker Prize)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Translated Accounts (2001)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['You Have to Be Careful in the Land of the Free (2004)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kieron Smith, Boy (2008)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mo said she was quirky (2012)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dirt Road (2016)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['And The Judges Said (2002)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hardie and Baird &amp; Other Plays (1991)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An East End Anthology, ed. Jim Kelman (1988)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh Savage, Born up a Close: Memoirs of a Brigton boy, ed. James Kelman (2006)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dietmar Böhnke, Kelman Writes Back (1999)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['H. Gustav Klaus, James Kelman: Writers and their Work (2004)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J.D. Macarthur, Claiming Your Portion of Space\': A study of the short stories of James Kelman (2007)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simon Kovesi, James Kelman (Manchester University Press, 2007)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scott Hames (Ed.), The Edinburgh Companion to James Kelman (Edinburgh University Press, 2010) ]','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mitch Miller &amp; Johnny Rodger, The Red Cockatoo: James Kelman and the Art of Commitment (Sandstone Press, 2011)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aaron Kelly, James Kelman: Politics and Aesthetics (Peter Lang, 2013)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kelman, James (1992). The Importance of Glasgow in my Work (in Some Recent Attacks). Stirling: AK Press. pp.&#160;78–84. ISBN&#160;1-873176-80-5.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kravitz, Peter (1997). The Picador book of contemporary Scottish fiction. Picador. pp.&#160;xiii–xv. ISBN&#160;0330335502.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kelman, James (1992-01-01).  Kelman, James, ed. The Importance of Glasgow in My Work, IN: Some recent attacks: essays cultural &amp; political (PDF). Stirling: AK Press. pp.&#160;78–84. ISBN&#160;1873176805.&#160;&#91;permanent dead link&#93;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Kelman, james (1992). "Foreword". Some Recent Attacks: Essays Cultural and Political (1 ed.). Stirling: AK Press. pp.&#160;1–4. ISBN&#160;1-873176-80-5.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kelman, James (2012-08-10). And the Judges Said&amp;…: Essays. Birlinn. ISBN&#160;9780857901415.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kelman, James (2012-08-10). And the Judges Said&amp;…: Essays. Birlinn. ISBN&#160;9780857901415.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kelman, James (2012-08-10). And the Judges Said&amp;…: Essays. Birlinn. ISBN&#160;9780857901415.&#160;','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['How Late It Was, How Late: a play created by Rude Mechanicals in Austin, Texas (2003)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Busconductor Hines (1984)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Chancer (1985)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Disaffection (1989)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['How Late It Was, How Late (1994)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Translated Accounts (2001)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['You Have to Be Careful in the Land of the Free (2004)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kieron Smith, Boy (2008)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mo Said She Was Quirky (2012)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dirt Road (2016)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not Not While The Giro (1983)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greyhound for Breakfast (1988)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Times (1998)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Burn (1991)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['If It Is Your Life (2010)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Some Recent Attacks (1992)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['And The Judges Said (2002)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','James_Kelman']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Union Street (1982)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blow Your House Down (1984)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Man Who Wasn\'t There (1988)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Regeneration Trilogy:Regeneration (1991) The Eye in the Door (1993) The Ghost Road (1995)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Another World (1998)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Border Crossing (2001)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Double Vision (2003)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life Class (2007)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Toby\'s Room (2012)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Noonday (2015)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Silence of the Girls (2018)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Regeneration (1991)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye in the Door (1993)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ghost Road (1995)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Brannigan, John (2005). Pat Barker: Contemporary British Novelists. Manchester University Press. pp.&#160;xi and 6. ISBN&#160;978-0-7190-6577-4.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Celebrated Alumni: UK", www.lse.ac.uk (2007) Retrieved 17 January 2008.','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Nixon, Rob (2004). "An Interview With Pat Barker". Contemporary Literature. 45 (no. 1).&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lee, Hermione (2012-08-10). "Toby\'s Room by Pat Barker – review". the Guardian. Retrieved 2018-08-20.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Monteith, Sharon (2001). Pat Barker (1. publ. ed.). Devon: Northcote House. ISBN&#160;978-0-7463-0900-1.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Monteith, Sharon; Jolly, Margaretta; Yousaf, Nahem;  et al. (2005). Critical perspectives on Pat Barker. Columbia (S.C.): University of South Carolina press. ISBN&#160;1-57003-570-9.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rawlinson, Mark (2008). Pat Barker. New York, NY: Palgrave Macmillan. ISBN&#160;0-230-00180-7.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brannigan, John (2005). Pat Barker. Manchester: Manchester Univ. Press. ISBN&#160;0-7190-6576-3.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterman, David (2009). Pat Barker and the mediation of social reality. Amherst, New York: Cambria Press. ISBN&#160;1-60497-649-7.&#160;','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crumb Borne by Clive Barry (1965)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Dear Green Place by Archie Hind (1966)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winter Journey by Eva Figes (1967)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Song and a Dance by P. J. Kavanagh (1968)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Lazarus by Maurice Leitch (1969)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When Did You Last See your Father? by Margaret Blount (1970)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Chapel by Thomas Kilroy (1971)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G by John Berger (1972)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In the Country of the Skin by Peter Redgrove (1973)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bottle Factory Outing by Beryl Bainbridge (1974)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friends and Romans by Sylvia Clayton (1975)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Falstaff by Robert Nye (1976)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Condition of Muzak by Michael Moorcock (1977)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Murderer by Roy Heath (1978)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Night in Tunisia by Neil Jordan and The House of Hunger by Dambudzo Marechera (1979)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Month in the Country by J. L. Carr (1980)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kepler by John Banville (1981)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Where I Used to Play on the Green by Glyn Hughes (1982)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterland by Graham Swift (1983)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Empire of the Sun by J. G. Ballard (1984)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hawksmoor by Peter Ackroyd (1985)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Continent by Jim Crace (1986)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Levels by Peter Benson (1987)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Desserts by Lucy Ellmann (1988)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rosehill: Portrait from a Midlands City by Carol Lake (1989)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shape-Shifter by Pauline Melville (1990)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil\'s Own Work by Alan Judd (1991)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Things by Alasdair Gray (1992)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye in the Door by Pat Barker (1993)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Debatable Land by Candia McWilliam (1994)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heart\'s Journey in Winter by James Buchan (1995)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reading in the Dark by Seamus Deane (1996)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fugitive Pieces by Anne Michaels (1997)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trumpet by Jackie Kay (1998)','Pat_Barker']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sweet-Shop Owner (1980)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shuttlecock (1981) -- winner of the 1983 Geoffrey Faber Memorial Prize','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterland (1983)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Out of This World (1988)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ever After (1992)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Last Orders (1996) -- winner of the 1996 Booker Prize','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Light of Day (2003)--long listed for the Man Booker Prize.','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tomorrow (2007)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wish You Were Here (2011)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Making an Elephant: Writing from Within (2009)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Learning to Swim (1982)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chemistry (2008)&#91;6&#93;','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['England and Other Stories (2014)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ McGrath, Patrick. "Graham Swift" Archived 16 January 2013 at the Wayback Machine., BOMB Magazine Spring, 1986. Retrieved 2012-11-26.','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sweet-Shop Owner (1980)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shuttlecock (1981)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterland (1983)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Out of This World (1988)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ever After (1992)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Last Orders (1996)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Light of Day (2003)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tomorrow (2007)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wish You Were Here (2011)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crumb Borne by Clive Barry (1965)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Dear Green Place by Archie Hind (1966)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winter Journey by Eva Figes (1967)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Song and a Dance by P. J. Kavanagh (1968)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Lazarus by Maurice Leitch (1969)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When Did You Last See your Father? by Margaret Blount (1970)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Chapel by Thomas Kilroy (1971)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G by John Berger (1972)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In the Country of the Skin by Peter Redgrove (1973)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bottle Factory Outing by Beryl Bainbridge (1974)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friends and Romans by Sylvia Clayton (1975)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Falstaff by Robert Nye (1976)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Condition of Muzak by Michael Moorcock (1977)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Murderer by Roy Heath (1978)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Night in Tunisia by Neil Jordan and The House of Hunger by Dambudzo Marechera (1979)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Month in the Country by J. L. Carr (1980)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kepler by John Banville (1981)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Where I Used to Play on the Green by Glyn Hughes (1982)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterland by Graham Swift (1983)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Empire of the Sun by J. G. Ballard (1984)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hawksmoor by Peter Ackroyd (1985)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Continent by Jim Crace (1986)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Levels by Peter Benson (1987)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Desserts by Lucy Ellmann (1988)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rosehill: Portrait from a Midlands City by Carol Lake (1989)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shape-Shifter by Pauline Melville (1990)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil\'s Own Work by Alan Judd (1991)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Things by Alasdair Gray (1992)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye in the Door by Pat Barker (1993)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Debatable Land by Candia McWilliam (1994)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heart\'s Journey in Winter by James Buchan (1995)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reading in the Dark by Seamus Deane (1996)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fugitive Pieces by Anne Michaels (1997)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trumpet by Jackie Kay (1998)','Graham_Swift']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Man Booker Prize (1997)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sydney Peace Prize (2004)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The God of Small Things. Flamingo, 1997. ISBN&#160;0-00-655068-1','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ministry of Utmost Happiness. Hamish Hamilton, 2017. ISBN&#160;0-24-130397-4','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The End of Imagination. Kottayam: D.C. Books, 1998. ISBN&#160;81-7130-867-8','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cost of Living. Flamingo, 1999. ISBN&#160;0-375-75614-0','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Greater Common Good. Bombay: India Book Distributor, 1999. ISBN&#160;81-7310-121-3','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Algebra of Infinite Justice. Flamingo, 2002. ISBN&#160;0-00-714949-2','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Power Politics. Cambridge: South End Press, 2002. ISBN&#160;0-89608-668-2','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War Talk. Cambridge: South End Press, 2003. ISBN&#160;0-89608-724-7','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Ordinary Person\'s Guide To Empire. Consortium, 2004. ISBN&#160;0-89608-727-1','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Checkbook and the Cruise Missile: Conversations with Arundhati Roy. Interviews by David Barsamian. Cambridge: South End Press, 2004. ISBN&#160;0-89608-710-7','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Shape of the Beast: Conversations with Arundhati Roy. New Delhi: Penguin, 2008. ISBN&#160;978-0-670-08207-0','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Listening to Grasshoppers: Field Notes on Democracy. New Delhi: Penguin, 2010. ISBN&#160;978-0-670-08379-4','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Broken Republic: Three Essays. New Delhi: Hamish Hamilton, 2011. ISBN&#160;978-0-670-08569-9','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Walking with the Comrades. New Delhi: Penguin, 2011. ISBN&#160;978-0-670-08553-8','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kashmir: The Case for Freedom. Verso, 2011. ISBN&#160;1-844-67735-4','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Capitalism: A Ghost Story. Chicago: Haymarket Books, 2014. ISBN&#160;978-1-60846-385-5&#91;94&#93;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Things that Can and Cannot Be Said: Essays and Conversations (with John Cusack). Chicago: Haymarket Books, 2016. ISBN&#160;978-1-608-46717-4','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Doctor and the Saint: Caste, Race, and Annihilation of Caste, the Debate Between B.R. Ambedkar and M.K. Gandhi. Chicago: Haymarket Books, 2017. ISBN&#160;978-1-608-46797-6','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Arundhati Roy, 1959–". The South Asian Literary Recordings Project. Library of Congress, New Delhi Office. 15 November 2002. Archived from the original on 4 April 2009. Retrieved 6 April 2009.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Roy, Amitabh (2005). The God of Small Things: A Novel of Social Commitment. Atlantic. pp.&#160;37–38. ISBN&#160;978-81-269-0409-9.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jean Drezet (24 October 2015). "The dark underbelly of state capitalism in India". The Lancet. 386 (10004): 1620. doi:10.1016/S0140-6736(15)00543-7.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Balvannanadhan, Aïda (2007). Arundhati Roy\'s The God of Small Things. New Delhi: Prestige Books. ISBN&#160;81-7551-193-1.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bhatt, Indira; Indira Nityanandam (1999). Explorations: Arundhati Roy’s The God of Small Things. New Delhi: Creative Books. ISBN&#160;81-86318-56-9.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Politics of Design", in Ch\'ien, Evelyn Nien-Ming (2005). Weird English. Harvard University Press. pp.&#160;154–199. ISBN&#160;978-0-674-01819-8.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dhawan, R.K. (1999). Arundhati Roy: The Novelist Extraordinary. New Delhi: Prestige Books. ISBN&#160;81-7551-060-9.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dodiya, Jaydipsinh; Joya Chakravarty (1999). The Critical Studies of Arundhati Roy\'s The God of Small Things. New Delhi: Atlantic. ISBN&#160;81-7156-850-5.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Durix, Carole; Jean-Pierre Durix (2002). Reading Arundhati Roy\'s The God of Small Things. Dijon: Editions universitaires de Dijon. ISBN&#160;2-905965-80-0.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ghosh, Ranjan; Antonia Navarro-Tejero (2009). Globalizing Dissent: Essays on Arundhati Roy. New York: Routledge. ISBN&#160;978-0-415-99559-7.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mullaney, Julie (2002). Arundhati Roy\'s The God of Small Things: A Reader\'s Guide. New York: Continuum. ISBN&#160;0-8264-5327-9.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Navarro-Tejero, Antonia (2005). Gender and Caste in the Anglophone-Indian Novels of Arundhati Roy and Githa Hariharan: Feminist Issues in Cross-cultural Perspective. Lewiston: Edwin Mellen. ISBN&#160;0-7734-5995-2.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pathak, R. S. (2001). The Fictional World of Arundhati Roy. New Delhi: Creative Books. ISBN&#160;81-86318-84-4.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prasad, Murari (2006). Arundhati Roy: Critical Perspectives. Delhi: Pencraft International. ISBN&#160;81-85753-76-8.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roy, Amitabh (2005). The God of Small Things: A Novel of Social Commitment. Atlantic. pp.&#160;37–38. ISBN&#160;978-81-269-0409-9.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sharma, A. P. (2000). The Mind and the Art of Arundhati Roy: A Critical Appraisal of Her Novel, The God of Small Things. New Delhi: Minerva. ISBN&#160;81-7662-120-X.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shashi, R. S.; Bala Talwar (1998). Arundhati Roy\'s The God of Small Things: Critique and Commentary. New Delhi: Creative Books. ISBN&#160;81-86318-54-2.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tickell, Alex (2007). Arundhati Roy\'s The God of Small Things. New York: Routledge. ISBN&#160;978-0-415-35842-2.&#160;','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy denounces Indian democracy by Atul Cowshish, Asian Tribune, 2006-07-06','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carreira, Shirley de S. G. "A representação da mulher em Shame, de Salman Rushdie, e O deus das pequenas coisas, de Arundathi Roy". In: MONTEIRO, Conceição &amp; LIMA, Tereza M. de O. ed. Rio de Janeiro: Caetés, 2005','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ch\'ien, Evelyn Nien-Ming, "The Politics of Design" in Weird English. Cambridge: Harvard UP, 2004; 154–199. Essay on Roy\'s language.','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy &#160;– interview on Al Jazeera English\'d Fault Lines, 2010-8-29 (video, 23 mins)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['S. L. Puram Sadanandan (1967)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pandit Anand Kumar (1968)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Puttanna Kanagal (1969)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Satyajit Ray (1970)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tapan Sinha (1971)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gulzar (1972)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mrinal Sen and Ashish Burman (1973)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Satyajit Ray (1974)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No Award (1975)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vijay Tendulkar (1976)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Satyadev Dubey, Shyam Benegal, Girish Karnad (1977)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['T. S. Ranga and T. S. Nagabharana (1978)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sai Paranjpye (1979)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mrinal Sen (1980)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['K. Balachander (1981)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mrinal Sen (1982)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G. V. Iyer (1983)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adoor Gopalakrishnan (1984)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bhabendra Nath Saikia (1985)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Budhdhadeb Dasgupta (1986)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adoor Gopalakrishnan (1987)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1988)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Vasudevan Nair (1989)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['K. S. Sethumadhavan (1990)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Vasudevan Nair (1991)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Vasudevan Nair (1992)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Satyajit Ray (1993)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Vasudevan Nair (1994)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saeed Akhtar Mirza and Ashok Mishra (1995)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Agathiyan (1996)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rituparno Ghosh (1997)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ashok Mishra (1998)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madampu Kunjukuttan (1999)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bharathiraja (2000)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neelakanta (2001)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aparna Sen (2002)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Goutam Ghose (2003)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Manoj Tyagi and Nina Arora (2004)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prakash Jha, Manoj Tyagi and Shridhar Raghavan (2005)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Abhijat Joshi, Rajkumar Hirani and Vidhu Vinod Chopra (2006)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Feroz Abbas Khan (2007)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sachin Kundalkar (2008)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. F. Mathews and Harikrishna (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vetrimaaran (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nitesh Tiwari, Vikas Bahl, and Vijay Maurya (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sujoy Ghosh (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. Sheshadri (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Srijit Mukherji (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Juhi Chaturvedi and Himanshu Sharma (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Syam Pushkaran (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sajeev Pazhoor (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gopal Krishan Pai and Girish Kasaravalli (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anant Mahadevan and Sanjay Pawar (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Avinash Deshpande Nigdi (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bhavesh Mandalia and Umesh Shukla (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Panchakshari (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joshy Mangalath (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vishal Bhardwaj (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sanjay Krishnaji Patil (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jayaraj (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pandiraj (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sanjay Pawar (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Girish Kulkarni (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anjali Menon (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sumitra Bhave (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vishal Bhardwaj (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Juhi Chaturvedi and Himanshu Sharma (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tharun Bhascker Dhaassyam (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sambit Mohanty (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Guide by R. K. Narayan (1960)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Serpent and the Rope by Raja Rao (1964)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tribal World of Verrier Elwin by Verrier Elwin (1965)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shadow From Ladakh by Bhabani Bhattacharya (1967)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Artist in Life by Niharranjan Ray (1969)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morning Face by Mulk Raj Anand (1971)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scholar Extraordinary by Nirad C. Chaudhuri (1975)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jawaharlal Nehru by Sarvepalli Gopal (1976)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Azadi by Chaman Nahal (1977)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fire on the Mountain by Anita Desai (1978)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Inside the Haveli by Rama Mehta (1979)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On the Mother by K. R. Srinivasa Iyengar (1980)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Relationship by Jayanta Mahapatra (1981)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Last Labyrinth by Arun Joshi (1982)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Latter-Day Psalms by Nissim Ezekiel (1983)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Keeper of the Dead by Keki N. Daruwalla (1984)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Poems by Kamala Das (1985)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rich Like Us by Nayantara Sahgal (1986)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trapfalls In the Sky by Shiv K. Kumar (1987)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Golden Gate by Vikram Seth (1988)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Shadow Lines by Amitav Ghosh (1989)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['That Long Silence by Shashi Deshpande (1990)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Trotter-Nama by Allan Sealy (1991)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Our Trees Still Grow In Dehra by Ruskin Bond (1992)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['After Amnesia by G. N. Devy (1993)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Serendip by Dom Moraes (1994)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Memories of Rain by Sunetra Gupta (1996)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Final Solutions and Other Plays by Mahesh Dattani (1998)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Collected Poems by A. K. Ramanujan (1999)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cuckold by Kiran Nagarkar (2000)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rajaji: A Life by Rajmohan Gandhi (2001)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A New World by Amit Chaudhuri (2002)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Perishable Empire by Meenakshi Mukherjee (2003)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Mammaries of the Welfare State by Upamanyu Chatterjee (2004)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Algebra of Infinite Justice by Arundhati Roy (2005)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sari Shop by Rupa Bajwa (2006)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Disorderly Women by Malathi Rao (2007)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mahabharata: An Inquiry into the Human Condition by Chaturvedi Badrinath (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Rachel by Esther David (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['India after Gandhi by Ramachandra Guha (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['These Errors are Correct by Jeet Thayil (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Laburnum For My Head by Temsula Ao (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trying to Say Goodbye by Adil Jussawalla (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chronicle of a Corpse Bearer by Cyrus Mistry (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Em and the Big Hoom by Jerry Pinto (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black Hill by Mamang Dai (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Muhammad Yunus (1998)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Desmond Tutu (1999)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Xanana Gusmão (2000)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Deane (2001)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mary Robinson (2002)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hanan Ashrawi (2003)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (2004)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olara Otunnu (2005)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Irene Khan (2006)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hans Blix (2007)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Dodson (2008)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Pilger (2009)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vandana Shiva (2010)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Noam Chomsky (2011)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sekai Holland (2012)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cynthia Maung (2013)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Burnside (2014)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Gittoes (2015)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Naomi Klein (2016)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Black Lives Matter (2017)','Arundhati_Roy']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Stiglitz (2018)','Arundhati_Roy']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['2 Career

// 2.1 Early career: short stories and \'Ian Macabre\' phase, 1975–1987
// 2.2 Mid-career: mainstream success and Booker Prize win, 1988–2007
// 2.3 Later career: political works and continued success, 2008–present','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.1 Early career: short stories and \'Ian Macabre\' phase, 1975–1987','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.2 Mid-career: mainstream success and Booker Prize win, 1988–2007','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.3 Later career: political works and continued success, 2008–present','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cement Garden (1978)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Comfort of Strangers (1981)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Child in Time (1987)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Innocent (1990)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Black Dogs (1992)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Enduring Love (1997)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amsterdam (1998)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Atonement (2001)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saturday (2005)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Chesil Beach (2007)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Solar (2010)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Tooth (2012)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Children Act (2014)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nutshell (2016)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['First Love, Last Rites (1975) (Collection of short stories)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Between the Sheets (1978) (Collection of short stories)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Short Stories (1995) (Collection of short stories)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Purple Scented Novel (2016 in The New Yorker&#91;68&#93;; 2018 as a booklet commemorating McEwan\'s 70th birthday)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rose Blanche (1985)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Daydreamer (1994)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Flea\'s Birthday Celebration (1976)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Imitation Game (1980)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ploughman\'s Lunch (1983)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Soursweet (1988)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Son (1993)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Chesil Beach (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Children Act (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Or Shall We Die? (1983)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['For You (2008)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Last Day of Summer (1984)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cement Garden (1993)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Comfort of Strangers (1990)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Innocent (1993)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['First Love, Last Rites (1997)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Solid Geometry (2002)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Enduring Love (2004)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Atonement (2007)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Chesil Beach (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Children Act (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Child in Time (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jaillant, Lise. "Myth Maker: Malcolm Bradbury and the Creation of Creative Writing at UEA." New Writing: The International Journal for the Practice and Theory of Creative Writing (2016)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Dan Roberts, "Death of \'1.5m oldsters\' could swing second Brexit vote, says Ian McEwan", The Guardian, 12th of May, 2017','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byrnes, Christina (1995), Sex and Sexuality in Ian McEwan\'s Work, Nottingham, England: Pauper\'s Press. ISBN&#160;0-946650-56-X','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byrnes, Christina (2002), The Work of Ian McEwan: A Psychodynamic Approach, Nottingham, England: Paupers\' Press. ISBN&#160;0-946650-75-6','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byrnes, Bernie C. (2006), Ian McEwan\'s \'Atonement\' and \'Saturday\', Nottingham, England: Paupers\' Press. ISBN&#160;0-946650-90-X','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byrnes, Bernie C. (2008), McEwan\'s Only Childhood, Nottingham: Paupers\' Press. ISBN&#160;0-946650-94-2','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Byrnes, Bernie C. (2009), Ian McEwan\'s \'On Chesil Beach\': the transmutation of a secret, Nottingham: Paupers\' Press. ISBN&#160;9780946650972','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Childs, Peter (2005), The Fiction of Ian McEwan (Readers\' Guides to Essential Criticism), Palgrave Macmillan. ISBN&#160;1-4039-1909-7','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['D\'Eliva, Gaetano, and Christopher Williams, (1986), La Nuova Letteratura Inglese Ian McEwan, Schena Editore.','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dodou, Katherina (2009), Childhood Without Children: Ian McEwan and the Critical Study of the Child, Uppsala, Sweden: Uppsala University. ISBN&#160;978-91-506-2112-9','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Groes, Sebastian (2009), Ian McEwan, Continuum. ISBN&#160;978-0-8264-9722-2','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Head, Dominic, (2007), Ian McEwan, Manchester University Press. ISBN&#160;978-0-7190-6657-3','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Effects of Conflict in the Novels of Ian McEwan. Jensen, Morten H. (2005)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Malcolm, David (2002), Understanding Ian McEwan, University of South Carolina. ISBN&#160;1-57003-436-2','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Möller, Swantje (2011), Coming to Terms with Crisis: Disorientation and Reorientation in the Novels of Ian McEwan, Winter. ISBN&#160;978-3-8253-5880-8','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pedot, Richard (1999), Perversions Textuelles dans la Fiction d\'Ian McEwan, Editions l\'Harmattan.','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reynolds, Margaret, and Jonathan Noakes, (2002), Ian McEwan: The Essential Guide, Vintage. ISBN&#160;0-09-943755-4','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roberts, Ryan (2010), Conversations with Ian McEwan, University Press of Mississippi. ISBN&#160;978-1-60473-420-1','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rooney, Anne (2006), Atonement, York Notes. ISBN&#160;1-4058-3561-3','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rooney, Anne (2010), Pissing in the Wind?, The New Humanist, May 2010','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ryan, Kiernan (1994), Ian McEwan (Writers and Their Work), Northcote House. ISBN&#160;0-7463-0742-X','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Slay Jr., Jack (1996), Ian McEwan (Twayne\'s English Authors Series), Twayne Publishers. ISBN&#160;0-8057-4578-5','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Williams, Christopher (1993) Ian McEwan\'s The Cement Garden and the Tradition of the Child/Adolescent as \'I-Narrator Biblioteca della Ricerca, Schena Editore.','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wells, Lynn, (2010) Ian McEwan, Palgrave Macmillan. ISBN&#160;1-4039-4274-9','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Cement Garden (1978)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Comfort of Strangers (1981)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Child in Time (1987)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Innocent (1990)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Black Dogs (1992)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Enduring Love (1997)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amsterdam (1998)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Atonement (2001)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saturday (2005)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Chesil Beach (2007)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Solar (2010)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Tooth (2012)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Children Act (2014)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nutshell (2016)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['First Love, Last Rites (1975)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Between the Sheets (1978)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rose Blanche (1985)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Daydreamer (1994)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Flea\'s Birthday Celebration (1976)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Imitation Game (1980)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Solid Geometry (2002)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ploughman\'s Lunch (1983)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Soursweet (1988)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Good Son (1993)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['On Chesil Beach (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Children Act (2017)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Ian_McEwan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Ian_McEwan']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['2 Awards and recognition

// 2.1 Booker Prizes, 1983 and 1999
// 2.2 Nobel Prize in Literature, 2003
// 2.3 Other awards and recognition','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.1 Booker Prizes, 1983 and 1999','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2.2 Nobel Prize in Literature, 2003','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Attridge, Derek (2004). J. M. Coetzee and the Ethics of Reading: Literature in the Event. Chicago: University of Chicago Press. p.&#160;94. ISBN&#160;978-0-226-03117-0.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d e f g h Head, Dominic (2009). The Cambridge Introduction to J. M. Coetzee. Cambridge: Cambridge University Press. pp.&#160;1–2. ISBN&#160;0-521-68709-8.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Richmond, Chris (2007). "John M. Coetzee".  In Badge, Peter. Nobel Faces: A Gallery of Nobel Prize Winners. Weinheim: Wiley-VCH. pp.&#160;428–429. ISBN&#160;3-527-40678-6. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b O\'Neil, Patrick M. (2004). Great World Writers: Twentieth Century. London: Marshall Cavendish. pp.&#160;225–244. ISBN&#160;0-7614-7468-4. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Killam, Douglas; Kerfoot, Alicia L. (2007). "Coetzee, J(ohn) M(axwell)". Student Encyclopedia of African Literature. Westport, CT: Greenwood. pp.&#160;92–93. ISBN&#160;0-313-33580-X. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted in J.C. Kannemeyer (2012), J.M. Coetzee: A Life in Writing, Scribe, p. 583.','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gallagher, Susan (1991). A Story of South Africa: J. M. Coetzee\'s Fiction in Context. Cambridge, MA: Harvard University Press. p.&#160;194. ISBN&#160;0-674-83972-2.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Scanlan, Margaret (1997). "Incriminating documents: Nechaev and Dostoevsky in J. M. Coetzee\'s The Master of St Petersburg". Philological Quarterly. 76 (4): 463–477.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Diala, Isidore (2002). "Nadine Gordimer, J. M. Coetzee, and André Brink: Guilt, expiation, and the reconciliation process in post-apartheid South Africa". Journal of Modern Literature. 25 (2): 50–68 [51]. doi:10.1353/jml.2003.0004.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Poyner, Jane (2000). "Truth and Reconciliation in JM Coetzee\'s Disgrace (novel)". Scrutiny2: Issues in English Studies in Southern Africa. 5 (2): 67–77. doi:10.1080/18125440008565972.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Poyner, Jane, ed. (2006). "J. M. Coetzee in Conversation with Jane Poyner". J. M. Coetzee and the Idea of the Public Intellectual. Athens: Ohio University Press. p.&#160;22. ISBN&#160;0-8214-1687-1. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jolly, Rosemary (2006). "Going to the dogs: Humanity in J. M. Coetzee\'s Disgrace, The Lives of Animals, and South Africa\'s Truth and Reconciliation Commission".  In Poyner, Jane. J. M. Coetzee and the Idea of the Public Intellectual. Athens, OH: Ohio University Press. p.&#160;149. ISBN&#160;0-8214-1687-1. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Coetzee, J. M. (1992).  Attwell, David, ed. Doubling the Point: Essays and Interviews. Harvard University Press: Cambridge, MA. p.&#160;394. ISBN&#160;0-674-21518-4. Retrieved 12 January 2014.&#160;','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Halford, James, "Southern Conversations: J.M. Coetzee in Buenos Aires", Sydney Review of Books, February 28, 2017.','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lives of Animals, delivered for The Tanner Lectures on Human Values, Princeton, 1997','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"A Word from J. M. Coetzee", address read by Hugo Weaving at the opening of the exhibition "Voiceless: I Feel Therefore I Am" by Voiceless: The Animal Protection Institute, February 22, 2007, Sherman Galleries, Sydney, Australia','J._M._Coetzee']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Senior (1987)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Festus Iyayi (1988)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Janet Frame (1989)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler (1990)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1992)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vikram Seth (1994)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louis de Bernières (1995)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1996)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Earl Lovelace (1997)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (2000)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2002)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke (2003)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caryl Phillips (2004)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrea Levy (2005)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Grenville (2006)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lloyd Jones (2007)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lawrence Hill (2008)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christos Tsiolkas (2009)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rana Dasgupta (2010)','J._M._Coetzee']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aminatta Forna (2011)','J._M._Coetzee']);
		  
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
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Governor General\'s Award, (1966, 1985)&#91;121&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Companion of the Order of Canada, 1981&#91;122&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guggenheim fellowship, 1981&#91;123&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Los Angeles Times Fiction Award, 1986&#91;124&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['American Humanist Association Humanist of the Year, 1987 &#91;125&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nebula Award, 1986 and Prometheus Award, 1987 nominations, both science fiction awards.&#91;126&#93;&#91;127&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arthur C. Clarke Award for best Science Fiction, 1987&#91;128&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Foreign Honorary Member of the American Academy of Arts and Sciences, 1988&#91;129&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Canadian Booksellers Association Author of the Year, 1989','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trillium Book Award, 1991, 1993, 1995&#91;130&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Government of France\'s Chevalier dans l\'Ordre des Arts et des Lettres, 1994&#91;131&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helmerich Award, 1999, by the Tulsa Library Trust.&#91;132&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize, 2000&#91;133&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kenyon Review Award for Literary Achievement, 2007&#91;134&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prince of Asturias Award for Literature, 2008&#91;135&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nelly Sachs Prize, Germany, 2010&#91;136&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dan David Prize, Israel, 2010&#91;137&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Queen Elizabeth II Diamond Jubilee Medal, Canada, 2012&#91;138&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Los Angeles Times Book Prize "Innovator\'s Award", 2012&#91;139&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gold medal of the Royal Canadian Geographical Society, 2015&#91;140&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Golden Wreath of Struga Poetry Evenings, Macedonia, 2016&#91;141&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Franz Kafka Prize, Czech Republic, 2017&#91;142&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peace Prize of the German Book Trade, Germany, 2017&#91;143&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trent University, 1973&#91;144&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Queen\'s University, 1974&#91;145&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Concordia University, 1979&#91;146&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Smith College, 1982&#91;147&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Toronto, 1983&#91;148&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Waterloo, 1985&#91;149&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Guelph, 1985&#91;150&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mount Holyoke College, 1985&#91;151&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Victoria College, 1987&#91;152&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Université de Montréal, 1991&#91;153&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Leeds, 1994&#91;131&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['McMaster University, 1996&#91;154&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lakehead University, 1998&#91;155&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Oxford, 1998&#91;156&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Algoma University, 2001&#91;157&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Cambridge, 2001&#91;158&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dartmouth College, 2004&#91;159&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harvard University, 2004&#91;160&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Université de la Sorbonne Nouvelle, 2005&#91;161&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National University of Ireland, Galway, 2011&#91;162&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ryerson University, 2012&#91;163&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Athens, 2013&#91;165&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['University of Edinburgh, 2014&#91;166&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oryx and Crake (2003, finalist for the 2003 Booker Prize and the 2003 Governor General\'s Award and shortlisted for the 2004 Orange Prize for Fiction.)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Year of the Flood (2009, Oryx and Crake companion, longlisted for the 2011 International Dublin Literary Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MaddAddam (2013) (Third novel in Oryx and Crake trilogy, Goodreads Choice for Best Science Fiction 2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Edible Woman (1969)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Surfacing (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lady Oracle (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life Before Man (1979, finalist for the Governor General\'s Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bodily Harm (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Handmaid\'s Tale (1985, winner of the 1987 Arthur C. Clarke Award and 1985 Governor General\'s Award, finalist for the 1986 Booker Prize)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cat\'s Eye (1988, finalist for the 1988 Governor General\'s Award and the 1989 Booker Prize)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Robber Bride (1993, finalist for the 1994 Governor General\'s Award and shortlisted for the James Tiptree, Jr. Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alias Grace (1996, winner of the 1996 Giller Prize, finalist for the 1996 Booker Prize and the 1996 Governor General\'s Award, shortlisted for the 1997 Orange Prize for Fiction)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blind Assassin (2000, winner of the 2000 Booker Prize and finalist for the 2000 Governor General\'s Award, shortlisted for the 2001 Orange Prize for Fiction.)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Penelopiad (2005, nominated for the 2006 Mythopoeic Fantasy Award for Adult Literature and longlisted for the 2007 International Dublin Literary Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Scribbler Moon (2014; written in 2014 as part of the Future Library project)&#91;57&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Heart Goes Last (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hag-Seed (2016) &#91;167&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dancing Girls (1977, winner of the St. Lawrence Award for Fiction and the award of The Periodical Distributors of Canada for Short Fiction)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murder in the Dark (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bluebeard\'s Egg (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wilderness Tips (1991, finalist for the Governor General\'s Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Good Bones (1992)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Good Bones and Simple Murders (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Labrador Fiasco (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tent (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moral Disorder (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stone Mattress (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Double Persephone (1961)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Circle Game (1964, winner of the 1966 Governor General\'s Award)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Expeditions (1965)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Speeches for Doctor Frankenstein (1966)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Animals in That Country (1968)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Journals of Susanna Moodie (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Procedures for Underground (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Power Politics (1971)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['You Are Happy (1974) Includes the poem Song of the Worms','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Selected Poems (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two-Headed Poems (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True Stories (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Love Songs of a Terminator (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Snake Poems (1983)&#91;168&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Interlunar (1984)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morning in the Burned House, McClelland &amp; Stewart (1995)','Margaret_Atwood']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eating Fire: Selected Poems, 1965–1995 (UK,1998)
// "You Begin." (1978)&#160;– as recited by Margaret Atwood; included in all three most recent editions of her "Selected Poems" as listed above (US, CA, UK)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Door (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"You Begin." (1978)&#160;– as recited by Margaret Atwood; included in all three most recent editions of her "Selected Poems" as listed above (US, CA, UK)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['I\'m Starved For You: Positron, Episode One (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Choke Collar: Positron, Episode Two (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Erase Me: Positron, Episode Three (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Heart Goes Last: Positron, Episode Four (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The New Oxford Book of Canadian Verse (1982)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Canlit Foodbook (1987)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Oxford Book of Canadian Short Stories in English (1988)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Best American Short Stories 1989 (1989) (with Shannon Ravenel)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The New Oxford Book of Canadian Short Stories in English (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Up in the Tree (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anna\'s Pet (1980) (with Joyce C. Barkhouse)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['For the Birds (1990) (with Shelly Tanaka)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Princess Prunella and the Purple Peanut (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rude Ramsay and the Roaring Radishes (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bashful Bob and Doleful Dorinda (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wandering Wenda and Widow Wallop\'s Wunderground Washery (2011);&#91;169&#93; inspired a cartoon series called Wandering Wenda in 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Survival: A Thematic Guide to Canadian Literature (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Days of the Rebels 1815–1840 (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Second Words: Selected Critical Prose (1982)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Through the One-Way Mirror (1986)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Strange Things: The Malevolent North in Canadian Literature (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Negotiating with the Dead: A Writer on Writing (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moving Targets: Writing with Intent, 1982–2004 (2004)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Writing with Intent: Essays, Reviews, Personal Prose 1983–2005 (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Payback: Debt and the Shadow Side of Wealth (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Other Worlds: SF and the Human Imagination (2011)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Angel Catbird, with Johnnie Christmas and Tamra Bonvillain (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Servant Girl (1974)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Snowbird (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heaven on Earth (1987)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Trumpets of Summer (1964) (with composer John Beckwith)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frankenstein Monster Song (2004, with rock band One Ring Zero)&#91;170&#93;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Pauline", a chamber opera in two acts, with composer Tobin Stokes for City Opera Vancouver (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Poetry and Voice of Margaret Atwood (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood Reads “Unearthing Suite” (1985)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood Reading From Her Poems (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Margaret Atwood". Front Row. July 24, 2007. BBC Radio 4. Retrieved January 18, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Marion, Wynne-Davies (2010). Margaret Atwood. British Council. Horndon, Tavistock, Devon, UK: Northcote, British Council. ISBN&#160;9780746310366. OCLC&#160;854569504.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Oates, Joyce Carol. "Margaret Atwood: Poet", The New York Times, May 21, 1978','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hoby, Hermione (2013-08-18). "Margaret Atwood: interview". The Daily Telegraph. London. ISSN&#160;0307-1235. Retrieved 2018-05-02.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hazel Foote, The Homes of Woodville, M.A. Jorgenson, Woodville, NS (1997), p. 109','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Nathalie, Cooke (1998). Margaret Atwood&#160;: a biography. Toronto: ECW Press. ISBN&#160;1550223089. OCLC&#160;40460322.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Daley, James (2007). Great Writers on the Art of Fiction: From Mark Twain to Joyce Carol Oates. Courier Corporation. p.&#160;159. ISBN&#160;978-0-486-45128-2.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Margaret Atwood: The Art of Fiction No.121. The Paris Review. Retrieved December 4, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Potts, Robert (April 26, 2003). "Light in the wilderness". The Guardian. Retrieved May 30, 2013.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Thomas, Paul Lee (2007). Reading, Learning, Teaching Margaret Atwood. Peter Lang Publishing. p.&#160;7. Retrieved August 8, 2013.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sutherland, John (2012). Lives of the Novelists: A History of Fiction in 294 Lives. Yale University Press. p.&#160;721. ISBN&#160;978-0-300-18243-9.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Nathalie, Cooke (2004). Margaret Atwood&#160;: a critical companion. Westport, Connecticut: Greenwood Press. ISBN&#160;9780313328060. OCLC&#160;145520009.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Howells, Coral Ann (2005). Margaret Atwood (2nd ed.). New York: Palgrave Macmillan. ISBN&#160;1403922004. OCLC&#160;57391913.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Cinda, Gault (2012). National and Female Identity in Canadian Literature, 1965–1980&#160;: the Fiction of Margaret Laurence, Margaret Atwood, and Marian Engel. Lewiston: Edwin Mellen Press. ISBN&#160;9780773426221. OCLC&#160;799769643.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood, Margaret (2005-06-17). "\'Aliens have taken the place of angels\'". The Guardian. Retrieved 2018-02-04.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood, Margaret (2012). In Other Worlds&#160;: SF and the Human Imagination (1st Anchor Books ed.). New York: Anchor Books. ISBN&#160;0307741761. OCLC&#160;773021848.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mead, Rebecca (2017-04-10). "Margaret Atwood, the Prophet of Dystopia". The New Yorker. ISSN&#160;0028-792X. Retrieved 2018-02-04.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Michael Rubbo (1984). Margaret Atwood: Once in August (Documentary film). National Film Board of Canada.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ VanSpanckeren, Kathryn; Castro, Jan Garden (1988). Margaret Atwood: Vision and Forms (3rd [Dr.] ed.). Carbondale: Southern Illinois University Press. pp.&#160;xxix–xxx. ISBN&#160;9780809314089. Retrieved 28 November 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Margaret Atwood\'s apocalypses. Waltonen, Karma, 1975-. Newcasle upon Tyne. ISBN&#160;9781322607894. OCLC&#160;901287105.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gopnik, Adam (2016-10-10). "Why Rewrite Shakespeare?". The New Yorker. ISSN&#160;0028-792X. Retrieved 2018-05-05.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Vancouver Sun (March 11, 2008). "Atwood pens opera piece about Vancouver first nations writer-performer" Archived February 10, 2015, at the Wayback Machine.. Retrieved July 1, 2014.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ CBC News (May 23, 2014). "Margaret Atwood\'s opera debut Pauline opens in Vancouver". Retrieved July 1, 2014.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c Flood, Alison (2015-05-27). "Into the woods: Margaret Atwood reveals her Future Library book, Scribbler Moon". The Guardian. Retrieved 2018-01-22.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Flood, Alison (September 5, 2014). "Margaret Atwood\'s new work will remain unseen for a century". The Guardian. Retrieved September 7, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Robotic arm extend authors\' signatures over cyberspace". Archived from the original on September 2, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Syngrafii Corp". Archived from the original on October 18, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Moss, Laura (2006).  John Moss; Tobi Kozakewich, eds. "Margaret Atwood: Branding an Icon Abroad" in Margaret Atwood: The Open Eye. Ottawa: University of Ottawa Press. p.&#160;28.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Chambers, C. M. (1999). A topography for canadian curriculum theory. Canadian Journal of Education, 24(2), 137.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood, M. (1999, Jul 01). "Survival, then and now." Maclean\'s, 112, 54.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pivato, Joseph "Atwood\'s Survival: A Critique", Canadian Writers, Faculty of Humanities &amp; Social Science, Athabasca University, 1985. Retrieved April 11, 2018.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood, Margaret (1972). Survival: A Thematic Guide to Canadian Literature. Toronto: Anansi. p.&#160;32.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Atwood, M. (1972), 36–42.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Pache, Walter (2002).  Reingard M. Nischik, ed. "A Certain Frivolity: Margaret Atwood\'s Literary Criticism" in Margaret Atwood: Works and Impact. Toronto: Anansi. p.&#160;122.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood Margaret (1996) [1972]. Survival&#160;: a thematic guide to Canadian literature (1st McClelland &amp; Stewart ed.). Toronto, Ontario: M &amp; S. ISBN&#160;9780771008320. OCLC&#160;35930298.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Howells, Coral Ann (2006).  John Moss; Tobi Kozakewich, eds. "Writing History from The Journals of Susanna Moodie to The Blind Assassin" in Margaret Atwood: The Open Eye. Ottawa: University of Ottawa Press. p.&#160;111.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Griffin Poetry Prize: The Griffin Trust: Trustees". Retrieved June 8, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "About Us: The Writers\' Trust of Canada". Retrieved February 18, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Fiona, Tolan (2007). Margaret Atwood&#160;: feminism and fiction. Amsterdam: Rodopi. ISBN&#160;9781435600799. OCLC&#160;173507440.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kaminski, Margaret, “Preserving Mythologies”, Margaret Atwood: Conversations, ed. Earl G. Ingersoll, Princeton, 1990, 27-32.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rose Wilson, Sharon (1993). Margaret Atwood\'s fairy-tale sexual politics. Jackson, Mississippi: University Press of Mississippi. ISBN&#160;9780585227153. OCLC&#160;44959649.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Atwood, Margaret. "Aliens have taken the place of angels: Margaret Atwood on why we need science fiction," The Guardian, June 17, 2005.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Vogt, Kathleen (1988). "Real and Imaginary Animals in the Poetry of Margaret Atwood". Margaret Atwood: Visions and Forms. VanSpanckeren, Kathryn; Castro, Jan Garden. Carbondale: Southern Illinois University Press. p.&#160;164. ISBN&#160;0585106290. OCLC&#160;43475939.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Canada Votes&#160;— Atwood backs Bloc on arts defence". Canadian Broadcasting Corporation. October 4, 2008. Retrieved 21 February 2015.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Margaret, Atwood. Anything but a Harper majority Archived January 16, 2009, at the Wayback Machine.. The Globe and Mail. October 6, 2008.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Sudbury a symbol of hope: Margaret Atwood". Northern Life, November 23, 2009.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ackerman, Gwen (May 9, 2010). "Atwood Accepts Israeli Prize, Defends \'Artists Without Armies\': Interview". Bloomberg. Retrieved September 19, 2010.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Reingard M. Nischik (2000). Margaret Atwood: Works and Impact. Camden House. pp.&#160;6, 143.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Tandon, Neeru; Chandra, Anshul (2009). Margaret Atwood: A Jewel in Canadian Writing. Atlantic Publishers &amp; Dist. pp.&#160;154–55.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The Handmaid\'s Tale". World Literatures in English. Archived from the original on January 28, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Jim, Leach (1999). Claude Jutra&#160;: filmmaker. Montreal: McGill-Queen\'s University Press. p.&#160;214. ISBN&#160;9780773567917. OCLC&#160;239885644.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Platt, Russell (2017-05-28). "Revisiting The Handmaid\'s Tale, the Opera". The New Yorker. ISSN&#160;0028-792X. Retrieved 2018-05-11.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Holloway, Daniel (2018-05-02). "The Handmaid\'s Tale Renewed for Season 3 at Hulu". Variety. Retrieved 2018-05-11.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Canada (2012). "Payback". National Film Board of Canada. Retrieved 2018-02-06.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "CBC, Netflix to screen miniseries based on Margaret Atwood novel Alias Grace". The Globe and Mail. The Canadian Press. June 21, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Netflix Debuts First Look Images from New Miniseries based on Margaret Atwood novel, Alias Grace". Netflix Media Center. Retrieved May 19, 2017.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Alias Grace Teaser Netflix". YouTube. Retrieved July 24, 2017.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "In the Wake of the Flood". The Year of the Flood. Retrieved March 30, 2011.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Otterson, Joe (2018-01-24). "Margaret Atwood\'s MaddAddam Trilogy Series Adaptation in Works From Anonymous Content, Paramount TV". Variety. Retrieved 2018-02-06.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "CBC books page". Canadian Broadcasting Corporation. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Office of the Governor General of Canada. Order of Canada citation. Queen\'s Printer for Canada. Retrieved May 24, 2010','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "How Atwood became a writer". Harvard University Gazette. November  8, 2001. Archived from the original on June 29, 2011. Retrieved September 19, 2010.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "LA Times Book Prize winners". Los Angeles Times. 2012. Archived from the original on April  5, 2013. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Humanists of the Year list". American Humanist Association. Retrieved October 16, 2013.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Margaret Atwood". Nebula Awards. Retrieved January 24, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Prometheus Award for Best Novel – Nominees". Libertarian Future Society. Retrieved January 24, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Rinehart, Dianne (January 24, 2014). "Arthur C. Clarke move raises questions of sci-fi author equality". Toronto Star. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Book of Members, 1780–2010: Chapter A" (PDF). American Academy of Arts and Sciences. Retrieved April 27, 2011.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Trillium Book Award Winners". Ontario Media Development Corporation. 2013. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Awards and Recognitions". Margaret Atwood. Retrieved January 24, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Helmerich Award page". Tulsa Library Trust. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Booker Prize page". Booker Prize Foundation. Archived from the original on December 25, 2013. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "FPA Award page". Fundación Príncipe de Asturias. 2008. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Nelly Sachs Prize page". City of Dortmund. 2013. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Margaret Atwood Talks About Nobel Prizewinner Alice Munro". Dan David Foundation. December 11, 2013. Retrieved April 13, 2014.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Diamond Jubilee Gala toasts exceptional Canadians". Canadian Broadcasting Corporation. June 18, 2012. Retrieved June 19, 2012.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Staff writer (April 19, 2013). "Announcing the 2012 Los Angeles Times Book Prize winners". Los Angeles Times. Retrieved April 21, 2013.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Margaret Atwood is laureate of the "Golden Wreath" Award for 2016". Struga Poetry Evenings. March 21, 2016. Archived from the original on April  5, 2016. Retrieved March 23, 2016.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The Franz Kafka International Literary Prize 2017" (PDF). May 29, 2017. Archived from the original (PDF) on July  2, 2017. Retrieved June  1, 2017.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Archived copy". Archived from the original on June 14, 2016. Retrieved July  8, 2016.&#160; "Trent University, Past Honorary Degree Recipients" Retrieved on July 8, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://queensu.ca/encyclopedia/h/honorary-degrees "The Queen\'s Encyclopedia, Honorary Degrees" Retrieved on July 8, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Concordia University, Honorary degree citation – Margaret Atwood". Retrieved August 30, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://www.smith.edu/about-smith/smith-history/honorary-degrees "Smith College, Honorary Degrees" Retrieved on August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://alumni.utoronto.ca/portrait/margaret-atwood "University of Toronto, Alumni Portraits" Retrieved on August 30, 2016/','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://uwaterloo.ca/secretariat-general-counsel/committees-and-councils/honorary-degrees-committee/honorary-degrees-granted/1980-1989 "University of Waterloo, Honorary Degree Granted" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://uoguelph.civicweb.net/filepro/documents/2273?preview=2272 "University of Guelph, Honorary Degree Recipients" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://www.mtholyoke.edu/archives/history/honorary_year "Mount Holyoke College, Honorary Degree Recipients" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Alumni Portraits – Margaret Atwood". Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://collation.umontreal.ca/fileadmin/collations_des_grades/documents/DHC/Listes/Liste_alpha_dhc.pdf "Université de Montréal, Liste des Doctorats Honorifiques" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.mcmaster.ca/univsec/reports_lists/S_HD_Recipients.pdf "McMaster University, Honorary Degree Recipients" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://www.lakeheadu.ca/current-students/graduation/past-honorary-degree-recipients "Lakehead University, Past Honorary Degree Recipients" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://www.ox.ac.uk/gazette/1997-8/weekly/020798/news/story_1.htm "University honours nine at Encaenia" Oxford University Gazette. July 2, 1998. Retrieved August 30, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ https://www.algomau.ca/about/administration/senate/honourary-degrees/ "Algoma University, Honourary Degrees" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.cambridge.org/catalogue/catalogue.asp?isbn=9780521548519&amp;ss=fro "The Cambridge Companion to Margaret Atwood" Cambridge University Press. Retrieved August 30, 2016.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.dartmouth.edu/~news/releases/2004/05/04b.html Archived September 16, 2016, at the Wayback Machine. "Dartmouth College, Honorary Degrees 2004" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.harvard.edu/on-campus/commencement/honorary-degrees "Harvard University, Honorary Degrees" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.univ-paris3.fr/les-docteurs-honoris-causa-de-la-sorbonne-nouvelle--90298.kjsp \'Université de la Sorbonne Nouvelle, Les docteurs Honoris Causa" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Walsh, Caroline. "Margaret Atwood to be honoured by NUI Galway". The Irish Times. Retrieved on June 18, 2011.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.ryerson.ca/calendar/2014-2015/pg1511.html "Ryerson University, Honorary Doctorates and Fellowships" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bennett, Pete (July 19, 2016). "Royal Military College of Canada Honorary Degree Recipients". www.rmcc-cmrc.ca.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.newgreektv.com/news-in-english-for-greeks/entertainment/item/2084-athens-university-honors-margaret-atwood "Athens University Honors Margaret Atwood", New Greek TV. December 10, 2013. Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ http://www.ed.ac.uk/about/annual-review/1314/honorary "University of Edinburgh, Honorary Graduates" Retrieved August 30, 2016','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Margaret, Atwood. "Snake Poems by Margaret Atwood". Biblio.com. Retrieved August 27, 2011.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wandering Wenda and Widow Wallop\'s Wunderground Washery. Quill &amp; Quire, December 2011. Retrieved January 1, 2012.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "One Ring Zero with Margaret Atwood in Toronto". YouTube. August 26, 2006. Retrieved August 27, 2011.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bauch, Marc (2012). Canadian Self-perception and Self-representation in English-Canadian Drama After 1967. Köln, Germany \: WiKu-Wissenschaftsverlag Dr. Stein. ISBN&#160;978-3-86553-407-1.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carrington, Ildikó de Papp (1986). Margaret Atwood and Her Works. Toronto, Ontario, Canada: ECW Press. ISBN&#160;978-0-920763-25-4.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Clements, Pam. "Margaret Atwood and Chaucer: Truth and Lies," in: Cahier Calin: Makers of the Middle Ages. Essays in Honor of William Calin, ed. Richard Utz and Elizabeth Emery (Kalamazoo, MI: Studies in Medievalism, 2011), pp.&#160;39–41.','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cooke, Nathalie (1998). Margaret Atwood: A Biography. ECW Press. ISBN&#160;978-1-55022-308-8.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cooke, Nathalie (2004). Margaret Atwood: A Critical Companion. Connecticut: Greenwood Publishing Group. ISBN&#160;978-0-313-32806-0.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hengen, Shannon; Thomson, Ashley (May 22, 2007). Margaret Atwood: A Reference Guide, 1988–2005. Lanham, MD: Scarecrow Press. ISBN&#160;978-0-8108-6668-3.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howells, Coral Ann (1996). Margaret Atwood. New York: St. Martin\'s Press. ISBN&#160;978-0-312-12891-3.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howells, Coral Ann (March 30, 2006). The Cambridge Companion to Margaret Atwood. Cambridge: Cambridge University Press. ISBN&#160;978-0-521-54851-9.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nischik, Reingard M. (2002). Margaret Atwood: Works and Impact. Rochester, NY: Camden House. ISBN&#160;978-1-57113-269-7.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nischik, Reingard M. (2009). Engendering Genre: The Works of Margaret Atwood. Ottawa: University of Ottawa Press. ISBN&#160;978-0-7766-0724-5.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pivato, Joseph. "Atwood\'s Survival: A Critique (2015) online canadian-writers.athabascau.ca/english/writers/matwood/survival.php','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rosenberg, Jerome H. (1984). Margaret Atwood. Boston: Twayne. ISBN&#160;978-0-8057-6586-1.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sherrill, Grace; Weir, Lorraine (1983). Margaret Atwood, Language, Text, and System. Vancouver: University of British Columbia Press. ISBN&#160;978-0-7748-0170-6.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sullivan, Rosemary (1998). The Red Shoes: Margaret Atwood Starting Out. Toronto: HarperFlamingoCanada. ISBN&#160;978-0-00-255423-7.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tolan, Fiona (2007). Margaret Atwood: Feminism and Fiction. Netherlands: Rodopi. ISBN&#160;90-420-2223-X.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['VanSpanckeren, Kathryn; Castro, Jan Garden, eds. (1988). Margaret Atwood: Vision and Forms. Carbondale: Southern Illinois University Press. ISBN&#160;978-0-8093-1408-9.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Weir, Lorraine (1981). "Meridians of Perception: A Reading of The Journals of Susanna Moodie".  In Davidson, Arnold E.; Davidson, Cathy N. The Art of Margaret Atwood: essays in criticism. Toronto: Anansi. pp.&#160;69–79. ISBN&#160;978-0-88784-080-7.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wrethed, Joakim (2015). "\'I am a place\': Aletheia as aesthetic and political resistance in Margaret Atwood\'s Surfacing". Journal of Aesthetics &amp; Culture. 7 (1): 28020. doi:10.3402/jac.v7.28020&#8239;.&#160;','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Edible Woman (1969)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Surfacing (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lady Oracle (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life Before Man (1979)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bodily Harm (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Handmaid\'s Tale (1985)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cat\'s Eye (1988)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Robber Bride (1993)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alias Grace (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blind Assassin (2000)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oryx and Crake (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Penelopiad (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Year of the Flood (2009)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MaddAddam (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Heart Goes Last (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hag-Seed (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dancing Girls (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murder in the Dark (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bluebeard\'s Egg (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wilderness Tips (1991)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Good Bones (1992)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Good Bones and Simple Murders (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Labrador Fiasco (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tent (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Moral Disorder (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stone Mattress (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Rape Fantasies" (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Resplendent Quetzal" (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Happy Endings" (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Unearthing Suite" (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Freeforall" (1986)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Double Persephone (1961)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Circle Game (1964)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Expeditions (1965)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Speeches for Doctor Frankenstein (1966)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Animals in That Country (1968)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Journals of Susanna Moodie (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Procedures for Underground (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Power Politics (1971)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Two-Headed Poems (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True Stories (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Interlunar (1984)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morning in the Burned House (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Door (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Survival: A Thematic Guide to Canadian Literature (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Negotiating with the Dead: A Writer on Writing (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Writing with Intent: Essays, Reviews, Personal Prose—1983–2005 (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Payback: Debt and the Shadow Side of Wealth (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bertram Brooker, Think of the Earth (1936)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Laura Salverson, The Dark Weaver (1937)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Swiss Sonata (1938)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Franklin D. McDowell, The Champlain Road (1939)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ringuet, Thirty Acres (1940)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Sullivan, Three Came to Ville Marie (1941)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G. Herbert Sallans, Little Man (1942)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Head Raddall, The Pied Piper of Dipper Creek (1943)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Earth and High Heaven (1944)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, Two Solitudes (1945)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winifred Bambrick, Continental Revue (1946)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, The Tin Flute (1947)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Precipice (1948)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Child, Mr. Ames Against Time (1949)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Germaine Guèvremont, The Outlander (1950)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morley Callaghan, The Loved and the Lost (1951)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, The Pillar (1952)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, Digby (1953)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Igor Gouzenko, The Fall of a Titan (1954)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Shapiro, The Sixth of June (1955)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adele Wiseman, The Sacrifice (1956)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, Street of Riches (1957)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colin McDougall, Execution (1958)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Watch That Ends the Night (1959)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Luck of Ginger Coffey (1960)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Malcolm Lowry, Hear Us O Lord from Heaven Thy Dwelling Place (1961)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kildare Dobbs, Running to Paradise (1962)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh Garner, Hugh Garner\'s Best Stories (1963)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas LePan, The Deserter (1964)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1965)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, A Jest of God (1966)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1967)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Dance of the Happy Shades (1968)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Kroetsch, The Studhorse Man (1969)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dave Godfrey, The New Ancestors (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, St. Urbain\'s Horseman (1971)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson Davies, The Manticore (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, The Temptations of Big Bear (1973)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, The Diviners (1974)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Great Victorian Collection (1975)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marian Engel, Bear (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Timothy Findley, The Wars (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Who Do You Think You Are? (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Hodgins, The Resurrection of Joseph Bourne (1979)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Bowering, Burning Water (1980)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mavis Gallant, Home Truths: Selected Canadian Stories (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Man Descending (1982)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leon Rooke, Shakespeare\'s Dog (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josef Skvorecky, The Engineer of Human Souls (1984)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, The Handmaid\'s Tale (1985)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Progress of Love (1986)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Kelly, A Dream Like Mine (1987)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Adams Richards, Nights Below Station Street (1988)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Quarrington, Whale Music (1989)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, Lives of the Saints (1990)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, Such a Long Journey (1991)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, The English Patient (1992)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Shields, The Stone Diaries (1993)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, A Discovery of Strangers (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greg Hollingshead, The Roaring Girl (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, The Englishman\'s Boy (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Urquhart, The Underpainter (1997)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Diane Schoemperlen, Forms of Devotion (1998)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Matt Cohen, Elizabeth and After (1999)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost (2000)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gloria Sawai, A Song for Nettie Johnson (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas Glover, Elle (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miriam Toews, A Complicated Kindness (2004)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Gilmour, A Perfect Night to Go to China (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Behrens, The Law of Dreams (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Divisadero (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, The Origin of Species (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Pullinger, The Mistress of Nothing (2009)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dianne Warren, Cool Water (2010)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick deWitt, The Sisters Brothers (2011)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Linda Spalding, The Purchase (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton, The Luminaries (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas King, The Back of the Turtle (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Daddy Lenin and Other Stories (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Thomas Hynes, We\'ll All Be Burnt in Our Beds Some Night (2017)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The Book of Secrets (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, A Fine Balance (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, Alias Grace (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, Barney\'s Version (1997)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Love of a Good Woman (1998)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bonnie Burnard, A Good House (1999)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost / David Adams Richards, Mercy among the Children (2000)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke, The Polished Hoe (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. G. Vassanji, The In-Between World of Vikram Lall (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Runaway (2004)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Bergen, The Time in Between (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vincent Lam, Bloodletting &amp; Miraculous Cures (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Hay, Late Nights on Air (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Boyden, Through Black Spruce (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Linden MacIntyre, The Bishop\'s Man (2009)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Johanna Skibsrud, The Sentimentalists (2010)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Esi Edugyan, Half-Blood Blues (2011)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Will Ferguson, 419 (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lynn Coady, Hellgoing (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sean Michaels, Us Conductors (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['André Alexis, Fifteen Dogs (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Redhill, Bellevue Square (2017)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Rozhdestvensky (1966)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bulat Okudzhava (1967)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['László Nagy (1968)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mak Dizdar (1969)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miodrag Pavlović (1970)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Auden (1971)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pablo Neruda (1972)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugenio Montale (1973)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fazıl Hüsnü Dağlarca (1974)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Léopold Sédar Senghor (1975)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugène Guillevic (1976)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Artur Lundkvist (1977)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rafael Alberti (1978)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miroslav Krleža (1979)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hans Magnus Enzensberger (1980)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Blaže Koneski (1981)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nichita Stănescu (1982)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sachchidananda Vatsyayan \'Ajneya\' (1983)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrei Voznesensky (1984)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yiannis Ritsos (1985)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Allen Ginsberg (1986)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tadeusz Różewicz  (1987)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Desanka Maksimović  (1988)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Shapcott (1989)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Justo Jorge Padrón (1990)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joseph Brodsky (1991)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ferenc Juhász (1992)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gennadiy Aygi (1993)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ted Hughes (1994)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yehuda Amichai (1995)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Makoto Ooka (1996)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adunis (1997)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Liu Banjiu (1998)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yves Bonnefoy (1999)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Edoardo Sanguineti (2000)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seamus Heaney (2001)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Slavko Mihalić (2002)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tomas Tranströmer (2003)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vasco Graça Moura (2004)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William S. Merwin (2005)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nancy Morejón (2006)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mahmoud Darwish (2007)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fatos Arapi (2008)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tomaž Šalamun (2009)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lyubomir Levchev (2010)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mateja Matevski (2011)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mongane Wally Serote (2012)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['José Emilio Pacheco (2013)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ko Un (2014)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bei Dao (2015)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2016)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Charles Simic (2017)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adam Zagajewski (2018)','Margaret_Atwood']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illywhacker (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oscar and Lucinda (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tax Inspector (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unusual Life of Tristan Smith (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Maggs (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True History of the Kelly Gang (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Life as a Fake (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Theft: A Love Story (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['His Illegal Self (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Parrot and Olivier in America (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Chemistry of Tears (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amnesia (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Long Way From Home (2017)','Peter_Carey_(novelist)']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History (1974)
// "Crabs"
// "Peeling"
// "She Wakes"
// "Life and Death in the Southside Pavilion"
// "Room No. 5 (Escribo)"
// "Happy Story"
// "A Windmill in the West"
// "Withdrawal"
// "Report on the Shadow Industry"
// "Conversations with Unicorns"
// "American Dreams"
// "The Fat Man in History"','Peter_Carey_(novelist)']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['"War Crimes" (1979)
// "The Journey of a Lifetime"
// "Do You Love Me?"
// "The Uses of Williamson Wood"
// "The Last Days of a Famous Mime"
// "A Schoolboy Prank"
// "The Chance"
// "Fragrance of Roses"
// "The Puzzling Nature of Blue"
// "Ultra-Violet Light"
// "Kristu-Du"
// "He Found Her in Late Summer"
// "Exotic Pleasures"
// "War Crimes"','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Contacts" (Under Twenty-Five: An Anthology, 1966)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Eight Parts of a Whole" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Interview with Yourself" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Structure" (Manic Magazine, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"I Know You Can Talk" (Stand Magazine, 1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Mad Puzzle King" (Living Daylights, 1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Rose" (Nation Review, 1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Cosmic Pragmatist" (Nation Review, 1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"The Pleasure Bird" (Australian Playboy, 1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"An Abandoned Chapter" (Overland, 1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Bazoohley: A Story for Children (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Letter to Our Son (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['30 Days in Sydney: A Wildly Distorted Account (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from New York (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wrong about Japan (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1985, with Ray Lawrence)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Until the End of the World (1991, with Wim Wenders)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illusion (1986, with Mike Mullins and Martin Armiger)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mary Ellen Snodgrass, Peter Carey: A Literary Companion (Jefferson, North Carolina: McFarland, 2010), pp. 6-8.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Candida Baker, Yacker: Australian Writers Talk about Their Work (Sydney: Picador, 1986), pp. 54-77.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ See also the bibliography in Andreas Gaile (ed.) Fabulating Beauty: Perspectives on the Fiction of Peter Carey (Amsterdam and New York: Rodopi, 2005). Retrieved 30 March 2012.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sonia Harford, Leaving Paradise: My Expat Adventure and Other Stories (Melbourne: Melbourne University Publishing, 2006), p. 111.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoted in Sue Gillett, "Oscar and Lucinda: Shattering History’s Self-reflection", in Patrick Fuery (ed.), Representation, Discourse and Desire: Contemporary Australian Culture and Critical Theory (Melbourne: Longman Cheshire, 1994), p. 195.','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Gamerman, Ellen (2015-01-08). "Peter Carey on His Cyber Thriller \'Amnesia\'". Wall Street Journal. ISSN&#160;0099-9660. Retrieved 2016-09-06.&#160;','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Illywhacker (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oscar and Lucinda (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Tax Inspector (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unusual Life of Tristan Smith (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Maggs (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['True History of the Kelly Gang (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['My Life as a Fake (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Theft: A Love Story (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['His Illegal Self (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Parrot and Olivier in America (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Chemistry of Tears (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Amnesia (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Long Way From Home (2017)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['War Crimes (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Fat Man in History and Other Stories (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Exotic Pleasures (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Collected Stories (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Bazoohley (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Letter to Our Son (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['30 Days in Sydney (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Letter from New York (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wrong about Japan (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bliss (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Until the End of the World (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Senior (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Festus Iyayi (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Janet Frame (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vikram Seth (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louis de Bernières (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Earl Lovelace (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caryl Phillips (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrea Levy (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Grenville (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lloyd Jones (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lawrence Hill (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christos Tsiolkas (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rana Dasgupta (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aminatta Forna (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1957)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Randolph Stow (1958)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vance Palmer (1959)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth O\'Conner (1960)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick White (1961)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / George Turner (1962)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sumner Locke Elliott (1963)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1964)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1965)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Mathers (1966)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1967)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1968)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Johnston (1969)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dal Stivens (1970)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1971)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley (1972)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1973)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronald McKie (1974)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Xavier Herbert (1975)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1976)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Park (1977)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1978)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Ireland (1979)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jessica Anderson (1980)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1981)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1982)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1983)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1984)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1985)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elizabeth Jolley (1986)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Glenda Adams (1987)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No award (1988)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1989)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Flood (1990)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (1992)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rodney Hall (1994)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helen Demidenko (1995)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christopher Koch (1996)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Foster (1997)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thea Astley / Kim Scott (2000)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frank Moorhouse (2001)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2002)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (2003)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shirley Hazzard (2004)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrew McGahan (2005)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roger McDonald (2006)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alexis Wright (2007)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Steven Carroll (2008)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tim Winton (2009)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Temple (2010)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kim Scott (2011)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anna Funder (2012)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michelle de Kretser (2013)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Evie Wyld (2014)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sofie Laguna (2015)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Patrić (2016)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josephine Wilson (2017)','Peter_Carey_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seven Stories (1993)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Facts Behind the Helsinki Roccamatios (Collection of four short stories, including the eponymous story of the collection) (1993)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Self (1996)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Life of Pi (2001)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['We Ate the Children Last (Short story) (2004)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beatrice and Virgil (2010)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['101 Letters to a Prime Minister: The Complete Letters to Stephen Harper (2012) The first 55 book suggestions are available as What is Stephen Harper Reading? (2009)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The High Mountains of Portugal (2016)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The first 55 book suggestions are available as What is Stephen Harper Reading? (2009)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sielkl, Sabine (2003). "The Empathetic Imagination – An Interview with Yann Martel" (PDF). Canadian Literature. University of British Columbia Press (177). Retrieved February 3, 2011.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sandall, Simon (January 10, 2009). "Yann Martel author of Life of Pi". readersvoice.com. Retrieved February 3, 2011.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Dunn, Jennifer (March 1, 2003). "Tigers and Tall Tales". The Oxonian Review. University of Oxford (2.2). Retrieved February 3, 2011.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Kipen, David (October 23, 2002). "Canadian wins Booker Prize / \'Life of Pi\' is tale of a boy who floats across the ocean from India". San Francisco Chronicle. Retrieved August 31, 2010.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Reynolds, Nigel (September 30, 2002). "Life of Pi wins Booker". The Daily Telegraph. UK. Retrieved 3 September 2010.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ The Globe and Mail Bestseller List 2002, The Globe and Mail, 2002. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ang Lee wins best director Oscar for Life of Pi. The Guardian online. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hiscock, John (December 19, 2012). "Ang Lee, interview: how he filmed the unfilmable for Life of Pi". The Telegraph. Retrieved January 19, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Brooks, Xan (February 25, 2013). "Ang Lee wins best director Oscar for Life of Pi". The Guardian. Retrieved October 17, 2013.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Brooks, Xan (February 5, 2013).Ang Lee wins best director Oscar for Life of Pi. The Guardian. Retrieved April 1, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mychael Danna Wins Best Soundtrack Oscar for Life of Pi. Classic fm online, February 25, 2013. Retrieved April 1, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Knopf Canada: The High Mountains of Portugal. Penguin Random House site. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Charles, Ron (January 21, 2016).Yann Martel’s ‘The High Mountains of Portugal’ is his best since ‘Life of Pi’. The Washington Post, Book World. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Barber, John. "Martel\'s post-modern Holocaust allegory fetches $3-million advance", The Globe and Mail, April 6, 2010.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Woog, Adam. \'Beatrice and Virgil\': Yann Martel\'s haunting fable of humans, animals and violence, The Seattle Times, April 17, 2010. Retrieved January 21, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wyndham, Susan. Books To Watch in 2010, The Sydney Morning Herald, January 9, 2010. Retrieved January 21, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Martel protests level of arts funding by sending PM books". Saskatoon Star Phoenix. April 17, 2002. Archived from the original on November  7, 2012. Retrieved November 30, 2009.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "6 compete for first novel award". Toronto Star. March 28, 1997.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Marchand, Philip (May 4, 1996). "An unforgettable exploration of a self". Retrieved November 30, 2009.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Winner of The Hugh MacLennan Prize for Fiction 2001. QWF Literary Database of Quebec English-Language Authors. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c British Council, Yann Martel Biography. British Council, Literature. Retrieved April 1, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b 2001-2003 Asian Pacific American Awards for Literature. Cooperative Children\'s Book Centre, School of Education, University of Wisconsin-Madison. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Saskatoon Public Library, Collections Connections. Saskatoon Public Library site. Retrieved December 30, 2014.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Life After Pi. Quill &amp; Quire. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quoterature. Martel entry. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Émile Martel et Nicole Perron Martel. le-mot-juste-en-anglais.com. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ L’Académie des lettres du Québec. L\'Académie des lettres du Québec. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ L’ÎLE, l’Infocentre littéraire des écrivains. L\'ÎLE, l\'Infocentre littéraire des écrivains. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Brown, Mick (June 1, 2010). Yann Martel: in search of understanding. The Telegraph. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Notable Alumni. TCS Ontario. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Mann Booker Prize Winner and Author of Life of Pi Yann Martel Returns to Trent on March 31" (Press release). March 28, 2006. Retrieved November 30, 2009.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ British Council Literature: Yann Martel. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Nashville Public Library: Yann Martel. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Canadian Encyclopedia: Yann Martel. Canadian Encyclopedia online. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Best-Selling Author and Trent Alum Yann Martel Launches New Book. Trent University News. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Trent Luminary – Yann Martel. Trent University Youtube Channel. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Yann Martel on why Life of Pi didn\'t make him a better writer. CBC Books. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ 2013 Montanan State University, Freshman Convocation and Summer Reading 2013. Montanan State University. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ The 50 Issues Project, Issue #84. The Malahat Review. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Brochure". The Malahat Review. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Encyclopedia.com: Yann Martel. Encyclopedia.com. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Border Crossings: Issue 47. Border Crossings. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ worldcat.org: Seven Stories. WorldCat libraries. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Canada Council for the Arts: Yann Martel. Canada Council for the Arts. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b OK Novels: Excerpt, Life of Pi. OK Novels. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quill &amp; Quire: Self, A Novel. Quill &amp; Quire. Retrieved March 23, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Rule, Matt (August 22, 2013).Bozeman Daily Chronicle, Montana State University Survival Guide. Bozeman Daily Chronicle, Montana State University. Retrieved January 25, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Booker winner in plagiarism row". The Guardian. November 2002. Retrieved January 5, 2013.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Autor de \'As Aventuras de Pi\' é suspeito de plagiar brasileiro (portuguese)". Folha de S.Paulo. January 2013. Retrieved February 13, 2013.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Hemminger, Peter (March 13, 2106). The Poseurs Guide to Yann Martel. Calgary Herald. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Simas, Shed (July 12, 2014). On Life of Pi, Plagiarism and the Media. Shed Simas. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Life of Pi was defended by Nancy Lee on Canada Reads 2003. CBC (Canadian Broadcasting Corporation): Books. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Tomas Venclova Is Latest Samuel Fischer Visiting Professor at Freie Universität Berlin. Freie Universität Berlin Presse. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Writers in Residence at Saskatoon Public Library, 1981–2013 Archived 2013-04-08 at the Wayback Machine.. Saskatoon Public Library: Collections, Connections. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ ARC Premieres New Work in Europe. The Royal Conservatory, Canada, News Release, October 28, 2004. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ ARC Ensemble: Recordings, Concert Excerpts. ARC Ensemble (Artists of The Royal Conservatory) Recordings. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Yann Martel Appointed as a Visiting Scholar in English. University of Saskatchewan, College of Arts &amp; Science, News &amp; Events. Retrieved April 1, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Will, Joanne (Summer 2008). Yann Martel: Life of Yann. Nuvo Magazine. Retrieved April 1, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lasdun, James (June 5, 2010). Yann Martel\'s follow-up to Life of Pi is a risky fable about genocide . The Guardian, UK, June 5, 2010. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lo Dico, Joy (May 29, 2010). Independent Reviews: Beatrice and Virgil. The Independent, UK, May 29, 2010. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Ciabattari, Jane (April 10, 2010). NPR Reviews: Beatrice and Virgil. NPR online, April 10, 2010. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Malla, Pasha (April 9, 2010)."Fiction, or is it?". The Globe &amp; Mail, Canada, April 9, 2010. Retrieved January 21, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Adams, James (June 9, 2009). The Globe and Mail: Yann Martel hears from Harper(\'s team). The Globe and Mail. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Smith, Joanna (February 1, 2011).Yann Martel shuts down Harper book club. The Star online. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Smith, Joanna (2011-02-01). "Canadian novelist Yann Martel mailed a book to Prime Minister Stephen Harper twice a month for the past four years. But after 100 titles and zero replies, he decided to give up his campaign". The Toronto Star. ISSN&#160;0319-0781. Retrieved 2016-02-18.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ 101 Letters to a Prime Minister: Yann Martel opens up his book club. ipolitics.com. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Premier odebrał książki od internautów!". Histmag. Retrieved August 26, 2014.&#160;','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Royal Society of Literature, List Current Fellows. Royal Society of Literature, London, UK, 2016. Retrieved March 24, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Saskatoon Public Library Announces 2010 Board. Saskatoon Public Library, Saskatoon, Saskatchewan, Canada, June 2, 2010. Retrieved March 31, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leadership Saskatoon Public Library. Saskatoon Public Library, Saskatoon, Saskatchewan, Canada. Retrieved March 31, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Leadership Saskatoon Public Library, Past Board Meeting Minutes Archived 2016-03-28 at the Wayback Machine.. Saskatoon Public Library, Saskatoon, Saskatchewan, Canada. Retrieved March 31, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Broida, Mike (February 12, 2016).The New York Times Sunday Book Review: The High Mountains of Portugal. The New York Times. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Zimmerman, Jean (February 5, 2016).NPR Book Review: Confronting Loss While Scaling \'The High Mountains Of Portugal\'. NPR online. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b New York Times Bestseller List, February 28, 2016: The High Mountains of Portugal. New York Times Bestseller List online. Retrieved March 25, 2016.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Best Sellers, The New York Times, May 2, 2010. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Best Sellers, Boston Globe. Boston.com, Off The Shelf, 23 April 2010. Retrieved January 21, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Best Sellers, Los Angeles Times, May 29, 2010. Retrieve January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Local Best Sellers, Star Tribune, May 2, 2010. Retrieved January 14, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Macleans Best Sellers. Macleans online, Week of June 14, 2010. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wagner, Vit (April 7, 2010). "Life of Pi writer Yann Martel returns with new book". TheStar.com, Entertainment / Books, April 7, 2010. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ International IMPAC Dublin Literary Award Long List 2012 Archived 2014-12-09 at the Wayback Machine.. International IMPAC Dublin Literary Award 2012. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Blau, Rosie (December 3, 2010). FT Fiction Round-up 2010. FT.com, Fiction Round-up 2010. Retrieved 25 January 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Life of Pi Wins 2002 Man Booker Prize for Fiction. American Booksellers Association, Bookselling This Week. Retrieved January 25, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Scott, Catherine (February 25, 2013). \'Life of Pi\' author to speak at freshman convocation. Bozeman Daily Chronicle, Montana State University Survival Guide. Retrieved January 25, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Life Of Pi entry. Les Éditions XYZ Catalogue. Retrieved February 1, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Scene It Read It – Life Of Pi. Coventry City Council site. Retrieved January 26, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Quill &amp; Quire Best Books 2001. Quill &amp; Quire, Canada Books. Retrieved February 1, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Life of Pi at IMDB. Retrieved January 26, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Barber, John (January 14, 2013). "Life after Pi: How Yann Martel\'s moved on from his book and Oscar-worthy film". The Globe &amp; Mail online. Retrieved January 26, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Medley, Mark (November 21, 2012). Life of Pi author Yann Martel: “Overall, I think it’s a wonderful companion piece”. National Post online. Retrieved January 26, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lederhouse, Craig (July 30, 2012). Yann Martel on the Life of Pi trailer. CBC Books, First aired on The Afternoon Edition (26/7/12). Retrieved January 26, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Yann Martel Author Bio. Nashville Reads. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Manners of Dying at IMDB. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Beatrice and Virgil at the Factory Theatre. Factory Theatre, April 12 – May 11, 2013. Retrieved January 23, 2015.','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Yann_Martel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Niall Lucy and Chris Coughran, eds. Vagabond Holes: David McComb and The Triffids (Fremantle: Fremantle Press, 2009).','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','DBC_Pierre']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poetry Introduction 4 (ten poems: \'Over the Wall\', \'Nightfall\', \'Survey\', \'Christmas Day at Home\', \'The Drowned Field\', \'Alonso\', \'Isherwood is at Santa Monica\', \'Ben Dancing at Wayland\'s Smithy\', \'Convalescence in Lower Largo\', \'The Well\'), Faber, 1978','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Confidential Chats with Boys, Oxford: Sycamore Press 1982 (based on the book Confidential Chats with Boys by William Lee Howard, MD., 1911, Sydney, Australia)&#91;15&#93;','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Swimming Pool Library, 1988','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Folding Star, 1994','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Spell, 1998','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Line of Beauty, 2004','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Stranger\'s Child, 2011','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sparsholt Affair, 2017','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Thieving Boy (Firebird 2: Writing Today, Penguin, 1983)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sharps and Flats (Granta 43, 1993) Was incorporated into The Folding Star','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Highlights (Granta 100, 2007)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bajazet by Jean Racine, 1991','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bérénice by Jean Racine, 2012','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['New Writing 4 (with A. S. Byatt), 1995','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Three Novels by Ronald Firbank, 2000','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. E. Housman: poems selected by Alan Hollinghurst, 2001','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Johnson, Allan (2014). Alan Hollinghurst and the Vitality of Influence. London: Palgrave Macmillan. p.&#160;62. ISBN&#160;1349472506.&#160;','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Mendelssohn, Michèle (2016). "Poetry, Parody, Porn and Prose". Alan Hollinghurst: Writing Under the Influence: 40–45  &#8211; via Manchester University Press.&#160;','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Alan_Hollinghurst']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Alan_Hollinghurst']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['6 Awards and honours

// 6.1 Booker Prize, 2005
// 6.2 Kafka Prize, 2011','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['6.1 Booker Prize, 2005','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['6.2 Kafka Prize, 2011','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Banville, John (1971). Nightspawn.&#160;','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Birchwood (1973)','John_Banville']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Revolutions Trilogy&#160;:
// Doctor Copernicus (1976)
// Kepler (1981)
// The Newton Letter (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mefisto (1986)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Evidence (1989)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ghosts (1993)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Athena (1995)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ark (1996) (only 260 copies published)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Untouchable (1997)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eclipse (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shroud (2002)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea (2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Infinities (2009)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ancient Light (2012)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Guitar (2015)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mrs Osmond (2017)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Copernicus (1976)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kepler (1981)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Newton Letter (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Long Lankin (1970; revised edition 1984)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Broken Jug (1994), after Heinrich von Kleist\'s play of that name','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['God\'s Gift: A Version of Amphitryon by Heinrich von Kleist (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Love in the Wars (adaptation of Heinrich von Kleist\'s Penthesilea, 2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christine Falls (2006)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Silver Swan (2007)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Elegy for April (2010)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Death in Summer (2011)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vengeance (2012)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Holy Orders (2013)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Even the Dead (2015)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lemur (2008, previously serialised in The New York Times)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Black-Eyed Blonde, a Philip Marlowe novel (2014)&#91;49&#93;','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prague Nights (2017) (published in the USA as Wolf on a String)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prague Pictures: Portrait of a City (2003)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Time Pieces: A Dublin Memoir (2016)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "John Banville." Dictionary of Irish Literature. Ed. Robert Hogan. Westport, Connecticut: Greenwood Press, 1996. ISBN&#160;0-313-29172-1.','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Evans, Vonnie Banville (1994). The House in the Faythe. Dublin: Code Green. ISBN&#160;978-1-907215-12-4.&#160;','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Book of Members, 1780–2010: Chapter B" (PDF). American Academy of Arts and Sciences. Retrieved 17 May 2011.&#160;','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Roddy Doyle’s ‘The Guts’ named novel of the year Irish Times, 2013-11-27.','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "El XI Premio RBA de Novela Policíaca recae en Benjamin Black con \'Pecado\'". Lecturas (in Spanish). September 8, 2017. Retrieved September 13, 2017.&#160;','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville by Neil Murphy; Bucknell University Press (2018); ISBN&#160;978-1-61148-872-2','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville by John Kenny; Irish Academic Press (2009); ISBN&#160;978-0-7165-2901-9','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Irish Writers on Writing featuring John Banville. Edited by Eavan Boland (Trinity University Press, 2007).','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nightspawn (1971)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Birchwood (1973)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doctor Copernicus (1976)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kepler (1981)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Newton Letter (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mefisto (1986)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Evidence (1989)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ghosts (1993)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Athena (1995)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Ark (1996)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Untouchable (1997)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eclipse (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shroud (2002)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea (2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Infinities (2009)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ancient Light (2012)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Blue Guitar (2015)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Long Lankin (1970)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Broken Jug (1994)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seachange (1994)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dublin 1742 (2002)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['God\'s Gift (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Love in the Wars (2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Todtnauberg (2006)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Prague Pictures: Portrait of a City (2003)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Time Pieces: A Dublin Memoir (2016)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Last September (1999)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Albert Nobbs (2011)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sea (2013)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zbigniew Herbert (1965)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Auden (1966)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vasko Popa (1967)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Václav Havel (1968)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugène Ionesco (1970)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Huchel (1971)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sławomir Mrożek (1972)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1973)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sándor Weöres (1974)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miroslav Krleža (1975)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Italo Calvino (1976)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pavel Kohout (1977)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1977)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simone de Beauvoir (1978)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1979)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sarah Kirsch (1980)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (1981)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tadeusz Różewicz (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friedrich Dürrenmatt (1983)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christa Wolf (1984)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stanisław Lem (1985)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giorgio Manganelli (1986)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Milan Kundera (1987)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Szczypiorski (1988)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marguerite Duras (1989)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helmut Heissenbüttel (1990)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Nádas (1991)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1992)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chinghiz Aitmatov (1993)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Inger Christensen (1994)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aleksandar Tišma (1995)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jürg Laederach (1996)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Antonio Tabucchi (1997)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dubravka Ugrešić (1998)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Esterházy (1999)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['António Lobo Antunes (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Umberto Eco (2001)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christoph Hein (2002)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cees Nooteboom (2003)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2004)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claudio Magris (2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jorge Semprún (2006)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. L. Kennedy (2007)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Agota Kristof (2008)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Per Olov Enquist (2009)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Nizon (2010)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Javier Marías (2011)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick Modiano (2012)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2013)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lyudmila Ulitskaya (2014)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mircea Cărtărescu (2015)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Stasiuk (2016)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Karl Ove Knausgård (2017)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Crumb Borne by Clive Barry (1965)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Dear Green Place by Archie Hind (1966)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winter Journey by Eva Figes (1967)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Song and a Dance by P. J. Kavanagh (1968)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Lazarus by Maurice Leitch (1969)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['When Did You Last See your Father? by Margaret Blount (1970)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Big Chapel by Thomas Kilroy (1971)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G by John Berger (1972)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In the Country of the Skin by Peter Redgrove (1973)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Bottle Factory Outing by Beryl Bainbridge (1974)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friends and Romans by Sylvia Clayton (1975)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Falstaff by Robert Nye (1976)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Condition of Muzak by Michael Moorcock (1977)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Murderer by Roy Heath (1978)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Night in Tunisia by Neil Jordan and The House of Hunger by Dambudzo Marechera (1979)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Month in the Country by J. L. Carr (1980)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kepler by John Banville (1981)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Where I Used to Play on the Green by Glyn Hughes (1982)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Waterland by Graham Swift (1983)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Empire of the Sun by J. G. Ballard (1984)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hawksmoor by Peter Ackroyd (1985)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Continent by Jim Crace (1986)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Levels by Peter Benson (1987)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sweet Desserts by Lucy Ellmann (1988)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rosehill: Portrait from a Midlands City by Carol Lake (1989)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shape-Shifter by Pauline Melville (1990)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Devil\'s Own Work by Alan Judd (1991)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Poor Things by Alasdair Gray (1992)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Eye in the Door by Pat Barker (1993)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Debatable Land by Candia McWilliam (1994)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heart\'s Journey in Winter by James Buchan (1995)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Reading in the Dark by Seamus Deane (1996)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fugitive Pieces by Anne Michaels (1997)','John_Banville']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Trumpet by Jackie Kay (1998)','John_Banville']);
		  
// 		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b 
// Italie, Hillel (2007-03-09). "Desai\'s \'Inheritance\' Wins Book Critics Circle Award". The Washington Post. Retrieved 2013-08-23.&#160;','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Kiran_Desai']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Enright, Anne (1995). The wig my father wore. London: Jonathan Cape.&#160;','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['&#8212; (2000). What are you like?.&#160;','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Pleasure of Eliza Lynch (2002)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Gathering (2007)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Forgotten Waltz (2011)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Green Road  (2015)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Portable Virgin (1991)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Taking Pictures (2008)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yesterday\'s Weather (2009)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Making Babies: Stumbling into Motherhood (2004)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Educational Media Solutions (2012), Reading Ireland, Contemporary Irish Writers in the Context of Place, Films Media Group, ISBN&#160;978-0-81609-056-3','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Anne Enright, August 2008."  Close to the Next Moment: Interviews from a Changing Ireland by Jody Allen Randolph. Manchester: Carcanet, 2010.','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Heno Magee (1976)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Desmond Hogan (1977)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Sheridan (1978)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Cruise O\'Brien (1979)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernard Farrell (1980)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Neil Jordan (1981)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Medbh McGuckian/Special Prize: Seán Ó Tuama &amp; Thomas Kinsella (1982)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dorothy Nelson (1983)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ronan Sheehan (1984)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Frank McGuinness (1985)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Mercier (1986)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Deirdre Madden (1987)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Glenn Patterson (1988)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert McLiam Wilson (1989)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mary Dorcey (1990)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (1991)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugo Hamilton (1992)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gerard Fanning (1993)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colum McCann (1994)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip MacCann (1995)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mike McCormack (1996)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Haverty (1997)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Wheatley (1998)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mark O\'Rowe (1999)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claire Keegan (2000)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keith Ridgway (2001)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caitríona O\'Reilly (2002)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugene O\'Brien (2003)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claire Kilroy (2004)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nick Laird (2005)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Ó Ceallaigh (2006)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kevin Barry (2007)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leontia Flynn (2008)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kevin Power (2009)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leanne O\'Sullivan (2010)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lucy Caldwell (2011)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nancy Harris (2012)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ciarán Collins (2013)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colin Barrett (2014)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sara Baume (2015)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doireann Ní Ghríofa (2016)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Anne_Enright']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The White Tiger: A Novel. Atlantic Books, Ltd (UK), Free Press (US), 2008','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Between the Assassinations. Picador (IND), 2008','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Last Man in Tower. Fourth Estate (IND), 2011','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Selection Day. HarperCollins India (IND), 2016','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ At Last! Commencement For More than 8,900 Today. Columbia University Record. MAY 21, 1997 Archived 17 January 2010 at WebCite','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Donthi, Praveen (2008-10-23). "Adigas second book to hit shelves". Deccan Herald. Archived from the original on 6 April 2012. Retrieved 2008-10-27.&#160;','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Aravind_Adiga']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Every Day is Mother\'s Day: Chatto &amp; Windus, 1985','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vacant Possession: Chatto &amp; Windus, 1986','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eight Months on Ghazzah Street: Viking Press, 1988','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fludd: Viking Press, 1989','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Place of Greater Safety: Viking Press, 1992','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Change of Climate: Viking Press, 1994','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Experiment in Love: Viking Press, 1995','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giant, O\'Brien: Fourth Estate, 1998','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond Black: Fourth Estate, 2005','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wolf Hall: Fourth Estate, 2009&#91;57&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bring Up the Bodies: Fourth Estate, 2012&#91;58&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Learning to Talk (Fourth Estate, 2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Assassination of Margaret Thatcher: Stories (Fourth Estate, 2014)&#91;59&#93;&#91;60&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giving Up the Ghost: Fourth Estate, 2003','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Every Day is Mother\'s Day (1985)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vacant Possession (1986)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eight Months on Ghazzah Street (1988)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fludd (1989)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Place of Greater Safety (1992)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Change of Climate (1994)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Experiment in Love (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giant, O\'Brien (1998)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond Black (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wolf Hall (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bring Up the Bodies (2012)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Learning to Talk (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Assassination of Margaret Thatcher (2014)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giving Up the Ghost (A Memoir) (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1993)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Muriel Spark (1997)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Trevor (1999)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (2001)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beryl Bainbridge and Thom Gunn (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Holroyd (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Derek Mahon (2007)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seamus Heaney (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2013)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Harrison (2015)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Stoppard (2017)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Coming From Behind, Chatto &amp; Windus, 1983','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peeping Tom, Chatto &amp; Windus, 1984','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Redback, Bantam, 1986','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Very Model of a Man, Viking, 1992','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['No More Mister Nice Guy, Cape, 1998','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Mighty Walzer, Cape, 1999','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Who\'s Sorry Now?, Cape, 2002','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Making of Henry, Cape, 2004','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kalooki Nights, Cape, 2006','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Act of Love, Cape, 2008','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Finkler Question, Bloomsbury, 2010 (Winner of the 2010 Man Booker Prize) ISBN&#160;978-1-4088-0910-5','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zoo Time, Bloomsbury, 2012','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J, Bloomsbury, 2014 (shortlisted for the 2014 Man Booker Prize)&#91;13&#93;','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pussy: a novel, Cape, April 13, 2017','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Shakespeare\'s Magnanimity: Four Tragic Heroes, Their Friends and Families (co-author with Wilbur Sanders), Chatto &amp; Windus, 1978','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In the Land of Oz, Hamish Hamilton, 1987','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roots Schmoots: Journeys Among Jews, Viking, 1993','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seriously Funny: From the Ridiculous to the Sublime, Viking, 1997','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Whatever It Is, I Don\'t Like It, Bloomsbury, 2011','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ International who\'s who of authors and writers, London: Europa Publications, 2003, p.271','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ White, Ben. "The Electronic Intifada, "Shoot and Cry: Liberal Zionism\'s Dilemma," (2007-09-20)". Retrieved 7 April 2009.&#160;','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Howard_Jacobson']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2004 Commandeur de L\'Ordre des Arts et des Lettres (Chevalier, 1988).','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Metroland (1980)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Before She Met Me (1982)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flaubert\'s Parrot (1984) – shortlisted for the Booker Prize','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Staring at the Sun (1986)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A History of the World in 10½ Chapters (1989)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Talking It Over (1991)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Porcupine (1992)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['England, England (1998) – shortlisted for the Booker Prize','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Love, etc (2000) – sequel to Talking it Over','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arthur &amp; George (2005) – shortlisted for the Booker Prize','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sense of an Ending (2011) – winner of the Booker Prize','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Noise of Time (2016)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Only Story (2018)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cross Channel (1996)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lemon Table (2004)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pulse (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Letters from London (Picador, London, 1995) – journalism from The New Yorker, ISBN&#160;0-330-34116-2','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alphonse Daudet: In The Land of Pain (2002) translation of Daudet\'s La Doulou','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Something to Declare (2002) – essays','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Pedant in the Kitchen (2003) – journalism on cooking','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nothing to Be Frightened Of (2008) – memoir','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Through the Window (2012) – 17 essays and a short story','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Life with Books (2012) - pamphlet','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Levels of Life (2013) - memoir','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keeping an Eye Open: Essays on Art (October, 2015) – essays','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Duffy (1980)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fiddle City (1981)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Putting the Boot In (1985)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Going to the Dogs (1987)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ McGrath, Patrick. "Julian Barnes" Archived 15 October 2012 at the Wayback Machine., BOMB Magazine Fall, 1987. Retrieved on 24 October 2012.','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Childs, Julian Barnes (Contemporary British Novelists), Manchester University Press (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sebastian Groes &amp; Peter Childs, eds. Julian Barnes (Contemporary Critical Perspectives), Continuum (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vanessa Guignery &amp; Ryan Roberts, eds. Conversations with Julian Barnes, University Press of Mississippi (2009)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vanessa Guignery, The Fiction of Julian Barnes: A Reader\'s Guide to Essential Criticism, Palgrave Macmillan (2006)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Matthew Pateman, Julian Barnes: Writers and Their Work, Northcote House, (2002)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bruce Sesto, Language, History, And Metanarrative In the Fiction of Julian Barnes, Peter Lang (2001)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Merritt Moseley, Understanding Julian Barnes, University of South Carolina Press (1997)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Interview by the Oxonian Review (2008)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Metroland (1980)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Before She Met Me (1982)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Flaubert\'s Parrot (1984)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Staring at the Sun (1986)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A History of the World in 10½ Chapters (1989)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Talking It Over (1991)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Porcupine (1992)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['England, England (1998)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Love, etc (2000)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arthur &amp; George (2005)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sense of an Ending (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Noise of Time (2016)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Only Story (2018)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cross Channel (1996)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Lemon Table (2004)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pulse (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1993)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1995)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Muriel Spark (1997)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Trevor (1999)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (2001)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beryl Bainbridge and Thom Gunn (2003)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Holroyd (2005)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Derek Mahon (2007)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seamus Heaney (2009)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2013)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Harrison (2015)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Stoppard (2017)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Zbigniew Herbert (1965)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['W. H. Auden (1966)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vasko Popa (1967)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Václav Havel (1968)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Not given (1969)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eugène Ionesco (1970)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Huchel (1971)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sławomir Mrożek (1972)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1973)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sándor Weöres (1974)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miroslav Krleža (1975)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Italo Calvino (1976)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pavel Kohout (1977)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1977)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Simone de Beauvoir (1978)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fulvio Tomizza (1979)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Sarah Kirsch (1980)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (1981)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tadeusz Różewicz (1982)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Friedrich Dürrenmatt (1983)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christa Wolf (1984)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Stanisław Lem (1985)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giorgio Manganelli (1986)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Milan Kundera (1987)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Szczypiorski (1988)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marguerite Duras (1989)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Helmut Heissenbüttel (1990)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Nádas (1991)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1992)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Chinghiz Aitmatov (1993)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Inger Christensen (1994)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aleksandar Tišma (1995)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jürg Laederach (1996)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Antonio Tabucchi (1997)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dubravka Ugrešić (1998)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Péter Esterházy (1999)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['António Lobo Antunes (2000)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Umberto Eco (2001)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christoph Hein (2002)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Cees Nooteboom (2003)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2004)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Claudio Magris (2005)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jorge Semprún (2006)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. L. Kennedy (2007)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Agota Kristof (2008)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Per Olov Enquist (2009)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Nizon (2010)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Javier Marías (2011)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick Modiano (2012)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2013)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lyudmila Ulitskaya (2014)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mircea Cărtărescu (2015)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrzej Stasiuk (2016)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Karl Ove Knausgård (2017)','Julian_Barnes']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Every Day is Mother\'s Day: Chatto &amp; Windus, 1985','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vacant Possession: Chatto &amp; Windus, 1986','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eight Months on Ghazzah Street: Viking Press, 1988','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fludd: Viking Press, 1989','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Place of Greater Safety: Viking Press, 1992','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Change of Climate: Viking Press, 1994','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Experiment in Love: Viking Press, 1995','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giant, O\'Brien: Fourth Estate, 1998','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond Black: Fourth Estate, 2005','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wolf Hall: Fourth Estate, 2009&#91;57&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bring Up the Bodies: Fourth Estate, 2012&#91;58&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Learning to Talk (Fourth Estate, 2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Assassination of Margaret Thatcher: Stories (Fourth Estate, 2014)&#91;59&#93;&#91;60&#93;','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giving Up the Ghost: Fourth Estate, 2003','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Every Day is Mother\'s Day (1985)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vacant Possession (1986)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eight Months on Ghazzah Street (1988)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fludd (1989)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Place of Greater Safety (1992)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Change of Climate (1994)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['An Experiment in Love (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Giant, O\'Brien (1998)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beyond Black (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wolf Hall (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bring Up the Bodies (2012)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Learning to Talk (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Assassination of Margaret Thatcher (2014)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Giving Up the Ghost (A Memoir) (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1993)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harold Pinter (1995)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Muriel Spark (1997)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Trevor (1999)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Doris Lessing (2001)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beryl Bainbridge and Thom Gunn (2003)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Holroyd (2005)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Derek Mahon (2007)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Seamus Heaney (2009)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2013)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tony Harrison (2015)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tom Stoppard (2017)','Hilary_Mantel']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Catton, Eleanor (2008). The Rehearsal. Wellington, New Zealand: Victoria University Press. ISBN&#160;9783716026328.&#160;','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Catton, Eleanor (2013). The Luminaries. Wellington, New Zealand: Victoria University Press. ISBN&#160;9781847084316.&#160;','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Various short stories published in Best New Zealand Fiction Vol. 5 (2008); the Penguin Book of Contemporary New Zealand Short Stories (2009), and Granta issue 106 (Summer 2009).','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Eleanor Catton wins Governor General’s Literary Award for The Luminaries". Toronto Star, November 13, 2013.','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Excerpts from Eleanor Catton\'s Reading Journal, Turbine, 2007','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Radio interview on The Bat Segundo Show, 71 minutes, 2013','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bertram Brooker, Think of the Earth (1936)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Laura Salverson, The Dark Weaver (1937)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Swiss Sonata (1938)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Franklin D. McDowell, The Champlain Road (1939)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ringuet, Thirty Acres (1940)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Sullivan, Three Came to Ville Marie (1941)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['G. Herbert Sallans, Little Man (1942)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Head Raddall, The Pied Piper of Dipper Creek (1943)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gwethalyn Graham, Earth and High Heaven (1944)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, Two Solitudes (1945)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Winifred Bambrick, Continental Revue (1946)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, The Tin Flute (1947)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Precipice (1948)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Philip Child, Mr. Ames Against Time (1949)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Germaine Guèvremont, The Outlander (1950)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Morley Callaghan, The Loved and the Lost (1951)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, The Pillar (1952)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Walker, Digby (1953)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Igor Gouzenko, The Fall of a Titan (1954)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lionel Shapiro, The Sixth of June (1955)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Adele Wiseman, The Sacrifice (1956)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gabrielle Roy, Street of Riches (1957)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Colin McDougall, Execution (1958)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh MacLennan, The Watch That Ends the Night (1959)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Luck of Ginger Coffey (1960)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Malcolm Lowry, Hear Us O Lord from Heaven Thy Dwelling Place (1961)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kildare Dobbs, Running to Paradise (1962)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hugh Garner, Hugh Garner\'s Best Stories (1963)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas LePan, The Deserter (1964)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1965)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, A Jest of God (1966)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['[no award] (1967)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Dance of the Happy Shades (1968)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robert Kroetsch, The Studhorse Man (1969)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dave Godfrey, The New Ancestors (1970)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler, St. Urbain\'s Horseman (1971)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Robertson Davies, The Manticore (1972)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, The Temptations of Big Bear (1973)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Laurence, The Diviners (1974)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Brian Moore, The Great Victorian Collection (1975)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marian Engel, Bear (1976)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Timothy Findley, The Wars (1977)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, Who Do You Think You Are? (1978)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jack Hodgins, The Resurrection of Joseph Bourne (1979)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Bowering, Burning Water (1980)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mavis Gallant, Home Truths: Selected Canadian Stories (1981)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Man Descending (1982)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Leon Rooke, Shakespeare\'s Dog (1983)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Josef Skvorecky, The Engineer of Human Souls (1984)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood, The Handmaid\'s Tale (1985)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alice Munro, The Progress of Love (1986)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['M. T. Kelly, A Dream Like Mine (1987)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Adams Richards, Nights Below Station Street (1988)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Quarrington, Whale Music (1989)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, Lives of the Saints (1990)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry, Such a Long Journey (1991)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, The English Patient (1992)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Carol Shields, The Stone Diaries (1993)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rudy Wiebe, A Discovery of Strangers (1994)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Greg Hollingshead, The Roaring Girl (1995)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, The Englishman\'s Boy (1996)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Jane Urquhart, The Underpainter (1997)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Diane Schoemperlen, Forms of Devotion (1998)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Matt Cohen, Elizabeth and After (1999)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Anil\'s Ghost (2000)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard B. Wright, Clara Callan (2001)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gloria Sawai, A Song for Nettie Johnson (2002)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Douglas Glover, Elle (2003)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Miriam Toews, A Complicated Kindness (2004)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Gilmour, A Perfect Night to Go to China (2005)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Behrens, The Law of Dreams (2006)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje, Divisadero (2007)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nino Ricci, The Origin of Species (2008)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Pullinger, The Mistress of Nothing (2009)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Dianne Warren, Cool Water (2010)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Patrick deWitt, The Sisters Brothers (2011)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Linda Spalding, The Purchase (2012)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton, The Luminaries (2013)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas King, The Back of the Turtle (2014)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guy Vanderhaeghe, Daddy Lenin and Other Stories (2015)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Madeleine Thien, Do Not Say We Have Nothing (2016)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joel Thomas Hynes, We\'ll All Be Burnt in Our Beds Some Night (2017)','Eleanor_Catton']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Death of a River Guide (1994)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sound of One Hand Clapping (1997)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gould\'s Book of Fish: A Novel in Twelve Fish (2001)&#91;34&#93;&#91;35&#93;&#91;36&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Unknown Terrorist (2006)&#91;37&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Wanting (2008)&#91;38&#93;&#91;39&#93;&#91;40&#93;&#91;41&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Narrow Road to the Deep North (2013)&#91;42&#93;&#91;43&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['First Person (2017)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1985) A Terrible Beauty: History of the Gordon River Country&#91;44&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1990) The Rest of the World Is Watching — Tasmania and the Greens&#91;45&#93; (co-editor)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1991) Codename Iago: The Story of John Friedrich&#91;46&#93;&#91;47&#93; (co-writer)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1991) Parish-Fed Bastards. A History of the Politics of the Unemployed in Britain, 1884–1939&#91;48&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2011) And What Do You Do, Mr Gable?','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2015) Notes On An Exodus','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1998) The Sound of One Hand Clapping (director and scriptwriter)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2008) Australia (co-writer)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1996) National Fiction Award for Death of a River Guide','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1995) Victorian Premier\'s Prize for Best First Fiction (for Death of a River Guide)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1998) National Booksellers award for Best Book for The Sound of One Hand Clapping','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(1998) Victorian Premier\'s Prize for Best Novel The Sound of One hand Clapping)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2002) Australian Literary Society Gold Medal (for Gould\'s Book of Fish: A Novel in Twelve Fish)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2002) Victorian Premier\'s Prize for Fiction for Gould\'s Book of Fish: A Novel in Twelve Fish','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2002) The Commonwealth Writers\' Prize (for Gould\'s Book of Fish: A Novel in Twelve Fish)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2008) Western Australian Premier\'s Literary Award for Fiction (for Wanting) &#91;49&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2009) Queensland Premier\'s Literary Award for Fiction (for Wanting)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2011) Tasmania Book Prize (for Wanting) &#91;50&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) Western Australian  Premier\'s Literary Award for Fiction (for The Narrow Road to the Deep North)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) Queensland Premier\'s Literary Award for Fiction (for The Narrow Road to the Deep North) &#91;51&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) The Man Booker Prize for Fiction (for The Narrow Road to the Deep North) &#91;52&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2014) Australian Prime Minister\'s Literary Prize (for The Narrow Road to the Deep North) &#91;53&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2015) Margaret Scott Prize (for The Narrow Road to the Deep North)&#91;54&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2016) The Athens Prize for Literature (for The Narrow Road to the Deep North) &#91;55&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['(2016) Lire Prix du meilleur livre étranger (for The Narrow Road to the Deep North) &#91;56&#93;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Peter Griffiths and Bruce Baxter,(2010) The Ever-Varying Flood. A History and Guide to the Franklin River. (2nd ed.) Preston, Vic. ISBN&#160;0-9586647-1-4  p.57','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ González Cueto, Irene (2017-03-06). "Nadando contracorriente con El libro de los peces de William Gould, de Richard Flanagan". Cultural Resuena (in Spanish).&#160;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ ""Parish-fed bastards"&#160;: a history of the politics of the unemployed in Britain, 1884-1939 / Richard ... - National Library of Australia". Retrieved 15 October 2014.&#160;','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Olive Senior (1987)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Festus Iyayi (1988)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Janet Frame (1989)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Mordecai Richler (1990)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Malouf (1991)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1992)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alex Miller (1993)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Vikram Seth (1994)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Louis de Bernières (1995)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rohinton Mistry (1996)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Earl Lovelace (1997)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1998)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Murray Bail (1999)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (2000)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2002)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Austin Clarke (2003)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Caryl Phillips (2004)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Andrea Levy (2005)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kate Grenville (2006)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lloyd Jones (2007)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lawrence Hill (2008)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Christos Tsiolkas (2009)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Rana Dasgupta (2010)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aminatta Forna (2011)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Richard_Flanagan']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Crow\'s Devil (2005)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Book of Night Women (2009)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A Brief History of Seven Killings (2014)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Madore, Joel (2011). "Jamaican Signatures: An Archetypal Analysis of Marlon James\' John Crow\'s Devil". Journal of Caribbean Literatures. 7: 69–75  &#8211; via EBSCO.&#160;','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b c d Battersby, Eileen (2016). Accessed 15 June 2018. "Booker Winner Marlon James Tops Tarantino for Body Count" Check &#124;url= value (help). Contemporary Literary Criticism. 405  &#8211; via Gale.&#160;','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Battersby, Eileen. "“Booker Winner Marlon James Tops Tarantino for Body Count”." Contemporary Literary Criticism, edited by Lawrence J. Trudeau, vol. 405, Gale, 2017. Literature Resource Center','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gifford, Sheryl. "(Re)Making Men, Representing the Caribbean Nation: Individuation in the Works of Fred D’Aguiar, Robert Antoni, and Marlon James." Diss. Florida Atlantic University, 2013. Print.','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Harrison, Sheri-Marie. "Excess in a Brief History of Seven Killings." Post45, 2015 Oct 24','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Machado Sáez, Elena (2015), "Writing the Reader: Literacy and Contradictory Pedagogies in Julia Alvarez, Michelle Cliff, and Marlon James", Market Aesthetics: The Purchase of the Past in Caribbean Diasporic Fiction, Charlottesville: University of Virginia Press, ISBN&#160;978-0-8139-3705-2&#160;.','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ozuna, Ana. "Feminine Power: Women Contesting Plantocracy in The Book of Night Women." Journal of Pan African Studies, vol. 10, no. 3, 2017, p.&#160;132+. Literature Resource Center','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Marlon_James_(novelist)']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Big Bank Take Little Bank (1991). Nuyorican Poets Cafe Press. ISBN&#160;0-9627842-7-3','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Joker, Joker, Deuce (1994). ISBN&#160;0-14-058723-3','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The White Boy Shuffle (1996). ISBN&#160;0-312-28019-X&#91;6&#93;','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tuff (2000). Alfred A. Knopf. ISBN&#160;0-375-40122-9','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Slumberland (2008). Bloomsbury USA, ISBN&#160;978-1596912410','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Sellout (2015). New York: Farrar Straus Giroux. London: Oneworld Publications, 2016. ISBN&#160;978-1786071477 (hardback), 978-1786070159 (paperback)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hokum: An Anthology of African-American Humor (2006). Bloomsbury USA. ISBN&#160;978-1596911482','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Aptowicz, Cristin O\'Keefe (2008), Words in Your Face: A Guided Tour Through Twenty Years of the New York City Poetry Slam. Soft Skull Press, p. 45. ISBN&#160;1-933368-82-9.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Bernstein, Richard (May 31, 1996). "BOOKS OF THE TIMES; Black Poet\'s First Novel Aims the Jokes Both Ways". The New York Times. ISSN&#160;0362-4331. Retrieved August 5, 2016.&#160;','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Books: Tuff By Paul Beatty", Time Magazine, May 1, 2000.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Black Humor", The New York Times, January 22, 2006.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Patrick Neate, "Jukebox sommelier", The Guardian, December 6, 2008.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Donnelly, Elisabeth, "Paul Beatty on writing, humor and race: \'There are very few books that are funny\'", The Guardian, March 10, 2015.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Eddo-Lodge, Reni, "The Sellout by Paul Beatty review – a whirlwind satire about racial identity", The Guardian, May 11, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "A Swiftian hero", The Economist, October 29, 2016. Article withdrawn for similarities with other articles, with apology.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "National Book Critics Circle Announces Award Winners for Publishing Year 2015", March 17, 2016. Retrieved November 4, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Sandhu, Sukhdev, "Paul Beatty: \'Slam poetry, TED talks: they\'re for short attention spans\'", The Guardian, June 24, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Alter, Alexandra, "Paul Beatty Wins Man Booker Prize With \'The Sellout\'", The New York Times, October 25, 2016. Retrieved October 25, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Masters, Tim, "Man Booker Prize: Paul Beatty becomes first US winner for The Sellout", BBC News, October 26, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Charlotte Higgins, "Turned down 18 times. Then Paul Beatty won the Booker …", The Guardian, October 26, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Alter, Alexandra (March 17, 2016). "\'The Sellout\' Wins National Book Critics Circle\'s Fiction Award". The New York Times. Retrieved March 18, 2016.&#160;','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Beatty, Paul, "Black Humor", The New York Times, January 22, 2006.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Interview at Full Stop, June 30, 2015.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Gatti, Tom, "Paul Beatty: \'I invented a Richter scale for racism\'", New Statesman, November 2, 2016.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Oscar Villalon, "Paul Beatty on Los Angeles Lit, The Sellout, and Life After the Man Booker", Zyzzyva, June 4, 2018, via LitHub.','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','Paul_Beatty']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['CivilWarLand in Bad Decline (1996)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pastoralia (2000)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tenth of December (2013)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lincoln in the Bardo (2017)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National Magazine Award for Fiction, 1994 – "The 400-Pound CEO", short story, published in Harper\'s Magazine','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National Magazine Award for Fiction, 1996 – "Bounty", short story, published in Harper\'s Magazine','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National Magazine Award for Fiction, 2000 – "The Barber\'s Unhappiness", short story, published in The New Yorker','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National Magazine Award for Fiction, 2004 – "The Red Bow", short story, published in Esquire','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['2nd Prize in the 1997 O. Henry Awards – "The Falls", short story, published in The New Yorker (January 22, 1996 issue)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lannan Foundation – Lannan Literary Fellowship, 2001','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['MacArthur Fellowship, 2006','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Guggenheim Fellowship, 2006','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['American Academy of Arts and Letters, Academy Award, 2009','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['World Fantasy Award for Best Short Story – "CommComm", published in The New Yorker (August 1, 2005 issue)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['PEN/Malamud Award for Excellence in the Short Story, 2013','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Story Prize, 2013 – Tenth of December: Stories','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Folio Prize, 2014 – Tenth of December: Stories','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['American Academy of Arts and Sciences, Elected as Member, 2014','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Booker Prize, 2017 – Lincoln in the Bardo','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['American Academy of Arts and Letters, Inducted as Member, 2018&#91;38&#93;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['PEN/Hemingway Award, 1996 – Finalist – CivilWarLand in Bad Decline','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Story Prize, 2006 – Finalist – In Persuasion Nation','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['National Book Award for Fiction, 2014 – Finalist – Tenth of December: Stories','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bram Stoker Award, 2011 – Finalist – "Home" (short story)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lincoln in the Bardo (2017)&#91;17&#93;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['CivilWarLand in Bad Decline (1996) (short stories and a novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pastoralia (2000) (short stories and a novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Persuasion Nation (2006) (short stories)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tenth of December: Stories (2013) (short stories)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Saunders, George (2006). A bee stung me, so I killed all the fish (notes from the Homeland 2003–2006). Riverhead Books.&#160;&#91;46&#93;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Braindead Megaphone (2007) (collected essays)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Congratulations, by the way: Some Thoughts on Kindness (2014)&#91;47&#93;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['&#8212; (July 11–18, 2016). "Trump days&#160;: up close with the candidate and his crowds". American Chronicles. The New Yorker. 92 (21): 50–61.&#160;CS1 maint: Date format (link) &#91;48&#93;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Fakes: An Anthology of Pseudo-Interviews, Faux-Lectures, Quasi-Letters, "Found" Texts, and Other Fraudulent Artifacts, edited by David Shields and Matthew Vollmer (2012)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Lovell, Joel (January 3, 2013). "George Saunders Has Written the Best Book You\'ll Read This Year". The New York Times Magazine. The New York Times.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b World Fantasy Convention (2010). "Award Winners and Nominees". Archived from the original on December 1, 2010. Retrieved February 4, 2011.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Larry Dark, "George Saunders Wins His First Book Award, The Story Prize, for Tenth of December", thestoryprize.blogspot.com, March 5, 2014.','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b Ron Charles (March 10, 2014). "George Saunders wins $67,000 for first Folio Prize". Washington Post. Retrieved March 11, 2014.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Tenth of December by George Saunders wins inaugural Folio Prize 2014" (PDF). Folio Prize. March 10, 2014. Archived from the original (PDF) on March 11, 2014. Retrieved March 11, 2014.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Booker winner took 20 years to write". bbc.com. October 18, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Childers, Doug (July 1, 2000). "The Wag Chats with George Saunders". The Wag. Retrieved 2007-06-04.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ a b "Choose Your Own Adventure: A Conversation With Jennifer Egan and George Saunders". The New York Times. November 15, 2015.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Bemis, Alec Hanley (May 10, 2006). "Mean Snacks and Monkey Shit". LA Weekly. pp.&#160;12–27. Retrieved 2007-06-04.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "George Saunders". newyorker.com. Retrieved October 18, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Clark, Judi. "George Saunders". Lannan Foundation. Retrieved October 18, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "John Simon Guggenheim Foundation". Retrieved October 18, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "George Saunders". MacArthur Foundation. Retrieved October 18, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Staff (April 14, 2009). "The American Academy Of Arts And Letters Announces 2009 Literature Award Winners" (PDF) (Press release). New York: American Academy of Arts and Letters. Retrieved October 19, 2017.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Archived copy". Archived from the original on April 15, 2015. Retrieved 2015-06-01.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The 2014 Folio Prize Shortlist is Announced". Folio Prize. February 10, 2014. Retrieved February 13, 2014.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Wood, Gaby (February 10, 2014). "Folio Prize 2013: The Americans are coming, but not the ones we were expecting". The Daily Telegraph. Retrieved February 13, 2014.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "The 10 Best Books of 2013". New York Times. 2013. Retrieved December 7, 2013.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Lovell, Joel. "George Saunders Just Wrote The Best Book You\'ll Read This Year". The New York Times Magazine. Retrieved February 1, 2013.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ "Bram Stoker Award 2011 Nominees". Locus Magazine. 2012. Retrieved May 2, 2012.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['^ Saunders, George (1999-06-14). "I Can Speak!". The New Yorker. ISSN&#160;0028-792X. Retrieved 2018-01-24.&#160;','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"George Saunders Has Written the Best Book You\'ll Read This Year", Joel Lovell, The New York Times Magazine, January 3, 2013','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"Adjust Your Vision: Tolstoy\'s Last and Darkest Novel", George Saunders, NPR, January 6, 2013','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['"George Saunders: On Story", by Sarah Klein &amp; Tom Mason, Redglass Pictures, The Atlantic, December 8, 2015','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['CivilWarLand in Bad Decline (1996, short stories and a novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pastoralia (2000, short stories and a novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Very Persistent Gappers of Frip (2000, novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Brief and Frightening Reign of Phil (2005, novella)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['In Persuasion Nation (2006, short stories)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Tenth of December: Stories (2013, short stories)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Lincoln in the Bardo (2017, novel)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['The Braindead Megaphone (2007, essays)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Congratulations, by the Way: Some Thoughts on Kindness (2014, commencement address)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['P. H. Newby (1969)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Bernice Rubens (1970)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (Lost Man Booker Prize, 1970)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['V. S. Naipaul (1971)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Berger (1972)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. G. Farrell (1973)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Nadine Gordimer / Stanley Middleton (1974)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ruth Prawer Jhabvala (1975)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['David Storey (1976)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Scott (1977)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Iris Murdoch (1978)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Fitzgerald (1979)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['William Golding (1980)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Salman Rushdie (1981)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Thomas Keneally (1982)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1983)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anita Brookner (1984)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Keri Hulme (1985)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kingsley Amis (1986)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Penelope Lively (1987)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (1988)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kazuo Ishiguro (1989)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['A. S. Byatt (1990)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ben Okri (1991)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Michael Ondaatje / Barry Unsworth (1992)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Roddy Doyle (1993)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['James Kelman (1994)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Pat Barker (1995)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Graham Swift (1996)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Arundhati Roy (1997)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Ian McEwan (1998)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['J. M. Coetzee (1999)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Margaret Atwood (2000)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Peter Carey (2001)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Yann Martel (2002)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['DBC Pierre (2003)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Alan Hollinghurst (2004)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['John Banville (2005)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Kiran Desai (2006)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Anne Enright (2007)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Aravind Adiga (2008)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2009)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Howard Jacobson (2010)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Julian Barnes (2011)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Hilary Mantel (2012)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Eleanor Catton (2013)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Richard Flanagan (2014)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Marlon James (2015)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['Paul Beatty (2016)','George_Saunders']);
		  
		 db.run("INSERT INTO booksName VALUES (?,?)", ['George Saunders (2017)','George_Saunders']);
		 		 
  }

}
