var jsonStr = '{"name":"John Doe","age":32,"title":"VP of JavaScript"}';

var data = JSON.parse(jsonStr);

console.log(data.title);
// prints 'VP of JavaScript'