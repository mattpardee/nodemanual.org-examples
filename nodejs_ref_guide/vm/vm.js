// Example

var vm = require('vm');

// create a new script object to make life easier
var Script = vm.Script;
var script = new Script('"var x = 5;";');
 
// first, create a new context in which to run the "scripts"
var context = script.createContext();
var scriptResult = script.runInContext(context);
console.log("Result of the script is: ", scriptResult);

// ok, now update the context with a new script that's a JSON object
context = script.createContext({'foo': 'bar', 'thing': 'dang!'});
 
console.log(context.foo);
console.log(context.thing);
 
// now, let's update that previous context by changing the variable
script = new Script('foo = 3;');
result = script.runInContext(context);
 
console.log(context.foo);
console.log(context.thing);