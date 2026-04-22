var express = require("express");
var app = express();

app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "stask3.html" }));

var newdata = (req, res, next) => {
    res.type("text/html");
    res.write(`<h1>Name : ${req.body.un}</h1>
        <h2>\nEmail is ${req.body.e}</h2>`)
    next();
}

app.post("/login", newdata, (req, res) => {
    if (req.body.subscribe === "on") {
        res.write(`<h1>Thank you for the subscription</h1>
            \n<a href="/">Logout</a>`)
    }
    else {
        res.write(`<h3>you can subscribe
            \n<a href="/subscribe">Subscribe</a></h3>`)
    }
    res.send();
})

app.get("/subscribe", (req, res) => {
    res.send(`<h1>Thank you for the subscription</h1>
        \n<a href="/">Logout</a>`)
});
app.listen(7000);