/*
  Warnings:

  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Video` table. All the data in the column will be lost.
  - Added the required column `body` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "name",
DROP COLUMN "text",
ADD COLUMN     "body" TEXT NOT NULL;
