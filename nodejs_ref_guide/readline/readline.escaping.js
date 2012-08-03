// Gracefully terminating from readline

var rl = require('readline');

var i = rl.createInterface(process.stdin, process.stdout, null);
i.question("What do you think of node.js?", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback.");

  // These two lines together allow the program to terminate. Without
  // them, it would run forever.
  i.close();
  process.stdin.destroy();
});