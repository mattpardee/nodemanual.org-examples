// Example

var assert = require('assert');

var iX = 4;
var iY = 5;

assert.fail(iX, iY, "iX is bigger than iY", "<");
// prints nothing, because it does not fail

assert.fail(iX, iY, "iX is bigger than iY", ">");
// prints a failure, because iX > iY is not true