// Example

var path = require("path");
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));
// prints: ..\\..\\impl\\bbb


console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// prints: ../../impl/bbb