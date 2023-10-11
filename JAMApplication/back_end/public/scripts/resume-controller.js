const db = require('../db/connection');

// create and store a new resume
const createResume = async (req, res) => {
  try {
    const { name, contactInfo, education, experience, skills } = req.body;
    const query = `
      INSERT INTO resumes (name, contact_info, education, experience, skills)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [name, contactInfo, education, experience, skills];
    const result = await db.query(query, values);

    // send response
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createResume,
};
