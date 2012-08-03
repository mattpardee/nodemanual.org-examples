// Example: Starting a REPL on stdin, a Unix socket, and a TCP socket:

var net = require("net"),
    repl = require("repl");

connections = 0;

repl.start({
  prompt: "node via stdin> ",
  input: process.stdin,
  output: process.stdout
});

net.createServer(function (socket) {
  connections += 1;
  repl.start({
    prompt: "node via Unix socket> ",
    input: socket,
    output: socket
  }).on('exit', function() {
    socket.end();
  })
}).listen("/tmp/node-repl-sock");

net.createServer(function (socket) {
  connections += 1;
  repl.start({
    prompt: "node via TCP socket> ",
    input: socket,
    output: socket
  }).on('exit', function() {
    socket.end();
  });
}).listen(5001);

/* Running this program from the command line starts a REPL on stdin.  Other
REPL clients may connect through the Unix socket or TCP socket. `telnet` is useful
for connecting to TCP sockets, and `socat` can be used to connect to both Unix and
TCP sockets. */