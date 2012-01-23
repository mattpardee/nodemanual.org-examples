var crypto = require('crypto');
var fs = require('fs');

// Test Certificates
var caPem = fs.readFileSync(__dirname + '/test_ca.pem', 'ascii');
var certPem = fs.readFileSync(__dirname + '/test_cert.pem', 'ascii');
var keyPem = fs.readFileSync(__dirname + '/test_key.pem', 'ascii');

var credentials = crypto.createCredentials({
  key: keyPem,
  cert: certPem,
  ca: caPem
});

console.log(credentials);