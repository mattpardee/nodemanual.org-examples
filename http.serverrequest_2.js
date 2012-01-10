// Example

// If you would like to extract the params from the query string, you can use `require('querystring').parse()`, or pass `true` as the second argument to `require('url').parse`.  For example:
 
var url = require('url');

console.log(url.parse('/status?name=ryan'), true);

// prints:
// { href: '/status?name=ryan',
//  search: '?name=ryan',
//  pathname: '/status' }