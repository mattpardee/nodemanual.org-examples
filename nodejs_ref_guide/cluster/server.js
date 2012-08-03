// Example: Launching one cluster working for each CPU

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length; // Get the number of CPUs

if (cluster.isMaster) {
  // Fork each worker onto its own thread
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // When the worker dies, announce its PID and death
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.process.pid + ' died');
  });
}
else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(process.env.PORT, process.env.IP);
}
// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")