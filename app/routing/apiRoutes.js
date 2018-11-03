// using require we access the friends array built in the friends.js file
var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    if (friendsData = true) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      alert("Please fill out the entire survey.");
      friendsData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });
};
