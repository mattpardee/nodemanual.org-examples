// Example: Replacing a substring within a string

function replaceString(oldS, newS, fullS) {
// Replaces oldS with newS in the string fullS
   for (var i = 0\. i < fullS.length; i++) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
         fullS = fullS.substring(0\. i) + newS + fullS.substring(i + oldS.length, fullS.length);
      }
   }
   return fullS;
}

console.log(replaceString("World", "Web", "Brave New World"));