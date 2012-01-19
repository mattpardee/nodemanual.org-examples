console.log("entering try-catch statement");

try {
  console.log("entering try block");
  throw "thrown message";
  console.log("this message is never seen");
}
catch (e) {
  console.log("entering catch block");
  console.log(e);
  console.log("leaving catch block");
}
finally {
  console.log("entering and leaving the finally block");
}

console.log("leaving try-catch statement");