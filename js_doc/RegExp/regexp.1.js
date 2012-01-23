// Example: Using a regular expression to change data format

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr); // "Smith, John".