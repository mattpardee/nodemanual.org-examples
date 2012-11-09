// Event emitters example

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Your console contains the results of this example!\n');

  // create a new (generic) event emitter
  var EventEmitter = require('events').EventEmitter;
  var ee = new EventEmitter();

  var callback_once = function() {
    console.log("A singular callback has been called!");
  };

  var callback_many = function() {
    console.log("Let's keep calling me!");
  };

  ee.once("event", callback_once);
  ee.emit("event");
  ee.emit("event");

  console.log ("Moving on...");

  ee.on("event", callback_many);
  ee.emit("event");
  ee.emit("event");

  console.log("Let's remove the multiple calls.");

  ee.removeListener("event", callback_many);
  ee.emit("event");
}).listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0");

// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")