// Example

var fs = require('fs');

fs.writeFile(__dirname + '/message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});