var fs = require('fs');

fs.unlink('/tmp/hello_a', function (err) {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello_a');
});