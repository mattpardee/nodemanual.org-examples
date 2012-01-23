// Example: Using Math.random

// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom() {
  return Math.random();
}


// Returns a random number between min and max
function getRandomArbitary(min, max) {
  return Math.random() * (max - min) + min;
}


// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom());

console.log(getRandomArbitary(1, 10));

console.log(getRandomInt(1, 10));