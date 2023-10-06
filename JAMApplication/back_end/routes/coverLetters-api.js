//  ======================================================================== //  
//  ==-------------------         ROUTES          ------------------------==
//  ==-------------------   COVER LETTERS-API.JS  ------------------------==
//  ======================================================================== //  
  /** original notes
  * All routes for Job Application Data are defined here
  * Since this file is loaded in server.js into api/jobApplications,
  *   these routes are mounted onto /api/jobApplications
  * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
  */

//  import(s)             *-------------------------------------------------
  const express = require('express');
  const router  = express.Router();
  const db = require('../db/connection');

//  router.get('/')        *-------------------------------------------------
  router.get('/', (req, res) => {
    const query = `SELECT * FROM cover_letters`;
    console.log(query);
    db.query(query)
      .then(data => {
        const widgets = data.rows;
        res.json({ widgets });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

//  export(s)             *-------------------------------------------------
  module.exports = router;