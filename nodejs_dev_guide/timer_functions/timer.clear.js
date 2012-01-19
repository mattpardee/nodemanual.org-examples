// Example

function never_call() {
   console.log("You should never call this function");
}

var id1 = setTimeout(never_call,1000);
var id2 = setInterval(never_call,1000);

clearTimeout(id1);
clearInterval(id2);