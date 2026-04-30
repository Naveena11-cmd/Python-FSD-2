const express = require('express');
const path = require('path');
const app= express();

app.set("view engine","ejs");
app.use(express.urlencoded());
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/result",(req,res)=>{
    var marks1 = req.body.marks1;
    var marks2 = req.body.marks2;
    var marks = parseInt(marks1) + parseInt(marks2);
    var subject=req.body.subject;
    var name = req.body.un;
    res.render("result", {name: name, marks: marks, subject: subject});
});

app.listen(7001);