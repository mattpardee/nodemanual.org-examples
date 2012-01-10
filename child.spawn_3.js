// Example: Checking for a failed `exec`:
 
var spawn = require('child_process').spawn,
   child = spawn('bad_command');
 
child.stderr.setEncoding('utf8');
child.stderr.on('data', function (data) {
 if (/^execvp\(\)/.test(data)) {
   console.log('Failed to start child process.');
 }
});