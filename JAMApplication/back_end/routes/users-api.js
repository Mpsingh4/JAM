//  ======================================================================== //  
//  ==-------------------         ROUTES         -------------------------==
//  ==-------------------      USERS-API.JS      -------------------------==
//  ======================================================================== //  
  /** original notes
   * All routes for User Data are defined here
   * Since this file is loaded in server.js into api/users,
   *   these routes are mounted onto /api/users
   * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
   */

//  import(s)             *-------------------------------------------------
  const express = require('express');
  const router  = express.Router();
  const userQueries = require('../db/queries/users');

//  router.get('/')        *-------------------------------------------------
  router.get('/', (req, res) => {
    userQueries.getUsers()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

//  export(s)             *-------------------------------------------------
  module.exports = router;
