// Example: Sum up all values within an array

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});

console.log(total); // total == 6