/*const express = require('express');
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
  console.log("Book added from book-routes");

  const newBook = new Book({
    bookTitle: req.body.bookTitle,
    author: req.body.author,
    genre: req.body.genre
  });

  newBook.save()
    .then(book => {
      res.json(book)
    })
    .catch(err => {
      res.send("Error posting to DB")
    });
});


module.exports = router;
*/
