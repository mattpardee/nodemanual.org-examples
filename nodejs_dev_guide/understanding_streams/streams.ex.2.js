// Example: Streaming with pipe in an HTTP server

var http = require('http'),
    fs = require('fs'),
    util = require('util');

http.createServer(function(request, response) {
    // don't worry, this song is GPL! http://freemusicarchive.org/music/Northbound/
    var mp3File = "./Northbound__Forward.mp3";
    var stat = fs.statSync(mp3File); // we need some info about the file size

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(mp3File);
    // instead of events we'll make a single call to a helper function
    util.pump(readStream, response);
})
.listen(process.env.PORT, "0.0.0.0");

// We're using the special Cloud9 IDE port and hostname here;
// you'll probably just want something like (8080, "127.0.0.1")