// Exmaple: Passing in previous results to make benchmarks
var t = process.hrtime();
// [ 1800216, 927643717 ]

setTimeout(function () {
  t = process.hrtime(t);
  // [ 1, 6962306 ]

  console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
  // benchmark took 1 seconds and 6962306 nanoseconds
}, 1000);