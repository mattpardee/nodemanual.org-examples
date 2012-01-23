// Example

var path = require('path');
var assert = require('assert');


// test some arbitrary directories for the directory name
assert.equal(path.dirname('/a/b'), '/a');
assert.equal(path.dirname('/a'), '/');

// test some arbitrary extensions
assert.equal(path.extname('/path/to/file.ext'), '.ext');
assert.equal(path.extname('/path.to/file.ext'), '.ext');
assert.equal(path.extname('/.file'), '');
assert.equal(path.extname('/.file.ext'), '.ext');
assert.equal(path.extname('.path/file.ext'), '.ext');

// normalize the paths, and make sure the results are as expected
assert.equal(path.normalize('./fixtures///b/../b/c.js'),
  'fixtures/b/c.js');
assert.equal(path.normalize('/foo/../../../bar'), '/bar');
assert.equal(path.normalize('a//b//./c'), 'a/b/c');