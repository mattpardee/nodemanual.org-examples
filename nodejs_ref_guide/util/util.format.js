// Example

// If the placeholder does not have a corresponding argument, the placeholder is not replaced, as in this example:

var util = require("util");
util.format('%s:%s', 'foo'); // 'foo:%s'

// If there are more arguments than placeholders, the extra arguments are converted to strings with `util.inspect()` and these strings are concatenated, delimited by a space:

var util = require("util");
util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'

// If the first argument is not a format string, then [[util.format `util.format()`]] returns a string that is the concatenation of all its arguments separated by spaces. Each argument is converted to a string with [[util.inspect `util.inspect()`]].

var util = require("util");
util.format(1, 2, 3); // '1 2 3'