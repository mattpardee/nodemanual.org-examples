// Example

var querystring = require('querystring');
 
var sUrl = "www.bonk.foo/?username=abe&password=12345";
 
// the parse() function returns a JSON object of the URL parameters;
// we can access them with dot notation
var sPassword = querystring.parse(sUrl).password;
 
console.log("Your password is " + sPassword);
 
var oUrl = { username: 'abe', password: '54321' };
 
// stringify() does the opposite; it takes an object
// and turns it into a URL with paramters
var urlStringify = querystring.stringify(oUrl);
 
console.log("The URL is " + urlStringify);
 
// don't want the ampersand or equals seperators ?
// you can override them!
 
var urlStringify_MySeperators = querystring.stringify(oUrl, "#", ":");
 
console.log("The URL, in my format, is " + urlStringify_MySeperators);