// Example: A UDP server listening on port 41234:

var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
  console.log("server got: " + msg + " from " +
    rinfo.address + ":" + rinfo.port);
});

server.on("listening", function () {
  var address = server.address();
  address.address = process.env.IP || address.address;
  address.port = process.env.PORT || address.port;
  console.log("server listening " +
    address.address + ":" + address.port);
});

server.bind(process.env.PORT || 41234);
// server listening 0.0.0.0:41234