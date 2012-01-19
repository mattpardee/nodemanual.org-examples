// Example

var url = require("url");

var relativeUrls = [
  ['/foo/bar/baz', 'quux', '/foo/bar/quux'],
  ['/foo/bar/baz', 'quux/asdf', '/foo/bar/quux/asdf'],
  ['/foo/bar/baz', '../../../../../../../../quux/baz', '/quux/baz'],
  ['/foo/bar/baz', '../../../../../../../quux/baz', '/quux/baz'],
  ['http://example.com/b//c//d;p?q#blarg',
   'http:#hash2',
   'http://example.com/b//c//d;p?q#hash2'],
  ['http://example.com/b//c//d;p?q#blarg',
   'http:/a/b/c/d',
   'http://example.com/a/b/c/d'],
  ['/foo/bar/baz', '/../etc/passwd', '/etc/passwd']
];
relativeUrls.forEach(function(relativeUrl) {
  var sResolvedUrl = url.resolve(relativeUrl[0], relativeUrl[1]);

  console.log("Resolving from " + relativeUrl[0] + " to " + relativeUrl[1] + " yields:");
  console.log(sResolvedUrl + "\n");
});
