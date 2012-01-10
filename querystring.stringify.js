// Examples
 
var querystring = require('querystring');
 
console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
// prints: 
// 'foo=bar&baz=qux&baz=quux&corge='
 
console.log(querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':'));
// prints:
// 'foo:bar;baz:qux'