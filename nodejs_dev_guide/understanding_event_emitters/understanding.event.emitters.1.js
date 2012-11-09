// Example

var http = require('http');

http.createServer(function (req, res) {
  var chunks = [];
  req.addListener('data', function (chunk) {
    chunks.push(chunk);
  });
  req.addListener('end', function () {
    // Do something with body text
    console.dir(chunks);
  });
}).listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0");

// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")

console.log("Server started!");