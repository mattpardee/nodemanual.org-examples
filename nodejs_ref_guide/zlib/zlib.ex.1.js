var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('excerpt.txt');
var out = fs.createWriteStream('excerpt.txt.gz');

inp.pipe(gzip).pipe(out);