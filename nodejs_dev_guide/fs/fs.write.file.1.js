// Example: Writing to a file

var fs = require('fs');

var someText = "Too legit, too legit to quit.";

fs.writeFile('my_words.txt', someText, function (err) {
  if (err) {
	return console.log(err);
  }

  console.log("We're here? We're good!");
});