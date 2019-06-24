const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const testSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Test = mongoose.model('test', testSchema);

module.exports = Test;
