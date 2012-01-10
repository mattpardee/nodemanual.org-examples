// Example

var util = require('util'),
    vm = require('vm'),
    sandbox = {
      animal: 'cat',
      count: 2
    };
 
var script = vm.createScript('count += 1; name = "kitty"', 'myfile.vm');
  
for (var i = 0; i < 10 ; i += 1) {
  script.runInNewContext(sandbox);
}
  
console.log(util.inspect(sandbox));
  
// prints: { animal: 'cat', count: 12, name: 'kitty' }