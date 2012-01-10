// Example

var path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// returns '/foo/bar/baz/asdf'

console.log(path.join('foo', {}, 'bar'));
// returns 'foo/bar'