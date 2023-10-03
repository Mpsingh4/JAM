//  =========================================================================
//  ==-------------------       SERVER.JS      ----------------------------==
//  =========================================================================


//  ======================   IMPORTS (REQUIRED)    =========================== 
  const express = require('express');
  const morgan = require('morgan');
  const sassMiddleware = require('./lib/sass-middleware');
  


//  ======================     CONFIGURATION       ===========================
//  load .env data       *------------------------------------------------
  require('dotenv').config();  

//  server config        *------------------------------------------------
  const app = express();
  const PORT = process.env.PORT || 8080;

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
  

//  ======================  SEPARATE RESOURCES ROUTES   =======================
  /** Original Notes
   *   - Separated Routes for each Resource
   *   - feel free to replace the example routes below with your own
   */
//  original routes      *------------------------------------------------
  const userApiRoutes = require('./routes/api/users-api');
  const widgetApiRoutes = require('./routes/api/widgets-api');
  const usersRoutes = require('./routes/users');

//  routes for JAM       *------------------------------------------------
  const jobApplicationsRoutes = require('./routes/jobApplications');

//  ======================   MOUNT ALL RESOURCES ROUTES  =======================
  /** Original Notes
   *  - Feel free to replace the example routes below with your own
   *  - Endpoints that return data (eg. JSON) usually start with `/api`
   *  - mount other resources here using the same pattern as below
   */

//  example resources    *------------------------------------------------
    app.use('/api/users', userApiRoutes);
    app.use('/api/widgets', widgetApiRoutes);
    app.use('/users', usersRoutes);
    app.use('/api/jobApplication', jobApplicationRoutes);
    

//  resources for JAM    *------------------------------------------------
    app.use('/jobApplications', jobApplicationRoutes);


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
//  =========================================================================
//  =========================================================================
