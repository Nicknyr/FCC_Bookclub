const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Test route
// localhost:5000/test

// Test model
const Test = require('../../models/test-model');

router.get('/', (req, res) => {
  res.send('Test page');
});

router.post('/', urlencodedParser, (req, res) => {
  const newItem = new Test ({
    name: req.body.name
  });

  // findOne is a method of Test model, not the newItem instance of Test
  // newItem.findOne is not a function
  // Test.findOne successfully finds the Milk item
  /*
  Test.findOne({ name: 'Milk' }, function (err, item) {
    console.log("item in test-route contains :" + item);
  });
  */

  Test.findOneAndUpdate({name: 'Luigi'}, {name: 'Mario'}).then(function() {
    Test.findOne({_id: newItem._id}).then(function(result) {
      console.log("result contains : " + result);
    })
  });

  newItem.save().then(item => res.json(item));

/*
  newItem.findOneAndUpdate({name: 'Milk'}, {name: 'Cookies'}, {new: true}, (err, doc) => {
    if (err) {
      console.log("Something wrong when updating data!");
    }
      console.log(doc);
    });

  newItem.findOneAndUpdate({name: 'Milk'}, {name: 'Cookies'}).then(() => {
    newItem.findOne({_id: newItem._id})
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log("Error : " + err);
    })
  })
*/
});






module.exports = router;
