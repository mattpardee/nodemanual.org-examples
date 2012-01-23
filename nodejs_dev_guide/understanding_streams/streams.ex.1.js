// Example: Reading from a file, and writing to another

var fs = require('fs');

//Open a file as a readable stream
var readStream = fs.ReadStream(__dirname + "/sentance.txt");
readStream.setEncoding('ascii'); // This is key; otherwise we'd be using buffers

var writeStream = fs.createWriteStream(__dirname + "/outFile.txt");

// every time "data" is read, this event fires
readStream.on('data', function(textData) {
  console.log("Found some text!");
  writeStream.write(textData);
});

// the reading is finished...
readStream.on('close', function () {
  writeStream.end(); // ...close up the write, too!
  console.log("I finished.");
});