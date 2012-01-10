// Example

var dgram = require('dgram');
var assert = require('assert');
var Buffer = require('buffer').Buffer;

function pingPongTest(port, host) {
  var callbacks = 0;
  var N = 500;
  var count = 0;
  var sent_final_ping = false;
 
  var server = dgram.createSocket('udp4', function(msg, rinfo) {
    console.log('server got: ' + msg +
                ' from ' + rinfo.address + ':' + rinfo.port);
 
    if (/PING/.exec(msg)) {
      var buf = new Buffer(4);
      buf.write('PONG');
      server.send(buf, 0, buf.length,
                  rinfo.port, rinfo.address,
                  function(err, sent) {
                    callbacks++;
                  });
    }
  });
 
  server.on('listening', function() {
    console.log('server listening on ' + port + ' ' + host);
 
    var buf = new Buffer('PING'),
        client = dgram.createSocket('udp4');
 
    client.on('message', function(msg, rinfo) {
      console.log('client got: ' + msg +
                  ' from ' + rinfo.address + ':' + rinfo.port);
      assert.equal('PONG', msg.toString('ascii'));
 
      count += 1;
 
      if (count < N) {
        client.send(buf, 0, buf.length, port, 'localhost');
      } else {
        sent_final_ping = true;
        client.send(buf, 0, buf.length, port, 'localhost', function() {
          client.close();
        });
      }
    });
 
    client.on('close', function() {
      console.log('client has closed, closing server');
      assert.equal(N, count);
 
      server.close();
      assert.equal(N - 1, callbacks);
    });
 
    console.log('Client sending to ' + port + ', localhost ' + buf);
    client.send(buf, 0, buf.length, port, 'localhost', function(err, bytes) {
      if (err) {
        throw err;
      }
      console.log('Client sent ' + bytes + ' bytes');
    });
    count += 1;
  });
  server.bind(port, host);
}
 
pingPongTest(20989, 'localhost');