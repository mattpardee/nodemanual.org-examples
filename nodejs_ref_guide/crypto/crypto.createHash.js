// Example: Testing an MD5 Hash
 
var crypto = require("crypto");
var assert = require("assert");
 
var hash1 = crypto.createHash('sha1').update('Test123').digest('hex');
var hash2 = crypto.createHash('md5').update('Test123').digest('binary');
 
assert.equal(hash1, '8308651804facb7b9af8ffc53a33a22d6a1c8ac2', 'Test SHA1');
assert.equal(hash2, 'h\u00ea\u00cb\u0097\u00d8o\fF!\u00fa+\u000e\u0017\u00ca' +
            '\u00bd\u008c', 'Test MD5 as binary');