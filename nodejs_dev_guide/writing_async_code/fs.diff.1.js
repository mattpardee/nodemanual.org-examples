var fs = require('fs'); // Import the 'fs' module

// Asynchronous version
fs.readFile('example.file', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
});

//====================

// Synchronous version
var data = fs.readFileSync('example.file','utf8');
console.log(data);