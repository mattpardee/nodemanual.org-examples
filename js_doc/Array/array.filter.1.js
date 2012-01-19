// Example: Filtering out all small values

function isBigEnough(element, index, array) {
  return (element >= 10);
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
// filtered is [12, 130, 44]