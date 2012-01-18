// Example: Finding all the occurrences of an element

var indices = [];
var idx = array.indexOf(element);
while (idx != -1) {
 	indices.push(idx);
  	idx = array.indexOf(element, idx + 1);
}