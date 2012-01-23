// Example: Performing a POST

var http = require('http');

var options = {
  host: 'posttestserver.com',
  path: '/post.php',
  method: 'POST'
};

// we don't really need a callback for this example,
// so let's leave not include one
var request = http.request(options, function (response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
});

// the data to POST needs to be a string or a buffer
request.write("Shot through the heart, and you're to blame. Darling, you give love a bad name.");
request.end();