var fs = require("fs");
// fs.mkdirSync("task")
fs.writeFileSync("task/a.txt", "hello, Good morning");
fs.appendFileSync("task/a.txt", "\n new data added");
// var r = fs.readFileSync("task/a.txt","utf-8");
// fs.writeFileSync("task/a1.txt", r);
// fs.unlinkSync("task/a.txt")
// fs.copyFileSync("task/a.txt","task/a2.txt");
fs.renameSync("task/a2.txt", "task/new.txt");