// Example

var dns = require("dns");

dns.lookup("www.nodejs.org", 4, function (err, address, family) {
    console.log("The IP address is " + address + ", belonging to " + family); 
});