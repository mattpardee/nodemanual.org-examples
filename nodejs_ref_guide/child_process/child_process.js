// Example: Running ls in a child process

// Define the module, and then spawn a new 'ls' statement
var child_process = require('child_process'),
ls = child_process.spawn('ls');

// Let's redirect the ls results towards the console log 
ls.stdout.on('data', function (data) {
	    console.log('The results are: \n' + data);
});