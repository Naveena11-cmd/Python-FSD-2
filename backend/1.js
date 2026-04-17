var express = require("express");
var app = express();

// if there is seperate folder for both backend and frontend
var path = require("path");
var sp = path.join(__dirname, "../frontend");
app.use(express.static(sp, { index: "1.html" }));

// app.use(express.static(sp))
// app.get("/", (req, res) => {
    // res.sendFile(sp + "/1.html")    //ONLY LOADS HTML NOT STATIC FILES
// });

// if there is a seperate folder for frontend
// app.use(express.static("frontend", { index: "1.html" }));

// if all files are in one folder
// app.use(express.static(__dirname);

app.listen(7000);
