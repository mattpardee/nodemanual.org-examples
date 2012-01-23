//The child script sub.js might look like this:

process.on('message', function(message) {
  console.log('CHILD got message:', message);
});

process.send({foo: 'bar'});