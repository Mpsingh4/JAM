--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==-------------------   03_cover_Letter.sql   -------------------------==
--  =========================================================================

--   drops and recreates Cover_Letter table --

DROP TABLE IF EXISTS cover_letters CASCADE;
CREATE TABLE cover_letters (
  id     SERIAL    PRIMARY KEY NOT NULL,
  user_id             INTEGER   REFERENCES users(id),
  resume_id           INTEGER   REFERENCES resumes(id),
  contents            VARCHAR   NOT NULL
);


--  =====================================================================  --  
--  =====================================================================  --  