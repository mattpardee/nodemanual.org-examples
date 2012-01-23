// Example:

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});

console.log(flattened); // flattened is [0, 1, 2, 3, 4, 5]