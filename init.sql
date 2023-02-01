CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO roles VALUES (1,"customer","2023-01-31 13:02:52","2023-01-31 13:02:52");
INSERT INTO roles VALUES (2,"business","2023-01-31 13:02:52","2023-01-31 13:02:52");
INSERT INTO users VALUES ('1', 'customer1', 'customer1@gmail.com', '$2a$08$7aHwoAVoCDFBIoiIrAahHuoDWEOXp9RmXid5vvd5R9aarq3NSBXIK', '2023-02-01 12:58:17', '2023-02-01 12:58:17');
INSERT INTO users VALUES ('2', 'cutsomer2', 'cutsomer2@gmail.com', '$2a$08$7aHwoAVoCDFBIoiIrAahHuoDWEOXp9RmXid5vvd5R9aarq3NSBXIK', '2023-02-01 12:58:17', '2023-02-01 12:58:17');
INSERT INTO users VALUES ('3', 'business1', 'business1@gmail.com', '$2a$08$7aHwoAVoCDFBIoiIrAahHuoDWEOXp9RmXid5vvd5R9aarq3NSBXIK', '2023-02-01 12:58:17', '2023-02-01 12:58:17');
INSERT INTO users VALUES ('4', 'business2', 'business2@gmail.com', '$2a$08$7aHwoAVoCDFBIoiIrAahHuoDWEOXp9RmXid5vvd5R9aarq3NSBXIK', '2023-02-01 12:58:17', '2023-02-01 12:58:17');
)
