-- JOB APPLICATION TABLE --
--   Inserts four applications 1 x Manpreet, 2 x John, 1 x Jane --

-- Manpreet"s Application (1) --
INSERT INTO job_applications (app_id, user_id, resume_id, job_title, company_name, application_date, application_method, company_response) VALUES
  (11, 1, 11, 'Front End Developer', 'Google', '2023-10-15 10:23:00+05', 'online application', 'interview');

-- John"s Applications (2) --
INSERT INTO job_applications (app_id, user_id, resume_id, job_title, company_name, application_date, application_method, company_response) VALUES
  (21, 2, 21, 'Front End Developer', 'Microsoft', '2023-10-13 10:23:00+07', 'online application', 'interview'),
  (22, 2, 22, 'Back End Developer', 'Google', '2023-10-16 12:23:00+07', 'online application', 'nothing yet');


-- Jane"s Application (1) --
INSERT INTO job_applications (app_id, user_id, resume_id, job_title, company_name, application_date, application_method, company_response) VALUES
  (31, 3, 31, 'Front End Developer', 'Little Web Company', '2023-09-15 14:23:00+05', 'online application', 'interview');
