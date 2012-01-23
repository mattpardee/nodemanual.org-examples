// Example: Grabbing a URL's query string

var querystring = require('querystring');
var sampleURL = "http://www.amazon.com/Dark-Back-Time-Javier-Marias/dp/0811215709/ref=sr_1_1?s=books&ie=UTF8&qid=1327136343&sr=1-1";

var parsedURL = querystring.parse(sampleURL.substring(sampleURL.lastIndexOf("/") + 1));

console.log(parsedURL);