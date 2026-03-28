// https://video.google.com:80/videopayth?id=10&name.pqr#page

// https - protocol
// video - subdomain
// google.com - domain
// 80 - port
// videopath - path
// id - 10 & name.pqr - paramters/query string
// page - fragment

// WHATWG : Web Hypertext Application Technology Working Group

var url = require("url");
var fs = require("fs");

var addr = "https://www.google.com:8080/about/students?year=2025&t1=22&t2=18&t3=23#example;"
var p = url.parse(addr,true); //adding true in the parameter will give query as an object
console.log(p);
process.noDeprecation = true;

var y = p.query.year;  //if true not passed in url.parse it will not fetch the value hence "undefined" will be the output
if (y % 4 == 0) {
    console.log(` ${y} is a leap year`)
}
else {
    console.log(` ${y} is not a leap year`)
}


var q = p.query;
fs.writeFileSync("f1.txt", JSON.stringify(q));

var m1 = parseInt(q.t1);
var m2 = parseInt(q.t2);
var m3 = parseInt(q.t3);
var total = m1 + m2 + m3;

fs.appendFileSync("f1.txt", `\ntotal marks : ${total}`);

