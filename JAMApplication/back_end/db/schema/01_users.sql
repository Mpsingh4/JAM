--  USERS TABLES --
--   drops and recreates users table --

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  user_id     SERIAL PRIMARY KEY NOT NULL,
  first_name  VARCHAR(255) NOT NULL,
  last_name   VARCHAR(255) NOT NULL,
  username    VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  sub_id      SERIAL NOT NULL,
);
