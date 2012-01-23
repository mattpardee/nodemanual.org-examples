// Example: Listening for `SIGINT`:

// Start reading from stdin so we don't exit.
process.stdin.resume();

// Now, you, the user, must send a SIGIN. An easy way to do this
// is with `Control-C` in most terminal programs.

process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
});
process.on('SIGTERM', function () {
  console.log('Got SIGINT.');
  process.exit();
});