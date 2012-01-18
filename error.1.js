// Example: Custom Error Types

// Create a new object, that prototypally inherits from the Error constructor.
function MyError(message) {
    this.name = "MyError";
    this.message = message || "Default Message";
}
MyError.prototype = new Error();
MyError.prototype.constructor = MyError;
 
try {
    throw new MyError();
} catch (e) {
    console.log(e.name);    // "MyError"
    console.log(e.message);  // "Default Message"
}
 
try {
    throw new MyError("custom message");
} catch (e) {
    console.log(e.name);    // "MyError"
    console.log(e.message);  // "custom message"
}