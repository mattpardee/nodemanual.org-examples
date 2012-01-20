var http = require('http');
var postHTML = "<html><head><title>Post Example</title></head><body>" +
'<form method="post">' +
  'Input 1: <input name="input1"><br>' +
    'Input 2: <input name="input2"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
    res.writeHead(200);
    res.end(postHTML);
  });
}).listen(process.env.PORT, "0.0.0.0");
    // We're using the special Cloud9 IDE port and hostname here;
    // you'll probably just want something like (8080, "127.0.0.1")