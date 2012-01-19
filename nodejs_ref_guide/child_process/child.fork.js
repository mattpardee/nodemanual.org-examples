// Example
 
var childProcess = require('child_process');
 
var childNode = childProcess.fork(__dirname + '/sub.js');
 
childNode.on('message', function(message) {
 console.log('PARENT got message:', message);
});
 
childNode.send({ hello: 'world' });

