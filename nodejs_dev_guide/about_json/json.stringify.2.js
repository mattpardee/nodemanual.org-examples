console.log(JSON.stringify([1, 2, 3])); // returns [1, 2, 3]

console.log(JSON.stringify([1, 2, 3], function replacer(key, value) {
  if (!Array.isArray(value)) {
    return value;
  }
  var len = value.length;
  var result = { length: len };
  
  for (var i = 0; i < len; ++i) {
    result[i] = value[i];
  }
  return result;
}));

// inserts two spaces
console.log(JSON.stringify({ a: 1, b: 2}, null, 2));
// insertes four spaces
console.log(JSON.stringify({ a: 1, b: 2}, null, 4));
//inserts a tab character
console.log(JSON.stringify({ a: 1, b: 2}, null, '\t'));