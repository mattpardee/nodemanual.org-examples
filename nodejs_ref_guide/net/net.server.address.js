// Example

var net = require('net');

var server = net.createServer(function (socket) {
 socket.end("goodbye\n");
});

// grab a random port
server.listen(function() {
  var address = server.address();
  console.log("opened server on %j", address);
});