// Example

var util = require('util');
var vm = require('vm');

var initSandbox = {
  animal: 'cat',
  count: 2
};
var context = vm.createContext(initSandbox);

vm.runInContext('count += 1; name = "CATT"', context, 'myfile.vm');
console.log(util.inspect(context));

// { animal: 'cat', count: 3, name: 'CATT' }