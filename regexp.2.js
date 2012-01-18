// Example: Using a regular expression with the "sticky" flag

var text = "First line\nsecond line";
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
print(match[1]);  // prints "First"
print(regex.lastIndex); // prints 11

var match2 = regex.exec(text);
print(match2[1]); // prints "Second"
print(regex.lastIndex); // prints "22"

var match3 = regex.exec(text);
print(match3 === null); // prints "true"