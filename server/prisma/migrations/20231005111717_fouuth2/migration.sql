/*
  Warnings:

  - Made the column `imageUrl` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "note" SET NOT NULL;
