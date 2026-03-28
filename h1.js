//if there is h2,h3,p.. before h1, then all of it will be considered as plain text
//but if there is h2,h3,.. or any other tag then all of it will be considered as html 
var http = require("http");
http.createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/plain" });
    res.write("<h3>good morning</h3>");  
    res.write("<h1>WELCOME TO MY WEBSITE</h1>");
    res.write("hi");
    res.write("<h3>good morning</h3>");  //only h1 is supported without writeHead
    res.end("<h4>bye</h4>");
    // res.write("<h3>last line</h3>");  error:write after end
}).listen(7001, () => { console.log("server started"); });