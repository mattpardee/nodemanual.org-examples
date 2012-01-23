// Example: Pluralizing the words (strings) in an array

function fuzzyPlural(single) {
  return single.replace(/o/g, 'e');
}

var words = ["foot", "goose", "moose"];
console.log(words.map(fuzzyPlural));

// ["feet", "geese", "meese"]