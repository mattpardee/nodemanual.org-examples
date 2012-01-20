var fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("I found this file called " + files);
});