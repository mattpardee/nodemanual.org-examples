var fs = require('fs');

fs.unlinkSync(__dirname + '/tmp/hello_s');
console.log('successfully deleted /tmp/hello_s');