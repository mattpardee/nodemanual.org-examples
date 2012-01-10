// Example: Copy an ASCII string into a buffer, one byte at a time
 
var string = "node.js";
var buffer = new Buffer(string.length);
 
for (var i = 0; i < string.length ; i++) {
 buffer[i] = string.charCodeAt(i);
}
 
console.log(buffer.toString());
// prints: node.js