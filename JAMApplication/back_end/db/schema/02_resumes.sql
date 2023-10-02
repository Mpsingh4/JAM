-- RESUMES TABLE --
--   drops and recreates RESUMES table --

DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  resume_id           SERIAL PRIMARY KEY NOT NULL,
  user_id             INTEGER REFERENCES users(user_id),
  resume_title        VARCHAR(255) NOT NULL,
  contents            VARCHAR NOT NULL
);
