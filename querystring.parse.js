// Example
 
var querystring = require('querystring');

console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));
// prints:
// { foo: 'bar', baz: ['qux', 'quux'], corge: '' }