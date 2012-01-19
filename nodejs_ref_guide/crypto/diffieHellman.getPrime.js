// Example
var crypto = require("crypto");
var assert = require("assert");
 
// Create your first diffieHellman
var diffieHellman1 = crypto.createDiffieHellman(256);
var private1 = diffieHellman1.getPrime('base64');
var key1 = diffieHellman1.generateKeys();
 
// Create another diffieHellman using generated keys from diffieHellman1,
// and compute the secret again
var diffieHellman2 = crypto.createDiffieHellman(private1, 'base64');
var private2 = diffieHellman1.getPrivateKey();
diffieHellman2.setPublicKey(key1);
diffieHellman2.setPrivateKey(private2);
 
assert.equal(diffieHellman1.getPrime(), diffieHellman2.getPrime());