// Example: A client-server pair that show you how to listen for the `upgrade` event using `http.getAgent`:

var http = require('http');

// Create an HTTP server
var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});

srv.on('upgrade', function(req, socket, head) {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n\r\n'
  );

  socket.pipe(socket); // echo back
});

var port = process.env.PORT || 1337;

// now that the server is running...
srv.listen(port, '127.0.0.1', function() {

  // ...make a request
  var options = {
    port: port,
    host: process.env.HOSTNAME || '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket'
    }
  };

  var req = http.request(options);
  req.end();

  req.on('upgrade', function(res, socket, upgradeHead) {
    console.log('got upgraded!');
    socket.end();
    process.exit(0);
  });
});


