// Example

var frosty = new Buffer(24);
var puddle = frosty.slice(16, 19);

console.log(puddle.toString());
console.log(puddle.write("___")); // 3
console.log(frosty.toString("utf-8", 0, 19)); 