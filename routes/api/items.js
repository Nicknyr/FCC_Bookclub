const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    // Sorts items by date in descending(-1) order
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an Item
// @access Public
router.post('/', (req, res) => {
  // Creates new item
  const newItem = new Item({
    name: req.body.name
  });

  // Saves newItem in DB
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc  DELETE an Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;
