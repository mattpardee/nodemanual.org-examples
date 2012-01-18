// Example

var isTrue = function(value, callback) {
 if (value === true) {
   callback(null, "Value was true.");
 }
 else {
   callback(new Error("Value is not true!"));
 }
    }

    var callback = function (error, retval) {
 if (error) {
   console.log(error);
   return;
 }
 console.log(retval);
    }

// Note: when calling the same asynchronous function twice like this, 
// you are in a race condition. You have no way of knowing for certain 
// which callback will be called first when calling the functions in this manner.

isTrue(false, callback); // outputs 'Value is not true!'
isTrue(true,  callback); // output 'Value was true'