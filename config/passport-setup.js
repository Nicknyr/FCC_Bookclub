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
// This way used to successfully write to the database, redirect the user back to '/' page, and output user data from API, hasn't work since I added cookie related serializeUser and deserializeUser
passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: '/auth/github/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    // This used to console.log user data from API, doesn't work now
    //console.log(profile);
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
          name: profile.displayName,
          username: profile.username,
          githubID: profile.id,
          profileUrl: profile.profileUrl,
          avatar: profile.photos[0].value
        }).save().then((newUser) => {
          console.log("New user created: " + newUser);
          // passes new user to serializeUser()
          done(null, newUser);
        })
      }
    })

  }
));
