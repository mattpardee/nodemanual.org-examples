// Example

var fs = require('fs'); // Import the 'fs' module

// Read the file asynchronously
fs.readFile(__dirname + '/example.file', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data); // print it!
});