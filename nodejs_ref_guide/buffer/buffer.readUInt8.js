// Example
 
var buffer = new Buffer(4);
 
buffer[0] = 0x3;
buffer[1] = 0x4;
buffer[2] = 0x23;
buffer[3] = 0x42;
 
for (ii = 0; ii < buffer.length; ii++) {
 console.log(buffer.readUInt8(ii));
}
 
// prints the following:
// 0x3
// 0x4
// 0x23
// 0x42