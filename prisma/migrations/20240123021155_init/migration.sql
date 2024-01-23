-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) NOT NULL,
    `description` VARCHAR(50) NOT NULL,
    `due_date` DATETIME(3) NOT NULL,
    `status` ENUM('pending', 'complete') NOT NULL,

    UNIQUE INDEX `tasks_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
