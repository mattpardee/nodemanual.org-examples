// Example
  
var buffer = new Buffer(256);
var iLength = buffer.write('\u00bd + \u00bc = \u00be', 0);
console.log(iLength + " bytes: " + buffer.toString('utf8', 0, iLength));
// prints: 12 bytes: ½ + ¼ = ¾