DROP SCHEMA IF EXISTS webapp;
CREATE SCHEMA webapp;
USE webapp;

DROP TABLE IF EXISTS contents;
CREATE TABLE contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content VARCHAR(31) NOT NULL
);

INSERT INTO contents (content) VALUES ('N予備校'), ('ドットインストール'), ('POSSE課題');

DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language VARCHAR(31) NOT NULL
);

INSERT INTO languages (language) VALUES ('HTML'), ('CSS'), ('JavaScript'), ('PHP'), ('Lalavel'), ('SQL'), ('SHELL'), ('情報システム基礎知識（その他）');

DROP TABLE IF EXISTS record;
CREATE TABLE record (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  content_id INT NOT NULL,
  language_id INT NOT NULL,
  hour INT NOT NULL,
  Foreign Key (content_id) REFERENCES contents(id),
  Foreign Key (language_id) REFERENCES languages(id)
);

INSERT INTO record (content_id, language_id, hour) VALUES (1,1,5), (1,2,3), (2,2,1), (3,5,3), (2,4,2), (2,1,8), (1,6,2), (2,8,3);