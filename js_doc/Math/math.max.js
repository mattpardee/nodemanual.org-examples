// Example: Using Math.max with an array

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray([23, 42, 54, 100, 2, 85]));