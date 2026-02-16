/*
  Warnings:

  - You are about to drop the column `communication` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "communication",
ADD COLUMN     "notifications" TEXT;
