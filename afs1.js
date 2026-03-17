var fs = require("fs");
fs.writeFile("a1.txt", "Hi", (e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("Async task complete");
    }
});
// fs.mkdir("AFS", (e) => {
//     if (e) {
//         throw e;
//     }
//     else {
//         console.log("folder created")
//     }
// });
// fs.rmdir("AFS");
// fs.writeFile("AFS/t1.txt", "Hi", (e) => {
//     if (e) {
//         throw e;
//     }
//     else {
//         console.log("t1.txt created");
//     }
// });

// fs.appendFile("AFS/t1.txt", "\nHello", (e) => {
//     if (e) {
//         console.log("File not found" + e);
//     }
//     else {
//         console.log("appended");
//     }
// });

// fs.readFile("AFS/t1.txt", "utf-8", (e, data) => {
//     if (e) {
//         throw e;
//     }
//     else {
//         fs.unlink("AFS/t1.txt", (e) => {
//             if (e) {
//                 throw e;
//             }
//             else {
//                 console.log("deleted");
//             }
//         })
//     }
// });

// fs.rmdir("AFS",(e) => {
//     if(e) {
//         throw e;
//     }
//     else {
//         console.log("folfer deleted");
//     }
// });

// fs.rename("a.txt", "new.txt", (e) => {
//     if (e) {
//         throw e;
//     }
//     else {
//         console.log("renamed");
//     }
// });

fs.copyFile("new.txt", "a2.txt", (e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("copied");
    }
});