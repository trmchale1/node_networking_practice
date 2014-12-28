var http = require('http');

var urls = process.argv.slice(2);
var results = [];

for(i = 0; i < urls.length; i++) {
	results[i] = null;
}

// append data to result

for(i = 0; i < urls.length;i++) {
	(function(i) {
		http.get(urls[i], function(request) {
		var result = "";
		request.setEncoding("utf8");
		request.on("data", function(data) {
			result += data;
	});

	// a counter
	// result array given values

	request.on("end", function() {
		results[i] = result;
		var resultCount = 0;
		for (j = 0; j < results.length;j++) {
			if(results[j] != null) resultCount++;
	}
	
// print results array

	if(resultCount == results.length) {
		for(j = 0; j < results.length; j++) {
			console.log(results[j]);
		}
		}});
		});
		})(i);
		}
	
