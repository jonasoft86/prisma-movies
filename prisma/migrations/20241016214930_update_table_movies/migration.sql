/*
  Warnings:

  - The primary key for the `movie_rent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `movies` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `movie_rent` DROP FOREIGN KEY `movie_rent_movieId_fkey`;

-- AlterTable
ALTER TABLE `movie_rent` DROP PRIMARY KEY,
    MODIFY `movieId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userId`, `movieId`);

-- AlterTable
ALTER TABLE `movies` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `movie_rent` ADD CONSTRAINT `movie_rent_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
