/*
Write a program that performs a HTTP GET request to a URL provided to you as the first command line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you wrtie should just be an integer representening the number of characters recieved from the server and the second line should contain the complete String of charaters sent by the server.
*/

 var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

