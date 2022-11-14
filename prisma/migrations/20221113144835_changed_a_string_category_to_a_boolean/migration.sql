/*
  Warnings:

  - You are about to drop the column `status` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "status",
ADD COLUMN     "hasBeenWatched" BOOLEAN NOT NULL DEFAULT false;
