--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==------------------- 06_ADDITIONAL_INFO.SQL  -------------------------==
--  =========================================================================

-- ADDITIONAL INFO TABLE --
--   drops and recreates additional_info table --

DROP TABLE IF EXISTS additional_info CASCADE;
CREATE TABLE additional_info (
  id                  SERIAL     PRIMARY KEY    NOT NULL,
  user_id             INTEGER    REFERENCES users(id),
  resume_id           INTEGER    REFERENCES resumes(id),
  name                VARCHAR,
  contactInfo         VARCHAR,
  education           VARCHAR,
  experience          VARCHAR,
  skills              VARCHAR
);


--  =====================================================================  --
--  =====================================================================  --
