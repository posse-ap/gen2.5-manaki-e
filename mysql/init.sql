DROP SCHEMA IF EXISTS webapp;

CREATE SCHEMA webapp;

USE webapp;

DROP TABLE IF EXISTS contents;

CREATE TABLE
    contents (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        content VARCHAR(31) NOT NULL
    );

INSERT INTO contents (content)
VALUES ('N予備校'), ('ドットインストール'), ('POSSE課題');

DROP TABLE IF EXISTS languages;

CREATE TABLE
    languages (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        language VARCHAR(31) NOT NULL
    );

INSERT INTO
    languages (language)
VALUES ('HTML'), ('CSS'), ('JavaScript'), ('PHP'), ('Lalavel'), ('SQL'), ('SHELL'), ('情報システム基礎知識');

DROP TABLE IF EXISTS post;

CREATE TABLE
    post (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        date DATETIME NOT NULL,
        content_id INT NOT NULL,
        language_id INT NOT NULL,
        hour INT NOT NULL,
        Foreign Key (content_id) REFERENCES contents(id),
        Foreign Key (language_id) REFERENCES languages(id)
    );

INSERT INTO
    post (
        date,
        content_id,
        language_id,
        hour
    )
VALUES ('2022-09-01', 1, 1, 5), ('2022-10-01', 1, 2, 3), ('2022-09-01', 2, 2, 1), ('2022-09-01', 3, 5, 3), ('2022-10-01', 2, 4, 2), ('2022-09-01', 2, 1, 8), ('2022-10-01', 1, 6, 2), ('2022-08-01', 2, 8, 3), ('2022-10-02', 3, 3, 1), ('2022-10-02', 3, 2, 3), ('2022-10-03', 3, 3, 1), ('2022-10-03', 3, 1, 2), ('2022-10-04', 3, 1, 2), ('2022-10-05', 3, 3, 4), ('2022-10-05', 3, 6, 2), ('2022-10-06', 3, 6, 1), ('2022-10-07', 3, 4, 3), ('2022-10-08', 3, 4, 3), ('2022-10-08', 3, 2, 4), ('2022-10-09', 3, 1, 3), ('2022-10-11', 3, 2, 4), ('2022-10-12', 3, 5, 2), ('2022-10-13', 3, 2, 1), ('2022-10-13', 3, 1, 2), ('2022-10-13', 3, 1, 5), ('2022-10-16', 3, 6, 3), ('2022-10-17', 3, 6, 2), ('2022-10-17', 3, 4, 3), ('2022-10-17', 3, 6, 6), ('2022-10-19', 3, 7, 5), ('2022-10-19', 3, 1, 1), ('2022-10-20', 3, 2, 10), ('2022-10-22', 3, 1, 8), ('2022-10-25', 3, 8, 1), ('2022-10-27', 3, 8, 1), ('2022-10-27', 3, 1, 4), ('2022-10-29', 3, 1, 2), ('2022-10-30', 3, 1, 1);