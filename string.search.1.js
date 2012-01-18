// Example: Using search

function testinput(re, str){
  var midstring;
  if (str.search(re) != -1){
     midstring = " contains ";
  }
  else{
     midstring = " does not contain ";
  }
  console.log (str + midstring + re.source);
}

testinput(/lore/i, "Here is a Lorem ipsum dolores");