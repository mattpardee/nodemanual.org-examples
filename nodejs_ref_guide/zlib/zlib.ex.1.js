var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var inp = fs.createReadStream(__dirname + '/excerpt.txt');
var out = fs.createWriteStream(__dirname + 'excerpt.txt.gz');

inp.pipe(gzip).pipe(out);