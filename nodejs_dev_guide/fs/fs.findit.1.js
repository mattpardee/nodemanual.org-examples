//This sets up the file finder
var finder = require('findit').find(__dirname);

//This listens for directories found
finder.on('directory', function (dir) {
  console.log('Directory: ' + dir + '/');
});

//This listens for files found
finder.on('file', function (file) {
  console.log('File: ' + file);
});