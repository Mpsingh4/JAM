-- RESPONSES TABLE --
--   drops and recreates RESPONSES table --

DROP TABLE IF EXISTS responses CASCADE;
CREATE TABLE responses (
  response_id         SERIAL PRIMARY KEY NOT NULL,
  app_id              INTEGER REFERENCES job_applications(app_id),
  interviewer_name    VARCHAR(255) NOT NULL
  reminder_days       VARCHAR(255) NOT NULL
  note                VARCHAR(255) NOT NULL
);
