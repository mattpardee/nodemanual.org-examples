// Example: Using indexOf to count occurrences of a letter in a string

var str = "xactly why I want to xamine something for Mr. X.";
var count = 0;
var pos = str.indexOf("x");
while ( pos != -1 ) {
  count++;
  pos = str.indexOf("x",pos+1);
}

console.log(count); // 2