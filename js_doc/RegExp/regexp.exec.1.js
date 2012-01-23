// Example: Exec with the "global" flag

var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;

while ((myArray = myRe.exec(str)) != null) {
  var msg = "Found " + myArray[0] + ".  ";
  msg += "Next match starts at " + myRe.lastIndex;
  console.log(msg);
}