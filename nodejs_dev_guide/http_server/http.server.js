// Example: Running a simple server

var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, HTTP!\n');
};

var server = http.createServer(requestListener);

// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")
server.listen(process.env.PORT || 8080, "0.0.0.0");