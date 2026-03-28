var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/JSON" });  //if text/html in mime type then there will be no pretty-print option
    var d = { "subject": "FSD2", "faculty": "NAS" };
    res.end(JSON.stringify(d));
}).listen(8001, () => { console.log("server started on http://localhost:8001"); });