// Gracefully terminating from readline

var readline = require('readline');

var oInterface = readline.createInterface(process.stdin, process.stdout, null);
oInterface.question("What do you think of Node.js? ", function(answer) {
  console.log("Thank you for your valuable feedback.");

  // These two lines together allow the program to terminate. Without
  // them, it would run forever!
  oInterface.close();
  process.stdin.destroy();
});