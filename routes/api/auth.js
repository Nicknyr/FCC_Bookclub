const express = require('express');
const router = express.Router();
const passport = require('passport');

// AUTHENTICATION
// localhost:5000/auth/login
router.get('/login', (req, res) => {
  res.send('log in page');
})

// auth logout
router.get('/logout', (req, res) => {
  // Handle with Passportjs
  res.send('Logging out');
})

// auth with github
// localhost:5000/auth/github
router.get('/github', passport.authenticate('github', {
  scope: ['profile']
}));

// callback route for github to redirect to
// localhost:5000/auth/github/redirect
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  //res.send(req.user.displayName);
  //res.send('You reached the callback URI');
  res.redirect('http://localhost:3000/profile/');
});


module.exports = router;
