// Example: Printing the contents of an array

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0, = 2
// a[1, = 5
// a[2, = 9