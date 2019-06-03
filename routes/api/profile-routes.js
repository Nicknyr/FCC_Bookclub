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
  const newBook = new Book({
    books: {
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      genre: req.body.genre
    }
  })

  newBook.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send("Error posting book to DB");
    })
});

router.post('/', urlencodedParser, (req, res) => {
  console.log(req.body);

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    githubID: req.body.githubID,
    profileUrl: req.body.profileUrl,
    avatar: req.body.avatar,
    books: {
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      genre: req.body.genre
    }
  });

  newUser.save()
    .then(data => {
       User.findOne({ name: "Nick Kinlen" }).then(record => {
        console.log("Found user : " + req.body.name);
      });

      res.json(data)
    })
    .catch(err => {
      res.send("Error posting to DB")
    });

});



module.exports = router;
