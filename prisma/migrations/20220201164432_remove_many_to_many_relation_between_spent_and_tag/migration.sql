/*
  Warnings:

  - You are about to drop the `spent_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `spents` ADD COLUMN `tag_id` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `spent_tags`;
