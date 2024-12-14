/*
  Warnings:

  - Made the column `description` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "titleStyle" JSONB,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "publishedAt" DROP DEFAULT;
