var Friends = require("./app/data/friends.js");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  