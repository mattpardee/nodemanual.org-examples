// Example

// First, create a file called process.argv.js:

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});