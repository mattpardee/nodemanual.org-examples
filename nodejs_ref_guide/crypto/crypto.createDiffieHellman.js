// Example

var crypto = require("crypto");
var assert = require("assert");

var diffieHellman1 = crypto.createDiffieHellman(256);
var prime1 = diffieHellman1.getPrime('base64');
var diffieHellman2 = crypto.createDiffieHellman(prime1, 'base64');
var key1 = diffieHellman1.generateKeys();
var key2 = diffieHellman2.generateKeys('hex');
var secret1 = diffieHellman1.computeSecret(key2, 'hex', 'base64');
var secret2 = diffieHellman2.computeSecret(key1, 'binary', 'base64');

assert.equal(secret1, secret2);