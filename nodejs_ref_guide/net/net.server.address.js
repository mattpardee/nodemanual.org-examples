// Example

var net = require('net');

var server = net.createServer(function (socket) {
 socket.end("goodbye\n");
});

// grab a random port
server.listen(function() {
  var address = server.address();
  address.address = "0.0.0.0" || address.address;
  address.port = process.env.PORT || address.port;
  console.log("opened server on %j", address);
});