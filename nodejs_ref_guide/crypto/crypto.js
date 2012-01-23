// Example

var crypto = require("crypto");
var plaintext = "She sells sea shells by the sea shore.";

// Test encyrption and decryption with explicit key and iv
var encryption_key = '0123456789abcd0123456789';
var iv = '12345678';

var cipher = crypto.createCipheriv('des-ede3-cbc', encryption_key, iv);
var ciph = cipher.update(plaintext, 'utf8', 'hex');
ciph += cipher.final('hex');

console.log("Your secret phrase is: " + ciph);

var decipher = crypto.createDecipheriv('des-ede3-cbc', encryption_key, iv);
var txt = decipher.update(ciph, 'hex', 'utf8');
txt += decipher.final('utf8');

console.log("Your original phrase is: " + txt);