// Example

var dns = require("dns");

dns.resolve("www.c9.io", 'A', function (err, address) {
    console.log("The IP address is " + address); 
});