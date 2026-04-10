var express = require("express");
var app = express();

// app.get(path,callback) : to fetch data
// app.get("/", (req, res) => {
    // res.set("Content-Type", "text/HTML");
    // res.type("text/html");
    // res.setHeader("Content-Type","text/html")

    // res.write("<h3>Hello</h3>");
    // res.send();
    // res.send("<h2>Express js</h2>");   error:Cannot set headers after they are sent to the client
    
// })
// app.listen(3000, "localhost", 100, () => { console.log("server started") })


// app.get("/about", (req, res) => {
//     res.send(`<h2 styple="color:purple">Express example</h2>`)

// })
// app.listen(3001)


student = { "name": "test", "age": 20 }
app.get("/j1", (req, res) => {
    res.send(student.age);
})
app.get("/j2", (re, res) => {
    res.json(student.age)
})

app.get("/j3", (req, res) => {
    res.write(JSON.stringify(student.age));
    res.send();
})
app.listen(3000, "localhost", 100, () => { console.log("server started") })


//  RESPONSE METHODS:
// res.send()
// res.json()
// res.end()
// res.sendFile()
// res.redirect()
// res.render()
// app.use()


// MIDDLEWARE
// app.get(path, (req, res, next))