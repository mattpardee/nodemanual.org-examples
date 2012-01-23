// Example: Testing for equivalency

var assert = require('assert');

var iX = 0;
var iY = 5;

assert.equal(iX, iY);
// prints a fail message to the console, because iX is not equal to iY

var iZ = 0;

assert.equal(iZ, false, "Pass:  0 and false are the same when compared with ==.");
assert.strictEqual(iZ, false, "Fails: 0 is a Number type, and false is Boolean");

var jsonA = {a: 1};

assert.notDeepEqual(jsonA, {a: "1"}, "Failed: expecting a string, but got a number");
// fails, because 1 and "1" have no deep equivalency