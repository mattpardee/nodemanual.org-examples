// Example: Building two buffers
  
var buffer1 = new Buffer(26);
var buffer2 = new Buffer(26);
 
// fill buffer1 with the alphabet; fill buffer two with a bunch of exclamation points
for (var i = 0 ; i < 26 ; i++) {
 buffer1[i] = i + 97; // 97 is the ASCII code for a; thus, i + 97 fills up a buffer of abc ... e.t.c.
 buffer2[i] = 33; // 33 is the ASCII code for !
}
 
// copy into the 8th byte in buffer2 the values of bytes 16 (q) through 19 (t) from buffer1
buffer1.copy(buffer2, 8, 16, 20);
console.log(buffer2.toString('ascii', 0, 25)); // toString() coverts a buffer into a string
 
// prints: !!!!!!!!qrst!!!!!!!!!!!!!