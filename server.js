var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3030;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, './app/public')));

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});