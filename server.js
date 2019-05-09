const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/api/auth');
const passportSetup = require('./config/passport-setup');

// Hooks up routes/api/items file
const items = require('./routes/api/items');

const app = express();

// Boderparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes, sets up routes/api/items to be used
app.use('/api/items', items);

// Use auth.js's routes
app.use('/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
