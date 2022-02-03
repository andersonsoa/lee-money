/*
  Warnings:

  - You are about to drop the column `period_id` on the `spents` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `spents` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to drop the `periods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cicle_id` to the `spents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `spents` DROP COLUMN `period_id`,
    ADD COLUMN `cicle_id` VARCHAR(191) NOT NULL,
    MODIFY `amount` DOUBLE NOT NULL;

-- DropTable
DROP TABLE `periods`;

-- CreateTable
CREATE TABLE `cicles` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
