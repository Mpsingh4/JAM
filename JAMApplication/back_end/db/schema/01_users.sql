--  =========================================================================
--  ==-------------------        SCHEMA           -------------------------==
--  ==-------------------     01_USERS.SQL        -------------------------==
--  =========================================================================

    -- drops and recreates users table

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id     SERIAL PRIMARY KEY  NOT NULL,
  first_name  VARCHAR(255)         NOT NULL,
  last_name   VARCHAR(255)         NOT NULL,
  email       VARCHAR(255)        NOT NULL,
  sub_id      VARCHAR(255)         NOT NULL
);


--  ========================================================================  --  
--  ========================================================================  --
