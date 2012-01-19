// Example

// If you would like to parse the URL into its parts, you can use `require('url').parse(request.url)`. For example:
 
var url = require('url');

console.log(url.parse('/status?name=ryan'));

// prints:
// { search: '?name=ryan',
//  query: 'name=ryan',
//  pathname: '/status',
//  path: '/status?name=ryan',
//  href: '/status?name=ryan' }

