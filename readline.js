// Example: Crafting a tiny command line interface:
 
var readline = require('readline'),
  readline = readline.createInterface(process.stdin, process.stdout),
  prefix = 'OHAI> ';
// Example

readline.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  readline.setPrompt(prefix, prefix.length);
  readline.prompt();
}).on('close', function() { // Invoke 'close' by typing Command-C (on most terminals)
  console.log('Have a great day!');
  process.exit(0);
});
console.log(prefix + 'Good to see you. Try typing stuff.');
readline.setPrompt(prefix, prefix.length);
readline.prompt();