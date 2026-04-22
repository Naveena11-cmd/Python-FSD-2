var express = require("express");
var app = express();
const sess = require("express-session");
app.use(sess({ secret: "NAS", cookie: { maxAge: 15000 }, name: "Login" }));
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "stask1.html" }));

app.post("/savesession", (req, res) => {
    req.session.un = req.body.un;
    req.session.pass = req.body.pass;
    res.redirect("/fetchdata");
});

app.get("/fetchdata", (req, res) => {
    if (req.session.un === "admin" && req.session.pass === "admin@123") {
        res.send(`<h1>Welcome ${req.session.un}</h1>
            \n<a href="/destroy">logout</a>`)
    }
    else {
        res.send(`<h1>Please enter valid username and passowrd</h1>
            \n<a href="/">login</a>`)
    }
});

app.get("/destroy", (req, res) => {
    req.session.destroy((e) => {
        if (e) {
            res.send(e);
        }
        else {
            res.clearCookie("Login");
            res.send(`Session destroyed 
                \n<a href="/">login</a>`)
        }
    });
})
app.listen(5001);