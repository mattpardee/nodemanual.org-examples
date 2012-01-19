// Example

var util = require('util'),
    vm = require('vm'),
    sandbox = {
      animal: 'cat',
      count: 2
    };

vm.runInNewContext('count += 1; name = "kitty"', sandbox, 'myfile.vm');
console.log(util.inspect(sandbox));
 
// { animal: 'cat', count: 3, name: 'kitty' }