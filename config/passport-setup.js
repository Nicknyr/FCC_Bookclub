const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

/* This way follows the passportjs github strategy guide, uses findOrCreate
// Github
passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: '/auth/github/redirect'
  }, (accessToken, refreshToken, profile, cb) => {
    console.log(profile);

    new User({
      username: profile.displayName,
      githubID: profile.id
    }).save().then((newUser) => {
      console.log("New user created: " + newUser);
    })

    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
*/

// Github
// This way successfully writes to the database, redirects the user back to '/' page, and successfully outputs user data from API
passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: '/auth/github/redirect'
  }, (accessToken, refreshToken, profile, cb) => {
    console.log(profile);

    new User({
      username: profile.displayName,
      githubID: profile.id
    }).save().then((newUser) => {
      console.log("New user created: " + newUser);
    })

  }
));
