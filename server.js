var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

var Friends = require("./app/data/friends.js");
  
console.log("\nName: " + Friends.name + "\nImage Url: " + Friends.imageUrl + "\nScores: " + Friends.scores + "\n");