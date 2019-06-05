const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookTitle: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String
  }
});

const userSchema = new Schema({
  name: String,
  username: String,
  githubID: String,
  profileUrl: String,
  avatar: String,
  fullName: String,
  city: String,
  state: String,
  address: String,
  books: [bookSchema]
});

const User = mongoose.model('user', userSchema);

module.exports = User;
