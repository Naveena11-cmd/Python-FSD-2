var fs = require("fs");
const shape = { "d": { "a": 10, "b": 20, "c": [30, 50] } };

fs.writeFileSync("shape.txt", JSON.stringify(shape));
var r = fs.readFileSync("shape.txt", "utf-8");
var v = JSON.parse(r);
var a = v.d.a + v.d.b;
var s = v.d.c[1] - v.d.b;
var m = v.d.c[0] * v.d.c[1];

fs.appendFileSync("shape.txt", `\nAddition is ${a}
Subtraction is ${s}
Multiplication is ${m}`);