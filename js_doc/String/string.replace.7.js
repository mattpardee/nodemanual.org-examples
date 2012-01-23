// Example: Replacing a Fahrenheit degree with its Celsius equivalent

function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

console.log(f2c("212F")); // 100C
console.log(f2c("0F")); // -17.77777777777778C