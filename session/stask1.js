var express = require("express");
var app = express();
const sess = require("express-session");
app.use(sess({ secret: "NAS", cookie: { maxAge: 15000 }, name: "Login" }));
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"stask1.html"}))

app.post("/savesession", (req, res) => {
    req.session.un = req.body.un;
    req.session.pass = req.body.pass;
    res.redirect("/fetchsession");
})

app.get("/fetchsession", (req, res) => {
    res.send(`<h2>Welcome ${req.session.un} \nYour password is ${req.session.pass} </h2>
        \n<p><a href="/deletesession">logout</a></p>`)
})

app.get("/deletesession", (req, res) => {
    req.session.destroy((e) => {
        if (e) {
            res.send(e);
        }
        else {
            res.clearCookie("Login");
            res.send("destroyed")
        }
    });
})
app.listen(5000);