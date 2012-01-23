// Example

var spawn = require('child_process').spawn;
var grep  = spawn('grep', ['ssh']);

grep.on('exit', function (code, signal) {
  console.log('child process terminated due to receipt of signal '+signal);
});

// send SIGHUP to process
grep.kill('SIGHUP');