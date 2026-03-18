var p = require("path");
var addr = "D:/LJU/node/my.html";
// var bn = p.basename(addr);
// var dn = p.dirname(addr);
// var en = p.extname(addr);
// console.log(`Base name is ${bn}
// Directory name is ${dn}
// Exntension name is ${en}`);

var ps = p.parse(addr);
console.log(ps);
/* root: 'D:/',
dir: 'D:/LJU/node',
base: 'my.html',
ext: '.html',
name: 'my'*/