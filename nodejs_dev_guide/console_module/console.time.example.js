console.time('myTimer');
var string = '';
for (var i = 0; i < 300; i++) {
(function (i) {
    string += 'aaaa' + i.toString();
})(i);
}
console.timeEnd('myTimer');