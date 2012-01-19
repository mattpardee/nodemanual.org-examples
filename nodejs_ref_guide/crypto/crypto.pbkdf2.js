// Example
 
var crypto = require("crypto");
var assert = require("assert");
 
crypto.pbkdf2('password', 'salt', 1, 20, function(err, result) {
 assert.equal(result, '\x0c\x60\xc8\x0f\x96\x1f\x0e\x71\xf3\xa9\xb5\x24\xaf\x60\x12\x06\x2f\xe0\x37\xa6', 'pbkdf1 test vector 1');
});