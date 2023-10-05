// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const router = express.Router();

const PORT = process.env.PORT || 8080;
const app = express();

const { getUserBySubId, insertUser } = require('../back_end/public/scripts/getUsers');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// POST request to handle Auth0 user data ------
router.post('/profile', async (req, res) => {
  try {
    const { sub, email, name, picture } = req.body;

    // Check if the user with the given sub_id (Auth0 user ID) already exists in the database
    const existingUser = await getUserBySubId(sub);

    if (existingUser) {
      // User already exists, send the existing user data back to the frontend
      res.status(200).json(existingUser);
    } else {
      // User doesn't exist, insert the new user into the database
      const newUser = await insertUser({ sub, email, name, picture }); // Implement this function

      // Send the newly inserted user data back to the frontend
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
