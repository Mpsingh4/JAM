//  =========================================================================
//  ==----------    QUERIES: JOB_APPLICATIONS.JS     ----------------------==
//  =========================================================================

//  =====================   REQUIRED / IMPORTS    ===========================
//  required            *--------------------------------------------------
const db = require('../connection');

//  =====================          QUERIES        ===========================
//  getJobApplications  *--------------------------------------------------
const getJobApplications = () => {
  return db.query('SELECT * FROM job_applications;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getJobApplications };
