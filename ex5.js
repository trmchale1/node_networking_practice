// This problem is the dame as the previous but introduces the concept of modules
// We create a program that prints a list of files in the given directory, filtered by extentions

//

// first the filesystem
var fs = require('fs')
// this module contains utilities for handling and transforming the paths
var path = require('path') 

// our command line args
var folder = process.argv[2];
// 
var ext = '.' + process.argv[3];

fs.readir(folder, function onRead(err, list) {
	list.forEach(function onList(filename) {
	if(ext == path.extname(filename).toLowerCase()) {
		console.log(filename);
		}
	});
	});
