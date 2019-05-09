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
  //scope: ['profile']
}));

// callback route for github to redirect to
// localhost:5000/auth/github/redirect
router.get('/github/redirect', (req, res) => {
  res.send('You reached the callback URI');
})


module.exports = router;
