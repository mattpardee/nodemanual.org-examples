// Example

var crypto = require("crypto");
var assert = require("assert");

var hmac = crypto.createHmac('sha1', 'Node')
  .update('some data')
  .update('to hmac')
  .digest('hex');

assert.equal(hmac, '19fd6e1ba73d9ed2224dd5094a71babe85d9a892', 'test HMAC');