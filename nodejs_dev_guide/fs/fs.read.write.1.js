// Example: Causing a real error

var fs = require('fs');

var goodWords = "Yet today I consider myself the luckiest man on the face of this earth.";

fs.writeFile('lou.txt', goodWords, function (err) {
  if (err) {
	return console.log(err);
  }
});

fs.readFile('lou.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});