// Example
 
var buffer = new Buffer(4);
buffer.writeUInt16BE(0xdead, 0);
buffer.writeUInt16BE(0xbeef, 2);
 
console.log(buffer);
 
buffer.writeUInt16LE(0xdead, 0);
buffer.writeUInt16LE(0xbeef, 2);
 
console.log(buffer);
 
// prints the following
// <Buffer de ad be ef>
// <Buffer ad de ef be>