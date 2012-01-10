// Example
 
var childSpawn = require('child_process').spawn,
    grep  = spawn('grep', ['ssh']);
 
console.log('Spawned child pid: ' + grep.pid);
grep.stdin.end();