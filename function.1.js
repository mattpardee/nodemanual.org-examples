// Example: Specifying arguments with the Function constructor

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
console.log(adder(2, 6)); // 8