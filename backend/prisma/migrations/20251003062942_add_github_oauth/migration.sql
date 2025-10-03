/*
  Warnings:

  - A unique constraint covering the columns `[githubId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `githubId` VARCHAR(191) NULL,
    ADD COLUMN `provider` VARCHAR(191) NOT NULL DEFAULT 'local',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    MODIFY `password` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_githubId_key` ON `User`(`githubId`);
