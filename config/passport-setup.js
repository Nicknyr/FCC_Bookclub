const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
     done(null, user);
  });
});

// Github
// This way successfully writes to the database, redirects the user back to '/' page, and successfully outputs user data from API
passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: '/auth/github/redirect'
  }, (accessToken, refreshToken, profile, cb, done) => {
    console.log(profile);
    // Check if user already exists in DB
    User.findOne({githubID: profile.id}).then((currentUser) => {
      if(currentUser) {
        // User is in DB already
        console.log("User already exists in DB");
        // Passes existing user to serializeUser()
        done(null, currentUser);
      }
      else {
        // If user doesn't exist, create it
        new User({
          username: profile.displayName,
          githubID: profile.id
        }).save().then((newUser) => {
          console.log("New user created: " + newUser);
          // passes new user to serializeUser()
          done(null, newUser);
        })
      }
    })

  }
));
