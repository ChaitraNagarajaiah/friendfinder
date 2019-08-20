var express = require("express");
var path = require("path");


var app = express();
var PORT = 3030;

app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});