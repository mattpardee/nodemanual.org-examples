// Example

var formidable = require('formidable'),
http = require('http'),
util = require('util');

http.createServer(function(req, res) {
 
 // This if statement is here to catch form submissions, 
 // and initiate multipart form data parsing.     
 if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
 
   // Instantiate a new formidable form for processing.
   var form = new formidable.IncomingForm();
   
   // form.parse() analyzes the incoming stream data, 
   // picking apart the different fields and files for you.
   form.parse(req, function(err, fields, files) {
     if (err) {
       // Check for and handle any errors here.
       console.error(err.message);
       return;
     }

     res.writeHead(200, {'content-type': 'text/plain'});
     res.write('received upload:\n\n');
               
     // This last line responds to the form submission 
     // with a list of the parsed data and files.
     res.end(util.inspect({fields: fields, files: files}));
   });

   return;
 }

 // If this is a regular request, and not a form submission, then send the form
 res.writeHead(200, {'content-type': 'text/html'});
 res.end(
   '<form action="/upload" enctype="multipart/form-data" method="post">'+
   '<input type="text" name="title"><br>'+
   '<input type="file" name="upload" multiple="multiple"><br>'+
   '<input type="submit" value="Upload">'+
   '</form>'
 );
    }).listen(process.env.PORT, "0.0.0.0");
    // We're using the special Cloud9 IDE port and hostname here;
    // you'll probably just want something like (8080, "127.0.0.1")