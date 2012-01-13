var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Check the console for your results!\n');
  
    var emitter = new (require('events').EventEmitter);

    // establish two events, one for "test" and one for "print"
    emitter.addListener("test", function () { console.log("test"); });
    emitter.on("print", function (message) { console.log(message); });

    var someString = "variable";

    // try to launch the events
    emitter.emit("test");
    emitter.emit("print", "Here's a message, with " + someString);
    emitter.emit("unhandled");
}).listen("1337", "127.0.0.1");