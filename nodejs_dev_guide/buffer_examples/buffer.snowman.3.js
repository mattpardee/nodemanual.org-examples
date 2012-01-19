// Example

var frosty = new Buffer(24);
var snowman = new Buffer("☃", "utf-8");

console.log(frosty.write("Happy birthday! ", "utf-8")); // 16
console.log(snowman.copy(frosty, 16)); // 3
console.log(frosty.toString("utf-8", 0, 19));
