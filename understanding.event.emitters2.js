var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Check the console for your results!\n');

    var EventEmitter = require('events').EventEmitter;
    var ee = new EventEmitter();

    var callback_once = function() {
      console.log("Callback has been called!");
    }

    var callback_many = function() {
      console.log("Let's keep calling me!");
    }
    
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
    
    // In theory, callback_once should still emit--but since
    // we defined it as emitting once(), we get nothing here

}).listen("1337", "127.0.0.1");