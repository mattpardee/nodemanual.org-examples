// Example

var path = require("path");
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// prints: quux.html

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// prints: quux