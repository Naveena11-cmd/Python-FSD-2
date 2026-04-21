var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.get("/", (req, res) => {
    res.cookie("fname", "test");
    res.cookie("lname", "xyz");
    res.cookie("subject", "fsd2", { maxAge: 5000 });  //cookie expires after 5000ms(5 secs)
    res.cookie("email", "test@gmail.com", { expires: new Date(Date.now()+1000) });
    res.clearCookie("lname");
    
    res.send(req.cookies);
})
app.listen(5002);
