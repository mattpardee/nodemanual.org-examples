// Example

var sString = '\u00bd + \u00bc = \u00be';

console.log(sString + ": " + sString.length + " characters, "
  + Buffer.byteLength(sString, 'utf8') + " bytes");

// prints: ½ + ¼ = ¾: 9 characters, 12 bytes