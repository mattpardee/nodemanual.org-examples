// Example: Measuring execution time

var start = new Date();
for (var i = 0; i < 100000; i++)
  Math.sqrt(i);

var end = new Date();

console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");