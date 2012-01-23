// Example: Using substr

var str = "abcdefghij";
console.log("(1,2): "   + str.substr(1,2));
console.log("(-3,2): "  + str.substr(-3,2));
console.log("(-3): "    + str.substr(-3));
console.log("(1): "     + str.substr(1));
console.log("(-20, 2): "+ str.substr(-20,2));
console.log("(20, 2): " + str.substr(20,2));