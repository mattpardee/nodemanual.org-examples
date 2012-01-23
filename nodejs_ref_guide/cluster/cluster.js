// Example: Message passing between clusters and the master process

var cluster = require('cluster');
var http = require('http');
var numReqs = 0;

if (cluster.isMaster) {
  // Fork two workers onto their own thread
  for (var i = 0; i < 2; i++) {
    var worker = cluster.fork();

    // The worker got a message! If it's notifyRequest, update the iterator
    worker.on('message', function(msg) {
      if (msg.cmd && msg.cmd == 'notifyRequest') {
        numReqs++;
      }
    });
  }

  // Take a break, and list the number of notifications
  setInterval(function() {
    console.log("numReqs =", numReqs);
  }, 1000);
}
else {
  // If the worker is not the master process, run it as an HTTP server
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    // Go back and send a new notification request to the worker
    process.send({ cmd: 'notifyRequest' });
  }).listen(process.env.PORT || 8080, "0.0.0.0");
}
// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")