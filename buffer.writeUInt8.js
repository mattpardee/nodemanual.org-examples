// Example
 
var buffer = new Buffer(4);
buffer.writeUInt8(0x3, 0);
buffer.writeUInt8(0x4, 1);
buffer.writeUInt8(0x23, 2);
buffer.writeUInt8(0x42, 3);
 
console.log(buffer);
 
// prints <Buffer 03 04 23 42>