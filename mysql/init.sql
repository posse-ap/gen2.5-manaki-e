DROP SCHEMA IF EXISTS webapp;
CREATE SCHEMA webapp;
USE webapp;

DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content VARCHAR(31) NOT NULL
);

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language VARCHAR(31) NOT NULL
);

DROP TABLE IF EXISTS contents_record;
CREATE TABLE contents_record (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  date DATETIME NOT NULL,
  content_number INT NOT NULL,
  content_hour INT NOT NULL,
  Foreign Key (content_number) REFERENCES contents(id)
);

DROP TABLE IF EXISTS languages_record;
CREATE TABLE languages_record (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  date DATETIME NOT NULL,
  language_number INT NOT NULL,
  language_hour INT NOT NULL,
  Foreign Key (language_number) REFERENCES languages(id)
);

INSERT INTO contents (content) VALUES ('N予備校'), ('ドットインストール'), ('POSSE課題');

INSERT INTO languages (language) VALUES ('HTML'), ('CSS'), ('JavaScript'), ('PHP'), ('Lalavel'), ('SQL'), ('SHELL'), ('情報システム基礎知識（その他）');

INSERT INTO contents_record (date, content_number, content_hour) VALUES ('2022-09-24', 1, 2), ('2022-09-24', 3, 2), ('2022-09-25', 1, 2);

INSERT INTO languages_record (date, language_number, language_hour) VALUES ('2022-09-24', 2, 4), ('2022-09-25', 4, 1), ('2022-09-25', 1, 1);