// Example: Fixing charAt to support non-Basic-Multilingual-Plane (BMP) characters

var str = 'A\uD87E\uDC04Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
  // / Adapt this line at the top of each loop, passing in the whole string
  // and the current iteration and returning a variable to represent the individual character
  if ((chr = fixedCharAt(str, i)) === false) {continue;}
  console.log(chr);
}


function fixedCharAt (str, idx) {
  var ret = '';
  str += '';
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    }
    else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return '';
  }

  ret += str.charAt(idx);

  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx+1))) {
    ret += str.charAt(idx+1); // Go one further, since one of the "characters" is part of a surrogate pair
  }
  return ret;
}