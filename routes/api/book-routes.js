const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


//Book Model
const Book = require('../../models/book-model');


router.get('/', (req, res) => {
  res.send('hi')
});

router.post('/', urlencodedParser, (req, res) => {
  console.log(req.body);

  const newBook = new Book({
    bookTitle: req.body.bookTitle,
    author: req.body.author,
    genre: req.body.genre
  });

  newBook.save()
    .then(book => {
      res.json(book)
      //res.send("Saved book to DB")
    })
    .catch(err => {
      res.send("Error posting to DB")
      //console.log("Error is : " + err);
    });
});


module.exports = router;
