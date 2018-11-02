var express = require("express");
// var path = require("path");
var friendProfiles = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req, res){
//     res.send("404");
// });
// require("./app/data/friends.js")(app);
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

console.log(friendProfiles);

// console.log(api + html);

// find differences between each friends score for EACH question
