//copied after http://cstruter.com/blog/398
SQL.PersistentDatabase = function(name, success, failure) {
	var adapter, data = window.localStorage.getItem(name), result = null;
	if (data !== null) { // Fetch existing database from localStorage
		result = [];
		for (var i = 0, size = data.length; i < size; i++)
			result.push(data.charCodeAt(i));
		result = new Uint8Array(result);
	}
	try {
		adapter = new SQL.Database(result);
		
		/* Attempt to query the database, this gives us an early 
		   warning if something is wrong with the retrieved database */
		adapter.run('SELECT name FROM sqlite_master');
		
		/*
			Add a save function to our database object, this method must
			be called whenever you are ready to commit data, preferably
			as little as possible.
		*/
		adapter.save = function () {
			var result = adapter.export(), strings = [], chunksize = 0xffff;
			for (var i = 0; i * chunksize < result.length; i++)
				strings.push(String.fromCharCode.apply(null, result.subarray(i * chunksize, (i + 1) * chunksize)));
			window.localStorage.setItem(name, strings.join(''));
		};
	} catch(e) {
		// Callback executed for when life happens
		if (failure !== undefined) failure(e);
		return null;
	}
	// Callback executed when the database is initially created
	if ((result === null) && (success !== undefined)) success(adapter);
	
	return adapter;
}