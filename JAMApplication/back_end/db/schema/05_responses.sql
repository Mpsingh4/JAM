--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==-------------------   05_RESPONSES.SQL      -------------------------==
--  =========================================================================

-- RESPONSES TABLE --
    -- drops and recreates RESPONSES table --
    -- TIMEZONE  1999-01-08 04:05:06+02 (with timezone + or - 2 digits =+02)

DROP TABLE IF EXISTS responses CASCADE;
CREATE TABLE responses (
  response_id         SERIAL  PRIMARY KEY     NOT NULL,
  app_id              INTEGER REFERENCES job_applications(app_id),
  interviewer_name    VARCHAR(255)            NOT NULL,
  reminder_days       INTEGER,
  note                VARCHAR
);


--  =====================================================================  --  
--  =====================================================================  --  