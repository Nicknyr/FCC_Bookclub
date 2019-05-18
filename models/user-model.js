const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  username: String,
  githubID: String,
  profileUrl: String,
  avatar: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
