// Example

var buffer = new Buffer(1234);

console.log(buffer.length); // 1234
buffer.write("some string", "ascii", 0);
console.log(buffer.length); // 1234