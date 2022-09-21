DROP SCHEMA IF EXISTS webapp;
CREATE SCHEMA webapp;
USE webapp;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  email  VARCHAR(255) COLLATE utf8_bin,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME
);

INSERT INTO users SET name='石川朝香', email='asaka@posse.com', password=SHA("eddy");