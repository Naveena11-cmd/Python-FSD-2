// SYNC & ASYNC FILE SYSTEM
var fs = require("fs");
fs.writeFileSync("a.txt", "Good morning");
console.log("Sync operation done");
fs.writeFile("a1.txt", "Hi", (e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("Async task complete");
    }
});
console.log("last line");