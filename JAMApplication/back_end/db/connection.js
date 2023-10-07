//  =========================================================================
//  ==-------------------       CONNECTION.JS       -----------------------==
//  =========================================================================
  /**
   * NOTES: REGARDING ENTIRE FILE - CONNECTION.JS
   * Objective - file implements connection/link client facing app & pg database
   * File Structure -  six areas / components as follows:
   *  IMPORT NODE-PG LIBRARY
   *   1. Import/require node-pg library -
   *  DB CONFIGURATION & DB CONNECTION OBJECTS
   *   2. create configuration object to hold db information
   *       - references .env file especially for sensitive info (ie, db password)
   *   3. create connection object via node-pg's pool/client
   *   4. reference/link config object with connection object
   *   5. add explicit instructions to connect to db
   *  EXPORT DB CONNECTION OBJECT
   *   6. export db connection functionality to application (front & back)
	 */


//  ======================    IMPORTS (REQUIRED)    =========================
//  node-pg library      *------------------------------------------------
  const { Pool } = require('pg');
  require('dotenv').config(); //needed? -> see back_end/bin/resetdb.js


//  ======================       DB CONFIGURATION   =========================
//  db config: dbParams  *------------------------------------------------
  const dbParams = {
    host:process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };


//  ====================== DB CONNECTION OBJECTS    =========================
//  db connect: Pool     *-----------------------------------------------
  const db = new Pool(dbParams);

//  connect: command     *-----------------------------------------------
  db.connect();


//  ======================    IMPORTS (REQUIRED)    =========================
//  export: db object    *------------------------------------------------
  module.exports = db;


//  =========================================================================
//  =========================================================================
