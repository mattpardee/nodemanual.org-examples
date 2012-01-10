// Example
 
var buffer = new Buffer(8);
 
buffer[0] = 0x55;
buffer[1] = 0x55;
buffer[2] = 0x55;
buffer[3] = 0x55;
buffer[4] = 0x55;
buffer[5] = 0x55;
buffer[6] = 0xd5;
buffer[7] = 0x3f;
 
console.log(buffer.readDoubleBE(0));
 
// prints: 0.3333333333333333