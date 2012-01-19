// Example: Measuring execution time

var end, start;
 
start = new Date();
for (var i = 0, i < 1000, i++)
    	Math.sqrt(i);
end = new Date();
 
console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");