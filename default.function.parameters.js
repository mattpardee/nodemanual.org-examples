example = function (optionalArg) {
  optionalArg = optionalArg || "The default is: no parameter was passed";
  console.log(optionalArg);
}

betterExample = function (optionalArg) {
if (typeof optionalArg === 'undefined') {
  optionalArg = "The default is: truly, no parameter was passed";
}
console.log(optionalArg);
}

console.log("Without parameters:");
example();
betterExample();

console.log("\nWith paramater:");
example("A parameter was passed!");
betterExample("A parameter was passed!");

console.log("\nEmpty String:");
example("");
betterExample("");