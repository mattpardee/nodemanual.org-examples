// Example

var snowman = "☃";
var buffer = new Buffer(16)
console.log(buffer.write(snowman)); // 3
console.log(buffer.length); // 16