var fs = require("fs");
fs.writeFileSync("v.txt","Welcome to LJ University");
var r = fs.readFileSync("v.txt", "utf-8")

let c = 0;
let v="aeiouAEIOU"
for (let n = 0; n <= r.length; n++){
    if(v.includes(r[n])){
        c = c + 1;
    }
}
fs.appendFileSync("v.txt", `\nvowel count : ${c}`);