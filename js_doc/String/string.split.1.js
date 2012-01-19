// Example: Using split

function splitString(stringToSplit,separator)
{
  var arrayOfStrings = stringToSplit.split(separator);
  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log("The array has " + arrayOfStrings.length + " elements: ");

  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";