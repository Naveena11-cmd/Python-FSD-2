var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`<h1>my home page</h1>
            <img src="a.png" width="500" height="300">`);
    }
    else {
        if (req.url === "/a.png") {
            var i = fs.readFileSync("a.png");
            res.writeHead(200, { "content-type": "image/png" });
            res.end(i);
        }
        else if (req.url === "/about") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(req.url);
            res.end("<h1>About page</h1>");
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.end("<h3>Page not found</h3>")
        }
    }
}).listen(8002, () => { console.log("server started"); });