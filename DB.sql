CREATE DATABASE `bunny`; 

USE bunny;

CREATE TABLE `users_tasks` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`Id`)
);

INSERT INTO 
	users (Name)
VALUES
	('Misha Cartagena'),
    ('Nala Cartagena'),
    ('Oliver Castro'),
	('Felipe Bedoya');