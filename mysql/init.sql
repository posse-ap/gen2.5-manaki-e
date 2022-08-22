DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions (name) VALUES ("東京の難読地名クイズ"), ("広島の難読地名クイズ");

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  big_question_id INT NOT NULL,
  image VARCHAR(255) NOT NULL,
  foreign key(id) references big_questions(id)
);

INSERT INTO questions (big_question_id, image) VALUES (1,"takanawa.png"), (1, "kameido.png"), (2, "mukainada.png");

DROP TABLE IF EXISTS choices;

CREATE TABLE choices (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  valid INT NOT NULL,
  foreign key(id) references questions(id)
);

INSERT INTO choices (question_id, name, valid) VALUES 
(1, "たかなわ", 1),
(1, "たかわ", 0),
(1, "こうわ", 0),
(2, "かめと", 0),
(2, "かめど", 0),
(2, "かめいど", 1),
(3, "むこうひら", 0),
(3, "むきひら", 0),
(3, "むかいなだ", 1);