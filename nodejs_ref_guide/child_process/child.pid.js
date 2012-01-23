// Example

var spawn = require('child_process').spawn;
var grep = spawn('grep', ['ssh']);

console.log('Spawned child pid: ' + grep.pid);
grep.stdin.end();