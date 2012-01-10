// Example
 
var buffer1 = new Buffer(50);
buffer1.fill("h");
// buffer1 is now just a long stream of h characters

var buffer2 = new Buffer(50);
buffer2.fill("j", 0, 10);
// only butes 0 through 9 are filled with the character j