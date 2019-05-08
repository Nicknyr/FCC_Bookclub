const express = require('express');
const router = express.Router();

// AUTHENTICATION
router.get('/login', (req, res) => {
  res.send('/');
})

// auth logout
router.get('/logout', (req, res) => {
  // Handle with Passportjs
  res.send('Logging out');
})

// auth with google
router.get('/google', (req, res) => {
  // handle with Passportjs
  res.send('Logging with with Google');
})

module.exports = router;
