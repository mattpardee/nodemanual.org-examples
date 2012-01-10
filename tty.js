// Example
 
var tty = require('tty');
process.stdin.resume();
tty.setRawMode(true);
process.stdin.on('keypress', function(char, key) {
// Hit Control-C to get out of the TTY
if (key && key.ctrl && key.name == 'c') {
    console.log('graceful exit');
    process.exit()
  }
});
 