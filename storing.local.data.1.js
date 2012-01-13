// always require('fs') when using the file system  
var fs = require('fs');

var myOptions = {
    name: 'Avian',
    dessert: 'cake'
    flavor: 'chocolate',
    beverage: 'coffee'
};

var data = JSON.stringify(myOptions);

fs.writeFile('./config.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.')
  });