-- COVER LETTER TABLE --
--   drops and recreates Cover_Letter table --

DROP TABLE IF EXISTS cover_letters CASCADE;
CREATE TABLE cover_letters (
  cover_letter_id     SERIAL PRIMARY KEY NOT NULL,
  user_id             INTEGER REFERENCES users(user_id),
  resume_id           INTEGER REFERENCES resumes(resume_id),
  contents            VARCHAR NOT NULL
);
