// Example

var vm = require('vm');
 
globalVar = 0;
  
var script = vm.createScript('globalVar += 1', 'myfile.vm');
  
for (var i = 0; i < 1000 ; i += 1) {
  script.runInThisContext();
}
  
console.log(globalVar);
  
//prints: 1000