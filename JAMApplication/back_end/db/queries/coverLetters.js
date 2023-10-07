//  ======================================================================== //  
//  ==-------------------        QUERIES         -------------------------==
//  ==-------------------     coverLetters.JS     -------------------------==
//  ======================================================================== //  

//  import(s)             *-------------------------------------------------
  const db = require('../connection');

//  query getCoverLetters *-------------------------------------------------
  const getCoverLetters = () => {
    return db.query('SELECT * FROM cover_letters;')
      .then(data => {
        return data.rows;
      });
  };

//  export(s)             *-------------------------------------------------
  module.exports = { getCoverLetters };


//  ======================================================================== //
//  ======================================================================== //
