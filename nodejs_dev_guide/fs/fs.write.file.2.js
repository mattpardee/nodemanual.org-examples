var fs = require('fs');

fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});