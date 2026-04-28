var express = require("express")
var app = express();

var api = require("./app");
app.use("/students", api);
app.listen(7008);