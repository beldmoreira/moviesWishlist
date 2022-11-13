/*
  Warnings:

  - You are about to drop the column `userId` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `movies` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_userId_fkey";

-- DropIndex
DROP INDEX "movies_title_userId_key";

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "userId";

-- DropTable
DROP TABLE "users";

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
