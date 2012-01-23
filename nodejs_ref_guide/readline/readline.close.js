// Example of listening for `close`, and exiting the program afterward:

var readline = require('readline');

readline.on('close', function() {
  console.log('goodbye!');
  process.exit(0);
});