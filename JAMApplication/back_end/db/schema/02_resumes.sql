--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==-------------------    02_RESUMES.SQL       -------------------------==
--  =========================================================================

--   drops and recreates RESUMES table --

DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id                  SERIAL PRIMARY KEY  NOT NULL,
  user_id             INTEGER REFERENCES users(id),
  resume_title        VARCHAR(255)        NOT NULL,
  contents            VARCHAR             NOT NULL
);
contact_info, education, experience, skills

--  =====================================================================  --
--  =====================================================================  --
