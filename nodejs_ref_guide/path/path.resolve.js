// Examples

var path = require("path");
console.log(path.resolve('/foo/bar', './baz'));
//prints: /foo/bar/baz

console.log(path.resolve('/foo/bar', '/tmp/file/'));
//prints: /tmp/file


console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// if currently in /home/myself/node, it prints '/home/myself/node/wwwroot/static_files/gif/image.gif'