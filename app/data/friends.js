// Constructor function for creating friends objects
var Friends = function(gender, name, rating) {
  this.gender = gender;
  this.name = name;
  this.rating = rating;

  // Prints out slightly different information about a cast member based on their gender
  this.readProfile = function() {
      console.log(this.name + this.gender + this.rating);
  };
  this.addFriend = function(gender, name, rating) {
    this.name.push(new Friends(gender, name, rating));
  };
};

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = Friends;
