// Example

var fs = require('fs');
var http = require('http');
var url = require('url') ;

http.createServer(function (req, res) {
  var queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  res.writeHead(200);
  res.end('Feel free to add query parameters to the end of the url');
}).listen(process.env.PORT, "0.0.0.0");
    // We're using the special Cloud9 IDE port and hostname here;
    // you'll probably just want something like (8080, "127.0.0.1")