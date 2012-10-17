// Exmaple: Passing in previous results to make benchmarks
var time = process.hrtime();
// [ 1800216, 927643717 ]

setTimeout(function () {
  var diff = process.hrtime(time);
  // [ 1, 6962306 ]

  console.log('benchmark took %d seconds and %d nanoseconds',
              diff[0], diff[1]);
  // benchmark took 1 seconds and 6962306 nanoseconds
}, 1000);