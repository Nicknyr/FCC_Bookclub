const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/api/auth');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const profileRoutes = require('./routes/api/profile-routes');
//const bookRoutes = require('./routes/api/book-routes');
const cors = require('cors');

// Hooks up routes/api/items file
const items = require('./routes/api/items');

const app = express();

app.use(cors());

// Boderparser Middleware
app.use(bodyParser.json());

// sets up session cookies
app.use(cookieSession({
  // Max age set to 1 day
  maxAge: 24 * 60 * 60 * 1000,
  // Uses cookieKey from keys file to encrypt
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes, sets up routes/api/items to be used
app.use('/api/items', items);

//app.use('/book', bookRoutes);

// Use auth.js's routes
app.use('/auth', authRoutes);
// Use profile-routes routes for profile page
app.use('/profile', profileRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
