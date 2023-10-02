-- JOB APPLICATION TABLE --
--   drops and recreates Job_Applications table --

DROP TABLE IF EXISTS job_applications CASCADE;
CREATE TABLE job_applications (
  app_id              SERIAL     PRIMARY KEY    NOT NULL,
  user_id             INTEGER    REFERENCES users(user_id),
  resume_id           INTEGER    REFERENCES resumes(resume_id),
  job_title           VARCHAR(75)               NOT NULL,
  company_name        VARCHAR(255)              NOT NULL,
  application_date    TIMESTAMP WITH TIME ZONE  NOT NULL,
  application_method  VARCHAR(100),
  company_response    VARCHAR
);
