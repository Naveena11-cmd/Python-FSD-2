const fs = require("fs");
const p = require("path");

var a = "LJ/sample.txt";
var fn = p.basename(a);
var dn = p.dirname(a);

var newpath = dn + "/" + fn;

fs.mkdir(dn, (e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("folder created")
    }
})
fs.writeFile(newpath, "Hello", (e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("file created")
        fs.copyFile(newpath, dn + "/temp.txt", (e) => {
            if (e) {
                throw e;
            }
            else {
                fs.unlink(newpath, (e) => {
                    if (e) {
                        throw e;
                    }
                    else {
                        console.log("file deleted")
                    }
                });
            }

            console.log("file copied");
        });


    }
});

