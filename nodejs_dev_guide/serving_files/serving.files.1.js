// Example: Serving up an index

var fs = require('fs'),
http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + "/index.html", function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT || 8080, "0.0.0.0");