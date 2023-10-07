/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const jobApplicationsQueries = require('../../db/queries/jobApplications');


router.get('/', (req, res) => {
  jobApplicationsQueries.getJobApplications()
    .then(jobApplications => {
      res.json( jobApplications );
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.delete('/', (req, res) => {
  jobApplicationsQueries.getJobApplications()
    .then(jobApplications => {
      res.json( jobApplications );
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
