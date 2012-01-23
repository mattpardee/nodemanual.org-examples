// Example: Using an inline function that modifies the matched characters

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTop')); // returns border-top