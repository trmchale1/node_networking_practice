// fs takes the file_system as a variable

// buf pulls our third arg into the buffer

var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

// count newlines in our new buf variable

var lines = buf.toString().split('\n').length;
// theres one extra 
lines = lines -1

console.log(lines);
