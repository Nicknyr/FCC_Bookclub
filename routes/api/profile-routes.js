const router = require('express').Router();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// localhost:3000/profile

// User Model
const User = require('../../models/user-model');
const Book = require('../../models/book-model');

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


router.post('/', urlencodedParser, (req, res) => {
  //console.log("req.body in post : " + req.body);
  //console.log("req.body.bookTitle :" + req.body.bookTitle);
  //console.log("Book added from profile-routes");

  // Access signed in user's DB id with req.session.passport.user

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    githubID: req.body.githubID,
    profileUrl: req.body.profileUrl,
    avatar: req.body.avatar,
    fullName: req.body.fullName,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    books: {
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      genre: req.body.genre
    }
  });

  newUser.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.send("Error posting to DB")
    });

    var myId = "5cf9e16edecd7d0c661eaffa";

    console.log("req.session.passport.user : " + req.session.passport.user);
/*
    newUser.findOneAndUpdate({name: 'Mario',  _id: req.session.passport.user}, {name: 'Luigi'}).then(() => {
      newUser.findOne({_id: newUser._id}).then(result => {
        console.log(result);
      })
    })


    /*
    User.findOne({ 'name': 'Nick Kinlen'}, (err, person) => {
      if (err) return handleError(err);
      console.log("Found myself in DB : " + person);
    })

    newUser.updateOne({_id: req.session.passport.user}, () => {

    });
    */

});



module.exports = router;
