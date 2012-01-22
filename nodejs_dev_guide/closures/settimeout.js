// Example: Trying to set a timeout

function handle() {
  console.log(message);
}

function setAlarm(message, timeout) {
  setTimeout(handle, timeout);
}

setAlarm("Wake UP!", 100);
