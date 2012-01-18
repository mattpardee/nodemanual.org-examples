// Example: Removing spaces from a string

var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);
var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);