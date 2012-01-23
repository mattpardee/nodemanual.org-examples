// Example

var buffer = new Buffer(8);
buffer.writeDoubleBE(0xdeadbeefcafebabe, 0);

console.log(buffer);

buffer.writeDoubleLE(0xdeadbeefcafebabe, 0);

console.log(buffer);

// prints the following
// <Buffer 43 eb d5 b7 dd f9 5f d7>
// <Buffer d7 5f f9 dd b7 d5 eb 43>