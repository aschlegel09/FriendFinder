var friendsData = require("../data/friends");
// var bodyParser = require("body-parser");

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

    var tDifferene;

    for (var i = 0; i < friendsData.length; i++) {
      var thisFriend = friendsData[i];
      tDifferene = 0;

      console.log(thisFriend.name);

      for (var x = 0; x < thisFriend.scores.length; x++) {
        var thisFriendScore = thisFriend.scores[x];
        var userScore = inputScore;

        tDifferene += Math.abs(parseInt(userScore) - parseInt(thisFriendScore));
      }

      if (tDifferene <= friendMatch.scoreDifference) {
        friendMatch.name = thisFriend.name;
        friendMatch.imageUrl = thisFriend.imageUrl;
        friendMatch.scoreDifference = tDifferene;
      }
    }

    friendsData.push(inputData);

    res.json(friendMatch);
  });
};

    
//     if ((friendsData = true)) {
//       var json = res.json(friendsData);
//       console.log(req.body);
//       console.log("Match made");
//       console.log(json);
//       // res.json(true);
//     } else {
//       alert("There are no friends to match with.");
//       console.log("error");
//     }
//   });

//   //option to clear
//   app.post("/api/clear", function(req, res) {
//     friendsData.length = [];
//     res.json({ ok: true });
//   });
// };

// app.get("/api/friends", function(req, res) {
//   return res.json(friendsData);
// });

// app.get("/api/friends/:friend", function(req, res) {
//   var chosen = req.params.friendsData;
//   res.sendFile(path.join(__dirname, "../public/survey.html"));
//   console.log(chosen);

//   for (var i = 0; i < friendsData.length; i++) {
//     if (chosen === friendsData[i].routeName) {
//       return res.json(friendsData[i]);
//     }
//   }

//   return res.json(false);
// });

// app.post("/api/friends", function(req, res) {
//   var newFriend = req.body;

//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newFriend);

//   friendsData.push(newFriend);

//   res.json(newFriend);
//   console.log(friendsData);
// });
