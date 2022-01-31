/*
  Warnings:

  - You are about to drop the column `card_id` on the `spents` table. All the data in the column will be lost.
  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `payment_id` to the `spents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `spents` DROP COLUMN `card_id`,
    ADD COLUMN `payment_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `cards`;

-- CreateTable
CREATE TABLE `payments` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `limit` INTEGER NULL,
    `color` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `payments_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
