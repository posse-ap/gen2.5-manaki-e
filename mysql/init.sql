DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

DROP DATABASE IF EXISTS big_questions;

CREATE TABLE big_questions (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO big_questions (name) VALUES
("東京の難読地名クイズ"),
("広島県の難読地名クイズ");