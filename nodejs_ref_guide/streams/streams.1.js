// Example: Printing to the console

var http = require('http');
var stdout = process.stdout; // This is a writeable stream to the console

// navigate to the provided URL, and watch the console's print messages
http.createServer(function (request, response) {
  stdout.write("Hello");
  stdout.write("\nWorld!");
}).listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0");
// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")