// Example

var dgram = require('dgram');
var server=dgram.createSocket("udp4");

server.on("message",function(msg, rinfo) {
  console.log(""+msg);
});
server.addMembership("225.0.0.73");
server.bind(1811);