
const pgp = require('pg-promise')();
const db = require('../../db/connection'); // Import your database connection module


// Function to get a user by Auth0 sub_id
async function getUserBySubId(sub) {
  try {
    const user = await db.oneOrNone('SELECT * FROM users WHERE sub_id = $1', sub);
    return user;
  } catch (error) {
    throw error;
  }
}

// Function to insert a new user
async function insertUser(newUser) {
  try {
    const query = `
      INSERT INTO users (first_name, last_name, email, sub_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const user = await db.one(query, [
      newUser.first_name,
      newUser.last_name,
      newUser.email,
      newUser.sub_id,
    ]);

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserBySubId,
  insertUser,
};
