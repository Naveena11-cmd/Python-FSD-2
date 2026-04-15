var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send(`<form action="/data" method="get">
        <input name="un"/>
        <input type="password" name="pass"/>
        <input type="submit"/> </form>`)
})

app.get("/data", (req, res) => {
    res.send(`<h1>WELCOME ${req.query.un}!</h1>
        <h2>Your password is ${req.query.pass}</h2>`)
})

app.listen(9001);



// using post method
app.use(express.urlencoded())
app.get("/", (req, res) => {
    res.send(`<form action="/data" method="post">
        <input name="un"/>
        <input type="password" name="pass"/>
        <input type="submit"/> </form>`)
})

app.post("/data", (req, res) => {
    res.send(`<h1>WELCOME ${req.body.un}!</h1>
        <h2>Your password is ${req.body.pass}</h2>`)
})
app.listen(7002);