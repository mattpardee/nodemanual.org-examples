var fs = require('fs');

var data = fs.readFileSync('./config.json'),
    myObj;

try {
    myObj = JSON.parse(data);
    console.dir(myObj);
  } catch (err) {
    console.log('There was an error parsing your JSON.')
    console.log(err);
}