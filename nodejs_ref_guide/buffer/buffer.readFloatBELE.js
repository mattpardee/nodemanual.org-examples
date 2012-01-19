// Example
 
var buffer = new Buffer(4);
 
buffer[0] = 0x00;
buffer[1] = 0x00;
buffer[2] = 0x80;
buffer[3] = 0x3f;
 
console.log(buf.readFloatBE(0));
console.log(buf.readFloatLE(0));

// prints: 
// 0x01
// 0x01