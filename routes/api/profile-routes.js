const router = require('express').Router();

// Checks if user is not logged in
const authCheck = (req, res, next) => {
    if(!req.user) {
      // If user is not logged in, redirect them to login page
      res.redirect('/auth/login');
    }
    else {
      // If user is logged in call next in router.get
      next();
    }
};

router.get('/', authCheck, (req, res) => {
  res.send('you are logged in, this is your profile : ' + req.user);

});


module.exports = router;
