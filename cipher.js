// Example

var crypto = require("crypto");

// Test encryption and decryption
var plaintext = 'Keep this a secret? No! Tell everyone about node.js!';
var cipher = crypto.createCipher('aes192', 'MySecretKey123');

// encrypt plaintext which is in utf8 format
// to a ciphertext which will be in hex
var ciph = cipher.update(plaintext, 'utf8', 'hex');
// Only use binary or hex, not base64.
ciph += cipher.final('hex');

var decipher = crypto.createDecipher('aes192', 'MySecretKey123');
var txt = decipher.update(ciph, 'hex', 'utf8');
txt += decipher.final('utf8');

assert.equal(txt, plaintext, 'encryption and decryption');