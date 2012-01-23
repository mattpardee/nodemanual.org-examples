// Example: Calculating elapsed time

// Using static methods:
var start = Date.now();

// the event you'd like to time goes here:
//doSomethingForALongTime();

var end = Date.now();
var elapsed = end - start; // time in milliseconds

console.log("Static elapsed: " + elapsed);

// If you have Date objects:
var start = new Date();

// the event you'd like to time goes here:
// doSomethingForALongTime();

var end = new Date();
var elapsed = end.getTime() - start.getTime(); // time in milliseconds

console.log("Date Elapsed: " + elapsed);

// If you want to test a function and get back its return:
function printElapsedTime (fTest) {
  var nStartTime = Date.now(), vReturn = fTest(), nEndTime = Date.now();
  console.log("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
  return vReturn;
}

console.log(printElapsedTime(function() {
  for (var i=0; i<1000000; i++) {}
  return 10;
}));