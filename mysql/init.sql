DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions (name) VALUES ("東京の難読地名クイズ"), ("広島の難読地名クイズ");