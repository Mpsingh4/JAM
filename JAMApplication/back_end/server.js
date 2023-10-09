const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const sassMiddleware = require('./lib/sass-middleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./db/connection');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.set('view engine', 'ejs');

// Routes
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const coverLettersApiRoutes = require('./routes/coverLetters-api');
const jobApplicationsApiRoutes = require('./routes/jobApplications-api');
const responsesApiRoutes = require('./routes/responses-api');
const resumesApiRoutes = require('./routes/resumes-api');
const coverLettersRoutes = require('./routes/coverLetters');
const jobApplicationsRoutes = require('./routes/jobApplications');
const responsesRoutes = require('./routes/responses');
const resumesRoutes = require('./routes/resumes');
const { getUserBySubId, insertUser } = require('./public/scripts/getUsers')
// const createResume = require('./public/scripts/resume-controller');

// Mounting routes
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/api/coverLetters', coverLettersApiRoutes);
app.use('/api/jobApplications', jobApplicationsApiRoutes);
app.use('/api/responses', responsesApiRoutes);
app.use('/api/resumes', resumesApiRoutes);

// POST request to handle Auth0 user data
app.post('/api/login', async (req, res) => {
  try {
    const { sub, email, family_name, given_name } = req.body;
    const existingUser = await getUserBySubId(sub);

    if (existingUser.rows.length !== 0) {
      res.status(200).json(existingUser.rows);
    } else {
      const newUser = await insertUser({ sub, email, family_name, given_name });
      res.status(201).json(newUser.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/api/resumes/create', async (req, res) => {
  try {
    const { name, contactInfo, education, experience, skills, userID } = req.body;

    // check to make sure name is not null
    if (!name) {
      return res.status(400).json({ message: 'Name of user is required.' });
    }

    const query = `
      INSERT INTO resumes (name_of_user, contact_info, education, experience, skills, user_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [ name, contactInfo, education, experience, skills, userID];
    const result = await db.query(query, values);

    // send response
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

