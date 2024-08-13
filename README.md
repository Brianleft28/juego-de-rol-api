# juego-de-rol-api

### modelo de la base de datos

```SQL
CREATE TABLE `Users` (
  `id` integer PRIMARY KEY,
  `username` varchar(50) UNIQUE,
  `password_hash` varchar(255)
);

CREATE TABLE `Characters` (
  `id` integer PRIMARY KEY,
  `user_id` int UNIQUE,
  `items_id` int UNIQUE,
  `jobs_id` int UNIQUE DEFAULT 0,
  `name` varchar(50) UNIQUE,
  `level` INT DEFAULT 1,
  `experience` INT DEFAULT 0
);

CREATE TABLE `Items` (
  `id` integer PRIMARY KEY,
  `name` varchar(50),
  `description` text,
  `rarity` varchar(50)
);

CREATE TABLE `Jobs` (
  `id` integer PRIMARY KEY,
  `quest_id` int,
  `name` varchar(100),
  `description` text,
  `rarity_id` int
);

CREATE TABLE `Quest` (
  `id` integer PRIMARY KEY,
  `title` varchar(100),
  `description` text,
  `reward` INT
);

CREATE TABLE `Rarity` (
  `id` integer PRIMARY KEY,
  `name` varchar(50) UNIQUE
);

CREATE TABLE `Necronomicon` (
  `id` integer PRIMARY KEY,
  `monster_id` int UNIQUE,
  `region_id` int UNIQUE,
  `rarity_id` int,
  `description` text
);

CREATE TABLE `Monsters` (
  `id` integer PRIMARY KEY,
  `name` varchar(110) UNIQUE
);

CREATE TABLE `Region` (
  `id` integer PRIMARY KEY,
  `name` varchar(110) UNIQUE,
  `size` int DEFAULT 10
);

ALTER TABLE `Characters` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Jobs` ADD FOREIGN KEY (`id`) REFERENCES `Characters` (`jobs_id`);

ALTER TABLE `Items` ADD FOREIGN KEY (`id`) REFERENCES `Characters` (`items_id`);

ALTER TABLE `Quest` ADD FOREIGN KEY (`id`) REFERENCES `Jobs` (`quest_id`);

ALTER TABLE `Necronomicon` ADD FOREIGN KEY (`rarity_id`) REFERENCES `Rarity` (`id`);

ALTER TABLE `Necronomicon` ADD FOREIGN KEY (`monster_id`) REFERENCES `Monsters` (`id`);

ALTER TABLE `Jobs` ADD FOREIGN KEY (`rarity_id`) REFERENCES `Rarity` (`id`);

ALTER TABLE `Region` ADD FOREIGN KEY (`id`) REFERENCES `Necronomicon` (`region_id`);

```
