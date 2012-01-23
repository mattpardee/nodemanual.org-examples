// Example: Using `vm.runInThisContext` and `eval` to run the same code:


var vm = require('vm');

var localVar = 123;
var usingscript, evaled;

usingscript = vm.runInThisContext('localVar = 1;', 'myfile.vm');
console.log('localVar: ' + localVar + ', usingscript: ' + usingscript);

evaled = eval('localVar = 1;');
console.log('localVar: ' + localVar + ', evaled: ' + evaled);

// localVar: 123, usingscript: 1
// localVar: 1, evaled: 1

// Since `vm.runInThisContext()` doesn't have access to the local scope, `localVar` is unchanged. `eval` does have access to the local scope, so `localVar` is changed.