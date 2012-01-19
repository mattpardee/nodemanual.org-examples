// Example
 
// asynchronous version:
crypto.randomBytes(256, function(ex, buf) {
 if (ex) throw ex;
 console.log('Have %d bytes of random data: %s', buf.length, buf);
});
 
// synchronous version:
try {
 var buf = crypto.randomBytes(256);
 console.log('Have %d bytes of random data: %s', buf.length, buf);
} catch (ex) {
 // handle error
}