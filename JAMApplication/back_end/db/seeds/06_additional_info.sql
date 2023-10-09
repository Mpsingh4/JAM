--  =========================================================================
--  ==-------------------          SEEDS          -------------------------==
--  ==------------------- 06_ADDITIONAL_INFO.SQL  -------------------------==
--  =========================================================================

-- ADDITIONAL_INFO TABLE SEED --

-- Insert three users Manpreet, John, Jane --
INSERT INTO additional_info
  ( user_id, resume_id, name, contactInfo, education, experience, skills) VALUES
  ( 1, 11, 'John Doe', '123 Street NW New York, NY | 212-555-0149 | mrabb@email.com', 'a whole bunch of experience', 'skill_1, skill_2, skill_3' ),
  ( 2, 21, 'John Doe', '123 Street NW New York, NY | 212-555-0149 | mrabb@email.com', 'a whole bunch of experience', 'skill_1, skill_2, skill_3' ),
  ( 3, 31, 'John Doe', '123 Street NW New York, NY | 212-555-0149 | mrabb@email.com', 'a whole bunch of experience', 'skill_1, skill_2, skill_3' );



--  =====================================================================  --
--  =====================================================================  --
