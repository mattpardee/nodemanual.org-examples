// Example
 
var buffer = new Buffer(4);
buffer.writeUInt32BE(0xfeedface, 0);
 
console.log(buffer);
 
buffer.writeUInt32LE(0xfeedface, 0);
 
console.log(buffer);
 
// prints the following
// <Buffer fe ed fa ce>
// <Buffer ce fa ed fe>