// Example: Write and read the right way

var fs = require('fs');

var goodWords = "Yet today I consider myself the luckiest man on the face of this earth.";

fs.writeFile(__dirname + 'lou.txt', goodWords, function (err) {
  if (err) {
	  return console.log(err);
  }

  // we know the write is done at this point--so let's read that file!
  fs.readFile(__dirname + 'lou.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }

	  console.log(data);
  });
});