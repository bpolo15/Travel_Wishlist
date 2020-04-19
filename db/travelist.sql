DROP DATABASE IF EXISTS travelist_db;

CREATE DATABASE travelist_db;

USE travelist_db;

 CREATE TABLE IF NOT EXISTS `Users` 
 (`id` INTEGER NOT NULL auto_increment , 
 `email` VARCHAR(255) NOT NULL UNIQUE, 
 `password` VARCHAR(255) NOT NULL, 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 PRIMARY KEY (`id`));

 CREATE TABLE IF NOT EXISTS `Destinations` 
 (`id` INTEGER NOT NULL auto_increment , 
 `location` VARCHAR(255), 
 `picture` VARCHAR(255), 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 `UserId` INTEGER NOT NULL, 
 PRIMARY KEY (`id`), 
 FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS `Activities` 
(`id` INTEGER NOT NULL auto_increment , 
`activity` VARCHAR(255), 
`picture` VARCHAR(255), 
`note` VARCHAR(255), 
`resource` VARCHAR(255), 
`description` VARCHAR(255), 
`createdAt` DATETIME NOT NULL, 
`updatedAt` DATETIME NOT NULL, 
`DestinationId` INTEGER NOT NULL, 
PRIMARY KEY (`id`), 
FOREIGN KEY (`DestinationId`) REFERENCES `Destinations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);
