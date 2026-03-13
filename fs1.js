// File System module (synchronus)
var fs = require("fs");
fs.writeFileSync("a.txt", "Good morning");
// fs.mkdirSync("myfolder");
// fs.rmdirSync("myfolder");
var r = fs.readFileSync("a.txt");
console.log(r);
console.log(r.toString());
fs.appendFileSync("a.txt", "\n Node js file system");
var r1 = fs.readFileSync("a.txt", "utf-8");  //utf : unicode transformation format - output comes in the same format as input
console.log(r1);
fs.unlinkSync("a.txt");  //to delete file
console.log("completed")