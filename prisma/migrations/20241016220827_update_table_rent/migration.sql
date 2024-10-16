/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `movie_rent` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `movie_rent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `movie_rent` DROP COLUMN `assignedAt`,
    DROP COLUMN `assignedBy`;
