// Example: Sum up all values within an array

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return a.concat(b);
}, []);

console.log(flattened); // flattened is [4, 5, 2, 3, 0, 1]