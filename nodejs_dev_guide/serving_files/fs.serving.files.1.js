var fs = require('fs'),
http = require('http');

http.createServer(function (req, res) {
    console.log("__dirname " + __dirname + " reurl" + req.url);
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT, "0.0.0.0");