var express = require("express");
var app = express();
var cp = require("cookie-parser");
const { nextTick } = require("node:process");
app.use(cp());
app.use(express.urlencoded());

app.use(express.static(__dirname, { index: "cptask2.html" }));

app.post("/submit", (req, res) => {
    var { n, e, msg, r } = req.body
    var feedback = { n, e, msg, r };
    res.cookie("feedback", feedback, { maxAge: 10000 });

    res.send(` <h3>Feedback submitted successfully!</h3>
        <a href="/view-feedback">View Feedback Details</a>`)
});

app.get("/view-feedback", (req, res) => {
    var fb=req.cookies.feedback
    if (fb) {
        res.send(`<p>name: ${fb.n}
        \nEmail : ${fb.e}
        \nMessage : ${fb.msg}
        \nRating : ${fb.r}</p>
        <a href="/" >logout</a>`)
    }
    else {
        res.send(`<h3>no feedback available
        \n<a href="/" >logout</a> </h3>`)
    }
    
})
app.listen(5000);