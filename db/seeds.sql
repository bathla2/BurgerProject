INSERT into burgers (name, eat)
VALUES
("burger 1", false), ("burger 2", true)
;

SELECT * FROM burgers;
DELETE FROM burgers WHERE id>1 ;

UPDATE burgers 
SET eat =  1
WHERE id = 1;

select * from burgers;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

SELECT * FROM chirps;

DROP DATABASE IF EXISTS `sequelize_library`;
CREATE DATABASE `sequelize_library`;
