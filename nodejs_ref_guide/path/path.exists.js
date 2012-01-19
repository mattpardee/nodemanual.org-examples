// Example

  var path = require("path");
  var util = require("util");
 
  path.exists('/etc/passwd', function (exists) {
   util.debug(exists ? "it's there" : "no passwd!?");
  });