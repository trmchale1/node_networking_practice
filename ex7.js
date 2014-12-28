/* wrtie a program that performs a HTTP GET request to a URL providd to you as the first command-line argument. Write the string contents of each "data " event from the response to a new line on the console (stdout).
*/
var http = require('http');
var url = process.argv[2];

var done = function(response)
{
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.on('data', console.log);
};

http.get(url,done);
