// Examples

var path = require("path");
path.extname('index.html')
// prints: .html

path.extname('index.')
// prints: .

path.extname('index')
// prints: ''