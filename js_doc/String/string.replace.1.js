// Example

function replacer(str, p1, p2, offset, s)
{
	return str + " - " + p1 + " , " + p2;
}

var newString = "XXzzzz".replace(/(X*)(z*)/, replacer);

console.log(newString);