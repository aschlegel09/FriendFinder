var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var friendMatch = {
      name: "",
      imageUrl: "",
      scoreDifference: Infinity
    };

    var inputData = req.body;
    var inputScore = inputData.scores;

    var tDifference;

    for (var i = 0; i < friendsData.length; i++) {
      var thisFriend = friendsData[i];
      tDifference = 0;

      console.log(thisFriend.name);

      for (var x = 0; x < thisFriend.scores.length; x++) {
        var thisFriendScore = thisFriend.scores[x];
        var userScore = inputScore[x];
        console.log(userScore);
        tDifference += Math.abs(parseInt(userScore) - parseInt(thisFriendScore));
      }

      if (tDifference <= friendMatch.scoreDifference) {
        friendMatch.name = thisFriend.name;
        friendMatch.imageUrl = thisFriend.imageUrl;
        friendMatch.scoreDifference = tDifference;
      }
    }

    friendsData.push(inputData);

    res.json(friendMatch);
  });
};