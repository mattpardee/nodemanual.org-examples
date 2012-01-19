// Example

 var os = require('os');
 
 var hostname = os.hostname();
 console.log('hostname = %s', hostname);
 
 var uptime = os.uptime();
 console.log('uptime = %d', uptime);
 
 var cpus = os.cpus();
 console.log('cpus = ', cpus);
 
 var type = os.type();
 console.log('type = ', type);
 
 var release = os.release();
 console.log('release = ', release);
 
 var platform = os.platform();
 console.log('platform = ', platform);
 
 var arch = os.arch();
 console.log('arch = ', arch);
 
 var freemem = os.freemem();
 console.log('freemem = ', freemem);