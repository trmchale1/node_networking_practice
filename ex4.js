//This program uses an asynchronous filesystem operation using "Node" features


//same
var fs = require('fs')
// 1st arg our filename, [encoding], [callback]
fs.readFile(process.argv[2], 'utf8', function (err, data) {

	if(err) return console.error(err);
	var length = data.toString().split("\n").lengthi;

	if (length > 0)  length -= 1;
	console.log(data);

	}); 
