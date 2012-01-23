// Example

var buffer = new Buffer(4);

buffer[0] = 0x3;
buffer[1] = 0x4;
buffer[2] = 0x23;
buffer[3] = 0x42;

console.log(buffer.readUInt16BE(0));
console.log(buffer.readUInt16LE(0));
console.log(buffer.readUInt16BE(1));
console.log(buffer.readUInt16LE(1));
console.log(buffer.readUInt16BE(2));
console.log(buffer.readUInt16LE(2));

// prints the following:
// 0x0304
// 0x0403
// 0x0423
// 0x2304
// 0x2342
// 0x4223