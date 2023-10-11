--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==-------------------    02_RESUMES.SQL       -------------------------==
--  =========================================================================

--   drops and recreates RESUMES table --

DROP TABLE IF EXISTS resumes CASCADE;
CREATE TABLE resumes (
  id                  SERIAL PRIMARY KEY  NOT NULL,
  user_id             INTEGER REFERENCES users(id),
  name_of_user        VARCHAR(255)        NOT NULL,
  contact_info        VARCHAR(255)        NOT NULL,
  education           TEXT                NOT NULL,
  experience          TEXT                NOT NULL,
  skills              TEXT                NOT NULL
);



--  =====================================================================  --
--  =====================================================================  --
