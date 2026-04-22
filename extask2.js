var express = require("express");
var app = express();

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send(`<form action="/login" method="get">
        <input name="un"/>
        <input type="password" name="pass"/>
        <input type="textarea" name="text"/>
        <input type="submit"/> </form>`)
})

app.get("/login", (req, res) => {
    res.send(`<h1>WELCOME ${req.query.un}!</h1>
        <h2>Your password is ${req.query.pass}</h2>
        <h2>Text ${req.query.text}</h2>
        <form action="/message" method="get">
        <input type="button" placeholder="get vowels"/></form>`)
})

app.get("/message", (req, res) => {
    if () {
        
    }
})

app.listen(9001);
