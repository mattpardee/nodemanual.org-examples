 // Example

var util = require('util');

console.log(util.isArray([]));
  // true
console.log(util.isArray(new Array));
  // true
console.log(util.isArray({}));
  // false