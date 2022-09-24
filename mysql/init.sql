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

INSERT INTO contents SET content='N予備校';
INSERT INTO contents SET content='ドットインストール';
INSERT INTO contents SET content='POSSE課題';

INSERT INTO languages SET language='HTML';
INSERT INTO languages SET language='CSS';
INSERT INTO languages SET language='JavaScript';
INSERT INTO languages SET language='PHP';
INSERT INTO languages SET language='Lalavel';
INSERT INTO languages SET language='SQL';
INSERT INTO languages SET language='SHELL';
INSERT INTO languages SET language='情報システム基礎知識（その他）';

INSERT INTO contents_record SET date='2022-09-24', content_number=1, content_hour=6;
INSERT INTO contents_record SET date='2022-09-24', content_number=3, content_hour=2;
INSERT INTO contents_record SET date='2022-09-25', content_number=1, content_hour=3;

INSERT INTO languages_record SET date='2022-09-24', language_number=1, language_hour=4;
INSERT INTO languages_record SET date='2022-09-24', language_number=5, language_hour=1;
INSERT INTO languages_record SET date='2022-09-25', language_number=5, language_hour=3;