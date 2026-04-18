var express=require("express");
var app=express();

app.use(express.urlencoded());
var path=require("path");
var hp=path.join(__dirname,"../HTML");
var cp=path.join(__dirname,"../CSS");
var ip=path.join(__dirname,"../image");

app.use("/CSS", express.static(cp));
app.use("/image", express.static(ip));
app.use(express.static(hp, {index: "my.html"}));


app.post("/data", (req, res) => {
    res.type("text/html");
    res.write(`<h1>Welcome ${req.body.un}</h1>`);

    var m=(req.body.msg).split(".");

    for(i of m){
        res.write(i+"<br>");
    }
    res.write(`Click here to count vowel
        <a href="/message?msg=${req.body.msg}"> view message`)

        res.send();
})

app.get("/message",(req,res)=>{
    res.type("text/html");
    var m=req.query.msg
    var vowelCount=0
    for(i of m.toLowerCase()){
        if('aeiou'.includes(i)){
        vowelCount=vowelCount+1;
        }
    }
    res.write(`total vowels in "${m}" are : ${vowelCount}`)
    res.send();
})

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})
