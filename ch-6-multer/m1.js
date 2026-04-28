var express = require("express");
var app = express();
var m = require("multer");

app.use(express.static(__dirname, { index: "m1.html" }))
var store = m.diskStorage({
    destination: "my", filename: (req, file, cb) => {
        cb(null, file.originalname)
        console.log(file);
    }
})

var upload = m({ storage: store })
app.post("/upload", upload.single("mydoc"), (req, res) => {
    var file = req.file;
    console.log(file);

    if (file) {
        res.send(`<h1>File <span style="color:red"> ${file.originalname} </span> has been uploaded in folder ${file.destination}</h1>`)
    }
})
app.listen(7007);