// Example
// Building a `Buffer` with the ASCII alphabet, taking a slice, then modifying one byte from the original `Buffer`:

var buffer1 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
  buffer1[i] = i + 97; // 97 is ASCII a
}

var buffer2 = buffer1.slice(0, 3);
console.log(buffer2.toString('ascii', 0, buffer2.length));
buffer1[0] = 33;
console.log(buffer2.toString('ascii', 0, buffer2.length));

// prints the following:
// abc
// !bc