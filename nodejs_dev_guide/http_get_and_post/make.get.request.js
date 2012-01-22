// Example: Perform a GET request and write the results to a file

var http = require('http');
var fs = require('fs');

//The url we want, plus the path and options we need
var options = {
  host: 'twitter.com',
  path: '/statuses/public_timeline.json',
  method: 'GET'
};

var processPublicTimeline = function(response) {
  var tweetData = '';

  // keep track of the data you receive
  response.on('data', function(tweets) {
    tweetData += tweets + "\n";
  });

  // finished? ok, write the data to a file
  response.on('end', function() {
    fs.writeFile('blather.txt', tweetData.toString(), function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  });
}

// make the request, and then end it, to close the connection
http.request(options, processPublicTimeline).end();

