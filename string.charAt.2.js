// Example: Getting whole characters

var str = 'A\uD87E\uDC04Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
	if ((chr = getWholeChar(str, i)) === false) {continue;} // Adapt this line at the top of each loop, passing in the whole string and the current iteration and returning a variable to represent the individual character
	console.log(chr);
}

function getWholeChar (str, i) {
   var code = str.charCodeAt(i);     

   if (isNaN(code)) {
       return ''; // Position not found
   }
   if (code < 0xD800 || code > 0xDFFF) {
       return str.charAt(i);
   }
   if (0xD800 <= code &amp;&amp; code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
       if (str.length <= (i+1))  {
           throw 'High surrogate without following low surrogate';
       }
       var next = str.charCodeAt(i+1);
       if (0xDC00 > next || next > 0xDFFF) {
           throw 'High surrogate without following low surrogate';
       }
       return str.charAt(i)+str.charAt(i+1);
   }
   // Low surrogate (0xDC00 <= code &amp;&amp; code <= 0xDFFF)
   if (i === 0) {
       throw 'Low surrogate without preceding high surrogate';
   }
   var prev = str.charCodeAt(i-1);
   if (0xD800 > prev || prev > 0xDBFF) { // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
       throw 'Low surrogate without preceding high surrogate';
   }
   return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
}