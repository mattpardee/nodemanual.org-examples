// Example: Using the test method

function testinput(re, str){
  var midstring;
  if (re.test(str)) {
     midstring = " contains ";
  } else {
     midstring = " does not contain ";
  }
  console.log(str + midstring + "'" + re.source + "'");
}

testinput(/nana/, "Bananas are delicious");