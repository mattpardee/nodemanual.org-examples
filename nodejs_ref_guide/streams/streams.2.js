// Example: Reading from the console

var http = require('http');
var stdout = process.stdout; // a writeable stream
var stdin = process.stdin; // a readable stream

// navigate to the web server in your browser, and then switch to the console
// to interact with the text
http.createServer(function (request, response) {
  stdout.write("Tell me something--anything!--and I'll flip it around on you." +
    "\nHit Enter when you're done: ");

  // process.stdin is paused by default, so we need to "start" it
  stdin.resume();

  // we don't want multiple input, so we'll use listen for 'once'
  // instead of 'on'
  stdin.once('data', function (userInput) {
      var strUserInput = userInput.toString();
      stdout.write(strUserInput.split("").reverse().join(""));
  });
}).listen(process.env.PORT || 8080, "0.0.0.0");
// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")