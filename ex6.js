var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<form action="/calc" method="post">
        <input type="number" name="n1"/>
        <input type="number" name="n2"/>
        <select name="formula"/>
            <option value="add">addition</option>
            <option value="sub">subtraction</option>
        </select>
        <input type="submit"/>
        </form>`)
})

app.post('/calc', (req, res) => {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const f = req.body.formula;
    let result = 0;

    if (f==='add') {
        result=n1+n2;
    } else if (f==='sub') {
        result=n1-n2;
    }

    res.send(`Result: ${result}`);
});

app.listen(7003);