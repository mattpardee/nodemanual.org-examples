var fs = require('fs');
console.log(process.argv[2], '->', process.argv[3]);

var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);

readStream.on('data', function (chunk) {
  writeStream.write(chunk);
});

readStream.on('end', function () {
  writeStream.end();
});

//Some basic error handling
readStream.on('error', function (err) {
  console.log("ERROR", err);
});

writeStream.on('error', function (err) {
  console.log("ERROR", err);
});