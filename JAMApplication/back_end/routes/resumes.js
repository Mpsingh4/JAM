//  ======================================================================== //  
//  ==-------------------         ROUTES         -------------------------==
//  ==-------------------       RESUMES.JS       -------------------------==
//  ======================================================================== // 
  /** original notes
   *   All routes for Users are defined here
   *   Since this file is loaded in server.js into /users, these routes 
   *   are mounted onto /users
   *   See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
   */

//  import(s)             *-------------------------------------------------
  const express = require('express');
  const router  = express.Router();

//  router.get('/')        *-------------------------------------------------
  router.get('/', (req, res) => {
    res.render('resumes');
  }); 

//  export(s)             *-------------------------------------------------
  module.exports = router;
