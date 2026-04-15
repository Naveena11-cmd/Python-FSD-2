var express = require("express");
var app = express();

app.get("/user/:uid/branch/:b", (req, res) => {
    res.write(JSON.stringify(req.params))
    res.write(JSON.stringify(req.query))
    res.send();
});
app.listen(7007)
// http://localhost:7007/user/101/branch/cse : in browser
// {"uid":"101","b":"CSE"}

// http://localhost:7007/user/101/branch/CSE?sub=fsd2&marks=20
// {"uid":"101","b":"CSE"}{"sub":"fsd2","marks":"20"}

