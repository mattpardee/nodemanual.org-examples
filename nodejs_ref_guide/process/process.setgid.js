// Example
 
console.log('Current gid: ' + process.getgid());
try {
    process.setgid(501);
    console.log('New gid: ' + process.getgid());
}
catch (err) {
    console.log('Failed to set gid: ' + err);
}