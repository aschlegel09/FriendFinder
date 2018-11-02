// Constructor function for creating friends objects
var Friends = function(name, image) {
  this.name = name;
  this.image = image;
  this.rating = rating;

  // Prints out slightly different information about a cast member based on their rating
  this.readProfile = function() {
      console.log(this.name + this.image + this.rating);
  };
  this.addFriend = function(name, image, rating) {
    this.name.push(new Friends(name, image, rating));
  };
};

// CRUD HERE

// Exporting our Friend constructor. We will require it in server.js
module.exports = Friends;

