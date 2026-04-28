var express = require("express");
var app = express();
var m = require("multer");

app.use(express.static(__dirname, { index: "m2.html" }))
var store = m.diskStorage({
    destination: "my", filename: (req, file, cb) => {
        cb(null, file.originalname)
        console.log(file);
    }
})

var upload = m({ storage: store })
app.post("/upload", upload.array("mydoc",3), (req, res) => {  //3 : number of files user needs to insert
    var file = req.files;
    console.log(file);

    if (file) {
        res.type("text/html")
        for (f of file){
            res.write(`<h1>File <span style="color:red"> ${f.originalname} </span> has been uploaded in folder ${f.destination[f]}</h1>`)
        }
    }
    res.send();
})
app.listen(7009);