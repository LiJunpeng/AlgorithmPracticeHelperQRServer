var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");


app.use('/public', express.static(__dirname + "/public"));

app.use('/', indexRouter);

app.use("/api/v1", restRouter);

app.listen(3001);
