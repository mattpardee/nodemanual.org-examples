// Example
 
var https = require('https');
 
var options = {
  host: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};
 
var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
 
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();
 
req.on('error', function(e) {
  console.error(e);
});