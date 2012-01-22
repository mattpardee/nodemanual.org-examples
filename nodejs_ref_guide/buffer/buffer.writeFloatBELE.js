// Example
 
var buffer = new Buffer(4);
buffer.writeFloatBE(0xcafebabe, 0);
 
console.log(buffer);
 
buffer.writeFloatLE(0xcafebabe, 0);
 
console.log(buffer);
 
// <Buffer 4f 4a fe bb>
// <Buffer bb fe 4a 4f>