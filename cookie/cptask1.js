var express = require("express");
var app = express();
var cp = require("cookie-parser");
const { nextTick } = require("node:process");
app.use(cp());
app.use(express.urlencoded());

app.use(express.static(__dirname, { index: "cptask1.html" }));
app.post("/next", (req, res) => {
    res.cookie("fn", req.body.fn);
    res.cookie("ln", req.body.ln);
    res.cookie("pass", req.body.pass);
    res.redirect("/admin");
});

app.get("/admin", (req, res) => {
    res.clearCookie("ln");
    res.send(`<h1>First name: ${req.cookies.fn}
        \nLast name : ${req.cookies.ln}</h1>
        <h2>Password : ${req.cookies.pass}</h2>`)
})

app.listen(5000);