// Example

var buffer = new Buffer(4);

buffer[0] = 0x3;
buffer[1] = 0x4;
buffer[2] = 0x23;
buffer[3] = 0x42;

console.log(buffer.readUInt32BE(0)); // 0x03042342
console.log(buffer.readUInt32LE(0)); // 0x42230403