let db = require("./db.js");

module.exports.handleSignup = (email, password) => {
  //check if the email already exists
  //save the user to the database
  db.saveUser({
    email,
    password,
  });
  //send welcome email
};
