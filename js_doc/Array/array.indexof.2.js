// Example: Finding all the occurrences of an element

var array = [1, 2, 5, 2, 5, 6, 2];
var element = 2;

var indices = [];
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices);