var fs = require("fs");

var m = function () {
    fs.mkdir("MyTask", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("folder created");
        }
    });
};
setTimeout(m, 1000);

var w = function(){
    fs.writeFile("MyTask/t1.txt", "Hello", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("file created");
        }
    });
};
setTimeout(w, 2000);

var a = function () {
    fs.appendFile("MyTask/t1.txt", "Good Morning", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("appended");
        }
    });
};
setTimeout(a, 3000);

var c = function () {
    fs.copyFile("MyTask/t1.txt", "MyTask/t2.txt", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("file copied");
        }
    });
};
setTimeout(c, 4000);

var read = function () {
    fs.readFile("MyTask/t1.txt", "utf-8", (e, data) => {
        if (e) {
            throw e;
        }
        else {
            console.log(data);
        }
    });
};
setTimeout(read,5000)
var d = function () {
        fs.unlink("MyTask/t1.txt", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("file deleted");
        }
    });
};
setTimeout(d, 6000);

var r = function () {
    fs.rename("MyTask/t2.txt", "MyTask/t1.txt", (e) => {
        if (e) {
            throw e;
        }
        else {
            console.log("File renamed")
        }
    });
};
setTimeout(r, 7000);