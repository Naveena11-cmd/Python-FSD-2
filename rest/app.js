var express = require("express")
var router = express.Router();
var obj = [{ id:1, name: "A", age: 18, city: "ahmd", branch: "cse" },
    { id: 2, name: "B", age: 20, city: "surat", branch: "ce" },
    { id: 3, name: "C", age: 19, city: "ahmd", branch: "cse" },
    { id: 4, name: "D", age: 18, city: "surat", branch: "ce" },
    { id: 5, name: "E", age: 19, city: "surat", branch: "cse" },
    { id: 6, name: "F", age: 19, city: "ahmd", branch: "ce" }
]

router.get("/", (req, res) => {
    res.type("text/html");
    for (o of obj) {
        res.write(`<h1>Name : ${o.name} 
            Age : ${o.age} 
            Branch : ${o.branch} 
            City : ${o.city}</h1>`)
    }
    res.send();
})

router.get("/id/:id", (req, res) => {
    var data = obj.filter(o => o.id == req.params.id)
    if (data.length>0) {
        res.send(data);
    }
    else
    {
        res.send("no data available");
    }
})

router.get("/branch/:branch", (req, res) => {
    var b = obj.filter(o => o.branch.toLowerCase() == req.params.branch.toLowerCase())
    if (b.length > 0) {
        res.send(b)
    }
    else {
        res.send("no data available")
    }
})

module.exports = router;
