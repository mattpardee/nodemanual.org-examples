// Example: Validate an error message using regular expressions:

var assert = require('assert');

assert.throws(
    function() {
        throw new Error("Wrong value");
    },
    /value/
);