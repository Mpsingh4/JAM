--  =========================================================================
--  ==-------------------         SEEDS           -------------------------==
--  ==-------------------     01_USERS.SQL        -------------------------==
--  =========================================================================

-- USERS TABLE SEED --

-- Insert three users Manpreet, John, Jane --
INSERT INTO users ( first_name, last_name, email, sub_id) VALUES
  ( 'Manpreet', 'Singh', 'manpreet.singh@gmail.com', 1),
  ( 'John', 'Cloghesy', 'john.cloghesy@gmail.com', 2),
  ( 'Jane', 'Doe', 'jane.doe@gmail.com', 3);
