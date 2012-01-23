// Example

var fs = require('fs'); // Import the 'fs' module

var data = fs.readFileSync(__dirname + '/example.file','utf8'); // read the file
console.log(data); // print it!