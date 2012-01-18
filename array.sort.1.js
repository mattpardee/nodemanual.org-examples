// Example: Creating, displaying, and sorting an array

var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b)
{
  return a - b;
}

console.log("stringArray: " + stringArray.join() +"\n");
console.log("Sorted: " + stringArray.sort() +"\n\n");

console.log("numberArray: " + numberArray.join() +"\n");
console.log("Sorted without a compare function: " + numberArray.sort() +"\n");
console.log("Sorted with compareNumbers: " + numberArray.sort(compareNumbers) +"\n\n");

console.log("numericStringArray: " + numericStringArray.join() +"\n");
console.log("Sorted without a compare function: " + numericStringArray.sort() +"\n");
console.log("Sorted with compareNumbers: " + numericStringArray.sort(compareNumbers) +"\n\n");

console.log("mixedNumericArray: " + mixedNumericArray.join() +"\n");
console.log("Sorted without a compare function: " + mixedNumericArray.sort() +"\n");
console.log("Sorted with compareNumbers: " + mixedNumericArray.sort(compareNumbers) +"\n\n");