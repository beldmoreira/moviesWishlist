/*
  Warnings:

  - You are about to drop the column `Rating` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "Rating",
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;
