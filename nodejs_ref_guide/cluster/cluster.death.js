// Example

var cluster = require('cluster');

cluster.on('death', function(worker) {
  console.log('worker ' + worker.pid + ' died. restart...');
  cluster.fork();
});