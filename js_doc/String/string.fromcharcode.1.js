// Example

 // String.fromCharCode() alone can't get the character at such a high code point
 // The following, on the other hand, can return a 4-byte character as well as the 
 // usual 2-byte ones (i.e., it can return a single character which actually has 
 // a string length of 2 instead of 1!)

console.log(fixedFromCharCode(0x2F804)); // or 194564 in decimal

function fixedFromCharCode (codePt) {
   if (codePt > 0xFFFF) {
       codePt -= 0x10000;
       return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 +
(codePt & 0x3FF));
   }
   else {
       return String.fromCharCode(codePt);
   }
}