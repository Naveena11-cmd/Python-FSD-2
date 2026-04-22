var express = require("express");
var app = express();

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send(`<form action="/data" method="post">
        <input name="un"/>
        <input type="password" name="pass"/>
        <input type="submit"/> </form>`)
})

var check = (req, res, next) => {

    if (req.body.un==="admin" && req.body.pass==="1234") {
        next();
    }
    else {
        console.log("invalid credentials")
    }
}

// var data = (req, res, next) => {
//     req.un = "admin"
//     req.pass = "1234";
//     console.log('user verified');
//     next();
// }

app.post("/data", check,(req, res) => {
    res.send(`<h1>WELCOME ${req.body.un}!</h1>`)
})
app.listen(7002);