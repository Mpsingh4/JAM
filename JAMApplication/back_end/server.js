//  =========================================================================
//  ==-------------------       SERVER.JS      ----------------------------==
//  =========================================================================

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser'); // Add this import
const cors = require('cors'); // Add this import
//  =======================   IMPORTS (REQUIRED)    =========================
  //  require ex,mrgn,sass *-----------------------------------------------
    const express = require('express');
    const morgan = require('morgan');
    const sassMiddleware = require('./lib/sass-middleware');

  //  load .env data       *------------------------------------------------
    require('dotenv').config();


//  =======================     CONFIGURATION       =========================
  //  server config        *------------------------------------------------
    const app = express();
    const PORT = process.env.PORT || 8080;

const { getUserBySubId, insertUser } = require('../back_end/public/scripts/getUsers');
const corsOption= {

  origin: "http://localhost:3000"
}
app.use(bodyParser.json());
app.use(cors(corsOption)); // Enable CORS for your frontend after this

  //  set view engine      *------------------------------------------------
    app.set('view engine', 'ejs');

  //  middleware           *------------------------------------------------
   /** Original Notes
     * - Load the logger first so all (static) HTTP requests are logged to STDOUT
     */
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

  //  logger output style  *------------------------------------------------
    /** Original Notes
     *  - 'dev' - concise output colored by response status for development use
     *          - the status token will be colored
     *             - red for server error codes,   yellow for client error codes,
     *             - cyan for redirection codes,   uncolored for all other codes.
     */
    app.use(
      '/styles',
      sassMiddleware({
        source: __dirname + '/styles',
        destination: __dirname + '/public/styles',
        isSass: false, // false => scss, true => sass
      })
    );


//  =======================  SEPARATE RESOURCES ROUTES   ====================
  /**  Original Notes
   *   - Separated Routes for each Resource
   *   - feel free to replace the example routes below with your own
   */
  //  Original routes       *------------------------------------------------
    // API & User Routes
    /** used to load router module in the app - 1st part  */
    const userApiRoutes = require('./routes/users-api');
    const widgetApiRoutes = require('./routes/widgets-api');
    const usersRoutes = require('./routes/users');

  //  Routes for JAM       *------------------------------------------------
    // API Routes
    const coverLettersApiRoutes = require('./routes/coverLetters-api');
    const jobApplicationsApiRoutes = require('./routes/jobApplications-api');
    const responsesApiRoutes = require('./routes/responses-api');
    const resumesApiRoutes = require('./routes/resumes-api');
    // User Routes
    const coverLettersRoutes = require('./routes/coverLetters');
    const jobApplicationsRoutes = require('./routes/jobApplications');
    const responsesRoutes = require('./routes/responses');
    const resumesRoutes = require('./routes/resumes');


//  ======================= MOUNT ALL RESOURCES ROUTES   ====================
  /**  Original Notes
   *  - Feel free to replace the example routes below with your own
   *  - Endpoints that return data (eg. JSON) usually start with `/api`
   *  - mount other resources here using the same pattern as below
   */
  //  Original routes       *------------------------------------------------
    // API & User Routes
    /** used to load router module in the app - 2nd part   */
    app.use('/api/users', userApiRoutes);
    app.use('/api/widgets', widgetApiRoutes);
    app.use('/users', usersRoutes);

// POST request to handle Auth0 user data ------

app.post('/api/login', async (req, res) => {
  try {
    const { sub, email, family_name, given_name } = req.body;

    // Check if user with the given sub_id from auth0 already exists in db
    const existingUser = await getUserBySubId(sub);
    console.log(existingUser)
    if (existingUser.rows.length !== 0) {
      // user already exists, send the existing user data back to the frontend
      res.status(200).json(existingUser.rows);
    } else {
      // user doesn't exist, insert the new user into the database
      const newUser = await insertUser({ sub, email, family_name, given_name }); // Implement this function somewhere not sure where

      // Send the new inserted user data back to the frontend hopefully
      res.status(201).json(newUser.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
//  Resources for JAM    *------------------------------------------------
  // API Routes
    app.use('/api/coverLetters', coverLettersApiRoutes);
    app.use('/api/jobApplications', jobApplicationsApiRoutes);
    app.use('/api/responses', responsesApiRoutes);
    app.use('/api/resumes', resumesApiRoutes);


//  ======================     HOME PAGE          ==========================
  /**
   * Home page
   *  - Warning: avoid creating more routes in this file!
   *  - Separate them into separate routes files (see above)
   */

//  app.get              *------------------------------------------------
  app.get('/', (req, res) => {
    res.render('index');
  });

  //  app.listen           *------------------------------------------------
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });


//  =======================================================================  //
//  =======================================================================  //

// app.post('/auth/callback', async (req, res) => {
//   try {
//     const { sub, email, name, picture } = req.body;

//     // Check if user with the given sub_id from auth0 already exists in db
//     const existingUser = await getUserBySubId(sub);

//     if (existingUser) {
//       // user already exists, send the existing user data back to the frontend
//       res.status(200).json(existingUser);
//     } else {
//       // user doesn't exist, insert the new user into the database
//       const newUser = await insertUser({ sub, email, name, picture });

//       // Send the new inserted user data back to the frontend
//       res.status(201).json(newUser);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
