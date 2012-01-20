var crypto = require('crypto');
var fs = require('fs');
 *    
// Test Certificates
var caPem = fs.readFileSync('./test_ca.pem', 'ascii');
var certPem = fs.readFileSync('./test_cert.pem', 'ascii');
var keyPem = fs.readFileSync('./test_key.pem', 'ascii');
 * 
var credentials = crypto.createCredentials(
                                           {key: keyPem,
                                           cert: certPem,
                                           ca: caPem});